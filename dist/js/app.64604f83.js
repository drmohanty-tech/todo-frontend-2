(function(){"use strict";var o={7214:function(o,t,e){var n=e(5130),d=e(6768);const i={id:"app"};function r(o,t,e,n,r,s){const c=(0,d.g2)("TodoList");return(0,d.uX)(),(0,d.CE)("div",i,[(0,d.bF)(c)])}const s={class:"todo-list"},c=(0,d.Lk)("h1",{class:"navbar navbar-dark bg-primary",style:{"background-color":"#e3f2fd"}},"My Todo List",-1),u=(0,d.Lk)("button",{type:"submit",class:"btn btn-primary mr-5"},"Add",-1),a={key:0},l=(0,d.Lk)("h2",null,"Edit Todo",-1);function p(o,t,e,i,r,p){const f=(0,d.g2)("TodoItem");return(0,d.uX)(),(0,d.CE)("div",s,[c,(0,d.Lk)("form",{onSubmit:t[1]||(t[1]=(0,n.D$)(((...o)=>p.addTodo&&p.addTodo(...o)),["prevent"]))},[(0,d.bo)((0,d.Lk)("input",{"onUpdate:modelValue":t[0]||(t[0]=o=>r.newTodoText=o),placeholder:"Add a new todo"},null,512),[[n.Jo,r.newTodoText]]),u],32),((0,d.uX)(!0),(0,d.CE)(d.FK,null,(0,d.pI)(r.todos,(o=>((0,d.uX)(),(0,d.CE)("div",{key:o.id,class:"p-2 bg-light border"},[(0,d.bF)(f,{todo:o,onEdit:p.showEditForm,onRemove:p.removeTodo},null,8,["todo","onEdit","onRemove"])])))),128)),r.editTodo?((0,d.uX)(),(0,d.CE)("div",a,[l,(0,d.bo)((0,d.Lk)("input",{"onUpdate:modelValue":t[2]||(t[2]=o=>r.editTodo.text=o)},null,512),[[n.Jo,r.editTodo.text]]),(0,d.Lk)("button",{onClick:t[3]||(t[3]=(...o)=>p.updateTodo&&p.updateTodo(...o))},"Update"),(0,d.Lk)("button",{onClick:t[4]||(t[4]=(...o)=>p.cancelEdit&&p.cancelEdit(...o))},"Cancel")])):(0,d.Q3)("",!0)])}e(4114);var f=e(4373),h=e(4232);const m={class:"todo-item"},T=["checked"];function v(o,t,e,n,i,r){return(0,d.uX)(),(0,d.CE)("div",m,[(0,d.Lk)("input",{type:"checkbox",checked:e.todo.completed,onChange:t[0]||(t[0]=(...o)=>r.toggleCompleted&&r.toggleCompleted(...o))},null,40,T),(0,d.Lk)("span",{class:(0,h.C4)({completed:e.todo.completed})},(0,h.v_)(e.todo.text),3),(0,d.Lk)("button",{onClick:t[1]||(t[1]=(...o)=>r.editTodo&&r.editTodo(...o)),class:"btn btn-outline-primary me-md-2"},"Edit"),(0,d.Lk)("button",{onClick:t[2]||(t[2]=(...o)=>r.removeTodo&&r.removeTodo(...o)),class:"btn btn-outline-danger me-md-2"},"Delete")])}var b={props:{todo:Object},methods:{toggleCompleted(o){this.$emit("update",{...this.todo,completed:o.target.checked})},editTodo(){this.$emit("edit",this.todo)},removeTodo(){this.$emit("remove",this.todo.id)}}},k=e(1241);const y=(0,k.A)(b,[["render",v]]);var g=y,w={components:{TodoItem:g},data(){return{newTodoText:"",todos:[],editTodo:null}},methods:{async fetchTodos(){const o=await f.A.get("http://3.128.91.26:3000/todos");this.todos=o.data},async addTodo(){if(""===this.newTodoText.trim())return;const o={text:this.newTodoText,completed:!1},t=await f.A.post("http://3.128.91.26:3000/todos",o);this.todos.push(t.data),this.newTodoText=""},async showEditForm(o){this.editTodo={...o}},async updateTodo(){await f.A.put(`http://3.128.91.26:3000/todos/${this.editTodo.id}`,this.editTodo);const o=this.todos.findIndex((o=>o.id===this.editTodo.id));this.todos[o]=this.editTodo,this.editTodo=null},async cancelEdit(){this.editTodo=null},async removeTodo(o){await f.A.delete(`http://3.128.91.26:3000/todos/${o}`),this.todos=this.todos.filter((t=>t.id!==o))}},mounted(){this.fetchTodos()}};const C=(0,k.A)(w,[["render",p]]);var x=C,E={components:{TodoList:x}};const L=(0,k.A)(E,[["render",r]]);var O=L;e(8077);(0,n.Ef)(O).mount("#app")}},t={};function e(n){var d=t[n];if(void 0!==d)return d.exports;var i=t[n]={exports:{}};return o[n].call(i.exports,i,i.exports,e),i.exports}e.m=o,function(){var o=[];e.O=function(t,n,d,i){if(!n){var r=1/0;for(a=0;a<o.length;a++){n=o[a][0],d=o[a][1],i=o[a][2];for(var s=!0,c=0;c<n.length;c++)(!1&i||r>=i)&&Object.keys(e.O).every((function(o){return e.O[o](n[c])}))?n.splice(c--,1):(s=!1,i<r&&(r=i));if(s){o.splice(a--,1);var u=d();void 0!==u&&(t=u)}}return t}i=i||0;for(var a=o.length;a>0&&o[a-1][2]>i;a--)o[a]=o[a-1];o[a]=[n,d,i]}}(),function(){e.n=function(o){var t=o&&o.__esModule?function(){return o["default"]}:function(){return o};return e.d(t,{a:t}),t}}(),function(){e.d=function(o,t){for(var n in t)e.o(t,n)&&!e.o(o,n)&&Object.defineProperty(o,n,{enumerable:!0,get:t[n]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(o){if("object"===typeof window)return window}}()}(),function(){e.o=function(o,t){return Object.prototype.hasOwnProperty.call(o,t)}}(),function(){e.r=function(o){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(o,"__esModule",{value:!0})}}(),function(){var o={524:0};e.O.j=function(t){return 0===o[t]};var t=function(t,n){var d,i,r=n[0],s=n[1],c=n[2],u=0;if(r.some((function(t){return 0!==o[t]}))){for(d in s)e.o(s,d)&&(e.m[d]=s[d]);if(c)var a=c(e)}for(t&&t(n);u<r.length;u++)i=r[u],e.o(o,i)&&o[i]&&o[i][0](),o[i]=0;return e.O(a)},n=self["webpackChunktodo_frontend"]=self["webpackChunktodo_frontend"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=e.O(void 0,[504],(function(){return e(7214)}));n=e.O(n)})();
//# sourceMappingURL=app.64604f83.js.map