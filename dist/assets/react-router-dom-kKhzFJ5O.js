import{r as l,R as O}from"./react-CrDQUdnJ.js";import"./react-dom-BHCIuv3F.js";import{l as _,R as k,N as x,u as F,a as P,b as B,c as N}from"./react-router-DTSF61T7.js";import{c as j,s as I,b as y}from"./@remix-run-Ci2Y9YYq.js";/**
 * React Router DOM v6.30.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function w(){return w=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var i=arguments[r];for(var t in i)Object.prototype.hasOwnProperty.call(i,t)&&(e[t]=i[t])}return e},w.apply(this,arguments)}function K(e,r){if(e==null)return{};var i={},t=Object.keys(e),s,a;for(a=0;a<t.length;a++)s=t[a],!(r.indexOf(s)>=0)&&(i[s]=e[s]);return i}function V(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function A(e,r){return e.button===0&&(!r||r==="_self")&&!V(e)}const W=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],z="6";try{window.__reactRouterVersion=z}catch{}const G="startTransition",b=O[G];function Y(e){let{basename:r,children:i,future:t,window:s}=e,a=l.useRef();a.current==null&&(a.current=j({window:s,v5Compat:!0}));let o=a.current,[u,c]=l.useState({action:o.action,location:o.location}),{v7_startTransition:n}=t||{},f=l.useCallback(p=>{n&&b?b(()=>c(p)):c(p)},[c,n]);return l.useLayoutEffect(()=>o.listen(f),[o,f]),l.useEffect(()=>_(t),[t]),l.createElement(k,{basename:r,children:i,location:u.location,navigationType:u.action,navigator:o,future:t})}const M=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",X=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Z=l.forwardRef(function(r,i){let{onClick:t,relative:s,reloadDocument:a,replace:o,state:u,target:c,to:n,preventScrollReset:f,viewTransition:p}=r,m=K(r,W),{basename:U}=l.useContext(x),R,v=!1;if(typeof n=="string"&&X.test(n)&&(R=n,M))try{let d=new URL(window.location.href),h=n.startsWith("//")?new URL(d.protocol+n):new URL(n),g=I(h.pathname,U);h.origin===d.origin&&g!=null?n=g+h.search+h.hash:v=!0}catch{}let E=F(n,{relative:s}),C=q(n,{replace:o,state:u,target:c,preventScrollReset:f,relative:s,viewTransition:p});function L(d){t&&t(d),d.defaultPrevented||C(d)}return l.createElement("a",w({},m,{href:R||E,onClick:v||a?t:L,ref:i,target:c}))});var S;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(S||(S={}));var T;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(T||(T={}));function q(e,r){let{target:i,replace:t,state:s,preventScrollReset:a,relative:o,viewTransition:u}=r===void 0?{}:r,c=P(),n=B(),f=N(e,{relative:o});return l.useCallback(p=>{if(A(p,i)){p.preventDefault();let m=t!==void 0?t:y(n)===y(f);c(e,{replace:m,state:s,preventScrollReset:a,relative:o,viewTransition:u})}},[n,c,f,t,s,i,e,a,o,u])}export{Y as B,Z as L};
