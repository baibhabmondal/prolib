(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4daf"],{"0162":function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("v-container",[s("v-layout",{staticClass:"{'ma-0': $vuetify.breakpoint.smAndDown, 'ma-5': $vuetify.breakpoint.mdAndUp}",attrs:{row:"",wrap:""}},[s("v-flex",{staticClass:"det-card"},[s("v-card",{staticClass:"elevation-3",staticStyle:{border:"10px","border-radius":"15px"}},[s("div",{staticClass:"top-cover"},[s("div",{staticClass:"top-head text-lg-right",staticStyle:{"padding-top":"5%"}},[s("div",{staticClass:"mb-0 mr-4 topText",staticStyle:{"font-size":"20pt"}},[s("b",[t._v(t._s(t.work_as))])]),s("div",{staticClass:"mb-0 mr-4 topText"},[s("b",[t._v("Department of Computer Science and Engineering")])]),"Faculty"===t.work_as?s("div",{staticClass:"mb-0 mr-4 topText"},[s("b",[t._v("Faculty of Engineering and Technology")])]):t._e(),s("div",{staticClass:"extraBottom"})])]),s("v-divider"),s("v-flex",{staticClass:"av"},[s("v-avatar",{staticClass:"avatarPhoto",attrs:{size:"100px"}},[s("img",{attrs:{src:t.imageurl,alt:"John"}})])],1),s("div",{staticClass:"name text-md-left"},[t._v(t._s(t.name)+" ("+t._s(t.regno)+")")]),s("v-layout",{attrs:{row:"",wrap:""}},[s("v-flex",{staticClass:"deg-card2"},[s("div",{staticClass:"qualification"},[s("B",[t._v("QUALIFICATIONS")])],1),s("div",{staticClass:"px-0 dc2"},t._l(t.qualifications,function(a){return s("div",{staticClass:"text-sm-left ml-4"},[t._v(t._s(a))])}))]),s("v-flex",{staticClass:"mt-5 works-at-card",attrs:{sm3:"",xs6:""}},[s("div",{staticClass:"mb-0 ml-4 mr-4",staticStyle:{"font-size":"13pt"}},[s("b",[t._v("WORKS AT")])]),s("div",{staticClass:"px-0"},t._l(t.worksat,function(a){return s("div",{staticClass:"text-sm-left ml-4"},[t._v(t._s(a))])}))])],1),s("v-layout",[s("v-flex",{attrs:{xs12:""}},[s("div",{staticClass:"mt-5 am"},[s("b",[t._v("ABOUT ME")])])])],1),s("v-layout",{attrs:{row:"",wrap:""}},[s("v-flex",{attrs:{xs12:"",sm4:"",md4:""}},[s("div",{staticClass:"icons"},[s("div",{staticClass:"contacts"},[s("v-icon",{staticClass:"mpad"},[t._v("phone   :")]),t._v("\r\n          "+t._s(t.contact)+"\r\n        ")],1),s("div",{staticClass:"email"},[s("v-icon",{staticClass:"mpad"},[t._v("email   :")]),t._v("\r\n          "+t._s(t.email)+"\r\n        ")],1),s("div",{staticClass:"DOB"},[s("v-icon",{staticClass:"mpad"},[t._v("cake    :")]),t._v("\r\n          "+t._s(t.birthdate)+"\r\n        ")],1),s("div",{staticClass:"location"},[s("v-icon",{staticClass:"mpad"},[t._v("room    :")]),t._v("\r\n          "+t._s(t.location)+"\r\n        ")],1)])]),s("v-flex",{attrs:{xs12:"",sm8:"",md8:""}},[s("div",{staticClass:"about-text"},[t._v("\r\n"+t._s(t.about)+"\r\n")])])],1)],1)],1)],1),s("v-layout",{attrs:{row:"",wrap:""}},[s("v-flex",{staticClass:"skill-card",attrs:{md6:"",xs12:"","pr-1":""}},[s("v-card",{staticClass:"elevation-3",staticStyle:{border:"10px","border-radius":"15px"}},[s("v-card-title",{attrs:{"primary-title":""}},[s("div",[s("h3",{staticClass:"headline text-md-center",staticStyle:{"padding-left":"25%"}},[t._v("Skills")])])]),s("div",{staticClass:"text-xs"},t._l(t.skills,function(a){return s("v-chip",{staticClass:"elevation-2",attrs:{outline:"",color:"green"}},[t._v(t._s(a))])}))],1)],1),s("v-flex",{staticClass:"skill-card",attrs:{xs12:"",md6:"","pl-1":""}},[s("v-card",{staticClass:"elevation-3",staticStyle:{border:"10px","border-radius":"15px"}},[s("v-card-title",{attrs:{"primary-title":""}},[s("div",[s("h3",{staticClass:"headline text-xs-center mb-0",staticStyle:{"padding-left":"25%"}},[t._v("Interests")])])]),s("div",{staticClass:"text-xs"},t._l(t.interests,function(a){return s("v-chip",{staticClass:"elevation-2",attrs:{outline:"",color:"green"}},[t._v(t._s(a))])}))],1)],1)],1),s("div",{staticClass:"tabs-bar"},[s("v-toolbar",{staticClass:"elevation-3",staticStyle:{border:"10px","border-top-right-radius":"15px","border-top-left-radius":"15px"},attrs:{color:"black",dark:"",tabs:""}},[s("v-tabs",{attrs:{centered:"",color:"black","slider-color":"white",grow:""},model:{value:t.model,callback:function(a){t.model=a},expression:"model"}},[s("v-tab",[t._v("\r\n        Projects\r\n      ")]),s("v-tab",[t._v("\r\n        Achievements\r\n      ")])],1)],1),s("v-tabs-items",{staticClass:"elevation-3",staticStyle:{border:"10px","border-bottom-left-radius":"15px","border-bottom-right-radius":"15px"},model:{value:t.model,callback:function(a){t.model=a},expression:"model"}},[s("v-tab-item",[s("v-card",{attrs:{flat:"",color:"white"}},[s("v-card-text",{domProps:{textContent:t._s(t.text)}})],1)],1),s("v-tab-item",[s("v-card",{attrs:{flat:"",color:"white"}},[s("v-card-text",{domProps:{textContent:t._s(t.text2)}})],1)],1)],1)],1),s("v-dialog",{attrs:{persistent:"","max-width":"650px"},model:{value:t.dialog,callback:function(a){t.dialog=a},expression:"dialog"}},[s("v-btn",{staticStyle:{"z-index":"999"},attrs:{slot:"activator",fixed:"",dark:"",fab:"",bottom:"",right:"",color:"black darken-3"},slot:"activator"},[s("v-icon",[t._v("edit")])],1),s("edit_Profile",{on:{close:function(a){t.dialog=!1},refresh:t.getuser}})],1)],1)},i=[],r=(s("7f7f"),s("96cf"),s("3040")),o=s("bc3a"),l=s.n(o),n={data:function(){return{dialog:!1,work_as:"Student",name:"",regno:"",qualifications:["Directorate of Philosophy","Masters in Computers","Bachelors in Computers"],worksat:["WEBARCH","SRM"],about:"I am a science enthusiast looking for spellbinding opportunities.  I am very passionate about teamwork while working with project teams.I am good at leadership and I never take a step back from learning new technologies.I always balance looking fresh with being effective.",contact:"842289928",email:"",birthdate:"",location:"",skills:["vue","node","java","vue","node","java","vue","node"],interests:["blockchains","machine learning","blockchains","machine learning"],achievements:"",imageurl:"https://cdn.vuetifyjs.com/images/john.jpg",model:"tab-2",text:"projects",text2:"achievements"}},created:function(){this.getuser()},methods:{getuser:function(){var t=Object(r["a"])(regeneratorRuntime.mark(function t(){var a;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,console.log(this.uid),t.next=4,l.a.post("http://localhost:3001/user/read/".concat(this.uid));case 4:a=t.sent,console.log(a.data),this.name=a.data.item.name,this.regno=a.data.item.reg_no,this.birthdate=a.data.item.DOB,this.email=a.data.item.email,this.location=a.data.item.address,this.contact=a.data.item.contact,this.about=a.data.item.about,this.work_as=a.data.item.work_as,this.skills=a.data.item.skills,this.interests=a.data.item.interests,this.worksat=a.data.item.works_at,this.qualifications=a.data.item.qualifications,this.achievements=a.data.item.achievements,t.next=24;break;case 21:t.prev=21,t.t0=t["catch"](0),console.log(t.t0);case 24:case"end":return t.stop()}},t,this,[[0,21]])}));return function(){return t.apply(this,arguments)}}()},computed:{uid:function(){return this.$store.getters.userId}}},c=n,d=(s("6e3b"),s("2877")),v=Object(d["a"])(c,e,i,!1,null,"1ab6e8cc",null);v.options.__file="profile.vue";a["default"]=v.exports},"6e3b":function(t,a,s){"use strict";var e=s("71b8"),i=s.n(e);i.a},"71b8":function(t,a,s){}}]);
//# sourceMappingURL=chunk-4daf.9108e17b.js.map