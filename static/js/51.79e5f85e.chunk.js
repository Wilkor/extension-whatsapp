(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{147:function(t,o,e){"use strict";e.r(o),e.d(o,"bds_modal",(function(){return l}));var i=e(17),n=function(t,o,e,i){function n(t){return t instanceof e?t:new e((function(o){o(t)}))}return new(e||(e=Promise))((function(e,a){function l(t){try{d(i.next(t))}catch(t){a(t)}}function s(t){try{d(i.throw(t))}catch(t){a(t)}}function d(t){t.done?e(t.value):n(t.value).then(l,s)}d((i=i.apply(t,o||[])).next())}))},a=function(t,o){var e,i,n,a,l={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return a={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function s(t){return function(o){return d([t,o])}}function d(s){if(e)throw new TypeError("Generator is already executing.");for(;a&&(a=0,s[0]&&(l=0)),l;)try{if(e=1,i&&(n=2&s[0]?i.return:s[0]?i.throw||((n=i.return)&&n.call(i),0):i.next)&&!(n=n.call(i,s[1])).done)return n;switch(i=0,n&&(s=[2&s[0],n.value]),s[0]){case 0:case 1:n=s;break;case 4:return l.label++,{value:s[1],done:!1};case 5:l.label++,i=s[1],s=[0];continue;case 7:s=l.ops.pop(),l.trys.pop();continue;default:if(!(n=l.trys,(n=n.length>0&&n[n.length-1])||6!==s[0]&&2!==s[0])){l=0;continue}if(3===s[0]&&(!n||s[1]>n[0]&&s[1]<n[3])){l.label=s[1];break}if(6===s[0]&&l.label<n[1]){l.label=n[1],n=s;break}if(n&&l.label<n[2]){l.label=n[2],l.ops.push(s);break}n[2]&&l.ops.pop(),l.trys.pop();continue}s=o.call(t,l)}catch(t){s=[6,t],i=0}finally{e=n=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}},l=function(){function t(t){var o=this;Object(i.r)(this,t),this.bdsModalChanged=Object(i.c)(this,"bdsModalChanged",7),this.handleMouseClick=function(){o.open=!1,o.bdsModalChanged.emit({modalStatus:"closed"})},this.open=!1,this.closeButton=!0,this.size="fixed"}return t.prototype.toggle=function(){return n(this,void 0,void 0,(function(){return a(this,(function(t){return this.open=!this.open,this.open?this.bdsModalChanged.emit({modalStatus:"opened"}):this.bdsModalChanged.emit({modalStatus:"closed"}),[2]}))}))},t.prototype.render=function(){var t,o,e;return Object(i.h)("div",{class:(t={modal__dialog:!0,"modal__dialog--open":this.open},t["modal__dialog--".concat(this.size)]=!0,t)},Object(i.h)("div",{class:(o={modal:!0},o["modal--".concat(this.size)]=!0,o)},this.closeButton&&Object(i.h)("bds-icon",{size:"medium",class:"close-button",name:"close",onClick:this.handleMouseClick}),"fixed"==this.size&&Object(i.h)("slot",null),"fixed"!==this.size&&Object(i.h)("div",{class:(e={slot:!0},e["slot--".concat(this.size)]=!0,e)},Object(i.h)("slot",null))))},t}();l.style=".modal__dialog{opacity:0;visibility:hidden;background-color:rgba(0, 0, 0, 0.7);width:100%;height:100%;position:fixed;top:0;left:0;-webkit-transition:opacity 0.3s ease-in-out;transition:opacity 0.3s ease-in-out;z-index:80000;display:none}.modal__dialog--dynamic{overflow-y:auto;padding-top:40px;padding-bottom:40px;height:-webkit-fill-available}.modal__dialog .modal{position:relative;margin:auto;width:592px;height:368px;border-radius:8px;background:var(--color-surface-1, #ffffff);-webkit-box-shadow:0px 4px 10px rgba(51, 51, 51, 0.3);box-shadow:0px 4px 10px rgba(51, 51, 51, 0.3);padding:32px;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:justify;justify-content:space-between}.modal__dialog .modal--dynamic{height:auto;width:auto;max-width:1000px}.modal__dialog .modal .close-button{color:var(--color-content-default, #202c44);-ms-flex-item-align:end;align-self:flex-end;margin-bottom:16px;cursor:pointer}.modal__dialog .modal .slot--dynamic{-ms-flex:1 1 auto;flex:1 1 auto}.modal__dialog--open{opacity:1;visibility:visible;display:-ms-flexbox;display:flex}"}}]);
//# sourceMappingURL=51.79e5f85e.chunk.js.map