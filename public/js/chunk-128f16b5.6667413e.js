(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-128f16b5"],{3508:function(e,t,n){"use strict";n.r(t);n("b0c0");var o=n("7a23");Object(o["w"])("data-v-6df6c7d6");var c=Object(o["g"])("div",{class:"header"},[Object(o["g"])("h1",null,"Formular za ocenjivanje kompetencija - Samoprocena"),Object(o["g"])("h3",null,"(1=Ne Zadovoljava Očekivanja)"),Object(o["g"])("h3",null,"(2=Potrebno Poboljšanje)"),Object(o["g"])("h3",null,"(3=Zadovoljava Očekivanja)"),Object(o["g"])("h3",null,"(4=Iznad Očekivanja)")],-1),i={key:0,class:"kompetence"},a=Object(o["g"])("h3",null,"Kompetence",-1),l={id:"kompetenceTable"},r=Object(o["g"])("tr",null,[Object(o["g"])("th",null,"Kompetence: "),Object(o["g"])("th",null,"Samoprocena")],-1),s=["onClick"],b={key:0,style:{"text-align":"left"}},u={style:{"white-space":"pre-line"}},j=["onUpdate:modelValue"],m={key:1,class:"licni"},p=Object(o["g"])("h3",null,"Lični KPI",-1),O={id:"LicniTable"},k=Object(o["g"])("tr",null,[Object(o["g"])("th",null,"Licni KPI: "),Object(o["g"])("th",null,"Samoprocena")],-1),f=["onClick"],g={key:0,style:{"text-align":"left"}},d={style:{"white-space":"pre-line"}},h=["onUpdate:modelValue"],v={key:2,class:"licni"},y=Object(o["g"])("h3",null,"Kompanijski KPI",-1),P={id:"LicniTable"},K=Object(o["g"])("tr",null,[Object(o["g"])("th",null,"Kompanijski KPI: "),Object(o["g"])("th",null,"Samoprocena")],-1),B=["onClick"],w={key:0,style:{"text-align":"left"}},E={style:{"white-space":"pre-line"}},C=["onUpdate:modelValue"],D={class:"komentar"},S=Object(o["g"])("h4",null,"Komentar",-1),L={class:"submitDiv"};function x(e,t,n,x,z,I){return Object(o["t"])(),Object(o["f"])(o["a"],null,[c,0!=z.kompetenceProc?(Object(o["t"])(),Object(o["f"])("div",i,[a,Object(o["g"])("table",l,[r,(Object(o["t"])(!0),Object(o["f"])(o["a"],null,Object(o["z"])(z.kompetence,(function(e,t){return Object(o["t"])(),Object(o["f"])("tr",{key:t},[Object(o["g"])("td",null,[Object(o["g"])("b",null,Object(o["D"])(e.name),1),Object(o["g"])("button",{class:"definicija",type:"button",name:"button",onClick:function(e){return I.swapBoolKompetence(t)}},"Definicija",8,s),z.kompetenceBool[t].bool?(Object(o["t"])(),Object(o["f"])("p",b,[Object(o["g"])("span",u,Object(o["D"])(z.kompetenceBool[t].comment),1)])):Object(o["e"])("",!0)]),Object(o["g"])("td",null,[Object(o["L"])(Object(o["g"])("select",{name:"type",id:"type","onUpdate:modelValue":function(t){return e.samoProcena=t}},[(Object(o["t"])(!0),Object(o["f"])(o["a"],null,Object(o["z"])(z.odgovori,(function(e){return Object(o["t"])(),Object(o["f"])("option",{key:e},Object(o["D"])(e),1)})),128))],8,j),[[o["H"],e.samoProcena]])])])})),128))])])):Object(o["e"])("",!0),0!=z.licniProc?(Object(o["t"])(),Object(o["f"])("div",m,[p,Object(o["g"])("table",O,[k,(Object(o["t"])(!0),Object(o["f"])(o["a"],null,Object(o["z"])(z.licniKpi,(function(e,t){return Object(o["t"])(),Object(o["f"])("tr",{key:t},[Object(o["g"])("td",null,[Object(o["i"])(Object(o["D"])(e.name)+" ",1),Object(o["g"])("button",{class:"definicija",type:"button",name:"button",onClick:function(e){return I.swapBoolLicni(t)}},"Definicija",8,f),z.licniBool[t].bool?(Object(o["t"])(),Object(o["f"])("p",g,[Object(o["g"])("span",d,Object(o["D"])(z.licniBool[t].comment),1)])):Object(o["e"])("",!0)]),Object(o["g"])("td",null,[Object(o["L"])(Object(o["g"])("select",{name:"type",id:"type","onUpdate:modelValue":function(t){return e.samoProcena=t}},[(Object(o["t"])(!0),Object(o["f"])(o["a"],null,Object(o["z"])(z.odgovori,(function(e){return Object(o["t"])(),Object(o["f"])("option",{key:e},Object(o["D"])(e),1)})),128))],8,h),[[o["H"],e.samoProcena]])])])})),128))])])):Object(o["e"])("",!0),0!=z.kompanijskiProc?(Object(o["t"])(),Object(o["f"])("div",v,[y,Object(o["g"])("table",P,[K,(Object(o["t"])(!0),Object(o["f"])(o["a"],null,Object(o["z"])(z.kompanijskiKpi,(function(e,t){return Object(o["t"])(),Object(o["f"])("tr",{key:t},[Object(o["g"])("td",null,[Object(o["i"])(Object(o["D"])(e.name)+" ",1),Object(o["g"])("button",{class:"definicija",type:"button",name:"button",onClick:function(e){return I.swapBoolKompanijski(t)}},"Definicija",8,B),z.kompanijskiBool[t].bool?(Object(o["t"])(),Object(o["f"])("p",w,[Object(o["g"])("span",E,Object(o["D"])(z.kompanijskiBool[t].comment),1)])):Object(o["e"])("",!0)]),Object(o["g"])("td",null,[Object(o["L"])(Object(o["g"])("select",{name:"type",id:"type","onUpdate:modelValue":function(t){return e.samoProcena=t}},[(Object(o["t"])(!0),Object(o["f"])(o["a"],null,Object(o["z"])(z.odgovori,(function(e){return Object(o["t"])(),Object(o["f"])("option",{key:e},Object(o["D"])(e),1)})),128))],8,C),[[o["H"],e.samoProcena]])])])})),128))])])):Object(o["e"])("",!0),Object(o["g"])("div",D,[S,Object(o["L"])(Object(o["g"])("textarea",{class:"form-control",id:"exampleFormControlTextarea1",rows:"10","onUpdate:modelValue":t[0]||(t[0]=function(e){return z.komentar=e})},null,512),[[o["I"],z.komentar]])]),Object(o["g"])("div",L,[Object(o["g"])("button",{class:"btn btn-primary",onClick:t[1]||(t[1]=function(){return I.submit&&I.submit.apply(I,arguments)})},"Submit")])],64)}Object(o["u"])();var z=n("1da1"),I=n("5530"),U=(n("96cf"),n("5502")),V={computed:Object(U["c"])(["user","companys","usersSameCompany"]),data:function(){return{odgovori:[1,2,3,4],komentar:"",kompetence:[],kompanijskiKpi:[],licniKpi:[],collegue:"",kompanijskiProc:0,licniProc:0,kompetenceProc:0,kompetenceBool:[],kompanijskiBool:[],licniBool:[],lastEval:0}},methods:Object(I["a"])(Object(I["a"])({},Object(U["b"])(["getProfile","getCompanies","getCollegues","setLicniKpiSamoProcena"])),{},{submit:function(){for(var e,t=this,n=0;n<this.usersSameCompany.length;n++)this.user.nadredjeni==this.usersSameCompany[n].name&&(e=this.usersSameCompany[n]);var o={userId:this.user._id,licniKpi:this.licniKpi,kompanijski:this.kompanijskiKpi,kompetence:this.kompetence,nadredjeni:e,lastEval:this.lastEval,komentarSamoProcena:this.komentar};this.setLicniKpiSamoProcena(o).then((function(e){e.data.success&&t.$router.push("/profile")})).catch((function(e){console.log(e)}))},swapBoolKompetence:function(e){this.kompetenceBool[e].bool?this.kompetenceBool[e].bool=!1:this.kompetenceBool[e].bool=!0},swapBoolKompanijski:function(e){this.kompanijskiBool[e].bool?this.kompanijskiBool[e].bool=!1:this.kompanijskiBool[e].bool=!0},swapBoolLicni:function(e){this.licniBool[e].bool?this.licniBool[e].bool=!1:this.licniBool[e].bool=!0}}),created:function(){var e=this;return Object(z["a"])(regeneratorRuntime.mark((function t(){var n,o,c,i,a,l;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.getProfile();case 2:return t.next=4,e.getCompanies();case 4:return t.next=6,e.getCollegues(e.user.type);case 6:for(o=0;o<e.companys.length;o++)e.user.type==e.companys[o].name&&(n=e.companys[o]);for(e.lastEval=e.user.performanceEvaluation.length-1,c=n.performanceEvaluation.kompanijski.length,o=0;o<c;o++)i={bool:!1,comment:n.performanceEvaluation.kompanijski[o].comment},e.kompanijskiBool.push(i);for(c=n.performanceEvaluation.kompetence.length,o=0;o<c;o++)a={bool:!1,comment:n.performanceEvaluation.kompetence[o].comment},e.kompetenceBool.push(a);for(c=e.user.performanceEvaluation[e.lastEval].licniKpi.length,o=0;o<c;o++)l={bool:!1,comment:e.user.performanceEvaluation[e.lastEval].licniKpi[o].comment},e.licniBool.push(l);for(e.kompetence=n.performanceEvaluation.kompetence,o=0;o<e.kompetence.length;o++)e.kompetence[o].samoProcena=1;for(e.kompanijskiKpi=n.performanceEvaluation.kompanijski,o=0;o<e.kompanijskiKpi.length;o++)e.kompanijskiKpi[o].samoProcena=1;e.licniKpi=e.user.performanceEvaluation[e.lastEval].licniKpi,e.kompetenceProc=n.performanceEvaluation.kompetenceProcenat,e.licniProc=n.performanceEvaluation.licniProcenat,e.kompanijskiProc=n.performanceEvaluation.kompanijskiProcenat;case 22:case"end":return t.stop()}}),t)})))()},beforeCreate:function(){document.body.className="other"}};n("3fc5");V.render=x,V.__scopeId="data-v-6df6c7d6";t["default"]=V},"3fc5":function(e,t,n){"use strict";n("acc6")},acc6:function(e,t,n){},b0c0:function(e,t,n){var o=n("83ab"),c=n("9bf2").f,i=Function.prototype,a=i.toString,l=/^\s*function ([^ (]*)/,r="name";o&&!(r in i)&&c(i,r,{configurable:!0,get:function(){try{return a.call(this).match(l)[1]}catch(e){return""}}})}}]);
//# sourceMappingURL=chunk-128f16b5.6667413e.js.map