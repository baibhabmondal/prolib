(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-fd9e"],{"7b01":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",t._l(t.notification,function(e){return i("v-layout",{key:e.date,attrs:{row:"",wrap:"","justify-center":""}},[i("v-flex",{attrs:{xs12:"",md8:"","mb-4":""}},[i("v-card",{staticStyle:{"border-radius":"10px"},attrs:{height:"100px"}},[i("v-card-title",[i("v-layout",{attrs:{row:"",wrap:""}},[i("v-flex",{attrs:{xs2:"",md2:""}},[i("img",{staticStyle:{"border-radius":"100%"},attrs:{src:n("c35f"),height:"60px",width:"60px",contain:""}})]),i("v-flex",{attrs:{xs9:"",md9:""}},[i("h3",[t._v(t._s(e.notification))]),i("p",{staticClass:"text-md-left"},[t._v(t._s(e.date)+" ")])]),i("v-flex",{attrs:{xs1:"",md1:"","text-md-center":""}},[i("v-icon",{attrs:{right:"",medium:""},on:{click:function(n){t.declinenotification(e._id)}}},[t._v("close")])],1)],1)],1)],1)],1)],1)}))},r=[],o=(n("96cf"),n("3040")),a=n("bc3a"),c=n.n(a),s={data:function(){return{notification:[]}},computed:{uid:function(){return this.$store.getters.userId}},methods:{callNotifications:function(){var t=Object(o["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,console.log(this.uid),t.next=4,c.a.post("/seenotif",{id:this.uid});case 4:e=t.sent,console.log(e),this.notification=e.data.data,t.next=12;break;case 9:t.prev=9,t.t0=t["catch"](0),console.log(t.t0);case 12:case"end":return t.stop()}},t,this,[[0,9]])}));return function(){return t.apply(this,arguments)}}(),declinenotification:function(){var t=Object(o["a"])(regeneratorRuntime.mark(function t(e){var n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,console.log(this.uid),t.next=4,c.a.post("/deletenotif/".concat(e));case 4:n=t.sent,this.$store.dispatch("setNotifCount"),this.callNotifications(),console.log(n.data),t.next=13;break;case 10:t.prev=10,t.t0=t["catch"](0),console.log(t.t0);case 13:case"end":return t.stop()}},t,this,[[0,10]])}));return function(e){return t.apply(this,arguments)}}()},created:function(){this.callNotifications()}},u=s,l=n("2877"),f=Object(l["a"])(u,i,r,!1,null,null,null);f.options.__file="notifications.vue";e["default"]=f.exports},c35f:function(t,e,n){t.exports=n.p+"img/phi 2.0.71b54e0f.jpg"}}]);
//# sourceMappingURL=chunk-fd9e.6fde5420.js.map