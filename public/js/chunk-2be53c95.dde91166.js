(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2be53c95"],{"2a69":function(e,t,o){"use strict";o("7e5b")},"7e5b":function(e,t,o){},b0c0:function(e,t,o){var n=o("83ab"),c=o("9bf2").f,a=Function.prototype,i=a.toString,l=/^\s*function ([^ (]*)/,r="name";n&&!(r in a)&&c(a,r,{configurable:!0,get:function(){try{return i.call(this).match(l)[1]}catch(e){return""}}})},e962:function(e,t,o){e.exports=o.p+"img/logonewest.20bdb802.svg"},f383:function(e,t,o){"use strict";o.r(t);o("b0c0");var n=o("7a23"),c=o("e962"),a=o.n(c);Object(n["w"])("data-v-23e71660");var i=Object(n["g"])("div",{class:""},[Object(n["g"])("img",{src:a.a,alt:"",id:"logo"})],-1),l=Object(n["g"])("div",{class:"header"},[Object(n["g"])("h1",null,"Formular za procenu radnog učinka - Samoprocena"),Object(n["g"])("h3",null,"(1=Ne Zadovoljava Očekivanja)"),Object(n["g"])("h3",null,"(2=Potrebno Poboljšanje)"),Object(n["g"])("h3",null,"(3=Zadovoljava Očekivanja)"),Object(n["g"])("h3",null,"(4=Iznad Očekivanja)")],-1),r={key:0,class:"kompetence"},s=Object(n["g"])("h3",null,"Kompetence",-1),b={id:"kompetenceTable"},p=Object(n["g"])("tr",null,[Object(n["g"])("th",null,"Opis:"),Object(n["g"])("th",null,"Samoprocena")],-1),m=["onClick"],j={key:0,style:{"text-align":"left"}},u={style:{"white-space":"pre-line"}},O={key:1,class:"licni"},k=Object(n["g"])("h3",null,"Lični KPI",-1),f={id:"LicniTable"},g=Object(n["g"])("tr",null,[Object(n["g"])("th",null,"Opis:"),Object(n["g"])("th",null,"Samoprocena")],-1),h=["onClick"],v={key:0,style:{"text-align":"left"}},d={style:{"white-space":"pre-line"}},y={key:2,class:"licni"},P=Object(n["g"])("h3",null,"Kompanijski KPI",-1),B={id:"LicniTable"},E=Object(n["g"])("tr",null,[Object(n["g"])("th",null,"Opis:"),Object(n["g"])("th",null,"Samoprocena")],-1),w=["onClick"],K={key:0,style:{"text-align":"left"}},D={style:{"white-space":"pre-line"}},C={class:"komentar"},S=Object(n["g"])("h4",null,"Komentar",-1),x={style:{"text-align":"left"}},L={style:{"white-space":"pre-line"}};function z(e,t,o,c,a,z){return Object(n["t"])(),Object(n["f"])(n["a"],null,[i,l,0!=a.kompetenceProc?(Object(n["t"])(),Object(n["f"])("div",r,[s,Object(n["g"])("table",b,[p,(Object(n["t"])(!0),Object(n["f"])(n["a"],null,Object(n["z"])(a.kompetence,(function(e,t){return Object(n["t"])(),Object(n["f"])("tr",{key:t},[Object(n["g"])("td",null,[Object(n["i"])(Object(n["D"])(e.name)+" ",1),Object(n["g"])("button",{class:"definicija",type:"button",name:"button",onClick:function(e){return z.swapBoolKompetence(t)}},"Definicija",8,m),a.kompetenceBool[t].bool?(Object(n["t"])(),Object(n["f"])("p",j,[Object(n["g"])("span",u,Object(n["D"])(a.kompetenceBool[t].comment),1)])):Object(n["e"])("",!0)]),Object(n["g"])("td",null,Object(n["D"])(e.samoProcena),1)])})),128))])])):Object(n["e"])("",!0),0!=a.licniProc?(Object(n["t"])(),Object(n["f"])("div",O,[k,Object(n["g"])("table",f,[g,(Object(n["t"])(!0),Object(n["f"])(n["a"],null,Object(n["z"])(a.licniKpi,(function(e,t){return Object(n["t"])(),Object(n["f"])("tr",{key:t},[Object(n["g"])("td",null,[Object(n["i"])(Object(n["D"])(e.name)+" ",1),Object(n["g"])("button",{class:"definicija",type:"button",name:"button",onClick:function(e){return z.swapBoolLicni(t)}},"Definicija",8,h),a.licniBool[t].bool?(Object(n["t"])(),Object(n["f"])("p",v,[Object(n["g"])("span",d,Object(n["D"])(a.licniBool[t].comment),1)])):Object(n["e"])("",!0)]),Object(n["g"])("td",null,Object(n["D"])(e.samoProcena),1)])})),128))])])):Object(n["e"])("",!0),0!=a.kompanijskiProc?(Object(n["t"])(),Object(n["f"])("div",y,[P,Object(n["g"])("table",B,[E,(Object(n["t"])(!0),Object(n["f"])(n["a"],null,Object(n["z"])(a.kompanijskiKpi,(function(e,t){return Object(n["t"])(),Object(n["f"])("tr",{key:t},[Object(n["g"])("td",null,[Object(n["i"])(Object(n["D"])(e.name)+" ",1),Object(n["g"])("button",{class:"definicija",type:"button",name:"button",onClick:function(e){return z.swapBoolKompanijski(t)}},"Definicija",8,w),a.kompanijskiBool[t].bool?(Object(n["t"])(),Object(n["f"])("p",K,[Object(n["g"])("span",D,Object(n["D"])(a.kompanijskiBool[t].comment),1)])):Object(n["e"])("",!0)]),Object(n["g"])("td",null,Object(n["D"])(e.samoProcena),1)])})),128))])])):Object(n["e"])("",!0),Object(n["g"])("div",C,[S,Object(n["g"])("p",x,[Object(n["g"])("span",L,Object(n["D"])(a.komentarSamoProcena),1)])])],64)}Object(n["u"])();var I=o("1da1"),T=o("5530"),A=(o("96cf"),o("5502")),F={computed:Object(A["c"])(["user","companys","usersSameCompany"]),data:function(){return{odgovori:[1,2,3,4],komentar:"",kompetence:[],kompanijskiKpi:[],licniKpi:[],collegue:"",kompanijskiProc:0,licniProc:0,kompetenceProc:0,kompetenceBool:[],kompanijskiBool:[],licniBool:[],lastEval:0,komentarSamoProcena:""}},methods:Object(T["a"])(Object(T["a"])({},Object(A["b"])(["getProfile","getCompanies","getCollegues","setLicniKpiSamoProcena"])),{},{swapBoolKompetence:function(e){this.kompetenceBool[e].bool?this.kompetenceBool[e].bool=!1:this.kompetenceBool[e].bool=!0},swapBoolKompanijski:function(e){this.kompanijskiBool[e].bool?this.kompanijskiBool[e].bool=!1:this.kompanijskiBool[e].bool=!0},swapBoolLicni:function(e){this.licniBool[e].bool?this.licniBool[e].bool=!1:this.licniBool[e].bool=!0}}),created:function(){var e=this;return Object(I["a"])(regeneratorRuntime.mark((function t(){var o,n,c,a,i,l;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.getProfile();case 2:return t.next=4,e.getCompanies();case 4:return t.next=6,e.getCollegues(e.user.type);case 6:for(n=0;n<e.companys.length;n++)e.user.type==e.companys[n].name&&(o=e.companys[n]);for(e.lastEval=e.user.performanceEvaluation.length-1,c=o.performanceEvaluation.kompanijski.length,n=0;n<c;n++)a={bool:!1,comment:o.performanceEvaluation.kompanijski[n].comment},e.kompanijskiBool.push(a);for(c=o.performanceEvaluation.kompetence.length,n=0;n<c;n++)i={bool:!1,comment:o.performanceEvaluation.kompetence[n].comment},e.kompetenceBool.push(i);for(e.komentarSamoProcena=e.user.performanceEvaluation[e.lastEval].komentarSamoProcena,c=e.user.performanceEvaluation[e.lastEval].licniKpi.length,n=0;n<c;n++)l={bool:!1,comment:e.user.performanceEvaluation[e.lastEval].licniKpi[n].comment},e.licniBool.push(l);for(console.log("LAST EVAL"+e.lastEval),e.kompetence=o.performanceEvaluation.kompetence,n=0;n<e.kompetence.length;n++)e.kompetence[n].samoProcena=e.user.performanceEvaluation[e.lastEval].kompetence[n].samoProcena;for(e.kompanijskiKpi=o.performanceEvaluation.kompanijski,n=0;n<e.kompanijskiKpi.length;n++)e.kompanijskiKpi[n].samoProcena=e.user.performanceEvaluation[e.lastEval].kompanijski[n].samoProcena;e.licniKpi=e.user.performanceEvaluation[e.lastEval].licniKpi,e.kompetenceProc=o.performanceEvaluation.kompetenceProcenat,e.licniProc=o.performanceEvaluation.licniProcenat,e.kompanijskiProc=o.performanceEvaluation.kompanijskiProcenat;case 24:case"end":return t.stop()}}),t)})))()},beforeCreate:function(){document.body.className="other"}};o("2a69");F.render=z,F.__scopeId="data-v-23e71660";t["default"]=F}}]);
//# sourceMappingURL=chunk-2be53c95.dde91166.js.map