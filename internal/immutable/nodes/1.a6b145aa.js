import{S as E,i as S,s as q,h as m,n as b,j as f,k as _,p as d,f as u,a as g,K as h,q as v,G as $,O as x}from"../chunks/index.63937b64.js";import{s as j}from"../chunks/singletons.15f647ae.js";const k=()=>{const e=j;return{page:{subscribe:e.page.subscribe},navigating:{subscribe:e.navigating.subscribe},updated:e.updated}},y={subscribe(e){return k().page.subscribe(e)}};function C(e){var l;let t,n=e[0].status+"",o,a,i=((l=e[0].error)==null?void 0:l.message)+"",c;return{c(){t=m("h1"),o=b(n),a=m("p"),c=b(i)},l(s){t=f(s,"H1",{});var r=_(t);o=d(r,n),r.forEach(u),a=f(s,"P",{});var p=_(a);c=d(p,i),p.forEach(u)},m(s,r){g(s,t,r),h(t,o),g(s,a,r),h(a,c)},p(s,[r]){var p;r&1&&n!==(n=s[0].status+"")&&v(o,n),r&1&&i!==(i=((p=s[0].error)==null?void 0:p.message)+"")&&v(c,i)},i:$,o:$,d(s){s&&u(t),s&&u(a)}}}function G(e,t,n){let o;return x(e,y,a=>n(0,o=a)),[o]}let O=class extends E{constructor(t){super(),S(this,t,G,C,q,{})}};export{O as component};