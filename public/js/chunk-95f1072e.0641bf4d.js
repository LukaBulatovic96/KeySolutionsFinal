(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-95f1072e"],{"0ac5":function(e,t,n){"use strict";n("4ff9")},1148:function(e,t,n){"use strict";var o=n("a691"),a=n("577e"),i=n("1d80");e.exports=function(e){var t=a(i(this)),n="",c=o(e);if(c<0||c==1/0)throw RangeError("Wrong number of repetitions");for(;c>0;(c>>>=1)&&(t+=t))1&c&&(n+=t);return n}},"1d96":function(e,t,n){"use strict";n.r(t);n("b0c0"),n("b680");var o=n("7a23");Object(o["w"])("data-v-082e73c8");var a=Object(o["g"])("div",{class:"header"},[Object(o["g"])("h1",null,"Formular za ocenjivanje kompetencija - Konačna Procena"),Object(o["g"])("h3",null,"(1=Ne Zadovoljava Očekivanja)"),Object(o["g"])("h3",null,"(2=Potrebno Poboljšanje)"),Object(o["g"])("h3",null,"(3=Zadovoljava Očekivanja)"),Object(o["g"])("h3",null,"(4=Iznad Očekivanja)")],-1),i={class:"form-group"},c=Object(o["g"])("label",{for:"collegue"},"Podređeni za koga se vrši konačna procena:",-1),r={class:"form-group"},l=Object(o["g"])("label",{for:"date"},"Datum Procene:",-1),j={key:0,class:"kompetence"},p=Object(o["g"])("h3",null,"Kompetence",-1),u={id:"kompetenceTable"},s=Object(o["g"])("tr",null,[Object(o["g"])("th",null,"Kompetence :"),Object(o["g"])("th",null,"Ponder"),Object(o["g"])("th",null,"Samoprocena"),Object(o["g"])("th",null,"Konacna Procena"),Object(o["g"])("th",null,"Rangiranje")],-1),b=["onClick"],m={key:0,style:{"text-align":"left"}},k={style:{"white-space":"pre-line"}},O={key:0},h={key:1},d=Object(o["g"])("td",{colspan:"4"},"Ukupno ocena:",-1),f={key:1,class:"licni"},g=Object(o["g"])("h3",null,"Licni KPI",-1),v={id:"licniTable"},P=Object(o["g"])("tr",null,[Object(o["g"])("th",null,"Kompetence :"),Object(o["g"])("th",null,"Ponder"),Object(o["g"])("th",null,"Samoprocena"),Object(o["g"])("th",null,"Konacna Procena"),Object(o["g"])("th",null,"Rangiranje")],-1),E=["onClick"],y={key:0,style:{"text-align":"left"}},C={style:{"white-space":"pre-line"}},K={key:0},D={key:1},w=Object(o["g"])("td",{colspan:"4"},"Ukupno ocena:",-1),B={key:2,class:"kompanijski"},x=Object(o["g"])("h3",null,"Kompanijski KPI",-1),z={id:"kompanijskiTable"},F=Object(o["g"])("tr",null,[Object(o["g"])("th",null,"Kompetence :"),Object(o["g"])("th",null,"Ponder"),Object(o["g"])("th",null,"Samoprocena"),Object(o["g"])("th",null,"Konacna Procena"),Object(o["g"])("th",null,"Rangiranje")],-1),S=["onClick"],U={key:0,style:{"text-align":"left"}},R={style:{"white-space":"pre-line"}},N={key:0},I={key:1},L=Object(o["g"])("td",{colspan:"4"},"Ukupno ocena:",-1),T={key:3,class:"rezultat1"},_={class:"ukupno"},H=Object(o["g"])("p",null,"Rezultati loši, potrebno unapređenje za vršenje trenutne uloge ili prelazak na drugo radno mesto ",-1),J={key:4,class:"rezultat2"},V={class:"ukupno"},Z=Object(o["g"])("p",null,"Rezultati dobri, ali neophodan razvoj za vršenje trenutne uloge ",-1),A={key:5,class:"rezultat3"},M={class:"ukupno"},W=Object(o["g"])("p",null,"Apsolutno ostvarenje rezultata u trenutnoj ulozi ",-1),q={key:6,class:"rezultat4"},G={class:"ukupno"},Q=Object(o["g"])("p",null,"Prebačaj rezultata u trenutnoj ulozi ",-1),X={class:"komentar"},Y=Object(o["g"])("h4",null,"Komentar Samoprocena",-1),$={style:{"text-align":"left"}},ee={style:{"white-space":"pre-line"}},te={class:"komentar"},ne=Object(o["g"])("h4",null,"Komentar Konacna procena",-1),oe={style:{"text-align":"left"}},ae={style:{"white-space":"pre-line"}};function ie(e,t,n,ie,ce,re){return Object(o["t"])(),Object(o["f"])(o["a"],null,[a,Object(o["g"])("div",i,[c,Object(o["L"])(Object(o["g"])("select",{name:"collegue",id:"collegue","onUpdate:modelValue":t[0]||(t[0]=function(e){return ce.podredjeniName=e}),onChange:t[1]||(t[1]=function(e){return re.onChangePodredjeni(e)})},[(Object(o["t"])(!0),Object(o["f"])(o["a"],null,Object(o["z"])(ce.podredjeni,(function(e){return Object(o["t"])(),Object(o["f"])("option",{key:e.name},Object(o["D"])(e.name),1)})),128))],544),[[o["H"],ce.podredjeniName]])]),Object(o["g"])("div",r,[l,Object(o["L"])(Object(o["g"])("select",{name:"date",id:"collegue","onUpdate:modelValue":t[2]||(t[2]=function(e){return ce.CurrentDate=e}),onChange:t[3]||(t[3]=function(e){return re.onChangeDate(e)})},[(Object(o["t"])(!0),Object(o["f"])(o["a"],null,Object(o["z"])(ce.date,(function(e){return Object(o["t"])(),Object(o["f"])("option",{key:e},Object(o["D"])(e),1)})),128))],544),[[o["H"],ce.CurrentDate]])]),0!=ce.kompetenceProc?(Object(o["t"])(),Object(o["f"])("div",j,[p,Object(o["g"])("table",u,[s,(Object(o["t"])(!0),Object(o["f"])(o["a"],null,Object(o["z"])(ce.kompetence,(function(e,t){return Object(o["t"])(),Object(o["f"])("tr",{key:t},[Object(o["g"])("td",null,[Object(o["i"])(Object(o["D"])(e.name)+" ",1),Object(o["g"])("button",{class:"definicija",type:"button",name:"button",onClick:function(e){return re.swapBoolKompetence(t)}},"Definicija",8,b),ce.kompetenceBool[t].bool?(Object(o["t"])(),Object(o["f"])("p",m,[Object(o["g"])("span",k,Object(o["D"])(ce.kompetenceBool[t].comment),1)])):Object(o["e"])("",!0)]),Object(o["g"])("td",null,Object(o["D"])(e.ponder)+"%",1),Object(o["g"])("td",null,Object(o["D"])(e.samoProcena),1),Object(o["g"])("td",null,Object(o["D"])(e.konacnaProcena),1),null!=e.rangiranje?(Object(o["t"])(),Object(o["f"])("td",O,Object(o["D"])(e.rangiranje.toFixed(2)),1)):Object(o["e"])("",!0),null==e.rangiranje?(Object(o["t"])(),Object(o["f"])("td",h,"0")):Object(o["e"])("",!0)])})),128)),Object(o["g"])("tr",null,[d,Object(o["g"])("td",null,Object(o["D"])(ce.kompetenceOcena.toFixed(2)),1)])])])):Object(o["e"])("",!0),0!=ce.licniProc?(Object(o["t"])(),Object(o["f"])("div",f,[g,Object(o["g"])("table",v,[P,(Object(o["t"])(!0),Object(o["f"])(o["a"],null,Object(o["z"])(ce.licniKpi,(function(e,t){return Object(o["t"])(),Object(o["f"])("tr",{key:t},[Object(o["g"])("td",null,[Object(o["i"])(Object(o["D"])(e.name)+" ",1),Object(o["g"])("button",{class:"definicija",type:"button",name:"button",onClick:function(e){return re.swapBoolLicni(t)}},"Definicija",8,E),ce.licniBool[t].bool?(Object(o["t"])(),Object(o["f"])("p",y,[Object(o["g"])("span",C,Object(o["D"])(ce.licniBool[t].comment),1)])):Object(o["e"])("",!0)]),Object(o["g"])("td",null,Object(o["D"])(e.ponder)+"%",1),Object(o["g"])("td",null,Object(o["D"])(e.samoProcena),1),Object(o["g"])("td",null,Object(o["D"])(e.konacnaProcena),1),null!=e.rangiranje?(Object(o["t"])(),Object(o["f"])("td",K,Object(o["D"])(e.rangiranje.toFixed(2)),1)):Object(o["e"])("",!0),null==e.rangiranje?(Object(o["t"])(),Object(o["f"])("td",D,"0")):Object(o["e"])("",!0)])})),128)),Object(o["g"])("tr",null,[w,Object(o["g"])("td",null,Object(o["D"])(ce.licniOcena.toFixed(2)),1)])])])):Object(o["e"])("",!0),0!=ce.kompanijskiProc?(Object(o["t"])(),Object(o["f"])("div",B,[x,Object(o["g"])("table",z,[F,(Object(o["t"])(!0),Object(o["f"])(o["a"],null,Object(o["z"])(ce.kompanijskiKpi,(function(e,t){return Object(o["t"])(),Object(o["f"])("tr",{key:t},[Object(o["g"])("td",null,[Object(o["i"])(Object(o["D"])(e.name)+" ",1),Object(o["g"])("button",{class:"definicija",type:"button",name:"button",onClick:function(e){return re.swapBoolKompanijski(t)}},"Definicija",8,S),ce.kompanijskiBool[t].bool?(Object(o["t"])(),Object(o["f"])("p",U,[Object(o["g"])("span",R,Object(o["D"])(ce.kompanijskiBool[t].comment),1)])):Object(o["e"])("",!0)]),Object(o["g"])("td",null,Object(o["D"])(e.ponder)+"%",1),Object(o["g"])("td",null,Object(o["D"])(e.samoProcena),1),Object(o["g"])("td",null,Object(o["D"])(e.konacnaProcena),1),null!=e.rangiranje?(Object(o["t"])(),Object(o["f"])("td",N,Object(o["D"])(e.rangiranje.toFixed(2)),1)):Object(o["e"])("",!0),null==e.rangiranje?(Object(o["t"])(),Object(o["f"])("td",I,"0")):Object(o["e"])("",!0)])})),128)),Object(o["g"])("tr",null,[L,Object(o["g"])("td",null,Object(o["D"])(ce.kompanijskiOcena.toFixed(2)),1)])])])):Object(o["e"])("",!0),ce.ukupno<.75?(Object(o["t"])(),Object(o["f"])("div",T,[Object(o["g"])("h3",_,"Ukupan učinak: "+Object(o["D"])(ce.ukupno.toFixed(2)),1),H])):Object(o["e"])("",!0),ce.ukupno>=.75&&ce.ukupno<.99?(Object(o["t"])(),Object(o["f"])("div",J,[Object(o["g"])("h3",V,"Ukupan učinak: "+Object(o["D"])(ce.ukupno.toFixed(2)),1),Z])):Object(o["e"])("",!0),ce.ukupno>=.99&&ce.ukupno<1.17?(Object(o["t"])(),Object(o["f"])("div",A,[Object(o["g"])("h3",M,"Ukupan učinak: "+Object(o["D"])(ce.ukupno.toFixed(2)),1),W])):Object(o["e"])("",!0),ce.ukupno>=1.17?(Object(o["t"])(),Object(o["f"])("div",q,[Object(o["g"])("h3",G,"Ukupan učinak: "+Object(o["D"])(ce.ukupno.toFixed(2)),1),Q])):Object(o["e"])("",!0),Object(o["g"])("div",X,[Y,Object(o["g"])("p",$,[Object(o["g"])("span",ee,Object(o["D"])(ce.komentarSamoProcena),1)])]),Object(o["g"])("div",te,[ne,Object(o["g"])("p",oe,[Object(o["g"])("span",ae,Object(o["D"])(ce.komentar),1)])])],64)}Object(o["u"])();var ce=n("1da1"),re=n("5530"),le=(n("96cf"),n("5502")),je={computed:Object(le["c"])(["user","users","companys","usersSameCompany"]),data:function(){return{odgovori:[1,2,3,4],komentar:"",kompetence:[],licniKpi:[],kompanijskiKpi:[],ukupno:0,evaluatedUser:"",podredjeni:[],podredjeniName:"",podredjeniCeo:"",kompetenceOcena:0,licniOcena:0,kompanijskiOcena:0,kompanijskiProc:0,licniProc:0,kompetenceProc:0,kompetenceBool:[],kompanijskiBool:[],licniBool:[],lastEval:0,date:[],CurrentDate:"",komentarSamoProcena:""}},methods:Object(re["a"])(Object(re["a"])({},Object(le["b"])(["getProfile","getCompanies","getCollegues"])),{},{onChangePodredjeni:function(e){this.date=[];for(var t=0;t<this.usersSameCompany.length;t++)this.usersSameCompany[t].name==e.target.value&&(this.podredjeniCeo=this.usersSameCompany[t]);for(t=0;t<this.podredjeniCeo.performanceEvaluation.length;t++)this.date.push(this.podredjeniCeo.performanceEvaluation[t].date)},onChangeDate:function(e){for(var t=0;t<this.podredjeniCeo.performanceEvaluation.length;t++)e.target.value==this.podredjeniCeo.performanceEvaluation[t].date&&(this.lastEval=t);for(this.komentarSamoProcena=this.podredjeniCeo.performanceEvaluation[this.lastEval].komentarSamoProcena,this.komentar=this.podredjeniCeo.performanceEvaluation[this.lastEval].komentar,t=0;t<this.podredjeniCeo.performanceEvaluation[this.lastEval].kompetence.length;t++)this.kompetence[t].samoProcena=this.podredjeniCeo.performanceEvaluation[this.lastEval].kompetence[t].samoProcena,this.kompetence[t].konacnaProcena=this.podredjeniCeo.performanceEvaluation[this.lastEval].kompetence[t].konacnaProcena,this.kompetence[t].rangiranje=this.podredjeniCeo.performanceEvaluation[this.lastEval].kompetence[t].rangiranje;for(t=0;t<this.podredjeniCeo.performanceEvaluation[this.lastEval].kompanijski.length;t++)this.kompanijskiKpi[t].samoProcena=this.podredjeniCeo.performanceEvaluation[this.lastEval].kompanijski[t].samoProcena,this.kompanijskiKpi[t].konacnaProcena=this.podredjeniCeo.performanceEvaluation[this.lastEval].kompanijski[t].konacnaProcena,this.kompanijskiKpi[t].rangiranje=this.podredjeniCeo.performanceEvaluation[this.lastEval].kompanijski[t].rangiranje;for(this.licniKpi=[],t=0;t<this.podredjeniCeo.performanceEvaluation[this.lastEval].licniKpi.length;t++)this.licniKpi.push(this.podredjeniCeo.performanceEvaluation[this.lastEval].licniKpi[t]);this.updateTable()},swapBoolKompetence:function(e){this.kompetenceBool[e].bool?this.kompetenceBool[e].bool=!1:this.kompetenceBool[e].bool=!0},swapBoolKompanijski:function(e){this.kompanijskiBool[e].bool?this.kompanijskiBool[e].bool=!1:this.kompanijskiBool[e].bool=!0},swapBoolLicni:function(e){this.licniBool[e].bool?this.licniBool[e].bool=!1:this.licniBool[e].bool=!0},updateTable:function(){var e={};for(c=0;c<this.companys.length;c++)this.companys[c].name==this.podredjeniCeo.type&&(e=this.companys[c]);this.lastEval=this.podredjeniCeo.performanceEvaluation.length-1;var t=e.performanceEvaluation.kompanijski.length;for(c=0;c<t;c++){var n={bool:!1,comment:e.performanceEvaluation.kompanijski[c].comment};this.kompanijskiBool.push(n)}for(t=e.performanceEvaluation.kompetence.length,c=0;c<t;c++){var o={bool:!1,comment:e.performanceEvaluation.kompetence[c].comment};this.kompetenceBool.push(o)}for(t=this.podredjeniCeo.performanceEvaluation[this.lastEval].licniKpi.length,c=0;c<t;c++){var a={bool:!1,comment:this.podredjeniCeo.performanceEvaluation[this.lastEval].licniKpi[c].comment};this.licniBool.push(a)}for(var i=0,c=0;c<this.kompetence.length;c++)null!=this.kompetence[c].konacnaProcena&&(this.kompetence[c].rangiranje=(.25*this.kompetence[c].konacnaProcena+.25)*this.kompetence[c].ponder/100,i+=this.kompetence[c].rangiranje);this.kompetenceOcena=i;var r=0;for(c=0;c<this.licniKpi.length;c++)null!=this.licniKpi[c].konacnaProcena&&(this.licniKpi[c].rangiranje=(.25*this.licniKpi[c].konacnaProcena+.25)*this.licniKpi[c].ponder/100,r+=this.licniKpi[c].rangiranje);this.licniOcena=r;var l=0;for(c=0;c<this.kompanijskiKpi.length;c++)null!=this.kompanijskiKpi[c].konacnaProcena&&(this.kompanijskiKpi[c].rangiranje=(.25*this.kompanijskiKpi[c].konacnaProcena+.25)*this.kompanijskiKpi[c].ponder/100,l+=this.kompanijskiKpi[c].rangiranje);this.kompanijskiOcena=l,this.ukupno=e.performanceEvaluation.kompetenceProcenat/100*i+e.performanceEvaluation.licniProcenat/100*r+e.performanceEvaluation.kompanijskiProcenat/100*l}}),created:function(){var e=this;return Object(ce["a"])(regeneratorRuntime.mark((function t(){var n,o,a,i,c,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.getProfile();case 2:return t.next=4,e.getCompanies();case 4:return t.next=6,e.getCollegues(e.user.type);case 6:for(o=0;o<e.companys.length;o++)e.user.type==e.companys[o].name&&(n=e.companys[o]);for(a=n.performanceEvaluation.kompanijski.length,o=0;o<a;o++)i={bool:!1,comment:n.performanceEvaluation.kompanijski[o].comment},e.kompanijskiBool.push(i);for(a=n.performanceEvaluation.kompetence.length,o=0;o<a;o++)c={bool:!1,comment:n.performanceEvaluation.kompetence[o].comment},e.kompetenceBool.push(c);for(e.kompetenceProc=n.performanceEvaluation.kompetenceProcenat,e.licniProc=n.performanceEvaluation.licniProcenat,e.kompanijskiProc=n.performanceEvaluation.kompanijskiProcenat,o=0;o<n.performanceEvaluation.kompetence.length;o++)e.kompetence.push(n.performanceEvaluation.kompetence[o]);for(o=0;o<n.performanceEvaluation.kompanijski.length;o++)e.kompanijskiKpi.push(n.performanceEvaluation.kompanijski[o]);for(o=0;o<e.user.performanceEvaluationPodredjeni.length;o++)for(r=0;r<e.usersSameCompany.length;r++)e.user.performanceEvaluationPodredjeni[o]==e.usersSameCompany[r]._id&&e.podredjeni.push(e.usersSameCompany[r]);case 17:case"end":return t.stop()}}),t)})))()},beforeCreate:function(){document.body.className="other"}};n("0ac5");je.render=ie,je.__scopeId="data-v-082e73c8";t["default"]=je},"408a":function(e,t){var n=1..valueOf;e.exports=function(e){return n.call(e)}},"4ff9":function(e,t,n){},b0c0:function(e,t,n){var o=n("83ab"),a=n("9bf2").f,i=Function.prototype,c=i.toString,r=/^\s*function ([^ (]*)/,l="name";o&&!(l in i)&&a(i,l,{configurable:!0,get:function(){try{return c.call(this).match(r)[1]}catch(e){return""}}})},b680:function(e,t,n){"use strict";var o=n("23e7"),a=n("a691"),i=n("408a"),c=n("1148"),r=n("d039"),l=1..toFixed,j=Math.floor,p=function(e,t,n){return 0===t?n:t%2===1?p(e,t-1,n*e):p(e*e,t/2,n)},u=function(e){var t=0,n=e;while(n>=4096)t+=12,n/=4096;while(n>=2)t+=1,n/=2;return t},s=function(e,t,n){var o=-1,a=n;while(++o<6)a+=t*e[o],e[o]=a%1e7,a=j(a/1e7)},b=function(e,t){var n=6,o=0;while(--n>=0)o+=e[n],e[n]=j(o/t),o=o%t*1e7},m=function(e){var t=6,n="";while(--t>=0)if(""!==n||0===t||0!==e[t]){var o=String(e[t]);n=""===n?o:n+c.call("0",7-o.length)+o}return n},k=l&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!r((function(){l.call({})}));o({target:"Number",proto:!0,forced:k},{toFixed:function(e){var t,n,o,r,l=i(this),j=a(e),k=[0,0,0,0,0,0],O="",h="0";if(j<0||j>20)throw RangeError("Incorrect fraction digits");if(l!=l)return"NaN";if(l<=-1e21||l>=1e21)return String(l);if(l<0&&(O="-",l=-l),l>1e-21)if(t=u(l*p(2,69,1))-69,n=t<0?l*p(2,-t,1):l/p(2,t,1),n*=4503599627370496,t=52-t,t>0){s(k,0,n),o=j;while(o>=7)s(k,1e7,0),o-=7;s(k,p(10,o,1),0),o=t-1;while(o>=23)b(k,1<<23),o-=23;b(k,1<<o),s(k,1,1),b(k,2),h=m(k)}else s(k,0,n),s(k,1<<-t,0),h=m(k)+c.call("0",j);return j>0?(r=h.length,h=O+(r<=j?"0."+c.call("0",j-r)+h:h.slice(0,r-j)+"."+h.slice(r-j))):h=O+h,h}})}}]);
//# sourceMappingURL=chunk-95f1072e.0641bf4d.js.map