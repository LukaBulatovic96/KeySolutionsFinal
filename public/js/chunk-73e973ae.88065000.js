(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-73e973ae"],{1148:function(e,t,n){"use strict";var a=n("a691"),i=n("577e"),c=n("1d80");e.exports=function(e){var t=i(c(this)),n="",u=a(e);if(u<0||u==1/0)throw RangeError("Wrong number of repetitions");for(;u>0;(u>>>=1)&&(t+=t))1&u&&(n+=t);return n}},"408a":function(e,t){var n=1..valueOf;e.exports=function(e){return n.call(e)}},"96f4":function(e,t,n){"use strict";n.r(t);n("b680");var a=n("7a23");Object(a["w"])("data-v-14d6a315");var i={id:"pdf"},c=Object(a["g"])("h2",null,"Procena sprovedene edukacije - rezultati upitnika",-1),u=Object(a["g"])("p",null,"1. U kojoj meri ciljevi edukacije odgovaraju Vašim potrebama?",-1),r=Object(a["g"])("p",null,"2. U kojoj meri je prezentacija teme bila prikladna?",-1),o=Object(a["g"])("p",null,"3. U kojoj meri ocenjujete stručnost predavača?",-1),l=Object(a["g"])("p",null,"4. U kojoj meri je predavač bio pripremljen?",-1),s=Object(a["g"])("p",null,"5. U kojoj meri smatrate da ćete moći da primenite znanje stečeno na ovoj edukaciji?",-1),p=Object(a["g"])("p",null,"6. Kako ocenjujete kvalitet zadatih vežbi?",-1),j=Object(a["g"])("p",null,"7. Kako ocenjujete izvođenje predavača?",-1),d=Object(a["g"])("p",null,"8. Kako ocenjujete prezentacione veštine predavača?",-1),b=Object(a["g"])("p",null,"9. Kako ocenjujete navedene primere tokom edukacije?",-1),g={class:"answers",id:"ans10"},m=Object(a["g"])("h4",null,"10. Navedite teme za koje smatrate da su bile nevažne za edukaciju i obrazložite odgovor:",-1),k={class:"answers",id:"ans11"},f=Object(a["g"])("h4",null,"11. Navedite dodatne teme za koje mislite da bi trebalo da se uključe u edukacije:",-1);function O(e,t,n,O,h,v){return Object(a["t"])(),Object(a["f"])(a["a"],null,[Object(a["g"])("div",i,[c,u,Object(a["g"])("p",null,[Object(a["g"])("b",null,Object(a["D"])(h.ans1.toFixed(2)),1)]),r,Object(a["g"])("p",null,[Object(a["g"])("b",null,Object(a["D"])(h.ans2.toFixed(2)),1)]),o,Object(a["g"])("p",null,[Object(a["g"])("b",null,Object(a["D"])(h.ans3.toFixed(2)),1)]),l,Object(a["g"])("p",null,[Object(a["g"])("b",null,Object(a["D"])(h.ans4.toFixed(2)),1)]),s,Object(a["g"])("p",null,[Object(a["g"])("b",null,Object(a["D"])(h.ans5.toFixed(2)),1)]),p,Object(a["g"])("p",null,[Object(a["g"])("b",null,Object(a["D"])(h.ans6.toFixed(2)),1)]),j,Object(a["g"])("p",null,[Object(a["g"])("b",null,Object(a["D"])(h.ans7.toFixed(2)),1)]),d,Object(a["g"])("p",null,[Object(a["g"])("b",null,Object(a["D"])(h.ans8.toFixed(2)),1)]),b,Object(a["g"])("p",null,[Object(a["g"])("b",null,Object(a["D"])(h.ans9.toFixed(2)),1)])]),Object(a["g"])("button",{type:"button",name:"button",onClick:t[0]||(t[0]=function(){return v.makePDFVQ&&v.makePDFVQ.apply(v,arguments)})},"Napravi PDF"),Object(a["g"])("div",g,[m,(Object(a["t"])(!0),Object(a["f"])(a["a"],null,Object(a["z"])(h.ans10,(function(e,t){return Object(a["t"])(),Object(a["f"])("div",{class:"holder",key:t},[Object(a["g"])("p",null,Object(a["D"])(t+1)+". "+Object(a["D"])(e),1)])})),128))]),Object(a["g"])("button",{type:"button",name:"button",onClick:t[1]||(t[1]=function(){return v.makePDFVQ1&&v.makePDFVQ1.apply(v,arguments)})},"Napravi PDF"),Object(a["g"])("div",k,[f,(Object(a["t"])(!0),Object(a["f"])(a["a"],null,Object(a["z"])(h.ans11,(function(e,t){return Object(a["t"])(),Object(a["f"])("div",{class:"holder",key:t},[Object(a["g"])("p",null,Object(a["D"])(t+1)+". "+Object(a["D"])(e),1)])})),128))]),Object(a["g"])("button",{type:"button",name:"button",onClick:t[2]||(t[2]=function(){return v.makePDFVQ2&&v.makePDFVQ2.apply(v,arguments)})},"Napravi PDF")],64)}Object(a["u"])();var h=n("1da1"),v=n("5530"),y=(n("fb6a"),n("96cf"),n("5502")),w=n("21c9"),D=n.n(w),E=n("7200"),F={props:{company:{type:Object}},computed:Object(y["c"])(["usersSameCompany","user","companys"]),data:function(){return{ans1:0,ans2:0,ans3:0,ans4:0,ans5:0,ans6:0,ans7:0,ans8:0,ans9:0,ans10:[],ans11:[]}},methods:Object(v["a"])(Object(v["a"])({},Object(y["b"])(["getCollegues","getProfile","getCompanies"])),{},{makePDFVQ:function(){return Object(h["a"])(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=document.getElementById("pdf"),n=new E["a"]("p","pt","a3"),e.next=4,D()(t,{scale:2,allowTaint:!0,useCORS:!0,height:1190,width:840}).then((function(e){n.addImage(e.toDataURL("image/png"),"PNG",0,0,840,1190)}));case 4:n.save("Document.pdf");case 5:case"end":return e.stop()}}),e)})))()},makePDFVQ1:function(){return Object(h["a"])(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=document.getElementById("ans10"),n=new E["a"]("p","pt","a3"),e.next=4,D()(t,{scale:2,allowTaint:!0,useCORS:!0,height:1190,width:840}).then((function(e){n.addImage(e.toDataURL("image/png"),"PNG",0,0,840,1190)}));case 4:n.save("Document.pdf");case 5:case"end":return e.stop()}}),e)})))()},makePDFVQ2:function(){return Object(h["a"])(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=document.getElementById("ans11"),n=new E["a"]("p","pt","a3"),e.next=4,D()(t,{scale:2,allowTaint:!0,useCORS:!0,height:1190,width:840}).then((function(e){n.addImage(e.toDataURL("image/png"),"PNG",0,0,840,1190)}));case 4:n.save("Document.pdf");case 5:case"end":return e.stop()}}),e)})))()}}),created:function(){var e=this;return Object(h["a"])(regeneratorRuntime.mark((function t(){var n,a,i,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:for(e.ans1=e.company.upitnikEdukacija[e.company.upitnikEdukacija.length-1].ans1,e.ans2=e.company.upitnikEdukacija[e.company.upitnikEdukacija.length-1].ans2,e.ans3=e.company.upitnikEdukacija[e.company.upitnikEdukacija.length-1].ans3,e.ans4=e.company.upitnikEdukacija[e.company.upitnikEdukacija.length-1].ans4,e.ans5=e.company.upitnikEdukacija[e.company.upitnikEdukacija.length-1].ans5,e.ans6=e.company.upitnikEdukacija[e.company.upitnikEdukacija.length-1].ans6,e.ans7=e.company.upitnikEdukacija[e.company.upitnikEdukacija.length-1].ans7,e.ans8=e.company.upitnikEdukacija[e.company.upitnikEdukacija.length-1].ans8,e.ans9=e.company.upitnikEdukacija[e.company.upitnikEdukacija.length-1].ans9,n=e.company.upitnikEdukacija[e.company.upitnikEdukacija.length-1].ans10,a="",i=0,c=0;c<n.length;c++)"&"==n[c]&&"&"==n[c+1]&&(a=n.slice(i,c),i=c+2,e.ans10.push(a));for(i=0,n=e.company.upitnikEdukacija[e.company.upitnikEdukacija.length-1].ans11,c=0;c<n.length;c++)"&"==n[c]&&"&"==n[c+1]&&(a=n.slice(i,c),i=c+2,e.ans11.push(a));case 16:case"end":return t.stop()}}),t)})))()},beforeCreate:function(){document.body.className="other"}};n("c480");F.render=O,F.__scopeId="data-v-14d6a315";t["default"]=F},b680:function(e,t,n){"use strict";var a=n("23e7"),i=n("a691"),c=n("408a"),u=n("1148"),r=n("d039"),o=1..toFixed,l=Math.floor,s=function(e,t,n){return 0===t?n:t%2===1?s(e,t-1,n*e):s(e*e,t/2,n)},p=function(e){var t=0,n=e;while(n>=4096)t+=12,n/=4096;while(n>=2)t+=1,n/=2;return t},j=function(e,t,n){var a=-1,i=n;while(++a<6)i+=t*e[a],e[a]=i%1e7,i=l(i/1e7)},d=function(e,t){var n=6,a=0;while(--n>=0)a+=e[n],e[n]=l(a/t),a=a%t*1e7},b=function(e){var t=6,n="";while(--t>=0)if(""!==n||0===t||0!==e[t]){var a=String(e[t]);n=""===n?a:n+u.call("0",7-a.length)+a}return n},g=o&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!r((function(){o.call({})}));a({target:"Number",proto:!0,forced:g},{toFixed:function(e){var t,n,a,r,o=c(this),l=i(e),g=[0,0,0,0,0,0],m="",k="0";if(l<0||l>20)throw RangeError("Incorrect fraction digits");if(o!=o)return"NaN";if(o<=-1e21||o>=1e21)return String(o);if(o<0&&(m="-",o=-o),o>1e-21)if(t=p(o*s(2,69,1))-69,n=t<0?o*s(2,-t,1):o/s(2,t,1),n*=4503599627370496,t=52-t,t>0){j(g,0,n),a=l;while(a>=7)j(g,1e7,0),a-=7;j(g,s(10,a,1),0),a=t-1;while(a>=23)d(g,1<<23),a-=23;d(g,1<<a),j(g,1,1),d(g,2),k=b(g)}else j(g,0,n),j(g,1<<-t,0),k=b(g)+u.call("0",l);return l>0?(r=k.length,k=m+(r<=l?"0."+u.call("0",l-r)+k:k.slice(0,r-l)+"."+k.slice(r-l))):k=m+k,k}})},ba83:function(e,t,n){},c480:function(e,t,n){"use strict";n("ba83")},fb6a:function(e,t,n){"use strict";var a=n("23e7"),i=n("861d"),c=n("e8b5"),u=n("23cb"),r=n("50c4"),o=n("fc6a"),l=n("8418"),s=n("b622"),p=n("1dde"),j=p("slice"),d=s("species"),b=[].slice,g=Math.max;a({target:"Array",proto:!0,forced:!j},{slice:function(e,t){var n,a,s,p=o(this),j=r(p.length),m=u(e,j),k=u(void 0===t?j:t,j);if(c(p)&&(n=p.constructor,"function"!=typeof n||n!==Array&&!c(n.prototype)?i(n)&&(n=n[d],null===n&&(n=void 0)):n=void 0,n===Array||void 0===n))return b.call(p,m,k);for(a=new(void 0===n?Array:n)(g(k-m,0)),s=0;m<k;m++,s++)m in p&&l(a,s,p[m]);return a.length=s,a}})}}]);
//# sourceMappingURL=chunk-73e973ae.88065000.js.map