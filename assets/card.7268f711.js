const c={randomDouble(i,t){return Math.random()*(t-i)+i},range(i,t){return Math.floor(Math.random()*(t-i+1)+i)},choice(i,t=1,e=!0){let r=i.length,n=new Array(r).fill(0).map((a,s)=>({index:s,selected:!1})),h=[];if(t===1)return[i[this.range(0,r-1)]];if(e){for(;t-- >0;)h.push(i[this.range(0,r-1)]);return h}else for(;t-- >0;){let a=n.filter(f=>!f.selected),s=a.length,l=a[this.range(0,s-1)],o=l.index;l.selected=!0,h.push(i[o])}return h},sum(i){let t=0;for(let e of i)t+=e;return t},choiceWithBias(i,t){if(i.length!=t.length)return"error";let e=Math.random(),r=0,n=[],h=[],a=this.sum(t);for(let s of t)n.push(s/a);for(let s of n)h.push(r+s),r+=s;for(let s=0;s<h.length;s++)if(e<h[s])return i[s];return i[i.length-1]}};class u{constructor(t,e,r,n,h,a,s,l){this.name=t,this.born=e,this.quality=l,this.type=r,this.effect=n,this.introduction=h,this.level=0,this.avaSecAttrList=s,this.avaMainAttrList=a}genMainAttr(){this.avaMainAttrList.forEach(e=>{e.selected=!1});let t=this.avaMainAttrList.length;return this.avaMainAttrList[c.range(0,t-1)].gen()}genSecAttr(){this.avaSecAttrList.forEach(e=>{e.selected=!1});let t=c.range(1,4);return c.choice(this.avaSecAttrList,t,!1).map(e=>e.gen())}gen(){return{name:this.name,born:this.born,quality:this.quality,type:this.type,level:this.level,mainAttr:this.genMainAttr(),secAttr:this.genSecAttr(),effect:this.effect,introduction:this.introduction,avaSecAttrList:this.avaSecAttrList.map(t=>t.copy()),avaMainAttrList:this.avaMainAttrList.map(t=>t.copy()),curChoice:0,starNum:0,levelUp(){this.level++,[3,6,9,12,15].includes(this.level)&&(this.addStar(),this.mainAttr.addAttrVal(this.mainAttr.rise[this.level/3-1]))},addStar(){let t=this.secAttr.length;if(t<4){let e=c.choiceWithBias([0,1],[60,40]);e===0?(t++,this.secAttr.push(c.choice(this.avaSecAttrList.filter(r=>!r.selected))[0].gen())):(e=c.choiceWithBias(this.getChoiceArr(),this.getBiasArr()),this.curChoice!=e&&(this.resetBias(),this.curChoice=e),this.secAttr[e].addBias(),this.secAttr[e].star++,this.secAttr[e].addAttrVal(this.secAttr[e].rise[this.level/3-1]))}else{let e=c.choiceWithBias(this.getChoiceArr(),this.getBiasArr());this.curChoice!=e&&(this.resetBias(),this.curChoice=e),this.secAttr[e].addBias(),this.secAttr[e].star++,this.secAttr[e].addAttrVal(this.secAttr[e].rise[this.level/3-1])}},getChoiceArr(){return this.secAttr.map((t,e)=>e)},getBiasArr(){return this.secAttr.map(t=>t.bias)},resetBias(){this.secAttr.forEach(t=>{t.bias=25})}}}}const A={\u4EBA\u65CF:{num:4,effect:"\u62A4\u7532\u7A7F\u900F +300"},\u9B54\u795E:{num:1,effect:"\u9996\u9886\u4F24\u5BB3 +4%"},\u5815\u5929\u4F7F:{num:2,effect:"\u5143\u7D20\u7A7F\u900F +100"},\u730E\u9B54:{num:2,effect:"\u66B4\u51FB\u4F24\u5BB3 +12"},\u9B54\u7269:{num:4,effect:"\u666E\u653B\u4F24\u5BB3 +40%"},\u4E9A\u4EBA:{num:4,effect:"\u653B\u901F +25"},\u5143\u7D20:{num:4,effect:"\u5168\u5C5E\u6027\u4F24\u5BB3\u63D0\u5347 7%"},\u4E0D\u6B7B\u65CF:{num:4,effect:"\u6280\u80FD\u4F24\u5BB3 +10%"},\u6076\u9B54:{num:4,effect:"\u66B4\u51FB\u503C +40"}};export{A as B,u as H,c as r};
