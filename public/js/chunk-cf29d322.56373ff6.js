(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-cf29d322"],{b0c0:function(e,t,a){var c=a("83ab"),n=a("9bf2").f,s=Function.prototype,i=s.toString,r=/^\s*function ([^ (]*)/,o="name";c&&!(o in s)&&n(s,o,{configurable:!0,get:function(){try{return i.call(this).match(r)[1]}catch(e){return""}}})},baf5:function(e,t,a){},c66d:function(e,t,a){"use strict";a.r(t);var c=a("7a23");Object(c["w"])("data-v-d88aa2a2");var n={class:"container"},s={key:0},i={class:"validation"},r={key:0,class:"testFinished"},o=Object(c["g"])("h2",null,"Vitality Quotient Upitnik je urađen",-1),l=[o],b=Object(c["g"])("div",{class:"test"},[Object(c["g"])("h2",null,"Vitality Quotient Upitnik")],-1),u=Object(c["g"])("div",{class:"test"},[Object(c["g"])("h2",null,"Procena Edukacije Upitnik")],-1),j={key:2},O=Object(c["g"])("div",{class:"test"},[Object(c["g"])("h2",null,"NEO PI-R Test Ličnosti")],-1),d={key:1,class:"testFinished"},v=Object(c["g"])("h2",null,"Test Ličnosti je urađen",-1),f=[v],p={key:3},g=Object(c["g"])("div",{class:"test"},[Object(c["g"])("h2",null,"Upitnik za istraživanje stavova zaposlenih")],-1),h={key:1,class:"testFinished"},k=Object(c["g"])("h2",null,"Upitnik za istraživanje stavova zaposlenih je uradjen",-1),m=[k],y={key:4},E=Object(c["g"])("div",{class:"test"},[Object(c["g"])("h2",null,"360 FeedBack Upitnik")],-1),P={key:5},T=Object(c["g"])("div",{class:"test"},[Object(c["g"])("h2",null,"Belbinov Upitnik")],-1),K={key:1,class:"testFinished"},w=Object(c["g"])("h2",null,"Belbinov Upitnik je urađen",-1),_=[w],B=Object(c["g"])("div",{class:"test"},[Object(c["g"])("h2",null,"FeedBack 360 izvestaj za sve zaposlene")],-1),z=Object(c["g"])("div",{class:"test"},[Object(c["g"])("h2",null,"Performance Evaluation Samoprocena")],-1),F=Object(c["g"])("div",{class:"test"},[Object(c["g"])("h2",null,"Performance Evaluation Pregled Samoprocene")],-1),U=Object(c["g"])("div",{class:"test"},[Object(c["g"])("h2",null,"Performance Evaluation Konačna Procena")],-1),I=Object(c["g"])("div",{class:"test"},[Object(c["g"])("h2",null,"Performance Evaluation Konačna Procena Pregled")],-1),S=Object(c["g"])("div",{class:"test"},[Object(c["g"])("h2",null,"Performance Evaluation Konačna Procena Istorija")],-1),V=Object(c["g"])("div",{class:"test"},[Object(c["g"])("h2",null,"Psihološke Procene Zaposlenih")],-1);function L(e,t,a,o,v,k){var w=Object(c["B"])("router-link");return Object(c["t"])(),Object(c["f"])("div",n,[e.user.availableTest.vqTest?(Object(c["t"])(),Object(c["f"])("div",s,[Object(c["g"])("div",i,Object(c["D"])(v.validation),1),e.user.vqTest.finished?(Object(c["t"])(),Object(c["f"])("div",r,l)):Object(c["e"])("",!0),e.user.vqTest.finished?Object(c["e"])("",!0):(Object(c["t"])(),Object(c["d"])(w,{key:1,to:"/vqTest",class:"router"},{default:Object(c["K"])((function(){return[b]})),_:1}))])):Object(c["e"])("",!0),e.user.availableTest.procenaEdukacije?(Object(c["t"])(),Object(c["d"])(w,{key:1,to:"/procenaEdukacije",class:"router"},{default:Object(c["K"])((function(){return[u]})),_:1})):Object(c["e"])("",!0),e.user.availableTest.testLicnosti?(Object(c["t"])(),Object(c["f"])("div",j,[e.user.testLicnosti.finished?Object(c["e"])("",!0):(Object(c["t"])(),Object(c["d"])(w,{key:0,to:"/testLicnosti",class:"router"},{default:Object(c["K"])((function(){return[O]})),_:1})),e.user.testLicnosti.finished?(Object(c["t"])(),Object(c["f"])("div",d,f)):Object(c["e"])("",!0)])):Object(c["e"])("",!0),e.user.availableTest.stavoviZaposlenih?(Object(c["t"])(),Object(c["f"])("div",p,[e.user.stavoviZaposlenihFinished?Object(c["e"])("",!0):(Object(c["t"])(),Object(c["d"])(w,{key:0,to:"/stavoviZaposlenih",class:"router"},{default:Object(c["K"])((function(){return[g]})),_:1})),e.user.stavoviZaposlenihFinished?(Object(c["t"])(),Object(c["f"])("div",h,m)):Object(c["e"])("",!0)])):Object(c["e"])("",!0),e.user.availableTest.feedbackTest?(Object(c["t"])(),Object(c["f"])("div",y,[Object(c["j"])(w,{to:"/feedBackTest",class:"router"},{default:Object(c["K"])((function(){return[E]})),_:1})])):Object(c["e"])("",!0),e.user.availableTest.belbinTest?(Object(c["t"])(),Object(c["f"])("div",P,[e.user.belbinTest.finished?Object(c["e"])("",!0):(Object(c["t"])(),Object(c["d"])(w,{key:0,to:"/belbin",class:"router"},{default:Object(c["K"])((function(){return[T]})),_:1})),e.user.belbinTest.finished?(Object(c["t"])(),Object(c["f"])("div",K,_)):Object(c["e"])("",!0)])):Object(c["e"])("",!0),e.user.availableTest.feedBackReport?(Object(c["t"])(),Object(c["d"])(w,{key:6,to:"/feedBackIzvestaj",class:"router"},{default:Object(c["K"])((function(){return[B]})),_:1})):Object(c["e"])("",!0),v.samoprocena?(Object(c["t"])(),Object(c["d"])(w,{key:7,to:"/performanceEvaluation",class:"router"},{default:Object(c["K"])((function(){return[z]})),_:1})):Object(c["e"])("",!0),v.samoprocenaView?(Object(c["t"])(),Object(c["d"])(w,{key:8,to:"/performanceEvaluationViewOnly",class:"router"},{default:Object(c["K"])((function(){return[F]})),_:1})):Object(c["e"])("",!0),e.user.performanceEvaluationPodredjeni.length>0?(Object(c["t"])(),Object(c["d"])(w,{key:9,to:"/performanceEvaluationKonacna",class:"router"},{default:Object(c["K"])((function(){return[U]})),_:1})):Object(c["e"])("",!0),e.user.availableTest.kpiPregled?(Object(c["t"])(),Object(c["d"])(w,{key:10,to:"/konacnaView",class:"router"},{default:Object(c["K"])((function(){return[I]})),_:1})):Object(c["e"])("",!0),e.user.performanceEvaluationPodredjeni.length>0?(Object(c["t"])(),Object(c["d"])(w,{key:11,to:"/performanceEvaluationKonacnaHistory",class:"router"},{default:Object(c["K"])((function(){return[S]})),_:1})):Object(c["e"])("",!0),e.user.availableTest.procenaPregled?(Object(c["t"])(),Object(c["d"])(w,{key:12,to:"/psiholoskeProcene",class:"router"},{default:Object(c["K"])((function(){return[V]})),_:1})):Object(c["e"])("",!0)])}Object(c["u"])();var N=a("1da1"),R=a("5530"),Z=(a("96cf"),a("b0c0"),a("5502")),q={data:function(){return{lastEval:0,samoprocena:!1,samoprocenaView:!1,validation:""}},computed:Object(Z["c"])(["user"]),methods:Object(R["a"])({},Object(Z["b"])(["getProfile"])),created:function(){var e=this;return Object(N["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.getProfile();case 2:console.log("IME USERA:"+e.user.name),console.log("availableTest: "+e.user.availableTest.procenaEdukacije),a=localStorage.getItem("validationName"),""!=a&&null!=a&&(e.validation="Uspesno popunjen FeedBack 360 izvestaj za "+a+".",localStorage.setItem("validationName","")),null!=e.user.performanceEvaluation&&e.user.performanceEvaluation.length>0&&(e.lastEval=e.user.performanceEvaluation.length-1,e.samoprocena=!0),e.samoprocena&&e.user.performanceEvaluation[e.lastEval].finished&&(e.samoprocenaView=!0,e.samoprocena=!1);case 8:case"end":return t.stop()}}),t)})))()},beforeCreate:function(){/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)?document.body.className="profileMobile":document.body.className="profile"}};a("eb53");q.render=L,q.__scopeId="data-v-d88aa2a2";t["default"]=q},eb53:function(e,t,a){"use strict";a("baf5")}}]);
//# sourceMappingURL=chunk-cf29d322.56373ff6.js.map