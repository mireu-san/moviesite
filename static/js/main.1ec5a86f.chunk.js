(this.webpackJsonpmoviesite=this.webpackJsonpmoviesite||[]).push([[0],{29:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/noPosterPaimon.19df203f.jpg"},73:function(e,t,n){"use strict";n.r(t);var r,a,i,c,o,s,l,d,u,p,j,b,h,g,x,m,O,v,f,y,_,w,k,S,T,M,R,U,z,C,I,P,N,V,F,A,B=n(1),D=n.n(B),L=n(38),q=n.n(L),H=n(12),J=n(13),E=n(15),Y=n(14),G=n(19),K=n(5),Q=n(10),W=n.n(Q),X=n(17),Z=n(3),$=n(2),ee=n(16),te=n(0),ne=$.c.div(r||(r=Object(Z.a)(["\n  :not(:last-child) {\n    margin-bottom: 50px;\n  }\n"]))),re=$.c.span(a||(a=Object(Z.a)(["\n  font-size: 15px;\n  font-weight: 600;\n"]))),ae=$.c.div(i||(i=Object(Z.a)(["\n  margin-top: 25px;\n  display: grid;\n  grid-template-columns: repeat(auto-fill, 125px);\n  grid-gap: 25px;\n"]))),ie=function(e){var t=e.title,n=e.children;return Object(te.jsxs)(ne,{children:[Object(te.jsx)(re,{children:t}),Object(te.jsx)(ae,{children:n})]})},ce=$.c.div(c||(c=Object(Z.a)(["\n  height: 100vh;\n  width: 100vw;\n  display: flex;\n  justify-content: center;\n  font-size: 32px;\n  margin-top: 20px;\n"]))),oe=function(){return Object(te.jsx)(ce,{children:Object(te.jsx)("span",{role:"img","aria-label":"Loading",children:"\u2668Now Loading...\u2668"})})},se=$.c.div(o||(o=Object(Z.a)(["\n  width: 100vw;\n  display: flex;\n  justify-content: center;\n"]))),le=$.c.span(s||(s=Object(Z.a)(["\n  color: ",";\n"])),(function(e){return e.color})),de=function(e){var t=e.text,n=e.color;return Object(te.jsx)(se,{children:Object(te.jsx)(le,{color:n,children:t})})},ue=$.c.div(l||(l=Object(Z.a)(["\n  font-size: 12px;\n"]))),pe=$.c.div(d||(d=Object(Z.a)(["\n  background-image: url(",");\n  height: 180px;\n  background-size: cover;\n  border-radius: 4px;\n  background-position: center center;\n  transition: opacity 0.5s linear;\n"])),(function(e){return e.bgUrl})),je=$.c.span(u||(u=Object(Z.a)(["\n  bottom: 5px;\n  right: 5px;\n  position: absolute;\n  opacity: 0;\n  transition: opacity 0.5s linear;\n"]))),be=$.c.div(p||(p=Object(Z.a)(["\n  margin-bottom: 5px;\n  position: relative;\n  &:hover {\n    "," {\n      opacity: 0.3;\n    }\n    "," {\n      opacity: 1;\n    }\n  }\n"])),pe,je),he=$.c.span(j||(j=Object(Z.a)(["\n  display: block;\n  margin-bottom: 3px;\n"]))),ge=$.c.span(b||(b=Object(Z.a)(["\n  font-size: 10px;\n  color: rgba(255,255,255,0.5);\n"]))),xe=function(e){var t=e.id,r=e.imageUrl,a=e.title,i=e.rating,c=e.year,o=e.isMovie,s=void 0!==o&&o;return Object(te.jsx)(G.b,{to:s?"/movie/".concat(t):"/show/".concat(t),children:Object(te.jsxs)(ue,{children:[Object(te.jsxs)(be,{children:[Object(te.jsx)(pe,{bgUrl:r?"https://image.tmdb.org/t/p/w300".concat(r):n(29).default}),Object(te.jsxs)(je,{children:[Object(te.jsx)("span",{role:"img","aria-label":"rating",children:"\u2605"})," ",i,"/10"]})]}),Object(te.jsx)(he,{children:a.length>18?"".concat(a.substring(0,18),"..."):a}),Object(te.jsx)(ge,{children:c})]})})},me=$.c.div(h||(h=Object(Z.a)(["\n  padding: 20px;\n"]))),Oe=function(e){var t=e.nowPlaying,n=e.popular,r=e.upcoming,a=e.loading,i=e.error;return Object(te.jsxs)(te.Fragment,{children:[Object(te.jsx)(ee.a,{children:Object(te.jsx)("title",{children:"Movies | Miflix"})}),a?Object(te.jsx)(oe,{}):Object(te.jsxs)(me,{children:[Object(te.jsx)(ee.a,{children:Object(te.jsx)("title",{children:"Movies | Miflix"})}),t&&t.length>0&&Object(te.jsx)(ie,{title:"Now Playing",children:t.map((function(e){return Object(te.jsx)(xe,{id:e.id,imageUrl:e.poster_path,title:e.original_title,rating:e.vote_average,year:e.release_date&&e.release_date.substring(0,4),isMovie:!0},e.id)}))}),r&&r.length>0&&Object(te.jsx)(ie,{title:"Upcoming Movie",children:r.map((function(e){return Object(te.jsx)(xe,{id:e.id,imageUrl:e.poster_path,title:e.original_title,rating:e.vote_average,year:e.release_date&&e.release_date.substring(0,4),isMovie:!0},e.id)}))}),n&&n.length>0&&Object(te.jsx)(ie,{title:"Popular Movie",children:n.map((function(e){return Object(te.jsx)(xe,{id:e.id,imageUrl:e.poster_path,title:e.original_title,rating:e.vote_average,year:e.release_date.substring(0,4),isMovie:!0},e.id)}))}),i&&Object(te.jsx)(de,{color:"#e74c3c",text:i})]})]})},ve=n(44),fe=n.n(ve).a.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"b156b83712c8d63f6f575e7148b8d408",language:"ko"}}),ye=function(){return fe.get("movie/now_playing")},_e=function(){return fe.get("movie/upcoming")},we=function(){return fe.get("movie/popular")},ke=function(e){return fe.get("movie/".concat(e),{params:{append_to_response:"videos"}})},Se=function(e){return fe.get("search/movie",{params:{query:encodeURIComponent(e)}})},Te=function(){return fe.get("tv/top_rated")},Me=function(){return fe.get("tv/popular")},Re=function(){return fe.get("tv/airing_today")},Ue=function(e){return fe.get("tv/".concat(e),{params:{append_to_response:"videos"}})},ze=function(e){return fe.get("search/tv",{params:{query:encodeURIComponent(e)}})},Ce=function(e){Object(E.a)(n,e);var t=Object(Y.a)(n);function n(){var e;Object(H.a)(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={nowPlaying:null,upcoming:null,popular:null,error:null,loading:!0},e}return Object(J.a)(n,[{key:"componentDidMount",value:function(){var e=Object(X.a)(W.a.mark((function e(){var t,n,r,a,i,c;return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ye();case 3:return t=e.sent,n=t.data.results,e.next=7,_e();case 7:return r=e.sent,a=r.data.results,e.next=11,we();case 11:i=e.sent,c=i.data.results,this.setState({nowPlaying:n,upcoming:a,popular:c}),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(0),this.setState({error:"Can't find movie information."});case 19:return e.prev=19,this.setState({loading:!1}),e.finish(19);case 22:case"end":return e.stop()}}),e,this,[[0,16,19,22]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.nowPlaying,n=e.upcoming,r=e.popular,a=e.error,i=e.loading;return Object(te.jsx)(Oe,{nowPlaying:t,upcoming:n,popular:r,error:a,loading:i})}}]),n}(D.a.Component),Ie=$.c.div(g||(g=Object(Z.a)(["\n  padding: 20px;\n"]))),Pe=function(e){var t=e.topRated,n=e.popular,r=e.airingToday,a=e.loading,i=e.error;return Object(te.jsxs)(te.Fragment,{children:[Object(te.jsx)(ee.a,{children:Object(te.jsx)("title",{children:"TV | Miflix"})}),a?Object(te.jsx)(oe,{}):Object(te.jsxs)(Ie,{children:[t&&t.length>0&&Object(te.jsx)(ie,{title:"Top Rated Shows",children:t.map((function(e){return Object(te.jsx)(xe,{id:e.id,imageUrl:e.poster_path,title:e.original_name,rating:e.vote_average,year:e.first_air_date.substring(0,4)},e.id)}))}),n&&n.length>0&&Object(te.jsx)(ie,{title:"Popular Shows",children:n.map((function(e){return Object(te.jsx)(xe,{id:e.id,imageUrl:e.poster_path,title:e.original_name,rating:e.vote_average,year:e.first_air_date.substring(0,4)},e.id)}))}),r&&r.length>0&&Object(te.jsx)(ie,{title:"Airing Today",children:r.map((function(e){return Object(te.jsx)(xe,{id:e.id,imageUrl:e.poster_path,title:e.original_name,rating:e.vote_average,year:e.first_air_date.substring(0,4)},e.id)}))}),i&&Object(te.jsx)(de,{color:"#e74c3c",text:i})]})]})},Ne=function(e){Object(E.a)(n,e);var t=Object(Y.a)(n);function n(){var e;Object(H.a)(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={topRated:null,popular:null,airingToday:null,loading:!0,error:null},e}return Object(J.a)(n,[{key:"componentDidMount",value:function(){var e=Object(X.a)(W.a.mark((function e(){var t,n,r,a,i,c;return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Te();case 3:return t=e.sent,n=t.data.results,e.next=7,Me();case 7:return r=e.sent,a=r.data.results,e.next=11,Re();case 11:i=e.sent,c=i.data.results,this.setState({topRated:n,popular:a,airingToday:c}),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(0),this.setState({error:"Can't find TV information."});case 19:return e.prev=19,this.setState({loading:!1}),e.finish(19);case 22:case"end":return e.stop()}}),e,this,[[0,16,19,22]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.topRated,n=e.popular,r=e.airingToday,a=e.loading,i=e.error;return Object(te.jsx)(Pe,{topRated:t,popular:n,airingToday:r,loading:a,error:i})}}]),n}(D.a.Component),Ve=$.c.header(x||(x=Object(Z.a)(["\n  color: white;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 50px;\n  display: flex;\n  align-items: center;\n  background-color: rgba(20, 20, 20, 0.8);\n  z-index: 10;\n  box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);\n"]))),Fe=$.c.ul(m||(m=Object(Z.a)(["\n  display: flex;\n"]))),Ae=$.c.li(O||(O=Object(Z.a)(["\n  width: 80px;\n  height: 50px;\n  text-align: center;\n  border-bottom: 3px solid\n    ",";\n  transition: border-bottom 0.5s ease-in-out;\n"])),(function(e){return e.current?"#3498db":"transparent"})),Be=Object($.c)(G.b)(v||(v=Object(Z.a)(["\n  height: 50px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]))),De=Object(K.g)((function(e){var t=e.location.pathname;return Object(te.jsx)(Ve,{children:Object(te.jsxs)(Fe,{children:[Object(te.jsx)(Ae,{current:"/"===t,children:Object(te.jsx)(Be,{to:"/",children:"Movies"})}),Object(te.jsx)(Ae,{current:"/tv"===t,children:Object(te.jsx)(Be,{to:"/tv",children:"TV"})}),Object(te.jsx)(Ae,{current:"/search"===t,children:Object(te.jsx)(Be,{to:"/search",children:"Search"})})]})})})),Le=$.c.div(f||(f=Object(Z.a)(["\n  padding: 20px;  \n"]))),qe=$.c.form(y||(y=Object(Z.a)(["\n  margin-bottom: 50px;\n  width: 100%;\n"]))),He=$.c.input(_||(_=Object(Z.a)(["\n  all: unset;\n  font-size: 28px;\n  width: 100%;\n"]))),Je=function(e){var t=e.movieResults,n=e.tvResults,r=e.loading,a=e.searchTerm,i=e.handleSubmit,c=e.error,o=e.updateTerm;return Object(te.jsxs)(Le,{children:[Object(te.jsx)(ee.a,{children:Object(te.jsx)("title",{children:"Search | Miflix"})}),Object(te.jsx)(qe,{onSubmit:i,children:Object(te.jsx)(He,{placeholder:"Search Movies or TV Shows here!",value:a,onChange:o})}),r?Object(te.jsx)(oe,{}):Object(te.jsxs)(te.Fragment,{children:[t&&t.length>0&&Object(te.jsx)(ie,{title:"Search Results : Movie",children:t.map((function(e){return Object(te.jsx)(xe,{id:e.id,imageUrl:e.poster_path,title:e.original_title,rating:e.vote_average,year:e.release_date.substring(0,4),isMovie:!0},e.id)}))}),n&&n.length>0&&Object(te.jsx)(ie,{title:"Search Results : TV Show",children:n.map((function(e){return Object(te.jsx)(xe,{id:e.id,imageUrl:e.poster_path,title:e.original_name,rating:e.vote_average,year:e.first_air_date.substring(0,4)},e.id)}))}),c&&Object(te.jsx)(de,{color:"#e74c3c",text:c}),n&&t&&0===n.length&&0===t.length&&Object(te.jsx)(de,{text:"Nothing found",color:"#95a5a6"})]})]})},Ee=function(e){Object(E.a)(n,e);var t=Object(Y.a)(n);function n(){var e;Object(H.a)(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={movieResults:null,tvResults:null,searchTerm:"",loading:!1,error:null},e.updateTerm=function(t){var n=t.target.value;e.setState({searchTerm:n})},e.handleSubmit=function(t){t.preventDefault(),""!==e.state.searchTerm&&e.searchByTerm()},e.searchByTerm=Object(X.a)(W.a.mark((function t(){var n,r,a,i,c;return W.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.state.searchTerm,e.setState({loading:!0}),t.prev=2,t.next=5,Se(n);case 5:return r=t.sent,a=r.data.results,t.next=9,ze(n);case 9:i=t.sent,c=i.data.results,e.setState({movieResults:a,tvResults:c}),t.next=17;break;case 14:t.prev=14,t.t0=t.catch(2),e.setState({error:"Can't find results."});case 17:return t.prev=17,e.setState({loading:!1}),t.finish(17);case 20:case"end":return t.stop()}}),t,null,[[2,14,17,20]])}))),e}return Object(J.a)(n,[{key:"render",value:function(){var e=this.state,t=e.movieResults,n=e.tvResults,r=e.searchTerm,a=e.loading,i=e.error;return Object(te.jsx)(Je,{movieResults:t,tvResults:n,loading:a,error:i,searchTerm:r,handleSubmit:this.handleSubmit,updateTerm:this.updateTerm})}}]),n}(D.a.Component),Ye=$.c.div(w||(w=Object(Z.a)(["\n  height: calc(100vh - 50px);\n  width: 100%;\n  position: relative;\n  padding: 50px;\n"]))),Ge=$.c.div(k||(k=Object(Z.a)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-image: url(",");\n  background-position: center center;\n  background-size: cover;\n  filter: blur(3px);\n  opacity: 0.5;\n  z-index: 0;\n"])),(function(e){return e.bgImage})),Ke=$.c.div(S||(S=Object(Z.a)(["\n  display: flex;\n  width: 100%;\n  position: relative;\n  z-index: 1;\n  height: 100%;\n"]))),Qe=$.c.div(T||(T=Object(Z.a)(["\n  width: 30%;\n  background-image: url(",");\n  background-position: center center;\n  background-size: cover;\n  height: 100%;\n  border-radius: 5px;\n  margin-left: 35px;\n"])),(function(e){return e.bgImage})),We=$.c.div(M||(M=Object(Z.a)(["\n  width: 70%;\n  margin-left: 10px; \n"]))),Xe=$.c.h3(R||(R=Object(Z.a)(["\n  font-size: 32px;\n  margin-bottom: 20px;\n  margin-left: 20px;\n"]))),Ze=$.c.span(U||(U=Object(Z.a)(["\n  margin: 20px 0;\n  margin-left: 20px;\n"]))),$e=$.c.span(z||(z=Object(Z.a)([""]))),et=$.c.span(C||(C=Object(Z.a)(["\n  margin: 0 10px;\n"]))),tt=$.c.p(I||(I=Object(Z.a)(["\n  font-size: 20px;\n  opacity: 0.7;\n  line-height: 1.5;  \n  width: 50%;\n  margin-left: 20px;\n  margin-top: 20px;\n"]))),nt=($.c.div(P||(P=Object(Z.a)(["\n  display: flex;\n  width: 50%;\n  align-items: center;\n  margin-bottom: 10px;\n"]))),$.c.span(N||(N=Object(Z.a)(["\n  font-size:14px;\n  font-weight:700;\n  flex:1;\n  color:#fff;\n  text-align:center;\n  padding-bottom:8px;\n  cursor:pointer;\n  border-bottom:5px solid ",";\n  transition:border-bottom .5s ease-in-out;\n"])),(function(e){return e.current?"#8e44ad":"transparent"})),$.c.div(V||(V=Object(Z.a)(["\n  position: relative;\n  display: flex;\n  flex-wrap: nowrap;\n  width: 100%;\n  padding: 30px 0px 50px 0px;\n  overflow: auto;\n  &:after{\n    content:'';\n    position:absolute;\n    width:10%;\n    height:calc(100% - 80px);\n    top: 30px;\n    right: 0;\n    background: linear-gradient(to right, transparent, #000);\n  }\n"]))),$.c.iframe(F||(F=Object(Z.a)(["\n  width: 30%;\n  height: 30%;\n  margin: 20px;\n"])))),rt=function(e){var t=e.result,r=e.loading;e.error,e.activeTab,e.arrTabName,e.clickHandler;return r?Object(te.jsxs)(te.Fragment,{children:[Object(te.jsx)(ee.a,{children:Object(te.jsx)("title",{children:"Now Loading... | Miflix"})}),Object(te.jsx)(oe,{})]}):Object(te.jsxs)(Ye,{children:[Object(te.jsx)(ee.a,{children:Object(te.jsxs)("title",{children:[t.original_title?t.original_title:t.original_name," "," | Miflix"]})}),Object(te.jsx)(Ge,{bgImage:"https://image.tmdb.org/t/p/original".concat(t.poster_path)}),Object(te.jsxs)(Ke,{children:[Object(te.jsx)(Qe,{bgImage:t.poster_path?"https://image.tmdb.org/t/p/original".concat(t.poster_path):n(29)}),Object(te.jsxs)(We,{children:[Object(te.jsx)(Xe,{children:t.original_title?t.original_title:t.original_name}),Object(te.jsxs)(Ze,{children:[Object(te.jsx)($e,{children:t.release_date?t.release_date.substring(0,4):t.first_air_date.substring(0,4)}),Object(te.jsx)(et,{children:"\u318d"}),Object(te.jsxs)($e,{children:[t.runtime?t.runtime:t.episode_run_time[0]," min"]}),Object(te.jsx)(et,{children:"\u318d"}),Object(te.jsx)($e,{children:t.genres&&t.genres.map((function(e,n){return n===t.genres.length-1?e.name:"".concat(e.name," / ")}))})]}),Object(te.jsx)(tt,{children:t.overview}),Object(te.jsx)("trailerVideo",{children:t.videos.results&&t.videos.results.length>0?t.videos.results.map((function(e){return Object(te.jsx)("trailerVideoItem",{children:Object(te.jsx)(nt,{src:"https://www.youtube.com/embed/".concat(e.key)})},e.id)})):"There is no available Youtube Video."}),")"]})]})]})},at=function(e){Object(E.a)(n,e);var t=Object(Y.a)(n);function n(e){var r;Object(H.a)(this,n),r=t.call(this,e);var a=e.location.pathname;return r.state={result:null,error:null,loading:!0,isMovie:a.includes("/movie/")},r}return Object(J.a)(n,[{key:"componentDidMount",value:function(){var e=Object(X.a)(W.a.mark((function e(){var t,n,r,a,i,c,o,s;return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.props,n=t.match.params.id,r=t.history.push,a=this.state.isMovie,i=parseInt(n),!isNaN(i)){e.next=5;break}return e.abrupt("return",r("/"));case 5:if(c=null,e.prev=6,!a){e.next=14;break}return e.next=10,ke(i);case 10:o=e.sent,c=o.data,e.next=18;break;case 14:return e.next=16,Ue(i);case 16:s=e.sent,c=s.data;case 18:e.next=23;break;case 20:e.prev=20,e.t0=e.catch(6),this.setState({error:"Can't find anything."});case 23:return e.prev=23,this.setState({loading:!1,result:c}),e.finish(23);case 26:case"end":return e.stop()}}),e,this,[[6,20,23,26]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.result,n=e.error,r=e.loading;return Object(te.jsx)(rt,{result:t,error:n,loading:r})}}]),n}(D.a.Component),it=function(){return Object(te.jsx)(G.a,{children:Object(te.jsxs)(te.Fragment,{children:[Object(te.jsx)(De,{}),Object(te.jsxs)(K.d,{children:[Object(te.jsx)(K.b,{path:"/",exact:!0,component:Ce}),Object(te.jsx)(K.b,{path:"/tv",component:Ne}),Object(te.jsx)(K.b,{path:"/search",component:Ee}),Object(te.jsx)(K.b,{path:"/movie/:id",component:at}),Object(te.jsx)(K.b,{path:"/show/:id",component:at}),Object(te.jsx)(K.a,{from:"*",to:"/"})]})]})})},ct=n(45),ot=Object($.a)(A||(A=Object(Z.a)(["\n    ",";\n    a{\n        text-decoration:none;\n        color:inherit;\n    }\n    *{\n        box-sizing:border-box;\n    }\n    body{\n        font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n        font-size:12px;\n        background-color:rgba(20, 20, 20, 1);\n        color:white;\n        padding-top:50px;\n    }\n"])),ct.a),st=function(e){Object(E.a)(n,e);var t=Object(Y.a)(n);function n(){return Object(H.a)(this,n),t.apply(this,arguments)}return Object(J.a)(n,[{key:"render",value:function(){return Object(te.jsxs)(te.Fragment,{children:[Object(te.jsx)(it,{}),Object(te.jsx)(ot,{})]})}}]),n}(B.Component);q.a.render(Object(te.jsx)(st,{}),document.getElementById("root"))}},[[73,1,2]]]);
//# sourceMappingURL=main.1ec5a86f.chunk.js.map