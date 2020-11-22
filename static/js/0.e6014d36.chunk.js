(this["webpackJsonpsbs-sue-client"]=this["webpackJsonpsbs-sue-client"]||[]).push([[0],{32:function(e,t,n){"use strict";var r={lang:{}};!function(){function e(e){return document.createElement(e)}function t(e){return document.createTextNode(e)}function n(t){return function(){return{node:e(t)}}}function i(e){var t=document.createEvent("Event");return t.initEvent(e,!0,!0),t}function o(){return"http:"==window.location.protocol?"http:":"https:"}function u(){return decodeURIComponent(location.hash.substr(1)).split("#")}r.options={append:function(e,t){e=e.branch||e.node,t.nodes?t.nodes.forEach((function(t){e.appendChild(t)})):e.appendChild(t.node)},text:function(e){return{node:t(e)}},lineBreak:n("br"),line:n("hr"),invalid:function(t,n){var r=e("span");return r.className="invalid",r.title=n,r.textContent=t,{node:r}},code:function(t,n){var r=t[""],i=e("pre");return i.setAttribute("data-lang",r),{block:!0,node:i}},icode:function(t,n){var r=e("code");return r.textContent=n,{node:r,block:!1}},audio:function(t){var n=e("audio");return n.setAttribute("controls",""),n.setAttribute("src",t[""]),{block:!0,node:n}},video:function(t){var n=t[""],r=e("video");return r.setAttribute("controls",""),r.setAttribute("src",n),{block:!0,node:r}},youtube:function(t,n){var r=t[""],u=o(),a=function(e){var t=e.match(/(?:https?:\/\/)?(?:www\.)?youtu\.?be(?:\.com)?\/?.*(?:watch|embed)?(?:.*v=|v\/|\/)([\w\-_]+)\&?/);return t?t[1]:null}(r),l=e("a"),s=e("div");if(s.className="youtube",s.appendChild(l),l.href=r,a){l.style.backgroundImage='url("'+u+"//i.ytimg.com/vi/"+a+'/mqdefault.jpg")';var c=r.match(/[&?](?:t|start)=(\w+)/),f=r.match(/[&?](?:end)=(\w+)/),d=r.match(/[&?]loop(=|&|$)/);n||function(e,t){var n=new XMLHttpRequest;n.open("GET","https://www.googleapis.com/youtube/v3/videos?part=snippet&id="+e+"&key=AIzaSyBKka_xlF5pV4SMKLtQGIhOgyQsjF7UI-U"),n.onload=function(){if(200==n.status)try{var e=JSON.parse(n.responseText).items[0];t(e)}catch(r){}},n.send()}(a,(function(t){var n=e("div");n.className="pre videoTitle",n.textContent=t.snippet.title,l.appendChild(n),l.appendChild(e("br")),(n=e("div")).className="pre videoAuthor",n.textContent=t.snippet.channelTitle,l.appendChild(n)}));var p=e("span");l.appendChild(p),l.onclick=function(t){t.preventDefault(),s.dispatchEvent(i("beforeSizeChange"));var n=e("iframe"),r="https://www.youtube-nocookie.com/embed/"+a+"?autoplay=1";c&&(r+="&start="+c[1]),f&&(r+="&end="+f[1]),d&&(r+="&loop=1&playlist="+a),n.src=r,p.appendChild(n),s.className="youtube playingYoutube",s.dispatchEvent(i("afterSizeChange"))};var v=e("button");v.textContent="x",v.onclick=function(e){e.preventDefault(),s.dispatchEvent(i("beforeSizeChange")),p.innerHTML="",s.className="youtube",s.dispatchEvent(i("afterSizeChange"))},s.appendChild(v)}return{block:!0,node:s}},bg:function(e){var t=document.createElement("span"),n=e[""];return n&&t.setAttribute("data-bgcolor",n),{node:t}},root:function(){return{block:!0,node:document.createDocumentFragment()}},bold:n("b"),italic:n("i"),underline:n("u"),strikethrough:n("s"),heading:function(t){return{block:!0,node:e("h"+(t+1))}},quote:function(t){var n=t[""],r=e("blockquote");if(n){var i=e("cite");i.textContent=n,r.appendChild(i),r.appendChild(e("br"))}return{block:!0,node:r}},list:function(t){if(void 0!=t[""]){var n=e("ol");n.style.listStyleType=t[""]}else n=e("ul");return{block:!0,node:n}},item:function(t){return{block:!0,node:e("li")}},link:function(t){var n=t[""];/^ *javascript:/i.test(n)&&(n="");var r=e("a"),i=function(e){var t=e.match(/^([-\w]+:)([^]*)$/);return t?[t[1].toLowerCase(),t[2]]:[null,e]}(n);if(r.setAttribute("target","_blank"),"sbs:"==i[0])n="#"+i[1],r.removeAttribute("target");else if(!i[0])if("#"==n[0]){var a=u(),l=n.substr(1),s="#"+a[0]+"#"+l;n=s,r.onclick=function(e){var t=u();if(a[0]==t[0]&&t[1]==l){var n=document.getElementsByName("_anchor_"+l);n[0]&&n[0].scrollIntoView(),e.preventDefault()}else window.location.hash=s}}else n=o()+"//"+n;return r.setAttribute("href",n),{node:r}},table:function(t){var n=e("div");n.className="tableContainer";var r=e("table");return n.appendChild(r),{block:!0,node:n,branch:r}},row:n("tr"),cell:function(t){var n=t.h?e("th"):e("td");return t.rs&&(n.rowSpan=t.rs),t.cs&&(n.colSpan=t.cs),t.c&&("#"==t.c[0]&&(n.style.backgroundColor=t.c),n.setAttribute("data-bgcolor",t.c)),t.a&&(n.style.textAlign=t.a),n.className="cell",{node:n}},image:function(t){var n=t[""],r=e("img");return r.setAttribute("src",n),r.setAttribute("tabindex","-1"),{node:r,block:!0}},error:function(n,r){var i=e("div");i.className="error",i.appendChild(t("Markup parsing error: "));var o=e("code");if(o.textContent=n,i.appendChild(o),i.appendChild(t("\nPlease report this!")),r){var u=e("pre");u.textContent=r,i.appendChild(u)}return{node:i,block:!0}},align:function(t){var n=e("div"),r=t[""];return"left"!=r&&"right"!=r&&"center"!=r||(n.style.textAlign=r),{node:n,block:!0}},superscript:n("sup"),subscript:n("sub"),anchor:function(t){var n=t[""],r=e("a");return r.name="_anchor_"+n,{node:r,block:!0}},spoiler:function(t){var n=e("button");n.onclick=function(){null==this.getAttribute("data-show")?this.setAttribute("data-show",""):this.removeAttribute("data-show")},n.className="spoilerButton";var r=t[""];1==r&&(r="spoiler"),n.textContent=r;var i=e("div");return i.className="spoiler",{block:!0,nodes:[n,i],branch:i}}}}(),function(){var e,t,n,i,o,u,a,l,s,c,f,d=null,p={video:{},audio:{},youtube:{}};function v(){}function b(e,t,r){if(v=e,n=r,d)for(type in d)for(arg in d[type])d[type][arg].forEach((function(e){e.used=!1}));f=t,c=0,s=!0,i=!1,o="",a=u=z.root(),(l=[{node:u,type:"root"}]).top=function(){return l[l.length-1]},h(0)}function h(e){t=e-1,v()}function g(t){if(e==t)return v(),!0}function m(e){return n.substr(t,e.length)==e}function k(r){var i=t;if(r)for(;e&&"]"!=e&&"["!=e;)v();else for(;w(e);)v();return n.substring(i,t)}function w(e){return e&&/[-\w\$\.+!*'(,;/\?:@=&#%]/.test(e)}function y(e){for(var t=0;t<l.length;t++)if(l[t].type==e)return!0;return!1}function x(e){var t=l.top();return t&&t.type==e}function C(){E();var e=l.pop();if(e.node&&e.node.block&&(i=!0),l.length){for(var t=l.length-1;!l[t].node;)t--;u=l[t].node}else u=null}function A(e){E(),z.append(u,e)}function E(){o&&(z.append(u,z.text(o)),o="")}function N(){i?i=!1:(E(),A(z.lineBreak()))}function O(e){e&&(o+=e,i=!1)}function S(){for(E();l.length;)C()}function B(e,t,n){if(t.type=e,e){var r=q(d,e,n&&n[""],(function(){return f[e](n)}));t.node=r,r.block&&(i=!0),E(),z.append(u,r),u=r}return l.push(t),t}function _(){return(!n[t-1]||!/\w/.test(n[t-1]))&&(m("http://")||m("https://")||m("sbs:"))}function q(e,t,n,r){var i;if(e&&t&&e[t]){var o=function(e,t,n){var r=e[t][n];if(!r)return null;for(var i=0;i<r.length;i++)if(!r[i].used)return r[i];return null}(e,t,n);o&&(o.used=!0,i=o.node)}return!i&&t&&(i=r(),e&&e[t]&&(e[t][n]||(e[t][n]=[]),e[t][n].push({node:i,used:!0}))),i}var z=r.options;r.lang["12y"]=function(r,u){b((function(){"\n"!=e&&e?" "!=e?s=!1:s&&c++:Y(),t++,e=n.charAt(t)}),z,r);for(var f={spoiler:"spoiler",align:"align",sub:"subscript",sup:"superscript",anchor:"anchor",bg:"bg"};e;)if(g("\n"))R();else if(g("\\"))"\n"==e?(E(),A(z.lineBreak())):O(e),v();else if("{"==e)F();else if(g("}"))y(null)?Q(!1):O("}");else if("*"==e)if(!s||"*"!=n[t+1]&&" "!=n[t+1])P("bold",z.bold);else{for(var d=0;g("*");)d++;d>3&&(d=3),g(" ")?B("heading",{},d):H("*",d)}else if("/"==e)P("italic",z.italic);else if("_"==e)P("underline",z.underline);else if("~"==e)P("strikethrough",z.strikethrough);else if(s&&g(">")){for(var p=t;g(" ");)for(;e&&!X(e," \n{:");)v();var m=n.substring(p,t).trim();for(g(":");g(" ");)B("quote",{},{"":m})}else if(s&&g("-"))if(o="",g("-")){for(var w=2;g("-");)w++;"\n"!=e&&e?H("-",w):(A(z.line()),i=!0)}else g(" ")?(B("list",{level:c},{}),B("item",{level:c})):O("-");else if("]"==e&&l.top().inBrackets)v(),l.top().big?g("]")?C():O("]"):C();else if("|"==e){var q=l.top();if("cell"==q.type){v();var T=q.row,$=q.row.table;if((D=g("\n"))&&g("|")){null==$.columns&&($.columns=T.cells),C(),x("row")&&C();var I=0;$.rowspans=$.rowspans.map((function(e){return I++,e-1})).filter((function(e){return e>0})),(T=B("row",{table:$,cells:I})).header=g("*"),J(T)}else T.cells++,o=o.replace(/ *$/,""),null!=$.columns&&T.cells>$.columns?(C(),x("row")&&C(),x("table")&&C(),D&&N()):(C(),J(T))}else s?(v(),$=B("table",{columns:null,rowspans:[]},{}),(T=B("row",{table:$,cells:0})).header=g("*"),J(T)):(v(),O("|"))}else if(g("`"))if(g("`"))if(g("`")){for(var L=t;e&&"\n"!=e&&"`"!=e;)v();var j=n.substring(L,t).trim().toLowerCase(),D=g("\n");L=t,t=n.indexOf("```",t),A(z.code({"":j},n.substring(L,-1!=t?t:n.length))),i=D,h(-1!=t?t+3:n.length)}else O("``");else{for(var M=t,U="";e;){if("`"==e){if("`"!=n[t+1])break;t==M+1&&" "==U[0]&&(U=U.substr(1)),v()}U+=e,v()}A(z.icode({},U)),v()}else K()||(O(e),v());return S(),a.node;function F(){if(!g("{"))return!1;B(null,{}),Y();var r=t;if(g("#")){var i=function(){var r=t;for(;e>="a"&&e<="z";)v();if(t>r)return n.substring(r,t)}(),o=G(),u=f[i];!u||"spoiler"==i&&y("spoiler")?A(z.invalid(n.substring(r,t),"invalid tag")):B(u,{},o)}return Y(),!0}function J(e){var t={};for(g("#")&&Object.assign(t,G()),t.rs&&e.table.rowspans.push(t.rs-1),t.cs&&(e.cells+=t.cs-1),e.header&&(t.h=!0),B("cell",{row:e},t);g(" "););}function G(){var e=t,r=n.indexOf(" ",t);r<0&&(r=n.length);var i=n.indexOf("\n",t);i>=0&&i<r&&(r=i),(i=n.indexOf("}",t))>=0&&i<r&&(r=i),(i=n.indexOf("{",t))>=0&&i<r&&(r=i),h(r),g(" ");var o=n.substring(e,r),u={};return o.split(",").forEach((function(e){var t=function(e,t){var n=e.indexOf(t);return-1==n?[e,null]:[e.substr(0,n),e.substr(n+t.length)]}(e,"=");null==t[1]&&(t[1]=!0),u[t[0]]=t[1]})),u}function H(e,t){for(;t-- >0;)O(e)}function K(){var e=g("!");return!(!function(e){if(g("[")){if(g("[")){var t=!1,n=k(!0);if(g("]")&&(g("]")||g("[")&&(t=!0)),e)var r=V(n);else r="link";return"youtube"==r?(A(z.youtube({"":n},u)),t&&O("[")):(B(r,{big:!0},{"":n}),t?l.top().inBrackets=!0:(O(n),C())),!0}O("[")}return!1}(e)&&!function(e){if(_()){var t=k(),n=g("[");if(e)var r=V(t);else r="link";return"youtube"==r?(A(z.youtube({"":t},u)),n&&O("[")):(B(r,{inBrackets:n},{"":t}),n||(O(t),C())),!0}}(e))||(e?(O("!"),!0):void 0)}function Q(e){for(;l.length;){var t=l.top();if("root"==t.type)break;if(!e&&null==t.type){C();break}C()}}function R(){for(;;){var t=l.top();if("heading"==t.type||"quote"==t.type)C();else{if("item"!=t.type){N();break}"item"==t.type&&C();for(var n=0;g(" ");)n++;if("-"==e){for(v();g(" "););if(n==t.level)B("item",{level:n});else if(n>t.level)B("list",{level:n},{}),B("item",{level:n});else{for(;;){if(!(t=l.top())||"list"!=t.type){B("list",{level:n},{});break}if(t.level<=n)break;C()}B("item",{level:n})}break}for(;x("list");)C();H(" ",n)}}}function V(e){return/(\.mp3(?!\w)|\.ogg(?!\w)|\.wav(?!\w)|#audio$)/.test(e)?"audio":/(\.mp4(?!\w)|\.mkv(?!\w)|#video$)/.test(e)?"video":/(?:https?:\/\/)?(?:www\.)?youtu\.?be(?:\.com)?\/?.*(?:watch|embed)?(?:.*v=|v\/|\/)([\w\-_]+)\&?/.test(e)?"youtube":"image"}function P(r,i){var o=e;v(),!function(r){return(!n[t-2]||X(n[t-2]," \t\n({'\""))&&e&&!X(e," \t\n,'\"")&&!y(r)}(r)?!function(r){return x(r)&&!X(n[t-2]," \t\n,'\"")&&(!e||X(e," \t\n-.,:!?')}\""))}(r)?O(o):C():B(r,{})}function X(e,t){return e&&-1!=t.indexOf(e)}function Y(){s=!0,c=0}},r.lang.bbcode=function(r,o){var u={spoiler:!0},s={b:z.bold,i:z.italic,u:z.underline,s:z.strikethrough,sup:z.superscript,sub:z.subscript,h1:function(){return z.heading(1)},h2:function(){return z.heading(2)},h3:function(){return z.heading(3)},table:z.table,tr:z.row,td:z.cell,th:function(e,t){return z.cell(Object.assign({h:!0},t))},code:!1,align:z.align,url:z.link,youtube:!0,audio:!0,video:!0,img:!0,list:z.list,spoiler:z.spoiler,quote:z.quote,anchor:z.anchor,item:z.item};b((function(){t++,e=n.charAt(t)}),s,r);for(var c={url:function(e,t){var n=z.link({"":t});return z.append(n,z.text(t)),n},code:function(e,t){var n="inline"==e[""];return e[""]=e.lang,n?z.icode(e,t):("\n"==t[0]&&(t=t.substr(1)),z.code(e,t))},youtube:function(e,t){return z.youtube({"":t},o)},img:function(e,t){return z.image({"":t})},audio:function(e,t){return z.audio({"":t})},video:function(e,t){return z.video({"":t})}},f=0;e;)if(g("["))if(f=t-1,g("/")){var p=M();if(g("]")&&p)if("list"==p&&"item"==l.top().type&&C(),p==l.top().type){if(C(),"td"==p||"th"==p||"tr"==p)for(;g(" ")||g("\n"););}else A(z.invalid(n.substring(f,t),"unexpected closing tag"));else L()}else{if((p=M())&&s[p]){var m=!0,w={};if(g("=")){var x=t;if(g('"')){for(x++;e&&'"'!=e;)v();'"'==e&&(m=n.substring(x,t-1),v())}else{for(;e&&"]"!=e&&" "!=e;)v();"]"!=e&&" "!=e||(m=n.substring(x,t))}}if(g(" ")&&(w=D()||{}),1!=m&&(w[""]=m),g("]"))if(!c[p]||"url"==p&&1!=m)if("item"==p||!s[p]||u[p]&&y(p))A(z.invalid(n.substring(f,t),"invalid tag"));else{if("tr"==p||"table"==p)for(;g(" ")||g("\n"););B(p,{},w)}else{var E="[/"+p+"]",T=n.indexOf(E,t);if(T<0)L();else{var $=n.substring(t,T);h(T+E.length);var I=q(d,p,$,(function(){return c[p](w,$)}));A(I),I.block&&(i=!0)}}else L()}else{if(g("*")&&g("]"))"item"==l.top().type&&C(),"list"==l.top().type?B("item",{},{}):L();else L()}}else j()||(g("\n")?N():(O(e),v()));return S(),a.node;function L(){h(f),O(e),v()}function j(){if(_()){var e=k();return A(c.url({},e)),!0}}function D(){for(var r={};;){for(var i=t;U(e);)v();var o=n.substring(i,t);if(g("="))if(g('"')){for(i=t;e&&'"'!=e&&"\n"!=e;)v();if(!g('"'))return null;r[o]=n.substring(i,t-2)}else{for(i=t;e&&" "!=e&&"]"!=e&&"\n"!=e;)v();if("]"==e)return r[o]=n.substring(i,t),r;if(!g(" "))return null;r[o]=n.substring(i,t-1)}else{if(!g(" "))return"]"==e?(r[o]=!0,r):null;r[o]=!0}}}function M(){for(var r=t;U(e);)v();return n.substring(r,t)}function U(e){return e>="a"&&e<="z"||e>="A"&&e<="Z"||e>="0"&&e<="9"}},r.fallback=function(e,i){var o=r.options,u=o.root();t=0,n=e,a=u;for(var l,s=/\b(?:https?:\/\/|sbs:)[-\w\$\.+!*'(),;/\?:@=&#%]*/g,c=0;l=s.exec(e);){o.append(u,o.text(e.substring(c,l.index)));var f=o.link({"":l[0]});o.append(f,o.text(l[0])),o.append(u,f),c=l.index+l[0].length}return o.append(u,o.text(e.substr(c))),u.node},r.parseLang=function(e,i,o){t=0,n=e,d=o?p:null;try{return(r.lang[i]||r.fallback)(e,o)}catch(u){try{return a||(a=z.root()),z.append(a,z.error(u,u.stack)),z.append(a,z.text(n.substr(t))),a.node}catch(u){alert("Unrecoverable parser error! please report this!\n"+u.stack)}}}}(),t.a=r}}]);
//# sourceMappingURL=0.e6014d36.chunk.js.map