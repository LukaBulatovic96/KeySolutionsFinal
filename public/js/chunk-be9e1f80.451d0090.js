(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-be9e1f80"],{"08d2":function(e,n,t){},"0e4e":function(e,n,t){"use strict";t.r(n);t("b0c0");var o=t("7a23");Object(o["w"])("data-v-2a29b00a");var a={class:"header"},i={class:"group"},c=Object(o["g"])("label",{for:"companys"},"Kompanija: ",-1),r={class:"validation"},p={class:"ponderi"},m=Object(o["g"])("h2",null,"Procentualni ucinak u ukupnoj oceni (zbirno 100)",-1),l=Object(o["g"])("h4",null,"Kompetence",-1),u=Object(o["g"])("h4",null,"Licni KPI",-1),s=Object(o["g"])("h4",null,"Kompanijski KPI",-1),b={class:"kompetence"},j=Object(o["g"])("h2",null,"Kompetence (zbirno 100)",-1),k=Object(o["g"])("label",{for:""},"Naziv:",-1),d=["onUpdate:modelValue"],f=Object(o["g"])("label",{for:""},"Ponder:",-1),h=["onUpdate:modelValue"],O=Object(o["g"])("label",{for:""},"Komentar:",-1),g=["onUpdate:modelValue"],v=["onClick"],y={class:"KompanijskiKpi"},K=Object(o["g"])("h2",null,"Kompanijski Kpi (zbirno 100)",-1),P=Object(o["g"])("label",{for:""},"Naziv:",-1),C=["onUpdate:modelValue"],U=Object(o["g"])("label",{for:""},"Ponder:",-1),V=["onUpdate:modelValue"],I=Object(o["g"])("label",{for:""},"Komentar:",-1),E=["onUpdate:modelValue"],L=["onClick"];function w(e,n,t,w,z,x){return Object(o["t"])(),Object(o["f"])(o["a"],null,[Object(o["g"])("div",a,[Object(o["g"])("div",i,[c,Object(o["L"])(Object(o["g"])("select",{name:"type",id:"type","onUpdate:modelValue":n[0]||(n[0]=function(n){return e.type=n}),onChange:n[1]||(n[1]=function(e){return x.onChangeCompany(e)})},[(Object(o["t"])(!0),Object(o["f"])(o["a"],null,Object(o["z"])(e.companys,(function(e){return Object(o["t"])(),Object(o["f"])("option",{key:e.name},Object(o["D"])(e.name),1)})),128))],544),[[o["H"],e.type]])]),Object(o["g"])("div",r,Object(o["D"])(z.validation),1),Object(o["g"])("div",p,[m,l,Object(o["L"])(Object(o["g"])("input",{class:"form-control",type:"number","onUpdate:modelValue":n[2]||(n[2]=function(e){return z.kompetenceProcenat=e})},null,512),[[o["I"],z.kompetenceProcenat]]),u,Object(o["L"])(Object(o["g"])("input",{class:"form-control",type:"number","onUpdate:modelValue":n[3]||(n[3]=function(e){return z.licniProcenat=e})},null,512),[[o["I"],z.licniProcenat]]),s,Object(o["L"])(Object(o["g"])("input",{class:"form-control",type:"number","onUpdate:modelValue":n[4]||(n[4]=function(e){return z.kompanijskiProcenat=e})},null,512),[[o["I"],z.kompanijskiProcenat]])])]),Object(o["g"])("div",b,[j,(Object(o["t"])(!0),Object(o["f"])(o["a"],null,Object(o["z"])(z.kompetence,(function(e,n){return Object(o["t"])(),Object(o["f"])("div",{class:"kpi",key:n},[k,Object(o["L"])(Object(o["g"])("input",{class:"form-control",type:"text","onUpdate:modelValue":function(n){return e.name=n}},null,8,d),[[o["I"],e.name]]),f,Object(o["L"])(Object(o["g"])("input",{class:"form-control",type:"number","onUpdate:modelValue":function(n){return e.ponder=n}},null,8,h),[[o["I"],e.ponder]]),O,Object(o["L"])(Object(o["g"])("input",{class:"form-control",type:"text","onUpdate:modelValue":function(n){return e.comment=n}},null,8,g),[[o["I"],e.comment]]),Object(o["g"])("button",{type:"button",name:"button",onClick:function(e){return x.ukloniKompetencu(n)}},"ukloni",8,v)])})),128)),Object(o["g"])("button",{type:"button",name:"button",onClick:n[5]||(n[5]=function(){return x.increaseKompetence&&x.increaseKompetence.apply(x,arguments)})},"Dodaj kompetencu")]),Object(o["g"])("div",y,[K,(Object(o["t"])(!0),Object(o["f"])(o["a"],null,Object(o["z"])(z.kompanijskiKpi,(function(e,n){return Object(o["t"])(),Object(o["f"])("div",{class:"kpi",key:n},[P,Object(o["L"])(Object(o["g"])("input",{class:"form-control",type:"text","onUpdate:modelValue":function(n){return e.name=n}},null,8,C),[[o["I"],e.name]]),U,Object(o["L"])(Object(o["g"])("input",{class:"form-control",type:"number","onUpdate:modelValue":function(n){return e.ponder=n}},null,8,V),[[o["I"],e.ponder]]),I,Object(o["L"])(Object(o["g"])("input",{class:"form-control",type:"text","onUpdate:modelValue":function(n){return e.comment=n}},null,8,E),[[o["I"],e.comment]]),Object(o["g"])("button",{type:"button",name:"button",onClick:function(e){return x.ukloniKompanijski(n)}},"ukloni",8,L)])})),128)),Object(o["g"])("button",{type:"button",name:"button",onClick:n[6]||(n[6]=function(){return x.increaseKompanijskiKpi&&x.increaseKompanijskiKpi.apply(x,arguments)})},"Dodaj Kpi")]),Object(o["g"])("button",{type:"button",name:"button",onClick:n[7]||(n[7]=function(){return x.submit&&x.submit.apply(x,arguments)})},"Sačuvaj promenu")],64)}Object(o["u"])();var z=t("5530"),x=(t("a434"),t("5502")),D={data:function(){return{kompetence:[],kompanijskiKpi:[],currentCompany:{},kompetenceProcenat:0,kompanijskiProcenat:0,licniProcenat:0,validation:""}},computed:Object(x["c"])(["companys"]),methods:Object(z["a"])(Object(z["a"])({},Object(x["b"])(["getCompanies","setCompanyKpi"])),{},{submit:function(){this.validation="";var e={kompetence:this.kompetence,kompanijski:this.kompanijskiKpi,companyName:this.currentCompany.name,kompetenceProcenat:this.kompetenceProcenat,kompanijskiProcenat:this.kompanijskiProcenat,licniProcenat:this.licniProcenat};this.kompetenceProcenat+this.kompanijskiProcenat+this.licniProcenat!=100&&(this.validation="Zbir procentualnog učinka mora biti 100.");for(var n=0,t=0;t<this.kompetence.length;t++)n+=this.kompetence[t].ponder;for(100!=n&&0!=this.kompetenceProcenat&&(this.validation="Zbir pondera kompetenci mora biti 100."),n=0,t=0;t<this.kompanijskiKpi.length;t++)n+=this.kompanijskiKpi[t].ponder;100!=n&&0!=this.kompanijskiProcenat&&(this.validation="Zbir pondera kompanijskih KPI mora biti 100."),""==this.validation&&(this.setCompanyKpi(e),this.validation="Sačuvani podaci za kompaniju ".concat(this.currentCompany.name))},increaseKompetence:function(){var e={name:"",ponder:0};this.kompetence.push(e)},increaseKompanijskiKpi:function(){var e={name:"",ponder:0};this.kompanijskiKpi.push(e)},ukloniKompetencu:function(e){this.kompetence.splice(e,1)},ukloniKompanijski:function(e){this.kompanijskiKpi.splice(e,1)},onChangeCompany:function(e){var n;this.kompetence=[],this.kompanijskiKpi=[];for(var t=0;t<this.companys.length;t++)this.companys[t].name==e.target.value&&(n=this.companys[t]);for(this.currentCompany=n,this.kompetenceProcenat=this.currentCompany.performanceEvaluation.kompetenceProcenat,this.kompanijskiProcenat=this.currentCompany.performanceEvaluation.kompanijskiProcenat,this.licniProcenat=this.currentCompany.performanceEvaluation.licniProcenat,t=0;t<n.performanceEvaluation.kompetence.length;t++){var o={name:n.performanceEvaluation.kompetence[t].name,ponder:n.performanceEvaluation.kompetence[t].ponder,comment:n.performanceEvaluation.kompetence[t].comment};this.kompetence.push(o)}for(t=0;t<n.performanceEvaluation.kompanijski.length;t++){var a={name:n.performanceEvaluation.kompanijski[t].name,ponder:n.performanceEvaluation.kompanijski[t].ponder,comment:n.performanceEvaluation.kompanijski[t].comment};this.kompanijskiKpi.push(a)}}}),created:function(){this.getCompanies()}};t("ae8f");D.render=w,D.__scopeId="data-v-2a29b00a";n["default"]=D},a434:function(e,n,t){"use strict";var o=t("23e7"),a=t("23cb"),i=t("a691"),c=t("50c4"),r=t("7b0b"),p=t("65f0"),m=t("8418"),l=t("1dde"),u=l("splice"),s=Math.max,b=Math.min,j=9007199254740991,k="Maximum allowed length exceeded";o({target:"Array",proto:!0,forced:!u},{splice:function(e,n){var t,o,l,u,d,f,h=r(this),O=c(h.length),g=a(e,O),v=arguments.length;if(0===v?t=o=0:1===v?(t=0,o=O-g):(t=v-2,o=b(s(i(n),0),O-g)),O+t-o>j)throw TypeError(k);for(l=p(h,o),u=0;u<o;u++)d=g+u,d in h&&m(l,u,h[d]);if(l.length=o,t<o){for(u=g;u<O-o;u++)d=u+o,f=u+t,d in h?h[f]=h[d]:delete h[f];for(u=O;u>O-o+t;u--)delete h[u-1]}else if(t>o)for(u=O-o;u>g;u--)d=u+o-1,f=u+t-1,d in h?h[f]=h[d]:delete h[f];for(u=0;u<t;u++)h[u+g]=arguments[u+2];return h.length=O-o+t,l}})},ae8f:function(e,n,t){"use strict";t("08d2")},b0c0:function(e,n,t){var o=t("83ab"),a=t("9bf2").f,i=Function.prototype,c=i.toString,r=/^\s*function ([^ (]*)/,p="name";o&&!(p in i)&&a(i,p,{configurable:!0,get:function(){try{return c.call(this).match(r)[1]}catch(e){return""}}})}}]);
//# sourceMappingURL=chunk-be9e1f80.451d0090.js.map