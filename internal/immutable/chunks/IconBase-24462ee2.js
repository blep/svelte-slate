import{S as w,i as B,s as p,H as b,E as m,e as u,F as v,k as h,d as r,l as f,a as d,J as g,K as k,L as y,M as E,b as I,t as q,n as S,p as C,q as F}from"./index-eb8adeeb.js";function c(n){let e,a;return{c(){e=m("title"),a=S(n[0])},l(l){e=v(l,"title",{});var t=h(e);a=C(t,n[0]),t.forEach(r)},m(l,t){d(l,e,t),g(e,a)},p(l,t){t&1&&F(a,l[0])},d(l){l&&r(e)}}}function H(n){let e,a,l,t=n[0]&&c(n);const _=n[3].default,i=b(_,n,n[2],null);return{c(){e=m("svg"),t&&t.c(),a=u(),i&&i.c(),this.h()},l(s){e=v(s,"svg",{xmlns:!0,viewBox:!0,class:!0});var o=h(e);t&&t.l(o),a=u(),i&&i.l(o),o.forEach(r),this.h()},h(){f(e,"xmlns","http://www.w3.org/2000/svg"),f(e,"viewBox",n[1]),f(e,"class","svelte-3h8371")},m(s,o){d(s,e,o),t&&t.m(e,null),g(e,a),i&&i.m(e,null),l=!0},p(s,[o]){s[0]?t?t.p(s,o):(t=c(s),t.c(),t.m(e,a)):t&&(t.d(1),t=null),i&&i.p&&(!l||o&4)&&k(i,_,s,s[2],l?E(_,s[2],o,null):y(s[2]),null),(!l||o&2)&&f(e,"viewBox",s[1])},i(s){l||(I(i,s),l=!0)},o(s){q(i,s),l=!1},d(s){s&&r(e),t&&t.d(),i&&i.d(s)}}}function J(n,e,a){let{$$slots:l={},$$scope:t}=e,{title:_=null}=e,{viewBox:i}=e;return n.$$set=s=>{"title"in s&&a(0,_=s.title),"viewBox"in s&&a(1,i=s.viewBox),"$$scope"in s&&a(2,t=s.$$scope)},[_,i,t,l]}class L extends w{constructor(e){super(),B(this,e,J,H,p,{title:0,viewBox:1})}}export{L as I};