(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3388d696"],{"2a64":function(t,e,n){},a434:function(t,e,n){"use strict";var i=n("23e7"),a=n("23cb"),c=n("a691"),r=n("50c4"),o=n("7b0b"),s=n("65f0"),l=n("8418"),u=n("1dde"),p=u("splice"),b=Math.max,m=Math.min,h=9007199254740991,f="Maximum allowed length exceeded";i({target:"Array",proto:!0,forced:!p},{splice:function(t,e){var n,i,u,p,d,j,g=o(this),O=r(g.length),v=a(t,O),y=arguments.length;if(0===y?n=i=0:1===y?(n=0,i=O-v):(n=y-2,i=m(b(c(e),0),O-v)),O+n-i>h)throw TypeError(f);for(u=s(g,i),p=0;p<i;p++)d=v+p,d in g&&l(u,p,g[d]);if(u.length=i,n<i){for(p=v;p<O-i;p++)d=p+i,j=p+n,d in g?g[j]=g[d]:delete g[j];for(p=O;p>O-i+n;p--)delete g[p-1]}else if(n>i)for(p=O-i;p>v;p--)d=p+i-1,j=p+n-1,d in g?g[j]=g[d]:delete g[j];for(p=0;p<n;p++)g[p+v]=arguments[p+2];return g.length=O-i+n,u}})},a57c:function(t,e,n){"use strict";n.r(e);n("b0c0");var i=n("7a23");Object(i["w"])("data-v-27f003bd");var a={class:"group"},c=Object(i["g"])("label",{for:"companys"},"Kompanija: ",-1),r={class:"group"},o=Object(i["g"])("label",{for:"user"},"Zaposleni: ",-1),s={class:"LicniKpi"},l=Object(i["g"])("h2",null,"Licni Kpi",-1),u={class:"validation"},p=Object(i["g"])("label",{for:""},"Naziv:",-1),b=["onUpdate:modelValue"],m=Object(i["g"])("label",{for:""},"Ponder:",-1),h=["onUpdate:modelValue"],f=Object(i["g"])("label",{for:""},"Komentar:",-1),d=["onUpdate:modelValue"],j=["onClick"];function g(t,e,n,g,O,v){return Object(i["t"])(),Object(i["f"])(i["a"],null,[Object(i["g"])("div",a,[c,Object(i["L"])(Object(i["g"])("select",{name:"companys",id:"type","onUpdate:modelValue":e[0]||(e[0]=function(e){return t.type=e}),onChange:e[1]||(e[1]=function(t){return v.onChangeCompany(t)})},[(Object(i["t"])(!0),Object(i["f"])(i["a"],null,Object(i["z"])(t.companys,(function(t){return Object(i["t"])(),Object(i["f"])("option",{key:t.name},Object(i["D"])(t.name),1)})),128))],544),[[i["H"],t.type]])]),Object(i["g"])("div",r,[o,Object(i["L"])(Object(i["g"])("select",{name:"user",id:"type","onUpdate:modelValue":e[2]||(e[2]=function(e){return t.client=e}),onChange:e[3]||(e[3]=function(t){return v.onChangeUser(t)})},[(Object(i["t"])(!0),Object(i["f"])(i["a"],null,Object(i["z"])(O.usersInCompany,(function(t){return Object(i["t"])(),Object(i["f"])("option",{key:t.name},Object(i["D"])(t.name),1)})),128))],544),[[i["H"],t.client]])]),Object(i["g"])("div",s,[l,Object(i["g"])("div",u,Object(i["D"])(O.validation),1),(Object(i["t"])(!0),Object(i["f"])(i["a"],null,Object(i["z"])(O.licniKpi,(function(t,e){return Object(i["t"])(),Object(i["f"])("div",{class:"kpi",key:e},[p,Object(i["L"])(Object(i["g"])("input",{class:"form-control",type:"text","onUpdate:modelValue":function(e){return t.name=e}},null,8,b),[[i["I"],t.name]]),m,Object(i["L"])(Object(i["g"])("input",{class:"form-control",type:"number","onUpdate:modelValue":function(e){return t.ponder=e}},null,8,h),[[i["I"],t.ponder]]),f,Object(i["L"])(Object(i["g"])("input",{class:"form-control",type:"text","onUpdate:modelValue":function(e){return t.comment=e}},null,8,d),[[i["I"],t.comment]]),Object(i["g"])("button",{type:"button",name:"button",onClick:function(t){return v.ukloniLicni(e)}},"ukloni",8,j)])})),128)),Object(i["g"])("button",{type:"button",name:"button",onClick:e[4]||(e[4]=function(){return v.increaseLicni&&v.increaseLicni.apply(v,arguments)})},"Dodaj Kpi")]),Object(i["g"])("button",{type:"button",name:"button",onClick:e[5]||(e[5]=function(){return v.submit&&v.submit.apply(v,arguments)})},"Sačuvaj promenu")],64)}Object(i["u"])();var O=n("1da1"),v=n("5530"),y=(n("96cf"),n("a434"),n("5502")),C={data:function(){return{nmb:0,licniKpi:[],usersInCompany:[],currentCompany:"",currentUser:"",validation:"",licniProc:0,lastEval:0,evalEmpty:!0}},computed:Object(y["c"])(["companys","users"]),methods:Object(v["a"])(Object(v["a"])({},Object(y["b"])(["getCompanies","setLicniKpi","getAllUsers"])),{},{onChangeCompany:function(t){var e;this.validation="",this.usersInCompany=[];for(var n=0;n<this.companys.length;n++)this.companys[n].name==t.target.value&&(e=this.companys[n]);for(this.licniProc=e.performanceEvaluation.licniProcenat,this.currentCompany=e,n=0;n<this.users.length;n++)this.users[n].type===this.currentCompany.name&&this.usersInCompany.push(this.users[n])},onChangeUser:function(t){var e;this.validation="";for(var n=0;n<this.users.length;n++)this.users[n].name==t.target.value&&(e=this.users[n]);if(this.currentUser=e,this.licniKpi=[],this.currentUser.performanceEvaluation.length>0&&(this.lastEval=this.currentUser.performanceEvaluation.length-1,this.evalEmpty=!1),!this.evalEmpty)for(n=0;n<this.currentUser.performanceEvaluation[this.lastEval].licniKpi.length;n++)this.licniKpi.push(this.currentUser.performanceEvaluation[this.lastEval].licniKpi[n])},ukloniLicni:function(t){this.licniKpi.splice(t,1)},increaseLicni:function(){var t={name:"",ponder:0,comment:""};this.licniKpi.push(t)},submit:function(){this.validation="";for(var t={licniKpi:this.licniKpi,userId:this.currentUser._id,lastEval:this.lastEval},e=0,n=0;n<this.licniKpi.length;n++)e+=this.licniKpi[n].ponder;100!=e&&0!=this.licniProc&&(this.validation="Zbir pondera mora biti 100."),""==this.validation&&(this.setLicniKpi(t),this.validation="Sacuvani Licni Kpi za ".concat(this.currentUser.name))}}),created:function(){var t=this;return Object(O["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.getCompanies();case 2:return e.next=4,t.getAllUsers();case 4:case"end":return e.stop()}}),e)})))()}};n("f03c");C.render=g,C.__scopeId="data-v-27f003bd";e["default"]=C},b0c0:function(t,e,n){var i=n("83ab"),a=n("9bf2").f,c=Function.prototype,r=c.toString,o=/^\s*function ([^ (]*)/,s="name";i&&!(s in c)&&a(c,s,{configurable:!0,get:function(){try{return r.call(this).match(o)[1]}catch(t){return""}}})},f03c:function(t,e,n){"use strict";n("2a64")}}]);
//# sourceMappingURL=chunk-3388d696.6af696a2.js.map