(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f4acf034"],{"20bf":function(e,t,a){"use strict";a("bb3a")},"73cf":function(e,t,a){"use strict";a.r(t);a("b0c0");var o=a("7a23");Object(o["w"])("data-v-6217353c");var n={class:"row"},r={class:"card mx-auto"},s=Object(o["g"])("div",{class:"card-header"},[Object(o["g"])("h4",null,"Register Employee")],-1),i={class:"validation"},c={class:"card-body"},l={class:"form-group"},p=Object(o["g"])("label",{for:"username"},"Username",-1),u={class:"form-group"},m=Object(o["g"])("label",{for:"Name"},"Name",-1),d={class:"form-group"},b=Object(o["g"])("label",{for:"Email"},"Email",-1),j={class:"form-group"},f=Object(o["g"])("label",{for:"password"},"Password",-1),g={class:"form-group"},h=Object(o["g"])("label",{for:"confirm_password"},"Confirm password",-1),O={class:"group"},v=Object(o["g"])("label",{for:"companys"},"Kompanija: ",-1),y={class:"group"},w=Object(o["g"])("label",{for:"companys"},"Sektor: ",-1),k={class:"group"},U=Object(o["g"])("label",{for:"companys"},"Radno Mesto:",-1),M=Object(o["g"])("button",{class:"btn btn-primary"},"Register",-1);function C(e,t,a,C,_,P){return Object(o["t"])(),Object(o["f"])("div",n,[Object(o["g"])("div",r,[s,Object(o["g"])("div",i,Object(o["D"])(_.validation),1),Object(o["g"])("div",c,[Object(o["g"])("form",{onSubmit:t[10]||(t[10]=Object(o["M"])((function(){return P.registerUser&&P.registerUser.apply(P,arguments)}),["prevent"]))},[Object(o["g"])("div",l,[p,Object(o["L"])(Object(o["g"])("input",{class:"form-control",type:"text",placeholder:"Username",name:"username","onUpdate:modelValue":t[0]||(t[0]=function(e){return _.username=e}),id:"username"},null,512),[[o["I"],_.username]])]),Object(o["g"])("div",u,[m,Object(o["L"])(Object(o["g"])("input",{class:"form-control",type:"text",placeholder:"name",name:"name","onUpdate:modelValue":t[1]||(t[1]=function(e){return _.name=e}),id:"name"},null,512),[[o["I"],_.name]])]),Object(o["g"])("div",d,[b,Object(o["L"])(Object(o["g"])("input",{class:"form-control",type:"text",placeholder:"Email",name:"email","onUpdate:modelValue":t[2]||(t[2]=function(e){return _.email=e}),id:"email"},null,512),[[o["I"],_.email]])]),Object(o["g"])("div",j,[f,Object(o["L"])(Object(o["g"])("input",{class:"form-control",type:"password",placeholder:"Password",name:"password","onUpdate:modelValue":t[3]||(t[3]=function(e){return _.password=e}),id:"password"},null,512),[[o["I"],_.password]])]),Object(o["g"])("div",g,[h,Object(o["L"])(Object(o["g"])("input",{class:"form-control",type:"password",placeholder:"Confirm password",name:"confirm_password","onUpdate:modelValue":t[4]||(t[4]=function(e){return _.confirm_password=e}),id:"confirm_password"},null,512),[[o["I"],_.confirm_password]])]),Object(o["g"])("div",O,[v,Object(o["L"])(Object(o["g"])("select",{name:"type",id:"type","onUpdate:modelValue":t[5]||(t[5]=function(e){return _.type=e}),onChange:t[6]||(t[6]=function(e){return P.onChangeCompany(e)})},[(Object(o["t"])(!0),Object(o["f"])(o["a"],null,Object(o["z"])(e.companys,(function(e){return Object(o["t"])(),Object(o["f"])("option",{key:e.name},Object(o["D"])(e.name),1)})),128))],544),[[o["H"],_.type]])]),Object(o["g"])("div",y,[w,Object(o["L"])(Object(o["g"])("select",{name:"type",id:"type","onUpdate:modelValue":t[7]||(t[7]=function(t){return e.sector=t}),onChange:t[8]||(t[8]=function(e){return P.onChangeSector(e)})},[(Object(o["t"])(!0),Object(o["f"])(o["a"],null,Object(o["z"])(_.sektori,(function(e){return Object(o["t"])(),Object(o["f"])("option",{key:e},Object(o["D"])(e),1)})),128))],544),[[o["H"],e.sector]])]),Object(o["g"])("div",k,[U,Object(o["L"])(Object(o["g"])("select",{name:"type",id:"type","onUpdate:modelValue":t[9]||(t[9]=function(e){return _.radnoMesto=e})},[(Object(o["t"])(!0),Object(o["f"])(o["a"],null,Object(o["z"])(_.radnaMesta,(function(e){return Object(o["t"])(),Object(o["f"])("option",{key:e},Object(o["D"])(e),1)})),128))],512),[[o["H"],_.radnoMesto]])]),M],32)])])])}Object(o["u"])();var _=a("5530"),P=a("5502"),I={data:function(){return{username:"",password:"",confirm_password:"",name:"",email:"",type:"",radnoMesto:"",sektor:"",sektori:[],radnaMesta:[],validation:""}},computed:Object(P["c"])(["companys","users"]),methods:Object(_["a"])(Object(_["a"])({},Object(P["b"])(["register","getCompanies","getAllUsers"])),{},{registerUser:function(){var e=this;this.validation="";for(var t={username:this.username,password:this.password,confirm_password:this.confirm_password,email:this.email,name:this.name,type:this.type,radnoMesto:this.radnoMesto,sektor:this.sector},a=0;a<this.users.length;a++)this.users[a].username==t.username&&(this.validation="Username je već registrovan. Izaberite drugačiji username.");if(""==this.validation)for(a=0;a<this.users.length;a++)this.users[a].email==t.email&&(this.validation="Email je već registrovan. Izaberite drugačiji Email.");""==this.validation&&(""==t.username&&(this.validation="Popunite sva polja prilikom registracije."),""==t.password&&(this.validation="Popunite sva polja prilikom registracije."),""==t.confirm_password&&(this.validation="Popunite sva polja prilikom registracije."),""==t.email&&(this.validation="Popunite sva polja prilikom registracije."),""==t.name&&(this.validation="Popunite sva polja prilikom registracije."),""==t.type&&(this.validation="Popunite sva polja prilikom registracije."),""==t.radnoMesto&&(this.validation="Popunite sva polja prilikom registracije."),""==t.sektor&&(this.validation="Popunite sva polja prilikom registracije.")),""==this.validation&&this.register(t).then((function(a){a.data.success&&(e.validation="Uspešno registrovan zaposleni ".concat(t.name))}))},onChangeCompany:function(e){var t;this.sektori=[];for(var a=0;a<this.companys.length;a++)this.companys[a].name==e.target.value&&(t=this.companys[a]);for(a=0;a<t.sektori.length;a++)this.sektori.push(t.sektori[a].name)},onChangeSector:function(e){var t,a;this.radnaMesta=[];for(var o=0;o<this.companys.length;o++)this.companys[o].name==this.type&&(t=this.companys[o]);for(o=0;o<t.sektori.length;o++)t.sektori[o].name==e.target.value&&(a=t.sektori[o]);for(o=0;o<a.radnaMesta.length;o++)this.radnaMesta.push(a.radnaMesta[o])}}),created:function(){this.getCompanies()}};a("20bf");I.render=C,I.__scopeId="data-v-6217353c";t["default"]=I},b0c0:function(e,t,a){var o=a("83ab"),n=a("9bf2").f,r=Function.prototype,s=r.toString,i=/^\s*function ([^ (]*)/,c="name";o&&!(c in r)&&n(r,c,{configurable:!0,get:function(){try{return s.call(this).match(i)[1]}catch(e){return""}}})},bb3a:function(e,t,a){}}]);
//# sourceMappingURL=chunk-f4acf034.1e4cf143.js.map