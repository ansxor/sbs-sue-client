(this["webpackJsonpsbs-sue-client"]=this["webpackJsonpsbs-sue-client"]||[]).push([[0],{13:function(e,t,n){},22:function(e,t,n){},23:function(e,t,n){},24:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){"use strict";n.r(t);var r=n(0),i=n(1),o=n.n(i),c=n(15),a=n.n(c),s=(n(22),n(2)),u=n(7),l=n(3);n(23),n(24);var f=function(e){return Object(r.jsx)("button",{onClick:function(){e.selectEvent&&e.selectEvent(e.icon)},className:e.selected?"selected":"",children:Object(r.jsx)("i",{className:"fa fa-".concat(e.icon)})})};var d=function(e){var t=Object(i.useState)(""),n=Object(s.a)(t,2),o=n[0],c=n[1];return Object(i.useEffect)((function(){e.usertoken&&""!==e.usertoken&&fetch("https://newdev.smilebasicsource.com/api/User/me",{headers:{authorization:"Bearer ".concat(e.usertoken)}}).then((function(e){return e.json()})).then((function(e){return c("https://newdev.smilebasicsource.com/api/file/raw/".concat(e.avatar,"?size=64&crop=true"))})).catch((function(e){return console.error(e)}))}),[e.usertoken]),Object(r.jsx)("button",{onClick:function(){e.selectEvent&&e.selectEvent("user")},className:e.selected?"selected":"",children:""===o||""===e.usertoken?Object(r.jsx)("i",{className:"fa fa-user"}):Object(r.jsx)("img",{src:o,alt:"User Avatar"})})};function b(e){var t=Object(i.useState)("folder"),n=Object(s.a)(t,2),o=n[0],c=n[1];function a(t){c(t),e.selectEvent&&e.selectEvent(t)}return Object(r.jsxs)("div",{className:"tabList",style:{gridTemplateColumns:""===e.usertoken?"1fr 1fr":"1fr 1fr 1fr 1fr 1fr"},children:[""!==e.usertoken?["upload","list-alt","folder","heart"].map((function(e){return Object(r.jsx)(f,{selectEvent:a,icon:e,selected:e===o},e)})):["folder"].map((function(e){return Object(r.jsx)(f,{selectEvent:a,icon:e,selected:e===o},e)})),Object(r.jsx)(d,{selected:"user"===o,selectEvent:a,usertoken:e.usertoken})]})}var p=Object(i.memo)(b);var v=function(e){var t=Object(i.useState)(""),n=Object(s.a)(t,2),o=n[0],c=n[1];return Object(i.useEffect)((function(){!0===e.visible&&e.changeHeader("Upload Image")}),[e]),Object(r.jsxs)("div",{children:[Object(r.jsx)("input",{style:{},onChange:function(e){var t=e.target.files[0];t&&c(URL.createObjectURL(t))},type:"file",accept:"image/*"}),Object(r.jsx)("img",{src:o,alt:"Pasted content",style:{maxWidth:"100%",maxHeight:"100%",margin:"auto",display:"block"}})]})};var h=function(e){return Object(i.useEffect)((function(){!0===e.visible&&e.changeHeader("Activity")}),[e]),Object(r.jsx)("div",{style:{margin:"900px"},children:"HOAISDHIOASDHOASIDHOASIHDoAS"})};n(13);var j=function(e){return Object(r.jsxs)("button",{onClick:function(){return e.clickEvent(e.id)},children:[Object(r.jsx)("i",{className:"fa fa-folder-open"})," ",e.name]})};var g=function(e){return Object(r.jsx)(u.b,{to:"/sbs-sue-client/page/".concat(e.id),style:{textDecoration:"none"},children:Object(r.jsxs)("button",{onClick:function(){return e.clickEvent(e.id)},children:[Object(r.jsx)("i",{className:"fa fa-file"})," ",e.name]})})},m={};var O=function(e){var t=Object(i.useState)(e.id||0),n=Object(s.a)(t,2),o=n[0],c=n[1],a=Object(i.useState)({name:"",id:0}),u=Object(s.a)(a,2),l=u[0],f=u[1],d=Object(i.useState)([]),b=Object(s.a)(d,2),p=b[0],v=b[1],h=Object(i.useState)([]),O=Object(s.a)(h,2),x=O[0],k=O[1],y=Object(i.useState)(!1),w=Object(s.a)(y,2),C=w[0],S=w[1];function E(e){c(e)}function N(t){console.log(t),e.changePage(t)}return Object(i.useEffect)((function(){var e=o;m[e]&&(e===o&&(m[o].category!=={}?v(m[o].category):v([])),e===o&&(m[o].content!=={}?k(m[o].content):k([])),e===o&&(m[o].metadata!=={}?f(m[o].metadata):f({})));var t=JSON.stringify({parentIds:[o],sort:"name"}),n="https://newdev.smilebasicsource.com/api/Read/chain?requests=content-".concat(t,"&content=id,parentid,name&requests=category-").concat(t,"&category=id,parentId,name&requests=category.0parentId");S(!0),fetch(n).then((function(e){return e.json()})).then((function(e){var t={name:"[Root]",parentId:0,id:0};0!==o&&(t=e.category.pop()),f(t),e.category?v(e.category):v([]),e.content?(0===o&&(e.content=e.content.filter((function(e){return"Userpage"!==e.name}))),k(e.content)):k([]),S(!1),m[o]=e,m[o].metadata=t})).catch((function(e){return console.error(e)}))}),[o]),Object(i.useEffect)((function(){!0===e.visible&&e.changeHeader(l.name)}),[e,l.name]),Object(r.jsxs)("div",{style:{cursor:C?"wait":"default"},children:[Object(r.jsx)("div",{style:{display:0!==l.id?"block":"none"},children:Object(r.jsx)(j,{name:"..",id:l.parentId,clickEvent:E},o)}),p.map((function(e){return Object(r.jsx)(j,{name:e.name,id:e.id,clickEvent:E},e.id)})),x.map((function(e){return Object(r.jsx)(g,{id:e.id,name:e.name,clickEvent:N},e.id)}))]})};var x=function(e){var t=Object(i.useState)(""),n=Object(s.a)(t,2),o=n[0],c=n[1],a=Object(i.useState)(""),u=Object(s.a)(a,2),l=u[0],f=u[1];return Object(i.useEffect)((function(){!0===e.visible&&e.changeHeader("Sign in")}),[e]),Object(r.jsxs)("div",{children:[Object(r.jsxs)("label",{children:["Username:",Object(r.jsx)("br",{}),Object(r.jsx)("input",{type:"text",name:"username",value:o,onChange:function(e){c(e.target.value)}})]}),Object(r.jsx)("br",{}),Object(r.jsxs)("label",{children:["Password:",Object(r.jsx)("br",{}),Object(r.jsx)("input",{type:"password",name:"password",value:l,onChange:function(e){f(e.target.value)}})]}),Object(r.jsx)("br",{}),Object(r.jsx)("button",{onClick:function(t){if(""!==o&&""!==l){var n={username:o,password:l};console.log(n),fetch("http://newdev.smilebasicsource.com/api/User/authenticate",{method:"POST",headers:{"Content-Type":"application/json",accept:"plain/text"},body:JSON.stringify(n)}).then((function(e){return e.text()})).then((function(t){localStorage.setItem("token",t),e.setToken(t)})).catch((function(e){return console.error(e)}))}},children:"Log in"})]})};n(30);var k=function(e){var t=Object(i.useState)(""),n=Object(s.a)(t,2),o=n[0],c=n[1];return Object(i.useEffect)((function(){e.usertoken&&""!==e.usertoken&&fetch("https://newdev.smilebasicsource.com/api/User/me",{headers:{authorization:"Bearer ".concat(e.usertoken)}}).then((function(e){return e.json()})).then((function(e){return c(e.username)})).catch((function(e){return console.error(e)}))}),[e.usertoken]),Object(i.useEffect)((function(){!0===e.visible&&e.changeHeader(o)}),[e,o]),Object(r.jsxs)("div",{children:["Hiya owo",Object(r.jsx)("button",{onClick:function(){localStorage.setItem("token",""),e.setToken("")},children:"sign out"})]})};var y=function(e){var t=Object(i.useState)("folder"),n=Object(s.a)(t,2),o=n[0],c=n[1],a=Object(i.useState)("Loading..."),u=Object(s.a)(a,2),l=u[0],f=u[1];return Object(r.jsxs)("div",{className:"sidebar",children:[Object(r.jsx)("header",{children:l}),Object(r.jsxs)("div",{style:{flex:"1",overflow:"auto"},children:[Object(r.jsx)("div",{className:"upload"!==o?"hiddenTab":"",children:Object(r.jsx)(v,{changeHeader:f,visible:"upload"===o})}),Object(r.jsx)("div",{className:"list-alt"!==o?"hiddenTab":"",children:Object(r.jsx)(h,{changeHeader:f,visible:"list-alt"===o})}),Object(r.jsx)("div",{className:"folder"!==o?"hiddenTab":"",children:Object(r.jsx)(O,{changePage:e.changePage,changeHeader:f,visible:"folder"===o})}),Object(r.jsx)("div",{className:"user"!==o?"hiddenTab":"",children:""===e.usertoken?Object(r.jsx)(x,{setToken:e.setToken,changeHeader:f,visible:"user"===o}):Object(r.jsx)(k,{usertoken:e.usertoken,setToken:e.setToken,changeHeader:f,visible:"user"===o})})]}),Object(r.jsx)("div",{style:{},children:Object(r.jsx)(p,{usertoken:e.usertoken,selectEvent:function(e){c(e)}})})]})},w={lang:{}};!function(){function e(e){return document.createElement(e)}function t(e){return document.createTextNode(e)}function n(t){return function(){return{node:e(t)}}}function r(e){var t=document.createEvent("Event");return t.initEvent(e,!0,!0),t}function i(){return"http:"==window.location.protocol?"http:":"https:"}function o(){return decodeURIComponent(location.hash.substr(1)).split("#")}w.options={append:function(e,t){e=e.branch||e.node,t.nodes?t.nodes.forEach((function(t){e.appendChild(t)})):e.appendChild(t.node)},text:function(e){return{node:t(e)}},lineBreak:n("br"),line:n("hr"),invalid:function(t,n){var r=e("span");return r.className="invalid",r.title=n,r.textContent=t,{node:r}},code:function(t,n){var r=t[""],i=e("pre");return i.setAttribute("data-lang",r),{block:!0,node:i}},icode:function(t,n){var r=e("code");return r.textContent=n,{node:r,block:!1}},audio:function(t){var n=e("audio");return n.setAttribute("controls",""),n.setAttribute("src",t[""]),{block:!0,node:n}},video:function(t){var n=t[""],r=e("video");return r.setAttribute("controls",""),r.setAttribute("src",n),{block:!0,node:r}},youtube:function(t,n){var o=t[""],c=i(),a=function(e){var t=e.match(/(?:https?:\/\/)?(?:www\.)?youtu\.?be(?:\.com)?\/?.*(?:watch|embed)?(?:.*v=|v\/|\/)([\w\-_]+)\&?/);return t?t[1]:null}(o),s=e("a"),u=e("div");if(u.className="youtube",u.appendChild(s),s.href=o,a){s.style.backgroundImage='url("'+c+"//i.ytimg.com/vi/"+a+'/mqdefault.jpg")';var l=o.match(/[&?](?:t|start)=(\w+)/),f=o.match(/[&?](?:end)=(\w+)/),d=o.match(/[&?]loop(=|&|$)/);n||function(e,t){var n=new XMLHttpRequest;n.open("GET","https://www.googleapis.com/youtube/v3/videos?part=snippet&id="+e+"&key=AIzaSyBKka_xlF5pV4SMKLtQGIhOgyQsjF7UI-U"),n.onload=function(){if(200==n.status)try{var e=JSON.parse(n.responseText).items[0];t(e)}catch(r){}},n.send()}(a,(function(t){var n=e("div");n.className="pre videoTitle",n.textContent=t.snippet.title,s.appendChild(n),s.appendChild(e("br")),(n=e("div")).className="pre videoAuthor",n.textContent=t.snippet.channelTitle,s.appendChild(n)}));var b=e("span");s.appendChild(b),s.onclick=function(t){t.preventDefault(),u.dispatchEvent(r("beforeSizeChange"));var n=e("iframe"),i="https://www.youtube-nocookie.com/embed/"+a+"?autoplay=1";l&&(i+="&start="+l[1]),f&&(i+="&end="+f[1]),d&&(i+="&loop=1&playlist="+a),n.src=i,b.appendChild(n),u.className="youtube playingYoutube",u.dispatchEvent(r("afterSizeChange"))};var p=e("button");p.textContent="x",p.onclick=function(e){e.preventDefault(),u.dispatchEvent(r("beforeSizeChange")),b.innerHTML="",u.className="youtube",u.dispatchEvent(r("afterSizeChange"))},u.appendChild(p)}return{block:!0,node:u}},bg:function(e){var t=document.createElement("span"),n=e[""];return n&&t.setAttribute("data-bgcolor",n),{node:t}},root:function(){return{block:!0,node:document.createDocumentFragment()}},bold:n("b"),italic:n("i"),underline:n("u"),strikethrough:n("s"),heading:function(t){return{block:!0,node:e("h"+(t+1))}},quote:function(t){var n=t[""],r=e("blockquote");if(n){var i=e("cite");i.textContent=n,r.appendChild(i),r.appendChild(e("br"))}return{block:!0,node:r}},list:function(t){if(void 0!=t[""]){var n=e("ol");n.style.listStyleType=t[""]}else n=e("ul");return{block:!0,node:n}},item:function(t){return{block:!0,node:e("li")}},link:function(t){var n=t[""];/^ *javascript:/i.test(n)&&(n="");var r=e("a"),c=function(e){var t=e.match(/^([-\w]+:)([^]*)$/);return t?[t[1].toLowerCase(),t[2]]:[null,e]}(n);if(r.setAttribute("target","_blank"),"sbs:"==c[0])n="#"+c[1],r.removeAttribute("target");else if(!c[0])if("#"==n[0]){var a=o(),s=n.substr(1),u="#"+a[0]+"#"+s;n=u,r.onclick=function(e){var t=o();if(a[0]==t[0]&&t[1]==s){var n=document.getElementsByName("_anchor_"+s);n[0]&&n[0].scrollIntoView(),e.preventDefault()}else window.location.hash=u}}else n=i()+"//"+n;return r.setAttribute("href",n),{node:r}},table:function(t){var n=e("div");n.className="tableContainer";var r=e("table");return n.appendChild(r),{block:!0,node:n,branch:r}},row:n("tr"),cell:function(t){var n=t.h?e("th"):e("td");return t.rs&&(n.rowSpan=t.rs),t.cs&&(n.colSpan=t.cs),t.c&&("#"==t.c[0]&&(n.style.backgroundColor=t.c),n.setAttribute("data-bgcolor",t.c)),t.a&&(n.style.textAlign=t.a),n.className="cell",{node:n}},image:function(t){var n=t[""],r=e("img");return r.setAttribute("src",n),r.setAttribute("tabindex","-1"),{node:r,block:!0}},error:function(n,r){var i=e("div");i.className="error",i.appendChild(t("Markup parsing error: "));var o=e("code");if(o.textContent=n,i.appendChild(o),i.appendChild(t("\nPlease report this!")),r){var c=e("pre");c.textContent=r,i.appendChild(c)}return{node:i,block:!0}},align:function(t){var n=e("div"),r=t[""];return"left"!=r&&"right"!=r&&"center"!=r||(n.style.textAlign=r),{node:n,block:!0}},superscript:n("sup"),subscript:n("sub"),anchor:function(t){var n=t[""],r=e("a");return r.name="_anchor_"+n,{node:r,block:!0}},spoiler:function(t){var n=e("button");n.onclick=function(){null==this.getAttribute("data-show")?this.setAttribute("data-show",""):this.removeAttribute("data-show")},n.className="spoilerButton";var r=t[""];1==r&&(r="spoiler"),n.textContent=r;var i=e("div");return i.className="spoiler",{block:!0,nodes:[n,i],branch:i}}}}(),function(){var e,t,n,r,i,o,c,a,s,u,l,f=null,d={video:{},audio:{},youtube:{}};function b(){}function p(e,t,d){if(b=e,n=d,f)for(type in f)for(arg in f[type])f[type][arg].forEach((function(e){e.used=!1}));l=t,u=0,s=!0,r=!1,i="",c=o=H.root(),(a=[{node:o,type:"root"}]).top=function(){return a[a.length-1]},v(0)}function v(e){t=e-1,b()}function h(t){if(e==t)return b(),!0}function j(e){return n.substr(t,e.length)==e}function g(r){var i=t;if(r)for(;e&&"]"!=e&&"["!=e;)b();else for(;m(e);)b();return n.substring(i,t)}function m(e){return e&&/[-\w\$\.+!*'(,;/\?:@=&#%]/.test(e)}function O(e){for(var t=0;t<a.length;t++)if(a[t].type==e)return!0;return!1}function x(e){var t=a.top();return t&&t.type==e}function k(){C();var e=a.pop();if(e.node&&e.node.block&&(r=!0),a.length){for(var t=a.length-1;!a[t].node;)t--;o=a[t].node}else o=null}function y(e){C(),H.append(o,e)}function C(){i&&(H.append(o,H.text(i)),i="")}function S(){r?r=!1:(C(),y(H.lineBreak()))}function E(e){e&&(i+=e,r=!1)}function N(){for(C();a.length;)k()}function A(e,t,n){if(t.type=e,e){var i=I(f,e,n&&n[""],(function(){return l[e](n)}));t.node=i,i.block&&(r=!0),C(),H.append(o,i),o=i}return a.push(t),t}function T(){return(!n[t-1]||!/\w/.test(n[t-1]))&&(j("http://")||j("https://")||j("sbs:"))}function I(e,t,n,r){var i;if(e&&t&&e[t]){var o=function(e,t,n){var r=e[t][n];if(!r)return null;for(var i=0;i<r.length;i++)if(!r[i].used)return r[i];return null}(e,t,n);o&&(o.used=!0,i=o.node)}return!i&&t&&(i=r(),e&&e[t]&&(e[t][n]||(e[t][n]=[]),e[t][n].push({node:i,used:!0}))),i}var H=w.options;w.lang["12y"]=function(o,l){p((function(){"\n"!=e&&e?" "!=e?s=!1:s&&u++:X(),t++,e=n.charAt(t)}),H,o);for(var f={spoiler:"spoiler",align:"align",sub:"subscript",sup:"superscript",anchor:"anchor",bg:"bg"};e;)if(h("\n"))K();else if(h("\\"))"\n"==e?(C(),y(H.lineBreak())):E(e),b();else if("{"==e)F();else if(h("}"))O(null)?G(!1):E("}");else if("*"==e)if(!s||"*"!=n[t+1]&&" "!=n[t+1])V("bold",H.bold);else{for(var d=0;h("*");)d++;d>3&&(d=3),h(" ")?A("heading",{},d):R("*",d)}else if("/"==e)V("italic",H.italic);else if("_"==e)V("underline",H.underline);else if("~"==e)V("strikethrough",H.strikethrough);else if(s&&h(">")){for(var j=t;h(" ");)for(;e&&!W(e," \n{:");)b();var m=n.substring(j,t).trim();for(h(":");h(" ");)A("quote",{},{"":m})}else if(s&&h("-"))if(i="",h("-")){for(var w=2;h("-");)w++;"\n"!=e&&e?R("-",w):(y(H.line()),r=!0)}else h(" ")?(A("list",{level:u},{}),A("item",{level:u})):E("-");else if("]"==e&&a.top().inBrackets)b(),a.top().big?h("]")?k():E("]"):k();else if("|"==e){var I=a.top();if("cell"==I.type){b();var L=I.row,B=I.row.table;if((z=h("\n"))&&h("|")){null==B.columns&&(B.columns=L.cells),k(),x("row")&&k();var U=0;B.rowspans=B.rowspans.map((function(e){return U++,e-1})).filter((function(e){return e>0})),(L=A("row",{table:B,cells:U})).header=h("*"),M(L)}else L.cells++,i=i.replace(/ *$/,""),null!=B.columns&&L.cells>B.columns?(k(),x("row")&&k(),x("table")&&k(),z&&S()):(k(),M(L))}else s?(b(),B=A("table",{columns:null,rowspans:[]},{}),(L=A("row",{table:B,cells:0})).header=h("*"),M(L)):(b(),E("|"))}else if(h("`"))if(h("`"))if(h("`")){for(var q=t;e&&"\n"!=e&&"`"!=e;)b();var _=n.substring(q,t).trim().toLowerCase(),z=h("\n");q=t,t=n.indexOf("```",t),y(H.code({"":_},n.substring(q,-1!=t?t:n.length))),r=z,v(-1!=t?t+3:n.length)}else E("``");else{for(var D=t,P="";e;){if("`"==e){if("`"!=n[t+1])break;t==D+1&&" "==P[0]&&(P=P.substr(1)),b()}P+=e,b()}y(H.icode({},P)),b()}else J()||(E(e),b());return N(),c.node;function F(){if(!h("{"))return!1;A(null,{}),X();var r=t;if(h("#")){var i=function(){var r=t;for(;e>="a"&&e<="z";)b();if(t>r)return n.substring(r,t)}(),o=$(),c=f[i];!c||"spoiler"==i&&O("spoiler")?y(H.invalid(n.substring(r,t),"invalid tag")):A(c,{},o)}return X(),!0}function M(e){var t={};for(h("#")&&Object.assign(t,$()),t.rs&&e.table.rowspans.push(t.rs-1),t.cs&&(e.cells+=t.cs-1),e.header&&(t.h=!0),A("cell",{row:e},t);h(" "););}function $(){var e=t,r=n.indexOf(" ",t);r<0&&(r=n.length);var i=n.indexOf("\n",t);i>=0&&i<r&&(r=i),(i=n.indexOf("}",t))>=0&&i<r&&(r=i),(i=n.indexOf("{",t))>=0&&i<r&&(r=i),v(r),h(" ");var o=n.substring(e,r),c={};return o.split(",").forEach((function(e){var t=function(e,t){var n=e.indexOf(t);return-1==n?[e,null]:[e.substr(0,n),e.substr(n+t.length)]}(e,"=");null==t[1]&&(t[1]=!0),c[t[0]]=t[1]})),c}function R(e,t){for(;t-- >0;)E(e)}function J(){var e=h("!");return!(!function(e){if(h("[")){if(h("[")){var t=!1,n=g(!0);if(h("]")&&(h("]")||h("[")&&(t=!0)),e)var r=Q(n);else r="link";return"youtube"==r?(y(H.youtube({"":n},l)),t&&E("[")):(A(r,{big:!0},{"":n}),t?a.top().inBrackets=!0:(E(n),k())),!0}E("[")}return!1}(e)&&!function(e){if(T()){var t=g(),n=h("[");if(e)var r=Q(t);else r="link";return"youtube"==r?(y(H.youtube({"":t},l)),n&&E("[")):(A(r,{inBrackets:n},{"":t}),n||(E(t),k())),!0}}(e))||(e?(E("!"),!0):void 0)}function G(e){for(;a.length;){var t=a.top();if("root"==t.type)break;if(!e&&null==t.type){k();break}k()}}function K(){for(;;){var t=a.top();if("heading"==t.type||"quote"==t.type)k();else{if("item"!=t.type){S();break}"item"==t.type&&k();for(var n=0;h(" ");)n++;if("-"==e){for(b();h(" "););if(n==t.level)A("item",{level:n});else if(n>t.level)A("list",{level:n},{}),A("item",{level:n});else{for(;;){if(!(t=a.top())||"list"!=t.type){A("list",{level:n},{});break}if(t.level<=n)break;k()}A("item",{level:n})}break}for(;x("list");)k();R(" ",n)}}}function Q(e){return/(\.mp3(?!\w)|\.ogg(?!\w)|\.wav(?!\w)|#audio$)/.test(e)?"audio":/(\.mp4(?!\w)|\.mkv(?!\w)|#video$)/.test(e)?"video":/(?:https?:\/\/)?(?:www\.)?youtu\.?be(?:\.com)?\/?.*(?:watch|embed)?(?:.*v=|v\/|\/)([\w\-_]+)\&?/.test(e)?"youtube":"image"}function V(r,i){var o=e;b(),!function(r){return(!n[t-2]||W(n[t-2]," \t\n({'\""))&&e&&!W(e," \t\n,'\"")&&!O(r)}(r)?!function(r){return x(r)&&!W(n[t-2]," \t\n,'\"")&&(!e||W(e," \t\n-.,:!?')}\""))}(r)?E(o):k():A(r,{})}function W(e,t){return e&&-1!=t.indexOf(e)}function X(){s=!0,u=0}},w.lang.bbcode=function(i,o){var s={spoiler:!0},u={b:H.bold,i:H.italic,u:H.underline,s:H.strikethrough,sup:H.superscript,sub:H.subscript,h1:function(){return H.heading(1)},h2:function(){return H.heading(2)},h3:function(){return H.heading(3)},table:H.table,tr:H.row,td:H.cell,th:function(e,t){return H.cell(Object.assign({h:!0},t))},code:!1,align:H.align,url:H.link,youtube:!0,audio:!0,video:!0,img:!0,list:H.list,spoiler:H.spoiler,quote:H.quote,anchor:H.anchor,item:H.item};p((function(){t++,e=n.charAt(t)}),u,i);for(var l={url:function(e,t){var n=H.link({"":t});return H.append(n,H.text(t)),n},code:function(e,t){var n="inline"==e[""];return e[""]=e.lang,n?H.icode(e,t):("\n"==t[0]&&(t=t.substr(1)),H.code(e,t))},youtube:function(e,t){return H.youtube({"":t},o)},img:function(e,t){return H.image({"":t})},audio:function(e,t){return H.audio({"":t})},video:function(e,t){return H.video({"":t})}},d=0;e;)if(h("["))if(d=t-1,h("/")){var j=D();if(h("]")&&j)if("list"==j&&"item"==a.top().type&&k(),j==a.top().type){if(k(),"td"==j||"th"==j||"tr"==j)for(;h(" ")||h("\n"););}else y(H.invalid(n.substring(d,t),"unexpected closing tag"));else q()}else{if((j=D())&&u[j]){var m=!0,x={};if(h("=")){var w=t;if(h('"')){for(w++;e&&'"'!=e;)b();'"'==e&&(m=n.substring(w,t-1),b())}else{for(;e&&"]"!=e&&" "!=e;)b();"]"!=e&&" "!=e||(m=n.substring(w,t))}}if(h(" ")&&(x=z()||{}),1!=m&&(x[""]=m),h("]"))if(!l[j]||"url"==j&&1!=m)if("item"==j||!u[j]||s[j]&&O(j))y(H.invalid(n.substring(d,t),"invalid tag"));else{if("tr"==j||"table"==j)for(;h(" ")||h("\n"););A(j,{},x)}else{var C="[/"+j+"]",L=n.indexOf(C,t);if(L<0)q();else{var B=n.substring(t,L);v(L+C.length);var U=I(f,j,B,(function(){return l[j](x,B)}));y(U),U.block&&(r=!0)}}else q()}else{if(h("*")&&h("]"))"item"==a.top().type&&k(),"list"==a.top().type?A("item",{},{}):q();else q()}}else _()||(h("\n")?S():(E(e),b()));return N(),c.node;function q(){v(d),E(e),b()}function _(){if(T()){var e=g();return y(l.url({},e)),!0}}function z(){for(var r={};;){for(var i=t;P(e);)b();var o=n.substring(i,t);if(h("="))if(h('"')){for(i=t;e&&'"'!=e&&"\n"!=e;)b();if(!h('"'))return null;r[o]=n.substring(i,t-2)}else{for(i=t;e&&" "!=e&&"]"!=e&&"\n"!=e;)b();if("]"==e)return r[o]=n.substring(i,t),r;if(!h(" "))return null;r[o]=n.substring(i,t-1)}else{if(!h(" "))return"]"==e?(r[o]=!0,r):null;r[o]=!0}}}function D(){for(var r=t;P(e);)b();return n.substring(r,t)}function P(e){return e>="a"&&e<="z"||e>="A"&&e<="Z"||e>="0"&&e<="9"}},w.fallback=function(e,r){var i=w.options,o=i.root();t=0,n=e,c=o;for(var a,s=/\b(?:https?:\/\/|sbs:)[-\w\$\.+!*'(),;/\?:@=&#%]*/g,u=0;a=s.exec(e);){i.append(o,i.text(e.substring(u,a.index)));var l=i.link({"":a[0]});i.append(l,i.text(a[0])),i.append(o,l),u=a.index+a[0].length}return i.append(o,i.text(e.substr(u))),o.node},w.parseLang=function(e,r,i){t=0,n=e,f=i?d:null;try{return(w.lang[r]||w.fallback)(e,i)}catch(o){try{return c||(c=H.root()),H.append(c,H.error(o,o.stack)),H.append(c,H.text(n.substr(t))),c.node}catch(o){alert("Unrecoverable parser error! please report this!\n"+o.stack)}}}}();var C=w;var S=function(e){var t=Object(i.useState)("owo"),n=Object(s.a)(t,2),o=n[0],c=n[1],a=Object(l.f)("/sbs-sue-client/page/:pid");return Object(i.useEffect)((function(){console.log(a),fetch("https://newdev.smilebasicsource.com/api/Content?Ids=".concat(a.params.pid)).then((function(e){return e.json()})).then((function(e){var t=e[0],n=C.parseLang(t.content,t.values.markupLang),r=document.createElement("div");r.appendChild(n),c(r.innerHTML)})).catch((function(e){return console.error(e)})),c("Loading...")}),[a.url]),Object(r.jsx)("div",{style:{width:"100%",height:"100%",overflow:"auto"},dangerouslySetInnerHTML:{__html:o}})};var E=function(){return Object(r.jsx)("div",{children:"Hello OwO"})};var N=function(){var e=Object(i.useState)(""),t=Object(s.a)(e,2),n=t[0],o=t[1],c=Object(i.useState)(1829),a=Object(s.a)(c,2),f=(a[0],a[1]),d=Object(i.useState)(localStorage.getItem("token")),b=Object(s.a)(d,2),p=b[0],v=b[1];return Object(r.jsx)(u.a,{children:Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)("header",{className:"App-header",children:Object(r.jsx)("button",{onClick:function(){o(""===n?"mythehide":"")},children:"toggle sidebar view"})}),Object(r.jsxs)("main",{className:n,children:[Object(r.jsx)("div",{className:"content",children:Object(r.jsxs)(l.c,{children:[Object(r.jsx)(l.a,{path:"/sbs-sue-client/page/:pid",component:S}),Object(r.jsx)(l.a,{path:"",component:E})]})}),Object(r.jsx)(y,{setToken:v,usertoken:p,changePage:function(e){f(e)}})]})]})})},A=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,32)).then((function(t){var n=t.getCLS,r=t.getFID,i=t.getFCP,o=t.getLCP,c=t.getTTFB;n(e),r(e),i(e),o(e),c(e)}))};a.a.render(Object(r.jsx)(o.a.StrictMode,{children:Object(r.jsx)(N,{})}),document.getElementById("root")),A()}},[[31,1,2]]]);
//# sourceMappingURL=main.fabc6da3.chunk.js.map