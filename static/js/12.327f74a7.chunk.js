(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{196:function(e,t,a){},212:function(e,t,a){"use strict";a.r(t);var r=a(105),n=a(94),l=a(24),o=a(0),d=a.n(o),c=a(131);function i(e){return d.a.createElement("div",{className:"toaster"},d.a.createElement("h2",null,e.title),d.a.createElement("p",null,e.text))}var p=function(e,t){return Object(n.a)({},t,{zIndex:100,opacity:1})},s=function(e){return{transition:"ease-in-out all 0.5s"}};function u(e){return d.a.createElement(c.c,{droppableId:e.dropId},function(t,a){return d.a.createElement("div",{className:"dropable-field",ref:t.innerRef,style:s(a.isDraggingOver)},d.a.createElement("div",{className:"dropable-field-header"},e.title),d.a.createElement("div",{className:"dropable-field-drop ".concat(a.isDraggingOver?"over":"")},e.state.map(function(e,t){return d.a.createElement(c.b,{key:e.id,draggableId:e.id,index:t},function(t){return d.a.createElement("div",Object.assign({ref:t.innerRef},t.draggableProps,t.dragHandleProps,{style:p(a.isDragging,t.draggableProps.style)}),d.a.createElement(i,{title:e.content.title,text:e.content.text}))})}),t.placeholder))})}function m(){return document.title="Tasks",d.a.createElement(d.a.Fragment,null,d.a.createElement("br",null),d.a.createElement("label",null,"Enter task title"),d.a.createElement("input",{name:"text"}),d.a.createElement("label",null,"Enter task text"),d.a.createElement("input",{name:"text"}),d.a.createElement("br",null),d.a.createElement("input",{type:"submit",className:"submitButton",value:"Add Task"}),d.a.createElement("br",null),d.a.createElement("br",null))}a(196);function b(){var e=function(e,t,a){var r=Array.from(e),n=r.splice(t,1),o=Object(l.a)(n,1)[0];return r.splice(a,0,o),r},t=function(e,t,a,r){var n=Array.from(e),o=Array.from(t),d=n.splice(a.index,1),c=Object(l.a)(d,1)[0];o.splice(r.index,0,c);var i={droppable:p.toDo,droppable2:p.onHold,droppable3:p.inProcess,droppable4:p.pendingPR};return i[a.droppableId]=n,i[r.droppableId]=o,i},a=Object(o.useState)({toDo:[],onHold:[],inProcess:[],pendingPR:[]}),i=Object(l.a)(a,2),p=i[0],s=i[1],b={droppable:"toDo",droppable2:"onHold",droppable3:"inProcess",droppable4:"pendingPR"};function g(e){return p[b[e]]}return Object(o.useEffect)(function(){localStorage.getItem("counter")||localStorage.setItem("counter","0"),localStorage.getItem("data")||localStorage.setItem("data",JSON.stringify(p)),s(JSON.parse(localStorage.getItem("data")))},[]),d.a.createElement("div",null,d.a.createElement("div",{className:"task-form"},d.a.createElement("form",{onSubmit:function(e){e.preventDefault();var t=parseInt(localStorage.getItem("counter"));if(e.target[0].value&&e.target[1].value){var a="task-"+t++;localStorage.setItem("counter",JSON.stringify(t));var l=[].concat(Object(r.a)(p.toDo),[{id:a,content:{title:e.target[0].value,text:e.target[1].value}}]);localStorage.setItem("data",JSON.stringify(Object(n.a)({},p,{toDo:l}))),s(JSON.parse(localStorage.getItem("data")))}}},d.a.createElement(m,null))),d.a.createElement(c.a,{onDragEnd:function(a){var r=a.source,l=a.destination;if(!l){var o=b[a.source.droppableId],d=p;return d[o]=d[o].filter(function(e){return e.id!==a.draggableId}),localStorage.setItem("data",JSON.stringify(d)),void s(JSON.parse(localStorage.getItem("data")))}if(r.droppableId===l.droppableId){var c=e(g(r.droppableId),r.index,l.index),i=Object(n.a)({},p,{toDo:c});"droppable2"===r.droppableId&&(i=Object(n.a)({},p,{onHold:c})),"droppable3"===r.droppableId&&(i=Object(n.a)({},p,{inProcess:c})),"droppable4"===r.droppableId&&(i=Object(n.a)({},p,{pendingPR:c})),localStorage.setItem("data",JSON.stringify(i)),s(JSON.parse(localStorage.getItem("data")))}else{var u=t(g(r.droppableId),g(l.droppableId),r,l),m={toDo:u.droppable,onHold:u.droppable2,inProcess:u.droppable3,pendingPR:u.droppable4};localStorage.setItem("data",JSON.stringify(m)),s(JSON.parse(localStorage.getItem("data")))}}},d.a.createElement("div",{className:"dropable"},d.a.createElement(u,{title:"To Do",zIndex:1,state:p.toDo,dropId:"droppable"}),d.a.createElement(u,{title:"On hold",zIndex:2,state:p.onHold,dropId:"droppable2"}),d.a.createElement(u,{title:"In process",zIndex:3,state:p.inProcess,dropId:"droppable3"}),d.a.createElement(u,{title:"Pending PR",zIndex:4,state:p.pendingPR,dropId:"droppable4"}))))}a.d(t,"default",function(){return b})}}]);
//# sourceMappingURL=12.327f74a7.chunk.js.map