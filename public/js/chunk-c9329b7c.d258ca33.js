(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c9329b7c"],{"7f68":function(e,t,n){"use strict";n.r(t);var a=n("7a23");Object(a["w"])("data-v-6593a8c8");var s=Object(a["g"])("h1",null,"Planner",-1),r={class:"trenutniDan"},c={style:{"text-align":"center"}},i={class:"validation"},o={class:"submitDiv"},h={class:"headerKalendar"},u={class:"leva"},l={class:"mesec"},b={class:"desna"},j=Object(a["h"])('<p class="radniDan" data-v-6593a8c8>PONEDELJAK</p><p class="radniDan" data-v-6593a8c8>UTORAK</p><p class="radniDan" data-v-6593a8c8>SREDA</p><p class="radniDan" data-v-6593a8c8>ČETVRTAK</p><p class="radniDan" data-v-6593a8c8>PETAK</p><p class="vikend" data-v-6593a8c8>SUBOTA</p><p class="vikend" data-v-6593a8c8>NEDELJA</p>',7),m={class:"kalendar"},d=["onClick"],D={style:{"font-size":"small"}};function p(e,t,n,p,v,f){return Object(a["t"])(),Object(a["f"])(a["a"],null,[s,Object(a["g"])("div",r,[Object(a["g"])("h3",c,Object(a["D"])(v.trenutniDan.dan)+"."+Object(a["D"])(v.trenutniDan.mesec),1),Object(a["L"])(Object(a["g"])("textarea",{class:"form-control",id:"exampleFormControlTextarea1",rows:"10","onUpdate:modelValue":t[0]||(t[0]=function(e){return v.trenutniDan.komentar=e})},null,512),[[a["I"],v.trenutniDan.komentar]]),Object(a["g"])("div",i,Object(a["D"])(v.validation),1),Object(a["g"])("div",o,[Object(a["g"])("button",{class:"btnSub",onClick:t[1]||(t[1]=function(){return f.submit&&f.submit.apply(f,arguments)})},"Sačuvaj Izmene")])]),Object(a["g"])("div",h,[Object(a["g"])("div",u,[Object(a["g"])("button",{type:"button",class:"left",onClick:t[2]||(t[2]=function(){return f.lastMonth&&f.lastMonth.apply(f,arguments)})},"prethodni")]),Object(a["g"])("div",l,[Object(a["g"])("h2",null,Object(a["D"])(v.mesec)+" 2022.",1)]),Object(a["g"])("div",b,[Object(a["g"])("button",{type:"button",class:"right",onClick:t[3]||(t[3]=function(){return f.nextMonth&&f.nextMonth.apply(f,arguments)})},"naredni")]),j]),Object(a["g"])("div",m,[(Object(a["t"])(!0),Object(a["f"])(a["a"],null,Object(a["z"])(v.dani,(function(e,t){return Object(a["t"])(),Object(a["f"])("div",{class:"dan",key:e.dan},[0!=e.dan?(Object(a["t"])(),Object(a["f"])("button",{key:0,type:"button",class:"btn btn-success",onClick:function(e){return f.selectTrenutni(t)},style:{"font-size":"x-small"}},Object(a["D"])(e.dan)+".",9,d)):Object(a["e"])("",!0),Object(a["g"])("p",D,Object(a["D"])(e.komentar),1)])})),128))])],64)}Object(a["u"])();var v=n("1da1"),f=n("5530"),O=(n("96cf"),n("99af"),n("5502")),g={data:function(){return{currentDate:{},mesec:"",mesecBroj:0,dani:[],brojDana:0,prviDanUMesecu:0,danUNedelji:0,trenutniDan:{},godina:2022,currentPlanner:{},validation:""}},computed:Object(O["c"])(["formulari","user","planners"]),methods:Object(f["a"])(Object(f["a"])({},Object(O["b"])(["getAllFormulars","getProfile","submitMesecPlanner","getAllPlanners","putPlanner"])),{},{selectTrenutni:function(e){this.trenutniDan=this.dani[e]},submit:function(){var e=this;return Object(v["a"])(regeneratorRuntime.mark((function t(){var n,a,s,r,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:for(e.validation="",n=e.mesec,a=e.godina,s=[],r=0;r<e.dani.length;r++)0!=e.dani[r].dan&&s.push(e.dani[r]);return c={mesec:n,godina:a,dani:s,id:e.currentPlanner._id},t.next=8,e.putPlanner(c);case 8:return e.validation="Uspesno sacuvan mesec ".concat(n," ").concat(a,"."),t.next=11,e.getAllPlanners();case 11:case"end":return t.stop()}}),t)})))()},reload:function(){this.dani=[];for(var e=0;e<this.brojDana;e++){var t=void 0;t=e<this.prviDanUMesecu?{mesec:"",dan:0,komentar:""}:{mesec:this.mesec,dan:e+1-this.prviDanUMesecu,komentar:this.currentPlanner.dani[e-this.prviDanUMesecu].komentar},this.dani.push(t)}},nextMonth:function(){this.mesecBroj+=1,this.prviDanUMesecu=(this.prviDanUMesecu+this.brojDana)%7,0==this.mesecBroj&&(this.mesec="Januar",this.brojDana=31),1==this.mesecBroj&&(this.mesec="Februar",this.brojDana=28),2==this.mesecBroj&&(this.mesec="Mart",this.brojDana=31),3==this.mesecBroj&&(this.mesec="April",this.brojDana=30),4==this.mesecBroj&&(this.mesec="Maj",this.brojDana=31),5==this.mesecBroj&&(this.mesec="Jun",this.brojDana=30),6==this.mesecBroj&&(this.mesec="Jul",this.brojDana=31),7==this.mesecBroj&&(this.mesec="Avgust",this.brojDana=31),8==this.mesecBroj&&(this.mesec="Septembar",this.brojDana=30),9==this.mesecBroj&&(this.mesec="Oktobar",this.brojDana=31),10==this.mesecBroj&&(this.mesec="Novembar",this.brojDana=30),11==this.mesecBroj&&(this.mesec="Decembar",this.brojDana=31);for(var e=0;e<this.planners.length;e++)this.planners[e].mesec==this.mesec&&(this.currentPlanner=this.planners[e]);this.reload()},lastMonth:function(){this.mesecBroj-=1,0==this.mesecBroj&&(this.mesec="Januar",this.brojDana=31),1==this.mesecBroj&&(this.mesec="Februar",this.brojDana=28),2==this.mesecBroj&&(this.mesec="Mart",this.brojDana=31),3==this.mesecBroj&&(this.mesec="April",this.brojDana=30),4==this.mesecBroj&&(this.mesec="Maj",this.brojDana=31),5==this.mesecBroj&&(this.mesec="Jun",this.brojDana=30),6==this.mesecBroj&&(this.mesec="Jul",this.brojDana=31),7==this.mesecBroj&&(this.mesec="Avgust",this.brojDana=31),8==this.mesecBroj&&(this.mesec="Septembar",this.brojDana=30),9==this.mesecBroj&&(this.mesec="Oktobar",this.brojDana=31),10==this.mesecBroj&&(this.mesec="Novembar",this.brojDana=30),11==this.mesecBroj&&(this.mesec="Decembar",this.brojDana=31);for(var e=0;e<this.planners.length;e++)this.planners[e].mesec==this.mesec&&(this.currentPlanner=this.planners[e]);this.prviDanUMesecu=(this.prviDanUMesecu-this.brojDana)%7,this.prviDanUMesecu<0&&(this.prviDanUMesecu=this.prviDanUMesecu+7),this.reload()}}),created:function(){var e=this;return Object(v["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.getProfile();case 2:return t.next=4,e.getAllPlanners();case 4:e.currentDate=new Date,e.currentPlanner=e.planners[0],0==e.currentDate.getMonth()&&(e.mesec="Januar",e.mesecBroj=e.currentDate.getMonth(),e.brojDana=31),e.danUNedelji=e.currentDate.getDay(),e.prviDanUMesecu=(e.danUNedelji-e.currentDate.getDate())%7,e.prviDanUMesecu<0&&(e.prviDanUMesecu=e.prviDanUMesecu+7),e.reload(),e.trenutniDan=e.dani[e.prviDanUMesecu-1+e.currentDate.getDate()],console.log(e.currentDate);case 13:case"end":return t.stop()}}),t)})))()}};n("c3e1");g.render=p,g.__scopeId="data-v-6593a8c8";t["default"]=g},"99af":function(e,t,n){"use strict";var a=n("23e7"),s=n("d039"),r=n("e8b5"),c=n("861d"),i=n("7b0b"),o=n("50c4"),h=n("8418"),u=n("65f0"),l=n("1dde"),b=n("b622"),j=n("2d00"),m=b("isConcatSpreadable"),d=9007199254740991,D="Maximum allowed index exceeded",p=j>=51||!s((function(){var e=[];return e[m]=!1,e.concat()[0]!==e})),v=l("concat"),f=function(e){if(!c(e))return!1;var t=e[m];return void 0!==t?!!t:r(e)},O=!p||!v;a({target:"Array",proto:!0,forced:O},{concat:function(e){var t,n,a,s,r,c=i(this),l=u(c,0),b=0;for(t=-1,a=arguments.length;t<a;t++)if(r=-1===t?c:arguments[t],f(r)){if(s=o(r.length),b+s>d)throw TypeError(D);for(n=0;n<s;n++,b++)n in r&&h(l,b,r[n])}else{if(b>=d)throw TypeError(D);h(l,b++,r)}return l.length=b,l}})},"9cc5":function(e,t,n){},c3e1:function(e,t,n){"use strict";n("9cc5")}}]);
//# sourceMappingURL=chunk-c9329b7c.d258ca33.js.map