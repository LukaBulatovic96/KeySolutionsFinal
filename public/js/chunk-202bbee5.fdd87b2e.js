(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-202bbee5"],{"124e":function(e,t,n){"use strict";n("bca2")},"45b0":function(e,t,n){},"48be":function(e,t,n){"use strict";var c=n("7a23");Object(c["w"])("data-v-23f315e4");var a={class:"tabNav"},r={class:"nav nav-tabs"},s={class:"navbar-brand"},o=["onClick"];function i(e,t,n,i,l,u){return Object(c["t"])(),Object(c["f"])("div",a,[Object(c["g"])("ul",r,[(Object(c["t"])(!0),Object(c["f"])(c["a"],null,Object(c["z"])(n.tabs,(function(e){return Object(c["t"])(),Object(c["f"])("li",{key:e,class:"nav-item"},[Object(c["g"])("div",s,[Object(c["g"])("a",{class:Object(c["p"])(["tab_link",{active:e===n.selected}]),onClick:function(t){return u.setTab(e)}},Object(c["D"])(e),11,o)])])})),128))]),Object(c["A"])(e.$slots,"default",{},void 0,!0)])}Object(c["u"])();var l={props:{tabs:{type:Array,required:!0},selected:{type:String,required:!0}},methods:{setTab:function(e){this.$emit("selected",e)}}};n("124e");l.render=i,l.__scopeId="data-v-23f315e4";t["a"]=l},"4af0":function(e,t,n){"use strict";n("45b0")},8654:function(e,t,n){"use strict";var c=n("7a23"),a={key:0};function r(e,t,n,r,s,o){return n.isSelected?(Object(c["t"])(),Object(c["f"])("div",a,[Object(c["A"])(e.$slots,"default")])):Object(c["e"])("",!0)}var s={props:{isSelected:{type:Boolean}}};s.render=r;t["a"]=s},"99af":function(e,t,n){"use strict";var c=n("23e7"),a=n("d039"),r=n("e8b5"),s=n("861d"),o=n("7b0b"),i=n("50c4"),l=n("8418"),u=n("65f0"),b=n("1dde"),d=n("b622"),f=n("2d00"),j=d("isConcatSpreadable"),O=9007199254740991,g="Maximum allowed index exceeded",p=f>=51||!a((function(){var e=[];return e[j]=!1,e.concat()[0]!==e})),m=b("concat"),v=function(e){if(!s(e))return!1;var t=e[j];return void 0!==t?!!t:r(e)},h=!p||!m;c({target:"Array",proto:!0,forced:h},{concat:function(e){var t,n,c,a,r,s=o(this),b=u(s,0),d=0;for(t=-1,c=arguments.length;t<c;t++)if(r=-1===t?s:arguments[t],v(r)){if(a=i(r.length),d+a>O)throw TypeError(g);for(n=0;n<a;n++,d++)n in r&&l(b,d,r[n])}else{if(d>=O)throw TypeError(g);l(b,d++,r)}return b.length=d,b}})},b0c0:function(e,t,n){var c=n("83ab"),a=n("9bf2").f,r=Function.prototype,s=r.toString,o=/^\s*function ([^ (]*)/,i="name";c&&!(i in r)&&a(r,i,{configurable:!0,get:function(){try{return s.call(this).match(o)[1]}catch(e){return""}}})},b50f:function(e,t,n){"use strict";n.r(t);n("b0c0");var c=n("7a23");Object(c["w"])("data-v-5028f4ea");var a=Object(c["g"])("h1",null,"Baza Korisnika i Kompanija",-1),r={class:"validation"},s=Object(c["g"])("tr",null,[Object(c["g"])("th",null,"Ime"),Object(c["g"])("th",null,"Email"),Object(c["g"])("th",null,"Username"),Object(c["g"])("th",null,"Sektor"),Object(c["g"])("th",null,"Radno mesto"),Object(c["g"])("th",null,"Nadređeni"),Object(c["g"])("th",null,"Izmeni nadređenog")],-1),o=["onUpdate:modelValue"],i=["onClick"],l=["onClick"];function u(e,t,n,u,b,d){var f=Object(c["B"])("Tab"),j=Object(c["B"])("TabNav");return Object(c["t"])(),Object(c["f"])(c["a"],null,[a,Object(c["j"])(j,{tabs:b.companyList,selected:b.selected,onSelected:d.setSelected,id:"companyNav"},{default:Object(c["K"])((function(){return[(Object(c["t"])(!0),Object(c["f"])(c["a"],null,Object(c["z"])(b.companyList,(function(t,n){return Object(c["t"])(),Object(c["d"])(f,{key:t,isSelected:b.selected===t},{default:Object(c["K"])((function(){return[Object(c["g"])("div",r,Object(c["D"])(b.validation),1),(Object(c["t"])(!0),Object(c["f"])(c["a"],null,Object(c["z"])(b.listOfListsOfUsers[n],(function(t,n){return Object(c["t"])(),Object(c["f"])("div",{class:"container",key:t._id},[Object(c["g"])("table",null,[s,Object(c["g"])("tr",null,[Object(c["g"])("td",null,Object(c["D"])(t.name),1),Object(c["g"])("td",null,Object(c["D"])(t.email),1),Object(c["g"])("td",null,Object(c["D"])(t.username),1),Object(c["g"])("td",null,Object(c["D"])(t.sektor),1),Object(c["g"])("td",null,Object(c["D"])(t.radnoMesto),1),Object(c["g"])("td",null,Object(c["D"])(t.nadredjeni),1),Object(c["g"])("td",null,[Object(c["L"])(Object(c["g"])("select",{name:"collegue",id:"collegue","onUpdate:modelValue":function(e){return b.collegue[n]=e}},[(Object(c["t"])(!0),Object(c["f"])(c["a"],null,Object(c["z"])(e.usersSameCompany,(function(e){return Object(c["t"])(),Object(c["f"])("option",{key:e.name},Object(c["D"])(e.name),1)})),128))],8,o),[[c["H"],b.collegue[n]]])])])]),Object(c["g"])("button",{type:"button",name:"button",onClick:function(e){return d.removeUser(t._id)}},"Ukloni Zaposlenog",8,i),Object(c["g"])("button",{type:"button",name:"button",onClick:function(e){return d.updateUser(t._id,b.collegue[n])}},"Sacuvaj izmene",8,l)])})),128))]})),_:2},1032,["isSelected"])})),128))]})),_:1},8,["tabs","selected","onSelected"])],64)}Object(c["u"])();var b=n("1da1"),d=n("5530"),f=(n("99af"),n("159b"),n("96cf"),n("5502")),j=n("48be"),O=n("8654"),g={computed:Object(f["c"])(["companys","users","user","usersSameCompany"]),components:{TabNav:j["a"],Tab:O["a"]},data:function(){return{selected:"",companyList:[],listOfListsOfUsers:[],validation:"",tester:"",collegue:[]}},methods:Object(d["a"])(Object(d["a"])({},Object(f["b"])(["getCompanies","getAllUsers","getProfile","deleteUser","getCollegues","setNadredjeni"])),{},{setSelected:function(e){var t=this;return Object(b["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return t.selected=e,n.next=3,t.getCollegues(e);case 3:case"end":return n.stop()}}),n)})))()},removeUser:function(e){this.validation="",this.deleteUser(e),this.validation="Uklonjen Zaposleni id=".concat(e)},updateUser:function(e,t){var n=this;return Object(b["a"])(regeneratorRuntime.mark((function c(){var a,r,s;return regeneratorRuntime.wrap((function(c){while(1)switch(c.prev=c.next){case 0:for(console.log(e),console.log(t),r=0;r<n.users.length;r++)n.users[r].name==t&&(a=n.users[r]._id);return s={userID:e,nadredjeniName:t,nadredjeni_id:a},console.log("NADREDJENI ID: "),console.log(a),c.next=8,n.setNadredjeni(s);case 8:n.validation="Zaposlenom sa ID=".concat(e," postavljen nadredjeni ").concat(t);case 9:case"end":return c.stop()}}),c)})))()}}),created:function(){var e=this;return Object(b["a"])(regeneratorRuntime.mark((function t(){var n,c,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.getProfile();case 2:return t.next=4,e.getCompanies();case 4:return t.next=6,e.getAllUsers();case 6:for(e.companys.forEach((function(t){var n=[];e.listOfListsOfUsers.push(n),"admin"!=t.name&&e.companyList.push(t.name)})),n=0;n<e.listOfListsOfUsers.length;n++)if(c=e.companyList[n],"admin"!=c)for(a=0;a<e.users.length;a++)e.users[a].type===c&&e.listOfListsOfUsers[n].push(e.users[a]);case 8:case"end":return t.stop()}}),t)})))()}};n("4af0");g.render=u,g.__scopeId="data-v-5028f4ea";t["default"]=g},bca2:function(e,t,n){}}]);
//# sourceMappingURL=chunk-202bbee5.fdd87b2e.js.map