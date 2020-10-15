(this["webpackJsonpfinal-project"]=this["webpackJsonpfinal-project"]||[]).push([[0],{140:function(e,t,a){e.exports=a(210)},145:function(e,t,a){},146:function(e,t,a){},210:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a.n(s),r=a(14),l=a.n(r),o=(a(145),a(146),a(15)),i=a(5),c=a(16),u=a(69),m=a(70),h=a(12),g=a(77),d=a(76),f=a(212),b=a(213),v=a(214),p=a(215),y=a(216),E=a(71),S=a.n(E),N=a(72),C=a.n(N),k=a(73),w=a(75),O=a(27),j=a(11),A=a(74),T=a.n(A),U=a(44),M=(new(a(40).w3cwebsocket)("ws://localhost:8000"),function(e){Object(g.a)(a,e);var t=Object(d.a)(a);function a(e){var s;return Object(u.a)(this,a),(s=t.call(this,e)).state={songsJSON:[],user1Songs:[],user2Songs:[],columns:[],songNames:[],user1Artists:[],user2Artists:[],user1Albums:[],user2Albums:[],user1Pops:[],user2Pops:[],artistImages:[],showTable:!1,user1:"",user2:"",staticUser1:"",staticUser2:"",showChat:!1,messages:[new O.Message({id:1,message:"I'm the recipient! (The person you're talking to)"}),new O.Message({id:0,message:"I'm you -- the blue bubble!"})],overlay:!1,overlayStyle:"none",typedMsg:""},s.overlayDiv=n.a.createRef(),s.getSongs=s.getSongs.bind(Object(h.a)(s)),s.handleUser1Change=s.handleUser1Change.bind(Object(h.a)(s)),s.handleUser2Change=s.handleUser2Change.bind(Object(h.a)(s)),s.setChatState=s.setChatState.bind(Object(h.a)(s)),s.toggleOverlay=s.toggleOverlay.bind(Object(h.a)(s)),s.handleMessageChange=s.handleMessageChange.bind(Object(h.a)(s)),s.sendMessage=s.sendMessage.bind(Object(h.a)(s)),s.parseSongs=s.parseSongs.bind(Object(h.a)(s)),s}return Object(m.a)(a,[{key:"handleUser1Change",value:function(e){this.setState({user1:e.target.value})}},{key:"handleUser2Change",value:function(e){this.setState({user2:e.target.value})}},{key:"handleMessageChange",value:function(e){this.setState({typedMsg:e.target.value})}},{key:"getSongs",value:function(){var e=this,t={user1:this.state.user1,user2:this.state.user2};Object(U.trackPromise)(fetch("/getSongs",{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(t){console.log(t),e.setState({staticUser1:e.state.user1,staticUser2:e.state.user2,songsJSON:t.intersection,columns:[{dataField:"title",text:"Songs"},{dataField:"artists",text:"Artist"}],showTable:!0,user1:"",user2:"",user1Artists:t.user1Artists,user2Artists:t.user2Artists,user1Albums:t.user1Albums,user2Albums:t.user2Albums,user1Songs:t.user1Songs,user2Songs:t.user2Songs,artistImages:t.artistImages}),e.parseSongs()})))}},{key:"parseSongs",value:function(){for(var e=[],t=[],a=[],s=0;s<this.state.songsJSON.length;s++)e.push({id:s,title:this.state.songsJSON[s].name,artists:this.state.songsJSON[s].artists[0].name});for(var n=0;n<this.state.user1Songs.length;n++)t.push({popularity:this.state.user1Songs[n].popularity});for(var r=0;r<this.state.user2Songs.length;r++)a.push({popularity:this.state.user2Songs[r].popularity});this.setState({songNames:e,user1Pops:t,user2Pops:a})}},{key:"login",value:function(){fetch("/login",{method:"POST",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){window.open(e.link,"_blank")}))}},{key:"setChatState",value:function(){this.setState({showChat:!0})}},{key:"toggleOverlay",value:function(){"block"===this.state.overlayStyle&&(this.setState({overlayStyle:"none",showChat:!1}),document.body.style.overflow="unset")}},{key:"sendMessage",value:function(){this.setState({typedMsg:""})}},{key:"render",value:function(){var e,t=this,a=function(e){return Object(U.usePromiseTracker)().promiseInProgress&&n.a.createElement("img",{src:T.a,alt:"loading",style:{width:"5rem",height:"5rem"}})};return n.a.createElement("div",{id:"wrapperDiv"},n.a.createElement("div",{id:"overlay",onClick:this.toggleOverlay,ref:"overlayDiv",style:{display:this.state.overlayStyle}}),n.a.createElement(f.a,{id:"mainDiv"},n.a.createElement("h1",{className:"mt-5",style:{color:"#ffffff"}},"Unify"),n.a.createElement("p",(e={className:"subtitle"},Object(o.a)(e,"className","mb-10"),Object(o.a)(e,"style",{textAlign:"center",color:"#ffffff"}),e),"Compare Spotify playlists!"),n.a.createElement("div",{className:"mt-5 mb-10"},n.a.createElement(p.a,null,n.a.createElement(y.a,null,n.a.createElement(b.a,{type:"text",placeholder:"Enter your Spotify username",className:"form-control",value:this.state.user1,onChange:this.handleUser1Change,required:!0})),n.a.createElement(y.a,null,n.a.createElement(b.a,{type:"text",placeholder:"Enter another Spotify username",className:"form-control",value:this.state.user2,onChange:this.handleUser2Change,required:!0})),n.a.createElement(y.a,null,n.a.createElement(v.a,{className:"btn btn-lg btn-block",style:{backgroundColor:"#1DB954",border:"none",outline:"none"},onClick:this.login},"Login")),n.a.createElement(y.a,null,n.a.createElement(v.a,{className:"btn btn-lg btn-block",style:{backgroundColor:"#1DB954",border:"none",outline:"none"},onClick:this.getSongs},"Analyze data")))),n.a.createElement(a,null),function(){if(t.state.showTable)return n.a.createElement("div",null,n.a.createElement("h2",{className:"mt-5 mb-10 user-title"},t.state.staticUser1," and ",t.state.staticUser2),n.a.createElement("div",{className:"mt-5 mb-10"},n.a.createElement("h4",{className:"subtitle"},"Songs in Common"),n.a.createElement(S.a,{headerStyle:{backgroundColor:"#ffffff"},rowStyle:{backgroundColor:"#ffffff"},border:!0,keyField:"id",data:t.state.songNames,columns:t.state.columns,pagination:C()(),bootstrap4:!0})))}(),function(){for(var e=j.e(t.state.user1Artists,(function(e){return e.length}),(function(e){return e.name})),a=j.e(t.state.user2Artists,(function(e){return e.length}),(function(e){return e.name})),s=j.b(t.state.artistImages,(function(e){return e.name})),r=[],l=0,o=Array.from(e);l<o.length;l++){var u=Object(c.a)(o[l],2),m=u[0];u[1];r.push(m)}for(var h=[],g=0,d=Array.from(a);g<d.length;g++){var b=Object(c.a)(d[g],2),v=b[0];b[1];h.push(v)}var p,y=j.c(r,h),E=[],S=Object(i.a)(y.values());try{for(S.s();!(p=S.n()).done;){var N=p.value,C=e.get(N)+a.get(N);E.push({title:N,sum:C})}}catch(O){S.e(O)}finally{S.f()}E.sort((function(e,t){return j.a(e.sum,t.sum)})),E=E.slice(0,3);for(var k=0;k<E.length;k++){if(void 0===E[k])return;var w=s.get(E[k].title);E[k].image=w[0].images[1]}if(t.state.showTable&&E.length>0)return n.a.createElement(f.a,{className:"mt-5 mb-10 statsWrapper"},n.a.createElement("h4",{className:"subtitle"},"Top Artists in Common"),n.a.createElement("div",{className:"statsDiv"},E.map((function(e){return n.a.createElement("div",{className:"artistName"},n.a.createElement("div",null,n.a.createElement("img",{style:{width:"100%",height:"100%"},alt:"artist image",src:e.image.url})),n.a.createElement("p",{className:"statsTitle"},e.title))}))))}(),function(){for(var e=j.e(t.state.user1Albums,(function(e){return e.length}),(function(e){return e.name})),a=j.e(t.state.user2Albums,(function(e){return e.length}),(function(e){return e.name})),s=j.b(t.state.user1Albums,(function(e){return e.name})),r=[],l=0,o=Array.from(e);l<o.length;l++){var u=Object(c.a)(o[l],2),m=u[0];u[1];r.push(m)}for(var h=[],g=0,d=Array.from(a);g<d.length;g++){var b=Object(c.a)(d[g],2),v=b[0];b[1];h.push(v)}var p,y=j.c(r,h),E=[],S=Object(i.a)(y.values());try{for(S.s();!(p=S.n()).done;){var N=p.value,C=e.get(N)+a.get(N);E.push({title:N,sum:C})}}catch(O){S.e(O)}finally{S.f()}E.sort((function(e,t){return j.a(e.sum,t.sum)})),E=E.slice(0,3);for(var k=0;k<E.length;k++){if(void 0===E[k])return;var w=s.get(E[k].title);E[k].artist=w[0].artists.name,E[k].image=w[0].images[1]}if(t.state.showTable&&E.length>0)return n.a.createElement(f.a,{className:"mt-5 mb-10"},n.a.createElement("h4",{className:"subtitle"},"Top Albums in Common"),n.a.createElement("div",{className:"statsDiv"},E.map((function(e){return n.a.createElement("div",{className:"artistName"},n.a.createElement("div",null,n.a.createElement("img",{style:{width:"100%",height:"100%"},alt:"album art",src:e.image.url})),n.a.createElement("p",{className:"statsTitle"},e.title),n.a.createElement("p",null,e.artist))}))))}(),function(){var e=j.d(t.state.user1Pops,(function(e){return e.popularity})),a=j.d(t.state.user2Pops,(function(e){return e.popularity}));if(void 0==e&&void 0==a||(e=e.toFixed(2),a=a.toFixed(2)),t.state.showTable)return n.a.createElement(f.a,{className:"mt-5 mb-10"},n.a.createElement("h4",{className:"subtitle"},"Average Song Popularity"),n.a.createElement("div",{className:"statsDiv"},n.a.createElement("div",{className:"barDiv"},n.a.createElement("div",{className:"fullBar"},n.a.createElement("div",{className:"percentBar",style:{width:"".concat(e,"%")}})),n.a.createElement("p",{className:"statsTitle",style:{color:"#fff"}},t.state.staticUser1),n.a.createElement("p",{style:{color:"#fff"}},e,"%")),n.a.createElement("div",{className:"barDiv"},n.a.createElement("div",{className:"fullBar"},n.a.createElement("div",{className:"percentBar",style:{width:"".concat(a,"%")}})),n.a.createElement("p",{className:"statsTitle",style:{color:"#fff"}},t.state.staticUser2),n.a.createElement("p",{style:{color:"#fff"}},a,"%"))))}(),n.a.createElement(k.a,{icon:w.a,className:"fas-3x sticky-chat",onClick:this.setChatState})),function(){if(t.state.showChat)return"block"!==t.state.overlayStyle&&(t.setState({overlayStyle:"block"}),document.body.style.overflow="hidden"),n.a.createElement("div",{id:"chatDiv"},n.a.createElement(f.a,null,n.a.createElement("h1",{style:{color:"#191414"},className:"mt-5 mb-10"},"Chat"),n.a.createElement(O.ChatFeed,{messages:t.state.messages,isTyping:t.state.is_typing,hasInputField:!1,showSenderName:!0,bubblesCentered:!1,bubbleStyles:{text:{fontSize:16},chatbubble:{borderRadius:70,padding:10,backgroundColor:"#1DB954"},recipientChatbubble:{backgroundColor:"#191414"}}})),n.a.createElement("div",{id:"writeMsgDiv"},n.a.createElement(b.a,{type:"text",placeholder:"Type a message",style:{width:"80%",marginRight:"20px"},onChange:t.handleMessageChange,value:t.state.typedMsg}),n.a.createElement(v.a,{className:"btn btn-primary",onClick:t.sendMessage},"Send")))}())}}]),a}(n.a.Component));var D=function(){return n.a.createElement("div",{className:"App"},n.a.createElement(M,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(207),a(208);l.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(D,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},74:function(e,t,a){e.exports=a.p+"static/media/spinner.718571f2.gif"}},[[140,1,2]]]);
//# sourceMappingURL=main.ca130c4c.chunk.js.map