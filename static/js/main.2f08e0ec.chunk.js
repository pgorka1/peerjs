(this.webpackJsonppeer=this.webpackJsonppeer||[]).push([[0],[,,,,,function(e,n,t){e.exports=t(13)},,,,,function(e,n,t){},function(e,n,t){},function(e,n){function t(e){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}t.keys=function(){return[]},t.resolve=t,e.exports=t,t.id=12},function(e,n,t){"use strict";t.r(n);var o,c,a=t(0),r=t.n(a),l=t(3),u=t.n(l),i=(t(10),t(1)),s=(t(11),t(4)),f=new(t.n(s).a),m=function(e){return f.connect(e)};f.on("connection",(function(e){c(e),e.on("data",(function(e){console.log(e)}))})),f.on("open",(function(e){o(e)}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u.a.render(r.a.createElement((function(){var e=Object(a.useState)(null),n=Object(i.a)(e,2),t=n[0],l=n[1],u=Object(a.useState)(null),s=Object(i.a)(u,2),f=s[0],b=s[1],p=Object(a.useState)(null),d=Object(i.a)(p,2),E=d[0],v=d[1],h=Object(a.useState)(""),O=Object(i.a)(h,2),j=O[0],w=O[1],g=Object(a.useState)(""),k=Object(i.a)(g,2),C=k[0],S=k[1];Object(a.useEffect)((function(){t||(o=y),E||function(e){c=e}(N)}));var y=function(e){l(e)},N=function(e){v(e),console.log(e),f||x(e)},x=function(e){var n=null;return e&&(n=m(e.peer))&&b(n),n};return r.a.createElement("div",{className:"App"},r.a.createElement("h4",null,"Peerjs demo with react"),"User peerId: ",t,r.a.createElement("br",null),"connection to: ",f?f.peer:"No Connection",r.a.createElement("br",null),"connection from: ",E?E.peer:"No Connection",r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("input",{value:j,onChange:function(e){w(e.target.value)},type:"text"}),r.a.createElement("button",{onClick:function(){j.trim()&&b(m(j))}},"connect"),r.a.createElement("br",null),r.a.createElement("input",{value:C,onChange:function(e){S(e.target.value)},type:"text"}),r.a.createElement("button",{onClick:function(){C.trim()&&f.send(C)}},"Send Message"))}),null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[5,1,2]]]);
//# sourceMappingURL=main.2f08e0ec.chunk.js.map