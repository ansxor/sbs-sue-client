(this["webpackJsonpsbs-sue-client"]=this["webpackJsonpsbs-sue-client"]||[]).push([[0],{13:function(e,t,n){},22:function(e,t,n){},23:function(e,t,n){},24:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){"use strict";n.r(t);var r=n(1),i=n(0),o=n.n(i),a=n(15),c=n.n(a),s=(n(22),n(3)),u=n(7),l=n(2);n(23),n(24);var f=function(e){return Object(r.jsx)("button",{onClick:function(){e.selectEvent&&e.selectEvent(e.icon)},className:e.selected?"selected":"",children:Object(r.jsx)("i",{className:"fa fa-".concat(e.icon)})})};var d=function(e){var t=Object(i.useState)(""),n=Object(s.a)(t,2),o=n[0],a=n[1];return Object(i.useEffect)((function(){e.usertoken&&""!==e.usertoken&&fetch("https://newdev.smilebasicsource.com/api/User/me",{headers:{authorization:"Bearer ".concat(e.usertoken)}}).then((function(e){return e.json()})).then((function(e){return a("https://newdev.smilebasicsource.com/api/file/raw/".concat(e.avatar,"?size=64&crop=true"))})).catch((function(e){return console.error(e)}))}),[e.usertoken]),Object(r.jsxs)("button",{onClick:function(){e.selectEvent&&e.selectEvent(e.icon)},className:e.selected?"selected":"",children:[Object(r.jsx)("i",{className:"fa fa-user",style:{display:""!==o?"none":""}}),Object(r.jsx)("img",{src:o,alt:"User Avatar",style:{display:""===o?"none":""}})]})};function b(e){var t=Object(i.useState)("upload"),n=Object(s.a)(t,2),o=n[0],a=n[1];function c(t){a(t),e.selectEvent&&e.selectEvent(t)}return Object(r.jsxs)("div",{className:"tabList",children:[["upload","list-alt","folder","heart"].map((function(e){return Object(r.jsx)(f,{selectEvent:c,icon:e,selected:e===o},e)})),Object(r.jsx)(d,{selectEvent:c,usertoken:e.usertoken})]})}var p=Object(i.memo)(b);var v=function(e){var t=Object(i.useState)(""),n=Object(s.a)(t,2),o=n[0],a=n[1];return Object(i.useEffect)((function(){!0===e.visible&&e.changeHeader("Upload Image")}),[e]),Object(r.jsxs)("div",{children:[Object(r.jsx)("input",{style:{},onChange:function(e){var t=e.target.files[0];t&&a(URL.createObjectURL(t))},type:"file",accept:"image/*"}),Object(r.jsx)("img",{src:o,alt:"Pasted content",style:{maxWidth:"100%",maxHeight:"100%",margin:"auto",display:"block"}})]})};var h=function(e){return Object(i.useEffect)((function(){!0===e.visible&&e.changeHeader("Activity")}),[e]),Object(r.jsx)("div",{style:{margin:"900px"},children:"HOAISDHIOASDHOASIDHOASIHDoAS"})};n(13);var g=function(e){return Object(r.jsxs)("button",{onClick:function(){return e.clickEvent(e.id)},children:[Object(r.jsx)("i",{className:"fa fa-folder-open"})," ",e.name]})};var m=function(e){return Object(r.jsx)(u.b,{to:"/sbs-sue-client/page/".concat(e.id),style:{textDecoration:"none"},children:Object(r.jsxs)("button",{onClick:function(){return e.clickEvent(e.id)},children:[Object(r.jsx)("i",{className:"fa fa-file"})," ",e.name]})})},j={};var O=function(e){var t=Object(i.useState)(e.id||0),n=Object(s.a)(t,2),o=n[0],a=n[1],c=Object(i.useState)({name:"",id:0}),u=Object(s.a)(c,2),l=u[0],f=u[1],d=Object(i.useState)([]),b=Object(s.a)(d,2),p=b[0],v=b[1],h=Object(i.useState)([]),O=Object(s.a)(h,2),x=O[0],y=O[1],k=Object(i.useState)(!1),w=Object(s.a)(k,2),C=w[0],E=w[1];function S(e){a(e)}function A(t){console.log(t),e.changePage(t)}return Object(i.useEffect)((function(){var e=o;j[e]&&(e===o&&(j[o].category!=={}?v(j[o].category):v([])),e===o&&(j[o].content!=={}?y(j[o].content):y([])),e===o&&(j[o].metadata!=={}?f(j[o].metadata):f({})));var t=JSON.stringify({parentIds:[o],sort:"name"}),n="https://newdev.smilebasicsource.com/api/Read/chain?requests=content-".concat(t,"&content=id,parentid,name&requests=category-").concat(t,"&category=id,parentId,name&requests=category.0parentId");E(!0),fetch(n).then((function(e){return e.json()})).then((function(e){var t={name:"[Root]",parentId:0,id:0};0!==o&&(t=e.category.pop()),f(t),e.category?v(e.category):v([]),e.content?(0===o&&(e.content=e.content.filter((function(e){return"Userpage"!==e.name}))),y(e.content)):y([]),E(!1),j[o]=e,j[o].metadata=t})).catch((function(e){return console.error(e)}))}),[o]),Object(i.useEffect)((function(){!0===e.visible&&e.changeHeader(l.name)}),[e,l.name]),Object(r.jsxs)("div",{style:{cursor:C?"wait":"default"},children:[Object(r.jsx)("div",{style:{display:0!==l.id?"block":"none"},children:Object(r.jsx)(g,{name:"..",id:l.parentId,clickEvent:S},o)}),p.map((function(e){return Object(r.jsx)(g,{name:e.name,id:e.id,clickEvent:S},e.id)})),x.map((function(e){return Object(r.jsx)(m,{id:e.id,name:e.name,clickEvent:A},e.id)}))]})};n(30);var x=function(e){var t=Object(i.useState)("upload"),n=Object(s.a)(t,2),o=n[0],a=n[1],c=Object(i.useState)("Loading..."),u=Object(s.a)(c,2),l=u[0],f=u[1];return Object(r.jsxs)("div",{className:"sidebar",children:[Object(r.jsx)("header",{children:l}),Object(r.jsxs)("div",{style:{flex:"1",overflow:"auto"},children:[Object(r.jsx)("div",{className:"upload"!==o?"hiddenTab":"",children:Object(r.jsx)(v,{changeHeader:f,visible:"upload"===o})}),Object(r.jsx)("div",{className:"list-alt"!==o?"hiddenTab":"",children:Object(r.jsx)(h,{changeHeader:f,visible:"list-alt"===o})}),Object(r.jsx)("div",{className:"folder"!==o?"hiddenTab":"",children:Object(r.jsx)(O,{changePage:e.changePage,changeHeader:f,visible:"folder"===o})})]}),Object(r.jsx)("div",{style:{},children:Object(r.jsx)(p,{usertoken:e.usertoken,selectEvent:function(e){a(e)}})})]})},y={lang:{}};!function(){function e(e){return document.createElement(e)}function t(e){return document.createTextNode(e)}function n(t){return function(){return{node:e(t)}}}function r(e){var t=document.createEvent("Event");return t.initEvent(e,!0,!0),t}function i(){return"http:"==window.location.protocol?"http:":"https:"}function o(){return decodeURIComponent(location.hash.substr(1)).split("#")}y.options={append:function(e,t){e=e.branch||e.node,t.nodes?t.nodes.forEach((function(t){e.appendChild(t)})):e.appendChild(t.node)},text:function(e){return{node:t(e)}},lineBreak:n("br"),line:n("hr"),invalid:function(t,n){var r=e("span");return r.className="invalid",r.title=n,r.textContent=t,{node:r}},code:function(t,n){var r=t[""],i=e("pre");return i.setAttribute("data-lang",r),{block:!0,node:i}},icode:function(t,n){var r=e("code");return r.textContent=n,{node:r,block:!1}},audio:function(t){var n=e("audio");return n.setAttribute("controls",""),n.setAttribute("src",t[""]),{block:!0,node:n}},video:function(t){var n=t[""],r=e("video");return r.setAttribute("controls",""),r.setAttribute("src",n),{block:!0,node:r}},youtube:function(t,n){var o=t[""],a=i(),c=function(e){var t=e.match(/(?:https?:\/\/)?(?:www\.)?youtu\.?be(?:\.com)?\/?.*(?:watch|embed)?(?:.*v=|v\/|\/)([\w\-_]+)\&?/);return t?t[1]:null}(o),s=e("a"),u=e("div");if(u.className="youtube",u.appendChild(s),s.href=o,c){s.style.backgroundImage='url("'+a+"//i.ytimg.com/vi/"+c+'/mqdefault.jpg")';var l=o.match(/[&?](?:t|start)=(\w+)/),f=o.match(/[&?](?:end)=(\w+)/),d=o.match(/[&?]loop(=|&|$)/);n||function(e,t){var n=new XMLHttpRequest;n.open("GET","https://www.googleapis.com/youtube/v3/videos?part=snippet&id="+e+"&key=AIzaSyBKka_xlF5pV4SMKLtQGIhOgyQsjF7UI-U"),n.onload=function(){if(200==n.status)try{var e=JSON.parse(n.responseText).items[0];t(e)}catch(r){}},n.send()}(c,(function(t){var n=e("div");n.className="pre videoTitle",n.textContent=t.snippet.title,s.appendChild(n),s.appendChild(e("br")),(n=e("div")).className="pre videoAuthor",n.textContent=t.snippet.channelTitle,s.appendChild(n)}));var b=e("span");s.appendChild(b),s.onclick=function(t){t.preventDefault(),u.dispatchEvent(r("beforeSizeChange"));var n=e("iframe"),i="https://www.youtube-nocookie.com/embed/"+c+"?autoplay=1";l&&(i+="&start="+l[1]),f&&(i+="&end="+f[1]),d&&(i+="&loop=1&playlist="+c),n.src=i,b.appendChild(n),u.className="youtube playingYoutube",u.dispatchEvent(r("afterSizeChange"))};var p=e("button");p.textContent="x",p.onclick=function(e){e.preventDefault(),u.dispatchEvent(r("beforeSizeChange")),b.innerHTML="",u.className="youtube",u.dispatchEvent(r("afterSizeChange"))},u.appendChild(p)}return{block:!0,node:u}},bg:function(e){var t=document.createElement("span"),n=e[""];return n&&t.setAttribute("data-bgcolor",n),{node:t}},root:function(){return{block:!0,node:document.createDocumentFragment()}},bold:n("b"),italic:n("i"),underline:n("u"),strikethrough:n("s"),heading:function(t){return{block:!0,node:e("h"+(t+1))}},quote:function(t){var n=t[""],r=e("blockquote");if(n){var i=e("cite");i.textContent=n,r.appendChild(i),r.appendChild(e("br"))}return{block:!0,node:r}},list:function(t){if(void 0!=t[""]){var n=e("ol");n.style.listStyleType=t[""]}else n=e("ul");return{block:!0,node:n}},item:function(t){return{block:!0,node:e("li")}},link:function(t){var n=t[""];/^ *javascript:/i.test(n)&&(n="");var r=e("a"),a=function(e){var t=e.match(/^([-\w]+:)([^]*)$/);return t?[t[1].toLowerCase(),t[2]]:[null,e]}(n);if(r.setAttribute("target","_blank"),"sbs:"==a[0])n="#"+a[1],r.removeAttribute("target");else if(!a[0])if("#"==n[0]){var c=o(),s=n.substr(1);hash="#"+c[0]+"#"+s,n=hash,r.onclick=function(e){var t=o();if(c[0]==t[0]&&t[1]==s){var n=document.getElementsByName("_anchor_"+s);n[0]&&n[0].scrollIntoView(),e.preventDefault()}else window.location.hash=hash}}else n=i()+"//"+n;return r.setAttribute("href",n),{node:r}},table:function(t){var n=e("div");n.className="tableContainer";var r=e("table");return n.appendChild(r),{block:!0,node:n,branch:r}},row:n("tr"),cell:function(t){var n=t.h?e("th"):e("td");return t.rs&&(n.rowSpan=t.rs),t.cs&&(n.colSpan=t.cs),t.c&&("#"==t.c[0]&&(n.style.backgroundColor=t.c),n.setAttribute("data-bgcolor",t.c)),t.a&&(n.style.textAlign=t.a),n.className="cell",{node:n}},image:function(t){var n=t[""],r=e("img");return r.setAttribute("src",n),r.setAttribute("tabindex","-1"),{node:r,block:!0}},error:function(n,r){var i=e("div");i.className="error",i.appendChild(t("Markup parsing error: "));var o=e("code");if(o.textContent=n,i.appendChild(o),i.appendChild(t("\nPlease report this!")),r){var a=e("pre");a.textContent=r,i.appendChild(a)}return{node:i,block:!0}},align:function(t){var n=e("div"),r=t[""];return"left"!=r&&"right"!=r&&"center"!=r||(n.style.textAlign=r),{node:n,block:!0}},superscript:n("sup"),subscript:n("sub"),anchor:function(t){var n=t[""],r=e("a");return r.name="_anchor_"+n,{node:r,block:!0}},spoiler:function(t){var n=e("button");n.onclick=function(){null==this.getAttribute("data-show")?this.setAttribute("data-show",""):this.removeAttribute("data-show")},n.className="spoilerButton";var r=t[""];1==r&&(r="spoiler"),n.textContent=r;var i=e("div");return i.className="spoiler",{block:!0,nodes:[n,i],branch:i}}}}(),function(){var e,t,n,r,i,o,a,c,s,u,l,f=null,d={video:{},audio:{},youtube:{}};function b(){}function p(e,t,d){if(b=e,n=d,f)for(type in f)for(arg in f[type])f[type][arg].forEach((function(e){e.used=!1}));l=t,u=0,s=!0,r=!1,i="",a=o=L.root(),(c=[{node:o,type:"root"}]).top=function(){return c[c.length-1]},v(0)}function v(e){t=e-1,b()}function h(t){if(e==t)return b(),!0}function g(e){return n.substr(t,e.length)==e}function m(r){var i=t;if(r)for(;e&&"]"!=e&&"["!=e;)b();else for(;j(e);)b();return n.substring(i,t)}function j(e){return e&&/[-\w\$\.+!*'(,;/\?:@=&#%]/.test(e)}function O(e){for(var t=0;t<c.length;t++)if(c[t].type==e)return!0;return!1}function x(e){var t=c.top();return t&&t.type==e}function k(){C();var e=c.pop();if(e.node&&e.node.block&&(r=!0),c.length){for(var t=c.length-1;!c[t].node;)t--;o=c[t].node}else o=null}function w(e){C(),L.append(o,e)}function C(){i&&(L.append(o,L.text(i)),i="")}function E(){r?r=!1:(C(),w(L.lineBreak()))}function S(e){e&&(i+=e,r=!1)}function A(){for(C();c.length;)k()}function N(e,t,n){if(t.type=e,e){var i=H(f,e,n&&n[""],(function(){return l[e](n)}));t.node=i,i.block&&(r=!0),C(),L.append(o,i),o=i}return c.push(t),t}function I(){return(!n[t-1]||!/\w/.test(n[t-1]))&&(g("http://")||g("https://")||g("sbs:"))}function H(e,t,n,r){var i;if(e&&t&&e[t]){var o=function(e,t,n){var r=e[t][n];if(!r)return null;for(var i=0;i<r.length;i++)if(!r[i].used)return r[i];return null}(e,t,n);o&&(o.used=!0,i=o.node)}return!i&&t&&(i=r(),e&&e[t]&&(e[t][n]||(e[t][n]=[]),e[t][n].push({node:i,used:!0}))),i}var L=y.options;y.lang["12y"]=function(o,l){p((function(){"\n"!=e&&e?" "!=e?s=!1:s&&u++:W(),t++,e=n.charAt(t)}),L,o);for(var f={spoiler:"spoiler",align:"align",sub:"subscript",sup:"superscript",anchor:"anchor",bg:"bg"};e;)if(h("\n"))G();else if(h("\\"))"\n"==e?(C(),w(L.lineBreak())):S(e),b();else if("{"==e)M();else if(h("}"))O(null)?J(!1):S("}");else if("*"==e)if(!s||"*"!=n[t+1]&&" "!=n[t+1])Q("bold",L.bold);else{for(var d=0;h("*");)d++;d>3&&(d=3),h(" ")?N("heading",{},d):$("*",d)}else if("/"==e)Q("italic",L.italic);else if("_"==e)Q("underline",L.underline);else if("~"==e)Q("strikethrough",L.strikethrough);else if(s&&h(">")){for(start=t;h(" ");)for(;e&&!V(e," \n{:");)b();var g=n.substring(start,t).trim();for(h(":");h(" ");)N("quote",{},{"":g})}else if(s&&h("-"))if(i="",h("-")){for(var j=2;h("-");)j++;"\n"!=e&&e?$("-",j):(w(L.line()),r=!0)}else h(" ")?(N("list",{level:u},{}),N("item",{level:u})):S("-");else if("]"==e&&c.top().inBrackets)b(),c.top().big?h("]")?k():S("]"):k();else if("|"==e){var y=c.top();if("cell"==y.type){b();var H=y.row,T=y.row.table;if((D=h("\n"))&&h("|")){null==T.columns&&(T.columns=H.cells),k(),x("row")&&k();var B=0;T.rowspans=T.rowspans.map((function(e){return B++,e-1})).filter((function(e){return e>0})),(H=N("row",{table:T,cells:B})).header=h("*"),P(H)}else H.cells++,i=i.replace(/ *$/,""),null!=T.columns&&H.cells>T.columns?(k(),x("row")&&k(),x("table")&&k(),D&&E()):(k(),P(H))}else s?(b(),T=N("table",{columns:null,rowspans:[]},{}),(H=N("row",{table:T,cells:0})).header=h("*"),P(H)):(b(),S("|"))}else if(h("`"))if(h("`"))if(h("`")){for(var q=t;e&&"\n"!=e&&"`"!=e;)b();var _=n.substring(q,t).trim().toLowerCase(),D=h("\n");q=t,t=n.indexOf("```",t),w(L.code({"":_},n.substring(q,-1!=t?t:n.length))),r=D,v(-1!=t?t+3:n.length)}else S("``");else{for(var U=t,z="";e;){if("`"==e){if("`"!=n[t+1])break;t==U+1&&" "==z[0]&&(z=z.substr(1)),b()}z+=e,b()}w(L.icode({},z)),b()}else R()||(S(e),b());return A(),a.node;function M(){if(!h("{"))return!1;N(null,{}),W();var r=t;if(h("#")){var i=function(){var r=t;for(;e>="a"&&e<="z";)b();if(t>r)return n.substring(r,t)}(),o=F(),a=f[i];!a||"spoiler"==i&&O("spoiler")?w(L.invalid(n.substring(r,t),"invalid tag")):N(a,{},o)}return W(),!0}function P(e){var t={};for(h("#")&&Object.assign(t,F()),t.rs&&e.table.rowspans.push(t.rs-1),t.cs&&(e.cells+=t.cs-1),e.header&&(t.h=!0),N("cell",{row:e},t);h(" "););}function F(){var e=t,r=n.indexOf(" ",t);r<0&&(r=n.length);var i=n.indexOf("\n",t);i>=0&&i<r&&(r=i),(i=n.indexOf("}",t))>=0&&i<r&&(r=i),(i=n.indexOf("{",t))>=0&&i<r&&(r=i),v(r),h(" ");var o=n.substring(e,r),a={};return o.split(",").forEach((function(e){var t=function(e,t){var n=e.indexOf(t);return-1==n?[e,null]:[e.substr(0,n),e.substr(n+t.length)]}(e,"=");null==t[1]&&(t[1]=!0),a[t[0]]=t[1]})),a}function $(e,t){for(;t-- >0;)S(e)}function R(){var e=h("!");return!(!function(e){if(h("[")){if(h("[")){var t=!1,n=m(!0);if(h("]")&&(h("]")||h("[")&&(t=!0)),e)var r=K(n);else r="link";return"youtube"==r?(w(L.youtube({"":n},l)),t&&S("[")):(N(r,{big:!0},{"":n}),t?c.top().inBrackets=!0:(S(n),k())),!0}S("[")}return!1}(e)&&!function(e){if(I()){var t=m(),n=h("[");if(e)var r=K(t);else r="link";return"youtube"==r?(w(L.youtube({"":t},l)),n&&S("[")):(N(r,{inBrackets:n},{"":t}),n||(S(t),k())),!0}}(e))||(e?(S("!"),!0):void 0)}function J(e){for(;c.length;){var t=c.top();if("root"==t.type)break;if(!e&&null==t.type){k();break}k()}}function G(){for(;;){var t=c.top();if("heading"==t.type||"quote"==t.type)k();else{if("item"!=t.type){E();break}"item"==t.type&&k();for(var n=0;h(" ");)n++;if("-"==e){for(b();h(" "););if(n==t.level)N("item",{level:n});else if(n>t.level)N("list",{level:n},{}),N("item",{level:n});else{for(;;){if(!(t=c.top())||"list"!=t.type){N("list",{level:n},{});break}if(t.level<=n)break;k()}N("item",{level:n})}break}for(;x("list");)k();$(" ",n)}}}function K(e){return/(\.mp3(?!\w)|\.ogg(?!\w)|\.wav(?!\w)|#audio$)/.test(e)?"audio":/(\.mp4(?!\w)|\.mkv(?!\w)|#video$)/.test(e)?"video":/(?:https?:\/\/)?(?:www\.)?youtu\.?be(?:\.com)?\/?.*(?:watch|embed)?(?:.*v=|v\/|\/)([\w\-_]+)\&?/.test(e)?"youtube":"image"}function Q(r,i){var o=e;b(),!function(r){return(!n[t-2]||V(n[t-2]," \t\n({'\""))&&e&&!V(e," \t\n,'\"")&&!O(r)}(r)?!function(r){return x(r)&&!V(n[t-2]," \t\n,'\"")&&(!e||V(e," \t\n-.,:!?')}\""))}(r)?S(o):k():N(r,{})}function V(e,t){return e&&-1!=t.indexOf(e)}function W(){s=!0,u=0}},y.lang.bbcode=function(i,o){var s={spoiler:!0},u={b:L.bold,i:L.italic,u:L.underline,s:L.strikethrough,sup:L.superscript,sub:L.subscript,h1:function(){return L.heading(1)},h2:function(){return L.heading(2)},h3:function(){return L.heading(3)},table:L.table,tr:L.row,td:L.cell,th:function(e,t){return L.cell(Object.assign({h:!0},t))},code:!1,align:L.align,url:L.link,youtube:!0,audio:!0,video:!0,img:!0,list:L.list,spoiler:L.spoiler,quote:L.quote,anchor:L.anchor,item:L.item};p((function(){t++,e=n.charAt(t)}),u,i);for(var l={url:function(e,t){var n=L.link({"":t});return L.append(n,L.text(t)),n},code:function(e,t){var n="inline"==e[""];return e[""]=e.lang,n?L.icode(e,t):("\n"==t[0]&&(t=t.substr(1)),L.code(e,t))},youtube:function(e,t){return L.youtube({"":t},o)},img:function(e,t){return L.image({"":t})},audio:function(e,t){return L.audio({"":t})},video:function(e,t){return L.video({"":t})}},d=0;e;)if(h("["))if(d=t-1,h("/")){var g=z();if(h("]")&&g)if("list"==g&&"item"==c.top().type&&k(),g==c.top().type){if(k(),"td"==g||"th"==g||"tr"==g)for(;h(" ")||h("\n"););}else w(L.invalid(n.substring(d,t),"unexpected closing tag"));else _()}else{if((g=z())&&u[g]){var j=!0,x={};if(h("=")){var y=t;if(h('"')){for(y++;e&&'"'!=e;)b();'"'==e&&(j=n.substring(y,t-1),b())}else{for(;e&&"]"!=e&&" "!=e;)b();"]"!=e&&" "!=e||(j=n.substring(y,t))}}if(h(" ")&&(x=U()||{}),1!=j&&(x[""]=j),h("]"))if(!l[g]||"url"==g&&1!=j)if("item"==g||!u[g]||s[g]&&O(g))w(L.invalid(n.substring(d,t),"invalid tag"));else{if("tr"==g||"table"==g)for(;h(" ")||h("\n"););N(g,{},x)}else{var C="[/"+g+"]",T=n.indexOf(C,t);if(T<0)_();else{var B=n.substring(t,T);v(T+C.length);var q=H(f,g,B,(function(){return l[g](x,B)}));w(q),q.block&&(r=!0)}}else _()}else{if(h("*")&&h("]"))"item"==c.top().type&&k(),"list"==c.top().type?N("item",{},{}):_();else _()}}else D()||(h("\n")?E():(S(e),b()));return A(),a.node;function _(){v(d),S(e),b()}function D(){if(I()){var e=m();return w(l.url({},e)),!0}}function U(){for(var r={};;){for(var i=t;M(e);)b();var o=n.substring(i,t);if(h("="))if(h('"')){for(i=t;e&&'"'!=e&&"\n"!=e;)b();if(!h('"'))return null;r[o]=n.substring(i,t-2)}else{for(i=t;e&&" "!=e&&"]"!=e&&"\n"!=e;)b();if("]"==e)return r[o]=n.substring(i,t),r;if(!h(" "))return null;r[o]=n.substring(i,t-1)}else{if(!h(" "))return"]"==e?(r[o]=!0,r):null;r[o]=!0}}}function z(){for(var r=t;M(e);)b();return n.substring(r,t)}function M(e){return e>="a"&&e<="z"||e>="A"&&e<="Z"||e>="0"&&e<="9"}},y.fallback=function(e,r){var i=y.options,o=i.root();t=0,n=e,a=o;for(var c,s=/\b(?:https?:\/\/|sbs:)[-\w\$\.+!*'(),;/\?:@=&#%]*/g,u=0;c=s.exec(e);){i.append(o,i.text(e.substring(u,c.index)));var l=i.link({"":c[0]});i.append(l,i.text(c[0])),i.append(o,l),u=c.index+c[0].length}return i.append(o,i.text(e.substr(u))),o.node},y.parseLang=function(e,r,i){t=0,n=e,f=i?d:null;try{return(y.lang[r]||y.fallback)(e,i)}catch(o){try{return a||(a=L.root()),L.append(a,L.error(o,o.stack)),L.append(a,L.text(n.substr(t))),a.node}catch(o){alert("Unrecoverable parser error! please report this!\n"+o.stack)}}}}();var k=y;var w=function(e){var t=Object(i.useState)("owo"),n=Object(s.a)(t,2),o=n[0],a=n[1],c=Object(l.f)("/page/:pid");return Object(i.useEffect)((function(){console.log(c),fetch("https://newdev.smilebasicsource.com/api/Content?Ids=".concat(c.params.pid)).then((function(e){return e.json()})).then((function(e){var t=e[0],n=k.parseLang(t.content,t.values.markupLang),r=document.createElement("div");r.appendChild(n),console.log(n),console.log(r.innerHTML),a(r.innerHTML)})).catch((function(e){return console.error(e)})),a("Loading...")}),[c.url]),Object(r.jsx)("div",{style:{width:"100%",height:"100%",overflow:"auto"},dangerouslySetInnerHTML:{__html:o}})};var C=function(){return Object(r.jsx)("div",{children:"Hello OwO"})};var E=function(){var e=Object(i.useState)(""),t=Object(s.a)(e,2),n=t[0],o=t[1],a=Object(i.useState)(1829),c=Object(s.a)(a,2),f=(c[0],c[1]);return Object(r.jsx)(u.a,{children:Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)("header",{className:"App-header",children:Object(r.jsx)("button",{onClick:function(){o(""===n?"mythehide":""),console.log(n)},children:"toggle sidebar view"})}),Object(r.jsxs)("main",{className:n,children:[Object(r.jsx)("div",{className:"content",children:Object(r.jsxs)(l.c,{children:[Object(r.jsx)(l.a,{path:"sbs-sue-client/page/:pid",component:w}),Object(r.jsx)(l.a,{path:"/",component:C})]})}),Object(r.jsx)(x,{changePage:function(e){f(e)}})]})]})})},S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,32)).then((function(t){var n=t.getCLS,r=t.getFID,i=t.getFCP,o=t.getLCP,a=t.getTTFB;n(e),r(e),i(e),o(e),a(e)}))};c.a.render(Object(r.jsx)(o.a.StrictMode,{children:Object(r.jsx)(E,{})}),document.getElementById("root")),S()}},[[31,1,2]]]);
//# sourceMappingURL=main.8679ac04.chunk.js.map