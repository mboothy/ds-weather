(this["webpackJsonpbeach-widget"]=this["webpackJsonpbeach-widget"]||[]).push([[0],{40:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var c=a(1),s=a.n(c),r=a(14),n=a.n(r),i=a(5),o=a.n(i),d=a(15),l=a(3),j=a(16),b=a.n(j),m=(a(40),a(0)),O=function(e){var t=e.weather;return Object(m.jsxs)("div",{className:"p-3 text-center text-gray-100",children:[Object(m.jsx)("p",{className:"text-center",children:t.local_date_time.split("/")[1]}),Object(m.jsx)("p",{className:"text-2xl font-bold",children:t.air_temp+"\xb0C"}),Object(m.jsxs)("p",{className:"text-sm tfont-semibold",children:[t.rel_hum+"%"," Humidity"]})]})};var u=function(){var e=Object(c.useState)(),t=Object(l.a)(e,2),a=(t[0],t[1]),s=Object(c.useState)(),r=Object(l.a)(s,2),n=r[0],i=r[1],j=Object(c.useState)(!0),u=Object(l.a)(j,2),h=u[0],p=u[1],x=Object(c.useState)(),v=Object(l.a)(x,2),f=(v[0],v[1]),g=Object(c.useState)(10),w=Object(l.a)(g,2),N=w[0],S=(w[1],Object(c.useState)()),T=Object(l.a)(S,2),y=T[0],E=T[1],A=Object(c.useState)(),C=Object(l.a)(A,2),_=C[0],I=C[1];Object(c.useEffect)(Object(d.a)(o.a.mark((function e(){var t,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return p(!0),e.next=3,b.a.get("/fwo/IDQ60801/IDQ60801.94580.json",{method:"GET",mode:"no-cors",credentials:"same-origin",headers:{"Access-Control-Allow-Origin":"*","Access-Control-Allow-Methods":"GET,PUT,POST,DELETE,PATCH,OPTIONS","Content-Type":"application/json"}});case 3:(t=e.sent).error?f(t.error):(0,c=t.data.observations.data.slice(0,N),E(t.data.observations.data[0].name),I(t.data.observations.data[0].rain_trace),a(c,P(c)));case 5:case"end":return e.stop()}}),e)}))),[]);var P=function(e){var t=e.map((function(e){return Object(m.jsx)(O,{weather:e})}));i(t,p(!1))};return Object(m.jsxs)("div",{className:"App w-min rounded-lg bg-gradient-to-tr from-primary to-primary-lighter shadow-lg m-10 p-3 text-white",children:[Object(m.jsx)("div",{className:"text-4xl p-3 font-semibold text-gray-100",children:"".concat(y," Weather")}),Object(m.jsx)("div",{className:"pl-3",children:"".concat(_,"mm since 9am")}),Object(m.jsx)("div",{className:"points",children:h?Object(m.jsx)("div",{className:"loader",children:"Loading..."}):Object(m.jsx)("div",{className:"flex",children:n})})]})};n.a.render(Object(m.jsx)(s.a.StrictMode,{children:Object(m.jsx)(u,{})}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.c1aa5f24.chunk.js.map