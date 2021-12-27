(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6b16c0eb"],{4158:function(e,t,a){"use strict";a("7934")},7934:function(e,t,a){},a3a0:function(e,t,a){"use strict";a.r(t);var o=a("7a23");Object(o["w"])("data-v-30b25a1a");var n={class:"usluga"},i={class:"headUsluga"},c=Object(o["i"])("Back "),l=Object(o["g"])("h3",null,"Employee Attitudes Survey",-1),s=Object(o["g"])("p",null,'Are you interested in the "blood picture" of your company? What are your strengths and weaknesses in relation to your corporate culture?',-1),r=Object(o["g"])("p",null,"The survey of employees' attitudes is a survey of employee satisfaction with certain motivational factors through a questionnaire, with a clear proposal of activities that will lead to improvement in the coming period. Using the questionnaire to assess the attitudes of employees, we gain insight into what the expectations of employees are, how satisfied they are with the work in the Company and whether their values are in line with the Company values. The research includes a Questionnaire of at least 80 questions on the basis of which we make a quantitative and qualitative analysis.",-1),u=Object(o["g"])("h5",null,"You need these services? Fill the form below:",-1),m={class:"card-body"},b={class:"form-group"},p=Object(o["g"])("label",{for:"numberOfEmployees"},"Number of employees for whom the services are required",-1),d={class:"form-group"},h=Object(o["g"])("label",{for:"companyName"},[Object(o["i"])("Company name"),Object(o["g"])("p",{style:{display:"inline",color:"red"}},"*")],-1),f={class:"form-group"},O=Object(o["g"])("label",{for:"contactName"},[Object(o["i"])("Full name of contact person"),Object(o["g"])("p",{style:{display:"inline",color:"red"}},"*")],-1),j={class:"form-group"},v=Object(o["g"])("label",{for:"contactNumber"},[Object(o["i"])("Phone number"),Object(o["g"])("p",{style:{display:"inline",color:"red"}},"*")],-1),y={class:"form-group"},g=Object(o["g"])("label",{for:"email"},[Object(o["i"])("E-mail"),Object(o["g"])("p",{style:{display:"inline",color:"red"}},"*")],-1),N={class:"validation"},w=Object(o["i"])("      ");function k(e,t,a,k,E,U){var I=Object(o["B"])("router-link");return Object(o["t"])(),Object(o["f"])("div",n,[Object(o["g"])("div",i,[Object(o["j"])(I,{class:"navbar-brand",to:"/ksuslugeEng"},{default:Object(o["K"])((function(){return[c]})),_:1}),l,s,r,u]),Object(o["g"])("div",m,[Object(o["g"])("div",b,[p,Object(o["L"])(Object(o["g"])("input",{class:"form-control",type:"text",placeholder:"",name:"numberOfEmployees","onUpdate:modelValue":t[0]||(t[0]=function(e){return E.numberOfEmployees=e}),id:"numberOfEmployees"},null,512),[[o["I"],E.numberOfEmployees]])]),Object(o["g"])("div",d,[h,Object(o["L"])(Object(o["g"])("input",{class:"form-control",type:"text",placeholder:"",name:"companyName","onUpdate:modelValue":t[1]||(t[1]=function(e){return E.companyName=e}),id:"companyName"},null,512),[[o["I"],E.companyName]])]),Object(o["g"])("div",f,[O,Object(o["L"])(Object(o["g"])("input",{class:"form-control",type:"text",placeholder:"",name:"contactName","onUpdate:modelValue":t[2]||(t[2]=function(e){return E.contactName=e}),id:"contactName"},null,512),[[o["I"],E.contactName]])]),Object(o["g"])("div",j,[v,Object(o["L"])(Object(o["g"])("input",{class:"form-control",type:"text",placeholder:"",name:"contactNumber","onUpdate:modelValue":t[3]||(t[3]=function(e){return E.contactNumber=e}),id:"contactNumber"},null,512),[[o["I"],E.contactNumber]])]),Object(o["g"])("div",y,[g,Object(o["L"])(Object(o["g"])("input",{class:"form-control",type:"text",placeholder:"",name:"email","onUpdate:modelValue":t[4]||(t[4]=function(e){return E.email=e}),id:"email"},null,512),[[o["I"],E.email]])]),Object(o["g"])("div",N,Object(o["D"])(E.validation),1),Object(o["g"])("button",{class:"btn btn-primary",onClick:t[5]||(t[5]=function(){return U.submit&&U.submit.apply(U,arguments)})},"Submit"),w])])}Object(o["u"])();var E=a("5530"),U=a("5502"),I={name:"IstrazivanjeStavovaZaposlenihEng",components:{},data:function(){return{companyName:"",contactName:"",contactNumber:"",email:"",numberOfEmployees:"",validation:"",date:""}},methods:Object(E["a"])(Object(E["a"])({},Object(U["b"])(["submitServiceAplication"])),{},{submit:function(){this.validation="",""==this.companyName&&(this.validation="Unesite naziv kompanije."),""==this.contactName&&(this.validation="Unesite ime i prezime kontakt osobe."),""==this.email&&(this.validation="Unesite email."),""==this.contactNumber&&(this.validation="Unesite kontakt telefon.");var e=new Date,t=e.getDate(),a=e.getMonth()+1,o=e.getFullYear();this.date="Datum: "+t+"."+a+"."+o+".";var n=[];n.push("Istraživanje Stavova Zaposlenih"),n.push(this.date),n.push("Naziv Kompanije: "+this.companyName),n.push("Ime i Prezime Kontakt Osobe: "+this.contactName),n.push("Email: "+this.email),n.push("Kontakt telefon: "+this.contactNumber),n.push("Broj zaposlenih za koje se vrši usluga: "+this.numberOfEmployees);var i={formular:n};""==this.validation&&(this.submitServiceAplication(i),this.validation="Uspesno poslat formular.")}}),beforeCreate:function(){document.body.className="usluge"}};a("4158");I.render=k,I.__scopeId="data-v-30b25a1a";t["default"]=I}}]);
//# sourceMappingURL=chunk-6b16c0eb.d194d378.js.map