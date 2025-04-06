import{r as h,c as T}from"./react-CrDQUdnJ.js";import{c as R}from"./clsx-B-dksMZM.js";function rt(t){if(typeof document>"u")return;let e=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");a.type="text/css",e.firstChild?e.insertBefore(a,e.firstChild):e.appendChild(a),a.styleSheet?a.styleSheet.cssText=t:a.appendChild(document.createTextNode(t))}rt(`:root{--toastify-color-light: #fff;--toastify-color-dark: #121212;--toastify-color-info: #3498db;--toastify-color-success: #07bc0c;--toastify-color-warning: #f1c40f;--toastify-color-error: hsl(6, 78%, 57%);--toastify-color-transparent: rgba(255, 255, 255, .7);--toastify-icon-color-info: var(--toastify-color-info);--toastify-icon-color-success: var(--toastify-color-success);--toastify-icon-color-warning: var(--toastify-color-warning);--toastify-icon-color-error: var(--toastify-color-error);--toastify-container-width: fit-content;--toastify-toast-width: 320px;--toastify-toast-offset: 16px;--toastify-toast-top: max(var(--toastify-toast-offset), env(safe-area-inset-top));--toastify-toast-right: max(var(--toastify-toast-offset), env(safe-area-inset-right));--toastify-toast-left: max(var(--toastify-toast-offset), env(safe-area-inset-left));--toastify-toast-bottom: max(var(--toastify-toast-offset), env(safe-area-inset-bottom));--toastify-toast-background: #fff;--toastify-toast-padding: 14px;--toastify-toast-min-height: 64px;--toastify-toast-max-height: 800px;--toastify-toast-bd-radius: 6px;--toastify-toast-shadow: 0px 4px 12px rgba(0, 0, 0, .1);--toastify-font-family: sans-serif;--toastify-z-index: 9999;--toastify-text-color-light: #757575;--toastify-text-color-dark: #fff;--toastify-text-color-info: #fff;--toastify-text-color-success: #fff;--toastify-text-color-warning: #fff;--toastify-text-color-error: #fff;--toastify-spinner-color: #616161;--toastify-spinner-color-empty-area: #e0e0e0;--toastify-color-progress-light: linear-gradient(to right, #4cd964, #5ac8fa, #007aff, #34aadc, #5856d6, #ff2d55);--toastify-color-progress-dark: #bb86fc;--toastify-color-progress-info: var(--toastify-color-info);--toastify-color-progress-success: var(--toastify-color-success);--toastify-color-progress-warning: var(--toastify-color-warning);--toastify-color-progress-error: var(--toastify-color-error);--toastify-color-progress-bgo: .2}.Toastify__toast-container{z-index:var(--toastify-z-index);-webkit-transform:translate3d(0,0,var(--toastify-z-index));position:fixed;width:var(--toastify-container-width);box-sizing:border-box;color:#fff;display:flex;flex-direction:column}.Toastify__toast-container--top-left{top:var(--toastify-toast-top);left:var(--toastify-toast-left)}.Toastify__toast-container--top-center{top:var(--toastify-toast-top);left:50%;transform:translate(-50%);align-items:center}.Toastify__toast-container--top-right{top:var(--toastify-toast-top);right:var(--toastify-toast-right);align-items:end}.Toastify__toast-container--bottom-left{bottom:var(--toastify-toast-bottom);left:var(--toastify-toast-left)}.Toastify__toast-container--bottom-center{bottom:var(--toastify-toast-bottom);left:50%;transform:translate(-50%);align-items:center}.Toastify__toast-container--bottom-right{bottom:var(--toastify-toast-bottom);right:var(--toastify-toast-right);align-items:end}.Toastify__toast{--y: 0;position:relative;touch-action:none;width:var(--toastify-toast-width);min-height:var(--toastify-toast-min-height);box-sizing:border-box;margin-bottom:1rem;padding:var(--toastify-toast-padding);border-radius:var(--toastify-toast-bd-radius);box-shadow:var(--toastify-toast-shadow);max-height:var(--toastify-toast-max-height);font-family:var(--toastify-font-family);z-index:0;display:flex;flex:1 auto;align-items:center;word-break:break-word}@media only screen and (max-width: 480px){.Toastify__toast-container{width:100vw;left:env(safe-area-inset-left);margin:0}.Toastify__toast-container--top-left,.Toastify__toast-container--top-center,.Toastify__toast-container--top-right{top:env(safe-area-inset-top);transform:translate(0)}.Toastify__toast-container--bottom-left,.Toastify__toast-container--bottom-center,.Toastify__toast-container--bottom-right{bottom:env(safe-area-inset-bottom);transform:translate(0)}.Toastify__toast-container--rtl{right:env(safe-area-inset-right);left:initial}.Toastify__toast{--toastify-toast-width: 100%;margin-bottom:0;border-radius:0}}.Toastify__toast-container[data-stacked=true]{width:var(--toastify-toast-width)}.Toastify__toast--stacked{position:absolute;width:100%;transform:translate3d(0,var(--y),0) scale(var(--s));transition:transform .3s}.Toastify__toast--stacked[data-collapsed] .Toastify__toast-body,.Toastify__toast--stacked[data-collapsed] .Toastify__close-button{transition:opacity .1s}.Toastify__toast--stacked[data-collapsed=false]{overflow:visible}.Toastify__toast--stacked[data-collapsed=true]:not(:last-child)>*{opacity:0}.Toastify__toast--stacked:after{content:"";position:absolute;left:0;right:0;height:calc(var(--g) * 1px);bottom:100%}.Toastify__toast--stacked[data-pos=top]{top:0}.Toastify__toast--stacked[data-pos=bot]{bottom:0}.Toastify__toast--stacked[data-pos=bot].Toastify__toast--stacked:before{transform-origin:top}.Toastify__toast--stacked[data-pos=top].Toastify__toast--stacked:before{transform-origin:bottom}.Toastify__toast--stacked:before{content:"";position:absolute;left:0;right:0;bottom:0;height:100%;transform:scaleY(3);z-index:-1}.Toastify__toast--rtl{direction:rtl}.Toastify__toast--close-on-click{cursor:pointer}.Toastify__toast-icon{margin-inline-end:10px;width:22px;flex-shrink:0;display:flex}.Toastify--animate{animation-fill-mode:both;animation-duration:.5s}.Toastify--animate-icon{animation-fill-mode:both;animation-duration:.3s}.Toastify__toast-theme--dark{background:var(--toastify-color-dark);color:var(--toastify-text-color-dark)}.Toastify__toast-theme--light,.Toastify__toast-theme--colored.Toastify__toast--default{background:var(--toastify-color-light);color:var(--toastify-text-color-light)}.Toastify__toast-theme--colored.Toastify__toast--info{color:var(--toastify-text-color-info);background:var(--toastify-color-info)}.Toastify__toast-theme--colored.Toastify__toast--success{color:var(--toastify-text-color-success);background:var(--toastify-color-success)}.Toastify__toast-theme--colored.Toastify__toast--warning{color:var(--toastify-text-color-warning);background:var(--toastify-color-warning)}.Toastify__toast-theme--colored.Toastify__toast--error{color:var(--toastify-text-color-error);background:var(--toastify-color-error)}.Toastify__progress-bar-theme--light{background:var(--toastify-color-progress-light)}.Toastify__progress-bar-theme--dark{background:var(--toastify-color-progress-dark)}.Toastify__progress-bar--info{background:var(--toastify-color-progress-info)}.Toastify__progress-bar--success{background:var(--toastify-color-progress-success)}.Toastify__progress-bar--warning{background:var(--toastify-color-progress-warning)}.Toastify__progress-bar--error{background:var(--toastify-color-progress-error)}.Toastify__progress-bar-theme--colored.Toastify__progress-bar--info,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--success,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--warning,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--error{background:var(--toastify-color-transparent)}.Toastify__close-button{color:#fff;position:absolute;top:6px;right:6px;background:transparent;outline:none;border:none;padding:0;cursor:pointer;opacity:.7;transition:.3s ease;z-index:1}.Toastify__toast--rtl .Toastify__close-button{left:6px;right:unset}.Toastify__close-button--light{color:#000;opacity:.3}.Toastify__close-button>svg{fill:currentColor;height:16px;width:14px}.Toastify__close-button:hover,.Toastify__close-button:focus{opacity:1}@keyframes Toastify__trackProgress{0%{transform:scaleX(1)}to{transform:scaleX(0)}}.Toastify__progress-bar{position:absolute;bottom:0;left:0;width:100%;height:100%;z-index:1;opacity:.7;transform-origin:left}.Toastify__progress-bar--animated{animation:Toastify__trackProgress linear 1 forwards}.Toastify__progress-bar--controlled{transition:transform .2s}.Toastify__progress-bar--rtl{right:0;left:initial;transform-origin:right;border-bottom-left-radius:initial}.Toastify__progress-bar--wrp{position:absolute;overflow:hidden;bottom:0;left:0;width:100%;height:5px;border-bottom-left-radius:var(--toastify-toast-bd-radius);border-bottom-right-radius:var(--toastify-toast-bd-radius)}.Toastify__progress-bar--wrp[data-hidden=true]{opacity:0}.Toastify__progress-bar--bg{opacity:var(--toastify-color-progress-bgo);width:100%;height:100%}.Toastify__spinner{width:20px;height:20px;box-sizing:border-box;border:2px solid;border-radius:100%;border-color:var(--toastify-spinner-color-empty-area);border-right-color:var(--toastify-spinner-color);animation:Toastify__spin .65s linear infinite}@keyframes Toastify__bounceInRight{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(3000px,0,0)}60%{opacity:1;transform:translate3d(-25px,0,0)}75%{transform:translate3d(10px,0,0)}90%{transform:translate3d(-5px,0,0)}to{transform:none}}@keyframes Toastify__bounceOutRight{20%{opacity:1;transform:translate3d(-20px,var(--y),0)}to{opacity:0;transform:translate3d(2000px,var(--y),0)}}@keyframes Toastify__bounceInLeft{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(-3000px,0,0)}60%{opacity:1;transform:translate3d(25px,0,0)}75%{transform:translate3d(-10px,0,0)}90%{transform:translate3d(5px,0,0)}to{transform:none}}@keyframes Toastify__bounceOutLeft{20%{opacity:1;transform:translate3d(20px,var(--y),0)}to{opacity:0;transform:translate3d(-2000px,var(--y),0)}}@keyframes Toastify__bounceInUp{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,3000px,0)}60%{opacity:1;transform:translate3d(0,-20px,0)}75%{transform:translate3d(0,10px,0)}90%{transform:translate3d(0,-5px,0)}to{transform:translateZ(0)}}@keyframes Toastify__bounceOutUp{20%{transform:translate3d(0,calc(var(--y) - 10px),0)}40%,45%{opacity:1;transform:translate3d(0,calc(var(--y) + 20px),0)}to{opacity:0;transform:translate3d(0,-2000px,0)}}@keyframes Toastify__bounceInDown{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,-3000px,0)}60%{opacity:1;transform:translate3d(0,25px,0)}75%{transform:translate3d(0,-10px,0)}90%{transform:translate3d(0,5px,0)}to{transform:none}}@keyframes Toastify__bounceOutDown{20%{transform:translate3d(0,calc(var(--y) - 10px),0)}40%,45%{opacity:1;transform:translate3d(0,calc(var(--y) + 20px),0)}to{opacity:0;transform:translate3d(0,2000px,0)}}.Toastify__bounce-enter--top-left,.Toastify__bounce-enter--bottom-left{animation-name:Toastify__bounceInLeft}.Toastify__bounce-enter--top-right,.Toastify__bounce-enter--bottom-right{animation-name:Toastify__bounceInRight}.Toastify__bounce-enter--top-center{animation-name:Toastify__bounceInDown}.Toastify__bounce-enter--bottom-center{animation-name:Toastify__bounceInUp}.Toastify__bounce-exit--top-left,.Toastify__bounce-exit--bottom-left{animation-name:Toastify__bounceOutLeft}.Toastify__bounce-exit--top-right,.Toastify__bounce-exit--bottom-right{animation-name:Toastify__bounceOutRight}.Toastify__bounce-exit--top-center{animation-name:Toastify__bounceOutUp}.Toastify__bounce-exit--bottom-center{animation-name:Toastify__bounceOutDown}@keyframes Toastify__zoomIn{0%{opacity:0;transform:scale3d(.3,.3,.3)}50%{opacity:1}}@keyframes Toastify__zoomOut{0%{opacity:1}50%{opacity:0;transform:translate3d(0,var(--y),0) scale3d(.3,.3,.3)}to{opacity:0}}.Toastify__zoom-enter{animation-name:Toastify__zoomIn}.Toastify__zoom-exit{animation-name:Toastify__zoomOut}@keyframes Toastify__flipIn{0%{transform:perspective(400px) rotateX(90deg);animation-timing-function:ease-in;opacity:0}40%{transform:perspective(400px) rotateX(-20deg);animation-timing-function:ease-in}60%{transform:perspective(400px) rotateX(10deg);opacity:1}80%{transform:perspective(400px) rotateX(-5deg)}to{transform:perspective(400px)}}@keyframes Toastify__flipOut{0%{transform:translate3d(0,var(--y),0) perspective(400px)}30%{transform:translate3d(0,var(--y),0) perspective(400px) rotateX(-20deg);opacity:1}to{transform:translate3d(0,var(--y),0) perspective(400px) rotateX(90deg);opacity:0}}.Toastify__flip-enter{animation-name:Toastify__flipIn}.Toastify__flip-exit{animation-name:Toastify__flipOut}@keyframes Toastify__slideInRight{0%{transform:translate3d(110%,0,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInLeft{0%{transform:translate3d(-110%,0,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInUp{0%{transform:translate3d(0,110%,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInDown{0%{transform:translate3d(0,-110%,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideOutRight{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(110%,var(--y),0)}}@keyframes Toastify__slideOutLeft{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(-110%,var(--y),0)}}@keyframes Toastify__slideOutDown{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(0,500px,0)}}@keyframes Toastify__slideOutUp{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(0,-500px,0)}}.Toastify__slide-enter--top-left,.Toastify__slide-enter--bottom-left{animation-name:Toastify__slideInLeft}.Toastify__slide-enter--top-right,.Toastify__slide-enter--bottom-right{animation-name:Toastify__slideInRight}.Toastify__slide-enter--top-center{animation-name:Toastify__slideInDown}.Toastify__slide-enter--bottom-center{animation-name:Toastify__slideInUp}.Toastify__slide-exit--top-left,.Toastify__slide-exit--bottom-left{animation-name:Toastify__slideOutLeft;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--top-right,.Toastify__slide-exit--bottom-right{animation-name:Toastify__slideOutRight;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--top-center{animation-name:Toastify__slideOutUp;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--bottom-center{animation-name:Toastify__slideOutDown;animation-timing-function:ease-in;animation-duration:.3s}@keyframes Toastify__spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}
`);var M=t=>typeof t=="number"&&!isNaN(t),D=t=>typeof t=="string",P=t=>typeof t=="function",it=t=>D(t)||M(t),Y=t=>D(t)||P(t)?t:null,nt=(t,e)=>t===!1||M(t)&&t>0?t:e,q=t=>h.isValidElement(t)||D(t)||P(t)||M(t);function lt(t,e,a=300){let{scrollHeight:r,style:n}=t;requestAnimationFrame(()=>{n.minHeight="initial",n.height=r+"px",n.transition=`all ${a}ms`,requestAnimationFrame(()=>{n.height="0",n.padding="0",n.margin="0",setTimeout(e,a)})})}function ft({enter:t,exit:e,appendPosition:a=!1,collapse:r=!0,collapseDuration:n=300}){return function({children:l,position:o,preventExitTransition:d,done:f,nodeRef:u,isIn:_,playToast:k}){let w=a?`${t}--${o}`:t,E=a?`${e}--${o}`:e,C=h.useRef(0);return h.useLayoutEffect(()=>{let b=u.current,m=w.split(" "),p=s=>{s.target===u.current&&(k(),b.removeEventListener("animationend",p),b.removeEventListener("animationcancel",p),C.current===0&&s.type!=="animationcancel"&&b.classList.remove(...m))};b.classList.add(...m),b.addEventListener("animationend",p),b.addEventListener("animationcancel",p)},[]),h.useEffect(()=>{let b=u.current,m=()=>{b.removeEventListener("animationend",m),r?lt(b,f,n):f()};_||(d?m():(C.current=1,b.className+=` ${E}`,b.addEventListener("animationend",m)))},[_]),T.createElement(T.Fragment,null,l)}}function G(t,e){return{content:Z(t.content,t.props),containerId:t.props.containerId,id:t.props.toastId,theme:t.props.theme,type:t.props.type,data:t.props.data||{},isLoading:t.props.isLoading,icon:t.props.icon,reason:t.removalReason,status:e}}function Z(t,e,a=!1){return h.isValidElement(t)&&!D(t.type)?h.cloneElement(t,{closeToast:e.closeToast,toastProps:e,data:e.data,isPaused:a}):P(t)?t({closeToast:e.closeToast,toastProps:e,data:e.data,isPaused:a}):t}function ct({closeToast:t,theme:e,ariaLabel:a="close"}){return T.createElement("button",{className:`Toastify__close-button Toastify__close-button--${e}`,type:"button",onClick:r=>{r.stopPropagation(),t(!0)},"aria-label":a},T.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},T.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function dt({delay:t,isRunning:e,closeToast:a,type:r="default",hide:n,className:l,controlledProgress:o,progress:d,rtl:f,isIn:u,theme:_}){let k=n||o&&d===0,w={animationDuration:`${t}ms`,animationPlayState:e?"running":"paused"};o&&(w.transform=`scaleX(${d})`);let E=R("Toastify__progress-bar",o?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${_}`,`Toastify__progress-bar--${r}`,{"Toastify__progress-bar--rtl":f}),C=P(l)?l({rtl:f,type:r,defaultClassName:E}):R(E,l),b={[o&&d>=1?"onTransitionEnd":"onAnimationEnd"]:o&&d<1?null:()=>{u&&a()}};return T.createElement("div",{className:"Toastify__progress-bar--wrp","data-hidden":k},T.createElement("div",{className:`Toastify__progress-bar--bg Toastify__progress-bar-theme--${_} Toastify__progress-bar--${r}`}),T.createElement("div",{role:"progressbar","aria-hidden":k?"true":"false","aria-label":"notification timer",className:C,style:w,...b}))}var yt=1,J=()=>`${yt++}`;function ut(t,e,a){let r=1,n=0,l=[],o=[],d=e,f=new Map,u=new Set,_=s=>(u.add(s),()=>u.delete(s)),k=()=>{o=Array.from(f.values()),u.forEach(s=>s())},w=({containerId:s,toastId:i,updateId:c})=>{let x=s?s!==t:t!==1,L=f.has(i)&&c==null;return x||L},E=(s,i)=>{f.forEach(c=>{var x;(i==null||i===c.props.toastId)&&((x=c.toggle)==null||x.call(c,s))})},C=s=>{var i,c;(c=(i=s.props)==null?void 0:i.onClose)==null||c.call(i,s.removalReason),s.isActive=!1},b=s=>{if(s==null)f.forEach(C);else{let i=f.get(s);i&&C(i)}k()},m=()=>{n-=l.length,l=[]},p=s=>{var i,c;let{toastId:x,updateId:L}=s.props,y=L==null;s.staleId&&f.delete(s.staleId),s.isActive=!0,f.set(x,s),k(),a(G(s,y?"added":"updated")),y&&((c=(i=s.props).onOpen)==null||c.call(i))};return{id:t,props:d,observe:_,toggle:E,removeToast:b,toasts:f,clearQueue:m,buildToast:(s,i)=>{if(w(i))return;let{toastId:c,updateId:x,data:L,staleId:y,delay:v}=i,O=x==null;O&&n++;let $={...d,style:d.toastStyle,key:r++,...Object.fromEntries(Object.entries(i).filter(([N,B])=>B!=null)),toastId:c,updateId:x,data:L,isIn:!1,className:Y(i.className||d.toastClassName),progressClassName:Y(i.progressClassName||d.progressClassName),autoClose:i.isLoading?!1:nt(i.autoClose,d.autoClose),closeToast(N){f.get(c).removalReason=N,b(c)},deleteToast(){let N=f.get(c);if(N!=null){if(a(G(N,"removed")),f.delete(c),n--,n<0&&(n=0),l.length>0){p(l.shift());return}k()}}};$.closeButton=d.closeButton,i.closeButton===!1||q(i.closeButton)?$.closeButton=i.closeButton:i.closeButton===!0&&($.closeButton=q(d.closeButton)?d.closeButton:!0);let z={content:s,props:$,staleId:y};d.limit&&d.limit>0&&n>d.limit&&O?l.push(z):M(v)?setTimeout(()=>{p(z)},v):p(z)},setProps(s){d=s},setToggle:(s,i)=>{let c=f.get(s);c&&(c.toggle=i)},isToastActive:s=>{var i;return(i=f.get(s))==null?void 0:i.isActive},getSnapshot:()=>o}}var I=new Map,A=[],K=new Set,pt=t=>K.forEach(e=>e(t)),tt=()=>I.size>0;function mt(){A.forEach(t=>at(t.content,t.options)),A=[]}var _t=(t,{containerId:e})=>{var a;return(a=I.get(e||1))==null?void 0:a.toasts.get(t)};function et(t,e){var a;if(e)return!!((a=I.get(e))!=null&&a.isToastActive(t));let r=!1;return I.forEach(n=>{n.isToastActive(t)&&(r=!0)}),r}function gt(t){if(!tt()){A=A.filter(e=>t!=null&&e.options.toastId!==t);return}if(t==null||it(t))I.forEach(e=>{e.removeToast(t)});else if(t&&("containerId"in t||"id"in t)){let e=I.get(t.containerId);e?e.removeToast(t.id):I.forEach(a=>{a.removeToast(t.id)})}}var vt=(t={})=>{I.forEach(e=>{e.props.limit&&(!t.containerId||e.id===t.containerId)&&e.clearQueue()})};function at(t,e){q(t)&&(tt()||A.push({content:t,options:e}),I.forEach(a=>{a.buildToast(t,e)}))}function bt(t){var e;(e=I.get(t.containerId||1))==null||e.setToggle(t.id,t.fn)}function ot(t,e){I.forEach(a=>{(e==null||!(e!=null&&e.containerId)||(e==null?void 0:e.containerId)===a.id)&&a.toggle(t,e==null?void 0:e.id)})}function Tt(t){let e=t.containerId||1;return{subscribe(a){let r=ut(e,t,pt);I.set(e,r);let n=r.observe(a);return mt(),()=>{n(),I.delete(e)}},setProps(a){var r;(r=I.get(e))==null||r.setProps(a)},getSnapshot(){var a;return(a=I.get(e))==null?void 0:a.getSnapshot()}}}function ht(t){return K.add(t),()=>{K.delete(t)}}function xt(t){return t&&(D(t.toastId)||M(t.toastId))?t.toastId:J()}function S(t,e){return at(t,e),e.toastId}function H(t,e){return{...e,type:e&&e.type||t,toastId:xt(e)}}function U(t){return(e,a)=>S(e,H(t,a))}function g(t,e){return S(t,H("default",e))}g.loading=(t,e)=>S(t,H("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...e}));function kt(t,{pending:e,error:a,success:r},n){let l;e&&(l=D(e)?g.loading(e,n):g.loading(e.render,{...n,...e}));let o={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},d=(u,_,k)=>{if(_==null){g.dismiss(l);return}let w={type:u,...o,...n,data:k},E=D(_)?{render:_}:_;return l?g.update(l,{...w,...E}):g(E.render,{...w,...E}),k},f=P(t)?t():t;return f.then(u=>d("success",r,u)).catch(u=>d("error",a,u)),f}g.promise=kt;g.success=U("success");g.info=U("info");g.error=U("error");g.warning=U("warning");g.warn=g.warning;g.dark=(t,e)=>S(t,H("default",{theme:"dark",...e}));function Et(t){gt(t)}g.dismiss=Et;g.clearWaitingQueue=vt;g.isActive=et;g.update=(t,e={})=>{let a=_t(t,e);if(a){let{props:r,content:n}=a,l={delay:100,...r,...e,toastId:e.toastId||t,updateId:J()};l.toastId!==t&&(l.staleId=t);let o=l.render||n;delete l.render,S(o,l)}};g.done=t=>{g.update(t,{progress:1})};g.onChange=ht;g.play=t=>ot(!0,t);g.pause=t=>ot(!1,t);function wt(t){var e;let{subscribe:a,getSnapshot:r,setProps:n}=h.useRef(Tt(t)).current;n(t);let l=(e=h.useSyncExternalStore(a,r,r))==null?void 0:e.slice();function o(d){if(!l)return[];let f=new Map;return t.newestOnTop&&l.reverse(),l.forEach(u=>{let{position:_}=u.props;f.has(_)||f.set(_,[]),f.get(_).push(u)}),Array.from(f,u=>d(u[0],u[1]))}return{getToastToRender:o,isToastActive:et,count:l==null?void 0:l.length}}function It(t){let[e,a]=h.useState(!1),[r,n]=h.useState(!1),l=h.useRef(null),o=h.useRef({start:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,didMove:!1}).current,{autoClose:d,pauseOnHover:f,closeToast:u,onClick:_,closeOnClick:k}=t;bt({id:t.toastId,containerId:t.containerId,fn:a}),h.useEffect(()=>{if(t.pauseOnFocusLoss)return w(),()=>{E()}},[t.pauseOnFocusLoss]);function w(){document.hasFocus()||p(),window.addEventListener("focus",m),window.addEventListener("blur",p)}function E(){window.removeEventListener("focus",m),window.removeEventListener("blur",p)}function C(y){if(t.draggable===!0||t.draggable===y.pointerType){s();let v=l.current;o.canCloseOnClick=!0,o.canDrag=!0,v.style.transition="none",t.draggableDirection==="x"?(o.start=y.clientX,o.removalDistance=v.offsetWidth*(t.draggablePercent/100)):(o.start=y.clientY,o.removalDistance=v.offsetHeight*(t.draggablePercent===80?t.draggablePercent*1.5:t.draggablePercent)/100)}}function b(y){let{top:v,bottom:O,left:$,right:z}=l.current.getBoundingClientRect();y.nativeEvent.type!=="touchend"&&t.pauseOnHover&&y.clientX>=$&&y.clientX<=z&&y.clientY>=v&&y.clientY<=O?p():m()}function m(){a(!0)}function p(){a(!1)}function s(){o.didMove=!1,document.addEventListener("pointermove",c),document.addEventListener("pointerup",x)}function i(){document.removeEventListener("pointermove",c),document.removeEventListener("pointerup",x)}function c(y){let v=l.current;if(o.canDrag&&v){o.didMove=!0,e&&p(),t.draggableDirection==="x"?o.delta=y.clientX-o.start:o.delta=y.clientY-o.start,o.start!==y.clientX&&(o.canCloseOnClick=!1);let O=t.draggableDirection==="x"?`${o.delta}px, var(--y)`:`0, calc(${o.delta}px + var(--y))`;v.style.transform=`translate3d(${O},0)`,v.style.opacity=`${1-Math.abs(o.delta/o.removalDistance)}`}}function x(){i();let y=l.current;if(o.canDrag&&o.didMove&&y){if(o.canDrag=!1,Math.abs(o.delta)>o.removalDistance){n(!0),t.closeToast(!0),t.collapseAll();return}y.style.transition="transform 0.2s, opacity 0.2s",y.style.removeProperty("transform"),y.style.removeProperty("opacity")}}let L={onPointerDown:C,onPointerUp:b};return d&&f&&(L.onMouseEnter=p,t.stacked||(L.onMouseLeave=m)),k&&(L.onClick=y=>{_&&_(y),o.canCloseOnClick&&u(!0)}),{playToast:m,pauseToast:p,isRunning:e,preventExitTransition:r,toastRef:l,eventHandlers:L}}var Ct=typeof window<"u"?h.useLayoutEffect:h.useEffect,F=({theme:t,type:e,isLoading:a,...r})=>T.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:t==="colored"?"currentColor":`var(--toastify-icon-color-${e})`,...r});function Lt(t){return T.createElement(F,{...t},T.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))}function Ot(t){return T.createElement(F,{...t},T.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))}function zt(t){return T.createElement(F,{...t},T.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))}function Pt(t){return T.createElement(F,{...t},T.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))}function $t(){return T.createElement("div",{className:"Toastify__spinner"})}var Q={info:Ot,warning:Lt,success:zt,error:Pt,spinner:$t},Nt=t=>t in Q;function Rt({theme:t,type:e,isLoading:a,icon:r}){let n=null,l={theme:t,type:e};return r===!1||(P(r)?n=r({...l,isLoading:a}):h.isValidElement(r)?n=h.cloneElement(r,l):a?n=Q.spinner():Nt(e)&&(n=Q[e](l))),n}var Dt=t=>{let{isRunning:e,preventExitTransition:a,toastRef:r,eventHandlers:n,playToast:l}=It(t),{closeButton:o,children:d,autoClose:f,onClick:u,type:_,hideProgressBar:k,closeToast:w,transition:E,position:C,className:b,style:m,progressClassName:p,updateId:s,role:i,progress:c,rtl:x,toastId:L,deleteToast:y,isIn:v,isLoading:O,closeOnClick:$,theme:z,ariaLabel:N}=t,B=R("Toastify__toast",`Toastify__toast-theme--${z}`,`Toastify__toast--${_}`,{"Toastify__toast--rtl":x},{"Toastify__toast--close-on-click":$}),st=P(b)?b({rtl:x,position:C,type:_,defaultClassName:B}):R(B,b),W=Rt(t),j=!!c||!f,V={closeToast:w,type:_,theme:z},X=null;return o===!1||(P(o)?X=o(V):h.isValidElement(o)?X=h.cloneElement(o,V):X=ct(V)),T.createElement(E,{isIn:v,done:y,position:C,preventExitTransition:a,nodeRef:r,playToast:l},T.createElement("div",{id:L,tabIndex:0,onClick:u,"data-in":v,className:st,...n,style:m,ref:r,...v&&{role:i,"aria-label":N}},W!=null&&T.createElement("div",{className:R("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!O})},W),Z(d,t,!e),X,!t.customProgressBar&&T.createElement(dt,{...s&&!j?{key:`p-${s}`}:{},rtl:x,theme:z,delay:f,isRunning:e,isIn:v,closeToast:w,hide:k,type:_,className:p,controlledProgress:j,progress:c||0})))},At=(t,e=!1)=>({enter:`Toastify--animate Toastify__${t}-enter`,exit:`Toastify--animate Toastify__${t}-exit`,appendPosition:e}),Mt=ft(At("bounce",!0)),St={position:"top-right",transition:Mt,autoClose:5e3,closeButton:!0,pauseOnHover:!0,pauseOnFocusLoss:!0,draggable:"touch",draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light","aria-label":"Notifications Alt+T",hotKeys:t=>t.altKey&&t.code==="KeyT"};function Ht(t){let e={...St,...t},a=t.stacked,[r,n]=h.useState(!0),l=h.useRef(null),{getToastToRender:o,isToastActive:d,count:f}=wt(e),{className:u,style:_,rtl:k,containerId:w,hotKeys:E}=e;function C(m){let p=R("Toastify__toast-container",`Toastify__toast-container--${m}`,{"Toastify__toast-container--rtl":k});return P(u)?u({position:m,rtl:k,defaultClassName:p}):R(p,Y(u))}function b(){a&&(n(!0),g.play())}return Ct(()=>{var m;if(a){let p=l.current.querySelectorAll('[data-in="true"]'),s=12,i=(m=e.position)==null?void 0:m.includes("top"),c=0,x=0;Array.from(p).reverse().forEach((L,y)=>{let v=L;v.classList.add("Toastify__toast--stacked"),y>0&&(v.dataset.collapsed=`${r}`),v.dataset.pos||(v.dataset.pos=i?"top":"bot");let O=c*(r?.2:1)+(r?0:s*y);v.style.setProperty("--y",`${i?O:O*-1}px`),v.style.setProperty("--g",`${s}`),v.style.setProperty("--s",`${1-(r?x:0)}`),c+=v.offsetHeight,x+=.025})}},[r,f,a]),h.useEffect(()=>{function m(p){var s;let i=l.current;E(p)&&((s=i.querySelector('[tabIndex="0"]'))==null||s.focus(),n(!1),g.pause()),p.key==="Escape"&&(document.activeElement===i||i!=null&&i.contains(document.activeElement))&&(n(!0),g.play())}return document.addEventListener("keydown",m),()=>{document.removeEventListener("keydown",m)}},[E]),T.createElement("section",{ref:l,className:"Toastify",id:w,onMouseEnter:()=>{a&&(n(!1),g.pause())},onMouseLeave:b,"aria-live":"polite","aria-atomic":"false","aria-relevant":"additions text","aria-label":e["aria-label"]},o((m,p)=>{let s=p.length?{..._}:{..._,pointerEvents:"none"};return T.createElement("div",{tabIndex:-1,className:C(m),"data-stacked":a,style:s,key:`c-${m}`},p.map(({content:i,props:c})=>T.createElement(Dt,{...c,stacked:a,collapseAll:b,isIn:d(c.toastId,c.containerId),key:`t-${c.key}`},i)))}))}export{Ht as L,g as y};
