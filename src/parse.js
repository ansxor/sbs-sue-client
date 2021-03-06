/* eslint-disable no-cond-assign */
/* eslint-disable no-mixed-operators */
/* eslint-disable no-redeclare */
/* eslint-disable no-loop-func */
/* eslint-disable no-func-assign */
/* eslint-disable no-unused-vars */
/* eslint-disable no-useless-concat */
/* eslint-disable no-useless-escape */
/* eslint-disable eqeqeq */
/* eslint-disable new-parens */
/* eslint-disable no-undef */
/* eslint-disable no-restricted-globals */
// TODO:
// the system for handling resizes (for autoscroll) is a big mess
// maybe try creating a custom event that gets triggered whenever
// an element's height will be changed (when clicking an image, activating a youtube player, etc.)
// and listen for it on the root element externally
// see: document.createEvent

var Parse = {
	lang:{}
}

// parser options
// this can be easily changed
// to control the output

// most functions should return an object containing:
//   .node or .nodes - the node(s) to insert
//   .branch - (optional if .node was specified) which node to insert children into
//   .block - `true` if the element is display: block or similar.

// most functions take input in the form of either
// (args) (or (args, contents) for things where the contents are plain text)
// (code blocks, [img], etc.)
// the unnamed argument uses a key of ""
// args without a value are set to true
// for example, `[tag=test key=value option]` would pass
// {"":"test", key:"value", option:true}
;(function() {
	function create(x) {
		return document.createElement(x)
	}
	function createText(x) {
		return document.createTextNode(x)
	}
	function creator(tag) {
		return function() {
			return {node:create(tag)}
		}
	}
	function newEvent(name) {
		var event = document.createEvent("Event");
		event.initEvent(name, true, true);
		return event;
	}
	function getYoutube(id, callback) {
		var x = new XMLHttpRequest
		x.open("GET", "https://www.googleapis.com/youtube/v3/videos?part=snippet&id="+id+"&key=AIzaSyBKka_xlF5pV4SMKLtQGIhOgyQsjF7UI-U");
		x.onload = function() {
			if (x.status != 200)
				return
			try {
				var json = JSON.parse(x.responseText)
				var video = json.items[0]
				callback(video);
			} catch(e){}
		}
		x.send();
	}
	function defaultProtocol() {
		if (window.location.protocol == 'http:')
			return 'http:'
		else
			return 'https:'
	}
	function getYoutubeID(url) {
		var match = url.match(/(?:https?:\/\/)?(?:www\.)?youtu\.?be(?:\.com)?\/?.*(?:watch|embed)?(?:.*v=|v\/|\/)([\w\-_]+)\&?/)
		if (match)
			return match[1]
		return null
	}
	// returns [protocol, rest of url] or [null, url]
	function urlProtocol(url) {
		var match = url.match(/^([-\w]+:)([^]*)$/)
		if (match)
			return [match[1].toLowerCase(), match[2]]
		return [null, url]
	}

	// so normally our path structure will look like
	// url#path?query#fragment
	// with #s in the path and query escaped with %
	// however, some browsers escape duplicate #s automatically, so this has to be dealt with somehow
	// I'm not sure of a good way which still allows # to be used in the path+query, though
	// may need to use a different character...
	function getPath() {
		var hash = decodeURIComponent(location.hash.substr(1))
		return hash.split("#")
	}
	
	Parse.options = {
		append: function (parent, child) {
			parent = parent.branch || parent.node

			if (child.nodes)
				child.nodes.forEach(function(x){
					parent.appendChild(x)
				})
			else
				parent.appendChild(child.node)
		},
		
		//========================
		// nodes without children:
		text: function(text) {
			return {node: createText(text)}
		},
		lineBreak: creator('br'),
		line: creator('hr'),
		// used for displaying invalid markup
		// reason is currently unused
		invalid: function(text, reason) {
			var node = create('span')
			node.className = 'invalid'
			node.title = reason
			node.textContent = text
			return {node:node}
		},
		// code block
		code: function(args, contents) {
			var language = args[""]
			var node = create('pre')
			node.setAttribute('data-lang', language)
			// node.innerHTML = highlightSB(contents, language)
			return {block:true, node:node}
		},
		// inline code
		icode: function(args, contents) {
			var node = create('code')
			node.textContent = contents
			return {node:node, block:false}
		},
		audio: function(args) {
			var node = create('audio')
			node.setAttribute('controls', "")
			node.setAttribute('src', args[""])
			return {block:true, node:node}
		},
		video: function(args) {
			var url = args[""]
			var node = create('video')
			node.setAttribute('controls', "")
			node.setAttribute('src', url)
			return {block:true, node:node}
		},
		youtube: function(args, preview) {
			var url = args[""]
			var protocol = defaultProtocol()
			var match = getYoutubeID(url)
			var link = create('a')
			var div = create('div')
			div.className = "youtube"
			div.appendChild(link)
			link.href = url
			
			if (match) {
				link.style.backgroundImage = 'url("'+protocol+"//i.ytimg.com/vi/"+match+"/mqdefault.jpg"+'")'
				var time = url.match(/[&?](?:t|start)=(\w+)/);
				var end = url.match(/[&?](?:end)=(\w+)/);
				var loop = url.match(/[&?]loop(=|&|$)/);
				if (!preview)
					getYoutube(match, function(data) {
						var title = create('div')
						title.className = 'pre videoTitle'
						title.textContent = data.snippet.title
						link.appendChild(title)
						link.appendChild(create('br'));
						title = create('div')
						title.className = 'pre videoAuthor'
						title.textContent = data.snippet.channelTitle
						link.appendChild(title)
					})
				var ifc = create('span')
				link.appendChild(ifc)
				link.onclick = function(e) {
					e.preventDefault()
					div.dispatchEvent(newEvent("beforeSizeChange"));
					var iframe = create('iframe')
					var src = "https://www.youtube-nocookie.com/embed/"+match+"?autoplay=1";
					if (time)
						src += "&start="+time[1];
					if (end)
						src += "&end="+end[1];
					if (loop)
						src += "&loop=1&playlist="+match;
					iframe.src = src;
					ifc.appendChild(iframe)
					div.className = "youtube playingYoutube"
					div.dispatchEvent(newEvent("afterSizeChange"));
				}
				var stop = create('button')
				stop.textContent = "x"
				stop.onclick = function(e) {
					e.preventDefault()
					div.dispatchEvent(newEvent("beforeSizeChange"));
					ifc.innerHTML = ""
					div.className = "youtube"
					div.dispatchEvent(newEvent("afterSizeChange"));
				}
				div.appendChild(stop)
			}
			return {block:true, node:div}
		},
		bg: function(opt) {
			var node=document.createElement("span")
			var color = opt[""]
			if (color) {
				node.setAttribute("data-bgcolor", color)
			}
			return {node:node}
		},
		
		//=====================
		// nodes with children
		root: function() {
			var node = document.createDocumentFragment()
			return {block:true, node:node}
		},
		bold: creator('b'),
		italic: creator('i'),
		underline: creator('u'),
		strikethrough: creator('s'),
		heading: function(level) { // input: 1, 2, or 3
			// output: h2-h4
			return {block:true, node:create('h'+(level+1))}
		},
		
		quote: function(args) {
			// <blockquote><cite> arg </cite><br> ... </blockquote>
			var name = args[""]
			var node = create('blockquote')
			if (name) {
				var cite = create('cite')
				cite.textContent = name
				node.appendChild(cite)
				node.appendChild(create('br'))
			}
			return {block:true, node:node}
		},
		list: function(args) {
			// <ul> ... </ul>
			if (args[""]!=undefined) {
				var list = create('ol')
				list.style.listStyleType = args[""]
			} else
				list = create('ul')
			return {block:true, node:list}
		},
		item: function(index) {
			return {block:true, node:create('li')}
		},
		//creator('li'), // (list item)
		
		link: function(args) {
			// <a href= url> ... </a>
			var url = args[""]
			// important, do not remove, prevents script injection
			if (/^ *javascript:/i.test(url))
				url = ""
			
			var node = create('a')
			
			var protocol = urlProtocol(url)
			node.setAttribute('target', "_blank")
			if (protocol[0] == "sbs:") {
				// put your custom local url handling code here
				url = "#"+protocol[1]
				node.removeAttribute('target')
			} else if (!protocol[0]) {
				if (url[0] == "#") {
					// put your fragment link handling code here
					var hash1 = getPath()
					var name = url.substr(1)
					let hash = "#"+hash1[0]+"#"+name
					url = hash
					node.onclick = function(e) {
						var hash2 = getPath()
						if (hash1[0]==hash2[0] && hash2[1]==name) {
							var n = document.getElementsByName("_anchor_"+name)
							if (n[0])
								n[0].scrollIntoView()
							e.preventDefault()
						} else {
							window.location.hash = hash
						}
					}
				} else {
					// urls without protocol get https:// or http:// added
					url = defaultProtocol()+"//"+url
				}
				
			}
			node.setAttribute('href', url)
			return {node:node}
		},
		
		table: function(opts) {
			// <div class="tableContainer"><table> ... </table></div>
			var container = create('div')
			container.className = "tableContainer"
			var node = create('table')
			container.appendChild(node)
			return {
				block: true,
				node: container,
				branch: node
			}
		},
		
		row: creator('tr'),
		
		cell: function (opt) {
			// <td> ... </td> etc.
			var node = opt.h ?
				 create('th') :
				 create('td')
			if (opt.rs)
				node.rowSpan = opt.rs
			if (opt.cs)
				node.colSpan = opt.cs
			if (opt.c) {
				if (opt.c[0] == "#")
					node.style.backgroundColor = opt.c
				node.setAttribute("data-bgcolor", opt.c)
			}
			if (opt.a) {
				node.style.textAlign = opt.a
			}
			node.className = "cell"
			return {node:node}
		},
		
		image: function(args) {
			// <img src= arg tabindex="-1">
			var url = args[""]
			var node = create('img')
			node.setAttribute('src', url)
			node.setAttribute('tabindex', "-1")
			/*node.onload = function() {
			  if (window.scrollToAuto)
			  scrollToAuto()
			  }*/
			return {node:node, block:true}
		},
		
		// parser error message
		error: function(e, stack) {
			// <div class="error">Error while parsing:<pre> stack trace </pre>Please report this</div>
			var node = create('div')
			node.className = "error"
			node.appendChild(createText("Markup parsing error: "))
			var err = create('code')
			err.textContent = e
			node.appendChild(err)
			node.appendChild(createText("\nPlease report this!"))
			if (stack) {
				var pre = create('pre')
				pre.textContent = stack
				node.appendChild(pre)
			}
			return {node:node, block:true}
		},
		
		align: function(args) {
			var node = create('div')
			var arg = args[""]
			if (arg == 'left' || arg == 'right' || arg == 'center')
				node.style.textAlign = arg
			return {node:node, block:true}
		},
		superscript: creator('sup'),
		subscript: creator('sub'),
		anchor: function(args) {
			var name = args[""]
			var node = create('a')
			// put your anchor name handler here
			// I prefix the names to avoid collision with node ids
			// which use the same namespace as name
			node.name = "_anchor_"+name
			return {node:node, block:true}
		},
		spoiler: function(args) {
			// <button> arg </button><div class="spoiler"> ... </div>
			// I'd use <summary>/<details> but it's not widely supported
			// and impossible to style with css
			// this probably needs some aria attribute or whatever
			var button = create('button')
			button.onclick = function() {
				if (this.getAttribute('data-show') == null)
					this.setAttribute('data-show',"")
				else
					this.removeAttribute('data-show')
			}
			button.className = 'spoilerButton'
			var name = args[""]
			if (name == true)
				name = "spoiler"
			button.textContent = name
			
			var box = create('div')
			box.className = "spoiler"
			
			return {
				block: true,
				nodes: [button, box],
				branch: box
			}
		}
	}
})()

;(function(){
	/***********
	 ** STATE **
    ***********/
	var c,i,cache = null,code
	var editorCache = {video:{},audio:{},youtube:{}}
	var skipNextLineBreak
	var textBuffer
	var curr, output
	var stack
	var startOfLine
	var leadingSpaces
	var blocks
	function scan(){}

	function errorHandle(func) {
		try {
			func()
		} catch (e) {
			// todo: close all blocks and add error message
		}
	}
	
	function init(scanFunc, myBlocks, text) {
		scan = scanFunc
		code = text
		if (cache)
			for (type in cache)
				for (arg in cache[type])
					cache[type][arg].forEach(function(x){
						x.used = false
					})
		blocks = myBlocks
		leadingSpaces = 0
		startOfLine = true
		skipNextLineBreak = false
		textBuffer = ""
		output = curr = options.root()
		stack = [{node:curr, type:'root'}]
		stack.top = function() {
			return stack[stack.length-1]
		}
		restore(0)
	}
	// move to pos
	function restore(pos) {
		i = pos-1
		scan()
	}

	//try to read a char
	function eatChar(chr) {
		if (c == chr) {
			scan()
			return true
		}
	}

	function matchNext(str) {
		return code.substr(i, str.length) == str
	}
	
	// read a url
	// if `allow` is true, url is only ended by end of file or ]] or ][ (TODO)
	function readUrl(allow) {
		var start = i
		if (allow)
			while (c && c!="]" && c!="[")
				scan()
		else
			while (isUrlChar(c))
				scan()
		return code.substring(start, i)
	}

	
	// ew regex
	function isUrlChar(c) {
		// removed ) because interferes with stuff too much
		// other problems common are
		// - period, comma, etc. after url
		return c && (/[-\w\$\.+!*'(,;/\?:@=&#%]/).test(c)
	}
	/***********
    ** stack **
    ***********/
	function stackContains(type) {
		for (var i=0; i<stack.length; i++) {
			if (stack[i].type == type) {
				return true
			}
		}
		return false
	}
	function top_is(type) {
		var top = stack.top()
		return top && top.type == type
	}
	
	/****************
    ** outputting **
    ****************/
	function endBlock() {
		flushText()
		var item = stack.pop()
		if (item.node && item.node.block)
			skipNextLineBreak = true

		if (stack.length) {
			var i=stack.length-1
			// this skips {} fake nodes
			// it will always find at least the root <div> element I hope
			while (!stack[i].node){
				i--
			}
			curr = stack[i].node
		} else {
			curr = null
		}
	}
	
	// add simple block with no children
	function addBlock(node) {
		flushText()
		options.append(curr, node)
	}

	// output contents of text buffer
	function flushText() {
		if (textBuffer) {
			options.append(curr, options.text(textBuffer))
			textBuffer = ""
		}
	}

	// add linebreak to output
	// todo: skipping linebreaks should skip / *\n? */ (spaces before/after!)
	// so like [h1]test[/h1] [h2]test[/h2]
	// no extra linebreak there
	function addLineBreak() {
		if (skipNextLineBreak) {
			skipNextLineBreak = false
		} else {
			flushText()
			addBlock(options.lineBreak())
		}
	}

	// add text to output (buffered)
	function addText(text) {
		if (text) {
			textBuffer += text
			skipNextLineBreak = false
		}
	}
	
	// call at end of parsing to flush output
	function endAll() {
		flushText()
		while (stack.length)
			endBlock()
	}
	
	/*****************
    ** cache stuff **
    *****************/
	function findUnusedCached(cache, type, arg) {
		var list = cache[type][arg]
		if (!list)
			return null
		for (var i=0;i<list.length;i++) {
			if (!list[i].used)
				return list[i]
		}
		return null
	}

	function startBlock(type, data, arg) {
		data.type = type
		if (type) {
			
			var node = tryGetCached(cache, type, arg && arg[""], function() {
				return blocks[type](arg)
			})
			data.node = node
			if (node.block)
				skipNextLineBreak = true
			
			flushText()
			options.append(curr, node)
			curr = node
		}
		stack.push(data)
		return data
	}
	// check for /\b(http://|https://|sbs:)/ basically
	function isUrlStart() {
		if (code[i-1] && /\w/.test(code[i-1]))
			return false
		return matchNext("http://") || matchNext("https://") || matchNext("sbs:")
	}
	
	// try to get a node from cache.
	// will get nodes where `type` and `arg` matches
	// if not found, returns make(), and adds to cache
	function tryGetCached(cache, type, arg, make) {
		var node
		if (cache && type && cache[type]) {
			var item = findUnusedCached(cache, type, arg)
			if (item) {
				item.used = true
				node = item.node
			}
		}
		if (!node && type) {
			node = make()
			if (cache && cache[type]) {
				if (!cache[type][arg])
					cache[type][arg] = []
				cache[type][arg].push({node:node, used:true})
			}
		}
		return node
	}

	var options = Parse.options
	
	Parse.lang['12y'] = function(codeInput, preview) {
		// so what happens here is
		// when a video needs to be generated
		// first, check the cache. if it exists there, insert it
		// (remember that a node can only exist in one place in the DOM though)
		// now, if the video needs to be created, and preview mode is enabled,
		// a place holder is generated (and not stored in the cache)
		// if preview is disabled (and cache is passed), the video is generated
		// and stored in the cache, to be reused later
		
		// in the editor, this should be called normally with preview mode enabled
		// then maybe after a delay of no typing, call it with preview off,
		// to generate any new videos
		// or don't use preview at all! maybe it's fine!

		init(function() {
			if (c == "\n" || !c)
				lineStart()
			else if (c != " ")
				startOfLine = false
			else if (startOfLine)
				leadingSpaces++
			i++
			c = code.charAt(i)
		}, options, codeInput)
		
		var tags = {
			spoiler: "spoiler",
			align: "align",
			sub: "subscript",
			sup: "superscript",
			anchor: "anchor",
			bg: "bg"
		}
		
		while (c) {
			if (eatChar("\n")) {
				endLine()
				//==========
				// \ escape
			} else if (eatChar("\\")) {
				if (c == "\n") {
					flushText()
					addBlock(options.lineBreak())
				} else
					addText(c)
				scan()
				//===============
				// { group start (why did I call these "groups"?)
			} else if (c == "{") {
				readEnv()
				//=============
				// } group end
			} else if (eatChar("}")) {
				if (stackContains(null)) {
					closeAll(false)
				} else {
					addText("}")
				}
				//================
				// * heading/bold
			} else if (c == "*") {
				if (startOfLine && (code[i+1] == "*" || code[i+1] == " ")) {
					var headingLevel = 0
					while (eatChar("*"))
						headingLevel++
					if (headingLevel > 3)
						headingLevel = 3
					
					if (eatChar(" "))
						startBlock('heading', {}, headingLevel)
					else
						addMulti('*', headingLevel)
				} else {
					doMarkup('bold', options.bold)
				}
			} else if (c == "/") {
				doMarkup('italic', options.italic)
			} else if (c == "_") {
				doMarkup('underline', options.underline)
			} else if (c == "~") {
				doMarkup('strikethrough', options.strikethrough)
				//============
				// >... quote
			} else if (startOfLine && eatChar(">")) {
				// todo: maybe >text should be a quote without author... 
				// need to add a way to add information to quotes:
				// - user ID
				// - post ID
				let start = i
				while (eatChar(" "))
					
				while (c && !char_in(c, " \n{:"))
					scan()
				var name = code.substring(start, i).trim()
				eatChar(":")
				while (eatChar(" "))
					
				startBlock('quote', {}, {"":name})
				//==============
				// -... list/hr
			} else if (startOfLine && eatChar("-")) {
				textBuffer = "" //hack:
				//----------
				// --... hr
				if (eatChar("-")) {
					var count = 2
					while (eatChar("-"))
						count++
					//-------------
					// ---<EOL> hr
					if (c == "\n" || !c) { //this is kind of bad
						addBlock(options.line())
						skipNextLineBreak = true //hack
						//----------
						// ---... normal text
					} else {
						addMulti("-", count)
					}
					//------------
					// - ... list
				} else if (eatChar(" ")) {
					startBlock('list', {level:leadingSpaces}, {})
					startBlock('item', {level:leadingSpaces})
					//---------------
					// - normal char
				} else
					addText("-")
				//==========================
				// ] end link if inside one
			} else if (c == "]" && stack.top().inBrackets){ //this might break if it assumes .top() exists. needs more testing
				scan()
				if (stack.top().big) {
					if (eatChar("]"))
						endBlock()
					else
						addText("]")
				} else
					endBlock()
				//============
				// |... table
			} else if (c == "|") {
				var top = stack.top()
				// continuation
				if (top.type == 'cell') {
					scan()
					var row = top.row
					var table = top.row.table
					var eaten = eatChar("\n")
					//--------------
					// | | next row
					if (eaten && eatChar("|")) {
						// number of cells in first row
						// determines number of columns in table
						if (table.columns == null)
							table.columns = row.cells
						// end blocks
						endBlock() //cell
						if (top_is('row')) //always
							endBlock()
						// start row
						// calculate number of cells in row which will be
						// already filled due to previous row-spanning cells
						var cells = 0
						table.rowspans = table.rowspans.map(function(span){
							cells++
							return span-1
						}).filter(function(span){return span > 0})
						var row = startBlock('row', {table:table, cells:cells})
						row.header = eatChar("*")
						// start cell
						startCell(row)
						//--------------------------
						// | next cell or table end
					} else {
						row.cells++
						textBuffer = textBuffer.replace(/ *$/,"") //strip trailing spaces (TODO: allow \<space>)
						// end of table
						// table ends when number of cells in current row = number of cells in first row
						// single-row tables are not easily possible ..
						// TODO: fix single row tables
						if (table.columns != null && row.cells > table.columns) {
							endBlock() //end cell
							if (top_is('row')) //always
								endBlock() //row
							if (top_is('table')) //always
								endBlock() //table
							if (eaten)
								addLineBreak()
						} else { // next cell
							endBlock() //cell
							startCell(row)
						}
					}
					// start of new table (must be at beginning of line)
				} else if (startOfLine) {
					scan()
					table = startBlock('table', {
						columns: null,
						rowspans: []
					}, {})
					row = startBlock('row', {
						table: table,
						cells: 0
					})
					row.header = eatChar("*")
					startCell(row)
				} else {
					scan()
					addText("|")
				}
				//===========
				// `... code
			} else if (eatChar("`")) {
				//---------------
				// ``...
				if (eatChar("`")) {
					//----------------
					// ``` code block
					if (eatChar("`")) {
						// read lang name
						let start = i
						while (c && c!="\n" && c!="`")
							scan()
						//todo: protect against ```why won't this work``` ?
						var language = code.substring(start, i).trim().toLowerCase()
						var eaten = eatChar("\n")
						start = i
						i = code.indexOf("```", i)
						addBlock(options.code(
							{"": language},
							code.substring(start, i!=-1 ? i : code.length)
						))
						skipNextLineBreak = eaten
						if (i != -1) {
							restore(i + 3)
						} else {
							restore(code.length)
						}
						//------------
						// `` invalid
					} else {
						addText("``")
					}
					// --------------
					// ` inline code
				} else {
					let start = i
					var codeText = ""
					while (c) {
						if (c=="`") {
							if (code[i+1] == "`") {
								if (i == start+1 && codeText[0] == " ")
									codeText = codeText.substr(1)
								scan()
							} else
								break
						}
						codeText += c
						scan()
					}
					addBlock(options.icode({},codeText))
					scan()
				}
				//
				//================
				// link
			} else if (readLink()) {
				//
				//=============
				// normal char
			} else {
				addText(c)
				scan()
			}
		}
		// END
		endAll()
		return output.node
		
		
		// ###################################
		
		function readBracketedLink(embed) {
			if (eatChar("[")) {
				if (eatChar("[")) {
					// read url:
					var start = i
					var part2 = false
					var url = readUrl(true)
					if (eatChar("]")) {
						if (eatChar("]")){
						}else if (eatChar("["))
							part2 = true
					}
					if (embed)
						var type = urlType(url);
					else
						type = 'link';
					if (type == "youtube") {
						addBlock(options.youtube({"":url}, preview));
						if (part2)
							addText("[") // scary
					} else {
						startBlock(type, {big: true}, {"":url}, preview)
						if (part2)
							stack.top().inBrackets = true
						else {
							addText(url)
							endBlock()
						}
					}
					return true
				} else {
					addText("[")
				}
			}
			return false
		}
		
		function readEnv() {
			if (!eatChar("{"))
				return false
			startBlock(null, {})
			lineStart()
			
			var start = i
			if (eatChar("#")){
				var name = readTagName()
				var props = readProps()
				// todo: make this better lol
				var func = tags[name]
				if (func && !(name=="spoiler" && stackContains("spoiler"))) {
					startBlock(func, {}, props)
				} else {
					addBlock(options.invalid(code.substring(start, i), "invalid tag"))
				}
				/*if (displayBlock({type:name}))
				  skipNextLineBreak = true; //what does this even do?*/
			}
			lineStart()
			//	eatChar("\n")
			return true
		}
		
		// read table cell properties and start cell block, and eat whitespace
		// assumed to be called when pointing to char after |
		function startCell(row) {
			var props = {}
			if (eatChar("#"))
				Object.assign(props, readProps())
			
			if (props.rs)
				row.table.rowspans.push(props.rs-1)
			if (props.cs)
				row.cells += props.cs-1
			
			if (row.header)
				props.h = true
			
			startBlock('cell', {row: row}, props)
			while (eatChar(" ")){
			}
		}

		// split string on first occurance
		function split1(string, sep) {
			var n = string.indexOf(sep)
			if (n == -1)
				return [string, null]
			else
				return [string.substr(0,n), string.substr(n+sep.length)]
		}
		
		function readTagName() {
			var start = i
			while (c>="a" && c<="z") {
				scan()
			}
			if (i > start)
				return code.substring(start, i)
		}
		
		// read properties key=value,key=value... ended by a space or \n or } or {
		// =value is optional and defaults to `true`
		function readProps() {
			var start = i
			var end = code.indexOf(" ", i)
			if (end < 0)
				end = code.length
			var end2 = code.indexOf("\n", i)
			if (end2 >= 0 && end2 < end)
				end = end2
			end2 = code.indexOf("}", i)
			if (end2 >= 0 && end2 < end)
				end = end2
			end2 = code.indexOf("{", i)
			if (end2 >= 0 && end2 < end)
				end = end2


			restore(end)
			eatChar(" ")

			var propst = code.substring(start, end)
			var props = {}
			propst.split(",").forEach(function(x){
				var pair = split1(x, "=")
				if (pair[1] == null)
					pair[1] = true
				props[pair[0]] = pair[1]
			})
			return props
		}

		// string.repeat doesn't exist
		function addMulti(text, count) {
			while (count --> 0)
				addText(text)
		}

		function readLink() {
			var embed = eatChar("!")
			if (readBracketedLink(embed) || readPlainLink(embed))
				return true
			else if (embed) {
				addText("!")
				return true
				//lesson: if anything is eaten, you must return true if it's in the top level if switch block
			}
		}

		function readPlainLink(embed) {
			if (isUrlStart()) {
				var url = readUrl()
				var after = eatChar("[")
				
				if (embed)
					var type = urlType(url);
				else
					type = 'link';
				if (type == "youtube") {
					addBlock(options.youtube({"":url}, preview));
					if (after)
						addText("[") // scary
				} else {
					startBlock(type, {inBrackets: after}, {"":url}, preview)
					if (!after) {
						addText(url)
						endBlock()
					}
				}
				return true
			}
		}
		
		// closeAll(true) - called at end of document
		// closeAll(false) - called at end of {} block
		function closeAll(force) {
			while(stack.length) {
				var top = stack.top()
				if (top.type == 'root') {
					break
				}
				if (!force && top.type == null) {
					endBlock()
					break
				}
				endBlock()
			}
		}

		// called at the end of a line (unescaped newline)
		function endLine() {
			while (1) {
				var top = stack.top()
				if (top.type == 'heading' || top.type == 'quote') {
					endBlock()
				} else if (top.type == 'item') {
					if (top.type == 'item')
						endBlock()
					var indent = 0
					while (eatChar(" "))
						indent++
					// OPTION 1:
					// no next item; end list
					if (c != "-") {
						while (top_is('list')) //should ALWAYS happen at least once
							endBlock()
						addMulti(" ", indent)
					} else {
						scan()
						while (eatChar(" ")) {}
						// OPTION 2:
						// next item has same indent level; add item to list
						if (indent == top.level) {
							startBlock('item', {level: indent})
							// OPTION 3:
							// next item has larger indent; start nested list	
						} else if (indent > top.level) {
							startBlock('list', {level: indent}, {})
							startBlock('item', {level: indent}) // then made the first item of the new list
							// OPTION 4:
							// next item has less indent; try to exist 1 or more layers of nested lists
							// if this fails, fall back to just creating a new item in the current list
						} else {
							// TODO: currently this will just fail completely 
							while(1) {
								top = stack.top()
								if (top && top.type == 'list') {
									if (top.level <= indent) {
										break
									} else {
										endBlock()
									}
								} else {
									// no suitable list was found :(
									// so just create a new one
									startBlock('list', {level: indent}, {})
									break
								}
							}
							startBlock('item', {level: indent})
						}
						break //really?
					}
				} else {
					addLineBreak()
					break
				}
			}
		}

		// audio, video, image, youtube
		//todo: improve this lol
		function urlType(url) {
			if (/(\.mp3(?!\w)|\.ogg(?!\w)|\.wav(?!\w)|#audio$)/.test(url))
				return "audio"
			if (/(\.mp4(?!\w)|\.mkv(?!\w)|#video$)/.test(url))
				return "video"
			if (/(?:https?:\/\/)?(?:www\.)?youtu\.?be(?:\.com)?\/?.*(?:watch|embed)?(?:.*v=|v\/|\/)([\w\-_]+)\&?/.test(url))
				return "youtube"
			return "image"
		}

		// common code for all text styling tags (bold etc.)
		function doMarkup(type, create) {
			var symbol = c
			scan()
			if (canStartMarkup(type)) {
				startBlock(type, {})
			} else if (canEndMarkup(type)) {
				endBlock()
			} else {
				addText(symbol)
			}
		}
		// todo: maybe have support for non-ASCII punctuation/whitespace?
		function canStartMarkup(type) {
			return (
				(!code[i-2] || char_in(code[i-2], " \t\n({'\"")) && //prev char is one of these (or start of text)
				(c && !char_in(c, " \t\n,'\"")) && //next char is not one of these
				!stackContains(type)
			)
		}
		function canEndMarkup(type) {
			return (
				top_is(type) && //there is an item to close
				!char_in(code[i-2], " \t\n,'\"") && //prev char is not one of these
				(!c || char_in(c, " \t\n-.,:!?')}\"")) //next char is one of these (or end of text)
			)
		}
		function char_in(chr, list) {
			return chr && list.indexOf(chr) != -1
		}
		
		function lineStart() {
			startOfLine = true
			leadingSpaces = 0
		}
		
	}

	Parse.lang.bbcode = function(codeArg, preview) {
		var noNesting = {
			spoiler:true
		}
		var blocks = {
			b: options.bold,
			i: options.italic,
			u: options.underline,
			s: options.strikethrough,
			sup: options.superscript,
			sub: options.subscript,
			h1: function(){return options.heading(1)},
			h2: function(){return options.heading(2)},
			h3: function(){return options.heading(3)},
			table: options.table,
			tr: options.row,
			td: options.cell,
			th: function(arg, opt){
				return options.cell(Object.assign({h:true}, opt))
			},
			code: false, 
			align: options.align,
			url: options.link,//+<VERY special case> (only hardcode when no argument)
			youtube: true, //<special case>,
			audio: true,
			video: true,
			img: true, //<special case>,
			list: options.list,
			spoiler: options.spoiler,
			quote: options.quote,
			anchor: options.anchor,
			item: options.item,
		}
		init(function() {
			i++
			c = code.charAt(i)
		}, blocks, codeArg)
		
		var specialBlock = {
			url: function(args, contents){
				var node = options.link({"":contents})
				options.append(node, options.text(contents))
				return node
			},
			code: function(args, contents) {
				var inline = args[""] == 'inline'
				args[""] = args.lang
				if (inline)
					return options.icode(args, contents)
				
				if (contents[0]=="\n")
					contents = contents.substr(1)
				return options.code(args, contents)
			},
			youtube: function(args, contents) {
				return options.youtube({"":contents}, preview)
			},
			img: function(args, contents) {
				return options.image({"":contents})
			},
			audio: function(args, contents) {
				return options.audio({"":contents})
			},
			video: function(args, contents) {
				return options.video({"":contents})
			}
		}

		var point = 0
		
		while (c) {
			//===========
			// [... tag?
			if (eatChar("[")) {
				point = i-1
				// [/... end tag?
				if(eatChar("/")) {
					var name = readTagName()
					// invalid end tag
					if (!eatChar("]") || !name) {
						cancel()
					// valid end tag
					} else {
						// end last item in lists
						if (name == "list" && stack.top().type == "item")
							endBlock(point)
						if (name == stack.top().type) {
							endBlock(point)
							// eat whitespace between table cells
							if (name == 'td' || name == 'th' || name == 'tr') {
								while(eatChar(' ')||eatChar('\n')){
								}
							}
						} else {
							addBlock(options.invalid(code.substring(point, i), "unexpected closing tag"))
						}
					}
				// [... start tag?
				} else {
					var name = readTagName()
					if (!name || !blocks[name]) {
						// special case [*] list item
						if (eatChar("*") && eatChar("]")) {
							if (stack.top().type == "item")
								endBlock(point)
							var top = stack.top()
							if (top.type == "list") {
								startBlock("item", {}, {})
							}
							else
								cancel()
						} else {
							cancel()
						}
					} else {
						// [tag=...
						var arg = true, args = {}
						if (eatChar("=")) {
							var start=i
							if (eatChar('"')) {
								start++
								while (c && c!='"')
									scan()
								if (c == '"') {
									arg = code.substring(start, i-1)
									scan()
								}
							} else {
								while (c && c!="]" && c!=" ")
									scan()
								if (c == "]" || c == " ")
									arg = code.substring(start, i)
							}
						}
						if (eatChar(" ")) {
							args = readArgList() || {}
						}
						if (arg!=true)
							args[""] = arg
						if (eatChar("]")) {
							if (specialBlock[name] && !(name == "url" && arg!=true)) {
								var endTag = "[/"+name+"]"
								var end = code.indexOf(endTag, i)
								if (end < 0)
									cancel()
								else {
									var contents = code.substring(i, end)
									restore(end + endTag.length)
									
									// todo: this can't handle args with caching currently
									var node = tryGetCached(cache, name, contents, function() {
										return specialBlock[name](args, contents)
									})
									addBlock(node)
									
									if (node.block)
										skipNextLineBreak = true
								}
							} else if (name!="item" && blocks[name] && !(noNesting[name] && stackContains(name))) {
								if (name == 'tr' || name == 'table') {
									while(eatChar(' ')||eatChar('\n')){
									}
								}
								startBlock(name, {}, args)
							} else
								addBlock(options.invalid(code.substring(point, i), "invalid tag"))
						} else {
							cancel()
						}
					}
				}
			} else if (readPlainLink()) {
			} else if (eatChar('\n')) {
				addLineBreak()
			} else {
				addText(c)
				scan()
			}
		}
		endAll()
		return output.node
		
		function cancel() {
			restore(point)
			addText(c)
			scan()
		}

		function readPlainLink() {
			if (isUrlStart()) {
				var url = readUrl()
				addBlock(specialBlock.url({},url))
				return true
			}
		}

		function readArgList() {
			var args = {}
			while (1) {
				// read key
				var start = i
				while (isTagChar(c))
					scan()
				var key = code.substring(start, i)
				// key=...
				if (eatChar("=")) {
					// key="...
					if (eatChar('"')) {
						start = i
						while (c && c!='"' && c!="\n")
							scan()
						if (eatChar('"'))
							args[key] = code.substring(start, i-2)
						else
							return null
						// key=...
					} else {
						start = i
						while (c && c!=" " && c!="]" && c!="\n")
							scan()
						if (c == "]") {
							args[key] = code.substring(start, i)
							return args
						} else if (eatChar(" "))
							args[key] = code.substring(start, i-1)
						else
							return null
					}
					// key ...
				} else if (eatChar(" ")) {
					args[key] = true
					// key]...
				} else if (c == "]") {
					args[key] = true
					return args
					// key<other char> (error)
				} else
					return null
			}
		}
		
		function readTagName() {
			var start = i
			while (isTagChar(c))
				scan()
			return code.substring(start, i)
		}

		function isTagChar(c) {
			return c>="a" && c<="z" || c>="A"&&c<="Z" || c>="0"&&c<="9"
		}
	}
	
	// "plain text" (with autolinker)
	Parse.fallback = function(text, preview) {
		var options = Parse.options
		var root = options.root()
		i = 0
		code = text
		output = root
		
		var linkRegex = /\b(?:https?:\/\/|sbs:)[-\w\$\.+!*'(),;/\?:@=&#%]*/g
		var result
		var out = "", last = 0
		while (result = linkRegex.exec(text)) {
			// text before link
			options.append(root, options.text(text.substring(last, result.index)))
			// generate link
			var link = options.link({"": result[0]})
			options.append(link, options.text(result[0]))
			options.append(root, link)
			
			last = result.index + result[0].length
		}
		// text after last link (or entire message if no links were found)
		options.append(root, options.text(text.substr(last)))
		
		return root.node
	}
	
	Parse.parseLang = function(text, lang, preview) {
		i=0
		code = text
		if (preview) {
			cache = editorCache
		} else {
			cache = null
		}
		try {
			var parser = Parse.lang[lang] || Parse.fallback
			return parser(text, preview)
		} catch(e) {
			try {
				if (!output) {
					output = options.root();
				}
				options.append(output, options.error(e, e.stack))
				options.append(output, options.text(code.substr(i)))
				return output.node
			} catch (e) {
				alert("Unrecoverable parser error! please report this!\n"+e.stack)
			}
		}
	}
})()

export default Parse;