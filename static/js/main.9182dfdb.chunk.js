(this["webpackJsonpreact-chat"]=this["webpackJsonpreact-chat"]||[]).push([[0],{173:function(e,a,s){},174:function(e,a,s){},176:function(e,a,s){},177:function(e,a,s){},178:function(e,a,s){},279:function(e,a,s){},284:function(e,a,s){},285:function(e,a,s){},288:function(e,a,s){},308:function(e,a,s){"use strict";s.r(a);var t=s(0),c=s(39),i=s.n(c),n=s(51),r=s(37),l=s(75),d=s(143),o=s(31),j={items:[],currentDialog:[],isLoaded:!0},u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"DIALOGS:SET_ITEMS":return Object(o.a)(Object(o.a)({},e),{},{items:a.payload});case"DIALOGS:SET_CURRENT_DIALOG":return Object(o.a)(Object(o.a)({},e),{},{currentDialog:a.payload});case"DIALOGS:SET_LOADED":return Object(o.a)(Object(o.a)({},e),{},{isLoaded:a.payload});default:return e}},m={items:[],isLoaded:!0},b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"MESSAGE:SET_ITEMS":return Object(o.a)(Object(o.a)({},e),{},{items:a.payload});case"MESSAGE:SET_LOADED":return Object(o.a)(Object(o.a)({},e),{},{isLoaded:a.payload});default:return e}},O=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||l.c,h=[d.a],_=Object(l.b)({dialogs:u,message:b}),p=Object(l.d)(_,O(l.a.apply(void 0,h))),g=(s(173),s(162)),x=s(6),v=s.n(x),f=(s(174),s(1)),N=function(e){return Object(f.jsx)(g.a,Object(o.a)(Object(o.a)({},e),{},{className:v()("button",{"btn-large":"large"===e.size})}))},w=(s(176),function(e){var a=e.children,s=e.className;return Object(f.jsx)("div",{className:v()("block",s),children:a})}),S=s(47),y=s.p+"static/media/wave.3f5757ab.svg",E=s.p+"static/media/play.694745f9.svg",D=s.p+"static/media/pause.af841eb8.svg",T=s(314),L=s(311),M=s(97),I=(s(177),function(e){var a,s=e.avatar,c=e.audio,i=e.name,n=e.text,r=e.created_at,l=e.isMe,d=e.isReading,o=e.attachment,j=e.isTyping,u=e.user,m=Object(t.useState)(!1),b=Object(S.a)(m,2),O=b[0],h=b[1],_=Object(t.useState)(0),p=Object(S.a)(_,2),g=p[0],x=p[1],N=Object(t.useState)(0),w=Object(S.a)(N,2),I=w[0],P=w[1],C=Object(t.useRef)();return Object(f.jsxs)("div",{className:v()("message",{message__isMe:l,message__isTyping:j,message__image:o&&1===o.length,message__isAudio:c}),children:[Object(f.jsx)(A,{isMe:l,isReading:d}),Object(f.jsx)("div",{className:"message__avatar",children:function(e,a){return e?Object(f.jsx)("img",{src:e,alt:"avatar"}):Object(f.jsx)("div",{className:"message__item-anon",children:Object(f.jsx)("span",{children:a?a[0]:"AN"})})}(s,u.fullname)}),Object(f.jsxs)("div",{className:"message__block-text",children:[(n||j||c)&&Object(f.jsxs)("div",{className:"wrapper__bubble",children:[n&&Object(f.jsx)("div",{className:"message__bubble",children:Object(f.jsx)("p",{className:"message__text",children:n})}),j&&Object(f.jsxs)("div",{className:"typing-indicator",children:[Object(f.jsx)("span",{}),Object(f.jsx)("span",{}),Object(f.jsx)("span",{})]}),c&&Object(f.jsx)("div",{className:"message__bubble",children:Object(f.jsxs)("div",{className:"message__audio",children:[Object(f.jsx)("audio",{ref:C,src:c,preload:"auto",onPlaying:function(){h(!0)},onEnded:function(){h(!1),x(0),P(0)},onPause:function(){h(!1)},onTimeUpdate:function(){var e=C.current&&C.current.duration||0;P(C.current.currentTime),x(C.current.currentTime/e*100)}}),Object(f.jsx)("div",{className:"message__audio-progress",style:{width:g+"%"}}),Object(f.jsxs)("div",{className:"message__audio-info",children:[Object(f.jsx)("div",{className:"message__audio-btn",children:Object(f.jsx)("button",{onClick:function(){O?C.current.pause():C.current.play()},children:O?Object(f.jsx)("img",{src:D,alt:"play"}):Object(f.jsx)("img",{src:E,alt:"play"})})}),Object(f.jsx)("div",{className:"message__audio-wave",children:Object(f.jsx)("img",{src:y,alt:"wave"})}),Object(f.jsx)("div",{className:"message__audio-time",children:function(e){var a=Math.floor(e/60),s=(e%60).toFixed();return"".concat(a<10?"0":"").concat(a,":").concat(s<10?"0":"").concat(s)}(I)})]})]})})]}),Object(f.jsx)("div",{className:"message__attachment",children:o&&o.map((function(e,a){return Object(f.jsx)("div",{className:"message__attachment-img",children:Object(f.jsx)("img",{src:e.img,alt:i})},a)}))}),r&&Object(f.jsx)("div",{className:"message__date",children:(a=Object(L.a)(r,{additionalDigits:1}),Object(M.a)(a)?Object(T.a)(a,"HH:mm"):Object(T.a)(a,"dd.MM.yyyy"))})]})]})});I.defaultProps={name:{}};var P=I,C=(s(178),function(e){var a,s,t,c=e.user,i=e.message,n=e.isMe,r=e.onSelect,l=e.currentDialog;return Object(f.jsxs)("div",{className:v()("dialogs__item",{"dialogs__item-online":c.isOnline,"dialogs__item-select":l===i._id}),onClick:function(e){return r(i._id)},children:[Object(f.jsx)("div",{className:"dialogs__item-avatar",children:(s=c.avatar,t=c.fullname,s?Object(f.jsx)("img",{src:s,alt:"avatar"}):Object(f.jsx)("div",{className:"dialogs__item-anon",children:Object(f.jsx)("span",{children:t[0]})}))}),Object(f.jsxs)("div",{className:"dialogs__item-info",children:[Object(f.jsxs)("div",{className:"dialogs__item-info-top",children:[Object(f.jsx)("div",{className:"dialogs__item-info-name",children:c.fullname}),Object(f.jsx)("div",{className:"dialogs__item-info-data",children:(a=Object(L.a)(i.created_at,{additionalDigits:1}),Object(M.a)(a)?Object(T.a)(a,"HH:mm"):Object(T.a)(a,"dd.MM.yyyy"))})]}),Object(f.jsxs)("div",{className:"dialogs__item-info-bottom",children:[Object(f.jsx)("div",{className:"dialogs__item-info-text",children:i.text}),n?Object(f.jsx)(A,{isMe:n,isReading:i.isReaded,dialogs__icon:!0}):Object(f.jsx)("div",{className:v()({"dialogs__item-info-num":i.unReaded}),children:i.unReaded?Object(f.jsx)("span",{children:i.unReaded}):""})]})]})]})}),k=s(116),A=function(e){var a=e.isMe,s=e.isReading,t=e.dialogs__icon;return Object(f.jsx)(f.Fragment,{children:a&&(s?Object(f.jsx)(k.b,{className:v()("icon__read icon__read--check",{dialogs__icon:t})}):Object(f.jsx)(k.a,{className:v()("icon__read",{dialogs__icon:t})}))})},R=(s(161),s(145),s(146)),z=s.n(R),G=(s(279),s(315)),F=s(312),B=s(66),V=function(e){var a=e.items,s=e.userId,t=e.onSearch,c=e.inputValue,i=e.onSelectDialog,n=Object(r.c)((function(e){return e.dialogs.isLoaded})),l=Object(r.c)((function(e){return e.dialogs.currentDialog}));return Object(f.jsxs)("div",{className:"dialogs",children:[Object(f.jsx)("div",{className:"dialogs-search",children:Object(f.jsx)(G.a.Search,{placeholder:"\u041f\u043e\u0438\u0441\u043a \u0441\u0440\u0435\u0434\u0438 \u0434\u0438\u0430\u043b\u043e\u0433\u043e\u0432",onChange:function(e){return t(e.target.value)},value:c})}),n?Object(f.jsx)("div",{className:"chat__window-empty",children:Object(f.jsx)(F.a,{size:"large",tip:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u0434\u0438\u0430\u043b\u043e\u0433\u043e\u0432..."})}):a.length?z()(a,["created_at"],["desc"]).map((function(e,a){return Object(f.jsx)(C,{message:e,user:e.user,isMe:e.user._id===s,onSelect:i,currentDialog:l},e._id)})):Object(f.jsx)(B.a,{description:"\u041d\u0438\u043a\u043e\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e"})]})},U=(s(284),function(e){var a=e.online;return Object(f.jsx)("div",{className:v()("status",{"status--online":a}),children:a?"Online":"Offline"})}),H=s(149),J=(s(285),s(316)),Z=s(317),X=s(318),$=s(319),q=s(159),K=(s(287),function(){var e=Object(t.useState)(""),a=Object(S.a)(e,2),s=a[0],c=a[1],i=Object(t.useState)(!1),n=Object(S.a)(i,2),r=n[0],l=n[1],d=Object(t.useState)([]),o=Object(S.a)(d,2),j=o[0],u=o[1];return Object(t.useEffect)((function(){console.log(j)}),[j]),Object(f.jsxs)("div",{className:"chat__input",children:[Object(f.jsxs)("div",{className:"chat__input-smile",children:[Object(f.jsx)("div",{className:v()("chat__input-smilePicker",{active:r}),children:Object(f.jsx)(q.a,{set:"apple",className:"pickerSmile",onSelect:function(e){return function(e){var a=e.native;c((function(e){return e+a}))}(e)}})}),Object(f.jsx)(J.a,{onClick:function(){l(!r)}})]}),Object(f.jsx)(G.a,{onChange:function(e){return c(e.target.value)},placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435...",size:"large",className:"chat__input-input",value:s}),Object(f.jsxs)("div",{className:"chat__input-action",children:[Object(f.jsx)("label",{htmlFor:"file",children:Object(f.jsx)(Z.a,{})}),Object(f.jsx)("input",{type:"file",name:"file",id:"file",className:"chat__input-fileload",onChange:function(e){return function(e){var a,s=[],t=Object(H.a)(e.target.files);try{for(t.s();!(a=t.n()).done;){var c=a.value;s.push(c)}}catch(i){t.e(i)}finally{t.f()}u(s)}(e)},multiple:!0}),s?Object(f.jsx)(X.a,{className:"chat__input-icon--send"}):Object(f.jsx)($.a,{})]})]})});s(288);var Q=function(e){var a=e.items,s=e.blockRef,c=Object(r.c)((function(e){return e.message.isLoaded}));return Object(f.jsx)("div",{className:"chat__window",ref:s,children:c?Object(f.jsx)("div",{className:"chat__window-empty",children:Object(f.jsx)(F.a,{size:"large",tip:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0439..."})}):a.length?Object(f.jsx)("div",{className:"chat__message-wrapper",children:a.map((function(e,a){return Object(t.createElement)(P,Object(o.a)(Object(o.a)({},e),{},{key:a}))}))}):Object(f.jsx)("div",{className:"chat__window-empty",children:Object(f.jsx)("div",{children:Object(f.jsx)(B.a,{description:"\u0421\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0439 \u043d\u0435\u0442"})})})})},W=s(313);var Y=function(e){var a=e.values,s=e.touched,t=e.errors,c=e.handleChange,i=e.handleBlur,r=e.handleSubmit,l=e.dirty,d=e.isValid;return Object(f.jsxs)(w,{className:"block__wrapper",children:[Object(f.jsxs)("div",{className:"auth__top",children:[Object(f.jsx)("h1",{className:"auth__title",children:"\u0412\u043e\u0439\u0434\u0438\u0442\u0435 \u0432 \u0430\u043a\u043a\u0430\u0443\u043d\u0442"}),Object(f.jsx)("p",{className:"auth__subtitle",children:"\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430 \u0432\u043e\u0439\u0434\u0438\u0442\u0435 \u0432 \u0441\u0432\u043e\u0439 \u0430\u043a\u043a\u0430\u0443\u043d\u0442"})]}),Object(f.jsxs)(W.a,{name:"loginForm",initialValues:{remember:!0},onSubmit:r,children:[Object(f.jsxs)(W.a.Item,{className:"label__auth input__wrapper",validateStatus:s.login?t.login?"error":"success":"",children:[Object(f.jsx)(G.a,{size:"large",placeholder:"\u041b\u043e\u0433\u0438\u043d",id:"login",type:"text",onChange:c,onBlur:i,value:a.login,name:"login",className:t.login&&s.login?"text-input error":"text-input"}),t.login&&s.login&&Object(f.jsx)("div",{className:"input__suberrors",children:t.login})]}),Object(f.jsxs)(W.a.Item,{className:"label__auth input__wrapper",validateStatus:s.password?t.password?"errors":"success":"",children:[Object(f.jsx)(G.a.Password,{size:"large",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",id:"password",onChange:c,onBlur:i,value:a.password,name:"password",className:t.password&&s.password?"text-input error":"text-input"}),t.password&&s.password&&Object(f.jsx)("div",{className:"input__suberrors",children:t.password})]}),Object(f.jsx)("div",{className:"warning__message",children:l&&!d&&Object(f.jsx)("span",{children:"\u041e\u0448\u0438\u0431\u043a\u0430 \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u0444\u043e\u0440\u043c\u044b"})}),Object(f.jsx)(W.a.Item,{children:Object(f.jsx)(N,{type:"primary",htmlType:"submit",size:"large",onClick:r,children:Object(f.jsx)(n.b,{to:"/im",children:"\u0412\u043e\u0439\u0442\u0438 \u0432 \u0430\u043a\u043a\u0430\u0443\u043d\u0442"})})}),Object(f.jsx)(n.b,{to:"/register",className:"link__reg",children:"\u0417\u0430\u0440\u0435\u0433\u0435\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"})]})]})},ee=s(94),ae=Object(ee.a)({mapPropsToValues:function(){return{login:"",password:""}},validate:function(e){var a={};return e.login||(a.login="\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u043f\u043e\u043b\u0435"),e.password||(a.password="\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u043f\u043e\u043b\u0435"),a},handleSubmit:function(e,a){var s=a.setSubmitting;setTimeout((function(){alert(JSON.stringify(e,null,2)),s(!1)}),500)},displayName:"LofinForm"})(Y),se=(s(321),s(320));var te=function(e){var a=e.values,s=e.touched,t=e.errors,c=e.handleChange,i=e.handleBlur,r=e.handleSubmit,l=e.dirty,d=e.isValid;return Object(f.jsxs)(w,{className:"block__wrapper",children:[Object(f.jsxs)("div",{className:"auth__top",children:[Object(f.jsx)("h1",{className:"auth__title",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"}),Object(f.jsx)("p",{className:"auth__subtitle",children:"\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u0443\u0439\u0442\u0435\u0441\u044c"})]}),Object(f.jsxs)(W.a,{name:"nest-messages",className:"register-form",onSubmit:r,children:[Object(f.jsxs)(W.a.Item,{validateStatus:s.name?t.name?"errors":"success":"",className:"input__wrapper",children:[Object(f.jsx)(G.a,{id:"name",type:"text",placeholder:"\u0412\u0430\u0448\u0435 \u0418\u043c\u044f",size:"large",prefix:Object(f.jsx)(se.a,{}),onChange:c,onBlur:i,value:a.name,name:"name",className:t.name&&s.name?"text-input error":"text-input"}),t.name&&s.name&&Object(f.jsx)("div",{className:"input__suberrors",children:t.name})]}),Object(f.jsxs)(W.a.Item,{validateStatus:s.email?t.email?"errors":"success":"",hasFeedback:!0,className:"input__wrapper",children:[Object(f.jsx)(G.a,{id:"email",placeholder:"Email",size:"large",onChange:c,onBlur:i,value:a.email,name:"email",type:"email",className:t.email&&s.email?"text-input error":"text-input"}),t.email&&s.email&&Object(f.jsx)("div",{className:"input__suberrors",children:t.email})]}),Object(f.jsxs)(W.a.Item,{validateStatus:s.password?t.password?"errors":"success":"",hasFeedback:!0,className:"input__wrapper",children:[Object(f.jsx)(G.a.Password,{id:"password",size:"large",onChange:c,onBlur:i,value:a.password,name:"password",type:"password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",className:t.password&&s.password?"text-input error":"text-input"}),t.password&&s.password&&Object(f.jsx)("div",{className:"input__suberrors",children:t.password})]}),Object(f.jsxs)(W.a.Item,{validateStatus:s.returnPassword?t.returnPassword?"errors":"success":"",hasFeedback:!0,className:"input__wrapper",children:[Object(f.jsx)(G.a.Password,{placeholder:"\u041f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u0435 \u041f\u0430\u0440\u043e\u043b\u044c",size:"large",id:"returnPassword",onChange:c,onBlur:i,value:a.returnPassword,name:"returnPassword",type:"password",className:t.returnPassword&&s.returnPassword?"text-input error":"text-input"}),t.returnPassword&&s.returnPassword&&Object(f.jsx)("div",{className:"input__suberrors",children:t.returnPassword})]}),Object(f.jsx)("div",{className:"warning__message",children:l&&!d&&Object(f.jsx)("span",{children:"\u041e\u0448\u0438\u0431\u043a\u0430 \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u0444\u043e\u0440\u043c\u044b"})}),Object(f.jsx)(W.a.Item,{children:Object(f.jsx)(N,{onClick:r,type:"primary",htmlType:"submit",size:"large",children:"\u0417\u0430\u0440\u0435\u0433\u0435\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"})})]}),Object(f.jsx)(n.b,{to:"/login",className:"link__reg",children:"\u0423\u0436\u0435 \u0435\u0441\u0442\u044c \u0430\u043a\u043a\u0430\u0443\u043d\u0442"})]})},ce=Object(ee.a)({mapPropsToValues:function(){return{name:"",email:"",password:"",returnPassword:""}},validate:function(e){var a={};return e.name||(a.name="\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u043f\u043e\u043b\u0435"),e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.email)||(a.email="\u041d\u0435\u0432\u0435\u0440\u043d\u044b\u0439 \u0444\u043e\u0440\u043c\u0430\u0442"):a.email="\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u043f\u043e\u043b\u0435",e.password||(a.password="\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u043f\u043e\u043b\u0435"),e.returnPassword?e.password!==e.returnPassword&&(a.returnPassword="\u041f\u0430\u0440\u043e\u043b\u0438 \u043d\u0435 \u0441\u043e\u0432\u043f\u0430\u0434\u0430\u044e\u0442"):a.returnPassword="\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u043f\u043e\u043b\u0435",a},handleSubmit:function(e,a){var s=a.setSubmitting;setTimeout((function(){alert(JSON.stringify(e,null,2)),s(!1)}),1e3)},displayName:"RegisterForm"})(te),ie=s(20);var ne=function(){return Object(f.jsxs)("div",{className:"auth",children:[Object(f.jsx)(ie.a,{exact:!0,path:["/","/login"],component:ae}),Object(f.jsx)(ie.a,{exact:!0,path:"/register",component:ce})]})},re=s(115),le=s.n(re);le.a.defaults.baseURL="https://612299d2d4462800170548e6.mockapi.io/";var de=le.a,oe={getDialogs:function(){return de.get("/dialogs")}},je={getMessage:function(e){return de.get("/messages?dialog="+e)}},ue={getCurrentDialog:function(e){return{type:"DIALOGS:SET_CURRENT_DIALOG",payload:e}},setDialogs:function(e){return{type:"DIALOGS:SET_ITEMS",payload:e}},getLoaded:function(e){return{type:"DIALOGS:SET_LOADED",payload:e}},fetchDialogs:function(){return function(e){e(ue.getLoaded(!0)),oe.getDialogs().then((function(a){var s=a.data;e(ue.setDialogs(s)),e(ue.getLoaded(!1))}))}}},me=ue,be={setMessage:function(e){return{type:"MESSAGE:SET_ITEMS",payload:e}},getLoaded:function(e){return{type:"MESSAGE:SET_LOADED",payload:e}},fetchMessage:function(e){return function(a){a(be.getLoaded(!0)),je.getMessage(e).then((function(e){var s=e.data;a(be.setMessage(s)),a(be.getLoaded(!1))}))}}},Oe=be;var he=function(e){var a=e.items,s=e.userId,c=Object(t.useState)(""),i=Object(S.a)(c,2),n=i[0],l=i[1],d=Object(t.useState)(Array.from(a)),o=Object(S.a)(d,2),j=o[0],u=o[1],m=Object(r.b)(),b=Object(r.c)((function(e){return e.dialogs}));return Object(t.useEffect)((function(){b.items.length?u(b.items):m(me.fetchDialogs())}),[b.items,m]),Object(f.jsx)(V,{items:j,onSearch:function(e){u(b.items.filter((function(a){return a.user.fullname.toLowerCase().indexOf(e.toLowerCase())>=0}))),l(e)},inputValue:n,userId:s,onSelectDialog:function(e){m(me.getCurrentDialog(e))}})};var _e=function(e){e.items;var a=Object(t.useRef)(null),s=Object(r.b)(),c=Object(r.c)((function(e){return e.message})),i=Object(r.c)((function(e){return e.dialogs.currentDialog}));return Object(t.useEffect)((function(){s(Oe.fetchMessage(i))}),[i,s]),Object(t.useEffect)((function(){a.current.scrollTo(0,5555)}),[c.items]),Object(f.jsx)(f.Fragment,{children:Object(f.jsx)(Q,{items:c.items,blockRef:a})})},pe=s(322),ge=s(323),xe=s(324),ve=function(){return Object(f.jsx)("div",{className:"home",children:Object(f.jsxs)("div",{className:"wrapper__chat",children:[Object(f.jsxs)("div",{className:"chat__sidebar",children:[Object(f.jsxs)("div",{className:"chat__sidebar-header",children:[Object(f.jsxs)("div",{children:[Object(f.jsx)(pe.a,{className:"chat__sidebar-icon chat__sidebar-icon--users"}),Object(f.jsx)("span",{className:"chat__sidebar-text",children:"\u0421\u043f\u0438\u0441\u043e\u043a \u0434\u0438\u0430\u043b\u043e\u0433\u043e\u0432"})]}),Object(f.jsx)(ge.a,{className:"chat__sidebar-icon chat__sidebar-icon--edit"})]}),Object(f.jsx)(he,{items:[],userId:3})]}),Object(f.jsxs)("div",{className:"chat",children:[Object(f.jsxs)("div",{className:"chat__header",children:[Object(f.jsxs)("div",{className:"chat__header-title",children:[Object(f.jsx)("div",{className:"chat__header-name",children:"\u0424\u0435\u0434\u043e\u0440 \u0424\u0435\u0434\u043e\u0440\u043e\u0432\u0438\u0447"}),Object(f.jsx)("div",{className:"chat__header-status",children:Object(f.jsx)(U,{online:!0})})]}),Object(f.jsx)("div",{className:"chat__header-dots",children:Object(f.jsx)(xe.a,{className:"chat__header-dots--icon"})})]}),Object(f.jsx)(_e,{items:[]}),Object(f.jsx)("div",{className:"chat__window-input",children:Object(f.jsx)(K,{})})]})]})})};var fe=function(){return Object(f.jsxs)("div",{className:"wrapper",children:[Object(f.jsx)(ie.a,{exact:!0,path:["/","/login","/register"],component:ne}),Object(f.jsx)(ie.a,{exact:!0,path:"/im",component:ve})]})};i.a.render(Object(f.jsx)(r.a,{store:p,children:Object(f.jsx)(n.a,{basename:"/React-Chat",children:Object(f.jsx)(fe,{})})}),document.getElementById("root"))}},[[308,1,2]]]);
//# sourceMappingURL=main.9182dfdb.chunk.js.map