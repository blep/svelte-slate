function M(){}function rt(t,e){for(const n in e)t[n]=e[n];return t}function J(t){return t()}function H(){return Object.create(null)}function v(t){t.forEach(J)}function K(t){return typeof t=="function"}function kt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let S;function Et(t,e){return S||(S=document.createElement("a")),S.href=e,t===S.href}function St(t,e){return t!=t?e==e:t!==e}function st(t){return Object.keys(t).length===0}function Q(t,...e){if(t==null)return M;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function At(t){let e;return Q(t,n=>e=n)(),e}function Ct(t,e,n){t.$$.on_destroy.push(Q(e,n))}function Nt(t,e,n,i){if(t){const o=R(t,e,n,i);return t[0](o)}}function R(t,e,n,i){return t[1]&&i?rt(n.ctx.slice(),t[1](i(e))):n.ctx}function jt(t,e,n,i){if(t[2]&&i){const o=t[2](i(n));if(e.dirty===void 0)return o;if(typeof o=="object"){const c=[],r=Math.max(e.dirty.length,o.length);for(let l=0;l<r;l+=1)c[l]=e.dirty[l]|o[l];return c}return e.dirty|o}return e.dirty}function Mt(t,e,n,i,o,c){if(o){const r=R(e,n,i,c);t.p(r,o)}}function Tt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function qt(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function Pt(t,e){const n={};e=new Set(e);for(const i in t)!e.has(i)&&i[0]!=="$"&&(n[i]=t[i]);return n}function zt(t){return t&&K(t.destroy)?t.destroy:M}let T=!1;function ct(){T=!0}function lt(){T=!1}function ut(t,e,n,i){for(;t<e;){const o=t+(e-t>>1);n(o)<=i?t=o+1:e=o}return t}function at(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const s=[];for(let u=0;u<e.length;u++){const f=e[u];f.claim_order!==void 0&&s.push(f)}e=s}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let o=0;for(let s=0;s<e.length;s++){const u=e[s].claim_order,f=(o>0&&e[n[o]].claim_order<=u?o+1:ut(1,o,d=>e[n[d]].claim_order,u))-1;i[s]=n[f]+1;const _=f+1;n[_]=s,o=Math.max(_,o)}const c=[],r=[];let l=e.length-1;for(let s=n[o]+1;s!=0;s=i[s-1]){for(c.push(e[s-1]);l>=s;l--)r.push(e[l]);l--}for(;l>=0;l--)r.push(e[l]);c.reverse(),r.sort((s,u)=>s.claim_order-u.claim_order);for(let s=0,u=0;s<r.length;s++){for(;u<c.length&&r[s].claim_order>=c[u].claim_order;)u++;const f=u<c.length?c[u]:null;t.insertBefore(r[s],f)}}function ft(t,e){t.appendChild(e)}function dt(t,e){if(T){for(at(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Ot(t,e,n){T&&!n?dt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function V(t){t.parentNode.removeChild(t)}function Dt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function X(t){return document.createElement(t)}function _t(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function Y(t){return document.createTextNode(t)}function Lt(){return Y("")}function U(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function Wt(t){return function(e){return e.stopPropagation(),t.call(this,e)}}function ht(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Bt(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const i in e)e[i]==null?t.removeAttribute(i):i==="style"?t.style.cssText=e[i]:i==="__value"?t.value=t[i]=e[i]:n[i]&&n[i].set?t[i]=e[i]:ht(t,i,e[i])}function mt(t){return Array.from(t.childNodes)}function pt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function Z(t,e,n,i,o=!1){pt(t);const c=(()=>{for(let r=t.claim_info.last_index;r<t.length;r++){const l=t[r];if(e(l)){const s=n(l);return s===void 0?t.splice(r,1):t[r]=s,o||(t.claim_info.last_index=r),l}}for(let r=t.claim_info.last_index-1;r>=0;r--){const l=t[r];if(e(l)){const s=n(l);return s===void 0?t.splice(r,1):t[r]=s,o?s===void 0&&t.claim_info.last_index--:t.claim_info.last_index=r,l}}return i()})();return c.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,c}function tt(t,e,n,i){return Z(t,o=>o.nodeName===e,o=>{const c=[];for(let r=0;r<o.attributes.length;r++){const l=o.attributes[r];n[l.name]||c.push(l.name)}c.forEach(r=>o.removeAttribute(r))},()=>i(e))}function It(t,e,n){return tt(t,e,n,X)}function Ft(t,e,n){return tt(t,e,n,_t)}function Ht(t,e){return Z(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>Y(e),!0)}function Ut(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function Gt(t,e){t.value=e==null?"":e}function Jt(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function Kt(t,e){for(let n=0;n<t.options.length;n+=1){const i=t.options[n];if(i.__value===e){i.selected=!0;return}}t.selectedIndex=-1}let A;function yt(){if(A===void 0){A=!1;try{typeof window<"u"&&window.parent&&window.parent.document}catch{A=!0}}return A}function Qt(t,e){getComputedStyle(t).position==="static"&&(t.style.position="relative");const i=X("iframe");i.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),i.setAttribute("aria-hidden","true"),i.tabIndex=-1;const o=yt();let c;return o?(i.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",c=U(window,"message",r=>{r.source===i.contentWindow&&e()})):(i.src="about:blank",i.onload=()=>{c=U(i.contentWindow,"resize",e)}),ft(t,i),()=>{(o||c&&i.contentWindow)&&c(),V(i)}}function Rt(t,e,n){t.classList[n?"add":"remove"](e)}function gt(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const o=document.createEvent("CustomEvent");return o.initCustomEvent(t,n,i,e),o}function Vt(t,e=document.body){return Array.from(e.querySelectorAll(t))}let $;function x(t){$=t}function b(){if(!$)throw new Error("Function called outside component initialization");return $}function Xt(t){b().$$.before_update.push(t)}function Yt(t){b().$$.on_mount.push(t)}function Zt(t){b().$$.after_update.push(t)}function te(t){b().$$.on_destroy.push(t)}function ee(){const t=b();return(e,n,{cancelable:i=!1}={})=>{const o=t.$$.callbacks[e];if(o){const c=gt(e,n,{cancelable:i});return o.slice().forEach(r=>{r.call(t,c)}),!c.defaultPrevented}return!0}}function ne(t,e){return b().$$.context.set(t,e),e}function ie(t){return b().$$.context.get(t)}function oe(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(i=>i.call(this,e))}const w=[],G=[],N=[],L=[],et=Promise.resolve();let W=!1;function nt(){W||(W=!0,et.then(it))}function re(){return nt(),et}function B(t){N.push(t)}function se(t){L.push(t)}const D=new Set;let C=0;function it(){const t=$;do{for(;C<w.length;){const e=w[C];C++,x(e),bt(e.$$)}for(x(null),w.length=0,C=0;G.length;)G.pop()();for(let e=0;e<N.length;e+=1){const n=N[e];D.has(n)||(D.add(n),n())}N.length=0}while(w.length);for(;L.length;)L.pop()();W=!1,D.clear(),x(t)}function bt(t){if(t.fragment!==null){t.update(),v(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(B)}}const j=new Set;let g;function ce(){g={r:0,c:[],p:g}}function le(){g.r||v(g.c),g=g.p}function ot(t,e){t&&t.i&&(j.delete(t),t.i(e))}function wt(t,e,n,i){if(t&&t.o){if(j.has(t))return;j.add(t),g.c.push(()=>{j.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const ue=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function ae(t,e){wt(t,1,1,()=>{e.delete(t.key)})}function fe(t,e,n,i,o,c,r,l,s,u,f,_){let d=t.length,m=c.length,h=d;const q={};for(;h--;)q[t[h].key]=h;const k=[],P=new Map,z=new Map;for(h=m;h--;){const a=_(o,c,h),p=n(a);let y=r.get(p);y?i&&y.p(a,e):(y=u(p,a),y.c()),P.set(p,k[h]=y),p in q&&z.set(p,Math.abs(h-q[p]))}const I=new Set,F=new Set;function O(a){ot(a,1),a.m(l,f),r.set(a.key,a),f=a.first,m--}for(;d&&m;){const a=k[m-1],p=t[d-1],y=a.key,E=p.key;a===p?(f=a.first,d--,m--):P.has(E)?!r.has(y)||I.has(y)?O(a):F.has(E)?d--:z.get(y)>z.get(E)?(F.add(y),O(a)):(I.add(E),d--):(s(p,r),d--)}for(;d--;){const a=t[d];P.has(a.key)||s(a,r)}for(;m;)O(k[m-1]);return k}function de(t,e){const n={},i={},o={$$scope:1};let c=t.length;for(;c--;){const r=t[c],l=e[c];if(l){for(const s in r)s in l||(i[s]=1);for(const s in l)o[s]||(n[s]=l[s],o[s]=1);t[c]=l}else for(const s in r)o[s]=1}for(const r in i)r in n||(n[r]=void 0);return n}function _e(t){return typeof t=="object"&&t!==null?t:{}}function he(t,e,n){const i=t.$$.props[e];i!==void 0&&(t.$$.bound[i]=n,n(t.$$.ctx[i]))}function me(t){t&&t.c()}function pe(t,e){t&&t.l(e)}function xt(t,e,n,i){const{fragment:o,on_mount:c,on_destroy:r,after_update:l}=t.$$;o&&o.m(e,n),i||B(()=>{const s=c.map(J).filter(K);r?r.push(...s):v(s),t.$$.on_mount=[]}),l.forEach(B)}function $t(t,e){const n=t.$$;n.fragment!==null&&(v(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function vt(t,e){t.$$.dirty[0]===-1&&(w.push(t),nt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function ye(t,e,n,i,o,c,r,l=[-1]){const s=$;x(t);const u=t.$$={fragment:null,ctx:null,props:c,update:M,not_equal:o,bound:H(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(s?s.$$.context:[])),callbacks:H(),dirty:l,skip_bound:!1,root:e.target||s.$$.root};r&&r(u.root);let f=!1;if(u.ctx=n?n(t,e.props||{},(_,d,...m)=>{const h=m.length?m[0]:d;return u.ctx&&o(u.ctx[_],u.ctx[_]=h)&&(!u.skip_bound&&u.bound[_]&&u.bound[_](h),f&&vt(t,_)),d}):[],u.update(),f=!0,v(u.before_update),u.fragment=i?i(u.ctx):!1,e.target){if(e.hydrate){ct();const _=mt(e.target);u.fragment&&u.fragment.l(_),_.forEach(V)}else u.fragment&&u.fragment.c();e.intro&&ot(t.$$.fragment),xt(t,e.target,e.anchor,e.customElement),lt(),it()}x(s)}class ge{$destroy(){$t(this,1),this.$destroy=M}$on(e,n){const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const o=i.indexOf(n);o!==-1&&i.splice(o,1)}}$set(e){this.$$set&&!st(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{ie as $,de as A,_e as B,qt as C,_t as D,Ft as E,St as F,Nt as G,Vt as H,dt as I,Mt as J,Tt as K,jt as L,Ct as M,G as N,he as O,se as P,zt as Q,U as R,ge as S,v as T,ee as U,Pt as V,B as W,ue as X,Rt as Y,Gt as Z,ne as _,Ot as a,At as a0,Qt as a1,Xt as a2,te as a3,fe as a4,ae as a5,Bt as a6,Et as a7,Kt as a8,Wt as a9,Dt as aa,oe as ab,K as ac,ot as b,le as c,V as d,Lt as e,Zt as f,ce as g,X as h,ye as i,It as j,mt as k,ht as l,Jt as m,Y as n,Yt as o,Ht as p,Ut as q,me as r,kt as s,wt as t,pe as u,xt as v,$t as w,re as x,M as y,rt as z};