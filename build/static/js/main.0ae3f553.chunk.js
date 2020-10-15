(this["webpackJsonpfinal-project"]=this["webpackJsonpfinal-project"]||[]).push([[0],{116:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),l=a(11),o=a.n(l),i=(a(58),a(59),a(44)),r=a(45),c=a(10),d=a(51),h=a(50),g=a(118),u=a(119),m=a(120),b=a(121),y=a(122),v=a(46),f=a.n(v),p=a(47),C=a.n(p),k=a(48),S=a(49),E=a(17),w=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={songs:[{id:0,title:"song0"},{id:1,title:"song1"},{id:2,title:"song2"},{id:3,title:"song3"},{id:4,title:"song4"},{id:5,title:"song5"},{id:6,title:"song6"},{id:7,title:"song7"},{id:8,title:"song8"},{id:9,title:"song9"},{id:10,title:"song10"},{id:11,title:"song11"},{id:12,title:"song12"},{id:13,title:"song13"}],columns:[],showTable:!1,user1:"",user2:"",showChat:!1,messages:[new E.Message({id:1,message:"I'm the recipient! (The person you're talking to)"}),new E.Message({id:0,message:"I'm you -- the blue bubble!"})],overlay:!1,overlayStyle:"none",typedMsg:""},n.overlayDiv=s.a.createRef(),n.getSongs=n.getSongs.bind(Object(c.a)(n)),n.handleUser1Change=n.handleUser1Change.bind(Object(c.a)(n)),n.handleUser2Change=n.handleUser2Change.bind(Object(c.a)(n)),n.setChatState=n.setChatState.bind(Object(c.a)(n)),n.toggleOverlay=n.toggleOverlay.bind(Object(c.a)(n)),n.handleMessageChange=n.handleMessageChange.bind(Object(c.a)(n)),n.sendMessage=n.sendMessage.bind(Object(c.a)(n)),n}return Object(r.a)(a,[{key:"handleUser1Change",value:function(e){this.setState({user1:e.target.value})}},{key:"handleUser2Change",value:function(e){this.setState({user2:e.target.value})}},{key:"handleMessageChange",value:function(e){this.setState({typedMsg:e.target.value})}},{key:"getSongs",value:function(){var e=this,t={user1:this.state.user1,user2:this.state.user2};fetch("/getSongs",{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(t){for(var a=0;a<t.length;a++)console.log(t[a]);var n=e.state.user1,s=e.state.user2;e.setState({songs:t,columns:[{dataField:"title",text:"Songs in Common Between ".concat(n," and ").concat(s)}],showTable:!0,user1:"",user2:""})}))}},{key:"login",value:function(){fetch("/login",{method:"POST",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){console.log(e.link),window.open(e.link,"_blank")}))}},{key:"setChatState",value:function(){this.setState({showChat:!0})}},{key:"toggleOverlay",value:function(){"block"===this.state.overlayStyle&&(this.setState({overlayStyle:"none",showChat:!1}),document.body.style.overflow="unset")}},{key:"sendMessage",value:function(){this.setState({typedMsg:""})}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{id:"wrapperDiv"},s.a.createElement("div",{id:"overlay",onClick:this.toggleOverlay,ref:"overlayDiv",style:{display:this.state.overlayStyle}}),s.a.createElement(g.a,{id:"mainDiv"},s.a.createElement("h1",{className:"mt-5 mb-10",style:{color:"#ffffff"}},"Unify"),s.a.createElement("div",{className:"mt-5 mb-10"},s.a.createElement(b.a,null,s.a.createElement(y.a,null,s.a.createElement(u.a,{type:"text",placeholder:"login_username else placeholder text",className:"form-control",value:this.state.user1,onChange:this.handleUser1Change,required:!0})),s.a.createElement(y.a,null,s.a.createElement(u.a,{type:"text",placeholder:"Enter another username",className:"form-control",value:this.state.user2,onChange:this.handleUser2Change,required:!0})),s.a.createElement(y.a,null,s.a.createElement(m.a,{className:"btn btn-lg btn-block",style:{backgroundColor:"#1DB954",border:"none",outline:"none"},onClick:this.login},"Login")),s.a.createElement(y.a,null,s.a.createElement(m.a,{className:"btn btn-lg btn-block",style:{backgroundColor:"#1DB954",border:"none",outline:"none"},onClick:this.getSongs},"Compare data")))),function(){if(e.state.showTable)return s.a.createElement("div",{className:"mt-5 mb-10"},s.a.createElement(f.a,{rowStyle:{backgroundColor:"#ffffff"},border:!0,keyField:"id",data:e.state.songs,columns:e.state.columns,pagination:C()(),bootstrap4:!0}))}(),s.a.createElement(k.a,{icon:S.a,className:"fas-3x sticky-chat",onClick:this.setChatState})),function(){if(e.state.showChat)return"block"!==e.state.overlayStyle&&(e.setState({overlayStyle:"block"}),document.body.style.overflow="hidden"),s.a.createElement("div",{id:"chatDiv"},s.a.createElement(g.a,null,s.a.createElement("h1",{style:{color:"#191414"},className:"mt-5 mb-10"},"Chat"),s.a.createElement(E.ChatFeed,{messages:e.state.messages,isTyping:e.state.is_typing,hasInputField:!1,showSenderName:!0,bubblesCentered:!1,bubbleStyles:{text:{fontSize:16},chatbubble:{borderRadius:70,padding:10,backgroundColor:"#1DB954"},recipientChatbubble:{backgroundColor:"#191414"}}})),s.a.createElement("div",{id:"writeMsgDiv"},s.a.createElement(u.a,{type:"text",placeholder:"Type a message",style:{width:"80%",marginRight:"20px"},onChange:e.handleMessageChange,value:e.state.typedMsg}),s.a.createElement(m.a,{className:"btn btn-primary",onClick:e.sendMessage},"Send")))}())}}]),a}(s.a.Component);var O=function(){return s.a.createElement("div",{className:"App"},s.a.createElement(w,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(113),a(114);o.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(O,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},53:function(e,t,a){e.exports=a(116)},58:function(e,t,a){},59:function(e,t,a){}},[[53,1,2]]]);
//# sourceMappingURL=main.0ae3f553.chunk.js.map