(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-61a85611"],{"1a309":function(e,t,a){"use strict";a("4dc9")},"4dc9":function(e,t,a){},"85be":function(e,t,a){"use strict";a.r(t);a("a4d3"),a("e01a");var o=a("7a23");Object(o["w"])("data-v-9391f7e0");var i={class:"usluga"},n={class:"headUsluga"},c=Object(o["i"])("Back "),r=Object(o["g"])("h3",null,"Executive Search",-1),l=Object(o["g"])("p",null,"Executive Search is a service by which, using direct access and an overview of a rich database of candidates, we find professional candidates whose competencies meet the needs of clients and the conditions for a particular position.",-1),s=Object(o["g"])("h5",null,"You need these services? Fill the form below:",-1),u={class:"card-body"},p={class:"form-group"},m=Object(o["g"])("label",{for:"companyName"},[Object(o["i"])("Company name"),Object(o["g"])("p",{style:{display:"inline",color:"red"}},"*")],-1),d={class:"form-group"},b=Object(o["g"])("label",{for:"contactName"},[Object(o["i"])("Full name of contact person"),Object(o["g"])("p",{style:{display:"inline",color:"red"}},"*")],-1),f={class:"form-group"},O=Object(o["g"])("label",{for:"contactNumber"},[Object(o["i"])("Phone number"),Object(o["g"])("p",{style:{display:"inline",color:"red"}},"*")],-1),j={class:"form-group"},h=Object(o["g"])("label",{for:"email"},[Object(o["i"])("E-mail"),Object(o["g"])("p",{style:{display:"inline",color:"red"}},"*")],-1),g={class:"form-group"},v=Object(o["g"])("label",{for:"positionName"},[Object(o["i"])("Name of workplace"),Object(o["g"])("p",{style:{display:"inline",color:"red"}},"*")],-1),y={class:"form-group"},N=Object(o["g"])("label",{for:"description"},"Description of workplace",-1),x={class:"form-group"},E=Object(o["g"])("label",{for:"numberOfExecutors"},"Number of required executives",-1),k={class:"form-group"},w=Object(o["g"])("label",{for:"pay"},"Estimated pay (Optional)",-1),U={class:"validation"},S=Object(o["i"])("      ");function I(e,t,a,I,z,V){var L=Object(o["B"])("router-link");return Object(o["t"])(),Object(o["f"])("div",i,[Object(o["g"])("div",n,[Object(o["j"])(L,{class:"navbar-brand",to:"/ksuslugeEng"},{default:Object(o["K"])((function(){return[c]})),_:1}),r,l,s]),Object(o["g"])("div",u,[Object(o["g"])("div",p,[m,Object(o["L"])(Object(o["g"])("input",{class:"form-control",type:"text",placeholder:"",name:"companyName","onUpdate:modelValue":t[0]||(t[0]=function(e){return z.companyName=e}),id:"companyName"},null,512),[[o["I"],z.companyName]])]),Object(o["g"])("div",d,[b,Object(o["L"])(Object(o["g"])("input",{class:"form-control",type:"text",placeholder:"",name:"contactName","onUpdate:modelValue":t[1]||(t[1]=function(e){return z.contactName=e}),id:"contactName"},null,512),[[o["I"],z.contactName]])]),Object(o["g"])("div",f,[O,Object(o["L"])(Object(o["g"])("input",{class:"form-control",type:"text",placeholder:"",name:"contactNumber","onUpdate:modelValue":t[2]||(t[2]=function(e){return z.contactNumber=e}),id:"contactNumber"},null,512),[[o["I"],z.contactNumber]])]),Object(o["g"])("div",j,[h,Object(o["L"])(Object(o["g"])("input",{class:"form-control",type:"text",placeholder:"",name:"email","onUpdate:modelValue":t[3]||(t[3]=function(e){return z.email=e}),id:"email"},null,512),[[o["I"],z.email]])]),Object(o["g"])("div",g,[v,Object(o["L"])(Object(o["g"])("input",{class:"form-control",type:"text",placeholder:"",name:"positionName","onUpdate:modelValue":t[4]||(t[4]=function(e){return z.positionName=e}),id:"positionName"},null,512),[[o["I"],z.positionName]])]),Object(o["g"])("div",y,[N,Object(o["L"])(Object(o["g"])("input",{class:"form-control",type:"text",placeholder:"",name:"description","onUpdate:modelValue":t[5]||(t[5]=function(e){return z.description=e}),id:"description"},null,512),[[o["I"],z.description]])]),Object(o["g"])("div",x,[E,Object(o["L"])(Object(o["g"])("input",{class:"form-control",type:"text",placeholder:"",name:"numberOfExecutors","onUpdate:modelValue":t[6]||(t[6]=function(e){return z.numberOfExecutors=e}),id:"numberOfExecutors"},null,512),[[o["I"],z.numberOfExecutors]])]),Object(o["g"])("div",k,[w,Object(o["L"])(Object(o["g"])("input",{class:"form-control",type:"text",placeholder:"",name:"pay","onUpdate:modelValue":t[7]||(t[7]=function(t){return e.pay=t}),id:"pay"},null,512),[[o["I"],e.pay]])]),Object(o["g"])("div",U,Object(o["D"])(z.validation),1),Object(o["g"])("button",{class:"btn btn-primary",onClick:t[8]||(t[8]=function(){return V.submit&&V.submit.apply(V,arguments)})},"Submit"),S])])}Object(o["u"])();var z=a("5530"),V=a("5502"),L={computed:Object(V["c"])(["user"]),name:"ExecutiveSearchEng",components:{},data:function(){return{companyName:"",contactName:"",contactNumber:"",email:"",positionName:"",description:"",numberOfExecutors:"",validation:"",date:""}},methods:Object(z["a"])(Object(z["a"])({},Object(V["b"])(["submitServiceAplication"])),{},{submit:function(){this.validation="",""==this.companyName&&(this.validation="Unesite naziv kompanije."),""==this.contactName&&(this.validation="Unesite ime i prezime kontakt osobe."),""==this.email&&(this.validation="Unesite email."),""==this.contactNumber&&(this.validation="Unesite kontakt telefon."),""==this.positionName&&(this.validation="Unesite naziv pozicije.");var e=new Date,t=e.getDate(),a=e.getMonth()+1,o=e.getFullYear();this.date="Datum: "+t+"."+a+"."+o+".";var i=[];i.push("EXECUTIVE SEARCH"),i.push(this.date),i.push("Naziv Kompanije: "+this.companyName),i.push("Ime i Prezime Kontakt Osobe: "+this.contactName),i.push("Email: "+this.email),i.push("Opis Posla: "+this.description),i.push("Broj potrebnih izvršilaca: "+this.numberOfExecutors),i.push("Ime Pozicije: "+this.positionName),i.push("Okvirna zarada (Opciono): "+this.pay);var n={formular:i};""==this.validation&&(this.submitServiceAplication(n),this.validation="Uspesno poslat formular.")}}),beforeCreate:function(){document.body.className="usluge"}};a("1a309");L.render=I,L.__scopeId="data-v-9391f7e0";t["default"]=L},e01a:function(e,t,a){"use strict";var o=a("23e7"),i=a("83ab"),n=a("da84"),c=a("5135"),r=a("861d"),l=a("9bf2").f,s=a("e893"),u=n.Symbol;if(i&&"function"==typeof u&&(!("description"in u.prototype)||void 0!==u().description)){var p={},m=function(){var e=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),t=this instanceof m?new u(e):void 0===e?u():u(e);return""===e&&(p[t]=!0),t};s(m,u);var d=m.prototype=u.prototype;d.constructor=m;var b=d.toString,f="Symbol(test)"==String(u("test")),O=/^Symbol\((.*)\)[^)]+$/;l(d,"description",{configurable:!0,get:function(){var e=r(this)?this.valueOf():this,t=b.call(e);if(c(p,e))return"";var a=f?t.slice(7,-1):t.replace(O,"$1");return""===a?void 0:a}}),o({global:!0,forced:!0},{Symbol:m})}}}]);
//# sourceMappingURL=chunk-61a85611.26ef9b74.js.map