(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4194cb3e"],{1148:function(e,t,n){"use strict";var o=n("a691"),a=n("577e"),c=n("1d80");e.exports=function(e){var t=a(c(this)),n="",i=o(e);if(i<0||i==1/0)throw RangeError("Wrong number of repetitions");for(;i>0;(i>>>=1)&&(t+=t))1&i&&(n+=t);return n}},"408a":function(e,t){var n=1..valueOf;e.exports=function(e){return n.call(e)}},"55ed":function(e,t,n){},"60d1":function(e,t,n){"use strict";n.r(t);n("b0c0"),n("b680");var o=n("7a23"),a=n("e962"),c=n.n(a);Object(o["w"])("data-v-28ed862a");var i=Object(o["g"])("div",{class:""},[Object(o["g"])("img",{src:c.a,alt:"",id:"logo"})],-1),l={key:0,class:"loader"},r={key:1},s={key:0},j=Object(o["g"])("h1",null,"Nema podredjenih za koje biste radili procenu.",-1),p=[j],u={key:1},b=Object(o["g"])("div",{class:"header"},[Object(o["g"])("h1",null,"Formular za procenu radnog učinka - Konačna Procena"),Object(o["g"])("h3",null,"(1=Ne Zadovoljava Očekivanja)"),Object(o["g"])("h3",null,"(2=Potrebno Poboljšanje)"),Object(o["g"])("h3",null,"(3=Zadovoljava Očekivanja)"),Object(o["g"])("h3",null,"(4=Iznad Očekivanja)")],-1),m={class:"form-group"},O=Object(o["g"])("label",{for:"collegue"},"Podređeni za koga se vrši konačna procena:",-1),k={key:0,class:"celaProcena"},d={key:0,class:"kompetence"},h=Object(o["g"])("h3",null,"Kompetence",-1),f={id:"kompetenceTable"},g=Object(o["g"])("tr",null,[Object(o["g"])("th",null,"Opis:"),Object(o["g"])("th",null,"Ponder"),Object(o["g"])("th",null,"Samoprocena"),Object(o["g"])("th",null,"Konacna Procena"),Object(o["g"])("th",null,"Rangiranje")],-1),v=["onClick"],P={key:0,style:{"text-align":"left"}},y={style:{"white-space":"pre-line"}},E={key:0},C={key:1},K=["onUpdate:modelValue"],D={key:2},w={key:3},x=Object(o["g"])("td",{colspan:"4"},"Ukupno ocena:",-1),B={key:1,class:"licni"},z=Object(o["g"])("h3",null,"Licni KPI",-1),U={id:"licniTable"},F=Object(o["g"])("tr",null,[Object(o["g"])("th",null,"Opis:"),Object(o["g"])("th",null,"Ponder"),Object(o["g"])("th",null,"Samoprocena"),Object(o["g"])("th",null,"Konacna Procena"),Object(o["g"])("th",null,"Rangiranje")],-1),S=["onClick"],T={key:0,style:{"text-align":"left"}},N={style:{"white-space":"pre-line"}},R={key:0},I={key:1},L=["onUpdate:modelValue"],V={key:2},H={key:3},J=Object(o["g"])("td",{colspan:"4"},"Ukupno ocena:",-1),M={key:2,class:"kompanijski"},_=Object(o["g"])("h3",null,"Kompanijski KPI",-1),Z={id:"kompanijskiTable"},A=Object(o["g"])("tr",null,[Object(o["g"])("th",null,"Opis:"),Object(o["g"])("th",null,"Ponder"),Object(o["g"])("th",null,"Samoprocena"),Object(o["g"])("th",null,"Konacna Procena"),Object(o["g"])("th",null,"Rangiranje")],-1),W=["onClick"],Y={key:0,style:{"text-align":"left"}},$={style:{"white-space":"pre-line"}},q={key:0},G={key:1},Q=["onUpdate:modelValue"],X={key:2},ee={key:3},te=Object(o["g"])("td",{colspan:"4"},"Ukupno ocena:",-1),ne={key:3,class:"rezultat1"},oe={class:"ukupno"},ae=Object(o["g"])("p",null,"Rezultati loši, potrebno unapređenje za vršenje trenutne uloge ili prelazak na drugo radno mesto ",-1),ce={key:4,class:"rezultat2"},ie={class:"ukupno"},le=Object(o["g"])("p",null,"Rezultati dobri, ali neophodan razvoj za vršenje trenutne uloge ",-1),re={key:5,class:"rezultat3"},se={class:"ukupno"},je=Object(o["g"])("p",null,"Apsolutno ostvarenje rezultata u trenutnoj ulozi ",-1),pe={key:6,class:"rezultat4"},ue={class:"ukupno"},be=Object(o["g"])("p",null,"Prebačaj rezultata u trenutnoj ulozi ",-1),me={class:"komentar"},Oe=Object(o["g"])("h4",null,"Komentar Samoprocena",-1),ke={style:{"text-align":"left"}},de={style:{"white-space":"pre-line"}},he={class:"komentar"},fe=Object(o["g"])("h4",null,"Komentar KonacnaProcena",-1),ge={class:"submitDiv"},ve={key:1,class:""},Pe=Object(o["g"])("h2",null,"Samoprocena nije urađena.",-1),ye=[Pe];function Ee(e,t,n,a,c,j){return Object(o["t"])(),Object(o["f"])(o["a"],null,[i,c.loading?(Object(o["t"])(),Object(o["f"])("div",l)):Object(o["e"])("",!0),c.loading?Object(o["e"])("",!0):(Object(o["t"])(),Object(o["f"])("div",r,[c.nemaPodredjenih?(Object(o["t"])(),Object(o["f"])("div",s,p)):Object(o["e"])("",!0),c.nemaPodredjenih?Object(o["e"])("",!0):(Object(o["t"])(),Object(o["f"])("div",u,[b,Object(o["g"])("div",m,[O,Object(o["L"])(Object(o["g"])("select",{name:"collegue",id:"collegue","onUpdate:modelValue":t[0]||(t[0]=function(e){return c.podredjeniName=e}),onChange:t[1]||(t[1]=function(e){return j.onChangePodredjeni(e)})},[(Object(o["t"])(!0),Object(o["f"])(o["a"],null,Object(o["z"])(c.podredjeni,(function(e){return Object(o["t"])(),Object(o["f"])("option",{key:e.name},Object(o["D"])(e.name),1)})),128))],544),[[o["H"],c.podredjeniName]])]),c.samoProcenaUradjena?(Object(o["t"])(),Object(o["f"])("div",k,[0!=c.kompetenceProc?(Object(o["t"])(),Object(o["f"])("div",d,[h,Object(o["g"])("table",f,[g,(Object(o["t"])(!0),Object(o["f"])(o["a"],null,Object(o["z"])(c.kompetence,(function(e,n){return Object(o["t"])(),Object(o["f"])("tr",{key:n},[Object(o["g"])("td",null,[Object(o["i"])(Object(o["D"])(e.name)+" ",1),Object(o["g"])("button",{class:"definicija",type:"button",name:"button",onClick:function(e){return j.swapBoolKompetence(n)}},"Definicija",8,v),c.kompetenceBool[n].bool?(Object(o["t"])(),Object(o["f"])("p",P,[Object(o["g"])("span",y,Object(o["D"])(c.kompetenceBool[n].comment),1)])):Object(o["e"])("",!0)]),Object(o["g"])("td",null,Object(o["D"])(e.ponder)+"%",1),null!=e.samoProcena?(Object(o["t"])(),Object(o["f"])("td",E,Object(o["D"])(e.samoProcena),1)):Object(o["e"])("",!0),null==e.samoProcena?(Object(o["t"])(),Object(o["f"])("td",C,"nema")):Object(o["e"])("",!0),Object(o["g"])("td",null,[Object(o["L"])(Object(o["g"])("select",{name:"type",id:"type","onUpdate:modelValue":function(t){return e.konacnaProcena=t},onChange:t[2]||(t[2]=function(){return j.updateTable&&j.updateTable.apply(j,arguments)})},[(Object(o["t"])(!0),Object(o["f"])(o["a"],null,Object(o["z"])(c.odgovori,(function(e){return Object(o["t"])(),Object(o["f"])("option",{key:e},Object(o["D"])(e),1)})),128))],40,K),[[o["H"],e.konacnaProcena]])]),null!=e.rangiranje?(Object(o["t"])(),Object(o["f"])("td",D,Object(o["D"])(e.rangiranje.toFixed(2)),1)):Object(o["e"])("",!0),null==e.rangiranje?(Object(o["t"])(),Object(o["f"])("td",w,"0")):Object(o["e"])("",!0)])})),128)),Object(o["g"])("tr",null,[x,Object(o["g"])("td",null,Object(o["D"])(c.kompetenceOcena.toFixed(2)),1)])])])):Object(o["e"])("",!0),0!=c.licniProc?(Object(o["t"])(),Object(o["f"])("div",B,[z,Object(o["g"])("table",U,[F,(Object(o["t"])(!0),Object(o["f"])(o["a"],null,Object(o["z"])(c.licniKpi,(function(e,n){return Object(o["t"])(),Object(o["f"])("tr",{key:n},[Object(o["g"])("td",null,[Object(o["i"])(Object(o["D"])(e.name)+" ",1),Object(o["g"])("button",{class:"definicija",type:"button",name:"button",onClick:function(e){return j.swapBoolLicni(n)}},"Definicija",8,S),c.licniBool[n].bool?(Object(o["t"])(),Object(o["f"])("p",T,[Object(o["g"])("span",N,Object(o["D"])(c.licniBool[n].comment),1)])):Object(o["e"])("",!0)]),Object(o["g"])("td",null,Object(o["D"])(e.ponder)+"%",1),null!=e.samoProcena?(Object(o["t"])(),Object(o["f"])("td",R,Object(o["D"])(e.samoProcena),1)):Object(o["e"])("",!0),null==e.samoProcena?(Object(o["t"])(),Object(o["f"])("td",I,"nema")):Object(o["e"])("",!0),Object(o["g"])("td",null,[Object(o["L"])(Object(o["g"])("select",{name:"type",id:"type","onUpdate:modelValue":function(t){return e.konacnaProcena=t},onChange:t[3]||(t[3]=function(){return j.updateTable&&j.updateTable.apply(j,arguments)})},[(Object(o["t"])(!0),Object(o["f"])(o["a"],null,Object(o["z"])(c.odgovori,(function(e){return Object(o["t"])(),Object(o["f"])("option",{key:e},Object(o["D"])(e),1)})),128))],40,L),[[o["H"],e.konacnaProcena]])]),null!=e.rangiranje?(Object(o["t"])(),Object(o["f"])("td",V,Object(o["D"])(e.rangiranje.toFixed(2)),1)):Object(o["e"])("",!0),null==e.rangiranje?(Object(o["t"])(),Object(o["f"])("td",H,"0")):Object(o["e"])("",!0)])})),128)),Object(o["g"])("tr",null,[J,Object(o["g"])("td",null,Object(o["D"])(c.licniOcena.toFixed(2)),1)])])])):Object(o["e"])("",!0),0!=c.kompanijskiProc?(Object(o["t"])(),Object(o["f"])("div",M,[_,Object(o["g"])("table",Z,[A,(Object(o["t"])(!0),Object(o["f"])(o["a"],null,Object(o["z"])(c.kompanijskiKpi,(function(e,n){return Object(o["t"])(),Object(o["f"])("tr",{key:n},[Object(o["g"])("td",null,[Object(o["i"])(Object(o["D"])(e.name)+" ",1),Object(o["g"])("button",{class:"definicija",type:"button",name:"button",onClick:function(e){return j.swapBoolKompanijski(n)}},"Definicija",8,W),c.kompanijskiBool[n].bool?(Object(o["t"])(),Object(o["f"])("p",Y,[Object(o["g"])("span",$,Object(o["D"])(c.kompanijskiBool[n].comment),1)])):Object(o["e"])("",!0)]),Object(o["g"])("td",null,Object(o["D"])(e.ponder)+"%",1),null!=e.samoProcena?(Object(o["t"])(),Object(o["f"])("td",q,Object(o["D"])(e.samoProcena),1)):Object(o["e"])("",!0),null==e.samoProcena?(Object(o["t"])(),Object(o["f"])("td",G,"nema")):Object(o["e"])("",!0),Object(o["g"])("td",null,[Object(o["L"])(Object(o["g"])("select",{name:"type",id:"type","onUpdate:modelValue":function(t){return e.konacnaProcena=t},onChange:t[4]||(t[4]=function(){return j.updateTable&&j.updateTable.apply(j,arguments)})},[(Object(o["t"])(!0),Object(o["f"])(o["a"],null,Object(o["z"])(c.odgovori,(function(e){return Object(o["t"])(),Object(o["f"])("option",{key:e},Object(o["D"])(e),1)})),128))],40,Q),[[o["H"],e.konacnaProcena]])]),null!=e.rangiranje?(Object(o["t"])(),Object(o["f"])("td",X,Object(o["D"])(e.rangiranje.toFixed(2)),1)):Object(o["e"])("",!0),null==e.rangiranje?(Object(o["t"])(),Object(o["f"])("td",ee,"0")):Object(o["e"])("",!0)])})),128)),Object(o["g"])("tr",null,[te,Object(o["g"])("td",null,Object(o["D"])(c.kompanijskiOcena.toFixed(2)),1)])])])):Object(o["e"])("",!0),c.ukupno<.75?(Object(o["t"])(),Object(o["f"])("div",ne,[Object(o["g"])("h3",oe,"Ukupan učinak: "+Object(o["D"])(c.ukupno.toFixed(2)),1),ae])):Object(o["e"])("",!0),c.ukupno>=.75&&c.ukupno<.99?(Object(o["t"])(),Object(o["f"])("div",ce,[Object(o["g"])("h3",ie,"Ukupan učinak: "+Object(o["D"])(c.ukupno.toFixed(2)),1),le])):Object(o["e"])("",!0),c.ukupno>=.99&&c.ukupno<1.17?(Object(o["t"])(),Object(o["f"])("div",re,[Object(o["g"])("h3",se,"Ukupan učinak: "+Object(o["D"])(c.ukupno.toFixed(2)),1),je])):Object(o["e"])("",!0),c.ukupno>=1.17?(Object(o["t"])(),Object(o["f"])("div",pe,[Object(o["g"])("h3",ue,"Ukupan učinak: "+Object(o["D"])(c.ukupno.toFixed(2)),1),be])):Object(o["e"])("",!0),Object(o["g"])("div",me,[Oe,Object(o["g"])("p",ke,[Object(o["g"])("span",de,Object(o["D"])(c.komentarSamoProcena),1)])]),Object(o["g"])("div",he,[fe,Object(o["L"])(Object(o["g"])("textarea",{class:"form-control",id:"exampleFormControlTextarea1",rows:"10","onUpdate:modelValue":t[5]||(t[5]=function(e){return c.komentar=e})},null,512),[[o["I"],c.komentar]])]),Object(o["g"])("div",ge,[Object(o["g"])("button",{class:"btn btn-primary",onClick:t[6]||(t[6]=function(){return j.submit&&j.submit.apply(j,arguments)})},"Submit")])])):Object(o["e"])("",!0),c.samoProcenaUradjena?Object(o["e"])("",!0):(Object(o["t"])(),Object(o["f"])("div",ve,ye))]))]))],64)}Object(o["u"])();var Ce=n("1da1"),Ke=n("5530"),De=(n("96cf"),n("5502")),we={computed:Object(De["c"])(["user","users","companys","usersSameCompany"]),data:function(){return{odgovori:[1,2,3,4],komentar:"",kompetence:[],licniKpi:[],kompanijskiKpi:[],ukupno:0,evaluatedUser:"",podredjeni:[],podredjeniName:"",podredjeniCeo:"",kompetenceOcena:0,licniOcena:0,kompanijskiOcena:0,kompanijskiProc:0,licniProc:0,kompetenceProc:0,kompetenceBool:[],kompanijskiBool:[],licniBool:[],lastEval:0,validation:"",komentarSamoProcena:"",samoProcenaUradjena:!1,loading:!0,nemaPodredjenih:!0}},methods:Object(Ke["a"])(Object(Ke["a"])({},Object(De["b"])(["getProfile","getCompanies","getCollegues","setKpiKonacnaProcena"])),{},{onChangePodredjeni:function(e){for(var t=0;t<this.usersSameCompany.length;t++)this.usersSameCompany[t].name==e.target.value&&(this.podredjeniCeo=this.usersSameCompany[t]);var n;for(t=0;t<this.companys.length;t++)this.user.type==this.companys[t].name&&(n=this.companys[t]);this.lastEval=this.podredjeniCeo.performanceEvaluation.length-1;var o=!0;for(0!=n.performanceEvaluation.kompanijskiProcenat?0==this.podredjeniCeo.performanceEvaluation[this.lastEval].kompanijski.length&&(o=!1):0!=n.performanceEvaluation.kompetenceProcenat?0==this.podredjeniCeo.performanceEvaluation[this.lastEval].kompetence.length&&(o=!1):0!=n.performanceEvaluation.licniProcenat&&null==this.podredjeniCeo.performanceEvaluation[this.lastEval].licniKpi[0].samoProcena&&(o=!1),this.samoProcenaUradjena=!!o,this.lastEval=this.podredjeniCeo.performanceEvaluation.length-1,this.komentarSamoProcena=this.podredjeniCeo.performanceEvaluation[this.lastEval].komentarSamoProcena,this.komentar=this.podredjeniCeo.performanceEvaluation[this.lastEval].komentar,t=0;t<this.podredjeniCeo.performanceEvaluation[this.lastEval].kompetence.length;t++)this.kompetence[t].samoProcena=this.podredjeniCeo.performanceEvaluation[this.lastEval].kompetence[t].samoProcena,this.kompetence[t].konacnaProcena=this.podredjeniCeo.performanceEvaluation[this.lastEval].kompetence[t].konacnaProcena,this.kompetence[t].rangiranje=this.podredjeniCeo.performanceEvaluation[this.lastEval].kompetence[t].rangiranje;for(console.log("KOMPETENCE"),console.log(this.kompetence),t=0;t<this.podredjeniCeo.performanceEvaluation[this.lastEval].kompanijski.length;t++)this.kompanijskiKpi[t].samoProcena=this.podredjeniCeo.performanceEvaluation[this.lastEval].kompanijski[t].samoProcena,this.kompanijskiKpi[t].konacnaProcena=this.podredjeniCeo.performanceEvaluation[this.lastEval].kompanijski[t].konacnaProcena,this.kompanijskiKpi[t].rangiranje=this.podredjeniCeo.performanceEvaluation[this.lastEval].kompanijski[t].rangiranje;for(this.licniKpi=[],t=0;t<this.podredjeniCeo.performanceEvaluation[this.lastEval].licniKpi.length;t++)this.licniKpi.push(this.podredjeniCeo.performanceEvaluation[this.lastEval].licniKpi[t]);this.updateTable()},swapBoolKompetence:function(e){this.kompetenceBool[e].bool?this.kompetenceBool[e].bool=!1:this.kompetenceBool[e].bool=!0},swapBoolKompanijski:function(e){this.kompanijskiBool[e].bool?this.kompanijskiBool[e].bool=!1:this.kompanijskiBool[e].bool=!0},swapBoolLicni:function(e){this.licniBool[e].bool?this.licniBool[e].bool=!1:this.licniBool[e].bool=!0},updateTable:function(){var e={};for(i=0;i<this.companys.length;i++)this.companys[i].name==this.podredjeniCeo.type&&(e=this.companys[i]);this.lastEval=this.podredjeniCeo.performanceEvaluation.length-1;var t=e.performanceEvaluation.kompanijski.length;for(i=0;i<t;i++){var n={bool:!1,comment:e.performanceEvaluation.kompanijski[i].comment};this.kompanijskiBool.push(n)}for(t=e.performanceEvaluation.kompetence.length,i=0;i<t;i++){var o={bool:!1,comment:e.performanceEvaluation.kompetence[i].comment};this.kompetenceBool.push(o)}for(t=this.podredjeniCeo.performanceEvaluation[this.lastEval].licniKpi.length,i=0;i<t;i++){var a={bool:!1,comment:this.podredjeniCeo.performanceEvaluation[this.lastEval].licniKpi[i].comment};this.licniBool.push(a)}for(var c=0,i=0;i<this.kompetence.length;i++)null!=this.kompetence[i].konacnaProcena&&(this.kompetence[i].rangiranje=(.25*this.kompetence[i].konacnaProcena+.25)*this.kompetence[i].ponder/100,c+=this.kompetence[i].rangiranje);this.kompetenceOcena=c;var l=0;for(i=0;i<this.licniKpi.length;i++)null!=this.licniKpi[i].konacnaProcena&&(this.licniKpi[i].rangiranje=(.25*this.licniKpi[i].konacnaProcena+.25)*this.licniKpi[i].ponder/100,l+=this.licniKpi[i].rangiranje);this.licniOcena=l;var r=0;for(i=0;i<this.kompanijskiKpi.length;i++)null!=this.kompanijskiKpi[i].konacnaProcena&&(this.kompanijskiKpi[i].rangiranje=(.25*this.kompanijskiKpi[i].konacnaProcena+.25)*this.kompanijskiKpi[i].ponder/100,r+=this.kompanijskiKpi[i].rangiranje);this.kompanijskiOcena=r,this.ukupno=e.performanceEvaluation.kompetenceProcenat/100*c+e.performanceEvaluation.licniProcenat/100*l+e.performanceEvaluation.kompanijskiProcenat/100*r},submit:function(){var e=this,t=new Date,n=t.getDate(),o=t.getMonth()+1,a=t.getFullYear(),c=n+"."+o+"."+a+".",i={licniKpi:this.licniKpi,kompanijski:this.kompanijskiKpi,kompetence:this.kompetence,userId:this.podredjeniCeo._id,komentar:this.komentar,lastEval:this.lastEval,date:c};this.setKpiKonacnaProcena(i).then((function(t){t.data.success&&e.$router.push("/profile")})).catch((function(e){console.log(e)}))}}),created:function(){var e=this;return Object(Ce["a"])(regeneratorRuntime.mark((function t(){var n,o,a,c,i,l;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.getProfile();case 2:return console.log("User: ",e.user),t.next=5,e.getCompanies();case 5:return t.next=7,e.getCollegues(e.user.type);case 7:for(o=0;o<e.companys.length;o++)e.user.type==e.companys[o].name&&(n=e.companys[o]);for(a=n.performanceEvaluation.kompanijski.length,o=0;o<a;o++)c={bool:!1,comment:n.performanceEvaluation.kompanijski[o].comment},e.kompanijskiBool.push(c);for(a=n.performanceEvaluation.kompetence.length,o=0;o<a;o++)i={bool:!1,comment:n.performanceEvaluation.kompetence[o].comment},e.kompetenceBool.push(i);for(e.kompetenceProc=n.performanceEvaluation.kompetenceProcenat,e.licniProc=n.performanceEvaluation.licniProcenat,e.kompanijskiProc=n.performanceEvaluation.kompanijskiProcenat,o=0;o<n.performanceEvaluation.kompetence.length;o++)e.kompetence.push(n.performanceEvaluation.kompetence[o]);for(o=0;o<n.performanceEvaluation.kompanijski.length;o++)e.kompanijskiKpi.push(n.performanceEvaluation.kompanijski[o]);for(l=0;l<e.usersSameCompany.length;l++)e.user.name==e.usersSameCompany[l].nadredjeni&&e.podredjeni.push(e.usersSameCompany[l]);console.log("PODREDJENI: ",e.podredjeni),e.podredjeni.length>0&&(e.nemaPodredjenih=!1),e.loading=!1;case 21:case"end":return t.stop()}}),t)})))()},beforeCreate:function(){document.body.className="other"}};n("b26c");we.render=Ee,we.__scopeId="data-v-28ed862a";t["default"]=we},b0c0:function(e,t,n){var o=n("83ab"),a=n("9bf2").f,c=Function.prototype,i=c.toString,l=/^\s*function ([^ (]*)/,r="name";o&&!(r in c)&&a(c,r,{configurable:!0,get:function(){try{return i.call(this).match(l)[1]}catch(e){return""}}})},b26c:function(e,t,n){"use strict";n("55ed")},b680:function(e,t,n){"use strict";var o=n("23e7"),a=n("a691"),c=n("408a"),i=n("1148"),l=n("d039"),r=1..toFixed,s=Math.floor,j=function(e,t,n){return 0===t?n:t%2===1?j(e,t-1,n*e):j(e*e,t/2,n)},p=function(e){var t=0,n=e;while(n>=4096)t+=12,n/=4096;while(n>=2)t+=1,n/=2;return t},u=function(e,t,n){var o=-1,a=n;while(++o<6)a+=t*e[o],e[o]=a%1e7,a=s(a/1e7)},b=function(e,t){var n=6,o=0;while(--n>=0)o+=e[n],e[n]=s(o/t),o=o%t*1e7},m=function(e){var t=6,n="";while(--t>=0)if(""!==n||0===t||0!==e[t]){var o=String(e[t]);n=""===n?o:n+i.call("0",7-o.length)+o}return n},O=r&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!l((function(){r.call({})}));o({target:"Number",proto:!0,forced:O},{toFixed:function(e){var t,n,o,l,r=c(this),s=a(e),O=[0,0,0,0,0,0],k="",d="0";if(s<0||s>20)throw RangeError("Incorrect fraction digits");if(r!=r)return"NaN";if(r<=-1e21||r>=1e21)return String(r);if(r<0&&(k="-",r=-r),r>1e-21)if(t=p(r*j(2,69,1))-69,n=t<0?r*j(2,-t,1):r/j(2,t,1),n*=4503599627370496,t=52-t,t>0){u(O,0,n),o=s;while(o>=7)u(O,1e7,0),o-=7;u(O,j(10,o,1),0),o=t-1;while(o>=23)b(O,1<<23),o-=23;b(O,1<<o),u(O,1,1),b(O,2),d=m(O)}else u(O,0,n),u(O,1<<-t,0),d=m(O)+i.call("0",s);return s>0?(l=d.length,d=k+(l<=s?"0."+i.call("0",s-l)+d:d.slice(0,l-s)+"."+d.slice(l-s))):d=k+d,d}})},e962:function(e,t,n){e.exports=n.p+"img/logonewest.20bdb802.svg"}}]);
//# sourceMappingURL=chunk-4194cb3e.8430bb99.js.map