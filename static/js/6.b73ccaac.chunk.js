(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{129:function(e,t,a){},197:function(e,t,a){},198:function(e,t,a){},199:function(e,t,a){},200:function(e,t,a){},202:function(e,t){function a(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}a.keys=function(){return[]},a.resolve=a,e.exports=a,a.id=202},203:function(e,t,a){},204:function(e,t,a){},205:function(e,t,a){},210:function(e,t,a){"use strict";a.r(t);var n=a(24),r=a(0),c=a.n(r),l=a(96),s=a.n(l),o=a(97),i=(a(197),a(105)),u=a(30);function m(e){var t=e.user,a=e.messages;return c.a.createElement(c.a.Fragment,null,a.map(function(e,a){var n=function(e){var t=new Date(e);return"".concat(t.getDate()," ").concat(["January","February","March","April","May","June","July","August","September","October","November","December"][t.getMonth()+1]," - ").concat(t.getHours(),":").concat(t.getMinutes()<10?"0"+t.getMinutes():t.getMinutes())}(e.date);return c.a.createElement("div",{className:e.user===t.id?"right":"left",key:a},c.a.createElement("p",{className:"message-text"},e.message),c.a.createElement("p",{className:"date"},n))}))}a(198);function f(){return c.a.createElement("div",{className:"lds-dual-ring"})}var d=a(98),p=a.n(d);a(199);function g(e){var t=e.selectedUser,a=e.setCallStatus,l=(e.call,Object(r.useContext)(u.a)),s=Object(r.useState)([]),o=Object(n.a)(s,2),d=o[0],g=o[1],v=Object(r.useState)(),h=Object(n.a)(v,2),b=h[0],E=h[1],w=Object(r.useState)(!1),j=Object(n.a)(w,2),O=j[0],y=j[1],N=Object(r.useState)({}),S=Object(n.a)(N,2),C=S[0],k=S[1],x=Object(r.useRef)(null),_=Object(r.useRef)(null);return Object(r.useEffect)(function(){return y(!0),p.a.get("https://git.heroku.com/rocky-reef-68087.git/users",{withCredentials:!0}).then(function(e){var a=e.data;if(k(a),a.id!==t.id){var n=a.sessions&&a.sessions[t.id]?a.sessions[t.id]:"new";l.emit("join",n,[a.id,t.id]),l.on("message",function(e){g(function(t){return[].concat(Object(i.a)(t),[e])})}),l.on("messages",function(e){g(e)}),y(!1)}else window.location.reload()}),function(){l.emit("leave"),l.removeAllListeners("message"),l.removeAllListeners("messages")}},[t.id]),Object(r.useEffect)(function(){x.current.scrollBy(0,x.current.scrollHeight)},[d]),c.a.createElement("div",{className:"TextChat"},c.a.createElement("div",{className:"chat-controller"},c.a.createElement("h2",null,"Chat with ",t.username.slice(3)),c.a.createElement("div",{className:"buttons"},c.a.createElement("i",{className:"fas fa-user-plus"}),c.a.createElement("i",{onClick:function(){return a({type:"startCall",user:t})},className:"fas fa-phone"}))),c.a.createElement("div",{ref:x,className:"messages-wrap"},c.a.createElement(m,{messages:d,user:C})),c.a.createElement("div",{className:"input"},c.a.createElement("form",{autoComplete:"off",onSubmit:function(e){e.preventDefault(e),E(""),g(function(e){return[].concat(Object(i.a)(e),[{message:b,user:C.id,date:new Date}])}),l.send(b),_.current.focus()}},c.a.createElement("input",{name:"message",ref:_,value:b,placeholder:"Type something...",onChange:function(e){e.persist(),E(e.target.value)},type:"text"}),c.a.createElement("button",{type:"submit"},"Send"))),O&&c.a.createElement(f,null))}a(200);function v(e){var t=e.user,a=e.reject,n=e.accept,r=e.className;return c.a.createElement("div",{className:"modal-frame ".concat(r)},c.a.createElement("h2",null,"Incoming call from ",t),c.a.createElement("div",{className:"modal-controls"},c.a.createElement("i",{onClick:a,className:"fas fa-phone-slash"}),c.a.createElement("i",{onClick:n,className:"fas fa-phone"})))}var h=a(201),b=a.n(h),E=(a(203),{host:"localhost",port:9e3,path:"/lis-chat"});function w(e){var t=e.callNumber,a=e.myNumber,l=e.callStatus,i=e.setCallStatus,u=Object(r.useState)({}),m=Object(n.a)(u,2),f=m[0],d=m[1],p=Object(r.useState)({}),g=Object(n.a)(p,2),h=g[0],w=g[1],j=Object(r.useState)(null),O=Object(n.a)(j,2),y=O[0],N=O[1],S=Object(r.useState)({}),C=Object(n.a)(S,2),k=C[0],x=C[1];function _(){return L.apply(this,arguments)}function L(){return(L=Object(o.a)(s.a.mark(function e(){var t,a;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=f.data,e.next=3,navigator.mediaDevices.getUserMedia({video:!0,audio:!0});case 3:a=e.sent,P(h.peer.call(t,a));case 6:case"end":return e.stop()}},e)}))).apply(this,arguments)}function P(e){var t;e.on("stream",function(a){i({type:"started"}),t=e.localStream,N(a)}),e.on("close",function(){t.getTracks().forEach(function(e){e.stop()}),d({})}),d({type:"call",call:e})}function F(){k.send({type:"rejected"}),i({type:"ended"}),d({})}return Object(r.useEffect)(function(){var e;a&&(e=new b.a(a,E),w({peer:e})),e&&(e.on("call",function(){var e=Object(o.a)(s.a.mark(function e(t){var a;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,navigator.mediaDevices.getUserMedia({video:!0,audio:!0});case 2:a=e.sent,t.answer(a),P(t);case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()),e.on("connection",function(e){e.on("data",function(t){"endCall"!==t.type?(d({type:"incomingRequest",data:t.data}),x(e)):d({})})}))},[a]),Object(r.useEffect)(function(){if("startCall"===l.type){var e=h.peer.connect(t);e.on("open",function(){e.send({type:"request",data:a})}),e.on("data",function(e){"rejected"===e.type&&(d({}),i({type:"ended"}))}),x(e)}},[l.type]),c.a.createElement(c.a.Fragment,null,c.a.createElement(v,{className:"incomingRequest"===(null===f||void 0===f?void 0:f.type)?"show":"hide",reject:F,accept:_}),c.a.createElement("div",{className:"video-chat ".concat("call"===(null===f||void 0===f?void 0:f.type)||"startCall"===l.type?"video-active":"video-hide")},"startCall"===l.type&&c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"animate"}),c.a.createElement("div",{className:"started-calling"},l.user.username.slice(0,2))),"startCall"!==l.type&&c.a.createElement("video",{autoPlay:!0,ref:function(e){return e&&y?e.srcObject=y:""}}),c.a.createElement("div",{className:"video-chat-controll"},c.a.createElement("i",{className:"fas fa-microphone-alt-slash"}),c.a.createElement("i",{onClick:function(){f.call?f.call.close():(d({}),i({type:"ended"}),k.send({type:"endCall"}))},className:"fas fa-phone-slash"}))))}a(204);function j(){var e=Object(r.useContext)(y);return c.a.createElement("div",{className:"initial-screen"},c.a.createElement("h2",null,e.first_name," ",e.last_name,c.a.createElement("br",null),"Welcom to my application."))}a(205);var O=c.a.memo(function(e){var t=e.usersList,a=e.pageState,l=e.setSelectedUser,s=Object(r.useState)([]),o=Object(n.a)(s,2),i=o[0],u=o[1],m=Object(r.useContext)(y),f=Object(r.useState)([]),d=Object(n.a)(f,2),p=d[0],g=d[1],v=Object(r.useState)([]),h=Object(n.a)(v,2),b=h[0],E=h[1];function w(e){l({id:e.target.getAttribute("data-id"),username:e.target.innerText})}function j(e){return e.map(function(e,t){var a,n,r=(a=16777214,"#"+Math.floor(Math.random()*Math.floor(a)).toString(16)).padEnd(7,"0"),l=(n=r,.2126*parseInt(n[1]+n[2],16)+.7152*parseInt(n[3]+n[4],16)+.0722*parseInt(n[5]+n[6],16)<126);return e.login===m.login?"":c.a.createElement("li",{onClick:w,key:t,"data-id":e.id},c.a.createElement("span",{style:{background:r,color:l?"#fff":"#000"}},c.a.createElement("div",{className:"status ".concat(e.isOnline?"online":"offline")}),e.first_name[0],e.last_name[0]),e.first_name," ",e.last_name)})}return Object(r.useEffect)(function(){u(t)},[t]),c.a.createElement("div",{className:"user-list-wrapper"},c.a.createElement("div",{className:"user-info"},c.a.createElement("h3",null,m.first_name," ",m.last_name),c.a.createElement("i",{onClick:function(){localStorage.removeItem("logined"),a("Login"),window.location.reload()},className:"fas fa-sign-out-alt"})),c.a.createElement("div",{className:"list-controllers"},c.a.createElement("button",{className:"user-changer"},"My Contacts"),c.a.createElement("button",{className:"user-changer"},"All Users")),c.a.createElement("input",{type:"text",value:p,onChange:function(e){e.persist(),g(e.target.value),E(function(){return t.filter(function(e){return e.login!==m.login&&e.first_name.includes(p)||e.last_name.includes(p)})}),e.target.value||E([])},className:"find user",placeholder:"Start typing"}),c.a.createElement("ul",{className:"user-list"},b.length||p.length?j(b):j(i)))}),y=c.a.createContext();function N(){var e=Object(r.useState)([]),t=Object(n.a)(e,2),a=t[0],l=t[1],i=Object(r.useState)({}),u=Object(n.a)(i,2),m=u[0],f=u[1],d=Object(r.useState)(null),h=Object(n.a)(d,2),b=h[0],E=h[1],N=Object(r.useState)(""),S=Object(n.a)(N,2),C=S[0],k=S[1],x=Object(r.useContext)(_);function L(){return P.apply(this,arguments)}function P(){return(P=Object(o.a)(s.a.mark(function e(){return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("https://git.heroku.com/rocky-reef-68087.git/offline?st=false",{withCredentials:!0});case 2:case"end":return e.stop()}},e)}))).apply(this,arguments)}function F(){return D.apply(this,arguments)}function D(){return(D=Object(o.a)(s.a.mark(function e(){return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("https://git.heroku.com/rocky-reef-68087.git/offline?st=true",{withCredentials:!0});case 2:case"end":return e.stop()}},e)}))).apply(this,arguments)}return Object(r.useEffect)(function(){return Object(o.a)(s.a.mark(function e(){var t,a;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("https://git.heroku.com/rocky-reef-68087.git/users",{withCredentials:!0});case 2:return t=e.sent,e.next=5,p.a.get("https://git.heroku.com/rocky-reef-68087.git/allUsers",{withCredentials:!0});case 5:a=e.sent,l(a.data),f(t.data);case 8:case"end":return e.stop()}},e)}))(),window.addEventListener("beforeunload",L),localStorage.getItem("logined")&&window.addEventListener("load",F),function(){window.removeEventListener("load",F),window.removeEventListener("beforeunload",L)}},[]),c.a.createElement(c.a.Fragment,null,"request"===C.type&&c.a.createElement(v,null),c.a.createElement("div",{className:"chat-wrapper"},c.a.createElement(y.Provider,{value:m},c.a.createElement(O,{usersList:a,pageState:x,setSelectedUser:E}),!b&&c.a.createElement(j,null),b&&c.a.createElement(g,{setCallStatus:k,pageState:x,selectedUser:b}),c.a.createElement(w,{setCallStatus:k,callStatus:C,pageState:x,callNumber:null===b||void 0===b?void 0:b.id,myNumber:m.id}))))}var S=a(95),C=a(94);a(129);function k(e){var t=e.setPageState,a=Object(r.useState)({login:"",password:""}),l=Object(n.a)(a,2),i=l[0],u=l[1],m=Object(r.useState)(!1),d=Object(n.a)(m,2),g=d[0],v=d[1];function h(){return(h=Object(o.a)(s.a.mark(function e(a){return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),i.login&&i.password){e.next=3;break}return e.abrupt("return");case 3:return v(!0),e.next=6,p.a.post("https://git.heroku.com/rocky-reef-68087.git/auth",i,{withCredentials:!0});case 6:200===e.sent.status&&(localStorage.setItem("logined",!0),t("Logined")),v(!1);case 9:case"end":return e.stop()}},e)}))).apply(this,arguments)}function b(e){e.persist(),u(function(t){var a;return Object(C.a)({},t,Object(S.a)({},e.target.name,null===(a=e.target)||void 0===a?void 0:a.value))})}return c.a.createElement("div",{className:"login-wrap"},c.a.createElement("div",null,c.a.createElement("form",{className:"user-connection",onSubmit:function(e){return h.apply(this,arguments)}},g&&c.a.createElement(f,null),c.a.createElement("h2",{className:"form-signin-heading"},"Sign in"),c.a.createElement("label",{htmlFor:"login"},"Login"),c.a.createElement("input",{id:"login",placeholder:"login",type:"text",name:"login",value:i.login,onChange:b}),c.a.createElement("label",{htmlFor:"login"},"Passowrd"),c.a.createElement("input",{type:"password",id:"password",className:"form-control",name:"password",placeholder:"password",value:i.password,onChange:b}),c.a.createElement("input",{className:"submitButton",type:"submit",value:"Login"}),c.a.createElement("h2",null,"Don't have an account?"),c.a.createElement("button",{onClick:function(){return t("Reg")},className:"reg_btn"},"Create an account"))))}function x(e){var t=e.setPageState,a=Object(r.useState)({login:"",password:"",confPassword:"",email:""}),l=Object(n.a)(a,2),i=l[0],u=l[1],m=Object(r.useState)(!1),d=Object(n.a)(m,2),g=d[0],v=d[1];function h(){return(h=Object(o.a)(s.a.mark(function e(a){var n;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),i.login&&i.password){e.next=3;break}return e.abrupt("return");case 3:return v(!0),e.prev=4,e.next=7,p.a.post("https://git.heroku.com/rocky-reef-68087.git/register",i);case 7:n=e.sent,console.log(n),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(4),v(!1);case 14:v(!1),t("Login");case 16:case"end":return e.stop()}},e,null,[[4,11]])}))).apply(this,arguments)}function b(e){e.persist(),u(function(t){var a;return Object(C.a)({},t,Object(S.a)({},e.target.name,null===(a=e.target)||void 0===a?void 0:a.value))})}return c.a.createElement("div",{className:"login-wrap"},c.a.createElement("div",null,c.a.createElement("form",{className:"user-connection",onSubmit:function(e){return h.apply(this,arguments)}},g&&c.a.createElement(f,null),c.a.createElement("h2",{className:"form-signin-heading"},"Sign up"),c.a.createElement("label",{htmlFor:"login"},"Login"),c.a.createElement("input",{id:"login",placeholder:"login",type:"text",name:"login",value:i.login,onChange:b}),c.a.createElement("label",{htmlFor:"login"},"Passowrd"),c.a.createElement("input",{type:"password",autoComplete:"off",id:"password",className:"form-control",name:"password",placeholder:"password",value:i.password,onChange:b}),c.a.createElement("label",{htmlFor:"confPassword"},"Confirm Passowrd"),c.a.createElement("input",{id:"confPassword",autoComplete:"off",placeholder:"Password",type:"password",name:"confPassword",value:i.confPassword,onChange:b}),c.a.createElement("label",{htmlFor:"login"},"Email (optional)"),c.a.createElement("input",{id:"email",placeholder:"email",type:"mail",name:"email",value:i.email,onChange:b}),c.a.createElement("label",{htmlFor:"login"},"First Name"),c.a.createElement("input",{id:"first_name",placeholder:"first_name",type:"text",name:"first_name",value:i.first_name,onChange:b}),c.a.createElement("label",{htmlFor:"login"},"Last Name"),c.a.createElement("input",{id:"last_name",placeholder:"last_name",type:"mail",name:"last_name",value:i.last_name,onChange:b}),c.a.createElement("input",{className:"submitButton",type:"submit",value:"Start!"}),c.a.createElement("h2",null,"Do have an account?"),c.a.createElement("button",{onClick:function(){return t("Login")},className:"reg_btn"},"Sign In"))))}a.d(t,"PageState",function(){return _}),a.d(t,"default",function(){return L});var _=c.a.createContext();function L(){var e=Object(r.useState)("Login"),t=Object(n.a)(e,2),a=t[0],l=t[1];if(!localStorage.getItem("logined")){if("Login"===a)return c.a.createElement(k,{setPageState:l});if("Reg"===a)return c.a.createElement(x,{setPageState:l})}return c.a.createElement(r.Suspense,{fallback:c.a.createElement("div",{className:"spinner-main"},c.a.createElement(f,null))},c.a.createElement(_.Provider,{value:l},c.a.createElement(N,{user:a.users})))}}}]);
//# sourceMappingURL=6.b73ccaac.chunk.js.map