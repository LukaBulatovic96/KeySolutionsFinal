(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-868b21e4"],{"0b93":function(t,e,n){},"124e":function(t,e,n){"use strict";n("bca2")},"48be":function(t,e,n){"use strict";var c=n("7a23");Object(c["w"])("data-v-23f315e4");var i={class:"tabNav"},s={class:"nav nav-tabs"},a={class:"navbar-brand"},b=["onClick"];function o(t,e,n,o,r,u){return Object(c["t"])(),Object(c["f"])("div",i,[Object(c["g"])("ul",s,[(Object(c["t"])(!0),Object(c["f"])(c["a"],null,Object(c["z"])(n.tabs,(function(t){return Object(c["t"])(),Object(c["f"])("li",{key:t,class:"nav-item"},[Object(c["g"])("div",a,[Object(c["g"])("a",{class:Object(c["p"])(["tab_link",{active:t===n.selected}]),onClick:function(e){return u.setTab(t)}},Object(c["D"])(t),11,b)])])})),128))]),Object(c["A"])(t.$slots,"default",{},void 0,!0)])}Object(c["u"])();var r={props:{tabs:{type:Array,required:!0},selected:{type:String,required:!0}},methods:{setTab:function(t){this.$emit("selected",t)}}};n("124e");r.render=o,r.__scopeId="data-v-23f315e4";e["a"]=r},8654:function(t,e,n){"use strict";var c=n("7a23"),i={key:0};function s(t,e,n,s,a,b){return n.isSelected?(Object(c["t"])(),Object(c["f"])("div",i,[Object(c["A"])(t.$slots,"default")])):Object(c["e"])("",!0)}var a={props:{isSelected:{type:Boolean}}};a.render=s;e["a"]=a},a169:function(t,e,n){"use strict";n.r(e);n("b0c0");var c=n("7a23");Object(c["w"])("data-v-24ee2c66");var i=Object(c["g"])("div",{class:""},[Object(c["g"])("h1",null,"ADMINISTRATION")],-1),s={class:"overlay"},a={class:"userName"},b=["onClick"],o=["onClick"],r=["onClick"],u=["onClick"],l=["onClick"],O=["onClick"],d=["onClick"],f=["onClick"],j=["onClick"],v=["onClick"];function m(t,e,n,m,p,k){var T=Object(c["B"])("Tab"),y=Object(c["B"])("TabNav");return Object(c["t"])(),Object(c["f"])(c["a"],null,[i,Object(c["g"])("div",s,[Object(c["j"])(y,{tabs:p.companyList,selected:p.selected,onSelected:k.setSelected,id:"companyNav"},{default:Object(c["K"])((function(){return[(Object(c["t"])(!0),Object(c["f"])(c["a"],null,Object(c["z"])(p.companyList,(function(t,e){return Object(c["t"])(),Object(c["d"])(T,{key:t,isSelected:p.selected===t},{default:Object(c["K"])((function(){return[(Object(c["t"])(!0),Object(c["f"])(c["a"],null,Object(c["z"])(p.listOfListsOfUsers[e],(function(t){return Object(c["t"])(),Object(c["f"])("div",{class:"container",key:t._id},[Object(c["g"])("div",a,Object(c["D"])(t.name),1),t.availableTest.vqTest?Object(c["e"])("",!0):(Object(c["t"])(),Object(c["f"])("button",{key:0,class:"bb",type:"button",name:"button",onClick:function(e){return k.administerVQ(t)}},"Vq test",8,b)),t.availableTest.vqTest?(Object(c["t"])(),Object(c["f"])("button",{key:1,class:"cc",type:"button",name:"button",onClick:function(e){return k.administerVQ(t)}},"Vq test",8,o)):Object(c["e"])("",!0),t.availableTest.testLicnosti?Object(c["e"])("",!0):(Object(c["t"])(),Object(c["f"])("button",{key:2,class:"bb",type:"button",name:"button",onClick:function(e){return k.administerTL(t)}},"Test Licnosti",8,r)),t.availableTest.testLicnosti?(Object(c["t"])(),Object(c["f"])("button",{key:3,class:"cc",type:"button",name:"button",onClick:function(e){return k.administerTL(t)}},"Test Licnosti",8,u)):Object(c["e"])("",!0),t.availableTest.stavoviZaposlenih?Object(c["e"])("",!0):(Object(c["t"])(),Object(c["f"])("button",{key:4,class:"bb",type:"button",name:"button",onClick:function(e){return k.administerStavovi(t)}},"Stavovi Zaposlenih",8,l)),t.availableTest.stavoviZaposlenih?(Object(c["t"])(),Object(c["f"])("button",{key:5,class:"cc",type:"button",name:"button",onClick:function(e){return k.administerStavovi(t)}},"Stavovi Zaposlenih",8,O)):Object(c["e"])("",!0),t.availableTest.feedbackTest?Object(c["e"])("",!0):(Object(c["t"])(),Object(c["f"])("button",{key:6,class:"bb",type:"button",name:"button",onClick:function(e){return k.administerFB(t)}},"360 FeedBack",8,d)),t.availableTest.feedbackTest?(Object(c["t"])(),Object(c["f"])("button",{key:7,class:"cc",type:"button",name:"button",onClick:function(e){return k.administerFB(t)}},"360 FeedBack",8,f)):Object(c["e"])("",!0),t.availableTest.belbinTest?Object(c["e"])("",!0):(Object(c["t"])(),Object(c["f"])("button",{key:8,class:"bb",type:"button",name:"button",onClick:function(e){return k.administerBelbin(t)}},"Belbin Test",8,j)),t.availableTest.belbinTest?(Object(c["t"])(),Object(c["f"])("button",{key:9,class:"cc",type:"button",name:"button",onClick:function(e){return k.administerBelbin(t)}},"Belbin Test",8,v)):Object(c["e"])("",!0)])})),128))]})),_:2},1032,["isSelected"])})),128))]})),_:1},8,["tabs","selected","onSelected"])])],64)}Object(c["u"])();var p=n("1da1"),k=n("5530"),T=(n("96cf"),n("159b"),n("5502")),y=n("48be"),h=n("8654"),C={computed:Object(T["c"])(["companys","users","user"]),components:{TabNav:y["a"],Tab:h["a"]},data:function(){return{selected:"",companyList:[],listOfListsOfUsers:[]}},methods:Object(k["a"])(Object(k["a"])({},Object(T["b"])(["getCompanies","getAllUsers","getProfile","administerVQTest","administerTLTest","administerStavoviTest","administerFBTest","administerBelbinTest"])),{},{setSelected:function(t){this.selected=t},administerVQ:function(t){this.administerVQTest(t._id)},administerTL:function(t){this.administerTLTest(t._id)},administerStavovi:function(t){this.administerStavoviTest(t._id)},administerFB:function(t){this.administerFBTest(t._id)},administerBelbin:function(t){this.administerBelbinTest(t._id)}}),created:function(){var t=this;return Object(p["a"])(regeneratorRuntime.mark((function e(){var n,c,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.getProfile();case 2:return e.next=4,t.getCompanies();case 4:return e.next=6,t.getAllUsers();case 6:for(t.companys.forEach((function(e){var n=[];t.listOfListsOfUsers.push(n),t.companyList.push(e.name)})),n=0;n<t.listOfListsOfUsers.length;n++)for(c=t.companyList[n],i=0;i<t.users.length;i++)t.users[i].type===c&&t.listOfListsOfUsers[n].push(t.users[i]);case 8:case"end":return e.stop()}}),e)})))()}};n("aa05");C.render=m,C.__scopeId="data-v-24ee2c66";e["default"]=C},aa05:function(t,e,n){"use strict";n("0b93")},b0c0:function(t,e,n){var c=n("83ab"),i=n("9bf2").f,s=Function.prototype,a=s.toString,b=/^\s*function ([^ (]*)/,o="name";c&&!(o in s)&&i(s,o,{configurable:!0,get:function(){try{return a.call(this).match(b)[1]}catch(t){return""}}})},bca2:function(t,e,n){}}]);
//# sourceMappingURL=chunk-868b21e4.e4ad39d1.js.map