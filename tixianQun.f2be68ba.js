(window.webpackJsonp=window.webpackJsonp||[]).push([["tixianQun"],{"6bf3":function(t,n,e){"use strict";e.r(n);var a=e("7a23");const s={class:"chat-container",id:"app"},c={class:"layui-row chat-body",style:{top:"0px",bottom:"45px"}},l={class:"clearfloat"},i={key:0,class:"author-name"},o={class:"chat-date"},r={key:0,class:"chat-avatars"},p=["src"],b={class:"chat-message complete-read","data-msg-id":"0"},u=["innerHTML"],m={key:2,class:"chat-avatars"},d=[Object(a.i)("img",{src:"//1899.oss-cn-shenzhen.aliyuncs.com/static/css/express/customer.png"},null,-1)],h=Object(a.i)("div",{style:{clear:"both"}},null,-1),g={class:"chat-footer"},j={class:"send-bar"},O={class:"tool-box"},v={class:"send-btn-div"};var y=e("6747"),f=e("7d4a");const w=(C=t=>(Object(a.E)("data-v-1df72f37"),t=t(),Object(a.C)(),t))(()=>Object(a.i)("div",{class:"bk"},null,-1)),x=C(()=>Object(a.i)("div",{class:"tip"},"长按图片即可保存图片哦",-1)),k={class:"img_contair"},B=["src"];var C={props:{src:String,show:Boolean},setup:(t,{emit:n})=>({close:()=>{n("close")}})},T=(e("b7be"),e("6b0d")),I=(C=(T=e.n(T))()(C,[["render",function(t,n,e,s,c,l){return e.show?(Object(a.B)(),Object(a.h)("div",{key:0,class:"cnrt",onClick:n[0]||(n[0]=(...t)=>s.close&&s.close(...t))},[w,x,Object(a.i)("div",k,[Object(a.i)("img",{class:"img",src:e.src},null,8,B)])])):Object(a.g)("",!0)}],["__scopeId","data-v-1df72f37"]]),e("e0eb"));C={components:{showImg:C},setup(){Object(I.h)("enter_pyq",1);const t=Object(a.G)(!1),n=Object(a.G)(""),e=()=>{var t=t=>9<t?t:"0"+t;const n=new Date;return`${n.getFullYear()}-${t(n.getMonth()+1)}-${t(n.getDate())} ${t(n.getHours())}:${t(n.getMinutes())}:`+t(n.getSeconds())},s=Object(a.G)("");let c;const l={time:e(),type:"left",html:`<p>您好，我是客服苗苗，很高兴为您服务！</p>\n                <p><br /></p>\n                <p>\n                  您有一笔活动金正在提现中，由于活动过于火爆，前面有${parseInt(5e3+2e3*Math.random())}名用户正在排队中，您是否需要快速提现？\n                </p>\n                <p><br /></p>\n                <p>\n                  <button\n                    class="action-btn"\n                    style="background-color: #07c160"\n                    data-type="quick"\n                  >\n                    我要快速提现\n                  </button>\n                </p>\n                <p>\n                  <button\n                    class="action-btn"\n                    style="background-color: #9e9e9e"\n                    data-type="padding"\n                  >\n                    继续排队提现\n                  </button>\n                </p>`},i={time:e(),type:"right",html:"我要快速提现",isread:!1},o={time:e(),type:"left",html:'<p>\n                <img\n                  class="layui-xiaotian-photos"\n                  src="__src"\n                  style="max-width: 100%; width: 50vw; "\n                />\n              </p>'},r={time:e(),type:"left",html:'<p>\n                <span style="color: rgb(255, 0, 0)"></span>长按保存上方<span\n                  style="color: rgb(255, 0, 0)"\n                  >图片</span>发送至<span\n                  style="color: rgb(255, 0, 0)"\n                  >朋友圈</span\n                >，即可加速提现！（当天到账）\n              </p>\n              <p><br /></p>\n              <p><span style="color: #ff0000">请注意⚠️</span>:&nbsp;</p>\n              <p\n                class="p1"\n                style="\n                  margin-top: 0px;\n                  margin-bottom: 0px;\n                  font-variant-numeric: normal;\n                  font-variant-east-asian: normal;\n                  font-stretch: normal;\n                  font-size: 13px;\n                  line-height: normal;\n                  font-family: \'PingFang SC\';\n                  white-space: normal;\n                "\n              >\n                <span style="font-size: 16px"\n                  >务必公开朋友圈且保留至少<span\n                    class="s1"\n                    style="\n                      font-variant-numeric: normal;\n                      font-variant-east-asian: normal;\n                      font-stretch: normal;\n                      line-height: normal;\n                      font-family: \'Helvetica Neue\';\n                    "\n                    >12</span\n                  >小时，否则将会取消领取资格！</span\n                >\n              </p>\n              <p\n                class="p1"\n                style="\n                  margin-top: 0px;\n                  margin-bottom: 0px;\n                  font-variant-numeric: normal;\n                  font-variant-east-asian: normal;\n                  font-stretch: normal;\n                  font-size: 13px;\n                  line-height: normal;\n                  font-family: \'PingFang SC\';\n                  white-space: normal;\n                "\n              >\n                <br />\n              </p>\n              <p>\n                <span style="color: rgb(255, 0, 0)">温馨提示</span\n                >:长按图片即可保存图片哦！\n              </p>\n              <p><br /></p>'},p={time:e(),type:"right",html:"我要排队提现",isread:!1},b={time:e(),type:"left",html:'<p>\n                <span style="color: rgb(255, 0, 0)"></span>谢谢您的耐心等待，由于活动火爆，我们将在48小时内完成打款!<span\n                  style="color: rgb(255, 0, 0)"\n                  >\n              </p>\n              <p><br /></p>\n\n              <p>\n                <span style="color: rgb(255, 0, 0)">温馨提示</span\n                >:长按保存上方<span\n                  style="color: rgb(255, 0, 0)"\n                  >图片</span>发送至<span\n                  style="color: rgb(255, 0, 0)"\n                  >朋友圈</span\n                >，即可加速提现！（当天到账）\n              </p>\n              <p><br /></p>'},u=Object(a.G)([]),m=()=>{const t=document.getElementById("chat-box");t.scrollTop=t.scrollHeight};return Object(a.z)(()=>{document.title="请稍后...",Object(y.f)(window.location.href.split("#")[0],"enter"),Object(y.b)().then(async t=>{var n;c=await Object(f.b)(),o.html=o.html.replace("__src",c),Object(I.j)(null==(n=window)||null==(n=n.data)||null==(n=n.attached)?void 0:n.back_api)}),setTimeout(()=>{u.value.push(l)},500)}),{input:s,submit:()=>{var t={time:e(),type:"right",html:s.value,isread:!1};u.value.push(t),s.value=""},clickContent:e=>{var a;"quick"===(null==e||null==(a=e.target)||null==(a=a.dataset)?void 0:a.type)?(u.value.push(i),setTimeout(()=>{u.value=u.value.map(t=>(t.isread=!0,t)),setTimeout(()=>{u.value.push(o,r),setTimeout(()=>{m()},500)},1e3)},1e3)):"padding"===(null==e||null==(a=e.target)||null==(a=a.dataset)?void 0:a.type)&&(u.value.push(p),setTimeout(()=>{u.value=u.value.map(t=>(t.isread=!0,t)),setTimeout(()=>{u.value.push(o,b),setTimeout(()=>{m()},500)},1e3)},1e3)),"img"==e.target.localName&&(n.value=e.target.currentSrc,t.value=!0)},msgs:u,showImg:t,showImgUrl:n,close:()=>{t.value=!1}}}};e("cb07"),n.default=T()(C,[["render",function(t,n,e,y,f,w){var x=Object(a.J)("showImg");return Object(a.B)(),Object(a.h)(a.a,null,[Object(a.l)(x,{show:y.showImg,src:y.showImgUrl,onClose:y.close},null,8,["show","src","onClose"]),Object(a.i)("div",s,[Object(a.i)("div",c,[Object(a.i)("div",{class:"chat-box",id:"chat-box",onClick:n[0]||(n[0]=(...t)=>y.clickContent&&y.clickContent(...t))},[(Object(a.B)(!0),Object(a.h)(a.a,null,Object(a.H)(y.msgs,t=>(Object(a.B)(),Object(a.h)(a.a,null,[Object(a.i)("div",l,["left"==t.type?(Object(a.B)(),Object(a.h)("div",i,[Object(a.i)("small",o,Object(a.L)(t.time),1)])):Object(a.g)("",!0),Object(a.i)("div",{class:Object(a.u)(t.type)},["left"==t.type?(Object(a.B)(),Object(a.h)("div",r,[Object(a.i)("img",{src:"//1899.oss-cn-shenzhen.aliyuncs.com/static/css/express/robot.jpg"},null,8,p)])):Object(a.g)("",!0),"right"==t.type?(Object(a.B)(),Object(a.h)("i",{key:1,class:Object(a.u)({"layui-icon":1,"read-flag":1,"no-read":!t.isread,"already-read":t.isread})},Object(a.L)(t.isread?"已读":"未读"),3)):Object(a.g)("",!0),Object(a.i)("div",b,[Object(a.i)("div",{innerHTML:t.html},null,8,u)]),"right"==t.type?(Object(a.B)(),Object(a.h)("div",m,d)):Object(a.g)("",!0)],2)]),h],64))),256))])]),Object(a.i)("div",g,[Object(a.i)("div",j,[Object(a.i)("div",O,[Object(a.S)(Object(a.i)("textarea",{id:"textarea",placeholder:"请输入内容","onUpdate:modelValue":n[1]||(n[1]=t=>y.input=t)},null,512),[[a.O,y.input]])]),Object(a.i)("div",v,[Object(a.i)("input",{type:"button",value:"发送",class:Object(a.u)({"send-input":1,active:y.input}),id:"sendBtn",onClick:n[2]||(n[2]=(...t)=>y.submit&&y.submit(...t))},null,2)])])])])],64)}]])},"9f90":function(t,n,e){},b7be:function(t,n,e){"use strict";e("dad3")},cb07:function(t,n,e){"use strict";e("9f90")},dad3:function(t,n,e){}}]);