(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6446e020"],{3604:function(e,t,o){"use strict";o("49ba")},"49ba":function(e,t,o){},b0c0:function(e,t,o){var n=o("83ab"),c=o("9bf2").f,a=Function.prototype,i=a.toString,l=/^\s*function ([^ (]*)/,r="name";n&&!(r in a)&&c(a,r,{configurable:!0,get:function(){try{return i.call(this).match(l)[1]}catch(e){return""}}})},f383:function(e,t,o){"use strict";o.r(t);o("b0c0");var n=o("7a23");Object(n["w"])("data-v-1458ac94");var c=Object(n["g"])("div",{class:"header"},[Object(n["g"])("h1",null,"Formular za ocenjivanje kompetencija - Samoprocena"),Object(n["g"])("h3",null,"(1=Ne Zadovoljava Očekivanja)"),Object(n["g"])("h3",null,"(2=Potrebno Poboljšanje)"),Object(n["g"])("h3",null,"(3=Zadovoljava Očekivanja)"),Object(n["g"])("h3",null,"(4=Iznad Očekivanja)")],-1),a={key:0,class:"kompetence"},i=Object(n["g"])("h3",null,"Kompetence",-1),l={id:"kompetenceTable"},r=Object(n["g"])("tr",null,[Object(n["g"])("th",null,"Kompetence: "),Object(n["g"])("th",null,"Samoprocena")],-1),b=["onClick"],s={key:0,style:{"text-align":"left"}},m={style:{"white-space":"pre-line"}},j={key:1,class:"licni"},p=Object(n["g"])("h3",null,"Lični KPI",-1),u={id:"LicniTable"},k=Object(n["g"])("tr",null,[Object(n["g"])("th",null,"Licni KPI: "),Object(n["g"])("th",null,"Samoprocena")],-1),O=["onClick"],f={key:0,style:{"text-align":"left"}},g={style:{"white-space":"pre-line"}},h={key:2,class:"licni"},v=Object(n["g"])("h3",null,"Kompanijski KPI",-1),d={id:"LicniTable"},P=Object(n["g"])("tr",null,[Object(n["g"])("th",null,"Kompanijski KPI: "),Object(n["g"])("th",null,"Samoprocena")],-1),y=["onClick"],B={key:0,style:{"text-align":"left"}},E={style:{"white-space":"pre-line"}},K={class:"komentar"},w=Object(n["g"])("h4",null,"Komentar",-1),D={style:{"text-align":"left"}},C={style:{"white-space":"pre-line"}};function S(e,t,o,S,L,x){return Object(n["t"])(),Object(n["f"])(n["a"],null,[c,0!=L.kompetenceProc?(Object(n["t"])(),Object(n["f"])("div",a,[i,Object(n["g"])("table",l,[r,(Object(n["t"])(!0),Object(n["f"])(n["a"],null,Object(n["z"])(L.kompetence,(function(e,t){return Object(n["t"])(),Object(n["f"])("tr",{key:t},[Object(n["g"])("td",null,[Object(n["i"])(Object(n["D"])(e.name)+" ",1),Object(n["g"])("button",{class:"definicija",type:"button",name:"button",onClick:function(e){return x.swapBoolKompetence(t)}},"Definicija",8,b),L.kompetenceBool[t].bool?(Object(n["t"])(),Object(n["f"])("p",s,[Object(n["g"])("span",m,Object(n["D"])(L.kompetenceBool[t].comment),1)])):Object(n["e"])("",!0)]),Object(n["g"])("td",null,Object(n["D"])(e.samoProcena),1)])})),128))])])):Object(n["e"])("",!0),0!=L.licniProc?(Object(n["t"])(),Object(n["f"])("div",j,[p,Object(n["g"])("table",u,[k,(Object(n["t"])(!0),Object(n["f"])(n["a"],null,Object(n["z"])(L.licniKpi,(function(e,t){return Object(n["t"])(),Object(n["f"])("tr",{key:t},[Object(n["g"])("td",null,[Object(n["i"])(Object(n["D"])(e.name)+" ",1),Object(n["g"])("button",{class:"definicija",type:"button",name:"button",onClick:function(e){return x.swapBoolLicni(t)}},"Definicija",8,O),L.licniBool[t].bool?(Object(n["t"])(),Object(n["f"])("p",f,[Object(n["g"])("span",g,Object(n["D"])(L.licniBool[t].comment),1)])):Object(n["e"])("",!0)]),Object(n["g"])("td",null,Object(n["D"])(e.samoProcena),1)])})),128))])])):Object(n["e"])("",!0),0!=L.kompanijskiProc?(Object(n["t"])(),Object(n["f"])("div",h,[v,Object(n["g"])("table",d,[P,(Object(n["t"])(!0),Object(n["f"])(n["a"],null,Object(n["z"])(L.kompanijskiKpi,(function(e,t){return Object(n["t"])(),Object(n["f"])("tr",{key:t},[Object(n["g"])("td",null,[Object(n["i"])(Object(n["D"])(e.name)+" ",1),Object(n["g"])("button",{class:"definicija",type:"button",name:"button",onClick:function(e){return x.swapBoolKompanijski(t)}},"Definicija",8,y),L.kompanijskiBool[t].bool?(Object(n["t"])(),Object(n["f"])("p",B,[Object(n["g"])("span",E,Object(n["D"])(L.kompanijskiBool[t].comment),1)])):Object(n["e"])("",!0)]),Object(n["g"])("td",null,Object(n["D"])(e.samoProcena),1)])})),128))])])):Object(n["e"])("",!0),Object(n["g"])("div",K,[w,Object(n["g"])("p",D,[Object(n["g"])("span",C,Object(n["D"])(L.komentarSamoProcena),1)])])],64)}Object(n["u"])();var L=o("1da1"),x=o("5530"),I=(o("96cf"),o("5502")),z={computed:Object(I["c"])(["user","companys","usersSameCompany"]),data:function(){return{odgovori:[1,2,3,4],komentar:"",kompetence:[],kompanijskiKpi:[],licniKpi:[],collegue:"",kompanijskiProc:0,licniProc:0,kompetenceProc:0,kompetenceBool:[],kompanijskiBool:[],licniBool:[],lastEval:0,komentarSamoProcena:""}},methods:Object(x["a"])(Object(x["a"])({},Object(I["b"])(["getProfile","getCompanies","getCollegues","setLicniKpiSamoProcena"])),{},{swapBoolKompetence:function(e){this.kompetenceBool[e].bool?this.kompetenceBool[e].bool=!1:this.kompetenceBool[e].bool=!0},swapBoolKompanijski:function(e){this.kompanijskiBool[e].bool?this.kompanijskiBool[e].bool=!1:this.kompanijskiBool[e].bool=!0},swapBoolLicni:function(e){this.licniBool[e].bool?this.licniBool[e].bool=!1:this.licniBool[e].bool=!0}}),created:function(){var e=this;return Object(L["a"])(regeneratorRuntime.mark((function t(){var o,n,c,a,i,l;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.getProfile();case 2:return t.next=4,e.getCompanies();case 4:return t.next=6,e.getCollegues(e.user.type);case 6:for(n=0;n<e.companys.length;n++)e.user.type==e.companys[n].name&&(o=e.companys[n]);for(e.lastEval=e.user.performanceEvaluation.length-1,c=o.performanceEvaluation.kompanijski.length,n=0;n<c;n++)a={bool:!1,comment:o.performanceEvaluation.kompanijski[n].comment},e.kompanijskiBool.push(a);for(c=o.performanceEvaluation.kompetence.length,n=0;n<c;n++)i={bool:!1,comment:o.performanceEvaluation.kompetence[n].comment},e.kompetenceBool.push(i);for(e.komentarSamoProcena=e.user.performanceEvaluation[e.lastEval].komentarSamoProcena,c=e.user.performanceEvaluation[e.lastEval].licniKpi.length,n=0;n<c;n++)l={bool:!1,comment:e.user.performanceEvaluation[e.lastEval].licniKpi[n].comment},e.licniBool.push(l);for(console.log("LAST EVAL"+e.lastEval),e.kompetence=o.performanceEvaluation.kompetence,n=0;n<e.kompetence.length;n++)e.kompetence[n].samoProcena=e.user.performanceEvaluation[e.lastEval].kompetence[n].samoProcena;for(e.kompanijskiKpi=o.performanceEvaluation.kompanijski,n=0;n<e.kompanijskiKpi.length;n++)e.kompanijskiKpi[n].samoProcena=e.user.performanceEvaluation[e.lastEval].kompanijski[n].samoProcena;e.licniKpi=e.user.performanceEvaluation[e.lastEval].licniKpi,e.kompetenceProc=o.performanceEvaluation.kompetenceProcenat,e.licniProc=o.performanceEvaluation.licniProcenat,e.kompanijskiProc=o.performanceEvaluation.kompanijskiProcenat;case 24:case"end":return t.stop()}}),t)})))()},beforeCreate:function(){document.body.className="other"}};o("3604");z.render=S,z.__scopeId="data-v-1458ac94";t["default"]=z}}]);
//# sourceMappingURL=chunk-6446e020.a3a1abfb.js.map