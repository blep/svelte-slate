import{S as x,i as q,s as C,O as L,P,e as p,t as j,k as z,w as g,c as m,a as d,h as A,d as c,m as B,x as b,b as _,g as h,K as v,y as E,Q as D,q as w,o as y,B as S,E as H}from"../chunks/index-e880b716.js";import{S as I,w as K,a as O,c as Q,E as V}from"../chunks/index.es-8065e7b0.js";import{E as F}from"../chunks/Element-16702ee9.js";import{w as G,L as J}from"../chunks/Leaf-0a522c86.js";import"../chunks/index-c891afdd.js";import"../chunks/preload-helper-44639fb8.js";function M(o){let a,s,n;return s=new V({props:{Element:F,Leaf:J,placeholder:"Enter some plain text..."}}),{c(){a=p("div"),g(s.$$.fragment),this.h()},l(t){a=m(t,"DIV",{class:!0});var r=d(a);b(s.$$.fragment,r),r.forEach(c),this.h()},h(){_(a,"class","editor svelte-1firoz5")},m(t,r){h(t,a,r),E(s,a,null),n=!0},p:H,i(t){n||(w(s.$$.fragment,t),n=!0)},o(t){y(s.$$.fragment,t),n=!1},d(t){t&&c(a),S(s)}}}function N(o){let a,s,n,t,r,u,f;function k(e){o[2](e)}let $={editor:o[1],$$slots:{default:[M]},$$scope:{ctx:o}};return o[0]!==void 0&&($.value=o[0]),r=new I({props:$}),L.push(()=>P(r,"value",k)),{c(){a=p("p"),s=p("a"),n=j("Source"),t=z(),g(r.$$.fragment),this.h()},l(e){a=m(e,"P",{});var l=d(a);s=m(l,"A",{target:!0,href:!0});var i=d(s);n=A(i,"Source"),i.forEach(c),l.forEach(c),t=B(e),b(r.$$.fragment,e),this.h()},h(){_(s,"target","_blank"),_(s,"href","https://github.com/nathanfaucett/svelte-slate/blob/main/src/routes/editor.svelte")},m(e,l){h(e,a,l),v(a,s),v(s,n),h(e,t,l),E(r,e,l),f=!0},p(e,[l]){const i={};l&8&&(i.$$scope={dirty:l,ctx:e}),!u&&l&1&&(u=!0,i.value=e[0],D(()=>u=!1)),r.$set(i)},i(e){f||(w(r.$$.fragment,e),f=!0)},o(e){y(r.$$.fragment,e),f=!1},d(e){e&&c(a),e&&c(t),S(r,e)}}}const ee=!0;function R(o,a,s){const n=K(G(O(Q())));let t=[{type:"code",language:"javascript",children:[{type:"code-line",children:[{text:""}]}]}];function r(u){t=u,s(0,t)}return[t,n,r]}class te extends x{constructor(a){super(),q(this,a,R,N,C,{})}}export{te as default,ee as prerender};