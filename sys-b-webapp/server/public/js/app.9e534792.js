(function(e){function t(t){for(var n,s,i=t[0],c=t[1],u=t[2],d=0,p=[];d<i.length;d++)s=i[d],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&p.push(a[s][0]),a[s]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);l&&l(t);while(p.length)p.shift()();return o.push.apply(o,u||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],n=!0,i=1;i<r.length;i++){var c=r[i];0!==a[c]&&(n=!1)}n&&(o.splice(t--,1),e=s(s.s=r[0]))}return e}var n={},a={app:0},o=[];function s(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=e,s.c=n,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(r,n,function(t){return e[t]}.bind(null,n));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var l=c;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"35e3":function(e,t,r){},"56b3":function(e,t,r){"use strict";var n=r("35e3"),a=r.n(n);a.a},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app",{attrs:{id:"inspire"}},[r("Navbar"),r("v-container",[r("router-view")],1),r("Footer")],1)},o=[],s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("v-toolbar",{attrs:{color:"teal lighten-5",height:"60px"}},[r("v-toolbar-items",{staticClass:"hidden-sm-and-down"},e._l(e.menu,(function(t){return r("v-btn",{key:t.index,staticClass:"ma-2",attrs:{outlined:"",color:"#546E7A","max-height":"40px",large:""}},[r("router-link",{attrs:{to:t.link,tag:"span"}},[e._v(" "+e._s(t.title)+" ")])],1)})),1),r("v-menu",{attrs:{"offset-y":""},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on;return[r("v-btn",e._g({staticClass:"ma-2 hidden-md-and-up",attrs:{rounded:"","max-height":"40px"}},n),[r("v-icon",[e._v(" mdi-menu ")])],1)]}}])},[r("v-list",e._l(e.menu,(function(t){return r("v-list-item",{key:t.index},[r("router-link",{attrs:{to:t.link}},[r("v-list-item-title",[e._v(e._s(t.title))])],1)],1)})),1)],1),r("v-spacer"),r("v-toolbar-title",{attrs:{color:"dark"}},[r("router-link",{staticStyle:{cursor:"pointer"},attrs:{to:"/",tag:"span"}},[r("span",{attrs:{color:"#546E7A"}},[e._v(" HL7 Receiver ")])])],1)],1)],1)},i=[],c={name:"Navbar",data:function(){return{menu:[{title:"Listar Pedidos",link:"/"}]}}},u=c,l=(r("da21"),r("2877")),d=r("6544"),p=r.n(d),v=r("8336"),f=r("132d"),m=r("8860"),b=r("da13"),h=r("5d23"),g=r("e449"),x=r("2fa4"),_=r("71d9"),w=r("2a7f"),k=Object(l["a"])(u,s,i,!1,null,"3f6b5c92",null),y=k.exports;p()(k,{VBtn:v["a"],VIcon:f["a"],VList:m["a"],VListItem:b["a"],VListItemTitle:h["b"],VMenu:g["a"],VSpacer:x["a"],VToolbar:_["a"],VToolbarItems:w["a"],VToolbarTitle:w["b"]});var R=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h1",[e._v("Lista de pedidos")]),[r("v-row",{attrs:{justify:"center"}},[r("v-dialog",{attrs:{persistent:"","max-width":"500"},model:{value:e.updated,callback:function(t){e.updated=t},expression:"updated"}},[r("v-card",[r("v-card-title",{staticClass:"headline"},[e._v("Exame realizado.")]),r("v-card-actions",[r("v-spacer"),r("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:e.reload}},[e._v("Voltar atrás")])],1)],1)],1)],1)],[r("v-row",{attrs:{justify:"center"}},[r("v-dialog",{attrs:{persistent:"","max-width":"500"},model:{value:e.updated_report,callback:function(t){e.updated_report=t},expression:"updated_report"}},[r("v-card",[r("v-card-title",{staticClass:"headline"},[e._v("Relatório realizado.")]),r("v-card-actions",[r("v-spacer"),r("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:e.reload}},[e._v("Voltar atrás")])],1)],1)],1)],1)],r("v-container",[r("v-col",{attrs:{cols:"12"}},[r("v-select",{attrs:{items:e.types,"item-text":"name","item-value":"value",label:"Filtrar por:"},model:{value:e.currItem,callback:function(t){e.currItem=t},expression:"currItem"}}),r("v-btn",{staticClass:"mr-4",attrs:{color:"teal lighten-5"},on:{click:e.getRequests}},[e._v(" Filtrar ")]),r("v-form",[r("v-container",e._l(e.requests,(function(t){return r("v-card",{key:t.index,staticClass:"ma-1",attrs:{"text-align":"center"}},[r("v-card-title",[e._v(" Pedido nº: "+e._s(t.id)+" ")]),r("v-card-text",[r("p",[e._v(" Nº CC do Paciente : "+e._s(t.patient_id)+" ")]),r("p",[e._v(" Data do Pedido : "+e._s(t.date)+" ")]),r("p",[e._v(" Descrição do pedido: "+e._s(t.clinical_info)+" ")]),0==t.in_worklist&&0==t.status?r("p",[e._v(" Estado do pedido: Relatório disponível. ")]):e._e(),0==t.in_worklist&&1==t.status?r("p",[e._v(" Estado do pedido: Pedido cancelado. ")]):e._e(),1==t.in_worklist&&0==t.status?r("p",[e._v(" Estado do pedido: Exame por realizar. "),r("br"),r("br"),r("v-btn",{attrs:{new_id:t.id,color:"teal lighten-5"},on:{click:function(r){return e.executeExam(t.id)}}},[e._v(" Efetuar Exame ")])],1):e._e(),1==t.in_worklist&&1==t.status?r("p",[r("v-textarea",{attrs:{"auto-grow":"",height:"150",label:"Insira o relatório aqui",rules:[function(e){return(e||"").length<=500||"É permitido um máximo de 500 carateres"}]},model:{value:e.newReport,callback:function(t){e.newReport=t},expression:"newReport"}}),r("v-btn",{staticClass:"mr-4",attrs:{color:"teal lighten-5"},on:{click:function(r){return e.send_report(t.id)}}},[e._v(" Submeter Relatório ")])],1):e._e()])],1)})),1)],1)],1)],1)],2)},V=[],O=(r("96cf"),r("1da1")),j=(r("d3b7"),r("d4ec")),E=r("bee2"),C=r("bc3a"),S=r.n(C),q="/api/requests",P="/api/requests/report",I="/api/requests/exam",T=function(){function e(){Object(j["a"])(this,e)}return Object(E["a"])(e,null,[{key:"getRequests",value:function(e){return new Promise(1==e?function(){var e=Object(O["a"])(regeneratorRuntime.mark((function e(t,r){var n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,S.a.get(P);case 3:n=e.sent,a=n.data,t(a),console.log("report requests: "+a),e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](0),r(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t,r){return e.apply(this,arguments)}}():2==e?function(){var e=Object(O["a"])(regeneratorRuntime.mark((function e(t,r){var n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,S.a.get(I);case 3:n=e.sent,a=n.data,t(a),console.log("exam requests: "+a),e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](0),r(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t,r){return e.apply(this,arguments)}}():function(){var e=Object(O["a"])(regeneratorRuntime.mark((function e(t,r){var n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,S.a.get(q);case 3:n=e.sent,a=n.data,t(a),console.log("requests: "+a),e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](0),r(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t,r){return e.apply(this,arguments)}}())}},{key:"executeExam",value:function(e){return new Promise(function(){var t=Object(O["a"])(regeneratorRuntime.mark((function t(r,n){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,S.a.put(q,{req_id:e});case 3:a=t.sent,console.log("res.data: "+a.data.code),r(a.data),t.next=12;break;case 8:t.prev=8,t.t0=t["catch"](0),console.log("Error"),r({code:400,message:"Bad Update"});case 12:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e,r){return t.apply(this,arguments)}}())}},{key:"send_report",value:function(e,t){return new Promise(function(){var r=Object(O["a"])(regeneratorRuntime.mark((function r(n,a){var o;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,S.a.post(q,{new_id:e,report:t});case 3:o=r.sent,n(o.data),r.next=11;break;case 7:r.prev=7,r.t0=r["catch"](0),console.log("Error: "+r.t0.response.data.message),n({code:400,message:"Bad Insert"});case 11:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(e,t){return r.apply(this,arguments)}}())}}]),e}(),L=T,F=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("v-footer",{staticClass:"white--text",attrs:{app:"",color:"teal lighten-5"}},[r("span",[e._v(" EC - Interoperabilidade Semântica ")]),r("v-spacer"),r("span",[e._v(" © 2020 ")])],1)],1)},$=[],z={name:"Footer"},M=z,N=(r("56b3"),r("553a")),A=Object(l["a"])(M,F,$,!1,null,"0c611644",null),B=A.exports;p()(A,{VFooter:N["a"],VSpacer:x["a"]});var D={name:"List",components:{Navbar:y,Footer:B},data:function(){return{requests:[],types:[{name:"Todos",value:0},{name:"Relatório por realizar",value:1},{name:"Exame por realizar",value:2}],error:"",currItem:null,updated:!1,updated_report:!1,newReport:""}},methods:{getRequests:function(){var e=this;return Object(O["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return console.log(e.currItem),t.next=3,L.getRequests(e.currItem);case 3:e.requests=t.sent;case 4:case"end":return t.stop()}}),t)})))()},executeExam:function(e){var t=this;return Object(O["a"])(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return console.log(e),r.next=3,L.executeExam(e);case 3:n=r.sent,200==n.code?(console.log("Sucessful update"),t.updated=!0):console.error("Oops");case 5:case"end":return r.stop()}}),r)})))()},send_report:function(e){var t=this;return Object(O["a"])(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return console.log(e),r.next=3,L.send_report(e,t.newReport);case 3:n=r.sent,200==n.code?(console.log("Sucessful report written"),t.updated_report=!0):console.error("Oops");case 5:case"end":return r.stop()}}),r)})))()},reload:function(){this.$router.go()}}},J=D,H=(r("59bd"),r("b0af")),U=r("99d9"),G=r("62ad"),K=r("a523"),Q=r("169a"),W=r("4bd4"),X=r("0fd9"),Y=r("b974"),Z=r("a844"),ee=Object(l["a"])(J,R,V,!1,null,null,null),te=ee.exports;p()(ee,{VBtn:v["a"],VCard:H["a"],VCardActions:U["a"],VCardText:U["b"],VCardTitle:U["c"],VCol:G["a"],VContainer:K["a"],VDialog:Q["a"],VForm:W["a"],VRow:X["a"],VSelect:Y["a"],VSpacer:x["a"],VTextarea:Z["a"]});var re={components:{Navbar:y,List:te,Footer:B},data:function(){return{}}},ne=re,ae=(r("5c0b"),r("7496")),oe=Object(l["a"])(ne,a,o,!1,null,null,null),se=oe.exports;p()(oe,{VApp:ae["a"],VContainer:K["a"]});var ie=r("8c4f");n["a"].use(ie["a"]);var ce=[{path:"/",name:"List",component:te}],ue=new ie["a"]({routes:ce,mode:"history"}),le=ue,de=r("2f62");n["a"].use(de["a"]);var pe=new de["a"].Store({state:{},mutations:{},actions:{},modules:{}}),ve=r("f309");r("5363");n["a"].use(ve["a"],{icons:{iconfont:"mdi"}});var fe=new ve["a"]({});r("d1e78");n["a"].config.productionTip=!1,new n["a"]({router:le,store:pe,vuetify:fe,render:function(e){return e(se)}}).$mount("#app")},"59bd":function(e,t,r){"use strict";var n=r("be81"),a=r.n(n);a.a},"5c0b":function(e,t,r){"use strict";var n=r("7694"),a=r.n(n);a.a},7694:function(e,t,r){},"96a8":function(e,t,r){},be81:function(e,t,r){},da21:function(e,t,r){"use strict";var n=r("96a8"),a=r.n(n);a.a}});
//# sourceMappingURL=app.9e534792.js.map