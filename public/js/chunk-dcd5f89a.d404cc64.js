(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-dcd5f89a"],{1148:function(e,n,a){"use strict";var t=a("a691"),i=a("577e"),c=a("1d80");e.exports=function(e){var n=i(c(this)),a="",o=t(e);if(o<0||o==1/0)throw RangeError("Wrong number of repetitions");for(;o>0;(o>>>=1)&&(n+=n))1&o&&(a+=n);return a}},"408a":function(e,n){var a=1..valueOf;e.exports=function(e){return a.call(e)}},"54ef":function(e,n,a){},"96f4":function(e,n,a){"use strict";a.r(n);a("b680");var t=a("7a23");Object(t["w"])("data-v-ebc66026");var i={id:"pdf"},c=Object(t["g"])("h2",null,"Procena sprovedene edukacije - rezultati upitnika",-1),o=Object(t["g"])("h4",null,"1. U kojoj meri ciljevi edukacije odgovaraju Vašim potrebama?",-1),r=Object(t["g"])("h4",null,"2. U kojoj meri je prezentacija teme bila prikladna?",-1),u=Object(t["g"])("h4",null,"3. U kojoj meri ocenjujete stručnost predavača?",-1),l=Object(t["g"])("h4",null,"4. U kojoj meri je predavač bio pripremljen?",-1),s=Object(t["g"])("h4",null,"5. U kojoj meri smatrate da ćete moći da primenite znanje stečeno na ovoj edukaciji?",-1),j=Object(t["g"])("h4",null,"6. Kako ocenjujete kvalitet zadatih vežbi?",-1),p=Object(t["g"])("h4",null,"7. Kako ocenjujete izvođenje predavača?",-1),d=Object(t["g"])("h4",null,"8. Kako ocenjujete prezentacione veštine predavača?",-1),b=Object(t["g"])("h4",null,"9. Kako ocenjujete navedene primere tokom edukacije?",-1),k=Object(t["g"])("h4",null,"10. Navedite teme za koje smatrate da su bile nevažne za edukaciju i obrazložite odgovor:",-1);function f(e,n,a,f,g,m){return Object(t["t"])(),Object(t["f"])("div",i,[c,o,Object(t["g"])("p",null,Object(t["D"])(g.ans1.toFixed(2)),1),r,Object(t["g"])("p",null,Object(t["D"])(g.ans2.toFixed(2)),1),u,Object(t["g"])("p",null,Object(t["D"])(g.ans3.toFixed(2)),1),l,Object(t["g"])("p",null,Object(t["D"])(g.ans4.toFixed(2)),1),s,Object(t["g"])("p",null,Object(t["D"])(g.ans5.toFixed(2)),1),j,Object(t["g"])("p",null,Object(t["D"])(g.ans6.toFixed(2)),1),p,Object(t["g"])("p",null,Object(t["D"])(g.ans7.toFixed(2)),1),d,Object(t["g"])("p",null,Object(t["D"])(g.ans8.toFixed(2)),1),b,Object(t["g"])("p",null,Object(t["D"])(g.ans9.toFixed(2)),1),k,(Object(t["t"])(!0),Object(t["f"])(t["a"],null,Object(t["z"])(g.ans10,(function(e,n){return Object(t["t"])(),Object(t["f"])("div",{class:"",key:n},[Object(t["g"])("p",null,Object(t["D"])(n+1)+". "+Object(t["D"])(e),1)])})),128))])}Object(t["u"])();var g=a("1da1"),m=a("5530"),h=(a("96cf"),a("fb6a"),a("5502")),O=(a("21c9"),a("7200"),{props:{company:{type:Object}},computed:Object(h["c"])(["usersSameCompany","user","companys"]),data:function(){return{ans1:0,ans2:0,ans3:0,ans4:0,ans5:0,ans6:0,ans7:0,ans8:0,ans9:0,ans10:[],ans11:[]}},methods:Object(m["a"])({},Object(h["b"])(["getCollegues","getProfile","getCompanies"])),created:function(){var e=this;return Object(g["a"])(regeneratorRuntime.mark((function n(){var a,t,i,c;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:for(e.ans1=e.company.upitnikEdukacija[e.company.upitnikEdukacija.length-1].ans1,e.ans2=e.company.upitnikEdukacija[e.company.upitnikEdukacija.length-1].ans2,e.ans3=e.company.upitnikEdukacija[e.company.upitnikEdukacija.length-1].ans3,e.ans4=e.company.upitnikEdukacija[e.company.upitnikEdukacija.length-1].ans4,e.ans5=e.company.upitnikEdukacija[e.company.upitnikEdukacija.length-1].ans5,e.ans6=e.company.upitnikEdukacija[e.company.upitnikEdukacija.length-1].ans6,e.ans7=e.company.upitnikEdukacija[e.company.upitnikEdukacija.length-1].ans7,e.ans8=e.company.upitnikEdukacija[e.company.upitnikEdukacija.length-1].ans8,e.ans9=e.company.upitnikEdukacija[e.company.upitnikEdukacija.length-1].ans9,a=e.company.upitnikEdukacija[e.company.upitnikEdukacija.length-1].ans10,t="",i=0,console.log("TEMPSTRING: "+a),c=0;c<a.length;c++)"&"==a[c]&&"&"==a[c+1]&&(console.log("Hit if, i: "+c),t=a.slice(i,c),i=c+2,e.ans10.push(t));console.log("ans10: "+e.ans10);case 15:case"end":return n.stop()}}),n)})))()},beforeCreate:function(){document.body.className="other"}});a("bbaf");O.render=f,O.__scopeId="data-v-ebc66026";n["default"]=O},b680:function(e,n,a){"use strict";var t=a("23e7"),i=a("a691"),c=a("408a"),o=a("1148"),r=a("d039"),u=1..toFixed,l=Math.floor,s=function(e,n,a){return 0===n?a:n%2===1?s(e,n-1,a*e):s(e*e,n/2,a)},j=function(e){var n=0,a=e;while(a>=4096)n+=12,a/=4096;while(a>=2)n+=1,a/=2;return n},p=function(e,n,a){var t=-1,i=a;while(++t<6)i+=n*e[t],e[t]=i%1e7,i=l(i/1e7)},d=function(e,n){var a=6,t=0;while(--a>=0)t+=e[a],e[a]=l(t/n),t=t%n*1e7},b=function(e){var n=6,a="";while(--n>=0)if(""!==a||0===n||0!==e[n]){var t=String(e[n]);a=""===a?t:a+o.call("0",7-t.length)+t}return a},k=u&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!r((function(){u.call({})}));t({target:"Number",proto:!0,forced:k},{toFixed:function(e){var n,a,t,r,u=c(this),l=i(e),k=[0,0,0,0,0,0],f="",g="0";if(l<0||l>20)throw RangeError("Incorrect fraction digits");if(u!=u)return"NaN";if(u<=-1e21||u>=1e21)return String(u);if(u<0&&(f="-",u=-u),u>1e-21)if(n=j(u*s(2,69,1))-69,a=n<0?u*s(2,-n,1):u/s(2,n,1),a*=4503599627370496,n=52-n,n>0){p(k,0,a),t=l;while(t>=7)p(k,1e7,0),t-=7;p(k,s(10,t,1),0),t=n-1;while(t>=23)d(k,1<<23),t-=23;d(k,1<<t),p(k,1,1),d(k,2),g=b(k)}else p(k,0,a),p(k,1<<-n,0),g=b(k)+o.call("0",l);return l>0?(r=g.length,g=f+(r<=l?"0."+o.call("0",l-r)+g:g.slice(0,r-l)+"."+g.slice(r-l))):g=f+g,g}})},bbaf:function(e,n,a){"use strict";a("54ef")},fb6a:function(e,n,a){"use strict";var t=a("23e7"),i=a("861d"),c=a("e8b5"),o=a("23cb"),r=a("50c4"),u=a("fc6a"),l=a("8418"),s=a("b622"),j=a("1dde"),p=j("slice"),d=s("species"),b=[].slice,k=Math.max;t({target:"Array",proto:!0,forced:!p},{slice:function(e,n){var a,t,s,j=u(this),p=r(j.length),f=o(e,p),g=o(void 0===n?p:n,p);if(c(j)&&(a=j.constructor,"function"!=typeof a||a!==Array&&!c(a.prototype)?i(a)&&(a=a[d],null===a&&(a=void 0)):a=void 0,a===Array||void 0===a))return b.call(j,f,g);for(t=new(void 0===a?Array:a)(k(g-f,0)),s=0;f<g;f++,s++)f in j&&l(t,s,j[f]);return t.length=s,t}})}}]);
//# sourceMappingURL=chunk-dcd5f89a.d404cc64.js.map