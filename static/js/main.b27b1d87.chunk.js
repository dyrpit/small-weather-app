(this["webpackJsonpsmall-weather-app"]=this["webpackJsonpsmall-weather-app"]||[]).push([[0],Array(19).concat([function(e,t,a){e.exports=a.p+"static/media/ash.a3e50ba0.svg"},function(e,t,a){e.exports=a.p+"static/media/clear-day.51456abb.svg"},function(e,t,a){e.exports=a.p+"static/media/clear-night.6c056b1e.svg"},function(e,t,a){e.exports=a.p+"static/media/clouds.a406d4cc.svg"},function(e,t,a){e.exports=a.p+"static/media/cloudy.bf903809.svg"},function(e,t,a){e.exports=a.p+"static/media/humidity.bdc37673.svg"},function(e,t,a){e.exports=a.p+"static/media/mist.54db94da.svg"},function(e,t,a){e.exports=a.p+"static/media/pressure.f3cd1f75.svg"},function(e,t,a){e.exports=a.p+"static/media/rain.b589da9e.svg"},function(e,t,a){e.exports=a.p+"static/media/sand.696d5fbd.svg"},function(e,t,a){e.exports=a.p+"static/media/sunrise.c0fbb328.svg"},function(e,t,a){e.exports=a.p+"static/media/sunset.fe40a936.svg"},function(e,t,a){e.exports=a.p+"static/media/snow.9a8b79ae.svg"},function(e,t,a){e.exports=a.p+"static/media/thunderstorm.2d467c0c.svg"},function(e,t,a){e.exports=a.p+"static/media/tornado.7ce771c7.svg"},function(e,t,a){e.exports=a.p+"static/media/wind.783796b4.svg"},function(e,t,a){e.exports=a.p+"static/media/alert.c5038101.svg"},function(e,t,a){e.exports=a.p+"static/media/info.11cd1576.svg"},function(e,t,a){e.exports=a.p+"static/media/logo512.da3104aa.png"},function(e,t,a){e.exports=a.p+"static/media/co2.03c1a884.svg"},,function(e,t,a){e.exports=a(72)},,,,,function(e,t,a){},,function(e,t,a){},function(e,t,a){},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(17),i=a.n(c),o=(a(45),a(5)),s=a.n(o),l=a(7),u=a(1),m=a(6),d=a(2),f=(a(47),function(e){var t=e.children;return r.a.createElement("section",{className:"container"},t)}),h=(a(48),function(){var e=Object(d.e)();return r.a.createElement("button",{className:"home-button",onClick:function(){e.push("/")}},r.a.createElement("i",{className:"fas fa-arrow-left"})," Home")}),p=(a(54),function(e){var t=e.main?"main":"";return r.a.createElement("div",{className:"loading ".concat(t)},r.a.createElement("p",{className:"loading__text"},"Loading..."))}),g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Warsaw",t=arguments.length>1?arguments[1]:void 0,a=arguments.length>2?arguments[2]:void 0,n="https://weather-app-dyrpit.herokuapp.com/weather?location=".concat(e);return t&&a&&(n="https://weather-app-dyrpit.herokuapp.com/weather?lat=".concat(t,"&lng=").concat(a)),fetch(n).then((function(e){if(!e.ok)throw new Error(e.status);return e})).then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){if("400"===e.message)throw new Error("City not found");throw new Error(e.message)}))},_=function(e,t,a){var n="https://weather-app-dyrpit.herokuapp.com/weather/alerts?lat=".concat(e,"&lng=").concat(t);return fetch(n,a).then((function(e){if(!e.ok)throw new Error(e.status);return e})).then((function(e){return e.json()})).then((function(e){var t=e.alerts;return t?t[0]:null})).catch((function(e){if("400"===e.message)throw new Error("No alerts for this city");throw new Error(e.message)}))},E=function(e,t){var a="https://weather-app-dyrpit.herokuapp.com/weather/hourly?lat=".concat(e,"&lng=").concat(t);return fetch(a).then((function(e){if(!e.ok)throw new Error(e.status);return e})).then((function(e){return e.json()})).then((function(e){var t=e.hourly;return t||null})).catch((function(e){if("400"===e.message)throw new Error("No hourly weather for this city");throw new Error(e.message)}))},v=(a(55),function(e){var t=e.lat,a=e.lng,c=Object(n.useState)(""),i=Object(u.a)(c,2),o=i[0],m=i[1],d=Object(n.useState)(!1),g=Object(u.a)(d,2),E=g[0],v=g[1],b=Object(n.useState)(null),w=Object(u.a)(b,2),y=w[0],N=w[1];return Object(n.useEffect)((function(){var e=new AbortController;return function(){var t=Object(l.a)(s.a.mark((function t(a,n){var r;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return v(!0),t.prev=1,t.next=4,_(a,n,{signal:e.signal});case 4:if(r=t.sent,v(!1),r&&r.description){t.next=9;break}return m("No weather alerts"),t.abrupt("return");case 9:m(r.description),t.next=16;break;case 12:t.prev=12,t.t0=t.catch(1),N(t.t0.message),v(!1);case 16:case"end":return t.stop()}}),t,null,[[1,12]])})));return function(e,a){return t.apply(this,arguments)}}()(t,a),function(){e.abort()}}),[t,a]),r.a.createElement(f,null,r.a.createElement(h,null),r.a.createElement("div",{className:"alerts-section"},E?r.a.createElement(p,null):r.a.createElement("p",{className:"alerts-section__description"},y||o)))}),b=(a(56),a(39)),w=function(e){var t=Object(n.useState)(null),a=Object(u.a)(t,2),r=a[0],c=a[1];Object(n.useEffect)((function(){var t=localStorage.getItem(e),a=null!=t?JSON.parse(t):null;c(a)}),[e]);return[r,function(t){var a=null!=r?[].concat(Object(b.a)(r),[t]):Array.of(t);localStorage.setItem(e,JSON.stringify(a)),c(a)},function(t){var a=r.filter((function(e,a){return a!==t}));localStorage.setItem(e,JSON.stringify(a)),c(a)}]},y=Object(n.createContext)("light"),N=function(e){var t=e.children,a=Object(n.useState)("light"),c=Object(u.a)(a,2),i=c[0],o=c[1],s=w("cities"),l=Object(u.a)(s,3),m=l[0],d=l[1],f=l[2];return r.a.createElement(y.Provider,{value:{theme:i,toggleTheme:function(){o("dark"===i?"light":"dark")},storedValue:m,addToStorage:d,removeFromStorage:f}},t)},x=function(e){var t=e.children,a=e.properCondition,c="dark"===Object(n.useContext)(y).theme?"dark":a;return r.a.createElement("div",{className:"app-container app-container--".concat(c)},t)},k=(a(57),function(e){var t=e.children,a=Object(n.useContext)(y).theme;return r.a.createElement("div",{className:"background-container background-container--".concat(a)},r.a.createElement("div",{className:"backdrop"},t))}),j=function(e){return new Date(1e3*e).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})},O=a(19),S=a.n(O),C=a(20),W=a.n(C),F=a(21),D=a.n(F),q=a(22),L=a.n(q),T=a(23),A=a.n(T),B=a(24),I=a.n(B),J=a(25),M=a.n(J),P=a(26),V=a.n(P),z=a(27),R=a.n(z),G=a(28),H=a.n(G),U=a(29),K=a.n(U),Q=a(30),X=a.n(Q),Y=a(31),Z=a.n(Y),$=a(32),ee=a.n($),te=a(33),ae=a.n(te),ne=a(34),re=a.n(ne),ce=function(e,t){if(!e||!t)return!0;var a=1e3*e,n=1e3*t,r=Date.now();return r<n&&r>a},ie={ash:S.a,clearDay:W.a,clearNight:D.a,clouds:L.a,cloudy:A.a,humidity:I.a,mist:M.a,pressure:V.a,rain:R.a,sand:H.a,snow:Z.a,sunrise:K.a,sunset:X.a,thunderstorm:ee.a,tornado:ae.a,wind:re.a},oe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0,a=arguments.length>2?arguments[2]:void 0;return e.includes("clear")?ce(t,a)?ie.clearDay:ie.clearNight:ie[e]},se=(a(58),function(e){var t=e.value,a=e.title,n=oe(a),c=t,i="";return"wind"===a?i=" km/h":"humidity"===a||"cloudy"===a?i="%":"sunrise"===a||"sunset"===a?c=j(t):"pressure"===a&&(i=" hPa"),r.a.createElement("section",{className:"details-section"},r.a.createElement("div",{className:"details-section__item"},r.a.createElement("img",{className:"details-section__img",src:n,alt:a}),r.a.createElement("span",{className:"details-section__title"},a),r.a.createElement("p",{className:"details-section__value"},c,i)))}),le=(a(59),function(e){var t=Object.entries(e);return r.a.createElement(f,null,r.a.createElement(h,null),t.map((function(e){var t=Object(u.a)(e,2),a=t[0],n=t[1];return r.a.createElement(se,{key:a,value:n,title:a})})))}),ue=(a(60),function(){return r.a.createElement("footer",{className:"footer"},r.a.createElement("div",{className:"footer__copyright"},r.a.createElement("p",{className:"footer__made-by"},"Piotr Dyrda \xa9")),r.a.createElement("div",{className:"footer__credits"},"Icons made by"," ",r.a.createElement("a",{className:"footer__link",href:"https://www.flaticon.com/authors/vitaly-gorbachev",title:"Vitaly Gorbachev"},"Vitaly Gorbachev")," ","and"," ",r.a.createElement("a",{className:"footer__link",href:"https://www.freepik.com",title:"Freepik"},"Freepik")," ","from"," ",r.a.createElement("a",{className:"footer__link",href:"https://www.flaticon.com/",title:"Flaticon"},"www.flaticon.com")))}),me=(a(61),function(e){var t=e.city,a=e.err,c=e.isLoading,i=e.lat,o=e.lng,s=Object(n.useContext)(y),l=s.addToStorage,u=s.theme,m=(new Date).toLocaleDateString(void 0,{weekday:"short"}),d=(new Date).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"});return r.a.createElement("header",{className:"header ".concat(u)},r.a.createElement("div",{className:"header__container"},c?r.a.createElement(p,null):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"header__container header__container--row"},r.a.createElement("p",{className:"header__city-name"},a||t),Boolean(a)||r.a.createElement("div",{onClick:function(){l({city:t,lng:o,lat:i})},className:"header__add-button"},r.a.createElement("i",{className:"fas fa-plus add-button__icon"}))),r.a.createElement("p",{className:"header__date"},m,", ",d))))}),de=a(35),fe=a.n(de),he=a(36),pe=a.n(he),ge=a(37),_e=a.n(ge),Ee=a(38),ve=a.n(Ee),be=(a(62),function(e){var t=e.properCondition,a="dark"===Object(n.useContext)(y).theme?"dark":t;return r.a.createElement("nav",{className:"menu menu--".concat(a)},r.a.createElement("ul",{className:"menu__list"},r.a.createElement("li",{className:"menu__item"},r.a.createElement(m.b,{className:"menu__link",to:"/pollution"},r.a.createElement("img",{className:"menu__image",src:ve.a,alt:"pollution menu icon"}),r.a.createElement("p",{className:"menu__name"},"Air Pollution"))),r.a.createElement("li",{className:"menu__item"},r.a.createElement(m.b,{className:"menu__link",to:"/details"},r.a.createElement("img",{className:"menu__image",src:pe.a,alt:"details menu icon"}),r.a.createElement("p",{className:"menu__name"},"Details"))),r.a.createElement("li",{className:"menu__item"},r.a.createElement(m.b,{className:"menu__link",to:"/alerts"},r.a.createElement("img",{className:"menu__image",src:fe.a,alt:"alert menu icon"}),r.a.createElement("p",{className:"menu__name"},"Alerts")))),r.a.createElement("div",{className:"menu__logo"},r.a.createElement("img",{className:"logo__image",src:_e.a,alt:"logo"}),r.a.createElement("span",{className:"logo__title"},"Small weather app")))}),we=function(){return r.a.createElement(f,null,r.a.createElement("p",{style:{alignSelf:"center"}},"Under construction"))},ye=(a(63),function(e){var t=e.getWeather,a=Object(n.useState)(""),c=Object(u.a)(a,2),i=c[0],o=c[1],m=function(){var e=Object(l.a)(s.a.mark((function e(a){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a.preventDefault(),t(i);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("form",{className:"search"},r.a.createElement("input",{className:"search__input",type:"text",placeholder:"Type city",value:i,onChange:function(e){var t=e.target.value;o(t)}}),r.a.createElement("button",{className:"search__btn",onClick:m},r.a.createElement("i",{className:"fas fa-search"})))}),Ne=(a(64),function(e){var t=e.city,a=e.getWeather,c=e.id,i=e.lat,o=e.lng,s=Object(n.useContext)(y),l=s.removeFromStorage,u=s.theme;return r.a.createElement("div",{className:"city-item city-item--".concat(u)},r.a.createElement("p",{className:"city-item__name",onClick:function(){return a(t,i,o)}},t),r.a.createElement("p",{className:"city-item__remove",onClick:function(){return function(e){l(e)}(c)}},r.a.createElement("i",{className:"far fa-trash-alt"})))}),xe=function(e){var t=e.getWeather,a=Object(n.useContext)(y).storedValue;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",{className:"panel__title"},"Favourite locations"),r.a.createElement("ul",{className:"panel__list"},a.map((function(e,a){var n=e.city,c=e.lat,i=e.lng;return r.a.createElement(Ne,{key:n+a,city:n,lat:c,lng:i,id:a,getWeather:t})}))))},ke=(a(65),function(e){var t=e.toggleMenu;return r.a.createElement("div",{onClick:t,className:"side-menu-button"},r.a.createElement("i",{className:"fas fa-ellipsis-v side-menu-button__icon"}))}),je=(a(66),function(){var e=Object(n.useContext)(y),t=e.theme,a=e.toggleTheme;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",{className:"panel__title"},"Settings"),r.a.createElement("div",{className:"panel__btn-container"},r.a.createElement("i",{className:"far fa-moon"}),r.a.createElement("button",{className:"panel__btn panel__btn--".concat(t),onClick:a}),r.a.createElement("i",{className:"far fa-sun"})))}),Oe=(a(67),function(e){var t=e.getWeather,a=Object(n.useState)(!1),c=Object(u.a)(a,2),i=c[0],o=c[1],s=Object(n.useState)(!1),l=Object(u.a)(s,2),m=l[0],d=l[1],f=Object(n.useContext)(y).theme,h=function(){o((function(e){return!e})),d(!1)},p=i?"is-open":"";return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"side-menu"},r.a.createElement("div",{onClick:h,className:"side-menu__background side-menu--".concat(p," ")}),r.a.createElement("div",{className:"side-menu__panel side-menu__panel--".concat(p," side-menu__panel--").concat(f)},r.a.createElement("div",{onClick:h,className:"side-menu__close-button"},r.a.createElement("i",{className:"fas fa-times"})),r.a.createElement("div",{onClick:function(){d((function(e){return!e}))},className:"settings"},m?r.a.createElement("i",{className:"fas fa-city"}):r.a.createElement("i",{className:"fas fa-cog settings__icon"})),m?r.a.createElement(je,null):r.a.createElement(xe,{getWeather:t}))),r.a.createElement(ke,{toggleMenu:h}))}),Se=(a(68),function(e){var t=e.itemWeather,a=t.dt,n=t.temp,c=Object(u.a)(t.weather,1)[0].main,i=oe(c.toLowerCase()),o=j(a);return r.a.createElement("div",{className:"weather-item"},r.a.createElement("p",{className:"weather-item__text"},o),r.a.createElement("img",{className:"weather-item__img",src:i,alt:c}),r.a.createElement("p",{className:"weather-item__text"},n.toFixed(),"\xb0"))}),Ce=(a(69),function(e){var t=e.hourlyWeather;return r.a.createElement("div",{className:"hourly-weather-section"},r.a.createElement("button",{className:"hourly-weather-section__button hourly-weather-section__button--left",onClick:function(){var e=document.querySelector(".hourly-weather-section"),t=document.querySelector(".hourly-weather-section__container"),a=document.querySelector(".weather-item"),n=document.querySelector(".hourly-weather-section__button--left"),r=document.querySelector(".hourly-weather-section__button--right"),c=t.offsetLeft,i=a.clientWidth,o=-(t.offsetWidth-e.getBoundingClientRect().width);if(c+i>=0)return n.style.display="none",void(t.style.left="0px");c+i>o&&(r.style.display="block"),t.style.left="".concat(c+i,"px")}},r.a.createElement("i",{className:"fas fa-angle-left"})),r.a.createElement("div",{className:"hourly-weather-section__container"},t&&t.map((function(e,t){return r.a.createElement(Se,{key:t,itemWeather:e})}))),r.a.createElement("button",{className:"hourly-weather-section__button hourly-weather-section__button--right",onClick:function(){var e=document.querySelector(".hourly-weather-section"),t=document.querySelector(".hourly-weather-section__container"),a=document.querySelector(".weather-item"),n=document.querySelector(".hourly-weather-section__button--left"),r=document.querySelector(".hourly-weather-section__button--right"),c=t.offsetLeft,i=e.getBoundingClientRect().width+-1*t.offsetLeft,o=t.offsetWidth,s=a.clientWidth,l=-(t.offsetWidth-e.getBoundingClientRect().width);if(c-s<0&&(n.style.display="block"),i+s>=o)return r.style.display="none",void(t.style.left="".concat(l,"px"));t.style.left="".concat(c-s,"px")}},r.a.createElement("i",{className:"fas fa-angle-right"})))}),We=(a(70),function(e){var t=e.conditions,a=e.max,n=e.min,c=e.temp,i=e.sunrise,o=e.sunset,s=e.weather,l=e.hourlyWeather,u=oe(t,i,o);return r.a.createElement(f,null,r.a.createElement("div",{className:"weather-section"},r.a.createElement("img",{className:"weather-section__img",src:u,alt:t}),r.a.createElement("p",{className:"weather-section__text"},s)),r.a.createElement("div",{className:"weather-section weather-section--grow"},r.a.createElement("div",{className:"weather-section__container"},r.a.createElement("p",{className:"weather-section__main-temp"},c,"\xb0")),r.a.createElement("div",{className:"weather-section__container"},r.a.createElement("p",{className:"weather-section__aside-temp"},r.a.createElement("span",null,"Max: "),a,"\xb0 C"),r.a.createElement("p",{className:"weather-section__aside-temp weather-section__aside-temp--border-top"},r.a.createElement("span",null,"Min: "),n,"\xb0 C"))),r.a.createElement(Ce,{hourlyWeather:l}))}),Fe=["mist","smoke","haze","fog","squall"],De=["sand","dust"],qe=["rain","drizzle"],Le=(a(71),function(){var e=Object(n.useState)(!0),t=Object(u.a)(e,2),a=t[0],c=t[1],i=Object(n.useState)(null),o=Object(u.a)(i,2),f=o[0],h=o[1],_=Object(n.useState)(null),b=Object(u.a)(_,2),w=b[0],y=b[1],j=Object(n.useState)(""),O=Object(u.a)(j,2),S=O[0],C=O[1],W=Object(n.useState)(""),F=Object(u.a)(W,2),D=F[0],q=F[1],L=Object(n.useState)(!0),T=Object(u.a)(L,2),A=T[0],B=T[1],I=function(){var e=Object(l.a)(s.a.mark((function e(t,a,n){var r,i,o,l,m,d,p,_,v,b,w,N,x,k,j,O,S,W,F,D,q;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c(!0),B(!f),e.prev=2,e.next=5,g(t,a,n);case 5:if(!(r=e.sent)){e.next=15;break}return i=r.clouds.all,o=r.coord,l=o.lon,m=o.lat,d=r.main,p=d.temp,_=d.temp_max,v=d.temp_min,b=d.humidity,w=d.pressure,N=r.name,x=r.sys,k=x.sunrise,j=x.sunset,O=r.wind.speed,S=Object(u.a)(r.weather,1),W=S[0],F=W.main,D=W.description,h({temp:Number(p.toFixed()),maxTemp:Number(_.toFixed()),minTemp:Number(v.toFixed()),city:N,humidity:b,pressure:w,wind:Number(O.toFixed()),conditions:F.toLowerCase(),conditionsDescription:D,cloudy:i,sunrise:k,sunset:j,lng:l,lat:m}),e.next=11,E(r.coord.lat,r.coord.lon);case 11:q=e.sent,c(!1),B(!1),q&&y(q);case 15:e.next=21;break;case 17:e.prev=17,e.t0=e.catch(2),c(!1),C(e.t0.message);case 21:case"end":return e.stop()}}),e,null,[[2,17]])})));return function(t,a,n){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){navigator.geolocation.getCurrentPosition((function(e){I(void 0,e.coords.latitude,e.coords.longitude)}))}),[]),Object(n.useEffect)((function(){var e,t,a,n=(e=null===f||void 0===f?void 0:f.conditions,t=null===f||void 0===f?void 0:f.sunrise,a=null===f||void 0===f?void 0:f.sunset,Fe.includes(e)?"mist":De.includes(e)?"sand":qe.includes(e)?"rain":"clear"===e?ce(t,a)?"clearDay":"clearNight":e);q(n)}),[f]),r.a.createElement(m.a,{basename:"/small-weather-app"},r.a.createElement(N,null,r.a.createElement(k,null,A?r.a.createElement(p,{main:!0}):r.a.createElement(r.a.Fragment,null,r.a.createElement(Oe,{getWeather:I}),r.a.createElement(x,{properCondition:D},r.a.createElement(me,{city:f.city,err:S,isLoading:a,lat:f.lat,lng:f.lng}),r.a.createElement(ye,{getWeather:I}),r.a.createElement(d.a,{exact:!0,path:"/",component:function(){return r.a.createElement(We,{conditions:D,weather:f.conditions,temp:f.temp,max:f.maxTemp,min:f.minTemp,sunrise:f.sunrise,sunset:f.sunset,hourlyWeather:w})}}),r.a.createElement(d.a,{path:"/details",component:function(){return r.a.createElement(le,{cloudy:f.cloudy,humidity:f.humidity,pressure:f.pressure,sunrise:f.sunrise,sunset:f.sunset,wind:f.wind})}}),r.a.createElement(d.a,{path:"/alerts",component:function(){return r.a.createElement(v,{lat:f.lat,lng:f.lng})}}),r.a.createElement(d.a,{path:"/pollution",component:function(){return r.a.createElement(we,null)}}),r.a.createElement(be,{properCondition:D}),r.a.createElement(ue,null))))))});i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Le,null)),document.getElementById("root"))}]),[[40,1,2]]]);
//# sourceMappingURL=main.b27b1d87.chunk.js.map