(this["webpackJsonpredux-todo"]=this["webpackJsonpredux-todo"]||[]).push([[0],{32:function(t,e,n){},33:function(t,e,n){},40:function(t,e,n){"use strict";n.r(e);var c=n(0),i=n.n(c),a=n(15),o=n.n(a),d=(n(32),n.p,n(33),n(19)),r=n(9),s=n(42),l="ADD_TODO",j="REDUCE__TODO",u="STATUS__TODO",b="EDIT__TODO",O=n(11),h=n(5),x=n.n(h),v=n(1);function _(){var t=Object(r.c)((function(t){return t.todo})),e=Object(r.c)((function(t){return t.total})),n=i.a.useState(""),c=Object(d.a)(n,2),a=c[0],o=c[1];console.log(a);var b=Object(r.b)(),h=function(t){var e=function(t){return{type:j,payload:{id:t}}}(t);b(e)},_=function(t){b(function(t){return{type:u,payload:{id:t}}}(t))};return Object(v.jsx)(v.Fragment,{children:Object(v.jsxs)("div",{className:x.a.todo,children:[Object(v.jsxs)("div",{children:["CompletedTasks - ",Object(v.jsx)("span",{className:x.a.total,children:e})]}),Object(v.jsxs)("div",{className:x.a.input,children:[Object(v.jsx)("input",{type:"text",placeholder:"add something",name:"title",value:a,onChange:function(t){o(t.target.value)}}),Object(v.jsx)("button",{onClick:function(){var t=function(t){return{type:l,payload:t}}({id:Object(s.a)(),title:a,status:!1});b(t)},children:"ADD"})]}),Object(v.jsx)("div",{children:null===t||void 0===t?void 0:t.map((function(t){return Object(v.jsxs)("div",{className:x.a.list,children:[Object(v.jsx)("div",{children:"".concat(t.title)}),Object(v.jsxs)("div",{className:x.a.list_2,children:[Object(v.jsxs)("div",{children:[" ",Object(v.jsx)("button",{onClick:function(){return _(t.id)},children:"".concat(t.status)})]}),Object(v.jsxs)("div",{children:[" ",Object(v.jsx)("button",{onClick:function(){return h(t.id)},children:"delete"})]}),Object(v.jsx)("div",{children:Object(v.jsx)(O.b,{to:"/todo/"+t.id,children:Object(v.jsx)("button",{className:x.a.edit,children:"edit"})})})]})]})}))})]})})}var f=[{to:"/",title:"Home"},{to:"/add-details",title:"Add Details"}];function p(){return Object(v.jsx)("div",{className:x.a.nav,children:null===f||void 0===f?void 0:f.map((function(t,e){var n=t.to,c=t.title;return Object(v.jsx)(O.b,{className:x.a.link,to:n,children:c})}))})}var m=n(3);function g(){var t=Object(r.b)(),e=Object(m.f)(),n=Object(m.g)().id,c=Object(r.c)((function(t){return t.todo})),a="";c.map((function(t){t.id==n&&(a=t.title)}));var o=i.a.useState(a),s=Object(d.a)(o,2),l=s[0],j=s[1],u=function(n){t(function(t){return{type:b,payload:t}}({id:n,editValue:l})),e.push("/add-details")};return Object(v.jsxs)("div",{className:x.a.edit_2,children:[Object(v.jsx)("input",{type:"text",placeholder:"edit",name:"editValue",value:l,onChange:function(t){return j(t.target.value)}}),Object(v.jsx)("button",{onClick:function(){return u(n)},children:"submit"})]})}function y(){return Object(v.jsx)("div",{children:Object(v.jsx)("h1",{children:"home"})})}function D(){return Object(v.jsx)("div",{children:Object(v.jsxs)(m.c,{children:[Object(v.jsx)(m.a,{path:"/",exact:!0,children:Object(v.jsx)(y,{})}),Object(v.jsx)(m.a,{path:"/add-details",exact:!0,children:Object(v.jsx)(_,{})}),Object(v.jsx)(m.a,{path:"/todo/:id",exact:!0,children:Object(v.jsx)(g,{})}),Object(v.jsx)(m.a,{children:"error page"})]})})}var C=function(){return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("div",{children:Object(v.jsx)(p,{})}),Object(v.jsx)("div",{className:x.a.main,children:Object(v.jsxs)("div",{children:[" ",Object(v.jsx)(D,{})]})})]})},k=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,43)).then((function(e){var n=e.getCLS,c=e.getFID,i=e.getFCP,a=e.getLCP,o=e.getTTFB;n(t),c(t),i(t),a(t),o(t)}))},N=n(18),T=n(27),F=n(10),S={total:0,todo:[{id:1,title:"react",status:!1}]},E=Object(N.b)((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,e=arguments.length>1?arguments[1]:void 0,n=e.type,c=e.payload;switch(n){case l:return Object(F.a)(Object(F.a)({},t),{},{todo:[].concat(Object(T.a)(t.todo),[c])});case j:var i=t.todo.filter((function(t){return t.id!=c.id})),a=i.filter((function(t){return t.status})).length;return Object(F.a)(Object(F.a)({},t),{},{todo:i,total:a});case u:var o=t.todo.map((function(t){var e=t;return t.id===c.id&&(t.status=!t.status),e})),d=o.filter((function(t){return t.status})).length;return Object(F.a)(Object(F.a)({},t),{},{todo:o,total:d});case b:var r=t.todo.map((function(t){var e=t;return t.id===c.id&&(t.title=c.editValue),e}));return Object(F.a)(Object(F.a)({},t),{},{todo:r});default:return t}}));console.log(E),o.a.render(Object(v.jsx)(O.a,{children:Object(v.jsx)(r.a,{store:E,children:Object(v.jsx)(i.a.StrictMode,{children:Object(v.jsx)(C,{})})})}),document.getElementById("root")),k()},5:function(t,e,n){t.exports={main:"todo_main__2-YzG",input:"todo_input__1LE6-",todo:"todo_todo__3nXHD",nav:"todo_nav__6tnIO",link:"todo_link__1V2Zl",total:"todo_total__W8YMc",list:"todo_list__2q-_8",list_2:"todo_list_2__2qbgM",edit:"todo_edit__2O3Z-",edit_2:"todo_edit_2__2g4z1"}}},[[40,1,2]]]);
//# sourceMappingURL=main.d1a7768d.chunk.js.map