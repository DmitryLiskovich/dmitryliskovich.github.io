(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{155:function(e,t,a){},211:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(107),c=a(130);a(155);var i=a(105),o=[{id:0,title:"A first note",note:"Need create server and get data from MongoDB. But i will not do it :). I don`t know how this will work at GH page. Created with Redux."}];var u=Object(r.d)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_POST":return[].concat(Object(i.a)(e),[t.payload]);case"DELETE_POST":return e.filter(function(e){return e.id!==parseInt(t.payload.id)});default:return e}},window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),d=Object(c.b)(function(e){return{data:e}})(function(e){document.title="Notes";var t=e.dispatch;function a(e){var a={id:e.target.value};t(function(e){return{type:"DELETE_POST",payload:e}}(a))}var n=e.data.map(function(e){return l.a.createElement("div",{className:"note",key:e.id},l.a.createElement("div",{className:"note-wrapp"},l.a.createElement("div",{className:"note-header"},l.a.createElement("div",{className:"header-toast"},e.title,l.a.createElement("button",{className:"close",onClick:a,value:e.id},"X"))),l.a.createElement("div",{className:"note-body"},e.note)))});return l.a.createElement("div",null,l.a.createElement("div",{className:"notes-main"},l.a.createElement("form",{onSubmit:function(a){a.preventDefault();var n={id:e.data.length>0?e.data[e.data.length-1].id+1:0,title:a.target[0].value,note:a.target[1].value};t(function(e){return{type:"ADD_POST",payload:e}}(n)),a.target[0].value="",a.target[1].value=""}},l.a.createElement("h1",null,"You can create your notes"),l.a.createElement("br",null),l.a.createElement("label",null,"Title"),l.a.createElement("input",{required:!0,type:"text",name:"title",id:"title",placeholder:"Title"}),l.a.createElement("br",null),l.a.createElement("label",null,"Note"),l.a.createElement("textarea",{required:!0,name:"note",id:"note",placeholder:"Note"}),l.a.createElement("br",null),l.a.createElement("input",{className:"submitButton",type:"submit",color:"info",value:"Add"})),l.a.createElement("br",null)),l.a.createElement("br",null),l.a.createElement("div",null,l.a.createElement("div",{className:"notes-wrapper"},n)))});function m(){return l.a.createElement(c.a,{store:u},l.a.createElement(d,null))}function s(){return l.a.createElement("div",null,l.a.createElement(m,null))}a.d(t,"default",function(){return s})}}]);
//# sourceMappingURL=11.ae0149ec.chunk.js.map