import{_ as v}from"./plugin-vueexport-helper.2444895f.js";import{c as s,b as N,o as n,d as f,F as y,g as S,u as c,e as b,t as h,n as m,h as E}from"./index.5017c739.js";const g={class:"starEffect"},x={__name:"StarEffect",props:["starNum","curNum","effectName","isShop"],setup(o){const e=o,r=s(()=>new Array(e.starNum).fill(0).map((t,u)=>u<e.curNum));function i(t){return r.value[t]?(a.color="#f2db23","star"):(a.color="#646464","star-o")}const _=s(()=>e.starNum<=e.curNum?{color:"#8ae24d"}:{color:"#646464"}),a=s(()=>r.value.map(t=>t?{color:"#f2db23"}:{color:"#646464"}));function p(){return e.isShop||e.starNum<=e.curNum?"":"(\u672A\u6FC0\u6D3B)"}return(t,u)=>{const d=N("VanIcon");return n(),f("div",g,[(n(!0),f(y,null,S(c(r),(A,l)=>(n(),E(d,{class:"star",name:i(l),style:m(c(a)[l])},null,8,["name","style"]))),256)),b("span",{style:m(c(_))},h(o.effectName+p()),5)])}}},V=v(x,[["__scopeId","data-v-3b97ecc3"]]);export{V as default};
