(function(e){function t(t){for(var a,o,s=t[0],c=t[1],d=t[2],u=0,v=[];u<s.length;u++)o=s[u],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&v.push(n[o][0]),n[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);l&&l(t);while(v.length)v.shift()();return i.push.apply(i,d||[]),r()}function r(){for(var e,t=0;t<i.length;t++){for(var r=i[t],a=!0,s=1;s<r.length;s++){var c=r[s];0!==n[c]&&(a=!1)}a&&(i.splice(t--,1),e=o(o.s=r[0]))}return e}var a={},n={app:0},i=[];function o(t){if(a[t])return a[t].exports;var r=a[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=a,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(r,a,function(t){return e[t]}.bind(null,a));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var d=0;d<s.length;d++)t(s[d]);var l=c;i.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"0017":function(e,t,r){},"1a30":function(e,t,r){"use strict";var a=r("cb51"),n=r.n(a);n.a},"23bb":function(e,t,r){},"259b":function(e,t,r){},"3e06":function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var a=r("2b0e"),n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app",{attrs:{id:"inspire"}},[r("Navbar"),r("v-container",[r("router-view",{staticClass:"router"})],1),r("Footer")],1)},i=[],o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("v-toolbar",{attrs:{color:"teal lighten-5",height:"60px"}},[r("v-toolbar-items",{staticClass:"hidden-md-and-down"},e._l(e.menu,(function(t){return r("v-btn",{key:t.index,staticClass:"ma-2",attrs:{outlined:"",color:"#546E7A","max-height":"40px",flat:"",large:""}},[r("router-link",{attrs:{to:t.link,tag:"span"}},[e._v(" "+e._s(t.title)+" ")])],1)})),1),r("v-menu",{attrs:{"offset-y":""},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on;return[r("v-btn",e._g({staticClass:"ma-2 hidden-lg-and-up",attrs:{rounded:"","max-height":"40px"}},a),[r("v-icon",[e._v(" mdi-menu ")])],1)]}}])},[r("v-list",e._l(e.menu,(function(t){return r("v-list-item",{key:t.index},[r("router-link",{attrs:{to:t.link,tag:"span"}},[r("v-list-item-title",[e._v(e._s(t.title))])],1)],1)})),1)],1),r("v-spacer"),r("v-toolbar-title",{attrs:{color:"dark"}},[r("router-link",{staticStyle:{cursor:"pointer"},attrs:{to:"/",tag:"span"}},[r("span",{attrs:{color:"#546E7A"}},[e._v(" HL7 Sender ")])])],1)],1)],1)},s=[],c={name:"Navbar",data:function(){return{menu:[{title:"Registar Episódio",link:"/episode"},{title:"Efetuar Pedido",link:"/request"},{title:"Consultar Pedido",link:"/consult"},{title:"Alterar Pedido",link:"/change"},{title:"Cancelar Pedido",link:"/cancel"}]}}},d=c,l=(r("75a6"),r("2877")),u=r("6544"),v=r.n(u),p=r("8336"),m=r("132d"),f=r("8860"),_=r("da13"),b=r("5d23"),g=r("e449"),h=r("2fa4"),x=r("71d9"),k=r("2a7f"),w=Object(l["a"])(d,o,s,!1,null,"0221fd46",null),V=w.exports;v()(w,{VBtn:p["a"],VIcon:m["a"],VList:f["a"],VListItem:_["a"],VListItemTitle:b["b"],VMenu:g["a"],VSpacer:h["a"],VToolbar:x["a"],VToolbarItems:k["a"],VToolbarTitle:k["b"]});var q=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h1",[e._v(" O que deseja fazer? ")]),r("v-container",[r("v-row-dense",[r("v-col",{attrs:{cols:"12"}},e._l(e.menu,(function(t){return r("v-card",{key:t.index,staticClass:"v-card",attrs:{color:"teal lighten-5",height:"100","max-height":"150",dark:""}},[r("v-card-actions",{staticClass:"justify-center"},[r("v-btn",{attrs:{outlined:"",color:"#546E7A",large:""}},[r("router-link",{attrs:{to:t.link,tag:"span"}},[r("v-list-item-title",[e._v(e._s(t.title))])],1)],1)],1)],1)})),1)],1)],1)],1)},C=[],y=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("v-footer",{staticClass:"footer white--text",attrs:{app:"",color:"teal lighten-5"}},[r("span",[e._v(" EC - Interoperabilidade Semântica ")]),r("v-spacer"),r("span",[e._v(" © 2020 ")])],1)],1)},R=[],j={name:"Footer"},O=j,P=(r("8956"),r("553a")),E=Object(l["a"])(O,y,R,!1,null,"562261b6",null),F=E.exports;v()(E,{VFooter:P["a"],VSpacer:h["a"]});var T={name:"Home",components:{Navbar:V,Footer:F},data:function(){return{menu:[{title:"Registar Episódio",link:"/episode"},{title:"Efetuar Pedido",link:"/request"},{title:"Consultar Pedido",link:"/consult"},{title:"Alterar Pedido",link:"/change"},{title:"Cancelar Pedido",link:"/cancel"}]}}},S=T,N=(r("1a30"),r("b0af")),D=r("99d9"),A=r("62ad"),$=r("a523"),B=Object(l["a"])(S,q,C,!1,null,"c5719eb0",null),L=B.exports;v()(B,{VBtn:p["a"],VCard:N["a"],VCardActions:D["a"],VCol:A["a"],VContainer:$["a"],VListItemTitle:b["b"]});var I=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h1",[e._v(" Efetuar Pedido ")]),r("v-container",[r("v-form",{ref:"form",model:{value:e.isFormValid,callback:function(t){e.isFormValid=t},expression:"isFormValid"}},[[r("v-row",{attrs:{justify:"center"}},[r("v-dialog",{attrs:{persistent:"","max-width":"500"},model:{value:e.bad_id,callback:function(t){e.bad_id=t},expression:"bad_id"}},[r("v-card",[r("v-card-title",{staticClass:"headline"},[e._v("Dados inválidos.")]),r("v-card-text",[e._v("Os dados fornecidos são inválidos. Por favor verifique-os e volte a tentar de novo.")]),r("v-card-actions",[r("v-spacer"),r("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:function(t){e.bad_id=!1}}},[e._v("Voltar atrás")])],1)],1)],1)],1),r("v-row",{attrs:{justify:"center"}},[r("v-dialog",{attrs:{persistent:"","max-width":"500"},model:{value:e.good_id,callback:function(t){e.good_id=t},expression:"good_id"}},[r("v-card",[r("v-card-title",{staticClass:"headline"},[e._v("Pedido registado.")]),r("v-card-text",[e._v(" O Pedido foi registado com o nº "+e._s(this.inserted_id)+" ")]),r("v-card-actions",[r("v-spacer"),r("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:function(t){e.good_id=!1}}},[e._v("Voltar atrás")])],1)],1)],1)],1)],r("v-text-field",{attrs:{outlined:"",label:"Número do Episódio Médico",rules:[function(e){return!!e||"É necessário inserir o número do episódio."}],required:""},model:{value:e.episode_id,callback:function(t){e.episode_id=t},expression:"episode_id"}}),r("v-select",{attrs:{items:e.medical_acts,"item-value":"id","item-text":"name",label:"Tipo de Ato Médico",outlined:"",rules:[function(e){return!!e||"É necessário selecionar o tipo de ato médico."}],required:""},model:{value:e.type_id,callback:function(t){e.type_id=t},expression:"type_id"}}),r("v-textarea",{attrs:{outlined:"",label:"Descrição do Pedido",rules:[function(e){return(e||"").length>0||"É necessário adicionar uma descrição ao pedido."},function(e){return(e||"").length<=300||"É permitido um máximo de 300 carateres"}],required:""},model:{value:e.description,callback:function(t){e.description=t},expression:"description"}}),r("v-row",[r("v-btn",{staticClass:"mr-4",attrs:{color:"teal lighten-5",disabled:!e.isFormValid},on:{click:e.createRequest}},[e._v(" Submeter ")]),r("v-btn",{attrs:{color:"teal lighten-5"},on:{click:e.reset}},[e._v(" Recomeçar ")])],1)],2)],1)],1)},M=[],z=(r("a4d3"),r("e01a"),r("96cf"),r("1da1")),W=(r("d3b7"),r("d4ec")),H=r("bee2"),J=r("bc3a"),G=r.n(J),K="/api/medical_acts",Q=function(){function e(){Object(W["a"])(this,e)}return Object(H["a"])(e,null,[{key:"getActs",value:function(){return new Promise(function(){var e=Object(z["a"])(regeneratorRuntime.mark((function e(t,r){var a,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,G.a.get(K);case 3:a=e.sent,n=a.data,t(n),e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](0),r(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t,r){return e.apply(this,arguments)}}())}}]),e}(),U=Q,X="/api/wl_requests",Y=function(){function e(){Object(W["a"])(this,e)}return Object(H["a"])(e,null,[{key:"getWLRequests",value:function(e){return new Promise(function(){var t=Object(z["a"])(regeneratorRuntime.mark((function t(r,a){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,G.a.get(X,{params:{id:e}});case 3:n=t.sent,n.data.length<1?r({code:401,message:"No request with that id"}):r(n.data),t.next=11;break;case 7:t.prev=7,t.t0=t["catch"](0),console.log("Error: "+t.t0.response.data.code),r({code:t.t0.response.data.code,message:"Error"});case 11:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e,r){return t.apply(this,arguments)}}())}},{key:"insertRequest",value:function(e,t,r){return new Promise(function(){var a=Object(z["a"])(regeneratorRuntime.mark((function a(n,i){var o;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,G.a.post(X,{episode_id:e,act_id:t,description:r});case 3:o=a.sent,n(o.data),a.next=11;break;case 7:a.prev=7,a.t0=a["catch"](0),console.log("Error: "+a.t0.response.data.message),n({code:400,message:"Bad Insert"});case 11:case"end":return a.stop()}}),a,null,[[0,7]])})));return function(e,t){return a.apply(this,arguments)}}())}},{key:"updateRequest",value:function(e,t,r,a,n){return new Promise(function(){var i=Object(z["a"])(regeneratorRuntime.mark((function i(o,s){var c;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return i.prev=0,i.next=3,G.a.put(X,{req_id:e,description:t,act_id:r,episode_id:a,patient_id:n});case 3:c=i.sent,console.log("res.data: "+c.data.code),o(c.data),i.next=12;break;case 8:i.prev=8,i.t0=i["catch"](0),console.log("Error"),o({code:400,message:"Bad Insert"});case 12:case"end":return i.stop()}}),i,null,[[0,8]])})));return function(e,t){return i.apply(this,arguments)}}())}},{key:"cancelRequest",value:function(e){return new Promise(function(){var t=Object(z["a"])(regeneratorRuntime.mark((function t(r,a){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,console.log("req"),console.log(e),t.next=5,G.a.delete(X,{params:{req_id:e}});case 5:n=t.sent,console.log("res.data: "+n.data.code),r(n.data),t.next=14;break;case 10:t.prev=10,t.t0=t["catch"](0),console.log("Error"),r({code:400,message:"Bad Cancel"});case 14:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e,r){return t.apply(this,arguments)}}())}}]),e}(),Z=Y,ee="/api/requests",te=function(){function e(){Object(W["a"])(this,e)}return Object(H["a"])(e,null,[{key:"getRequests",value:function(e,t){return new Promise(function(){var r=Object(z["a"])(regeneratorRuntime.mark((function r(a,n){var i;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,G.a.get(ee,{params:{req:e,req_number:t}});case 3:i=r.sent,console.log("asd:"+i.data.results),i.data.results=i.data.results.sort((function(e,t){return e.date<t.date?1:t.date<e.date?-1:0})),a(i.data),r.next=13;break;case 9:r.prev=9,r.t0=r["catch"](0),console.log("Error: "+r.t0.response.data.code),a({code:r.t0.response.data.code,message:"Bad Insert"});case 13:case"end":return r.stop()}}),r,null,[[0,9]])})));return function(e,t){return r.apply(this,arguments)}}())}}]),e}(),re=te,ae={name:"Request",data:function(){return{isFormValid:!0,medical_acts:[],episode_id:null,type_id:null,description:"",bad_id:!1,good_id:!1,inserted_id:null}},created:function(){var e=this;return Object(z["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,U.getActs();case 3:e.medical_acts=t.sent,t.next=9;break;case 6:t.prev=6,t.t0=t["catch"](0),console.log(t.t0.message);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})))()},methods:{reset:function(){this.$refs.form.reset()},createRequest:function(){var e=this;return Object(z["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Z.insertRequest(e.episode_id,e.type_id,e.description);case 2:r=t.sent,400==r.code?e.bad_id=!0:(e.inserted_id=r.inserted_id,e.good_id=!0);case 4:case"end":return t.stop()}}),t)})))()}}},ne=ae,ie=(r("b795"),r("169a")),oe=r("4bd4"),se=r("0fd9"),ce=r("b974"),de=r("8654"),le=r("a844"),ue=Object(l["a"])(ne,I,M,!1,null,"1f9b19db",null),ve=ue.exports;v()(ue,{VBtn:p["a"],VCard:N["a"],VCardActions:D["a"],VCardText:D["b"],VCardTitle:D["c"],VContainer:$["a"],VDialog:ie["a"],VForm:oe["a"],VRow:se["a"],VSelect:ce["a"],VSpacer:h["a"],VTextField:de["a"],VTextarea:le["a"]});var pe={components:{Navbar:V,Home:L,Footer:F,Request:ve},data:function(){return{}}},me=pe,fe=(r("5c0b"),r("7496")),_e=Object(l["a"])(me,n,i,!1,null,null,null),be=_e.exports;v()(_e,{VApp:fe["a"],VContainer:$["a"]});var ge=r("8c4f"),he=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h1",[e._v(" Registar Episódio Médico ")]),r("v-form",{model:{value:e.isFormValid,callback:function(t){e.isFormValid=t},expression:"isFormValid"}},[[r("v-row",{attrs:{justify:"center"}},[r("v-dialog",{attrs:{persistent:"","max-width":"500"},model:{value:e.bad_id,callback:function(t){e.bad_id=t},expression:"bad_id"}},[r("v-card",[r("v-card-title",{staticClass:"headline"},[e._v("Número de CC inválido.")]),r("v-card-text",[e._v("O número de CC inserido não é válido, por favor verifique-o e insira-o de novo.")]),r("v-card-actions",[r("v-spacer"),r("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:function(t){e.bad_id=!1}}},[e._v("Voltar atrás")])],1)],1)],1)],1),r("v-row",{attrs:{justify:"center"}},[r("v-dialog",{attrs:{persistent:"","max-width":"500"},model:{value:e.good_id,callback:function(t){e.good_id=t},expression:"good_id"}},[r("v-card",[r("v-card-title",{staticClass:"headline"},[e._v("Episódio registado.")]),r("v-card-text",[e._v(" Nº de Episódio: "+e._s(this.episode_id)+" ")]),r("v-card-actions",[r("v-spacer"),r("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:function(t){e.good_id=!1}}},[e._v("Voltar atrás")])],1)],1)],1)],1)],r("v-text-field",{attrs:{outlined:"",label:"Número de CC do Paciente",rules:[function(e){return!!e||"É necessário inserir o número de CC do paciente."}],required:""},model:{value:e.patient_id,callback:function(t){e.patient_id=t},expression:"patient_id"}}),r("v-select",{attrs:{items:e.doctors_array,label:"Médico","item-text":"name","item-value":"id",outlined:"",rules:[function(e){return!!e||"É necessária a seleção de um médico."}],required:""},model:{value:e.doctor_id,callback:function(t){e.doctor_id=t},expression:"doctor_id"}}),r("v-select",{attrs:{items:e.episode_types,label:"Tipo de Episódio","item-text":"name","item-value":"id",outlined:"",rules:[function(e){return!!e||"É necessária a seleção de um tipo de episódio."}],required:""},model:{value:e.type_id,callback:function(t){e.type_id=t},expression:"type_id"}}),r("v-btn",{staticClass:"mr-4",attrs:{color:"teal lighten-5",disabled:!e.isFormValid},on:{click:e.createEpisode}},[e._v(" Submeter ")])],2)],1)},xe=[],ke="/api/doctors",we=function(){function e(){Object(W["a"])(this,e)}return Object(H["a"])(e,null,[{key:"getDoctors",value:function(){return new Promise(function(){var e=Object(z["a"])(regeneratorRuntime.mark((function e(t,r){var a,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,G.a.get(ke);case 3:a=e.sent,n=a.data,t(n),e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](0),r(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t,r){return e.apply(this,arguments)}}())}}]),e}(),Ve=we,qe="/api/episode_types",Ce=function(){function e(){Object(W["a"])(this,e)}return Object(H["a"])(e,null,[{key:"getTypes",value:function(){return new Promise(function(){var e=Object(z["a"])(regeneratorRuntime.mark((function e(t,r){var a,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,G.a.get(qe);case 3:a=e.sent,n=a.data,t(n),e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](0),r(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t,r){return e.apply(this,arguments)}}())}}]),e}(),ye=Ce,Re="/api/episodes",je=function(){function e(){Object(W["a"])(this,e)}return Object(H["a"])(e,null,[{key:"insertEpisode",value:function(e,t,r){return new Promise(function(){var a=Object(z["a"])(regeneratorRuntime.mark((function a(n,i){var o;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,G.a.post(Re,{pat_id:e,doc_id:t,type_id:r});case 3:o=a.sent,n(o.data),a.next=10;break;case 7:a.prev=7,a.t0=a["catch"](0),n({code:400,message:"Bad Insert"});case 10:case"end":return a.stop()}}),a,null,[[0,7]])})));return function(e,t){return a.apply(this,arguments)}}())}}]),e}(),Oe=je,Pe={name:"Episode",data:function(){return{doctors_array:[],episode_types:[],patient_id:null,doctor_id:null,type_id:null,bad_id:!1,good_id:!1,episode_id:null,isFormValid:!0}},created:function(){var e=this;return Object(z["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Ve.getDoctors();case 3:return e.doctors_array=t.sent,t.next=6,ye.getTypes();case 6:e.episode_types=t.sent,t.next=12;break;case 9:t.prev=9,t.t0=t["catch"](0),console.log(t.t0.message);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})))()},methods:{createEpisode:function(){var e=this;return Object(z["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Oe.insertEpisode(e.patient_id,e.doctor_id,e.type_id);case 2:r=t.sent,400==r.code?e.bad_id=!0:(e.episode_id=r.inserted_id,e.good_id=!0);case 4:case"end":return t.stop()}}),t)})))()}}},Ee=Pe,Fe=(r("bb0f"),Object(l["a"])(Ee,he,xe,!1,null,"68a4df4f",null)),Te=Fe.exports;v()(Fe,{VBtn:p["a"],VCard:N["a"],VCardActions:D["a"],VCardText:D["b"],VCardTitle:D["c"],VDialog:ie["a"],VForm:oe["a"],VRow:se["a"],VSelect:ce["a"],VSpacer:h["a"],VTextField:de["a"]});var Se=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h1",[e._v(" Consultar Pedido ")]),r("v-container",{staticClass:"pa-5"},[r("v-form",{model:{value:e.isFormValid,callback:function(t){e.isFormValid=t},expression:"isFormValid"}},[[r("v-row",{attrs:{justify:"center"}},[r("v-dialog",{attrs:{persistent:"","max-width":"500"},model:{value:e.bad_id,callback:function(t){e.bad_id=t},expression:"bad_id"}},[r("v-card",[r("v-card-title",{staticClass:"headline"},[e._v("Número de CC inválido.")]),r("v-card-text",[e._v("O número de CC inserido não é válido, por favor verifique-o e insira-o de novo.")]),r("v-card-actions",[r("v-spacer"),r("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:function(t){e.bad_id=!1}}},[e._v("Voltar atrás")])],1)],1)],1)],1),r("v-row",{attrs:{justify:"center"}},[r("v-dialog",{attrs:{persistent:"","max-width":"500"},model:{value:e.bad_data,callback:function(t){e.bad_data=t},expression:"bad_data"}},[r("v-card",[r("v-card-title",{staticClass:"headline"},[e._v("Número de pedido inválido.")]),r("v-card-text",[e._v("O número de pedido inserido não é válido, por favor verifique-o e insira-o de novo.")]),r("v-card-actions",[r("v-spacer"),r("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:function(t){e.bad_data=!1}}},[e._v("Voltar atrás")])],1)],1)],1)],1),r("v-row",{attrs:{justify:"center"}},[r("v-dialog",{attrs:{persistent:"","max-width":"500"},model:{value:e.no_requests,callback:function(t){e.no_requests=t},expression:"no_requests"}},[r("v-card",[r("v-card-title",{staticClass:"headline"},[e._v("Pedido(s) não encontrado(s).")]),r("v-card-text",[e._v("Não foram encontrados pedidos associados à informação fornecida.")]),r("v-card-actions",[r("v-spacer"),r("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:function(t){e.no_requests=!1}}},[e._v("Voltar atrás")])],1)],1)],1)],1)],r("v-select",{attrs:{items:e.requirements,"item-text":"name","item-value":"value",label:"Requisito a filtrar por (Nº de CC / Pedido)",rules:[function(e){return!!e||"É necessário selecionar um requisito."}],required:"",outlined:""},model:{value:e.req,callback:function(t){e.req=t},expression:"req"}}),r("v-text-field",{attrs:{label:"Número",rules:[function(e){return(e||"").length>0||"É necessário inserir um número."}],required:"",outlined:""},model:{value:e.req_number,callback:function(t){e.req_number=t},expression:"req_number"}}),r("v-btn",{staticClass:"mr-4",attrs:{color:"teal lighten-5",disabled:!e.isFormValid},on:{click:e.getRequests}},[e._v(" Consultar ")])],2)],1),r("v-container",e._l(e.requests,(function(t){return r("v-card",{key:t.index,staticClass:"ma-1",attrs:{"text-align":"center"}},[r("v-card-title",[e._v(" Pedido nº: "+e._s(t.id)+" ")]),r("v-card-text",[r("p",[e._v(" Nº CC do Paciente : "+e._s(t.patient_id)+" ")]),r("p",[e._v(" Data do Pedido : "+e._s(t.date)+" ")]),r("p",[e._v(" Descrição do pedido: "+e._s(t.clinical_info)+" ")]),0==t.in_worklist&&0==t.status?r("p",[e._v(" Estado do pedido: Relatório disponível. ")]):e._e(),0==t.in_worklist&&1==t.status?r("p",[e._v(" Estado do pedido: Pedido cancelado. ")]):e._e(),1==t.in_worklist&&0==t.status?r("p",[e._v(" Estado do pedido: Exame por realizar. ")]):e._e(),1==t.in_worklist&&1==t.status?r("p",[e._v(" Estado do pedido: Exame por analisar. ")]):e._e(),0==t.in_worklist&&0==t.status?r("p",[e._v(" Relatório : "+e._s(t.report)+" ")]):e._e()])],1)})),1)],1)},Ne=[],De=r("2909"),Ae={name:"Consult",data:function(){return{isFormValid:!0,requirements:[{name:"CC",value:1},{name:"Pedido",value:2}],req:null,req_number:null,bad_id:!1,bad_data:!1,no_requests:!1,requests:[]}},methods:{getRequests:function(){var e=this;return Object(z["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,re.getRequests(e.req,e.req_number);case 2:r=t.sent,t.t0=r.code,t.next=201===t.t0?6:400===t.t0?8:401===t.t0?10:12;break;case 6:return e.no_requests=!0,t.abrupt("break",15);case 8:return e.bad_data=!0,t.abrupt("break",15);case 10:return e.bad_id=!0,t.abrupt("break",15);case 12:return console.log(r.results[0]),e.requests=Object(De["a"])(r.results),t.abrupt("break",15);case 15:case"end":return t.stop()}}),t)})))()}}},$e=Ae,Be=(r("ca9c"),Object(l["a"])($e,Se,Ne,!1,null,"3d4be998",null)),Le=Be.exports;v()(Be,{VBtn:p["a"],VCard:N["a"],VCardActions:D["a"],VCardText:D["b"],VCardTitle:D["c"],VContainer:$["a"],VDialog:ie["a"],VForm:oe["a"],VRow:se["a"],VSelect:ce["a"],VSpacer:h["a"],VTextField:de["a"]});var Ie=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h1",[e._v(" Alterar pedido ")]),[r("v-row",{attrs:{justify:"center"}},[r("v-dialog",{attrs:{persistent:"","max-width":"500"},model:{value:e.bad_id,callback:function(t){e.bad_id=t},expression:"bad_id"}},[r("v-card",[r("v-card-title",{staticClass:"headline"},[e._v("Dados inválidos.")]),r("v-card-text",[e._v("Não existe nenhum pedido alterável com esse número de identificação.")]),r("v-card-actions",[r("v-spacer"),r("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:function(t){e.bad_id=!1}}},[e._v("Voltar atrás")])],1)],1)],1)],1),r("v-row",{attrs:{justify:"center"}},[r("v-dialog",{attrs:{persistent:"","max-width":"500"},model:{value:e.good_id,callback:function(t){e.good_id=t},expression:"good_id"}},[r("v-card",[r("v-card-title",{staticClass:"headline"},[e._v("Pedido alterado.")]),r("v-card-text",[e._v(" O pedido foi alterado. O novo nº do pedido é: "+e._s(this.inserted_id)+" ")]),r("v-card-actions",[r("v-spacer"),r("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:e.reload}},[e._v("Voltar atrás")])],1)],1)],1)],1)],r("v-form",{staticClass:"pa-5",model:{value:e.isFormValid,callback:function(t){e.isFormValid=t},expression:"isFormValid"}},[r("v-text-field",{attrs:{label:"Nº do Pedido",rules:[function(e){return(e||"").length>0||"É necessário inserir um número."}],required:"",outlined:""},model:{value:e.req_number,callback:function(t){e.req_number=t},expression:"req_number"}}),r("v-btn",{attrs:{disabled:!e.isFormValid,color:"teal lighten-5"},on:{click:e.getWLRequests}},[e._v(" Procurar ")])],1),r("v-form",{model:{value:e.validForm,callback:function(t){e.validForm=t},expression:"validForm"}},[r("v-container",e._l(e.requests,(function(t){return r("v-card",{key:t.index,staticClass:"ma-1",attrs:{"text-align":"center"}},[r("v-card-title",[e._v(" Pedido nº: "+e._s(t.id)+" ")]),r("v-card-text",[r("p",[e._v(" Data do Pedido : "+e._s(t.date)+" ")]),r("p",[e._v(" Descrição antiga : "+e._s(t.clinical_info)+" ")]),r("v-text-field",{attrs:{label:"Descrição atualizada",rules:[function(e){return(e||"").length>0||"Adicione um relatório ao pedido"},function(e){return(e||"").length<=300||"É permitido um máximo de 300 carateres"}],required:""},model:{value:e.description,callback:function(t){e.description=t},expression:"description"}}),0==t.status?r("p",[e._v(" Estado do pedido: Exame por realizar. ")]):r("p",[e._v(" Estado do pedido: Exame realizado. Relatório por escrever. ")])],1),r("v-btn",{staticClass:"mb-2 ml-2",attrs:{color:"teal lighten-5",disabled:!e.validForm},on:{click:e.updateRequest}},[e._v(" Submeter ")])],1)})),1)],1)],2)},Me=[],ze={name:"Change",data:function(){return{isFormValid:!0,validForm:!0,req_number:null,bad_id:!1,good_id:!1,inserted_id:null,requests:[],description:""}},methods:{getWLRequests:function(){var e=this;return Object(z["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Z.getWLRequests(e.req_number);case 2:r=t.sent,t.t0=r.code,t.next=401===t.t0?6:9;break;case 6:return console.log("hey"),e.bad_id=!0,t.abrupt("break",11);case 9:return e.requests=Object(De["a"])(r),t.abrupt("break",11);case 11:case"end":return t.stop()}}),t)})))()},updateRequest:function(){var e=this;return Object(z["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Z.updateRequest(e.requests[0].id,e.description,e.requests[0].medical_act_id,e.requests[0].episode_id,e.requests[0].patient_id);case 2:r=t.sent,200==r.code?(console.log("Sucessful insert"),e.inserted_id=r.inserted_id,e.good_id=!0):console.error("Oops");case 4:case"end":return t.stop()}}),t)})))()},reload:function(){this.$router.go()}}},We=ze,He=(r("b533"),Object(l["a"])(We,Ie,Me,!1,null,"61336ff5",null)),Je=He.exports;v()(He,{VBtn:p["a"],VCard:N["a"],VCardActions:D["a"],VCardText:D["b"],VCardTitle:D["c"],VContainer:$["a"],VDialog:ie["a"],VForm:oe["a"],VRow:se["a"],VSpacer:h["a"],VTextField:de["a"]});var Ge=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h1",[e._v(" Cancelar Pedido ")]),[r("v-row",{attrs:{justify:"center"}},[r("v-dialog",{attrs:{persistent:"","max-width":"500"},model:{value:e.bad_id,callback:function(t){e.bad_id=t},expression:"bad_id"}},[r("v-card",[r("v-card-title",{staticClass:"headline"},[e._v("Dados inválidos.")]),r("v-card-text",[e._v("Não existe nenhum pedido alterável com esse número de identificação.")]),r("v-card-actions",[r("v-spacer"),r("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:function(t){e.bad_id=!1}}},[e._v("Voltar atrás")])],1)],1)],1)],1),r("v-row",{attrs:{justify:"center"}},[r("v-dialog",{attrs:{persistent:"","max-width":"500"},model:{value:e.good_id,callback:function(t){e.good_id=t},expression:"good_id"}},[r("v-card",[r("v-card-title",{staticClass:"headline"},[e._v("Pedido cancelado.")]),r("v-card-text",[e._v(" O pedido foi cancelado.")]),r("v-card-actions",[r("v-spacer"),r("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:e.reload}},[e._v("Voltar atrás")])],1)],1)],1)],1),r("v-row",{attrs:{justify:"center"}},[r("v-dialog",{attrs:{persistent:"","max-width":"500"},model:{value:e.bad_cancellation,callback:function(t){e.bad_cancellation=t},expression:"bad_cancellation"}},[r("v-card",[r("v-card-title",{staticClass:"headline"},[e._v("Cancelamento falhou.")]),r("v-card-text",[e._v(" O cancelamento do pedido falhou. Verificar cancelamento do pedido.")]),r("v-card-actions",[r("v-spacer"),r("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:e.reload}},[e._v("Voltar atrás")])],1)],1)],1)],1)],r("v-form",{staticClass:"pa-5",model:{value:e.isFormValid,callback:function(t){e.isFormValid=t},expression:"isFormValid"}},[r("v-text-field",{attrs:{label:"Nº do Pedido",rules:[function(e){return(e||"").length>0||"É necessário inserir um número."}],required:"",outlined:""},model:{value:e.req_number,callback:function(t){e.req_number=t},expression:"req_number"}}),r("v-btn",{attrs:{disabled:!e.isFormValid,color:"teal lighten-5"},on:{click:e.getWLRequests}},[e._v(" Procurar ")])],1),r("v-form",[r("v-container",e._l(e.requests,(function(t){return r("v-card",{key:t.index,staticClass:"ma-1",attrs:{"text-align":"center"}},[r("v-card-title",{model:{value:e.cancel_req,callback:function(t){e.cancel_req=t},expression:"cancel_req"}},[e._v(" Pedido nº: "+e._s(t.id)+" ")]),r("v-card-text",[r("p",[e._v(" Data do Pedido : "+e._s(t.date)+" ")]),r("p",[e._v(" Descrição antiga : "+e._s(t.clinical_info)+" ")]),0==t.status?r("p",[e._v(" Estado do pedido: Exame por realizar. ")]):r("p",[e._v(" Estado do pedido: Exame realizado. Relatório por escrever. ")])]),r("v-btn",{staticClass:"mb-2 ml-2",attrs:{color:"teal lighten-5"},on:{click:e.cancelRequest}},[e._v(" Cancelar Pedido ")])],1)})),1)],1)],2)},Ke=[],Qe={name:"Cancel",data:function(){return{isFormValid:!0,req_number:null,cancel_req:null,bad_id:!1,good_id:!1,bad_cancellation:!1,inserted_id:null,requests:[],description:""}},methods:{getWLRequests:function(){var e=this;return Object(z["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Z.getWLRequests(e.req_number);case 2:r=t.sent,t.t0=r.code,t.next=401===t.t0?6:9;break;case 6:return console.log("hey"),e.bad_id=!0,t.abrupt("break",12);case 9:return e.requests=Object(De["a"])(r),e.cancel_req=e.requests[0].id,t.abrupt("break",12);case 12:case"end":return t.stop()}}),t)})))()},cancelRequest:function(){var e=this;return Object(z["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return console.log("Cancelar pedido n: "+e.cancel_req),t.next=3,Z.cancelRequest(e.cancel_req);case 3:r=t.sent,200==r.code?(console.log("Sucessful cancellation"),e.good_id=!0):(e.bad_cancellation=!0,console.error("Oops"));case 5:case"end":return t.stop()}}),t)})))()},reload:function(){this.$router.go()}}},Ue=Qe,Xe=(r("7730"),Object(l["a"])(Ue,Ge,Ke,!1,null,"4c0b69ee",null)),Ye=Xe.exports;v()(Xe,{VBtn:p["a"],VCard:N["a"],VCardActions:D["a"],VCardText:D["b"],VCardTitle:D["c"],VContainer:$["a"],VDialog:ie["a"],VForm:oe["a"],VRow:se["a"],VSpacer:h["a"],VTextField:de["a"]}),a["a"].use(ge["a"]);var Ze=[{path:"/",name:"Home",component:L},{path:"/request",name:"Request",component:ve},{path:"/episode",name:"Episode",component:Te},{path:"/consult",name:"Consult",component:Le},{path:"/change",name:"Change",component:Je},{path:"/cancel",name:"Cancel",component:Ye}],et=new ge["a"]({routes:Ze,mode:"history"}),tt=et,rt=r("2f62");a["a"].use(rt["a"]);var at=new rt["a"].Store({state:{},mutations:{},actions:{},modules:{}}),nt=r("f309");r("5363");a["a"].use(nt["a"],{icons:{iconfont:"mdi"}});var it=new nt["a"]({});r("d1e78");a["a"].config.productionTip=!1,new a["a"]({router:tt,store:at,vuetify:it,render:function(e){return e(be)}}).$mount("#app")},"5c0b":function(e,t,r){"use strict";var a=r("7694"),n=r.n(a);n.a},"75a6":function(e,t,r){"use strict";var a=r("913a"),n=r.n(a);n.a},7694:function(e,t,r){},7730:function(e,t,r){"use strict";var a=r("7ce4"),n=r.n(a);n.a},"7ce4":function(e,t,r){},"80b4":function(e,t,r){},8956:function(e,t,r){"use strict";var a=r("80b4"),n=r.n(a);n.a},"913a":function(e,t,r){},b533:function(e,t,r){"use strict";var a=r("23bb"),n=r.n(a);n.a},b795:function(e,t,r){"use strict";var a=r("259b"),n=r.n(a);n.a},bb0f:function(e,t,r){"use strict";var a=r("0017"),n=r.n(a);n.a},ca9c:function(e,t,r){"use strict";var a=r("3e06"),n=r.n(a);n.a},cb51:function(e,t,r){}});
//# sourceMappingURL=app.ecfe1aab.js.map