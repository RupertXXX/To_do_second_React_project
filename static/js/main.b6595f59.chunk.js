(this["webpackJsonpnew-app"]=this["webpackJsonpnew-app"]||[]).push([[0],{123:function(e,t,n){},124:function(e,t,n){e.exports={logout:"settings_logout__2OTG1"}},132:function(e,t,n){},18:function(e,t,n){e.exports={main:"register_main__3GcEN",almost_main:"register_almost_main__3nktJ",title:"register_title__2f_DT",main_form:"register_main_form__2HgNS",name:"register_name__1Izds",email:"register_email__q7qOq",password:"register_password__2dUZj",age:"register_age__2VgHY",register:"register_register__I933w",login:"register_login__FqXD9"}},22:function(e,t,n){e.exports={main:"oneNote_main__3mxpc",top:"oneNote_top__1XzjZ",description:"oneNote_description__21ipH",set_completed:"oneNote_set_completed__2sGb0",info:"oneNote_info__jL2Di",date:"oneNote_date__61piF",completed:"oneNote_completed__3HkmP",completed_img:"oneNote_completed_img__Ppeib"}},23:function(e,t,n){e.exports={main:"login_main__bLmud",almost_main:"login_almost_main__1JEwQ",title:"login_title__1ie_H",main_form:"login_main_form__3GXEV",email:"login_email__3cBJ_",password:"login_password__1wfVx",login:"login_login__1j8xm",register:"login_register__1EKdP"}},24:function(e,t,n){e.exports={main:"addNoteIs_main__Lp0pq",top:"addNoteIs_top__2mTXb",close:"addNoteIs_close__3yLm2",title:"addNoteIs_title__1lSwS",description:"addNoteIs_description__L4vB3",submit:"addNoteIs_submit__2i1E_"}},25:function(e,t,n){e.exports={main:"auth_main__1A3Q4",almost_main:"auth_almost_main__yudt9",title:"auth_title__2-IbM",links:"auth_links__2Z-Zu",text:"auth_text__2a7gH",login:"auth_login__1JH51",register:"auth_register__fcDJq"}},251:function(e,t,n){"use strict";n.r(t);var s=n(1),o=n.n(s),i=n(52),c=n.n(i),a=n(11),r=n(9),l=(n(132),n(5)),u=n(120),d=n(6),j=n(58),m=n(121).create({baseURL:"https://api-nodejs-todolist.herokuapp.com/"}),b=function(e,t,n,s){return m.post("user/register",{name:e,email:t,password:n,age:s})},p=function(e,t){return m.post("user/login",{email:e,password:t})},_=function(e){return m.post("user/logout",{},{headers:{Authorization:"Bearer ".concat(e)}})},O=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:18,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return m.get("task?limit=".concat(t,"&skip=").concat(n),{headers:{Authorization:"Bearer ".concat(e)}}).then((function(e){return e}))},h=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:18,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,s=arguments.length>3?arguments[3]:void 0;return m.get("task?limit=".concat(t,"&skip=").concat(n,"&completed=").concat(s),{headers:{Authorization:"Bearer ".concat(e)}}).then((function(e){return e}))},g=function(e,t){return m.post("task",{description:t},{headers:{Authorization:"Bearer ".concat(e)}})},f=function(e,t,n){return m.put("task/".concat(t),{completed:n},{headers:{Authorization:"Bearer ".concat(e)}})},x="SET_USER_MESSAGES",N="SET_USER_DATA",v="SET_USER_TOKEN",S="SET_USER_REGISTER_TOKEN",E="CLEAR_USER_DATA",L="LOGIN_IS",k="LOGIN_IS_NOT",T={isLogin:!1,messages:[],userData:{name:null,email:null,age:null},token:null,registerToken:null},y=function(e,t){return{type:"SET_USER_MESSAGES",spot:e,messages:t}},C=function(e,t){return function(n){p(e,t).then((function(e){n({type:"SET_USER_TOKEN",token:e.data.token}),n({type:"LOGIN_IS"})})).catch((function(e){n(y("login",e))}))}},w=function(){return function(e,t){_(t().user.token).then((function(t){e({type:"CLEAR_USER_DATA"})})).catch((function(t){e(y("logout",t))}))}},I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x:var n={spot:t.spot,messages:t.messages};return Object(d.a)(Object(d.a)({},e),{},{messages:[].concat(Object(j.a)(e.messages),[n])});case L:return Object(d.a)(Object(d.a)({},e),{},{isLogin:!0});case k:return Object(d.a)(Object(d.a)({},e),{},{isLogin:!1});case N:return Object(d.a)(Object(d.a)({},e),{},{userData:{name:t.name,email:t.email,age:t.age}});case v:return Object(d.a)(Object(d.a)({},e),{},{token:t.token});case S:return Object(d.a)(Object(d.a)({},e),{},{registerToken:t.registerToken});case E:return Object(d.a)(Object(d.a)({},e),{},{userData:{email:null,password:null},isLogin:!1});default:return e}},A="SET_INITIALIZED",U={initialized:!1},R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case A:return Object(d.a)(Object(d.a)({},e),{},{initialized:!0});default:return e}},F="SET_USER_NOTES",D="SET_LOCATION",G="SET_NOTES_MESSAGES",B={notes:["test"],location:"notes",messages:[]},M=function(e){return{type:"SET_USER_NOTES",notes:e}},z=function(e,t){return{type:"SET_NOTES_MESSAGES",spot:e,messages:t}},J=function(e){return e*=18,function(t,n){return O(n().user.token,18,e).then((function(e){t(M(e.data.data))})).catch((function(e){t(z("get",e))}))}},K=function(e,t){return e*=18,function(n,s){return h(s().user.token,18,e,t).then((function(e){n(M(e.data.data))})).catch((function(e){n(z("getCompleted",e))}))}},q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case F:var n=t.notes.map((function(e){return Object(d.a)(Object(d.a)({},e),{},{date:e.createdAt.slice(0,10)})}));return Object(d.a)(Object(d.a)({},e),{},{notes:n});case D:return Object(d.a)(Object(d.a)({},e),{},{location:t.location});case G:var s={spot:t.spot,messages:t.messages};return Object(d.a)(Object(d.a)({},e),{},{messages:[].concat(Object(j.a)(e.messages),[s])});default:return e}},H=n(254),P=Object(l.c)({user:I,form:H.a,app:R,notes:q}),Z=Object(l.e)(P,Object(l.a)(u.a));window.store=Z;var V=Z,X=n(123),Q=n.n(X),W=n(10),Y=n(54),$=n(55),ee=n(60),te=n(57),ne=n(61),se=n.n(ne),oe=n(0),ie=function(e){Object(ee.a)(n,e);var t=Object(te.a)(n);function n(e){var s;return Object(Y.a)(this,n),(s=t.call(this,e)).state={hasError:!1,error:""},s}return Object($.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0,error:e})}},{key:"render",value:function(){var e=this;return Object(oe.jsx)(oe.Fragment,{children:this.state.hasError?Object(oe.jsxs)("div",{className:se.a.main,children:[Object(oe.jsxs)("div",{className:se.a.text,children:[" Oops! This ",this.props.name," has ",Object(oe.jsx)("span",{children:"error"})," =( "]}),Object(oe.jsx)("button",{className:se.a.btn,onClick:function(){return console.log(e.state.error)},children:"Report a bug"})]}):this.props.children})}}]),n}(o.a.Component),ce=function(e){return function(t){for(var n=t.forErrorName,s=arguments.length,o=new Array(s>1?s-1:0),i=1;i<s;i++)o[i-1]=arguments[i];return Object(oe.jsx)(ie,{name:n,children:Object(oe.jsx)(e,Object(d.a)({},o))})}},ae=n(29),re=n.n(ae),le=function(e){return Object(oe.jsx)(oe.Fragment,{children:Object(oe.jsxs)("div",{className:re.a.main,children:[Object(oe.jsx)("div",{className:re.a.title,children:"Menu"}),Object(oe.jsx)("div",{className:re.a.line}),Object(oe.jsx)(a.b,{className:re.a.link,to:"/notes",children:"Notes"}),Object(oe.jsx)(a.b,{className:re.a.link,to:"/incompleted",children:"Incompleted notes"}),Object(oe.jsx)(a.b,{className:re.a.link,to:"/completed",children:"Completed notes"}),Object(oe.jsx)(a.b,{className:re.a.settings_link,to:"/settings",children:"Settings"})]})})},ue=Object(l.d)(ce,Object(r.b)((function(e){return{isLogin:e.user.isLogin}}),(function(e){return{logoutUser:function(){e(w())}}})))(le),de=n(59),je=n(84),me=n.n(je),be=function(e){return Object(oe.jsx)("div",{className:me.a.main,onClick:function(){return e.setMode((function(e){return!e}))},children:Object(oe.jsx)("div",{className:me.a.logo,children:"+"})})},pe=n(253),_e=n(252),Oe=n(24),he=n.n(Oe),ge=Object(_e.a)({form:"addNote"})((function(e){return Object(oe.jsxs)("form",{className:he.a.main_form,onSubmit:e.handleSubmit,children:[Object(oe.jsx)("div",{children:Object(oe.jsx)(pe.a,{className:he.a.description,name:"description",placeholder:"Your description",component:"textarea"})}),e.error&&Object(oe.jsx)("div",{className:he.a.mass_error,children:e.error}),Object(oe.jsx)("button",{className:he.a.submit,name:"submit",children:" Send "})]})})),fe=function(e){return Object(oe.jsxs)("div",{className:he.a.main,children:[Object(oe.jsxs)("div",{className:he.a.top,children:[Object(oe.jsx)("div",{}),Object(oe.jsx)("div",{className:he.a.close,onClick:function(){return e.setMode((function(e){return!e}))},children:"+"})]}),Object(oe.jsx)("div",{className:he.a.title,children:"Add Note: "}),Object(oe.jsx)(ge,{onSubmit:function(t){e.setNote(t.description)},error:e.errors})]})},xe=function(e){var t=Object(s.useState)(!1),n=Object(de.a)(t,2),o=n[0],i=n[1];return Object(oe.jsx)(oe.Fragment,{children:o?Object(oe.jsx)(fe,Object(d.a)({setMode:i},e)):Object(oe.jsx)(be,{setMode:i})})},Ne=Object(l.d)(ce,Object(r.b)((function(e){return{errors:e.user.messages.filter((function(e){return e.spot="add"}))}}),(function(e){return{setNote:function(t){e(function(e){return function(t,n){var s=n().notes.location;return g(n().user.token,e).then((function(e){"notes"===s?t(J(0)):"incompleted"===s?t(K(0,!1)):"completed"===s&&t(K(0,!0))})).catch((function(e){t(z("add",e))}))}}(t))}}})))(xe),ve=n(87),Se=n.n(ve),Ee=function(e){return{isLogin:e.user.isLogin}},Le=function(e){var t=function(t){return t.isLogin?Object(oe.jsx)(e,Object(d.a)({},t)):Object(oe.jsx)(W.a,{to:"/auth"})};return t=Object(r.b)(Ee)(t)}((function(e){return Object(oe.jsxs)(oe.Fragment,{children:[Object(oe.jsxs)("div",{className:Se.a.main,children:[Object(oe.jsx)(ue,{}),e.children]}),Object(oe.jsx)(Ne,{className:Se.a.add_photo})]})})),ke=n(22),Te=n.n(ke),ye=n.p+"static/media/yes.633a23bb.png",Ce=n.p+"static/media/no.fa7e5ead.svg",we=function(e){var t=Object(s.useState)(e.completed),n=Object(de.a)(t,2),o=n[0],i=n[1];return Object(oe.jsx)(oe.Fragment,{children:Object(oe.jsxs)("div",{className:Te.a.main,children:[Object(oe.jsxs)("div",{className:Te.a.top,children:[Object(oe.jsx)("div",{className:Te.a.description,children:e.description}),o?Object(oe.jsx)("button",{className:Te.a.set_completed,onClick:function(){return t=e.id,e.setComplete(t,!1),void i((function(e){return!e}));var t},children:"Incompleted"}):Object(oe.jsx)("button",{className:Te.a.set_completed,onClick:function(){return t=e.id,e.setComplete(t,!0),void i((function(e){return!e}));var t},children:"Completed"})]}),Object(oe.jsxs)("div",{className:Te.a.info,children:[Object(oe.jsx)("div",{className:Te.a.date,children:e.date}),Object(oe.jsxs)("div",{className:Te.a.completed,children:[" Completed: ",Object(oe.jsx)("img",{className:Te.a.completed_img,src:e.completed?ye:Ce,alt:e.completed?"yes":"no"})," "]})]})]})})},Ie=n(88),Ae=n.n(Ie),Ue=n.p+"static/media/loading.728cf1d4.svg",Re=function(e){return Object(oe.jsx)(oe.Fragment,{children:Object(oe.jsx)("div",{className:Ae.a.loading,children:Object(oe.jsx)("img",{className:Ae.a.loading_svg,src:Ue,alt:"Loading..."})})})},Fe=n(89),De=n.n(Fe),Ge=function(e){return Object(oe.jsx)(oe.Fragment,{children:Object(oe.jsx)("div",{className:De.a.main,children:"test"!==e.notes[0]?Object(oe.jsx)("div",{className:De.a.notes,children:e.notes.map((function(t){return Object(oe.jsx)(we,{setComplete:e.setComplete,id:t._id,description:t.description,date:t.date,completed:t.completed},t._id)}))}):Object(oe.jsx)(Re,{})})})},Be=function(e){Object(ee.a)(n,e);var t=Object(te.a)(n);function n(){return Object(Y.a)(this,n),t.apply(this,arguments)}return Object($.a)(n,[{key:"componentDidMount",value:function(){"/notes"===this.props.location.pathname?(this.props.getNotes(0),this.props.setLocation("notes")):"/incompleted"===this.props.location.pathname?(this.props.getCompletedNotes(0,!1),this.props.setLocation("incompleted")):"/completed"===this.props.location.pathname&&(this.props.getCompletedNotes(0,!0),this.props.setLocation("completed"))}},{key:"componentDidUpdate",value:function(e){e.location.pathname!==this.props.location.pathname&&("/notes"===this.props.location.pathname?(this.props.getNotes(0),this.props.setLocation("notes")):"/incompleted"===this.props.location.pathname?(this.props.getCompletedNotes(0,!1),this.props.setLocation("incompleted")):"/completed"===this.props.location.pathname&&(this.props.getCompletedNotes(0,!0),this.props.setLocation("completed")))}},{key:"render",value:function(){return Object(oe.jsx)(Ge,Object(d.a)({},this.props))}}]),n}(o.a.Component),Me=Object(l.d)(ce,Object(r.b)((function(e){return{notes:e.notes.notes}}),(function(e){return{getNotes:function(t){e(J(t))},getCompletedNotes:function(t,n){e(K(t,n))},setComplete:function(t,n){e(function(e,t){return function(n,s){var o=s().notes.location;return f(s().user.token,e,t).then((function(e){"notes"===o?n(J(0)):"incompleted"===o?n(K(0,!1)):"completed"===o&&n(K(0,!0))})).catch((function(e){n(z("complete",e))}))}}(t,n))},setLocation:function(t){e(function(e){return{type:"SET_LOCATION",location:e}}(t))}}})),W.g)(Be),ze=n(124),Je=n.n(ze),Ke=function(e){return Object(oe.jsx)(oe.Fragment,{children:Object(oe.jsxs)("div",{children:[Object(oe.jsx)("div",{children:"Settings"}),Object(oe.jsx)("div",{}),Object(oe.jsx)("button",{className:Je.a.logout,onClick:function(){return e.logoutUser()},children:"Logout"})]})})},qe=Object(l.d)(ce,Object(r.b)((function(e){return{isLogin:e.user.isLogin}}),(function(e){return{logoutUser:function(){e(w())}}})))(Ke),He=n(25),Pe=n.n(He),Ze=function(e){return Object(oe.jsx)("div",{className:Pe.a.main,children:e.isLogin?Object(oe.jsx)(W.a,{to:"/notes"}):Object(oe.jsxs)("div",{className:Pe.a.almost_main,children:[Object(oe.jsxs)("div",{className:Pe.a.title,children:["Welcome to ",Object(oe.jsx)("span",{children:"The Notes"})," "]}),Object(oe.jsxs)("div",{className:Pe.a.links,children:[Object(oe.jsx)("div",{className:Pe.a.text,children:" Login to continue "}),Object(oe.jsx)(a.b,{className:Pe.a.login,to:"/login",children:"Login"}),Object(oe.jsx)("div",{className:Pe.a.text,children:" If you don't have an account you need to register "}),Object(oe.jsx)(a.b,{className:Pe.a.register,to:"/register",children:"Register"})]})]})})},Ve=Object(l.d)(ce,Object(r.b)((function(e){return{isLogin:e.user.isLogin}}),null))(Ze),Xe=n(18),Qe=n.n(Xe),We=Object(_e.a)({form:"register"})((function(e){return Object(oe.jsxs)("form",{className:Qe.a.main_form,onSubmit:e.handleSubmit,children:[Object(oe.jsx)("div",{children:Object(oe.jsx)(pe.a,{className:Qe.a.name,name:"name",type:"text",placeholder:"Name",component:"input"})}),Object(oe.jsx)("div",{children:Object(oe.jsx)(pe.a,{className:Qe.a.email,name:"email",type:"email",placeholder:"E-mail",component:"input"})}),Object(oe.jsx)("div",{children:Object(oe.jsx)(pe.a,{className:Qe.a.password,name:"password",type:"password",placeholder:"Password",component:"input"})}),Object(oe.jsx)("div",{children:Object(oe.jsx)(pe.a,{className:Qe.a.age,name:"age",type:"text",placeholder:"Age",component:"input"})}),e.error&&Object(oe.jsx)("div",{className:Qe.a.mass_error,children:e.error}),Object(oe.jsx)("div",{children:Object(oe.jsx)("button",{className:Qe.a.register,name:"submit",children:"Send"})})]})})),Ye=function(e){return Object(oe.jsx)("div",{className:Qe.a.main,children:e.isLogin?Object(oe.jsx)(W.a,{to:"/notes"}):Object(oe.jsxs)("div",{className:Qe.a.almost_main,children:[Object(oe.jsx)("div",{className:Qe.a.title,children:"Registry"}),Object(oe.jsx)(We,{onSubmit:function(t){e.registerUser(t.name,t.email,t.password,t.age)}}),Object(oe.jsx)(a.b,{className:Qe.a.login,to:"/login",children:"Login"})]})})},$e=Object(l.d)(ce,Object(r.b)((function(e){return{isLogin:e.user.isLogin}}),(function(e){return{registerUser:function(t,n,s,o){e(function(e,t,n,s){return function(o){return b(e,t,n,s).then((function(e){o(C(t,n)),o({type:"SET_USER_REGISTER_TOKEN",registerToken:e.data.token})})).catch((function(e){o(y("register",e))}))}}(t,n,s,o))}}})))(Ye),et=n(23),tt=n.n(et),nt=Object(_e.a)({form:"register"})((function(e){return Object(oe.jsxs)("form",{className:tt.a.main_form,onSubmit:e.handleSubmit,children:[Object(oe.jsx)("div",{children:Object(oe.jsx)(pe.a,{className:tt.a.email,name:"email",type:"email",placeholder:"E-mail",component:"input"})}),Object(oe.jsx)("div",{children:Object(oe.jsx)(pe.a,{className:tt.a.password,name:"password",type:"password",placeholder:"password",component:"input"})}),e.error&&Object(oe.jsx)("div",{className:tt.a.mass_error,children:e.error}),Object(oe.jsx)("div",{children:Object(oe.jsx)("button",{className:tt.a.login,name:"submit",children:" Send "})})]})})),st=function(e){return Object(oe.jsx)("div",{className:tt.a.main,children:e.isLogin?Object(oe.jsx)(W.a,{to:"/notes"}):Object(oe.jsxs)("div",{className:tt.a.almost_main,children:[Object(oe.jsx)("div",{className:tt.a.title,children:"Login"}),Object(oe.jsx)(nt,{onSubmit:function(t){e.loginUser(t.email,t.password)},error:e.errors}),Object(oe.jsx)(a.b,{className:tt.a.register,to:"/register",children:"Register"})]})})},ot=Object(l.d)(ce,Object(r.b)((function(e){return{isLogin:e.user.isLogin,errors:e.user.messages.filter((function(e){return e.spot="login"}))}}),(function(e){return{loginUser:function(t,n){e(C(t,n))},logoutUser:function(){e(w())}}})))(st),it=n(63),ct=n.n(it),at=n.p+"static/media/p404.1b433036.png",rt=function(){return Object(oe.jsx)(oe.Fragment,{children:Object(oe.jsxs)("div",{className:ct.a.main,children:[Object(oe.jsx)("img",{className:ct.a.p404,src:at,alt:"404"}),Object(oe.jsx)(a.b,{className:ct.a.link,to:"/",children:" Go to main page "})]})})};var lt=function(){return Object(oe.jsx)("div",{className:Q.a.App,children:Object(oe.jsxs)(W.d,{children:[Object(oe.jsx)(W.b,{exact:!0,path:"/",render:function(){return Object(oe.jsx)(W.a,{to:"/notes"})}}),Object(oe.jsx)(W.b,{path:"/auth",render:function(){return Object(oe.jsx)(Ve,{})}}),Object(oe.jsx)(W.b,{path:"/register",render:function(){return Object(oe.jsx)($e,{})}}),Object(oe.jsx)(W.b,{path:"/login",render:function(){return Object(oe.jsx)(ot,{})}}),Object(oe.jsx)(W.b,{path:"/notes",render:function(){return Object(oe.jsx)(Le,{children:Object(oe.jsx)(Me,{})})}}),Object(oe.jsx)(W.b,{path:"/incompleted",render:function(){return Object(oe.jsx)(Le,{children:Object(oe.jsx)(Me,{})})}}),Object(oe.jsx)(W.b,{path:"/completed",render:function(){return Object(oe.jsx)(Le,{children:Object(oe.jsx)(Me,{})})}}),Object(oe.jsx)(W.b,{path:"/settings",render:function(){return Object(oe.jsx)(Le,{children:Object(oe.jsx)(qe,{})})}}),Object(oe.jsx)(W.b,{path:"*",render:function(){return Object(oe.jsx)(rt,{})}})]})})},ut=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,255)).then((function(t){var n=t.getCLS,s=t.getFID,o=t.getFCP,i=t.getLCP,c=t.getTTFB;n(e),s(e),o(e),i(e),c(e)}))};c.a.render(Object(oe.jsx)(r.a,{store:V,children:Object(oe.jsx)(a.a,{children:Object(oe.jsx)(lt,{})})}),document.getElementById("root")),ut()},29:function(e,t,n){e.exports={main:"menu_main__rcsvA",title:"menu_title__ICRa_",line:"menu_line__2K920",link:"menu_link__esKEd",settings_link:"menu_settings_link__3ezFL",logout:"menu_logout__2CIkd"}},61:function(e,t,n){e.exports={main:"errorBoundary_main__1qBL7",text:"errorBoundary_text__1GWNt",btn:"errorBoundary_btn__3mJyM"}},63:function(e,t,n){e.exports={main:"notFound_main__2mVRX",p404:"notFound_p404__3cnxK",link:"notFound_link__l56wZ"}},84:function(e,t,n){e.exports={main:"addNoteLogo_main__CdVCZ",logo:"addNoteLogo_logo__1Cnml"}},87:function(e,t,n){e.exports={main:"content_main__37CPU"}},88:function(e,t,n){e.exports={loading:"loading_loading__19cO9"}},89:function(e,t,n){e.exports={main:"notes_main__2zUlM",notes:"notes_notes__L-Ud8"}}},[[251,1,2]]]);
//# sourceMappingURL=main.b6595f59.chunk.js.map