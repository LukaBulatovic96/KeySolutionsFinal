(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2ec7ffc4"],{"006e":function(e,n,t){"use strict";t("08db")},"08db":function(e,n,t){},1148:function(e,n,t){"use strict";var o=t("a691"),a=t("577e"),i=t("1d80");e.exports=function(e){var n=a(i(this)),t="",c=o(e);if(c<0||c==1/0)throw RangeError("Wrong number of repetitions");for(;c>0;(c>>>=1)&&(n+=n))1&c&&(t+=n);return t}},"1d96":function(e,n,t){"use strict";t.r(n);t("b0c0"),t("b680");var o=t("7a23");Object(o["w"])("data-v-96223790");var a=Object(o["g"])("div",{class:"header"},[Object(o["g"])("h1",null,"Formular za ocenjivanje kompetencija - Konačna Procena"),Object(o["g"])("h3",null,"(1=Ne Zadovoljava Očekivanja)"),Object(o["g"])("h3",null,"(2=Potrebno Poboljšanje)"),Object(o["g"])("h3",null,"(3=Zadovoljava Očekivanja)"),Object(o["g"])("h3",null,"(4=Iznad Očekivanja)")],-1),i={class:"form-group"},c=Object(o["g"])("label",{for:"collegue"},"Podređeni za koga se vrši konačna procena:",-1),r={class:"form-group"},l=Object(o["g"])("label",{for:"date"},"Datum Procene:",-1),j={key:0,class:"kompetence"},u=Object(o["g"])("h3",null,"Kompetence",-1),p={id:"kompetenceTable"},s=Object(o["g"])("tr",null,[Object(o["g"])("th",null,"Kompetence :"),Object(o["g"])("th",null,"Ponder"),Object(o["g"])("th",null,"Samoprocena"),Object(o["g"])("th",null,"Konacna Procena"),Object(o["g"])("th",null,"Rangiranje")],-1),b=["onClick"],m={key:0},k={key:0},O={key:1},d=Object(o["g"])("td",{colspan:"4"},"Ukupno ocena:",-1),h={key:1,class:"licni"},f=Object(o["g"])("h3",null,"Licni KPI",-1),g={id:"licniTable"},v=Object(o["g"])("tr",null,[Object(o["g"])("th",null,"Kompetence :"),Object(o["g"])("th",null,"Ponder"),Object(o["g"])("th",null,"Samoprocena"),Object(o["g"])("th",null,"Konacna Procena"),Object(o["g"])("th",null,"Rangiranje")],-1),P=["onClick"],E={key:0},C={key:0},y={key:1},K=Object(o["g"])("td",{colspan:"4"},"Ukupno ocena:",-1),D={key:2,class:"kompanijski"},B=Object(o["g"])("h3",null,"Kompanijski KPI",-1),w={id:"kompanijskiTable"},x=Object(o["g"])("tr",null,[Object(o["g"])("th",null,"Kompetence :"),Object(o["g"])("th",null,"Ponder"),Object(o["g"])("th",null,"Samoprocena"),Object(o["g"])("th",null,"Konacna Procena"),Object(o["g"])("th",null,"Rangiranje")],-1),z=["onClick"],F={key:0},S={key:0},U={key:1},R=Object(o["g"])("td",{colspan:"4"},"Ukupno ocena:",-1),N={key:3,class:"rezultat1"},I={class:"ukupno"},L=Object(o["g"])("p",null,"Rezultati loši, potrebno unapređenje za vršenje trenutne uloge ili prelazak na drugo radno mesto ",-1),T={key:4,class:"rezultat2"},_={class:"ukupno"},H=Object(o["g"])("p",null,"Rezultati dobri, ali neophodan razvoj za vršenje trenutne uloge ",-1),J={key:5,class:"rezultat3"},V={class:"ukupno"},Z=Object(o["g"])("p",null,"Apsolutno ostvarenje rezultata u trenutnoj ulozi ",-1),A={key:6,class:"rezultat4"},M={class:"ukupno"},W=Object(o["g"])("p",null,"Prebačaj rezultata u trenutnoj ulozi ",-1),q={class:"komentar"},G=Object(o["g"])("h4",null,"Komentar Samoprocena",-1),Q={class:"komentar"},X=Object(o["g"])("h4",null,"Komentar Konacna procena",-1);function Y(e,n,t,Y,$,ee){return Object(o["t"])(),Object(o["f"])(o["a"],null,[a,Object(o["g"])("div",i,[c,Object(o["L"])(Object(o["g"])("select",{name:"collegue",id:"collegue","onUpdate:modelValue":n[0]||(n[0]=function(e){return $.podredjeniName=e}),onChange:n[1]||(n[1]=function(e){return ee.onChangePodredjeni(e)})},[(Object(o["t"])(!0),Object(o["f"])(o["a"],null,Object(o["z"])($.podredjeni,(function(e){return Object(o["t"])(),Object(o["f"])("option",{key:e.name},Object(o["D"])(e.name),1)})),128))],544),[[o["H"],$.podredjeniName]])]),Object(o["g"])("div",r,[l,Object(o["L"])(Object(o["g"])("select",{name:"date",id:"collegue","onUpdate:modelValue":n[2]||(n[2]=function(e){return $.CurrentDate=e}),onChange:n[3]||(n[3]=function(e){return ee.onChangeDate(e)})},[(Object(o["t"])(!0),Object(o["f"])(o["a"],null,Object(o["z"])($.date,(function(e){return Object(o["t"])(),Object(o["f"])("option",{key:e},Object(o["D"])(e),1)})),128))],544),[[o["H"],$.CurrentDate]])]),0!=$.kompetenceProc?(Object(o["t"])(),Object(o["f"])("div",j,[u,Object(o["g"])("table",p,[s,(Object(o["t"])(!0),Object(o["f"])(o["a"],null,Object(o["z"])($.kompetence,(function(e,n){return Object(o["t"])(),Object(o["f"])("tr",{key:n},[Object(o["g"])("td",null,[Object(o["i"])(Object(o["D"])(e.name)+" ",1),Object(o["g"])("button",{class:"definicija",type:"button",name:"button",onClick:function(e){return ee.swapBoolKompetence(n)}},"Definicija",8,b),$.kompetenceBool[n].bool?(Object(o["t"])(),Object(o["f"])("div",m,Object(o["D"])($.kompetenceBool[n].comment),1)):Object(o["e"])("",!0)]),Object(o["g"])("td",null,Object(o["D"])(e.ponder)+"%",1),Object(o["g"])("td",null,Object(o["D"])(e.samoProcena),1),Object(o["g"])("td",null,Object(o["D"])(e.konacnaProcena),1),null!=e.rangiranje?(Object(o["t"])(),Object(o["f"])("td",k,Object(o["D"])(e.rangiranje.toFixed(2)),1)):Object(o["e"])("",!0),null==e.rangiranje?(Object(o["t"])(),Object(o["f"])("td",O,"0")):Object(o["e"])("",!0)])})),128)),Object(o["g"])("tr",null,[d,Object(o["g"])("td",null,Object(o["D"])($.kompetenceOcena.toFixed(2)),1)])])])):Object(o["e"])("",!0),0!=$.licniProc?(Object(o["t"])(),Object(o["f"])("div",h,[f,Object(o["g"])("table",g,[v,(Object(o["t"])(!0),Object(o["f"])(o["a"],null,Object(o["z"])($.licniKpi,(function(e,n){return Object(o["t"])(),Object(o["f"])("tr",{key:n},[Object(o["g"])("td",null,[Object(o["i"])(Object(o["D"])(e.name)+" ",1),Object(o["g"])("button",{class:"definicija",type:"button",name:"button",onClick:function(e){return ee.swapBoolLicni(n)}},"Definicija",8,P),$.licniBool[n].bool?(Object(o["t"])(),Object(o["f"])("div",E,Object(o["D"])($.licniBool[n].comment),1)):Object(o["e"])("",!0)]),Object(o["g"])("td",null,Object(o["D"])(e.ponder)+"%",1),Object(o["g"])("td",null,Object(o["D"])(e.samoProcena),1),Object(o["g"])("td",null,Object(o["D"])(e.konacnaProcena),1),null!=e.rangiranje?(Object(o["t"])(),Object(o["f"])("td",C,Object(o["D"])(e.rangiranje.toFixed(2)),1)):Object(o["e"])("",!0),null==e.rangiranje?(Object(o["t"])(),Object(o["f"])("td",y,"0")):Object(o["e"])("",!0)])})),128)),Object(o["g"])("tr",null,[K,Object(o["g"])("td",null,Object(o["D"])($.licniOcena.toFixed(2)),1)])])])):Object(o["e"])("",!0),0!=$.kompanijskiProc?(Object(o["t"])(),Object(o["f"])("div",D,[B,Object(o["g"])("table",w,[x,(Object(o["t"])(!0),Object(o["f"])(o["a"],null,Object(o["z"])($.kompanijskiKpi,(function(e,n){return Object(o["t"])(),Object(o["f"])("tr",{key:n},[Object(o["g"])("td",null,[Object(o["i"])(Object(o["D"])(e.name)+" ",1),Object(o["g"])("button",{class:"definicija",type:"button",name:"button",onClick:function(e){return ee.swapBoolKompanijski(n)}},"Definicija",8,z),$.kompanijskiBool[n].bool?(Object(o["t"])(),Object(o["f"])("div",F,Object(o["D"])($.kompanijskiBool[n].comment),1)):Object(o["e"])("",!0)]),Object(o["g"])("td",null,Object(o["D"])(e.ponder)+"%",1),Object(o["g"])("td",null,Object(o["D"])(e.samoProcena),1),Object(o["g"])("td",null,Object(o["D"])(e.konacnaProcena),1),null!=e.rangiranje?(Object(o["t"])(),Object(o["f"])("td",S,Object(o["D"])(e.rangiranje.toFixed(2)),1)):Object(o["e"])("",!0),null==e.rangiranje?(Object(o["t"])(),Object(o["f"])("td",U,"0")):Object(o["e"])("",!0)])})),128)),Object(o["g"])("tr",null,[R,Object(o["g"])("td",null,Object(o["D"])($.kompanijskiOcena.toFixed(2)),1)])])])):Object(o["e"])("",!0),$.ukupno<.75?(Object(o["t"])(),Object(o["f"])("div",N,[Object(o["g"])("h3",I,"Ukupan učinak: "+Object(o["D"])($.ukupno.toFixed(2)),1),L])):Object(o["e"])("",!0),$.ukupno>=.75&&$.ukupno<.99?(Object(o["t"])(),Object(o["f"])("div",T,[Object(o["g"])("h3",_,"Ukupan učinak: "+Object(o["D"])($.ukupno.toFixed(2)),1),H])):Object(o["e"])("",!0),$.ukupno>=.99&&$.ukupno<1.17?(Object(o["t"])(),Object(o["f"])("div",J,[Object(o["g"])("h3",V,"Ukupan učinak: "+Object(o["D"])($.ukupno.toFixed(2)),1),Z])):Object(o["e"])("",!0),$.ukupno>=1.17?(Object(o["t"])(),Object(o["f"])("div",A,[Object(o["g"])("h3",M,"Ukupan učinak: "+Object(o["D"])($.ukupno.toFixed(2)),1),W])):Object(o["e"])("",!0),Object(o["g"])("div",q,[G,Object(o["g"])("p",null,Object(o["D"])($.komentarSamoProcena),1)]),Object(o["g"])("div",Q,[X,Object(o["g"])("p",null,Object(o["D"])($.komentar),1)])],64)}Object(o["u"])();var $=t("1da1"),ee=t("5530"),ne=(t("96cf"),t("5502")),te={computed:Object(ne["c"])(["user","users","companys","usersSameCompany"]),data:function(){return{odgovori:[1,2,3,4],komentar:"",kompetence:[],licniKpi:[],kompanijskiKpi:[],ukupno:0,evaluatedUser:"",podredjeni:[],podredjeniName:"",podredjeniCeo:"",kompetenceOcena:0,licniOcena:0,kompanijskiOcena:0,kompanijskiProc:0,licniProc:0,kompetenceProc:0,kompetenceBool:[],kompanijskiBool:[],licniBool:[],lastEval:0,date:[],CurrentDate:"",komentarSamoProcena:""}},methods:Object(ee["a"])(Object(ee["a"])({},Object(ne["b"])(["getProfile","getCompanies","getCollegues"])),{},{onChangePodredjeni:function(e){for(var n=0;n<this.usersSameCompany.length;n++)this.usersSameCompany[n].name==e.target.value&&(this.podredjeniCeo=this.usersSameCompany[n]);for(n=0;n<this.podredjeniCeo.performanceEvaluation.length;n++)this.date.push(this.podredjeniCeo.performanceEvaluation[n].date)},onChangeDate:function(e){for(var n=0;n<this.podredjeniCeo.performanceEvaluation.length;n++)e.target.value==this.podredjeniCeo.performanceEvaluation[n].date&&(this.lastEval=n);for(this.komentarSamoProcena=this.podredjeniCeo.performanceEvaluation[this.lastEval].komentarSamoProcena,this.komentar=this.podredjeniCeo.performanceEvaluation[this.lastEval].komentar,n=0;n<this.podredjeniCeo.performanceEvaluation[this.lastEval].kompetence.length;n++)this.kompetence[n].samoProcena=this.podredjeniCeo.performanceEvaluation[this.lastEval].kompetence[n].samoProcena,this.kompetence[n].konacnaProcena=this.podredjeniCeo.performanceEvaluation[this.lastEval].kompetence[n].konacnaProcena,this.kompetence[n].rangiranje=this.podredjeniCeo.performanceEvaluation[this.lastEval].kompetence[n].rangiranje;for(n=0;n<this.podredjeniCeo.performanceEvaluation[this.lastEval].kompanijski.length;n++)this.kompanijskiKpi[n].samoProcena=this.podredjeniCeo.performanceEvaluation[this.lastEval].kompanijski[n].samoProcena,this.kompanijskiKpi[n].konacnaProcena=this.podredjeniCeo.performanceEvaluation[this.lastEval].kompanijski[n].konacnaProcena,this.kompanijskiKpi[n].rangiranje=this.podredjeniCeo.performanceEvaluation[this.lastEval].kompanijski[n].rangiranje;for(this.licniKpi=[],n=0;n<this.podredjeniCeo.performanceEvaluation[this.lastEval].licniKpi.length;n++)this.licniKpi.push(this.podredjeniCeo.performanceEvaluation[this.lastEval].licniKpi[n]);this.updateTable()},swapBoolKompetence:function(e){this.kompetenceBool[e].bool?this.kompetenceBool[e].bool=!1:this.kompetenceBool[e].bool=!0},swapBoolKompanijski:function(e){this.kompanijskiBool[e].bool?this.kompanijskiBool[e].bool=!1:this.kompanijskiBool[e].bool=!0},swapBoolLicni:function(e){this.licniBool[e].bool?this.licniBool[e].bool=!1:this.licniBool[e].bool=!0},updateTable:function(){var e={};for(c=0;c<this.companys.length;c++)this.companys[c].name==this.podredjeniCeo.type&&(e=this.companys[c]);this.lastEval=this.podredjeniCeo.performanceEvaluation.length-1;var n=e.performanceEvaluation.kompanijski.length;for(c=0;c<n;c++){var t={bool:!1,comment:e.performanceEvaluation.kompanijski[c].comment};this.kompanijskiBool.push(t)}for(n=e.performanceEvaluation.kompetence.length,c=0;c<n;c++){var o={bool:!1,comment:e.performanceEvaluation.kompetence[c].comment};this.kompetenceBool.push(o)}for(n=this.podredjeniCeo.performanceEvaluation[this.lastEval].licniKpi.length,c=0;c<n;c++){var a={bool:!1,comment:this.podredjeniCeo.performanceEvaluation[this.lastEval].licniKpi[c].comment};this.licniBool.push(a)}for(var i=0,c=0;c<this.kompetence.length;c++)null!=this.kompetence[c].konacnaProcena&&(this.kompetence[c].rangiranje=(.25*this.kompetence[c].konacnaProcena+.25)*this.kompetence[c].ponder/100,i+=this.kompetence[c].rangiranje);this.kompetenceOcena=i;var r=0;for(c=0;c<this.licniKpi.length;c++)null!=this.licniKpi[c].konacnaProcena&&(this.licniKpi[c].rangiranje=(.25*this.licniKpi[c].konacnaProcena+.25)*this.licniKpi[c].ponder/100,r+=this.licniKpi[c].rangiranje);this.licniOcena=r;var l=0;for(c=0;c<this.kompanijskiKpi.length;c++)null!=this.kompanijskiKpi[c].konacnaProcena&&(this.kompanijskiKpi[c].rangiranje=(.25*this.kompanijskiKpi[c].konacnaProcena+.25)*this.kompanijskiKpi[c].ponder/100,l+=this.kompanijskiKpi[c].rangiranje);this.kompanijskiOcena=l,this.ukupno=e.performanceEvaluation.kompetenceProcenat/100*i+e.performanceEvaluation.licniProcenat/100*r+e.performanceEvaluation.kompanijskiProcenat/100*l}}),created:function(){var e=this;return Object($["a"])(regeneratorRuntime.mark((function n(){var t,o,a,i,c,r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,e.getProfile();case 2:return n.next=4,e.getCompanies();case 4:return n.next=6,e.getCollegues(e.user.type);case 6:for(o=0;o<e.companys.length;o++)e.user.type==e.companys[o].name&&(t=e.companys[o]);for(a=t.performanceEvaluation.kompanijski.length,o=0;o<a;o++)i={bool:!1,comment:t.performanceEvaluation.kompanijski[o].comment},e.kompanijskiBool.push(i);for(a=t.performanceEvaluation.kompetence.length,o=0;o<a;o++)c={bool:!1,comment:t.performanceEvaluation.kompetence[o].comment},e.kompetenceBool.push(c);for(e.kompetenceProc=t.performanceEvaluation.kompetenceProcenat,e.licniProc=t.performanceEvaluation.licniProcenat,e.kompanijskiProc=t.performanceEvaluation.kompanijskiProcenat,o=0;o<t.performanceEvaluation.kompetence.length;o++)e.kompetence.push(t.performanceEvaluation.kompetence[o]);for(o=0;o<t.performanceEvaluation.kompanijski.length;o++)e.kompanijskiKpi.push(t.performanceEvaluation.kompanijski[o]);for(o=0;o<e.user.performanceEvaluationPodredjeni.length;o++)for(r=0;r<e.usersSameCompany.length;r++)e.user.performanceEvaluationPodredjeni[o]==e.usersSameCompany[r]._id&&e.podredjeni.push(e.usersSameCompany[r]);case 17:case"end":return n.stop()}}),n)})))()},beforeCreate:function(){document.body.className="other"}};t("006e");te.render=Y,te.__scopeId="data-v-96223790";n["default"]=te},"408a":function(e,n){var t=1..valueOf;e.exports=function(e){return t.call(e)}},b0c0:function(e,n,t){var o=t("83ab"),a=t("9bf2").f,i=Function.prototype,c=i.toString,r=/^\s*function ([^ (]*)/,l="name";o&&!(l in i)&&a(i,l,{configurable:!0,get:function(){try{return c.call(this).match(r)[1]}catch(e){return""}}})},b680:function(e,n,t){"use strict";var o=t("23e7"),a=t("a691"),i=t("408a"),c=t("1148"),r=t("d039"),l=1..toFixed,j=Math.floor,u=function(e,n,t){return 0===n?t:n%2===1?u(e,n-1,t*e):u(e*e,n/2,t)},p=function(e){var n=0,t=e;while(t>=4096)n+=12,t/=4096;while(t>=2)n+=1,t/=2;return n},s=function(e,n,t){var o=-1,a=t;while(++o<6)a+=n*e[o],e[o]=a%1e7,a=j(a/1e7)},b=function(e,n){var t=6,o=0;while(--t>=0)o+=e[t],e[t]=j(o/n),o=o%n*1e7},m=function(e){var n=6,t="";while(--n>=0)if(""!==t||0===n||0!==e[n]){var o=String(e[n]);t=""===t?o:t+c.call("0",7-o.length)+o}return t},k=l&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!r((function(){l.call({})}));o({target:"Number",proto:!0,forced:k},{toFixed:function(e){var n,t,o,r,l=i(this),j=a(e),k=[0,0,0,0,0,0],O="",d="0";if(j<0||j>20)throw RangeError("Incorrect fraction digits");if(l!=l)return"NaN";if(l<=-1e21||l>=1e21)return String(l);if(l<0&&(O="-",l=-l),l>1e-21)if(n=p(l*u(2,69,1))-69,t=n<0?l*u(2,-n,1):l/u(2,n,1),t*=4503599627370496,n=52-n,n>0){s(k,0,t),o=j;while(o>=7)s(k,1e7,0),o-=7;s(k,u(10,o,1),0),o=n-1;while(o>=23)b(k,1<<23),o-=23;b(k,1<<o),s(k,1,1),b(k,2),d=m(k)}else s(k,0,t),s(k,1<<-n,0),d=m(k)+c.call("0",j);return j>0?(r=d.length,d=O+(r<=j?"0."+c.call("0",j-r)+d:d.slice(0,r-j)+"."+d.slice(r-j))):d=O+d,d}})}}]);
//# sourceMappingURL=chunk-2ec7ffc4.97a9c07a.js.map