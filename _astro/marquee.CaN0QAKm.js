var o={exports:{}},n={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var x;function c(){if(x)return n;x=1;var a=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function l(p,e,t){var i=null;if(t!==void 0&&(i=""+t),e.key!==void 0&&(i=""+e.key),"key"in e){t={};for(var u in e)u!=="key"&&(t[u]=e[u])}else t=e;return e=t.ref,{$$typeof:a,type:p,key:i,ref:e!==void 0?e:null,props:t}}return n.Fragment=r,n.jsx=l,n.jsxs=l,n}var d;function v(){return d||(d=1,o.exports=c()),o.exports}var s=v();function f({items:a}){return s.jsxs("div",{className:"relative flex w-full overflow-x-hidden border-b-2 border-t-2 border-border bg-secondary-background text-foreground font-base",children:[s.jsx("div",{className:"animate-[marquee_5s_linear_infinite] whitespace-nowrap py-12",children:a.map(r=>s.jsx("span",{className:"mx-4 text-4xl",children:r},r))}),s.jsx("div",{className:"absolute top-0 animate-[marquee2_5s_linear_infinite] whitespace-nowrap py-12",children:a.map(r=>s.jsx("span",{className:"mx-4 text-4xl",children:r},r))})]})}export{f as default};
