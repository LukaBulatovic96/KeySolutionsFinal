(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-339f5c06"],{1148:function(e,n,t){"use strict";var o=t("a691"),a=t("577e"),c=t("1d80");e.exports=function(e){var n=a(c(this)),t="",i=o(e);if(i<0||i==1/0)throw RangeError("Wrong number of repetitions");for(;i>0;(i>>>=1)&&(n+=n))1&i&&(t+=n);return t}},"1d96":function(e,n,t){"use strict";t.r(n);t("b0c0"),t("b680");var o=t("7a23");Object(o["w"])("data-v-7fcc94a8");var a=Object(o["g"])("div",{class:"header"},[Object(o["g"])("h1",null,"Formular za ocenjivanje kompetencija - Konačna Procena"),Object(o["g"])("h3",null,"(1=Ne Zadovoljava Očekivanja)"),Object(o["g"])("h3",null,"(2=Potrebno Poboljšanje)"),Object(o["g"])("h3",null,"(3=Zadovoljava Očekivanja)"),Object(o["g"])("h3",null,"(4=Iznad Očekivanja)")],-1),c={class:"form-group"},i=Object(o["g"])("label",{for:"collegue"},"Podređeni za koga se vrši konačna procena:",-1),r={class:"form-group"},l=Object(o["g"])("label",{for:"date"},"Datum Procene:",-1),u={key:0,class:"kompetence"},j=Object(o["g"])("h3",null,"Kompetence",-1),p={id:"kompetenceTable"},s=Object(o["g"])("tr",null,[Object(o["g"])("th",null,"Kompetence :"),Object(o["g"])("th",null,"Ponder"),Object(o["g"])("th",null,"Samoprocena"),Object(o["g"])("th",null,"Konacna Procena"),Object(o["g"])("th",null,"Rangiranje")],-1),b=["onClick"],m={key:0},k={key:0},O={key:1},d=Object(o["g"])("td",{colspan:"4"},"Ukupno ocena:",-1),h={key:1,class:"licni"},f=Object(o["g"])("h3",null,"Licni KPI",-1),g={id:"licniTable"},v=Object(o["g"])("tr",null,[Object(o["g"])("th",null,"Kompetence :"),Object(o["g"])("th",null,"Ponder"),Object(o["g"])("th",null,"Samoprocena"),Object(o["g"])("th",null,"Konacna Procena"),Object(o["g"])("th",null,"Rangiranje")],-1),P=["onClick"],E={key:0},C={key:0},K={key:1},y=Object(o["g"])("td",{colspan:"4"},"Ukupno ocena:",-1),D={key:2,class:"kompanijski"},B=Object(o["g"])("h3",null,"Kompanijski KPI",-1),w={id:"kompanijskiTable"},x=Object(o["g"])("tr",null,[Object(o["g"])("th",null,"Kompetence :"),Object(o["g"])("th",null,"Ponder"),Object(o["g"])("th",null,"Samoprocena"),Object(o["g"])("th",null,"Konacna Procena"),Object(o["g"])("th",null,"Rangiranje")],-1),z=["onClick"],F={key:0},S={key:0},U={key:1},R=Object(o["g"])("td",{colspan:"4"},"Ukupno ocena:",-1),N={key:3,class:"rezultat1"},I={class:"ukupno"},L=Object(o["g"])("p",null,"Rezultati loši, potrebno unapređenje za vršenje trenutne uloge ili prelazak na drugo radno mesto ",-1),T={key:4,class:"rezultat2"},V={class:"ukupno"},_=Object(o["g"])("p",null,"Rezultati dobri, ali neophodan razvoj za vršenje trenutne uloge ",-1),H={key:5,class:"rezultat3"},J={class:"ukupno"},Z=Object(o["g"])("p",null,"Apsolutno ostvarenje rezultata u trenutnoj ulozi ",-1),A={key:6,class:"rezultat4"},M={class:"ukupno"},W=Object(o["g"])("p",null,"Prebačaj rezultata u trenutnoj ulozi ",-1),q={class:"komentar"},G=Object(o["g"])("h4",null,"Komentar",-1);function Q(e,n,t,Q,X,Y){return Object(o["t"])(),Object(o["f"])(o["a"],null,[a,Object(o["g"])("div",c,[i,Object(o["L"])(Object(o["g"])("select",{name:"collegue",id:"collegue","onUpdate:modelValue":n[0]||(n[0]=function(e){return X.podredjeniName=e}),onChange:n[1]||(n[1]=function(e){return Y.onChangePodredjeni(e)})},[(Object(o["t"])(!0),Object(o["f"])(o["a"],null,Object(o["z"])(X.podredjeni,(function(e){return Object(o["t"])(),Object(o["f"])("option",{key:e.name},Object(o["D"])(e.name),1)})),128))],544),[[o["H"],X.podredjeniName]])]),Object(o["g"])("div",r,[l,Object(o["L"])(Object(o["g"])("select",{name:"date",id:"collegue","onUpdate:modelValue":n[2]||(n[2]=function(e){return X.CurrentDate=e}),onChange:n[3]||(n[3]=function(e){return Y.onChangeDate(e)})},[(Object(o["t"])(!0),Object(o["f"])(o["a"],null,Object(o["z"])(X.date,(function(e){return Object(o["t"])(),Object(o["f"])("option",{key:e},Object(o["D"])(e),1)})),128))],544),[[o["H"],X.CurrentDate]])]),0!=X.kompetenceProc?(Object(o["t"])(),Object(o["f"])("div",u,[j,Object(o["g"])("table",p,[s,(Object(o["t"])(!0),Object(o["f"])(o["a"],null,Object(o["z"])(X.kompetence,(function(e,n){return Object(o["t"])(),Object(o["f"])("tr",{key:n},[Object(o["g"])("td",null,[Object(o["i"])(Object(o["D"])(e.name)+" ",1),Object(o["g"])("button",{type:"button",name:"button",onClick:function(e){return Y.swapBoolKompetence(n)}},"Komentar",8,b),X.kompetenceBool[n].bool?(Object(o["t"])(),Object(o["f"])("div",m,Object(o["D"])(X.kompetenceBool[n].comment),1)):Object(o["e"])("",!0)]),Object(o["g"])("td",null,Object(o["D"])(e.ponder)+"%",1),Object(o["g"])("td",null,Object(o["D"])(e.samoProcena),1),Object(o["g"])("td",null,Object(o["D"])(e.konacnaProcena),1),null!=e.rangiranje?(Object(o["t"])(),Object(o["f"])("td",k,Object(o["D"])(e.rangiranje.toFixed(2)),1)):Object(o["e"])("",!0),null==e.rangiranje?(Object(o["t"])(),Object(o["f"])("td",O,"0")):Object(o["e"])("",!0)])})),128)),Object(o["g"])("tr",null,[d,Object(o["g"])("td",null,Object(o["D"])(X.kompetenceOcena.toFixed(2)),1)])])])):Object(o["e"])("",!0),0!=X.licniProc?(Object(o["t"])(),Object(o["f"])("div",h,[f,Object(o["g"])("table",g,[v,(Object(o["t"])(!0),Object(o["f"])(o["a"],null,Object(o["z"])(X.licniKpi,(function(e,n){return Object(o["t"])(),Object(o["f"])("tr",{key:n},[Object(o["g"])("td",null,[Object(o["i"])(Object(o["D"])(e.name)+" ",1),Object(o["g"])("button",{type:"button",name:"button",onClick:function(e){return Y.swapBoolLicni(n)}},"Komentar",8,P),X.licniBool[n].bool?(Object(o["t"])(),Object(o["f"])("div",E,Object(o["D"])(X.licniBool[n].comment),1)):Object(o["e"])("",!0)]),Object(o["g"])("td",null,Object(o["D"])(e.ponder)+"%",1),Object(o["g"])("td",null,Object(o["D"])(e.samoProcena),1),Object(o["g"])("td",null,Object(o["D"])(e.konacnaProcena),1),null!=e.rangiranje?(Object(o["t"])(),Object(o["f"])("td",C,Object(o["D"])(e.rangiranje.toFixed(2)),1)):Object(o["e"])("",!0),null==e.rangiranje?(Object(o["t"])(),Object(o["f"])("td",K,"0")):Object(o["e"])("",!0)])})),128)),Object(o["g"])("tr",null,[y,Object(o["g"])("td",null,Object(o["D"])(X.licniOcena.toFixed(2)),1)])])])):Object(o["e"])("",!0),0!=X.kompanijskiProc?(Object(o["t"])(),Object(o["f"])("div",D,[B,Object(o["g"])("table",w,[x,(Object(o["t"])(!0),Object(o["f"])(o["a"],null,Object(o["z"])(X.kompanijskiKpi,(function(e,n){return Object(o["t"])(),Object(o["f"])("tr",{key:n},[Object(o["g"])("td",null,[Object(o["i"])(Object(o["D"])(e.name)+" ",1),Object(o["g"])("button",{type:"button",name:"button",onClick:function(e){return Y.swapBoolKompanijski(n)}},"Komentar",8,z),X.kompanijskiBool[n].bool?(Object(o["t"])(),Object(o["f"])("div",F,Object(o["D"])(X.kompanijskiBool[n].comment),1)):Object(o["e"])("",!0)]),Object(o["g"])("td",null,Object(o["D"])(e.ponder)+"%",1),Object(o["g"])("td",null,Object(o["D"])(e.samoProcena),1),Object(o["g"])("td",null,Object(o["D"])(e.konacnaProcena),1),null!=e.rangiranje?(Object(o["t"])(),Object(o["f"])("td",S,Object(o["D"])(e.rangiranje.toFixed(2)),1)):Object(o["e"])("",!0),null==e.rangiranje?(Object(o["t"])(),Object(o["f"])("td",U,"0")):Object(o["e"])("",!0)])})),128)),Object(o["g"])("tr",null,[R,Object(o["g"])("td",null,Object(o["D"])(X.kompanijskiOcena.toFixed(2)),1)])])])):Object(o["e"])("",!0),X.ukupno<.75?(Object(o["t"])(),Object(o["f"])("div",N,[Object(o["g"])("h3",I,"Ukupan učinak: "+Object(o["D"])(X.ukupno.toFixed(2)),1),L])):Object(o["e"])("",!0),X.ukupno>=.75&&X.ukupno<.99?(Object(o["t"])(),Object(o["f"])("div",T,[Object(o["g"])("h3",V,"Ukupan učinak: "+Object(o["D"])(X.ukupno.toFixed(2)),1),_])):Object(o["e"])("",!0),X.ukupno>=.99&&X.ukupno<1.17?(Object(o["t"])(),Object(o["f"])("div",H,[Object(o["g"])("h3",J,"Ukupan učinak: "+Object(o["D"])(X.ukupno.toFixed(2)),1),Z])):Object(o["e"])("",!0),X.ukupno>=1.17?(Object(o["t"])(),Object(o["f"])("div",A,[Object(o["g"])("h3",M,"Ukupan učinak: "+Object(o["D"])(X.ukupno.toFixed(2)),1),W])):Object(o["e"])("",!0),Object(o["g"])("div",q,[G,Object(o["L"])(Object(o["g"])("input",{class:"form-control",type:"text",placeholder:"",name:"komentar","onUpdate:modelValue":n[4]||(n[4]=function(e){return X.komentar=e}),id:"komentar"},null,512),[[o["I"],X.komentar]])])],64)}Object(o["u"])();var X=t("1da1"),Y=t("5530"),$=(t("96cf"),t("5502")),ee={computed:Object($["c"])(["user","users","companys","usersSameCompany"]),data:function(){return{odgovori:[1,2,3,4],komentar:"",kompetence:[],licniKpi:[],kompanijskiKpi:[],ukupno:0,evaluatedUser:"",podredjeni:[],podredjeniName:"",podredjeniCeo:"",kompetenceOcena:0,licniOcena:0,kompanijskiOcena:0,kompanijskiProc:0,licniProc:0,kompetenceProc:0,kompetenceBool:[],kompanijskiBool:[],licniBool:[],lastEval:0,date:[],CurrentDate:""}},methods:Object(Y["a"])(Object(Y["a"])({},Object($["b"])(["getProfile","getCompanies","getCollegues"])),{},{onChangePodredjeni:function(e){for(var n=0;n<this.usersSameCompany.length;n++)this.usersSameCompany[n].name==e.target.value&&(this.podredjeniCeo=this.usersSameCompany[n]);for(n=0;n<this.podredjeniCeo.performanceEvaluation.length;n++)this.date.push(this.podredjeniCeo.performanceEvaluation[n].date)},onChangeDate:function(e){for(var n=0;n<this.podredjeniCeo.performanceEvaluation.length;n++)e.target.value==this.podredjeniCeo.performanceEvaluation[n].date&&(this.lastEval=n);for(n=0;n<this.podredjeniCeo.performanceEvaluation[this.lastEval].kompetence.length;n++)this.kompetence[n].samoProcena=this.podredjeniCeo.performanceEvaluation[this.lastEval].kompetence[n].samoProcena,this.kompetence[n].konacnaProcena=this.podredjeniCeo.performanceEvaluation[this.lastEval].kompetence[n].konacnaProcena,this.kompetence[n].rangiranje=this.podredjeniCeo.performanceEvaluation[this.lastEval].kompetence[n].rangiranje;for(n=0;n<this.podredjeniCeo.performanceEvaluation[this.lastEval].kompanijski.length;n++)this.kompanijskiKpi[n].samoProcena=this.podredjeniCeo.performanceEvaluation[this.lastEval].kompanijski[n].samoProcena,this.kompanijskiKpi[n].konacnaProcena=this.podredjeniCeo.performanceEvaluation[this.lastEval].kompanijski[n].konacnaProcena,this.kompanijskiKpi[n].rangiranje=this.podredjeniCeo.performanceEvaluation[this.lastEval].kompanijski[n].rangiranje;for(this.licniKpi=[],n=0;n<this.podredjeniCeo.performanceEvaluation[this.lastEval].licniKpi.length;n++)this.licniKpi.push(this.podredjeniCeo.performanceEvaluation[this.lastEval].licniKpi[n]);this.updateTable()},swapBoolKompetence:function(e){this.kompetenceBool[e].bool?this.kompetenceBool[e].bool=!1:this.kompetenceBool[e].bool=!0},swapBoolKompanijski:function(e){this.kompanijskiBool[e].bool?this.kompanijskiBool[e].bool=!1:this.kompanijskiBool[e].bool=!0},swapBoolLicni:function(e){this.licniBool[e].bool?this.licniBool[e].bool=!1:this.licniBool[e].bool=!0},updateTable:function(){var e={};for(i=0;i<this.companys.length;i++)this.companys[i].name==this.podredjeniCeo.type&&(e=this.companys[i]);this.lastEval=this.podredjeniCeo.performanceEvaluation.length-1;var n=e.performanceEvaluation.kompanijski.length;for(i=0;i<n;i++){var t={bool:!1,comment:e.performanceEvaluation.kompanijski[i].comment};this.kompanijskiBool.push(t)}for(n=e.performanceEvaluation.kompetence.length,i=0;i<n;i++){var o={bool:!1,comment:e.performanceEvaluation.kompetence[i].comment};this.kompetenceBool.push(o)}for(n=this.podredjeniCeo.performanceEvaluation[this.lastEval].licniKpi.length,i=0;i<n;i++){var a={bool:!1,comment:this.podredjeniCeo.performanceEvaluation[this.lastEval].licniKpi[i].comment};this.licniBool.push(a)}for(var c=0,i=0;i<this.kompetence.length;i++)null!=this.kompetence[i].konacnaProcena&&(this.kompetence[i].rangiranje=(.25*this.kompetence[i].konacnaProcena+.25)*this.kompetence[i].ponder/100,c+=this.kompetence[i].rangiranje);this.kompetenceOcena=c;var r=0;for(i=0;i<this.licniKpi.length;i++)null!=this.licniKpi[i].konacnaProcena&&(this.licniKpi[i].rangiranje=(.25*this.licniKpi[i].konacnaProcena+.25)*this.licniKpi[i].ponder/100,r+=this.licniKpi[i].rangiranje);this.licniOcena=r;var l=0;for(i=0;i<this.kompanijskiKpi.length;i++)null!=this.kompanijskiKpi[i].konacnaProcena&&(this.kompanijskiKpi[i].rangiranje=(.25*this.kompanijskiKpi[i].konacnaProcena+.25)*this.kompanijskiKpi[i].ponder/100,l+=this.kompanijskiKpi[i].rangiranje);this.kompanijskiOcena=l,this.ukupno=e.performanceEvaluation.kompetenceProcenat/100*c+e.performanceEvaluation.licniProcenat/100*r+e.performanceEvaluation.kompanijskiProcenat/100*l}}),created:function(){var e=this;return Object(X["a"])(regeneratorRuntime.mark((function n(){var t,o,a,c,i,r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,e.getProfile();case 2:return n.next=4,e.getCompanies();case 4:return n.next=6,e.getCollegues(e.user.type);case 6:for(o=0;o<e.companys.length;o++)e.user.type==e.companys[o].name&&(t=e.companys[o]);for(a=t.performanceEvaluation.kompanijski.length,o=0;o<a;o++)c={bool:!1,comment:t.performanceEvaluation.kompanijski[o].comment},e.kompanijskiBool.push(c);for(a=t.performanceEvaluation.kompetence.length,o=0;o<a;o++)i={bool:!1,comment:t.performanceEvaluation.kompetence[o].comment},e.kompetenceBool.push(i);for(e.kompetenceProc=t.performanceEvaluation.kompetenceProcenat,e.licniProc=t.performanceEvaluation.licniProcenat,e.kompanijskiProc=t.performanceEvaluation.kompanijskiProcenat,o=0;o<t.performanceEvaluation.kompetence.length;o++)e.kompetence.push(t.performanceEvaluation.kompetence[o]);for(o=0;o<t.performanceEvaluation.kompanijski.length;o++)e.kompanijskiKpi.push(t.performanceEvaluation.kompanijski[o]);for(o=0;o<e.user.performanceEvaluationPodredjeni.length;o++)for(r=0;r<e.usersSameCompany.length;r++)e.user.performanceEvaluationPodredjeni[o]==e.usersSameCompany[r]._id&&e.podredjeni.push(e.usersSameCompany[r]);case 17:case"end":return n.stop()}}),n)})))()}};t("37f6");ee.render=Q,ee.__scopeId="data-v-7fcc94a8";n["default"]=ee},"37f6":function(e,n,t){"use strict";t("9d08")},"408a":function(e,n){var t=1..valueOf;e.exports=function(e){return t.call(e)}},"9d08":function(e,n,t){},b0c0:function(e,n,t){var o=t("83ab"),a=t("9bf2").f,c=Function.prototype,i=c.toString,r=/^\s*function ([^ (]*)/,l="name";o&&!(l in c)&&a(c,l,{configurable:!0,get:function(){try{return i.call(this).match(r)[1]}catch(e){return""}}})},b680:function(e,n,t){"use strict";var o=t("23e7"),a=t("a691"),c=t("408a"),i=t("1148"),r=t("d039"),l=1..toFixed,u=Math.floor,j=function(e,n,t){return 0===n?t:n%2===1?j(e,n-1,t*e):j(e*e,n/2,t)},p=function(e){var n=0,t=e;while(t>=4096)n+=12,t/=4096;while(t>=2)n+=1,t/=2;return n},s=function(e,n,t){var o=-1,a=t;while(++o<6)a+=n*e[o],e[o]=a%1e7,a=u(a/1e7)},b=function(e,n){var t=6,o=0;while(--t>=0)o+=e[t],e[t]=u(o/n),o=o%n*1e7},m=function(e){var n=6,t="";while(--n>=0)if(""!==t||0===n||0!==e[n]){var o=String(e[n]);t=""===t?o:t+i.call("0",7-o.length)+o}return t},k=l&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!r((function(){l.call({})}));o({target:"Number",proto:!0,forced:k},{toFixed:function(e){var n,t,o,r,l=c(this),u=a(e),k=[0,0,0,0,0,0],O="",d="0";if(u<0||u>20)throw RangeError("Incorrect fraction digits");if(l!=l)return"NaN";if(l<=-1e21||l>=1e21)return String(l);if(l<0&&(O="-",l=-l),l>1e-21)if(n=p(l*j(2,69,1))-69,t=n<0?l*j(2,-n,1):l/j(2,n,1),t*=4503599627370496,n=52-n,n>0){s(k,0,t),o=u;while(o>=7)s(k,1e7,0),o-=7;s(k,j(10,o,1),0),o=n-1;while(o>=23)b(k,1<<23),o-=23;b(k,1<<o),s(k,1,1),b(k,2),d=m(k)}else s(k,0,t),s(k,1<<-n,0),d=m(k)+i.call("0",u);return u>0?(r=d.length,d=O+(r<=u?"0."+i.call("0",u-r)+d:d.slice(0,r-u)+"."+d.slice(r-u))):d=O+d,d}})}}]);
//# sourceMappingURL=chunk-339f5c06.44ea40fe.js.map