(this.webpackJsonpthe_weather=this.webpackJsonpthe_weather||[]).push([[0],{38:function(e,t,n){e.exports=n.p+"static/media/01d.d37bc50c.svg"},39:function(e,t,n){e.exports=n.p+"static/media/01n.bd386a65.svg"},40:function(e,t,n){e.exports=n.p+"static/media/02d.6caa54b4.svg"},41:function(e,t,n){e.exports=n.p+"static/media/02n.01549e46.svg"},42:function(e,t,n){e.exports=n.p+"static/media/03d.85f34bb2.svg"},43:function(e,t,n){e.exports=n.p+"static/media/03n.a8ffe7ce.svg"},44:function(e,t,n){e.exports=n.p+"static/media/04d.d0ca9a39.svg"},45:function(e,t,n){e.exports=n.p+"static/media/04n.a8ffe7ce.svg"},46:function(e,t,n){e.exports=n.p+"static/media/09d.d83471c2.svg"},47:function(e,t,n){e.exports=n.p+"static/media/09n.910e1057.svg"},48:function(e,t,n){e.exports=n.p+"static/media/10d.c50bf3e3.svg"},49:function(e,t,n){e.exports=n.p+"static/media/10n.45a86be0.svg"},50:function(e,t,n){e.exports=n.p+"static/media/11d.bc6f153e.svg"},51:function(e,t,n){e.exports=n.p+"static/media/11n.12c7ad8f.svg"},52:function(e,t,n){e.exports=n.p+"static/media/13d.79f6eb03.svg"},53:function(e,t,n){e.exports=n.p+"static/media/13n.ea38d2f4.svg"},54:function(e,t,n){e.exports=n.p+"static/media/50d.f1aae715.svg"},55:function(e,t,n){e.exports=n.p+"static/media/50n.dc59f73d.svg"},61:function(e,t,n){e.exports=n.p+"static/media/pattern.e78b5615.svg"},69:function(e,t,n){e.exports=n(97)},97:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(18),o=n.n(c),i=n(11),u=n(2),s=n(3);function l(){var e=Object(u.a)(["\n  body {\n   margin: 0; \n  }\n"]);return l=function(){return e},e}function f(){var e=Object(u.a)(['\n  font-family: "Roboto", sans-serif;\n  font-weight: 500;\n  color: white;\n  margin-left: 10px;\n  font-size: 30px;\n  @media (max-width: 500px) {\n    font-size: 20px;\n  }\n']);return f=function(){return e},e}function d(){var e=Object(u.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n  height: 80px;\n  background-color: rgb(250, 105, 77);\n"]);return d=function(){return e},e}var p=s.b.div(d()),m=s.b.h1(f()),b=Object(s.a)(l()),x=n(66),h=n(8);function g(){var e=Object(u.a)(["\n  color: #fff;\n  background-color: #5cb85c;\n  border-color: #4cae4c;\n  padding: 6px 12px;\n  margin: 10px;\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 1.42857143;\n  text-align: center;\n  cursor: pointer;\n  border: 1px solid transparent;\n  border-radius: 4px;\n"]);return g=function(){return e},e}function v(){var e=Object(u.a)(["\n  width: 140px;\n  height: 30px;\n  border-radius: 4px;\n  padding: 6px 12px;\n  font-size: 14px;\n  border: 2px solid;\n  border-color: ",";\n  border-radius: 4px;\n  ::placeholder {\n    color: ",";\n  }\n"]);return v=function(){return e},e}function E(){var e=Object(u.a)(["\n  display: flex;\n  flex-flow: ",";\n  justify-content: center;\n  align-items: center;\n"]);return E=function(){return e},e}function y(){var e=Object(u.a)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n"]);return y=function(){return e},e}var w=s.b.div(y()),j=s.b.form(E(),(function(e){return e.row?"row":"column"})),O=s.b.input(v(),(function(e){return e.err?"#ff0000":"#ccc"}),(function(e){return e.err?"#ff0000":"#ccc"})),C=s.b.button(g()),S=n(17),_=n.n(S),H=n(25),T=n(59),k=n.n(T).a.create({baseURL:"https://api.openweathermap.org/"}),R=n(5),D=Object(R.a)(),M=function(e){return{type:"FETCH_WEATHER_ERROR",payload:e}},A=function(e){var t=e.row,n=Object(r.useState)(""),c=Object(x.a)(n,2),o=c[0],i=c[1],u=Object(h.b)(),s=Object(h.c)((function(e){return e.weather.error}));return a.a.createElement(w,{"data-test":"SearchBar Component"},a.a.createElement(j,{onSubmit:function(e){e.preventDefault(),u(function(e){return function(){var t=Object(H.a)(_.a.mark((function t(n){var r;return _.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n({type:"LOADING"}),t.prev=1,t.next=4,k.get("/data/2.5/forecast",{params:{q:e,appid:"bcf9d23e76dcc63bc158942ceea4c302"}});case 4:r=t.sent,n({type:"FETCH_WEATHER",payload:r.data.list}),n({type:"FETCH_NAME",payload:r.data.city.name}),D.push("/weather"),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(1),n(M("City/State not found!"));case 13:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(e){return t.apply(this,arguments)}}()}(o)),u(function(e){return function(){var t=Object(H.a)(_.a.mark((function t(n){var r;return _.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,k.get("/data/2.5/weather",{params:{q:e,appid:"bcf9d23e76dcc63bc158942ceea4c302"}});case 3:r=t.sent,n({type:"FETCH_DETAILS",payload:r.data}),D.push("/weather"),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),n(M("City/State not found!"));case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()}(o)),i("")},row:t},a.a.createElement(O,{onChange:function(e){return i(e.target.value)},placeholder:"".concat(s||"St. George, Utah"),value:o,err:s}),a.a.createElement(C,null,"Get Weather")))},F=function(){return a.a.createElement(p,{"data-test":"header"},a.a.createElement(b,null),a.a.createElement(i.a,{to:"/",style:{textDecoration:"none"}},a.a.createElement(m,{"data-test":"logo"}," My Weather App ")),a.a.createElement(A,{"data-test":"search",row:!0}))},z=n(61),P=n.n(z);function L(){var e=Object(u.a)(['\n  font-family: "Roboto", sans-serif;\n  font-weight: 100;\n  color: white;\n  font-size: 38px;\n']);return L=function(){return e},e}function W(){var e=Object(u.a)(["\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  background-image: url(",");\n  height: 100vh;\n  background-size: cover;\n"]);return W=function(){return e},e}var I=s.b.div(W(),P.a),N=s.b.h1(L()),U=function(){return a.a.createElement(I,{"data-test":"HomeComponent"},a.a.createElement(N,{"data-test":"title"},"Enter a City and State"),a.a.createElement(A,{"data-test":"search"}))},G=n(65),q=n(19),B=n.n(q),J=n(38),K=n.n(J),Q=n(39),V=n.n(Q),X=n(40),Y=n.n(X),Z=n(41),$=n.n(Z),ee=n(42),te=n.n(ee),ne=n(43),re=n.n(ne),ae=n(44),ce=n.n(ae),oe=n(45),ie=n.n(oe),ue=n(46),se=n.n(ue),le=n(47),fe=n.n(le),de=n(48),pe=n.n(de),me=n(49),be=n.n(me),xe=n(50),he=n.n(xe),ge=n(51),ve=n.n(ge),Ee=n(52),ye=n.n(Ee),we=n(53),je=n.n(we),Oe=n(54),Ce=n.n(Oe),Se=n(55),_e=n.n(Se);function He(){var e=Object(u.a)(["\n  display: flex;\n  flex-direction: column;\n  margin-left: 50px;\n"]);return He=function(){return e},e}function Te(){var e=Object(u.a)(["\n  height: ",";\n  width: ",";\n"]);return Te=function(){return e},e}function ke(){var e=Object(u.a)(['\n  font-family: "Roboto", sans-serif;\n  font-weight: 100;\n  display: flex;\n  color: black;\n  font-size: 15px;\n\n  width: ',";\n  align-items: center;\n  justify-content: ",";\n  flex-direction: ",";\n  padding: 30px;\n  border-radius: 8px;\n\n  &:hover {\n    ",";\n  }\n"]);return ke=function(){return e},e}function Re(){var e=Object(u.a)(["\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: space-evenly;\n  align-items: flex-end;\n  padding: 20px 80px 20px 80px;\n"]);return Re=function(){return e},e}function De(){var e=Object(u.a)(['\n  font-family: "Roboto", sans-serif;\n  font-weight: 100;\n  display: flex;\n  justify-content: center;\n  align-item: center;\n']);return De=function(){return e},e}function Me(){var e=Object(u.a)([""]);return Me=function(){return e},e}var Ae=s.b.div(Me()),Fe=s.b.div(De()),ze=s.b.div(Re()),Pe=s.b.div(ke(),(function(e){return e.row?"500px":""}),(function(e){return e.row?"space-evenly":"center"}),(function(e){return e.row?"row":"column"}),(function(e){return e.row?"":"box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2)"})),Le=s.b.img(Te(),(function(e){return e.row?"180px":"100px"}),(function(e){return e.row?"180px":"100px"})),We=s.b.div(He()),Ie=function(e){return Math.round(e-273.15)},Ne=function(e){switch(e){case"01d":return K.a;case"01n":return V.a;case"02d":return Y.a;case"02n":return $.a;case"03d":return te.a;case"03n":return re.a;case"04d":return ce.a;case"04n":return ie.a;case"09d":return se.a;case"09n":return fe.a;case"10d":return pe.a;case"10n":return be.a;case"11d":return he.a;case"11n":return ve.a;case"13d":return ye.a;case"13n":return je.a;case"50d":return Ce.a;case"50n":return _e.a;default:return null}},Ue=function(){var e=Object(h.c)((function(e){return e.weather.forecast})),t=Object(h.c)((function(e){return e.weather.city})),n=Object(h.c)((function(e){return e.weather.current})),r=Object(h.c)((function(e){return e.weather.loading})),c=Object(G.a)(new Set(e.map((function(e){return e.dt_txt.slice(0,10)})))),o=c.map((function(e){return B()(e).format("dddd, MMMM Do")})).map((function(e,t){return{id:t+1,dist:c[t],date:e}})),u=Ne(n.weather&&n.weather[0].icon);return a.a.createElement(Ae,{"data-test":"Forecast Component"},a.a.createElement(Fe,{"data-test":"title"},r?a.a.createElement("h1",null,"loading..."):a.a.createElement("h1",null,t)),a.a.createElement(ze,{"data-test":"card"},a.a.createElement(Pe,{row:!0,"data-test":"card-item"},a.a.createElement(Le,{src:u,row:!0,"data-test":"card-img"}),a.a.createElement(We,{"data-test":"card-desc"},a.a.createElement("p",null,n.weather&&n.weather[0].description),a.a.createElement("p",null,"temp: ",Ie(n.main&&n.main.temp),"\xb0C"),a.a.createElement("p",null,"Humidity: ",n.main&&n.main.humidity),a.a.createElement("p",null,"Pressure: ",n.main&&n.main.pressure)))),a.a.createElement(Fe,{"data-test":"title"},a.a.createElement("h1",null,"Days")),a.a.createElement(ze,{"data-test":"card"},o.map((function(e){return a.a.createElement(i.a,{to:"/forecast/".concat(e.dist),style:{textDecoration:"none"},key:e.id},a.a.createElement(Pe,{key:e.id,"data-test":"card-item"},a.a.createElement(Le,{src:K.a,alt:"sun","data-test":"card-img"}),a.a.createElement("h3",null,e.date)))}))))};function Ge(){var e=Object(u.a)(["\n  height: 100px;\n  width: 100px;\n"]);return Ge=function(){return e},e}function qe(){var e=Object(u.a)(['\n  font-family: "Roboto", sans-serif;\n  font-weight: 100;\n  color: black;\n  font-size: 15px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  padding: 30px;\n  border-radius: 8px;\n  &:hover {\n    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);\n  }\n  }\n']);return qe=function(){return e},e}function Be(){var e=Object(u.a)(["\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: space-evenly;\n  align-items: flex-end;\n  height: 500px;\n  padding: 20px 80px 20px 80px;\n"]);return Be=function(){return e},e}function Je(){var e=Object(u.a)(['\n  text-decoration: none;\n  color: "black";\n  font-size: 30px;\n  margin-top: 30px;\n  color: black;\n']);return Je=function(){return e},e}function Ke(){var e=Object(u.a)(['\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  text-align: center;\n  font-family: "Roboto", sans-serif;\n  font-weight: 100;\n']);return Ke=function(){return e},e}function Qe(){var e=Object(u.a)(["\n  display: flex;\n  justify-content: center;\n"]);return Qe=function(){return e},e}s.b.h1(Qe());var Ve=s.b.div(Ke()),Xe=Object(s.b)(i.a)(Je()),Ye=s.b.div(Be()),Ze=s.b.div(qe()),$e=s.b.img(Ge()),et=function(e){var t=e.match.params.id,n=Object(h.c)((function(e){return e.weather.forecast})),r=Object(h.c)((function(e){return e.weather.city})),c=n.filter((function(e){return e.dt_txt.match("".concat(t))}));return a.a.createElement(a.a.Fragment,null,a.a.createElement(Ve,null,a.a.createElement(Xe,{className:i.a,to:"/weather"},r),a.a.createElement("h2",null,B()(t).format("dddd, MMMM Do"))),a.a.createElement(Ye,null,c.map((function(e){var t=Ne(e.weather[0].icon);return a.a.createElement(Ze,{key:e.dt},a.a.createElement($e,{src:t,alt:"weather icon"}),a.a.createElement("h3",null,e.dt_txt.slice(11,16)),a.a.createElement("p",null,e.weather[0].description),a.a.createElement("p",null,"Min temp: ",Ie(e.main.temp_min),"\xb0C"),a.a.createElement("p",null,"Max temp: ",Ie(e.main.temp_max),"\xb0C"),a.a.createElement("p",null,"Humidity: ",e.main.humidity))}))))},tt=n(13),nt=function(){return a.a.createElement("div",null,a.a.createElement(tt.b,{history:D},a.a.createElement("div",null,a.a.createElement(F,null),a.a.createElement(tt.a,{path:"/",exact:!0,component:U}),a.a.createElement(tt.a,{path:"/weather",exact:!0,component:Ue}),a.a.createElement(tt.a,{path:"/forecast/:id",exact:!0,component:et}))))},rt=n(15),at=n(62);function ct(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ot(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ct(Object(n),!0).forEach((function(t){Object(at.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ct(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var it={forecast:[],current:{},city:"",loading:!1,error:""},ut=Object(rt.c)({weather:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:it,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOADING":return ot({},e,{loading:!0});case"FETCH_WEATHER":return console.log("FETCH_WEATHER SUCCESS!"),ot({},e,{forecast:t.payload,error:"",loading:!1});case"FETCH_WEATHER_ERROR":return ot({},e,{error:t.payload,loading:!1});case"FETCH_NAME":return console.log("FETCH_NAME SUCCESS"),ot({},e,{city:t.payload});case"FETCH_DETAILS":return console.log("FETCH_DETAILS SUCCESS"),ot({},e,{current:t.payload,loading:!1,error:""});default:return e}}}),st=n(63),lt=n(64),ft=[st.a];ft.push(Object(lt.createLogger)());var dt=Object(rt.d)(ut,rt.a.apply(void 0,ft));o.a.render(a.a.createElement(h.a,{store:dt},a.a.createElement(nt,null)),document.getElementById("root"))}},[[69,1,2]]]);
//# sourceMappingURL=main.b3e3c14f.chunk.js.map