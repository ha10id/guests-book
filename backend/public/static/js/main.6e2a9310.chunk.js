(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{17:function(e,t,a){e.exports=a(43)},22:function(e,t,a){},23:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(15),o=a.n(c),s=(a(22),a(23),a(24),a(2)),l=a.n(s),u=a(4),i=function(e){var t=e.item,a=function(){var a=Object(u.a)(l.a.mark((function a(){return l.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:e.remove(t);case 1:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}}();return r.a.createElement("div",{className:"col-sm"},r.a.createElement("div",{className:"card fluid"},r.a.createElement("div",{className:"item_text"},r.a.createElement("p",null,"\u0413\u043e\u0441\u0442\u044c: ",t.user),r.a.createElement("p",null,t.message)),r.a.createElement("div",{className:"row fluid",style:{justifyContent:"flex-end"}},r.a.createElement("button",{type:"button",className:"secondary",onClick:a},"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"))))},m=a(3),p=a(5),f=function(e){var t=Object(n.useState)({user:"",message:""}),a=Object(p.a)(t,2),c=a[0],o=a[1],s=function(){var t=Object(u.a)(l.a.mark((function t(){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.save(c),o({user:"",message:""});case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return r.a.createElement("div",{className:"col-sm"},r.a.createElement("div",{className:"card fluid"},r.a.createElement("div",{class:"input-group vertical"},r.a.createElement("label",{for:"user"},"\u0412\u0430\u0448\u0435 \u0438\u043c\u044f:"),r.a.createElement("input",{type:"text",id:"user",placeholder:"Username",value:c.user,onChange:function(e){return o(Object(m.a)({},c,{user:e.target.value}))}})),r.a.createElement("div",{class:"input-group vertical"},r.a.createElement("label",{for:"user"},"\u0421\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435:"),r.a.createElement("textarea",{id:"message",className:"textarea",type:"text",rows:"7",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442",value:c.message,onChange:function(e){return o(Object(m.a)({},c,{message:e.target.value}))}})),r.a.createElement("div",{className:"row col-sm",style:{justifyContent:"center"}},r.a.createElement("button",{className:"button primary",onClick:s},"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"))))},d=a(16),v=a.n(d).a.create({baseURL:"http://localhost:4000/api/",responseType:"json"});v.interceptors.request.use((function(e){return e.headers.Authorization="Bearer "+window.localStorage.token,e}));var E=function(e){var t=Object(n.useState)(!1),a=Object(p.a)(t,2),c=a[0],o=a[1];return r.a.createElement("div",{className:"row col-sm",style:{justifyContent:"center"}},r.a.createElement("button",{className:"button primary",disabled:1===e.pages.current,onClick:e.pageBack},r.a.createElement("span",null,"\u041d\u0430\u0437\u0430\u0434")),r.a.createElement("button",{title:"\u043a\u043b\u0438\u043a\u043d\u0438\u0442\u0435 \u0434\u043b\u044f \u0432\u0432\u043e\u0434\u0430 \u043d\u043e\u043c\u0435\u0440\u0430 \u0432\u0440\u0443\u0447\u043d\u0443\u044e",className:"button",onClick:function(){return o(!0)}},c?r.a.createElement("input",{autoFocus:!0,className:"clean",title:"Enter - \u043f\u0435\u0440\u0435\u0439\u0442\u0438 \u043d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443, Esc - \u043e\u0442\u043c\u0435\u043d\u0438\u0442\u044c",type:"text",size:5,onKeyDown:function(t){13===t.keyCode?(e.setCurrentPage(parseInt(t.target.value)),o(!1)):27===t.keyCode?o(!1):(t.keyCode<48||t.keyCode>57)&&t.preventDefault()}}):r.a.createElement("span",null,"\u0421\u0442\u0440\u0430\u043d\u0438\u0446\u0430 ",e.pages.current," \u0438\u0437 ",e.pages.total)),r.a.createElement("button",{className:"button primary",disabled:e.pages.current===e.pages.total,onClick:e.pageForward},r.a.createElement("span",null,"\u0412\u043f\u0435\u0440\u0451\u0434")))},b=function(){var e=Object(n.useState)({data:[]}),t=Object(p.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)({current:1,total:0,limit:3}),s=Object(p.a)(o,2),d=s[0],b=s[1],g=Object(n.useState)(0),h=Object(p.a)(g,2),j=h[0],w=h[1],y={},O=function(){var e=Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t="posts?page=".concat(d.current),v.get(t).then((function(e){var t=e.data;b(Object(m.a)({},d,{total:Math.ceil(parseFloat(t.total/d.limit))})),w(t.total),c({data:t.posts})})).catch((function(e){alert(e.message)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){O()}),[d.current,j]);var k=function(){var e=Object(u.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return y=t,console.log(y),e.next=4,v.post("posts",y).then((function(e){console.log(e),b(Object(m.a)({},d,{current:Math.ceil(parseFloat(e.data.total/d.limit))})),w(e.data.total)}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),N=function(){var e=Object(u.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return y=t,console.log(y),e.next=4,v.delete("posts/".concat(y.id)).then((function(e){console.log(e),b(Object(m.a)({},d,{current:Math.ceil(parseFloat(e.data.total/d.limit))})),w(e.data.total)}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"container fluid"},r.a.createElement(f,{save:k}),a.data.map((function(e,t){return r.a.createElement("div",{className:"row"},r.a.createElement(i,{key:t,item:e,remove:N}))})),r.a.createElement(E,{pages:d,setCurrentPage:function(e){e>d.total&&(e=d.total),b(Object(m.a)({},d,{current:e}))},pageBack:function(){b(Object(m.a)({},d,{current:d.current-1}))},pageForward:function(){return b(Object(m.a)({},d,{current:d.current+1}))}}))};var g=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",null,r.a.createElement("h3",null,"\u0413\u043e\u0441\u0442\u0435\u0432\u0430\u044f \u043a\u043d\u0438\u0433\u0430")),r.a.createElement(b,null),r.a.createElement("footer",null,r.a.createElement("p",null,"\xa9 40054-50001 Mars Weapons Inc.")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[17,1,2]]]);
//# sourceMappingURL=main.6e2a9310.chunk.js.map