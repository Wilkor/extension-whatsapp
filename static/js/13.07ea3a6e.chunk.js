(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{104:function(e,t,o){"use strict";o.r(t),o.d(t,"bds_accordion",(function(){return c}));var n=o(17),r=function(e,t,o,n){function r(e){return e instanceof o?e:new o((function(t){t(e)}))}return new(o||(o=Promise))((function(o,i){function c(e){try{s(n.next(e))}catch(e){i(e)}}function a(e){try{s(n.throw(e))}catch(e){i(e)}}function s(e){e.done?o(e.value):r(e.value).then(c,a)}s((n=n.apply(e,t||[])).next())}))},i=function(e,t){var o,n,r,i,c={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(e){return function(t){return s([e,t])}}function s(a){if(o)throw new TypeError("Generator is already executing.");for(;i&&(i=0,a[0]&&(c=0)),c;)try{if(o=1,n&&(r=2&a[0]?n.return:a[0]?n.throw||((r=n.return)&&r.call(n),0):n.next)&&!(r=r.call(n,a[1])).done)return r;switch(n=0,r&&(a=[2&a[0],r.value]),a[0]){case 0:case 1:r=a;break;case 4:return c.label++,{value:a[1],done:!1};case 5:c.label++,n=a[1],a=[0];continue;case 7:a=c.ops.pop(),c.trys.pop();continue;default:if(!(r=c.trys,(r=r.length>0&&r[r.length-1])||6!==a[0]&&2!==a[0])){c=0;continue}if(3===a[0]&&(!r||a[1]>r[0]&&a[1]<r[3])){c.label=a[1];break}if(6===a[0]&&c.label<r[1]){c.label=r[1],r=a;break}if(r&&c.label<r[2]){c.label=r[2],c.ops.push(a);break}r[2]&&c.ops.pop(),c.trys.pop();continue}a=t.call(e,c)}catch(e){a=[6,e],n=0}finally{o=r=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}},c=function(){function e(e){Object(n.r)(this,e),this.bdsToggle=Object(n.c)(this,"bdsToggle",7),this.bdsAccordionOpen=Object(n.c)(this,"bdsAccordionOpen",7),this.bdsAccordionClose=Object(n.c)(this,"bdsAccordionClose",7),this.accGroup=null,this.accheaders=null,this.accBodies=null,this.isOpen=!1,this.numberElement=null}return e.prototype.toggle=function(){return r(this,void 0,void 0,(function(){return i(this,(function(e){return this.isOpen=!this.isOpen,[2]}))}))},e.prototype.open=function(){return r(this,void 0,void 0,(function(){return i(this,(function(e){return this.isOpen=!0,[2]}))}))},e.prototype.close=function(){return r(this,void 0,void 0,(function(){var e,t;return i(this,(function(o){return null===(e=this.accheaders)||void 0===e||e.close(),null===(t=this.accBodies)||void 0===t||t.close(),[2]}))}))},e.prototype.reciveNumber=function(e){return r(this,void 0,void 0,(function(){return i(this,(function(t){return this.numberElement=e,[2]}))}))},e.prototype.isOpenChanged=function(e){var t,o,n;null===(t=this.accheaders)||void 0===t||t.toggle(),null===(o=this.accBodies)||void 0===o||o.toggle(),this.bdsToggle.emit({value:e}),e?this.bdsAccordionOpen.emit():this.bdsAccordionClose.emit(),"single"==this.accGroup.collapse&&(null===(n=this.accGroup)||void 0===n||n.closeAll(this.numberElement))},e.prototype.componentWillRender=function(){this.accGroup="BDS-ACCORDION-GROUP"==this.element.parentElement.tagName&&this.element.parentElement,this.accheaders=this.element.children[0],this.accBodies=this.element.children[1]},e.prototype.render=function(){return Object(n.h)("div",{class:"accordion_group"},Object(n.h)("slot",null))},Object.defineProperty(e.prototype,"element",{get:function(){return Object(n.g)(this)},enumerable:!1,configurable:!0}),Object.defineProperty(e,"watchers",{get:function(){return{isOpen:["isOpenChanged"]}},enumerable:!1,configurable:!0}),e}();c.style='.accordion_header{display:grid;grid-auto-flow:column;gap:24px;-ms-flex-pack:start;justify-content:start;-ms-flex-align:center;align-items:center;padding:24px;padding-right:56px;position:relative;color:var(--color-content-default, #202c44);cursor:pointer}.accordion_header::before{content:"";position:absolute;inset:0;z-index:0}.accordion_header *{position:relative;z-index:1}.accordion_header:hover::before{background-color:var(--color-surface-2, #f3f6fa);opacity:0.5;mix-blend-mode:multiply}.accordion_header .accButton{position:absolute;right:24px;top:calc(50% - 16px);border-radius:8px;contain:inherit;-webkit-transition:height 0.5s, all 0.3s;-moz-transition:height 0.5s, all 0.3s;transition:height 0.5s, all 0.3s;z-index:1}.accordion_header .accButton__isopen{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.accordion_header .accButton::before{content:"";position:absolute;inset:-4px;border:2px solid transparent;border-radius:4px}.accordion_header .accButton:focus-visible{outline:none}.accordion_header .accButton:focus-visible::before{border-color:var(--color-focus, #c226fb)}.accordion_header .accButton:hover{background-color:var(--color-surface-1, #ffffff)}.accordion_header .accButton:active{background-color:var(--color-surface-1, #ffffff)}.accordion_body{height:0;overflow:hidden;border-bottom:1px solid var(--color-surface-3, #e7edf4);-webkit-transition:all 0.5s;-moz-transition:all 0.5s;transition:all 0.5s}.accordion_body .container{padding:8px 24px 48px;position:relative;color:var(--color-content-default, #202c44)}'}}]);
//# sourceMappingURL=13.07ea3a6e.chunk.js.map