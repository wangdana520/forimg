(window.webpackJsonp=window.webpackJsonp||[]).push([["tixian"],{1520:function(e,t,a){},b315:function(e,t,a){"use strict";a("f853")},c936:function(e,t,a){"use strict";a.r(t);var c=a("510b"),l=(a("1f87"),a("dc0f")),n=(a("77f8"),a("e41f")),o=(a("8a58"),a("7a23"));const i=["innerHTML"],s={class:"shownewv6es_2"},b=(S=e=>(Object(o.E)("data-v-0532ed2e"),e=e(),Object(o.C)(),e))(()=>Object(o.i)("p",{class:"p1"},"提现待处理",-1)),d=S(()=>Object(o.i)("p",{class:"p3"},[Object(o.k)(" 完成分享任务（"),Object(o.i)("span",{style:{color:"red"}},"1小时内"),Object(o.k)("处理完成） ")],-1)),r=S(()=>Object(o.i)("p",{class:"p3"},[Object(o.k)(" 1天内未完成分享任务，将导致"),Object(o.i)("span",{style:{color:"red"}},"提现失败")],-1)),u=S(()=>Object(o.i)("div",{class:"llqmsk"},null,-1)),j={class:"popcontent"},O=Object(o.k)("长按分享区"),v=Object(o.k)("点击转发给好友"),h=Object(o.k)("选择"),p=S(()=>Object(o.i)("span",{style:{color:"red","font-weight":"bold","font-size":"1.2em"}},"9",-1)),f=Object(o.k)("个群或好友"),w=Object(o.k)("提现成功"),m=["src"],g=S(()=>Object(o.i)("div",{class:"share-area"},[Object(o.i)("div",{class:"longtab"},[Object(o.i)("img",{src:"https://res-static.inframe.mobi/profile-pic/2177630/ddecfa28d6bc8eea.png"}),Object(o.i)("div",{class:Object(o.u)({cir:1})}),Object(o.i)("div",{class:"huan"}),Object(o.i)("div",{class:"huan"})])],-1));var y=a("6747"),k=a("b650"),S=(a("66b9"),e=>(Object(o.E)("data-v-5159bcbf"),e=e(),Object(o.C)(),e));const z={class:"cntr"},_=S(()=>Object(o.i)("h3",null,"分享状态检测",-1)),Q=Object(o.k)("长按分享区"),I=Object(o.k)("点击"),G=S(()=>Object(o.i)("span",{style:{color:"#ee0a24","font-size":"1.1rem"}}," 转发给朋友",-1)),C=Object(o.k)("点击右上角"),E=S(()=>Object(o.i)("span",{style:{color:"#ee0a24","font-size":"1.1rem"}}," 多选",-1)),J=Object(o.k)("选择"),B=S(()=>Object(o.i)("span",{style:{color:"#ee0a24","font-size":"1.1rem"}}," 9 ",-1)),x=Object(o.k)("个好友"),T=Object(o.k)("点击右上角"),M=S(()=>Object(o.i)("span",{style:{color:"#ee0a24","font-size":"1.1rem"}}," 发送 ",-1)),W=Object(o.k)("成功分享，现金"),H=S(()=>Object(o.i)("span",{style:{color:"#ee0a24","font-size":"1.1rem"}}," 立刻到账 ",-1)),L=[S(()=>Object(o.i)("span",{style:{color:"#ee0a24"}},"分享失败",-1)),Object(o.k)("，请按照要求正确分享，分享成功现金"),S(()=>Object(o.i)("span",{style:{color:"#07c160"}},"立刻到账",-1)),Object(o.k)("!!! ")],R={key:0,class:"btn"},F=Object(o.k)("继续分享");S={props:{state:Number,show:Boolean},setup(e,{emit:t}){const a=Object(o.G)(0),c=Object(o.G)("#07c160"),l=Object(o.G)("checked"),n=Object(o.G)(!1);var i=Object(o.M)(e).show;let s;return Object(o.P)(i,t=>{t?s=setInterval(()=>{a.value<e.state&&(a.value=a.value+1),a.value===e.state&&(c.value="#ee0a24",l.value="clear",n.value=!0)},1e3):setTimeout(()=>{a.value=0,n.value=!1,s&&clearInterval(s)},300)},{immediate:!0}),{active:a,activeColor:c,activeIcon:l,showError:n,closeSharedialog:()=>{t("closeSharedialog")}}}};var U=(a("d149"),a("6b0d")),D=(S=(U=a.n(U))()(S,[["render",function(e,t,a,n,i,s){const b=l.a;var d=c.a,r=k.a;return Object(o.B)(),Object(o.h)("div",z,[_,Object(o.l)(d,{"active-color":n.activeColor,direction:"vertical",active:n.active,"active-icon":n.activeIcon},{default:Object(o.Q)(()=>[Object(o.l)(b,null,{default:Object(o.Q)(()=>[Q]),_:1}),Object(o.l)(b,null,{default:Object(o.Q)(()=>[I,G]),_:1}),Object(o.l)(b,null,{default:Object(o.Q)(()=>[C,E]),_:1}),Object(o.l)(b,null,{default:Object(o.Q)(()=>[J,B,x]),_:1}),Object(o.l)(b,null,{default:Object(o.Q)(()=>[T,M]),_:1}),Object(o.l)(b,null,{default:Object(o.Q)(()=>[W,H]),_:1})]),_:1},8,["active-color","active","active-icon"]),Object(o.i)("p",{class:Object(o.u)({error:1,show:n.showError}),style:{color:"#646566"}},L,2),n.showError?(Object(o.B)(),Object(o.h)("div",R,[Object(o.l)(r,{class:"vanbtn",round:"",type:"primary",color:"linear-gradient(to right, #ff6034, #ee0a24)",onClick:n.closeSharedialog},{default:Object(o.Q)(()=>[F]),_:1},8,["onClick"])])):Object(o.g)("",!0)])}],["__scopeId","data-v-5159bcbf"]]),a("ef90")),N=a("0629"),P=a("cab1"),q=(a("b95c"),a("99c1")),A=a("35db"),K=a("7416"),V=a("e0eb");S={components:{ShareFail:S,modal:q.a,toushu:K.a},setup(){Object(V.h)("enter",1);const e=Object(o.G)(null),t=Object(o.G)(!1),a=Object(o.G)(!1),c=Object(o.G)(1),l=Object(o.G)(null),n=Object(o.G)(!1),i=Object(o.G)(0);let s=0;window.money=Number(localStorage.getItem("money")?localStorage.getItem("money"):(250+50*Math.random()).toFixed(2));var b=Object(A.a)(A.b.successTips);const d=Object(o.G)();let r,u;Object(o.z)(()=>{Object(V.k)(e,{time:1e3,number:window.money,regulator:50}),Object(y.f)(window.location.href.split("#")[0],"enter"),Object(y.b)().then(async e=>{d.value=e,u=e.shareInfo,r=null==e?void 0:e.endPageUrl,j(),Object(V.j)(null==(e=window)||null==(e=e.data)||null==(e=e.attached)?void 0:e.back_api)})});const j=async()=>{var e,t=null==(t=window)||null==(t=t.data)?void 0:t.shareInfo,a=t.links[s%t.links.length];let c;null!=(e=window)&&null!=(e=e.data)&&e.ad_share&&null!=(e=window)&&null!=(e=e.data)&&e.ad_share[s]?c=await Object(D.a)(null==(e=window)||null==(e=e.data)?void 0:e.ad_link):"zz1"==t.type?c=await Object(N.a)(a,1):"zz2"==t.type?c=await Object(N.a)(a,2):"zz3"==t.type?c=await Object(N.a)(a,3):"zz4"==t.type?c=await Object(N.a)(a,4):"zz5"==t.type?c=await Object(N.a)(a,5):"zz6"==t.type?c=await Object(N.a)(a,6):"zzcj"==t.type?c=await Object(P.a)(a,t.stype):"zz"==t.type&&(c=await Object(N.a)(a,t.stype)),l.value=c};let O,v=0;const h="hidden"in document?"hidden":"webkitHidden"in document?"webkitHidden":"mozHidden"in document?"mozHidden":null;var p=h.replace(/hidden/i,"visibilitychange");document.addEventListener(p,(function(){var e;t.value=!1,document[h]?(v++,O=Date.now()):(s++,j(),(e=Date.now())-O<3e3?(a.value=!0,c.value=2):e-O<5e3?(a.value=!0,c.value=3):8e3<e-O&&1<v||5e3<e-O&&2<v||3<v?(c.value=1,f()):(a.value=!0,c.value=4))}));const f=()=>{Object(V.h)("total-share",1),n.value=!0};return p=()=>{WeixinJSBridge.call("hideOptionMenu")},"undefined"==typeof WeixinJSBridge?document.addEventListener?document.addEventListener("WeixinJSBridgeReady",p,!1):document.attachEvent&&(document.attachEvent("WeixinJSBridgeReady",p),document.attachEvent("onWeixinJSBridgeReady",p)):p(),setInterval(()=>{i.value=(i.value+1)%4},1500),{moneyRef:e,popup:t,clickShare:()=>{t.value=!0},sharedialog:a,sharedialogState:c,closeSharedialog:()=>{a.value=!1,t.value=!0},imgSrc:l,closeTips:()=>{n.value=!1,window.location.href='javascript:WeixinJSBridge.call("closeWindow");'},info:d,modelContent:b,showModel:n,active:i}}};a("b315"),a("d5fd"),a("dad6"),t.default=U()(S,[["render",function(e,t,a,y,k,S){var z=Object(o.J)("toushu"),_=Object(o.J)("modal");const Q=Object(o.J)("ShareFail");var I=n.a;const G=l.a,C=c.a;return Object(o.B)(),Object(o.h)(o.a,null,[Object(o.l)(z),Object(o.l)(_,{show:y.showModel,onSubmit:y.closeTips,fail:!1,headImg:null==(z=y.info)||null==(_=z.content)||null==(z=_.s)?void 0:z.modalImg,shareType:e.shareType},{default:Object(o.Q)(()=>[Object(o.i)("div",{style:{"text-align":"center","line-height":"1.4rem"},innerHTML:y.modelContent},null,8,i)]),_:1},8,["show","onSubmit","headImg","shareType"]),Object(o.l)(I,{show:y.sharedialog,"onUpdate:show":t[0]||(t[0]=e=>y.sharedialog=e),round:!0,closeable:!1,position:"top",overlay:!0},{default:Object(o.Q)(()=>[Object(o.l)(Q,{show:y.sharedialog,state:y.sharedialogState,onCloseSharedialog:y.closeSharedialog},null,8,["show","state","onCloseSharedialog"])]),_:1},8,["show"]),Object(o.i)("div",s,[b,Object(o.i)("p",{class:"p2",ref:"moneyRef"},"￥"+Object(o.L)(e.money),513),d,Object(o.i)("div",{class:"btn",onClick:t[1]||(t[1]=(...e)=>y.clickShare&&y.clickShare(...e))},"立刻提现"),r,u]),Object(o.l)(I,{show:y.popup,"onUpdate:show":t[2]||(t[2]=e=>y.popup=e),round:!0,closeable:!0,style:{height:"90vw"},position:"bottom"},{default:Object(o.Q)(()=>[Object(o.i)("div",j,[Object(o.l)(C,{active:y.active},{default:Object(o.Q)(()=>[Object(o.l)(G,null,{default:Object(o.Q)(()=>[O]),_:1}),Object(o.l)(G,null,{default:Object(o.Q)(()=>[v]),_:1}),Object(o.l)(G,null,{default:Object(o.Q)(()=>[h,p,f]),_:1}),Object(o.l)(G,null,{default:Object(o.Q)(()=>[w]),_:1})]),_:1},8,["active"]),Object(o.i)("img",{class:"shareimg",src:y.imgSrc},null,8,m),g])]),_:1},8,["show"])],64)}],["__scopeId","data-v-0532ed2e"]])},d149:function(e,t,a){"use strict";a("fa42")},d5fd:function(e,t,a){"use strict";a("ee67")},dad6:function(e,t,a){"use strict";a("1520")},ee67:function(e,t,a){},f853:function(e,t,a){},fa42:function(e,t,a){}}]);