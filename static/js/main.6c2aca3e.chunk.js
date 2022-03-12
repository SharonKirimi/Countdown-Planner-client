(this["webpackJsonpCountdown-Planner-client"]=this["webpackJsonpCountdown-Planner-client"]||[]).push([[0],{127:function(e,n,t){"use strict";t.r(n);var a=t(1),r=t.n(a),s=t(20),i=t.n(s),o=(t(87),t(88),t(79)),c=t(18),l=t(11),d=t(17),u=t(133),j=(t(89),t(55)),h=t(3);var p,b,m,x,O,f,g,v,w,y,C,k,S,N,P,E,T,D=function(e){var n=e.variant,t=e.heading,r=e.message,s=Object(a.useState)(!0),i=Object(c.a)(s,2),o=i[0],l=i[1],d=Object(a.useState)(null),u=Object(c.a)(d,2),p=u[0],b=u[1];return console.log(p),Object(a.useEffect)((function(){var e=setTimeout((function(){return l(!1)}),5e3);return b(e),function(){clearTimeout(p)}}),[]),Object(h.jsx)(j.a,{variant:n,onClose:function(){return l(!1)},dismissible:!0,show:o,children:Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)(j.a.Heading,{children:t}),Object(h.jsx)("p",{className:"alert-body",children:r})]})})},I=t(12),B=function(){var e=I.a.header(p||(p=Object(l.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 17px 1.492%;\n  margin-bottom: 32px;\n  background-color: #fff;\n  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.04);\n  height: 70px;\n"]))),n=I.a.label(b||(b=Object(l.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 17px 1.492%;\n  background-color: #fff;\n"]))),t=I.a.div(m||(m=Object(l.a)(["\n  width: 16px;\n  margin-right: 10px;\n  cursor: pointer;\n"]))),a=I.a.input(x||(x=Object(l.a)(["\n  width: 210px;\n  padding: 5px;\n  border: none;\n  outline: none;\n  &::-webkit-input-placeholder {\n    font-size: 12px;\n    line-height: 20px;\n    font-style: normal;\n    color: #B4CFB0;\n  }\n  &::-moz-placeholder {\n    font-size: 12px;\n    line-height: 20px;\n    font-style: normal;\n    color: #B4CFB0;\n  }\n  &:-ms-input-placeholder {\n    font-size: 12px;\n    line-height: 20px;\n    font-style: normal;\n    color: #B4CFB0;\n  }\n  &:-moz-placeholder {\n    font-size: 12px;\n    line-height: 20px;\n    font-style: normal;\n    color: #B4CFB0;\n  }\n"]))),r=I.a.div(O||(O=Object(l.a)(["\n  display: flex;\n  align-items: center;\n"]))),s=I.a.div(f||(f=Object(l.a)(["\n  width: 1px;\n  height: 28px;\n  margin: 0 17px;\n  background-color: #ebebf2;\n"]))),i=I.a.div(g||(g=Object(l.a)(["\n  display: flex;\n  align-items: center;\n"]))),o=I.a.span(v||(v=Object(l.a)(["\n  margin-right: 15px;\n  font-size: 13px;\n  line-height: 20px;\n  color: #B4CFB0;\n"])));return Object(h.jsxs)(e,{children:[Object(h.jsxs)(n,{children:[Object(h.jsx)(t,{children:Object(h.jsx)("img",{src:"images/icon_search.svg",className:"header__search-img",alt:"search-icon"})}),Object(h.jsx)(a,{type:"text",className:"header__input",placeholder:"Search plans"})]}),Object(h.jsxs)(r,{children:[Object(h.jsx)(s,{}),Object(h.jsx)(i,{children:Object(h.jsx)(o,{children:"Sharon"})})]})]})},A=t(21),z=t(25),U=t(26),F=t(27),L=t(28),G="https://aqueous-atoll-85096.herokuapp.com",_="http://localhost:4741",R="localhost"===window.location.hostname?_:G,V=t(35),q=t.n(V),M=function(e){return q()({url:R+"/sign-in/",method:"POST",data:{credentials:{email:e.email,password:e.password}}})},H=t(14),W=t(31),Y=function(e){Object(F.a)(t,e);var n=Object(L.a)(t);function t(e){var a;return Object(z.a)(this,t),(a=n.call(this,e)).handleChange=function(e){return a.setState(Object(A.a)({},e.target.name,e.target.value))},a.onSignUp=function(e){e.preventDefault();var n,t=a.props,r=t.msgAlert,s=t.history,i=t.setUser;(n=a.state,q()({method:"POST",url:R+"/sign-up/",data:{credentials:{email:n.email,password:n.password,password_confirmation:n.passwordConfirmation}}})).then((function(){return M(a.state)})).then((function(e){return i(e.data.user)})).then((function(){return r({heading:"Sign Up Success",message:"Succesfully registered! You've been signed in as well.",variant:"success"})})).then((function(){return s.push("/")})).catch((function(e){a.setState({email:"",password:"",passwordConfirmation:""}),r({heading:"Sign Up Failed with error: "+e.message,message:"Registration failed. Email may be taken, or passwords don't match.",variant:"danger"})}))},a.state={email:"",password:"",passwordConfirmation:""},a}return Object(U.a)(t,[{key:"render",value:function(){var e=this.state,n=e.email,t=e.password,a=e.passwordConfirmation;return Object(h.jsx)("div",{className:"row",children:Object(h.jsxs)("div",{className:"col-sm-10 col-md-8 mx-auto mt-5",children:[Object(h.jsx)("h3",{className:"tasks-text",children:"Sign Up"}),Object(h.jsxs)(H.a,{onSubmit:this.onSignUp,children:[Object(h.jsxs)(H.a.Group,{controlId:"email",children:[Object(h.jsx)(H.a.Label,{children:"Email address"}),Object(h.jsx)(H.a.Control,{required:!0,type:"email",name:"email",value:n,placeholder:"Enter email",onChange:this.handleChange})]}),Object(h.jsxs)(H.a.Group,{controlId:"password",children:[Object(h.jsx)(H.a.Label,{children:"Password"}),Object(h.jsx)(H.a.Control,{required:!0,name:"password",value:t,type:"password",placeholder:"Password",onChange:this.handleChange})]}),Object(h.jsxs)(H.a.Group,{controlId:"passwordConfirmation",children:[Object(h.jsx)(H.a.Label,{children:"Password Confirmation"}),Object(h.jsx)(H.a.Control,{required:!0,name:"passwordConfirmation",value:a,type:"password",placeholder:"Confirm Password",onChange:this.handleChange})]}),Object(h.jsx)(W.a,{className:"mt-2",variant:"warning",type:"submit",children:"Submit"})]})]})})}}]),t}(a.Component),J=Object(d.f)(Y),Z=function(e){Object(F.a)(t,e);var n=Object(L.a)(t);function t(e){var a;return Object(z.a)(this,t),(a=n.call(this,e)).handleChange=function(e){return a.setState(Object(A.a)({},e.target.name,e.target.value))},a.onSignIn=function(e){e.preventDefault();var n=a.props,t=n.msgAlert,r=n.history,s=n.setUser;M(a.state).then((function(e){return s(e.data.user)})).then((function(){return t({heading:"Sign In Success",message:"Welcome!",variant:"success"})})).then((function(){return r.push("/")})).catch((function(e){a.setState({email:"",password:""}),t({heading:"Sign In Failed with error: "+e.message,message:"Failed to sign in. Check your email and password and try again.",variant:"danger"})}))},a.state={email:"",password:""},a}return Object(U.a)(t,[{key:"render",value:function(){var e=this.state,n=e.email,t=e.password;return Object(h.jsx)("div",{className:"row",children:Object(h.jsxs)("div",{className:"col-sm-10 col-md-8 mx-auto mt-5",children:[Object(h.jsx)("h3",{className:"tasks-text",children:"Sign In"}),Object(h.jsxs)(H.a,{onSubmit:this.onSignIn,children:[Object(h.jsxs)(H.a.Group,{controlId:"email",children:[Object(h.jsx)(H.a.Label,{children:"Email address"}),Object(h.jsx)(H.a.Control,{required:!0,type:"email",name:"email",value:n,placeholder:"Enter email",onChange:this.handleChange})]}),Object(h.jsxs)(H.a.Group,{controlId:"password",children:[Object(h.jsx)(H.a.Label,{children:"Password"}),Object(h.jsx)(H.a.Control,{required:!0,name:"password",value:t,type:"password",placeholder:"Password",onChange:this.handleChange})]}),Object(h.jsx)(W.a,{className:"mt-2",variant:"warning",type:"submit",children:"Submit"})]})]})})}}]),t}(a.Component),K=Object(d.f)(Z),Q=function(e){Object(F.a)(t,e);var n=Object(L.a)(t);function t(){return Object(z.a)(this,t),n.apply(this,arguments)}return Object(U.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,n=e.msgAlert,t=e.history,a=e.clearUser;(function(e){return q()({url:R+"/sign-out/",method:"DELETE",headers:{Authorization:"Bearer ".concat(e.token)}})})(e.user).finally((function(){return n({heading:"Signed Out Successfully",message:"Come back soon!",variant:"success"})})).finally((function(){return t.push("/")})).finally((function(){return a()}))}},{key:"render",value:function(){return""}}]),t}(a.Component),X=Object(d.f)(Q),$=function(e){Object(F.a)(t,e);var n=Object(L.a)(t);function t(e){var a;return Object(z.a)(this,t),(a=n.call(this,e)).handleChange=function(e){return a.setState(Object(A.a)({},e.target.name,e.target.value))},a.onChangePassword=function(e){e.preventDefault();var n=a.props,t=n.msgAlert,r=n.history,s=n.user;(function(e,n){return q()({url:R+"/change-password/",method:"PATCH",headers:{Authorization:"Bearer ".concat(n.token)},data:{passwords:{old:e.oldPassword,new:e.newPassword}}})})(a.state,s).then((function(){return t({heading:"Change Password Success",message:"Password changed successfully!",variant:"success"})})).then((function(){return r.push("/")})).catch((function(e){a.setState({oldPassword:"",newPassword:""}),t({heading:"Change Password Failed with error: "+e.message,message:"Failed to change passwords. Check your old password and try again.",variant:"danger"})}))},a.state={oldPassword:"",newPassword:""},a}return Object(U.a)(t,[{key:"render",value:function(){var e=this.state,n=e.oldPassword,t=e.newPassword;return Object(h.jsx)("div",{className:"row",children:Object(h.jsxs)("div",{className:"col-sm-10 col-md-8 mx-auto mt-5",children:[Object(h.jsx)("h3",{className:"tasks-text",children:"Change Password"}),Object(h.jsxs)(H.a,{onSubmit:this.onChangePassword,children:[Object(h.jsxs)(H.a.Group,{controlId:"oldPassword",children:[Object(h.jsx)(H.a.Label,{children:"Old password"}),Object(h.jsx)(H.a.Control,{required:!0,name:"oldPassword",value:n,type:"password",placeholder:"Old Password",onChange:this.handleChange})]}),Object(h.jsxs)(H.a.Group,{controlId:"newPassword",children:[Object(h.jsx)(H.a.Label,{children:"New Password"}),Object(h.jsx)(H.a.Control,{required:!0,name:"newPassword",value:t,type:"password",placeholder:"New Password",onChange:this.handleChange})]}),Object(h.jsx)(W.a,{className:"mt-2",variant:"warning",type:"submit",children:"Submit"})]})]})})}}]),t}(a.Component),ee=Object(d.f)($),ne=t(52),te=t.n(ne),ae=t(42),re=t(80),se=[{name:"Home",icon:ae.c},{name:"Calendar",icon:ae.a},{name:"Timer",icon:ae.b}],ie=I.a.nav(w||(w=Object(l.a)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  max-width: 260px;\n  height: 100%;\n  background-color: #94B49F;\n"]))),oe=I.a.div(y||(y=Object(l.a)(["\n  padding: 26px 7.692% 25px;\n  background-color: #789395;\n  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.04);\n"]))),ce=I.a.h2(C||(C=Object(l.a)(["\n  font-size: 15px;\n  line-height: 21px;\n  color: #fff;\n  letter-spacing: 3px;\n  text-transform: uppercase;\n"]))),le=I.a.a(k||(k=Object(l.a)(["\n  display: flex;\n  align-items: center;\n  padding: 17px 3.846% 17px 9.615%;\n  color: #B4CFB0;\n"]))),de=I.a.span(S||(S=Object(l.a)(["\n  margin-left: 15px;\n  font-size: 15px;\n  line-height: 19px;\n  color: #fff;\n  transition: 0.2s;\n"]))),ue=I.a.li(N||(N=Object(l.a)(["\n  &:hover {\n    background-color: #94B49F;\n    ",",\n    .svg-inline--fa {\n      opacity: 0.6;\n    }\n  }\n"])),de),je=function(){return Object(h.jsxs)(ie,{children:[Object(h.jsx)(oe,{children:Object(h.jsx)(ce,{children:"Countdown-Planner"})}),Object(h.jsx)("ul",{children:se.map((function(e,n){return Object(h.jsx)(ue,{children:Object(h.jsxs)(le,{href:"#",children:[Object(h.jsx)(re.a,{icon:e.icon}),Object(h.jsx)(de,{children:e.name})]})},n)}))})]})},he=t(81),pe=t(39),be=t(75),me=t(76),xe=I.a.div(P||(P=Object(l.a)(["\n  width: 90%;\n  background: white;\n  margin: auto;\n  padding-top: 65px;\n  margin-bottom: 50px;\n"]))),Oe=I.a.div(E||(E=Object(l.a)(["\n    height: 90%\n    width: 90%\n    margin: auto\n"]))),fe=I.a.h1(T||(T=Object(l.a)(["\n  margin-bottom: 15px;\n  font-size: 18px;\n  line-height: 18px;\n  color: #789395;\n  margin-left: 50px;\n"]))),ge=function(e){Object(F.a)(t,e);var n=Object(L.a)(t);function t(){var e;Object(z.a)(this,t);for(var a=arguments.length,s=new Array(a),i=0;i<a;i++)s[i]=arguments[i];return(e=n.call.apply(n,[this].concat(s))).calendar=r.a.createRef(),e.eventClick=function(n){var t={status:!0,title:n.event.title,start:n.event.start.toISOString(),end:n.event.end.toISOString(),id:n.event.id,x:n.jsEvent.x,y:n.jsEvent.y};e.props.popupOpen(t)},e.eventDrop=function(n){e.props.eventChange(n.event)},e.select=function(n){var t={status:!0,start:n.start.toISOString(),end:n.end.toISOString(),x:n.jsEvent.x,y:n.jsEvent.y};e.props.popupOpen(t)},e}return Object(U.a)(t,[{key:"componentDidUpdate",value:function(){var e=this;this.calendar.current.getApi().getEvents().map((function(e){return e.remove()})),this.props.events.map((function(n){return e.calendar.current.getApi().addEvent(n)}))}},{key:"render",value:function(){return Object(h.jsxs)(xe,{children:[Object(h.jsx)(fe,{children:"Calendar View"}),Object(h.jsx)(Oe,{children:Object(h.jsx)(he.a,{defaultView:"dayGridMonth",header:{left:"prev,next today",center:"title",right:"dayGridMonth,timeGridWeek,timeGridDay,listWeek"},plugins:[pe.b,be.a,me.a],ref:this.calendar,events:this.props.events,id:"calendar",height:"parent",buttonText:{today:"Today",month:"Month",week:"Week",day:"Day",list:"List",prev:"Back",next:"Next"},timeZone:"UTC",eventDurationEditable:!1,themeSystem:"bootstrap",editable:"true",selectable:"true",eventClick:this.eventClick,select:this.select,eventDrop:this.eventDrop})})]})}}]),t}(a.Component),ve=ge,we=t(131),ye=t(43),Ce=t.n(ye),ke=function(e){var n=e.label,t=e.value,a=t<10?"0".concat(t):t.toString();return Object(h.jsxs)("div",{className:Ce.a.TimerCell,children:[Object(h.jsx)("span",{className:Ce.a.TimerCellValue,children:a}),Object(h.jsx)("span",{className:Ce.a.TimerCellLabel,children:n})]})},Se=t(77),Ne=t.n(Se),Pe=function(){return Object(h.jsx)("div",{className:Ne.a.separator,children:":"})},Ee=t(130),Te=t(132),De=t(53),Ie=t.n(De),Be=function(e){var n=function(e){var n=Object(a.useState)(new Date),t=Object(c.a)(n,2),r=t[0],s=t[1];Object(a.useEffect)((function(){var e=setInterval((function(){s(new Date)}),1e3);return function(){clearInterval(e)}}),[e]);var i=Object(Ee.a)(e,r);if(i)return{weeks:0,days:0,hours:0,minutes:0,seconds:0,isTimeUp:i};var o=Object(Te.a)({start:r,end:e});return{weeks:o.weeks,days:o.days,hours:o.hours,minutes:o.minutes,seconds:o.seconds,isTimeUp:i}}(e.futureDate),t=n.weeks,r=n.days,s=n.hours,i=n.minutes,o=n.seconds,l=n.isTimeUp?Object(h.jsx)("div",{className:Ie.a.timeIsUp,children:"Time is up!!!"}):Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(ke,{value:t,label:"Weeks"}),Object(h.jsx)(Pe,{}),Object(h.jsx)(ke,{value:r,label:"Days"}),Object(h.jsx)(Pe,{}),Object(h.jsx)(ke,{value:s,label:"Hours"}),Object(h.jsx)(Pe,{}),Object(h.jsx)(ke,{value:i,label:"Minutes"}),Object(h.jsx)(Pe,{}),Object(h.jsx)(ke,{value:o,label:"Seconds"})]});return Object(h.jsx)("div",{className:Ie.a.TimerShell,children:l})},Ae=t(54),ze=t.n(Ae),Ue=Object(we.a)(new Date,{weeks:7,days:6,hours:22,minutes:40});var Fe,Le,Ge,_e,Re,Ve,qe,Me,He,We=function(){var e=Object(a.useState)(!1),n=Object(c.a)(e,2),t=n[0],r=n[1],s=t?Object(h.jsx)(Be,{futureDate:Ue}):null,i=t?"Hide Countdown":"Show Countdown";return Object(h.jsxs)("div",{className:ze.a.pageContainer,children:[Object(h.jsx)("h1",{children:"Time remaining to the end of the year"}),Object(h.jsx)("p",{children:"See the time "}),s,Object(h.jsx)("button",{className:ze.a.toggleButton,onClick:function(){return r((function(e){return!e}))},children:i})]})},Ye=t(78);var Je,Ze,Ke=I.a.div(Fe||(Fe=Object(l.a)(["\n  z-index: 100;\n  position: absolute;\n  background: none;\n"]))),Qe=I.a.form(Le||(Le=Object(l.a)(["\n  border-radius: 20px;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  height: 450px;\n  background: white;\n  padding: 22px 26px 17px;\n  width: 255px;\n  height: 280px;\n  border: 1px solid black;\n"]))),Xe=I.a.i(Ge||(Ge=Object(l.a)(["\n  color: grey;\n  position: relative;\n  left: 90%;\n  top: -70%;\n"]))),$e=I.a.div(_e||(_e=Object(l.a)(["\n  display: flex;\n  justify-content: space-around;\n"]))),en=I.a.select(Re||(Re=Object(l.a)(["\n  border-top: 0px;\n  border-left: 0px;\n  border-right: 0px;\n  border-bottom: 2px solid grey;\n  outline: none;\n  background-color: blue;\n  font-size: 16px;\n  padding: 3px;\n"]))),nn=I.a.input(Ve||(Ve=Object(l.a)(["\n  border-top: none;\n  border-left: none;\n  border-right: none;\n  outline: none;\n  width: 100%;\n  font-size: 14px;\n"]))),tn=I.a.button(qe||(qe=Object(l.a)(["\n  background: none;\n  border: none;\n  font-size: 16px;\n  &:hover {\n    transition: 1s;\n    color: grey;\n    cursor: pointer;\n  }\n  width: 150px;\n  height: 40px;\n"]))),an=Object(I.a)(tn)(Me||(Me=Object(l.a)(["\n  color: #ff5f5f;\n"]))),rn=I.a.button(He||(He=Object(l.a)(["\n  font-family: 'Material Icons';\n  color: grey;\n  position: absolute;\n  background: none;\n  border: none;\n  border-radius: 20px;\n  height: 30px;\n  width: 30px;\n  font-size: 18px;\n  top: 0%;\n  left: 84%;\n  &:hover {\n    transition: 1s;\n    color: black;\n    cursor: pointer;\n  }\n"]))),sn=Object(Ye.a)((function(e){return{events:e.events,popup:e.popup}}),(function(e){return{eventAdd:function(n){return e(function(e){return{type:"ADD_EVENT",event:e}}(n))},eventRemove:function(n){return e(function(e){return{type:"REMOVE_EVENT",event:e}}(n))},popupClose:function(){return e({type:"CLOSE_EVENT",status:!1})}}}))((function(e){var n=e.popup,t=e.popupClose,a=e.events,s=e.eventAdd,i=e.eventRemove,o=r.a.createRef(),c=r.a.createRef(),l=r.a.createRef(),d=r.a.createRef(),u=r.a.createRef();return Object(h.jsx)(Ke,{style:{top:n.y?n.y+40:0,left:n.x?n.x-150:0},children:Object(h.jsxs)(Qe,{onSubmit:function(e){return function(e){e.preventDefault();var r={title:o.current.value,start:c.current.value,end:l.current.value,id:a[a.length-1].id+1,notice:u.current.value,backgroundColor:d.current.value};return n.id&&i(n.id),s(r),t(),!1}(e)},children:[Object(h.jsx)("div",{children:Object(h.jsx)(nn,{placeholder:"Title",autoComplete:"off",ref:o,defaultValue:n.title,maxLength:"30",name:"title"})}),Object(h.jsxs)("div",{children:[Object(h.jsx)(nn,{placeholder:"DD/MM/YYYY",autoComplete:"off",ref:c,required:!0,onChange:function(e){return e},patern:"/[+-]?\\d{4}(-[01]\\d(-[0-3]\\d(T[0-2]\\d:[0-5]\\d:? ([0-5]\\d(\\.\\d+)?)?[+-][0-2]\\d:[0-5]\\dZ?)?)?)?/",defaultValue:n.start,name:"start"}),Object(h.jsx)(Xe,{className:"material-icons",children:"date_range"})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)(nn,{placeholder:"event time",autoComplete:"off",ref:l,onFocus:function(e){return e},defaultValue:n.end,name:"end"}),Object(h.jsx)(Xe,{className:"material-icons",children:"access_time"})]}),Object(h.jsx)("div",{children:Object(h.jsx)(nn,{placeholder:"notice",autoComplete:"off",ref:u,name:"title"})}),Object(h.jsxs)(en,{onChange:function(e){return function(e){d.current.style.background=e.target.value}(e)},ref:d,children:[Object(h.jsx)("option",{style:{backgroundColor:"blue"},value:"blue",defaultChecked:!0}),Object(h.jsx)("option",{style:{backgroundColor:"red"},value:"red"}),Object(h.jsx)("option",{style:{backgroundColor:"green"},value:"green"}),Object(h.jsx)("option",{style:{backgroundColor:"yellow"},value:"yellow"})]}),Object(h.jsxs)($e,{children:[Object(h.jsx)("div",{children:Object(h.jsx)(an,{onClick:function(){return e=n.id,i(e),void t();var e},children:"\u0421ancel event"})}),Object(h.jsx)("div",{children:Object(h.jsx)(tn,{type:"submit",children:"Save"})})]}),Object(h.jsx)(rn,{className:"material-icons",onClick:function(){return t()},children:"clear"})]})})}));te.a.setAppElement("#root");var on=I.a.div(Je||(Je=Object(l.a)(["\n    height: 100%;\n"]))),cn=I.a.main(Ze||(Ze=Object(l.a)(["\n    min-height: 100%;\n    margin-left: 260px;\n"]))),ln=function(){var e=Object(a.useState)({}),n=Object(c.a)(e,2),t=n[0],r=n[1],s=Object(a.useState)([]),i=Object(c.a)(s,2),l=i[0],j=i[1],p=function(e){var n=e.heading,t=e.message,a=e.variant,r=Object(u.a)();j((function(e){return[].concat(Object(o.a)(e),[{heading:n,message:t,variant:a,id:r}])}))};return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(B,{user:t}),l.map((function(e){return Object(h.jsx)(D,{heading:e.heading,variant:e.variant,message:e.message,id:e.id},e.id)})),Object(h.jsxs)("main",{className:"container",children:[Object(h.jsxs)(d.c,{children:[Object(h.jsx)(d.a,{path:"/sign-up",element:Object(h.jsx)(J,{msgAlert:p,setUser:r})}),Object(h.jsx)(d.a,{path:"/sign-in",element:Object(h.jsx)(K,{msgAlert:p,setUser:r})}),Object(h.jsx)(d.a,{path:"/sign-out",element:Object(h.jsx)(X,{msgAlert:p,clearUser:function(){return r(null)},user:t})}),Object(h.jsx)(d.a,{path:"/change-password",element:Object(h.jsx)(ee,{msgAlert:p,user:t})})]}),Object(h.jsxs)(on,{children:[Object(h.jsx)(je,{}),Object(h.jsxs)(cn,{children:[Object(h.jsx)(B,{}),Object(h.jsx)(ve,{}),Object(h.jsx)(We,{})]}),Object(h.jsx)(te.a,{isOpen:sn.status,children:Object(h.jsx)(sn,{})})]})]})]})},dn=t(30),un=Object(h.jsx)(dn.a,{basename:"/countdown-planner-client",children:Object(h.jsx)(ln,{})});i.a.render(un,document.getElementById("root"))},43:function(e,n,t){},53:function(e,n,t){},54:function(e,n,t){},77:function(e,n,t){},87:function(e,n,t){},89:function(e,n,t){}},[[127,1,2]]]);
//# sourceMappingURL=main.6c2aca3e.chunk.js.map