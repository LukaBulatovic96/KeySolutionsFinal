(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8fb5749e"],{"4af8":function(e,o,t){},a552:function(e,o,t){"use strict";t("4af8")},b0c0:function(e,o,t){var n=t("83ab"),c=t("9bf2").f,a=Function.prototype,i=a.toString,l=/^\s*function ([^ (]*)/,r="name";n&&!(r in a)&&c(a,r,{configurable:!0,get:function(){try{return i.call(this).match(l)[1]}catch(e){return""}}})},f383:function(e,o,t){"use strict";t.r(o);t("b0c0");var n=t("7a23");Object(n["w"])("data-v-4e0a63db");var c=Object(n["g"])("div",{class:"header"},[Object(n["g"])("h1",null,"Formular za ocenjivanje kompetencija - Samoprocena"),Object(n["g"])("h3",null,"(1=Ne Zadovoljava Očekivanja)"),Object(n["g"])("h3",null,"(2=Potrebno Poboljšanje)"),Object(n["g"])("h3",null,"(3=Zadovoljava Očekivanja)"),Object(n["g"])("h3",null,"(4=Iznad Očekivanja)")],-1),a={key:0,class:"kompetence"},i=Object(n["g"])("h3",null,"Kompetence",-1),l={id:"kompetenceTable"},r=Object(n["g"])("tr",null,[Object(n["g"])("th",null,"Kompetence: "),Object(n["g"])("th",null,"Samoprocena")],-1),m=["onClick"],b={key:0},j={key:1,class:"licni"},p=Object(n["g"])("h3",null,"Lični KPI",-1),u={id:"LicniTable"},s=Object(n["g"])("tr",null,[Object(n["g"])("th",null,"Licni KPI: "),Object(n["g"])("th",null,"Samoprocena")],-1),k=["onClick"],O={key:0},f={key:2,class:"licni"},g=Object(n["g"])("h3",null,"Kompanijski KPI",-1),v={id:"LicniTable"},h=Object(n["g"])("tr",null,[Object(n["g"])("th",null,"Kompanijski KPI: "),Object(n["g"])("th",null,"Samoprocena")],-1),d=["onClick"],P={key:0},B={class:"komentar"},E=Object(n["g"])("h4",null,"Komentar",-1);function K(e,o,t,K,y,w){return Object(n["t"])(),Object(n["f"])(n["a"],null,[c,0!=y.kompetenceProc?(Object(n["t"])(),Object(n["f"])("div",a,[i,Object(n["g"])("table",l,[r,(Object(n["t"])(!0),Object(n["f"])(n["a"],null,Object(n["z"])(y.kompetence,(function(e,o){return Object(n["t"])(),Object(n["f"])("tr",{key:o},[Object(n["g"])("td",null,[Object(n["i"])(Object(n["D"])(e.name)+" ",1),Object(n["g"])("button",{class:"definicija",type:"button",name:"button",onClick:function(e){return w.swapBoolKompetence(o)}},"Definicija",8,m),y.kompetenceBool[o].bool?(Object(n["t"])(),Object(n["f"])("p",b,Object(n["D"])(y.kompetenceBool[o].comment),1)):Object(n["e"])("",!0)]),Object(n["g"])("td",null,Object(n["D"])(e.samoProcena),1)])})),128))])])):Object(n["e"])("",!0),0!=y.licniProc?(Object(n["t"])(),Object(n["f"])("div",j,[p,Object(n["g"])("table",u,[s,(Object(n["t"])(!0),Object(n["f"])(n["a"],null,Object(n["z"])(y.licniKpi,(function(e,o){return Object(n["t"])(),Object(n["f"])("tr",{key:o},[Object(n["g"])("td",null,[Object(n["i"])(Object(n["D"])(e.name)+" ",1),Object(n["g"])("button",{class:"definicija",type:"button",name:"button",onClick:function(e){return w.swapBoolLicni(o)}},"Definicija",8,k),y.licniBool[o].bool?(Object(n["t"])(),Object(n["f"])("p",O,Object(n["D"])(y.licniBool[o].comment),1)):Object(n["e"])("",!0)]),Object(n["g"])("td",null,Object(n["D"])(e.samoProcena),1)])})),128))])])):Object(n["e"])("",!0),0!=y.kompanijskiProc?(Object(n["t"])(),Object(n["f"])("div",f,[g,Object(n["g"])("table",v,[h,(Object(n["t"])(!0),Object(n["f"])(n["a"],null,Object(n["z"])(y.kompanijskiKpi,(function(e,o){return Object(n["t"])(),Object(n["f"])("tr",{key:o},[Object(n["g"])("td",null,[Object(n["i"])(Object(n["D"])(e.name)+" ",1),Object(n["g"])("button",{class:"definicija",type:"button",name:"button",onClick:function(e){return w.swapBoolKompanijski(o)}},"Definicija",8,d),y.kompanijskiBool[o].bool?(Object(n["t"])(),Object(n["f"])("p",P,Object(n["D"])(y.kompanijskiBool[o].comment),1)):Object(n["e"])("",!0)]),Object(n["g"])("td",null,Object(n["D"])(e.samoProcena),1)])})),128))])])):Object(n["e"])("",!0),Object(n["g"])("div",B,[E,Object(n["L"])(Object(n["g"])("input",{class:"form-control",type:"text",placeholder:"",name:"komentar","onUpdate:modelValue":o[0]||(o[0]=function(e){return y.komentarSamoProcena=e}),id:"komentar"},null,512),[[n["I"],y.komentarSamoProcena]])])],64)}Object(n["u"])();var y=t("1da1"),w=t("5530"),S=(t("96cf"),t("5502")),D={computed:Object(S["c"])(["user","companys","usersSameCompany"]),data:function(){return{odgovori:[1,2,3,4],komentar:"",kompetence:[],kompanijskiKpi:[],licniKpi:[],collegue:"",kompanijskiProc:0,licniProc:0,kompetenceProc:0,kompetenceBool:[],kompanijskiBool:[],licniBool:[],lastEval:0,komentarSamoProcena:""}},methods:Object(w["a"])(Object(w["a"])({},Object(S["b"])(["getProfile","getCompanies","getCollegues","setLicniKpiSamoProcena"])),{},{swapBoolKompetence:function(e){this.kompetenceBool[e].bool?this.kompetenceBool[e].bool=!1:this.kompetenceBool[e].bool=!0},swapBoolKompanijski:function(e){this.kompanijskiBool[e].bool?this.kompanijskiBool[e].bool=!1:this.kompanijskiBool[e].bool=!0},swapBoolLicni:function(e){this.licniBool[e].bool?this.licniBool[e].bool=!1:this.licniBool[e].bool=!0}}),created:function(){var e=this;return Object(y["a"])(regeneratorRuntime.mark((function o(){var t,n,c,a,i,l;return regeneratorRuntime.wrap((function(o){while(1)switch(o.prev=o.next){case 0:return o.next=2,e.getProfile();case 2:return o.next=4,e.getCompanies();case 4:return o.next=6,e.getCollegues(e.user.type);case 6:for(n=0;n<e.companys.length;n++)e.user.type==e.companys[n].name&&(t=e.companys[n]);for(e.lastEval=e.user.performanceEvaluation.length-1,c=t.performanceEvaluation.kompanijski.length,n=0;n<c;n++)a={bool:!1,comment:t.performanceEvaluation.kompanijski[n].comment},e.kompanijskiBool.push(a);for(c=t.performanceEvaluation.kompetence.length,n=0;n<c;n++)i={bool:!1,comment:t.performanceEvaluation.kompetence[n].comment},e.kompetenceBool.push(i);for(e.komentarSamoProcena=e.user.performanceEvaluation[e.lastEval].komentarSamoProcena,c=e.user.performanceEvaluation[e.lastEval].licniKpi.length,n=0;n<c;n++)l={bool:!1,comment:e.user.performanceEvaluation[e.lastEval].licniKpi[n].comment},e.licniBool.push(l);for(console.log("LAST EVAL"+e.lastEval),e.kompetence=t.performanceEvaluation.kompetence,n=0;n<e.kompetence.length;n++)e.kompetence[n].samoProcena=e.user.performanceEvaluation[e.lastEval].kompetence[n].samoProcena;for(e.kompanijskiKpi=t.performanceEvaluation.kompanijski,n=0;n<e.kompanijskiKpi.length;n++)e.kompanijskiKpi[n].samoProcena=e.user.performanceEvaluation[e.lastEval].kompanijski[n].samoProcena;e.licniKpi=e.user.performanceEvaluation[e.lastEval].licniKpi,e.kompetenceProc=t.performanceEvaluation.kompetenceProcenat,e.licniProc=t.performanceEvaluation.licniProcenat,e.kompanijskiProc=t.performanceEvaluation.kompanijskiProcenat;case 24:case"end":return o.stop()}}),o)})))()}};t("a552");D.render=K,D.__scopeId="data-v-4e0a63db";o["default"]=D}}]);
//# sourceMappingURL=chunk-8fb5749e.0e303469.js.map