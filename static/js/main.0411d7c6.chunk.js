(this.webpackJsonpweather=this.webpackJsonpweather||[]).push([[0],{11:function(e,t,n){},12:function(e,t,n){},14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var c=n(1),i=n.n(c),s=n(5),a=n.n(s),r=(n(11),n(12),n(3)),j=n.n(r),h=n(6),l=n(4),d=(n(14),n(0)),o=function(){var e=Object(c.useState)(null),t=Object(l.a)(e,2),n=t[0],i=t[1],s=Object(c.useState)("New Delhi"),a=Object(l.a)(s,2),r=a[0],o=a[1];return Object(c.useEffect)((function(){(function(){var e=Object(h.a)(j.a.mark((function e(){var t,n,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="https://api.weatherapi.com/v1/current.json?key= 0454e4265d9c45db93923934213003&q=".concat(r,"&aqi=no"),e.next=3,fetch(t);case 3:return n=e.sent,e.next=6,n.json();case 6:c=e.sent,i(c);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[r]),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("div",{className:"box",children:[Object(d.jsx)("div",{className:"inp",children:Object(d.jsx)("input",{type:"search",value:r,name:"searchBox",id:"searchBox",onChange:function(e){o(e.target.value)}})}),n&&n.current?Object(d.jsxs)("div",{className:"content",children:[Object(d.jsxs)("div",{className:"location",children:[Object(d.jsx)("img",{className:"icon",src:n.current.condition.icon,alt:"imge"}),Object(d.jsx)("div",{className:"locationName",children:r})]}),Object(d.jsx)("div",{className:"tempe",children:Object(d.jsxs)("h3",{children:[n.current.temp_c,Object(d.jsx)("small",{children:"\xb0 Celsius"})]})}),Object(d.jsxs)("h4",{children:["Humidity: ",n.current.humidity]}),Object(d.jsxs)("h4",{children:[" Wind Speed: ",n.current.wind_kph," km/h"]}),Object(d.jsxs)("h4",{children:[" Visibility: ",n.current.vis_km," km"]})]}):Object(d.jsx)("p",{children:"No Data Found"})]}),Object(d.jsxs)("div",{className:"me",children:[Object(d.jsx)("a",{href:"https://www.linkedin.com/in/nidhi-gahlawat-01947818a/",children:Object(d.jsx)("i",{className:"fa fa-linkedin",children:" "})}),Object(d.jsx)("h2",{children:"Nidhi Gahlawat"})]})]})};var u=function(){return Object(d.jsx)("div",{className:"App",children:Object(d.jsx)(o,{})})},b=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),c(e),i(e),s(e),a(e)}))};a.a.render(Object(d.jsx)(i.a.StrictMode,{children:Object(d.jsx)(u,{})}),document.getElementById("root")),b()}},[[16,1,2]]]);
//# sourceMappingURL=main.0411d7c6.chunk.js.map