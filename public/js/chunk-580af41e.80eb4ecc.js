(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-580af41e"],{1148:function(t,a,n){"use strict";var e=n("a691"),i=n("577e"),s=n("1d80");t.exports=function(t){var a=i(s(this)),n="",c=e(t);if(c<0||c==1/0)throw RangeError("Wrong number of repetitions");for(;c>0;(c>>>=1)&&(a+=a))1&c&&(n+=a);return n}},"408a":function(t,a){var n=1..valueOf;t.exports=function(t){return n.call(t)}},a5ee:function(t,a,n){},af37:function(t,a,n){"use strict";n("a5ee")},b0c0:function(t,a,n){var e=n("83ab"),i=n("9bf2").f,s=Function.prototype,c=s.toString,d=/^\s*function ([^ (]*)/,l="name";e&&!(l in s)&&i(s,l,{configurable:!0,get:function(){try{return c.call(this).match(d)[1]}catch(t){return""}}})},b680:function(t,a,n){"use strict";var e=n("23e7"),i=n("a691"),s=n("408a"),c=n("1148"),d=n("d039"),l=1..toFixed,r=Math.floor,o=function(t,a,n){return 0===a?n:a%2===1?o(t,a-1,n*t):o(t*t,a/2,n)},p=function(t){var a=0,n=t;while(n>=4096)a+=12,n/=4096;while(n>=2)a+=1,n/=2;return a},u=function(t,a,n){var e=-1,i=n;while(++e<6)i+=a*t[e],t[e]=i%1e7,i=r(i/1e7)},b=function(t,a){var n=6,e=0;while(--n>=0)e+=t[n],t[n]=r(e/a),e=e%a*1e7},j=function(t){var a=6,n="";while(--a>=0)if(""!==n||0===a||0!==t[a]){var e=String(t[a]);n=""===n?e:n+c.call("0",7-e.length)+e}return n},v=l&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!d((function(){l.call({})}));e({target:"Number",proto:!0,forced:v},{toFixed:function(t){var a,n,e,d,l=s(this),r=i(t),v=[0,0,0,0,0,0],O="",g="0";if(r<0||r>20)throw RangeError("Incorrect fraction digits");if(l!=l)return"NaN";if(l<=-1e21||l>=1e21)return String(l);if(l<0&&(O="-",l=-l),l>1e-21)if(a=p(l*o(2,69,1))-69,n=a<0?l*o(2,-a,1):l/o(2,a,1),n*=4503599627370496,a=52-a,a>0){u(v,0,n),e=r;while(e>=7)u(v,1e7,0),e-=7;u(v,o(10,e,1),0),e=a-1;while(e>=23)b(v,1<<23),e-=23;b(v,1<<e),u(v,1,1),b(v,2),g=j(v)}else u(v,0,n),u(v,1<<-a,0),g=j(v)+c.call("0",r);return r>0?(d=g.length,g=O+(d<=r?"0."+c.call("0",r-d)+g:g.slice(0,d-r)+"."+g.slice(d-r))):g=O+g,g}})},c3e1:function(t,a,n){"use strict";n.r(a);n("b0c0"),n("b680");var e=n("7a23"),i=n("e962"),s=n.n(i);Object(e["w"])("data-v-e287d170");var c={class:"glavni"},d={class:"container"},l=Object(e["g"])("div",{class:""},[Object(e["g"])("img",{src:s.a,alt:"",id:"logo"})],-1),r={class:"form-group"},o=Object(e["g"])("label",{for:"collegue"},"Zaposleni:",-1),p={class:"buttonWrapper1"},u={key:0,class:""},b=Object(e["g"])("div",{class:"glavni"},[Object(e["g"])("h2",null,"Procena Kandidata")],-1),j={key:0,class:""},v={id:"procena"},O={class:"wrap"},g=Object(e["g"])("p",null,"Legenda: 1 - Osnovno, 2 - Srednje, 3 - Odlično",-1),h={class:"container"},k={class:""},m=Object(e["g"])("b",null,"Ime kandidata:",-1),K=Object(e["g"])("b",null,"Godište:",-1),z=Object(e["g"])("b",null,"Prebivalište:",-1),f=Object(e["g"])("b",null,"Pozicija za koju konkuriše:",-1),y={class:""},V=Object(e["g"])("b",null,"Stepen edukacije:",-1),P=Object(e["g"])("b",null,"Stepen poznavanja Engleskog:",-1),D=Object(e["g"])("b",null,"Stepen poznavanja Nemačkog:",-1),q=Object(e["g"])("b",null,"Poznavanje rada na računaru:",-1),w={class:"question"},S=Object(e["g"])("div",{class:"questionAlt"},[Object(e["g"])("h5",null,"Legenda: 1 - izuzetno loše, 2 - nezadovoljavajuće, 3 - zadovoljavajuće, 4 - vrlo dobro, 5 - odlično")],-1),C={class:"question"},R=Object(e["g"])("h3",null,"1. Izgled i samopouzdanje kandidata.",-1),x=Object(e["g"])("b",null,"Ocena - ",-1),N={style:{"text-align":"left"}},I={style:{"white-space":"pre-line"}},E=Object(e["g"])("b",null,"Komentar: ",-1),A={class:"questionAlt"},T=Object(e["g"])("h3",null,"2. Komunikativnost i izražavanje.",-1),F=Object(e["g"])("b",null,"Ocena - ",-1),B={style:{"text-align":"left"}},Q={style:{"white-space":"pre-line"}},U=Object(e["g"])("b",null,"Komentar: ",-1),L={class:"question"},H=Object(e["g"])("h3",null,"3. Energičnost i ambicioznost.",-1),G=Object(e["g"])("b",null,"Ocena - ",-1),J={style:{"text-align":"left"}},Z={style:{"white-space":"pre-line"}},M=Object(e["g"])("b",null,"Komentar: ",-1),W={class:"questionAlt"},_=Object(e["g"])("h3",null,"4. Sposobnost organizovanja vremena.",-1),X=Object(e["g"])("b",null,"Ocena - ",-1),Y={style:{"text-align":"left"}},$={style:{"white-space":"pre-line"}},tt=Object(e["g"])("b",null,"Komentar: ",-1),at={class:"question"},nt=Object(e["g"])("h3",null,"5. Opredeljenost ka klijentu.",-1),et=Object(e["g"])("b",null,"Ocena - ",-1),it={style:{"text-align":"left"}},st={style:{"white-space":"pre-line"}},ct=Object(e["g"])("b",null,"Komentar: ",-1),dt={class:"questionAlt"},lt=Object(e["g"])("h3",null,"6. Prilagodljivost i timski rad.",-1),rt=Object(e["g"])("b",null,"Ocena - ",-1),ot={style:{"text-align":"left"}},pt={style:{"white-space":"pre-line"}},ut=Object(e["g"])("b",null,"Komentar: ",-1),bt={class:"question"},jt=Object(e["g"])("h3",null,"7. Sklonost ka odlučivanju i prepoznavanje prioriteta.",-1),vt=Object(e["g"])("b",null,"Ocena - ",-1),Ot={style:{"text-align":"left"}},gt={style:{"white-space":"pre-line"}},ht=Object(e["g"])("b",null,"Komentar: ",-1),kt={class:"questionAlt"},mt=Object(e["g"])("h3",null,"8. Radno iskustvo.",-1),Kt=Object(e["g"])("b",null,"Ocena - ",-1),zt={style:{"text-align":"left"}},ft={style:{"white-space":"pre-line"}},yt=Object(e["g"])("b",null,"Komentar: ",-1),Vt={class:"question"},Pt=Object(e["g"])("h3",null,"9. Razlozi napuštanja prethodnih radnih mesta.",-1),Dt=Object(e["g"])("b",null,"Ocena - ",-1),qt={style:{"text-align":"left"}},wt={style:{"white-space":"pre-line"}},St=Object(e["g"])("b",null,"Komentar: ",-1),Ct={class:"questionAlt"},Rt=Object(e["g"])("h3",null,"10. Najveći rezultat u karijeri.",-1),xt=Object(e["g"])("b",null,"Ocena - ",-1),Nt={style:{"text-align":"left"}},It={style:{"white-space":"pre-line"}},Et=Object(e["g"])("b",null,"Komentar: ",-1),At={class:"question"},Tt=Object(e["g"])("h3",null,"11. Motivacija za ovaj posao.",-1),Ft=Object(e["g"])("b",null,"Ocena - ",-1),Bt={style:{"text-align":"left"}},Qt={style:{"white-space":"pre-line"}},Ut=Object(e["g"])("b",null,"Komentar: ",-1),Lt={class:"questionAlt"},Ht=Object(e["g"])("h3",null,"12. Posedovanje vozačke dozvole.",-1),Gt={style:{"text-align":"left"}},Jt={style:{"white-space":"pre-line"}},Zt=Object(e["g"])("b",null,"Komentar: ",-1),Mt={class:"question"},Wt=Object(e["g"])("h3",null,"13. Otkazni rok.",-1),_t={style:{"text-align":"left"}},Xt={style:{"white-space":"pre-line"}},Yt=Object(e["g"])("b",null,"Komentar: ",-1),$t={class:"questionAlt"},ta=Object(e["g"])("h3",null,"14. Finansijska očekivanja.",-1),aa={style:{"text-align":"left"}},na={style:{"white-space":"pre-line"}},ea=Object(e["g"])("b",null,"Komentar: ",-1),ia={key:1,class:""},sa=Object(e["g"])("h3",null,"Procena kandidata nije urađena",-1),ca=[sa],da={key:1,class:""},la=Object(e["g"])("div",{class:"glavni"},[Object(e["g"])("h2",null,"Psihološka Procena")],-1),ra={key:0,class:""},oa={class:"buttonWrapper"},pa={id:"pdf"},ua={class:"wrapper"},ba={class:"page",id:"page1"},ja=Object(e["g"])("div",{class:"headerProcena"},[Object(e["g"])("h4",null,"REZULTATI TESTIRANJA OSOBINA LIČNOSTI "),Object(e["g"])("h4",null,"(NEO PI-R test ličnosti)")],-1),va={class:"bodyProcena"},Oa={style:{"text-align":"left"}},ga={style:{"white-space":"pre-line"}},ha={class:"page",id:"page2"},ka=Object(e["g"])("div",{class:"headerProcena"},[Object(e["g"])("h4",null,"OSOBINE LIČNOSTI (POZITIVNE)")],-1),ma={class:"bodyProcena"},Ka={class:"page",id:"page3"},za=Object(e["g"])("div",{class:"headerProcena"},[Object(e["g"])("h4",null,"OSOBINE LIČNOSTI (NEGATIVNE)")],-1),fa={class:"bodyProcena"},ya={class:"page",id:"page4"},Va=Object(e["g"])("div",{class:"headerProcena"},[Object(e["g"])("h4",null,"INTEGRISANO MIŠLJENJE PSIHOLOGA ")],-1),Pa={class:"bodyProcena"},Da={style:{"text-align":"left"}},qa={style:{"white-space":"pre-line"}},wa={class:"page",id:"page5"},Sa=Object(e["g"])("div",{class:"headerProcena"},[Object(e["g"])("h4",null,"REZULTATI NA OSNOVU VQ TESTA ")],-1),Ca={key:0,class:""},Ra={class:"bodyProcena"},xa={id:"aa"},Na={key:0,class:"vqPovucen"},Ia=Object(e["g"])("p",null,'Vаšа "vоlја zа živоtоm" је slаbа ili pоtisnutа. Vi nistе zаdоvоlјni svеtоm ili živоtоm tаkvim kаkvi jesu, аli nistе sklоni dа ih menjate. Gеnеrаlnо sе оsеćаtе ugrоžеnim, dоgаđајimа i lјudimа. Višе vоlitе dа sе pоvučеtе nеgо dа se eksponirate. Žеlitе dа vоditе mirаn živоt, dаlеkо оd svеtskоg mеtеžа. Nеmаtе ni јаkе žеlје, ni јаkе аmbiciје. Drugi Vаs mоgu dоživеti kао pаsivnе ili stаtičnе. Bеz iniciјаtivе, nеprеduzimlјivе. Kао nеkоg kо višе vоli kоntеmplаciјu оd аkciје. Vеrоvаtnо је Vаš mоtо: "Nеmа pоtrеbе gurаti rеku, оnа svаkаkо tеčе."',-1),Ea={key:1,class:"vqOprezan"},Aa=Object(e["g"])("p",null,'Vasa "volja za zivotom" je u pripravnosti. Vi ste budni, posmatrate svet oko sebe i procenjujete potencijalni uticaj dogadjaja na Vas zivot. Spremni ste da reagujete ako je potrebno, ali niste skloni da se pokrenete i preuzmete inicijativu, ukoliko niste primorani na to. ',-1),Ta=Object(e["g"])("p",null,'Pоkušаćete dа izbеgnе rizikе i dа sе zаštititе оd nеоčеkivаnоg. Pоuzdаni ste kао prоfеsiоnаlаc i kао priјаtеlј, svе dоk sе nе nаđеtе u kоntrоvеrznој ili rizičnој situаciјi. Prihvаtićеtе оpšti trеnd rаzmišlјаnjа zа kојi prоcеnitе dа је rаzumаn. U principu vоlitе lјudе, аli žеlitе dа prоvеritе dа li su pоuzdаni. Kаdа sе sа nеkim priјаtnо оsеćаtе, dаćеtе svе оd sеbе dа mu budеtе оd pоmоći. Drugi Vаs dоživlјаvајu prе kао nеkоg kо prihvаtа inciјаtivu, nеgо kао iniciјаtоrа. Kао nеkоg kо ćе sеdеti nа оgrаdi dоk nе vidi u kоm prаvcu vеtаr duvа. Kао stеrеоtipnоg pо nаčinu rаzmišlјаnjа i kао nе bаš stimulаtivnоg. Vаš mоtо је vеrоvаtnо: "Višе vоlim dа igrаm nа sigurnо".',-1),Fa={key:2,class:"vqAngazovan"},Ba=Object(e["g"])("p",null,'Vаšа "vоlја zа živоtоm" је аktivirаnа. Vi stе "аktеr". Pоkrеćе Vаs svеt. Živоt је pun mоgućnоsti kоје su i zаbаvnе i kоrisnе. Žеlitе dа idеtе dаlје: dа rаditе stvаri i dа uživаtе u živоtu. Vi ćеtе inicirаti nоvе prојеktе, kаkо u Vаšеm prоfеsiоnаlnоm, tаkо i u Vаšеm ličnоm živоtu. Privućićе Vаs lјudi sа kојimа оsеćаte dа mоžеtе dа rаditе rаznе stvаri: pаrtnеri, prе nеgо drugоvi ili srоdnе dušе. Vоlitе prеuzimаnjе оdgоvоrnоsti i nе plаšitе sе оd pојаvlјivаnjа u јаvnоsti i prihvatanja rizikа. Маštоviti stе.',-1),Qa=Object(e["g"])("p",null,"Drugi lјudi ćе Vаs vеrоvаtnо dоživеti kао lidеrа, kао nеkоg sа idејаmа i iniciјаtivоm, аktivnоg i pоuzdаnоg, zаnimlјivоg. Моždа ćе Vаs dоživеti i kао prеvišе zаuzеtоg, kао nеkоg kо sе nе prеdаје zаbаvi ili оpuštаnju, kао nеkоg kоgа sе nе tiču ličnа оsеćаnjа ili prоblеmi drugih lјudi, kао еgоistu.",-1),Ua=Object(e["g"])("p",null,'Vаš mоtо је vеrоvаtnо:"Hајdе dа tо urаdimо!"',-1),La={key:3,class:"vqHiperaktivan"},Ha=Object(e["g"])("p",null,'Vаšа "vоlја zа živоtоm" је оgrоmnа. Vi stе "prеduzеtnik", "оsvајаč". U sebi kоnstаntnо osećate pritisаk. Vi sе nikаdа nе mоžеtе stvаrnо оpustiti i čаk i kаdа uživаtе u zаbаvi, uvеk i dаlје rаzmišlјаtе о nеkоm pоslu kојi trеbа dа оbаvitе. Моrаtе biti аngаžоvаni u nеkоm prојеktu i morate imati osećaj dа stаlnо širitе svојu "mоć zа živоt". Pо Vаmа, "svеt trеbа zgrаbiti!" Vi stе nеstrplјivi, nikаd zаdоvоlјni, оsim tоkоm krаtkih trеnutаkа pоstignućа. Pоtrеbnо Vаm је dа vоditе, dа prеuzimаtе оdgоvоrnоst, јеr u suprоtnоm mislitе dа sе stvаri nеćе оdviјаti brzо ili dоvоlјnо еfikаsnо, оdnоsnо nеćе ići "nа Vаš nаčin". Drugi lјudi su u suštini izvršiоci Vаših pоduhvаtа, oni trеbа dа iznеsu Vаšе prојеktе. Nistе uоpštе zаintеrеsоvаni zа njihоv lični živоt. Vеоmа stе krеаtivni. Оd Vаs mоžе pоstаti vеliki lidеr, pоd uslоvоm dа nе prеtеruјеtе ...',-1),Ga=Object(e["g"])("p",null,"Drugi Vаs uglаvnоm vidе kао hipеr-аktivаnоg, vrlо mаštоvitоg, uvеk u pоkrеtu, inоvаtivnоg. Sа mаnjе pоzitivnе strаnе, mоgli bi Vаs smаtrаti zа prеvišе nаpаdnоg, аrоgаntnоg, аgrеsivnоg, nаpоrnоg, zаpоvеdnički nаstrојеnоg. Kао nikаd zаdоvоlјnоg rаdоhоličаrа, kојi nе shvаtа u čеmu su prаvе vrеdnоsti živоtа. Kао nеоsеtlјivоg prеmа drugim lјudimа i bеz ličnоg živоtа.",-1),Ja=Object(e["g"])("p",null,'Vаš mоtо је vеrоvаtnо: "Višе је bоlје".',-1),Za={key:1,class:""},Ma={class:"bodyProcena"},Wa={style:{"text-align":"left"}},_a={style:{"white-space":"pre-line"}},Xa={key:1,class:""},Ya={id:"pdfx"},$a={class:"pagex",id:"page1"},tn=Object(e["g"])("div",{class:"headerProcena"},[Object(e["g"])("h4",null,"Rezultati testiranja osobina licnosti"),Object(e["g"])("h4",null,"(NEO PI-R test licnosti)")],-1),an={class:"bodyProcena"},nn={style:{"text-align":"left"}},en={style:{"white-space":"pre-line"}},sn={class:"pagex",id:"page2"},cn=Object(e["g"])("div",{class:"headerProcena"},[Object(e["g"])("h4",null,"Osobine licnosti (pozitivne)")],-1),dn={class:"bodyProcena"},ln={class:"pagex",id:"page3"},rn=Object(e["g"])("div",{class:"headerProcena"},[Object(e["g"])("h4",null,"Osobine licnosti (negativne)")],-1),on={class:"bodyProcena"},pn={class:"pagex",id:"page4"},un=Object(e["g"])("div",{class:"headerProcena"},[Object(e["g"])("h4",null,"Integrisano mišljenje psihologa")],-1),bn={class:"bodyProcena"},jn={style:{"text-align":"left"}},vn={style:{"white-space":"pre-line"}},On={class:"pdfVQ",id:"vqTest"},gn={key:0,class:""},hn={key:0,class:"vqPovucen"},kn=Object(e["g"])("p",null,'Vаšа "vоlја zа živоtоm" је slаbа ili pоtisnutа. Vi nistе zаdоvоlјni svеtоm ili živоtоm tаkvim kаkvi jesu, аli nistе sklоni dа ih menjate. Gеnеrаlnо sе оsеćаtе ugrоžеnim, dоgаđајimа i lјudimа. Višе vоlitе dа sе pоvučеtе nеgо dа se eksponirate. Žеlitе dа vоditе mirаn živоt, dаlеkо оd svеtskоg mеtеžа. Nеmаtе ni јаkе žеlје, ni јаkе аmbiciје. Drugi Vаs mоgu dоživеti kао pаsivnе ili stаtičnе. Bеz iniciјаtivе, nеprеduzimlјivе. Kао nеkоg kо višе vоli kоntеmplаciјu оd аkciје. Vеrоvаtnо је Vаš mоtо: "Nеmа pоtrеbе gurаti rеku, оnа svаkаkо tеčе."',-1),mn={key:1,class:"vqOprezan"},Kn=Object(e["g"])("p",null,'Vasa "volja za zivotom" je u pripravnosti. Vi ste budni, posmatrate svet oko sebe i procenjujete potencijalni uticaj dogadjaja na Vas zivot. Spremni ste da reagujete ako je potrebno, ali niste skloni da se pokrenete i preuzmete inicijativu, ukoliko niste primorani na to. ',-1),zn=Object(e["g"])("p",null,'Pоkušаćete dа izbеgnе rizikе i dа sе zаštititе оd nеоčеkivаnоg. Pоuzdаni ste kао prоfеsiоnаlаc i kао priјаtеlј, svе dоk sе nе nаđеtе u kоntrоvеrznој ili rizičnој situаciјi. Prihvаtićеtе оpšti trеnd rаzmišlјаnjа zа kојi prоcеnitе dа је rаzumаn. U principu vоlitе lјudе, аli žеlitе dа prоvеritе dа li su pоuzdаni. Kаdа sе sа nеkim priјаtnо оsеćаtе, dаćеtе svе оd sеbе dа mu budеtе оd pоmоći. Drugi Vаs dоživlјаvајu prе kао nеkоg kо prihvаtа inciјаtivu, nеgо kао iniciјаtоrа. Kао nеkоg kо ćе sеdеti nа оgrаdi dоk nе vidi u kоm prаvcu vеtаr duvа. Kао stеrеоtipnоg pо nаčinu rаzmišlјаnjа i kао nе bаš stimulаtivnоg. Vаš mоtо је vеrоvаtnо: "Višе vоlim dа igrаm nа sigurnо".',-1),fn={key:2,class:"vqAngazovan"},yn=Object(e["g"])("p",null,'Vаšа "vоlја zа živоtоm" је аktivirаnа. Vi stе "аktеr". Pоkrеćе Vаs svеt. Živоt је pun mоgućnоsti kоје su i zаbаvnе i kоrisnе. Žеlitе dа idеtе dаlје: dа rаditе stvаri i dа uživаtе u živоtu. Vi ćеtе inicirаti nоvе prојеktе, kаkо u Vаšеm prоfеsiоnаlnоm, tаkо i u Vаšеm ličnоm živоtu. Privućićе Vаs lјudi sа kојimа оsеćаte dа mоžеtе dа rаditе rаznе stvаri: pаrtnеri, prе nеgо drugоvi ili srоdnе dušе. Vоlitе prеuzimаnjе оdgоvоrnоsti i nе plаšitе sе оd pојаvlјivаnjа u јаvnоsti i prihvatanja rizikа. Маštоviti stе.',-1),Vn=Object(e["g"])("p",null,"Drugi lјudi ćе Vаs vеrоvаtnо dоživеti kао lidеrа, kао nеkоg sа idејаmа i iniciјаtivоm, аktivnоg i pоuzdаnоg, zаnimlјivоg. Моždа ćе Vаs dоživеti i kао prеvišе zаuzеtоg, kао nеkоg kо sе nе prеdаје zаbаvi ili оpuštаnju, kао nеkоg kоgа sе nе tiču ličnа оsеćаnjа ili prоblеmi drugih lјudi, kао еgоistu.",-1),Pn=Object(e["g"])("p",null,'Vаš mоtо је vеrоvаtnо:"Hајdе dа tо urаdimо!"',-1),Dn={key:3,class:"vqHiperaktivan"},qn=Object(e["g"])("p",null,'Vаšа "vоlја zа živоtоm" је оgrоmnа. Vi stе "prеduzеtnik", "оsvајаč". U sebi kоnstаntnо osećate pritisаk. Vi sе nikаdа nе mоžеtе stvаrnо оpustiti i čаk i kаdа uživаtе u zаbаvi, uvеk i dаlје rаzmišlјаtе о nеkоm pоslu kојi trеbа dа оbаvitе. Моrаtе biti аngаžоvаni u nеkоm prојеktu i morate imati osećaj dа stаlnо širitе svојu "mоć zа živоt". Pо Vаmа, "svеt trеbа zgrаbiti!" Vi stе nеstrplјivi, nikаd zаdоvоlјni, оsim tоkоm krаtkih trеnutаkа pоstignućа. Pоtrеbnо Vаm је dа vоditе, dа prеuzimаtе оdgоvоrnоst, јеr u suprоtnоm mislitе dа sе stvаri nеćе оdviјаti brzо ili dоvоlјnо еfikаsnо, оdnоsnо nеćе ići "nа Vаš nаčin". Drugi lјudi su u suštini izvršiоci Vаših pоduhvаtа, oni trеbа dа iznеsu Vаšе prојеktе. Nistе uоpštе zаintеrеsоvаni zа njihоv lični živоt. Vеоmа stе krеаtivni. Оd Vаs mоžе pоstаti vеliki lidеr, pоd uslоvоm dа nе prеtеruјеtе ...',-1),wn=Object(e["g"])("p",null,"Drugi Vаs uglаvnоm vidе kао hipеr-аktivаnоg, vrlо mаštоvitоg, uvеk u pоkrеtu, inоvаtivnоg. Sа mаnjе pоzitivnе strаnе, mоgli bi Vаs smаtrаti zа prеvišе nаpаdnоg, аrоgаntnоg, аgrеsivnоg, nаpоrnоg, zаpоvеdnički nаstrојеnоg. Kао nikаd zаdоvоlјnоg rаdоhоličаrа, kојi nе shvаtа u čеmu su prаvе vrеdnоsti živоtа. Kао nеоsеtlјivоg prеmа drugim lјudimа i bеz ličnоg živоtа.",-1),Sn=Object(e["g"])("p",null,'Vаš mоtо је vеrоvаtnо: "Višе је bоlје".',-1),Cn={key:1,class:""},Rn={class:"bodyProcena"},xn={style:{"text-align":"left"}},Nn={style:{"white-space":"pre-line"}},In={key:2,class:""},En=Object(e["g"])("h2",null,"Nije urađena procena",-1),An=[En];function Tn(t,a,n,i,s,sa){return Object(e["t"])(),Object(e["f"])(e["a"],null,[Object(e["g"])("div",c,[Object(e["g"])("div",d,[l,Object(e["g"])("div",r,[o,Object(e["L"])(Object(e["g"])("select",{name:"collegue",id:"collegue","onUpdate:modelValue":a[0]||(a[0]=function(t){return s.podredjeniName=t}),onChange:a[1]||(a[1]=function(t){return sa.onChangePodredjeni(t)})},[(Object(e["t"])(!0),Object(e["f"])(e["a"],null,Object(e["z"])(t.usersSameCompany,(function(t){return Object(e["t"])(),Object(e["f"])("option",{key:t.name},Object(e["D"])(t.name),1)})),128))],544),[[e["H"],s.podredjeniName]])])])]),Object(e["g"])("div",p,[Object(e["g"])("button",{class:"pdfButtons",type:"button",name:"button",onClick:a[2]||(a[2]=function(t){return sa.changeProcenaState(0)})},"Procena Kandidata"),Object(e["g"])("button",{class:"pdfButtons1",type:"button",name:"button",onClick:a[3]||(a[3]=function(t){return sa.changeProcenaState(1)})},"Psiholoska Procena")]),0==s.procenaState?(Object(e["t"])(),Object(e["f"])("div",u,[b,null!=s.procenaKandidata?(Object(e["t"])(),Object(e["f"])("div",j,[Object(e["g"])("div",v,[Object(e["g"])("div",O,[g,Object(e["g"])("div",h,[Object(e["g"])("div",k,[Object(e["g"])("p",null,[m,Object(e["i"])(" "+Object(e["D"])(s.podredjeniCeo.name),1)]),Object(e["g"])("p",null,[K,Object(e["i"])(" "+Object(e["D"])(s.procenaKandidata.godiste),1)]),Object(e["g"])("p",null,[z,Object(e["i"])(" "+Object(e["D"])(s.procenaKandidata.prebivaliste),1)]),Object(e["g"])("p",null,[f,Object(e["i"])(" "+Object(e["D"])(s.procenaKandidata.pozicija),1)])]),Object(e["g"])("div",y,[Object(e["g"])("p",null,[V,Object(e["i"])(" "+Object(e["D"])(s.procenaKandidata.stepenSS),1)]),Object(e["g"])("p",null,[P,Object(e["i"])(" "+Object(e["D"])(s.procenaKandidata.stepenEng),1)]),Object(e["g"])("p",null,[D,Object(e["i"])(" "+Object(e["D"])(s.procenaKandidata.stepenNem),1)]),Object(e["g"])("p",null,[q,Object(e["i"])(" "+Object(e["D"])(s.procenaKandidata.stepenRacunar),1)])])])]),Object(e["g"])("div",w,[Object(e["g"])("h3",null,"Ukupna Ocena: "+Object(e["D"])(s.ukupnaOcena)+" ("+Object(e["D"])(s.prosekOcena.toFixed(2))+")",1)]),S,Object(e["g"])("div",C,[R,Object(e["g"])("p",null,[x,Object(e["i"])(Object(e["D"])(s.procenaKandidata.ans1),1)]),Object(e["g"])("p",N,[Object(e["g"])("span",I,[E,Object(e["i"])(Object(e["D"])(s.procenaKandidata.ans1Desc),1)])])]),Object(e["g"])("div",A,[T,Object(e["g"])("p",null,[F,Object(e["i"])(Object(e["D"])(s.procenaKandidata.ans2),1)]),Object(e["g"])("p",B,[Object(e["g"])("span",Q,[U,Object(e["i"])(Object(e["D"])(s.procenaKandidata.ans2Desc),1)])])]),Object(e["g"])("div",L,[H,Object(e["g"])("p",null,[G,Object(e["i"])(Object(e["D"])(s.procenaKandidata.ans3),1)]),Object(e["g"])("p",J,[Object(e["g"])("span",Z,[M,Object(e["i"])(Object(e["D"])(s.procenaKandidata.ans3Desc),1)])])]),Object(e["g"])("div",W,[_,Object(e["g"])("p",null,[X,Object(e["i"])(Object(e["D"])(s.procenaKandidata.ans4),1)]),Object(e["g"])("p",Y,[Object(e["g"])("span",$,[tt,Object(e["i"])(Object(e["D"])(s.procenaKandidata.ans4Desc),1)])])]),Object(e["g"])("div",at,[nt,Object(e["g"])("p",null,[et,Object(e["i"])(Object(e["D"])(s.procenaKandidata.ans5),1)]),Object(e["g"])("p",it,[Object(e["g"])("span",st,[ct,Object(e["i"])(Object(e["D"])(s.procenaKandidata.ans5Desc),1)])])]),Object(e["g"])("div",dt,[lt,Object(e["g"])("p",null,[rt,Object(e["i"])(Object(e["D"])(s.procenaKandidata.ans6),1)]),Object(e["g"])("p",ot,[Object(e["g"])("span",pt,[ut,Object(e["i"])(Object(e["D"])(s.procenaKandidata.ans6Desc),1)])])]),Object(e["g"])("div",bt,[jt,Object(e["g"])("p",null,[vt,Object(e["i"])(Object(e["D"])(s.procenaKandidata.ans7),1)]),Object(e["g"])("p",Ot,[Object(e["g"])("span",gt,[ht,Object(e["i"])(Object(e["D"])(s.procenaKandidata.ans7Desc),1)])])]),Object(e["g"])("div",kt,[mt,Object(e["g"])("p",null,[Kt,Object(e["i"])(Object(e["D"])(s.procenaKandidata.ans8),1)]),Object(e["g"])("p",zt,[Object(e["g"])("span",ft,[yt,Object(e["i"])(Object(e["D"])(s.procenaKandidata.ans8Desc),1)])])]),Object(e["g"])("div",Vt,[Pt,Object(e["g"])("p",null,[Dt,Object(e["i"])(Object(e["D"])(s.procenaKandidata.ans9),1)]),Object(e["g"])("p",qt,[Object(e["g"])("span",wt,[St,Object(e["i"])(Object(e["D"])(s.procenaKandidata.ans9Desc),1)])])]),Object(e["g"])("div",Ct,[Rt,Object(e["g"])("p",null,[xt,Object(e["i"])(Object(e["D"])(s.procenaKandidata.ans10),1)]),Object(e["g"])("p",Nt,[Object(e["g"])("span",It,[Et,Object(e["i"])(Object(e["D"])(s.procenaKandidata.ans10Desc),1)])])]),Object(e["g"])("div",At,[Tt,Object(e["g"])("p",null,[Ft,Object(e["i"])(Object(e["D"])(s.procenaKandidata.ans11),1)]),Object(e["g"])("p",Bt,[Object(e["g"])("span",Qt,[Ut,Object(e["i"])(Object(e["D"])(s.procenaKandidata.ans11Desc),1)])])]),Object(e["g"])("div",Lt,[Ht,Object(e["g"])("p",Gt,[Object(e["g"])("span",Jt,[Zt,Object(e["i"])(Object(e["D"])(s.procenaKandidata.ans12Desc),1)])])]),Object(e["g"])("div",Mt,[Wt,Object(e["g"])("p",_t,[Object(e["g"])("span",Xt,[Yt,Object(e["i"])(Object(e["D"])(s.procenaKandidata.ans13Desc),1)])])]),Object(e["g"])("div",$t,[ta,Object(e["g"])("p",aa,[Object(e["g"])("span",na,[ea,Object(e["i"])(Object(e["D"])(s.procenaKandidata.ans14Desc),1)])])])])])):Object(e["e"])("",!0),null==s.procenaKandidata?(Object(e["t"])(),Object(e["f"])("div",ia,ca)):Object(e["e"])("",!0)])):Object(e["e"])("",!0),1==s.procenaState?(Object(e["t"])(),Object(e["f"])("div",da,[la,0==s.pdfState&&null!=s.procenaCela?(Object(e["t"])(),Object(e["f"])("div",ra,[Object(e["g"])("div",oa,[Object(e["g"])("button",{class:"pdfButtons",type:"button",name:"button",onClick:a[4]||(a[4]=function(){return sa.changePdfState&&sa.changePdfState.apply(sa,arguments)})},"Pripremi za pravljenje PDF-a")]),Object(e["g"])("div",pa,[Object(e["g"])("div",ua,[Object(e["g"])("div",ba,[ja,Object(e["g"])("div",va,[Object(e["g"])("p",Oa,[Object(e["g"])("span",ga,Object(e["D"])(s.procenaCela.opstaOcena),1)])])]),Object(e["g"])("div",ha,[ka,Object(e["g"])("div",ma,[(Object(e["t"])(!0),Object(e["f"])(e["a"],null,Object(e["z"])(s.procenaCela.pozitivno,(function(t){return Object(e["t"])(),Object(e["f"])("ul",{class:"",key:t},[Object(e["g"])("li",null,Object(e["D"])(t),1)])})),128))])]),Object(e["g"])("div",Ka,[za,Object(e["g"])("div",fa,[(Object(e["t"])(!0),Object(e["f"])(e["a"],null,Object(e["z"])(s.procenaCela.negativno,(function(t){return Object(e["t"])(),Object(e["f"])("ul",{class:"",key:t},[Object(e["g"])("li",null,Object(e["D"])(t),1)])})),128))])]),Object(e["g"])("div",ya,[Va,Object(e["g"])("div",Pa,[Object(e["g"])("p",Da,[Object(e["g"])("span",qa,Object(e["D"])(s.procenaCela.misljenjePsihologa),1)])])]),Object(e["g"])("div",wa,[Sa,s.procenaCela.savedVq?Object(e["e"])("",!0):(Object(e["t"])(),Object(e["f"])("div",Ca,[Object(e["g"])("div",Ra,[Object(e["g"])("div",xa,[s.vqResult<=-15?(Object(e["t"])(),Object(e["f"])("div",Na,[Object(e["g"])("h3",null,'"VQ" prоfil је: "Pоvučеn". ('+Object(e["D"])(s.vqResult)+")",1),Ia])):Object(e["e"])("",!0),s.vqResult>-15&&s.vqResult<=-1?(Object(e["t"])(),Object(e["f"])("div",Ea,[Object(e["g"])("h3",null,'"VQ" Profil je: "Oprezan." ('+Object(e["D"])(s.vqResult)+")",1),Aa,Ta])):Object(e["e"])("",!0),s.vqResult>=1&&s.vqResult<=14?(Object(e["t"])(),Object(e["f"])("div",Fa,[Object(e["g"])("h3",null,'"VQ" Profil je:"Angažovan". ('+Object(e["D"])(s.vqResult)+")",1),Ba,Qa,Ua])):Object(e["e"])("",!0),s.vqResult>=15?(Object(e["t"])(),Object(e["f"])("div",La,[Object(e["g"])("h3",null,'"VQ" prоfil је: "Hipеr-аktivаn". ('+Object(e["D"])(s.vqResult)+")",1),Ha,Ga,Ja])):Object(e["e"])("",!0)])])])),s.procenaCela.savedVq?(Object(e["t"])(),Object(e["f"])("div",Za,[Object(e["g"])("div",Ma,[Object(e["g"])("h3",null,Object(e["D"])(s.procenaCela.vqHeader),1),Object(e["g"])("p",Wa,[Object(e["g"])("span",_a,Object(e["D"])(s.procenaCela.vqBody),1)])])])):Object(e["e"])("",!0)])])])])):Object(e["e"])("",!0),1==s.pdfState&&null!=s.procenaCela?(Object(e["t"])(),Object(e["f"])("div",Xa,[Object(e["g"])("button",{class:"pdfButtons",type:"button",name:"button",onClick:a[5]||(a[5]=function(){return sa.changePdfState&&sa.changePdfState.apply(sa,arguments)})},"Vrati na standardni prikaz"),Object(e["g"])("button",{class:"pdfButtons1",type:"button",name:"button",onClick:a[6]||(a[6]=function(){return sa.makePDF&&sa.makePDF.apply(sa,arguments)})},"Sacuvaj PDF"),Object(e["g"])("button",{class:"pdfButtons",type:"button",name:"button",onClick:a[7]||(a[7]=function(){return sa.makePDFVQ&&sa.makePDFVQ.apply(sa,arguments)})},"Sacuvaj PDF VQ"),Object(e["g"])("div",Ya,[Object(e["g"])("div",$a,[tn,Object(e["g"])("div",an,[Object(e["g"])("p",nn,[Object(e["g"])("span",en,Object(e["D"])(s.procenaCela.opstaOcena),1)])])]),Object(e["g"])("div",sn,[cn,Object(e["g"])("div",dn,[(Object(e["t"])(!0),Object(e["f"])(e["a"],null,Object(e["z"])(s.procenaCela.pozitivno,(function(t){return Object(e["t"])(),Object(e["f"])("ul",{class:"",key:t},[Object(e["g"])("li",null,Object(e["D"])(t),1)])})),128))])]),Object(e["g"])("div",ln,[rn,Object(e["g"])("div",on,[(Object(e["t"])(!0),Object(e["f"])(e["a"],null,Object(e["z"])(s.procenaCela.negativno,(function(t){return Object(e["t"])(),Object(e["f"])("ul",{class:"",key:t},[Object(e["g"])("li",null,Object(e["D"])(t),1)])})),128))])]),Object(e["g"])("div",pn,[un,Object(e["g"])("div",bn,[Object(e["g"])("p",jn,[Object(e["g"])("span",vn,Object(e["D"])(s.procenaCela.misljenjePsihologa),1)])])])]),Object(e["g"])("div",On,[s.procenaCela.savedVq?Object(e["e"])("",!0):(Object(e["t"])(),Object(e["f"])("div",gn,[s.vqResult<=-15?(Object(e["t"])(),Object(e["f"])("div",hn,[Object(e["g"])("h3",null,'"VQ" prоfil је: "Pоvučеn". ('+Object(e["D"])(s.vqResult)+")",1),kn])):Object(e["e"])("",!0),s.vqResult>-15&&s.vqResult<=-1?(Object(e["t"])(),Object(e["f"])("div",mn,[Object(e["g"])("h3",null,'"VQ" Profil je: "Oprezan." ('+Object(e["D"])(s.vqResult)+")",1),Kn,zn])):Object(e["e"])("",!0),s.vqResult>=1&&s.vqResult<=14?(Object(e["t"])(),Object(e["f"])("div",fn,[Object(e["g"])("h3",null,'"VQ" Profil je:"Angažovan". ('+Object(e["D"])(s.vqResult)+")",1),yn,Vn,Pn])):Object(e["e"])("",!0),s.vqResult>=15?(Object(e["t"])(),Object(e["f"])("div",Dn,[Object(e["g"])("h3",null,'"VQ" prоfil је: "Hipеr-аktivаn". ('+Object(e["D"])(s.vqResult)+")",1),qn,wn,Sn])):Object(e["e"])("",!0)])),s.procenaCela.savedVq?(Object(e["t"])(),Object(e["f"])("div",Cn,[Object(e["g"])("div",Rn,[Object(e["g"])("h3",null,Object(e["D"])(s.procenaCela.vqHeader),1),Object(e["g"])("p",xn,[Object(e["g"])("span",Nn,Object(e["D"])(s.procenaCela.vqBody),1)])])])):Object(e["e"])("",!0)])])):Object(e["e"])("",!0),null==s.procenaCela?(Object(e["t"])(),Object(e["f"])("div",In,An)):Object(e["e"])("",!0)])):Object(e["e"])("",!0)],64)}Object(e["u"])();var Fn=n("1da1"),Bn=n("5530"),Qn=(n("96cf"),n("21c9")),Un=n.n(Qn),Ln=n("7200"),Hn=n("5502"),Gn={computed:Object(Hn["c"])(["user","users","companys","usersSameCompany","psiholoskaProcenas"]),data:function(){return{podredjeni:[],podredjeniCeo:{},podredjeniName:"",procenaCela:{},vqResult:0,pdfState:0,procenaState:0,procenaKandidata:{},ukupnaOcena:0,prosekOcena:0}},methods:Object(Bn["a"])(Object(Bn["a"])({},Object(Hn["b"])(["getProfile","getCompanies","getCollegues","getAllPsiholoskaProcena","getAllUsers"])),{},{onChangePodredjeni:function(t){this.procenaCela=null;for(var a=0;a<this.usersSameCompany.length;a++)this.usersSameCompany[a].name==t.target.value&&(this.podredjeniCeo=this.usersSameCompany[a]);for(a=0;a<this.psiholoskaProcenas.length;a++)this.podredjeniCeo._id==this.psiholoskaProcenas[a].idUser&&(this.procenaCela=this.psiholoskaProcenas[a]);this.ukupnaOcena=0,this.procenaKandidata=this.podredjeniCeo.procenaKandidata,null!=this.procenaKandidata&&(this.ukupnaOcena+=parseInt(this.procenaKandidata.ans1),this.ukupnaOcena+=parseInt(this.procenaKandidata.ans2),this.ukupnaOcena+=parseInt(this.procenaKandidata.ans3),this.ukupnaOcena+=parseInt(this.procenaKandidata.ans4),this.ukupnaOcena+=parseInt(this.procenaKandidata.ans5),this.ukupnaOcena+=parseInt(this.procenaKandidata.ans6),this.ukupnaOcena+=parseInt(this.procenaKandidata.ans7),this.ukupnaOcena+=parseInt(this.procenaKandidata.ans8),this.ukupnaOcena+=parseInt(this.procenaKandidata.ans9),this.ukupnaOcena+=parseInt(this.procenaKandidata.ans10),this.ukupnaOcena+=parseInt(this.procenaKandidata.ans11),this.prosekOcena=this.ukupnaOcena/11),1==this.procenaKandidata.ans1&&(this.procenaKandidata.ans1="izuzetno loše"),2==this.procenaKandidata.ans1&&(this.procenaKandidata.ans1="nezadovoljavajuće"),3==this.procenaKandidata.ans1&&(this.procenaKandidata.ans1="zadovoljavajuće"),4==this.procenaKandidata.ans1&&(this.procenaKandidata.ans1="vrlo dobro"),5==this.procenaKandidata.ans1&&(this.procenaKandidata.ans1="odlično"),1==this.procenaKandidata.ans2&&(this.procenaKandidata.ans2="izuzetno loše"),2==this.procenaKandidata.ans2&&(this.procenaKandidata.ans2="nezadovoljavajuće"),3==this.procenaKandidata.ans2&&(this.procenaKandidata.ans2="zadovoljavajuće"),4==this.procenaKandidata.ans2&&(this.procenaKandidata.ans2="vrlo dobro"),5==this.procenaKandidata.ans2&&(this.procenaKandidata.ans2="odlično"),1==this.procenaKandidata.ans3&&(this.procenaKandidata.ans3="izuzetno loše"),2==this.procenaKandidata.ans3&&(this.procenaKandidata.ans3="nezadovoljavajuće"),3==this.procenaKandidata.ans3&&(this.procenaKandidata.ans3="zadovoljavajuće"),4==this.procenaKandidata.ans3&&(this.procenaKandidata.ans3="vrlo dobro"),5==this.procenaKandidata.ans3&&(this.procenaKandidata.ans3="odlično"),1==this.procenaKandidata.ans4&&(this.procenaKandidata.ans4="izuzetno loše"),2==this.procenaKandidata.ans4&&(this.procenaKandidata.ans4="nezadovoljavajuće"),3==this.procenaKandidata.ans4&&(this.procenaKandidata.ans4="zadovoljavajuće"),4==this.procenaKandidata.ans4&&(this.procenaKandidata.ans4="vrlo dobro"),5==this.procenaKandidata.ans4&&(this.procenaKandidata.ans4="odlično"),1==this.procenaKandidata.ans5&&(this.procenaKandidata.ans5="izuzetno loše"),2==this.procenaKandidata.ans5&&(this.procenaKandidata.ans5="nezadovoljavajuće"),3==this.procenaKandidata.ans5&&(this.procenaKandidata.ans5="zadovoljavajuće"),4==this.procenaKandidata.ans5&&(this.procenaKandidata.ans5="vrlo dobro"),5==this.procenaKandidata.ans5&&(this.procenaKandidata.ans5="odlično"),1==this.procenaKandidata.ans6&&(this.procenaKandidata.ans6="izuzetno loše"),2==this.procenaKandidata.ans6&&(this.procenaKandidata.ans6="nezadovoljavajuće"),3==this.procenaKandidata.ans6&&(this.procenaKandidata.ans6="zadovoljavajuće"),4==this.procenaKandidata.ans6&&(this.procenaKandidata.ans6="vrlo dobro"),5==this.procenaKandidata.ans6&&(this.procenaKandidata.ans6="odlično"),1==this.procenaKandidata.ans7&&(this.procenaKandidata.ans7="izuzetno loše"),2==this.procenaKandidata.ans7&&(this.procenaKandidata.ans7="nezadovoljavajuće"),3==this.procenaKandidata.ans7&&(this.procenaKandidata.ans7="zadovoljavajuće"),4==this.procenaKandidata.ans7&&(this.procenaKandidata.ans7="vrlo dobro"),5==this.procenaKandidata.ans7&&(this.procenaKandidata.ans7="odlično"),1==this.procenaKandidata.ans8&&(this.procenaKandidata.ans8="izuzetno loše"),2==this.procenaKandidata.ans8&&(this.procenaKandidata.ans8="nezadovoljavajuće"),3==this.procenaKandidata.ans8&&(this.procenaKandidata.ans8="zadovoljavajuće"),4==this.procenaKandidata.ans8&&(this.procenaKandidata.ans8="vrlo dobro"),5==this.procenaKandidata.ans8&&(this.procenaKandidata.ans8="odlično"),1==this.procenaKandidata.ans9&&(this.procenaKandidata.ans9="izuzetno loše"),2==this.procenaKandidata.ans9&&(this.procenaKandidata.ans9="nezadovoljavajuće"),3==this.procenaKandidata.ans9&&(this.procenaKandidata.ans9="zadovoljavajuće"),4==this.procenaKandidata.ans9&&(this.procenaKandidata.ans9="vrlo dobro"),5==this.procenaKandidata.ans9&&(this.procenaKandidata.ans9="odlično"),1==this.procenaKandidata.ans10&&(this.procenaKandidata.ans10="izuzetno loše"),2==this.procenaKandidata.ans10&&(this.procenaKandidata.ans10="nezadovoljavajuće"),3==this.procenaKandidata.ans10&&(this.procenaKandidata.ans10="zadovoljavajuće"),4==this.procenaKandidata.ans10&&(this.procenaKandidata.ans10="vrlo dobro"),5==this.procenaKandidata.ans10&&(this.procenaKandidata.ans10="odlično"),1==this.procenaKandidata.ans11&&(this.procenaKandidata.ans11="izuzetno loše"),2==this.procenaKandidata.ans11&&(this.procenaKandidata.ans11="nezadovoljavajuće"),3==this.procenaKandidata.ans11&&(this.procenaKandidata.ans11="zadovoljavajuće"),4==this.procenaKandidata.ans11&&(this.procenaKandidata.ans11="vrlo dobro"),5==this.procenaKandidata.ans11&&(this.procenaKandidata.ans11="odlično"),1==this.procenaKandidata.ans12&&(this.procenaKandidata.ans12="izuzetno loše"),2==this.procenaKandidata.ans12&&(this.procenaKandidata.ans12="nezadovoljavajuće"),3==this.procenaKandidata.ans12&&(this.procenaKandidata.ans12="zadovoljavajuće"),4==this.procenaKandidata.ans12&&(this.procenaKandidata.ans12="vrlo dobro"),5==this.procenaKandidata.ans12&&(this.procenaKandidata.ans12="odlično"),1==this.procenaKandidata.stepenEng&&(this.procenaKandidata.stepenEng="Osnovno"),2==this.procenaKandidata.stepenEng&&(this.procenaKandidata.stepenEng="Srednje"),3==this.procenaKandidata.stepenEng&&(this.procenaKandidata.stepenEng="Odlično"),1==this.procenaKandidata.stepenNem&&(this.procenaKandidata.stepenNem="Osnovno"),2==this.procenaKandidata.stepenNem&&(this.procenaKandidata.stepenNem="Srednje"),3==this.procenaKandidata.stepenNem&&(this.procenaKandidata.stepenNem="Odlično"),1==this.procenaKandidata.stepenRacunar&&(this.procenaKandidata.stepenRacunar="Osnovno"),2==this.procenaKandidata.stepenRacunar&&(this.procenaKandidata.stepenRacunar="Srednje"),3==this.procenaKandidata.stepenRacunar&&(this.procenaKandidata.stepenRacunar="Odlično"),this.podredjeniCeo.vqTest.finished&&(this.vqResult=this.podredjeniCeo.vqTest.result)},changeProcenaState:function(t){this.procenaState=t},changePdfState:function(){0==this.pdfState?this.pdfState=1:this.pdfState=0},makePDF:function(){window.html2canvas=Un.a;var t=new Ln["a"]("p","pt","a3");t.html(document.querySelector("#pdfx"),{callback:function(t){t.save("PsiholoskaProcena.pdf")}})},makePDFVQ:function(){return Object(Fn["a"])(regeneratorRuntime.mark((function t(){var a,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=document.getElementById("vqTest"),n=new Ln["a"]("l","pt","a4"),t.next=4,Un()(a,{scale:2,allowTaint:!0,useCORS:!0,width:810,height:560}).then((function(t){n.addImage(t.toDataURL("image/png"),"PNG",5,5,810,560)}));case 4:n.save("VQTest.pdf");case 5:case"end":return t.stop()}}),t)})))()},madePDFPic:function(){return Object(Fn["a"])(regeneratorRuntime.mark((function t(){var a,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=document.getElementById("pdf"),n=new Ln["a"]("l","pt","a4"),t.next=4,Un()(a,{scale:2,allowTaint:!0,useCORS:!0,width:810,height:560}).then((function(t){n.addImage(t.toDataURL("image/png"),"PNG",5,5,810,560)}));case 4:n.save("Document.pdf");case 5:case"end":return t.stop()}}),t)})))()}}),created:function(){var t=this;return Object(Fn["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,t.getProfile();case 2:return a.next=4,t.getCollegues(t.user.type);case 4:return a.next=6,t.getAllPsiholoskaProcena();case 6:t.procenaKandidata=null,t.procenaCela=null;case 8:case"end":return a.stop()}}),a)})))()},beforeCreate:function(){document.body.className="other"}};n("af37");Gn.render=Tn,Gn.__scopeId="data-v-e287d170";a["default"]=Gn},e962:function(t,a,n){t.exports=n.p+"img/logonewest.20bdb802.svg"}}]);
//# sourceMappingURL=chunk-580af41e.80eb4ecc.js.map