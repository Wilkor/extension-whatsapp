(this["webpackJsonpblip-plugin-example"]=this["webpackJsonpblip-plugin-example"]||[]).push([[62],{144:function(t,e,n){"use strict";n.r(e),n.d(e,"bds_tab",(function(){return a}));var o=n(12),i=function(t,e,n,o){function i(t){return t instanceof n?t:new n((function(e){e(t)}))}return new(n||(n=Promise))((function(n,r){function a(t){try{l(o.next(t))}catch(e){r(e)}}function c(t){try{l(o.throw(t))}catch(e){r(e)}}function l(t){t.done?n(t.value):i(t.value).then(a,c)}l((o=o.apply(t,e||[])).next())}))},r=function(t,e){var n,o,i,r,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return r={next:c(0),throw:c(1),return:c(2)},"function"===typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function c(t){return function(e){return l([t,e])}}function l(c){if(n)throw new TypeError("Generator is already executing.");for(;r&&(r=0,c[0]&&(a=0)),a;)try{if(n=1,o&&(i=2&c[0]?o.return:c[0]?o.throw||((i=o.return)&&i.call(o),0):o.next)&&!(i=i.call(o,c[1])).done)return i;switch(o=0,i&&(c=[2&c[0],i.value]),c[0]){case 0:case 1:i=c;break;case 4:return a.label++,{value:c[1],done:!1};case 5:a.label++,o=c[1],c=[0];continue;case 7:c=a.ops.pop(),a.trys.pop();continue;default:if(!(i=(i=a.trys).length>0&&i[i.length-1])&&(6===c[0]||2===c[0])){a=0;continue}if(3===c[0]&&(!i||c[1]>i[0]&&c[1]<i[3])){a.label=c[1];break}if(6===c[0]&&a.label<i[1]){a.label=i[1],i=c;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(c);break}i[2]&&a.ops.pop(),a.trys.pop();continue}c=e.call(t,a)}catch(l){c=[6,l],o=0}finally{n=i=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}},a=function(){function t(t){Object(o.r)(this,t),this.bdsTabChange=Object(o.c)(this,"bdsTabChange",7),this.group=void 0,this.label=void 0,this.active=!1,this.isActive=!1}return t.prototype.handleTabChange=function(t){this.isActive=t.detail==this.group},t.prototype.onClick=function(){return i(this,void 0,void 0,(function(){return r(this,(function(t){return this.bdsTabChange.emit(this.group),[2]}))}))},t.prototype.render=function(){var t,e=this.isActive?"bold":"regular";return Object(o.h)(o.H,{class:(t={"bds-tab":!0},t["bds-tab--selected"]=this.isActive,t),onClick:this.onClick.bind(this)},Object(o.h)("div",{class:"bds-tab__text"},Object(o.h)("bds-typo",{variant:"fs-16",bold:e},this.label)))},t}();a.style=".bds-tab{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;-webkit-box-sizing:content-box;box-sizing:content-box;min-width:-webkit-fit-content;min-width:-moz-fit-content;min-width:fit-content;max-width:270px;height:46px;max-height:48px;cursor:pointer;text-align:center;color:var(--color-content-disable, #505f79);border-bottom:2px solid transparent}.bds-tab:not(:last-child){margin-right:32px}.bds-tab:hover{color:var(--color-content-default, #202c44)}.bds-tab--selected{-webkit-animation-name:selectFade;animation-name:selectFade;-webkit-animation-duration:0.75s;animation-duration:0.75s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}.bds-tab__text{min-width:90px;max-width:270px}@-webkit-keyframes selectFade{from{border-bottom:2px solid transparent;color:var(--color-content-default, #202c44)}to{border-bottom:2px solid var(--color-brand, #3f7de8);color:var(--color-content-default, #202c44)}}@keyframes selectFade{from{border-bottom:2px solid transparent;color:var(--color-content-default, #202c44)}to{border-bottom:2px solid var(--color-brand, #3f7de8);color:var(--color-content-default, #202c44)}}@media (max-width: 599px){.bds-tab{min-width:110px;text-overflow:ellipsis}}"}}]);
//# sourceMappingURL=62.efbaad1c.chunk.js.map