(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4a3e7c2d"],{"0a8b":function(e,t,a){},"8df0":function(e,t,a){"use strict";a("0a8b")},c66d:function(e,t,a){"use strict";a.r(t);var c=a("7a23");Object(c["w"])("data-v-33ee6e8a");var n={class:"container"},s={key:0},i={key:0,class:"testFinished"},r=Object(c["g"])("h2",null,"Vitality Quotient Upitnik je urađen",-1),o=[r],l=Object(c["g"])("div",{class:"test"},[Object(c["g"])("h2",null,"Vitality Quotient Upitnik")],-1),u={key:1},b=Object(c["g"])("div",{class:"test"},[Object(c["g"])("h2",null,"NEO PI-R Test Ličnosti")],-1),j={key:1,class:"testFinished"},O=Object(c["g"])("h2",null,"Test Ličnosti je urađen",-1),d=[O],v={key:2},f=Object(c["g"])("div",{class:"test"},[Object(c["g"])("h2",null,"Upitnik za istraživanje stavova zaposlenih")],-1),p={key:1,class:"testFinished"},h=Object(c["g"])("h2",null,"Upitnik za istraživanje stavova zaposlenih je uradjen",-1),g=[h],k={key:3},m=Object(c["g"])("div",{class:"test"},[Object(c["g"])("h2",null,"360 FeedBack Upitnik")],-1),y={key:4},E=Object(c["g"])("div",{class:"test"},[Object(c["g"])("h2",null,"Belbinov Upitnik")],-1),P={key:1,class:"testFinished"},T=Object(c["g"])("h2",null,"Belbinov Upitnik je urađen",-1),w=[T],K=Object(c["g"])("div",{class:"test"},[Object(c["g"])("h2",null,"FeedBack 360 izvestaj za sve zaposlene")],-1),_=Object(c["g"])("div",{class:"test"},[Object(c["g"])("h2",null,"Performance Evaluation Samoprocena")],-1),B=Object(c["g"])("div",{class:"test"},[Object(c["g"])("h2",null,"Performance Evaluation Pregled Samoprocene")],-1),z=Object(c["g"])("div",{class:"test"},[Object(c["g"])("h2",null,"Performance Evaluation Konačna Procena")],-1),F=Object(c["g"])("div",{class:"test"},[Object(c["g"])("h2",null,"Performance Evaluation Konačna Procena Pregled")],-1),U=Object(c["g"])("div",{class:"test"},[Object(c["g"])("h2",null,"Performance Evaluation Konačna Procena Istorija")],-1);function V(e,t,a,r,O,h){var T=Object(c["B"])("router-link");return Object(c["t"])(),Object(c["f"])("div",n,[e.user.availableTest.vqTest?(Object(c["t"])(),Object(c["f"])("div",s,[e.user.vqTest.finished?(Object(c["t"])(),Object(c["f"])("div",i,o)):Object(c["e"])("",!0),e.user.vqTest.finished?Object(c["e"])("",!0):(Object(c["t"])(),Object(c["d"])(T,{key:1,to:"/vqTest",class:"router"},{default:Object(c["K"])((function(){return[l]})),_:1}))])):Object(c["e"])("",!0),e.user.availableTest.testLicnosti?(Object(c["t"])(),Object(c["f"])("div",u,[e.user.testLicnosti.finished?Object(c["e"])("",!0):(Object(c["t"])(),Object(c["d"])(T,{key:0,to:"/testLicnosti",class:"router"},{default:Object(c["K"])((function(){return[b]})),_:1})),e.user.testLicnosti.finished?(Object(c["t"])(),Object(c["f"])("div",j,d)):Object(c["e"])("",!0)])):Object(c["e"])("",!0),e.user.availableTest.stavoviZaposlenih?(Object(c["t"])(),Object(c["f"])("div",v,[e.user.stavoviZaposlenihFinished?Object(c["e"])("",!0):(Object(c["t"])(),Object(c["d"])(T,{key:0,to:"/stavoviZaposlenih",class:"router"},{default:Object(c["K"])((function(){return[f]})),_:1})),e.user.stavoviZaposlenihFinished?(Object(c["t"])(),Object(c["f"])("div",p,g)):Object(c["e"])("",!0)])):Object(c["e"])("",!0),e.user.availableTest.feedbackTest?(Object(c["t"])(),Object(c["f"])("div",k,[Object(c["j"])(T,{to:"/feedBackTest",class:"router"},{default:Object(c["K"])((function(){return[m]})),_:1})])):Object(c["e"])("",!0),e.user.availableTest.belbinTest?(Object(c["t"])(),Object(c["f"])("div",y,[e.user.belbinTest.finished?Object(c["e"])("",!0):(Object(c["t"])(),Object(c["d"])(T,{key:0,to:"/belbin",class:"router"},{default:Object(c["K"])((function(){return[E]})),_:1})),e.user.belbinTest.finished?(Object(c["t"])(),Object(c["f"])("div",P,w)):Object(c["e"])("",!0)])):Object(c["e"])("",!0),e.user.availableTest.feedBackReport?(Object(c["t"])(),Object(c["d"])(T,{key:5,to:"/feedBackIzvestaj",class:"router"},{default:Object(c["K"])((function(){return[K]})),_:1})):Object(c["e"])("",!0),O.samoprocena?(Object(c["t"])(),Object(c["d"])(T,{key:6,to:"/performanceEvaluation",class:"router"},{default:Object(c["K"])((function(){return[_]})),_:1})):Object(c["e"])("",!0),O.samoprocenaView?(Object(c["t"])(),Object(c["d"])(T,{key:7,to:"/performanceEvaluationViewOnly",class:"router"},{default:Object(c["K"])((function(){return[B]})),_:1})):Object(c["e"])("",!0),e.user.performanceEvaluationPodredjeni.length>0?(Object(c["t"])(),Object(c["d"])(T,{key:8,to:"/performanceEvaluationKonacna",class:"router"},{default:Object(c["K"])((function(){return[z]})),_:1})):Object(c["e"])("",!0),e.user.availableTest.kpiPregled?(Object(c["t"])(),Object(c["d"])(T,{key:9,to:"/konacnaView",class:"router"},{default:Object(c["K"])((function(){return[F]})),_:1})):Object(c["e"])("",!0),e.user.performanceEvaluationPodredjeni.length>0?(Object(c["t"])(),Object(c["d"])(T,{key:10,to:"/performanceEvaluationKonacnaHistory",class:"router"},{default:Object(c["K"])((function(){return[U]})),_:1})):Object(c["e"])("",!0)])}Object(c["u"])();var L=a("1da1"),I=a("5530"),q=(a("96cf"),a("5502")),R={data:function(){return{lastEval:0,samoprocena:!1,samoprocenaView:!1}},computed:Object(q["c"])(["user"]),methods:Object(I["a"])({},Object(q["b"])(["getProfile"])),created:function(){var e=this;return Object(L["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.getProfile();case 2:null!=e.user.performanceEvaluation&&e.user.performanceEvaluation.length>0&&(e.lastEval=e.user.performanceEvaluation.length-1,e.samoprocena=!0),console.log("samoProcena: "+e.samoprocena),e.samoprocena&&(console.log("uso u if prvi"),e.user.performanceEvaluation[e.lastEval].finished&&(console.log("uso u if drugi"),e.samoprocenaView=!0,e.samoprocena=!1));case 5:case"end":return t.stop()}}),t)})))()},beforeCreate:function(){/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)?document.body.className="profileMobile":document.body.className="profile"}};a("8df0");R.render=V,R.__scopeId="data-v-33ee6e8a";t["default"]=R}}]);
//# sourceMappingURL=chunk-4a3e7c2d.81ca64a5.js.map