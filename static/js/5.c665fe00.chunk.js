(this["webpackJsonpsbs-sue-client"]=this["webpackJsonpsbs-sue-client"]||[]).push([[5],{36:function(e,t,n){"use strict";n.r(t);var c=n(2),s=n(0),r=n(1),a=n(3),i=n(32);var o=function(e){var t=Object(r.useState)(e.comment.content),n=Object(c.a)(t,2),a=n[0],o=n[1];return Object(r.useEffect)((function(){var t=e.comment.content,n=t,c={m:"t"};try{var s=t.substr(0,t.indexOf("\n"));c=JSON.parse(s),n=t.substr(t.indexOf("\n")+1)}catch(u){}switch(c.m){case"t":o(n);break;case"12y":var r=i.a.parseLang(n,c.m),a=document.createElement("div");a.appendChild(r),o(a.innerHTML);break;default:o("THIS PARSING TYPE IS NOT SUPPORTED :( "+c.m)}}),[e.comment.content]),Object(s.jsxs)("div",{children:[Object(s.jsx)("strong",{children:e.user.username}),":",Object(s.jsx)("div",{dangerouslySetInnerHTML:{__html:a}})]})};function u(e){var t=Object(r.useState)("owo"),n=Object(c.a)(t,2),i=(n[0],n[1]),u=Object(r.useState)([]),d=Object(c.a)(u,2),m=d[0],b=d[1],f=Object(r.useState)([]),O=Object(c.a)(f,2),j=O[0],l=O[1],p=Object(a.f)("/sbs-sue-client/chat/:pid");return Object(r.useEffect)((function(){console.log(p.params.pid),console.log(e.usertoken);var t=parseInt(p.params.pid),n=JSON.stringify({ids:[t]}),c=JSON.stringify({parentIds:[t],reverse:!0,limit:15}),s="https://newdev.smilebasicsource.com/api/Read/chain/?requests=content-".concat(n,"&content=name,id&requests=comment-").concat(c,"&requests=user.1createUserId&content.1parentId");fetch(s,{method:"GET"}).then((function(e){return e.json()})).then((function(e){var t=e.comment,n=e.user;e.content[0];i(JSON.stringify(n)),l(n),b(t.reverse())})).catch((function(e){return console.error(e)}))}),[p.params.pid,e.usertoken]),Object(s.jsx)("div",{style:{width:"100%",height:"100%",overflow:"auto"},children:m.map((function(e){if(!e.deleted){var t=j.find((function(t){return t.id===e.createUserId}));return Object(s.jsx)(o,{user:t,comment:e},e.id)}return Object(s.jsx)("div",{},e.id)}))})}t.default=Object(r.memo)(u)}}]);
//# sourceMappingURL=5.c665fe00.chunk.js.map