(this["webpackJsonpblip-plugin-example"]=this["webpackJsonpblip-plugin-example"]||[]).push([[66],{148:function(t,o,i){"use strict";i.r(o),i.d(o,"bds_toast",(function(){return s}));var e=i(12),n=function(t,o,i,e){function n(t){return t instanceof i?t:new i((function(o){o(t)}))}return new(i||(i=Promise))((function(i,a){function s(t){try{r(e.next(t))}catch(o){a(o)}}function c(t){try{r(e.throw(t))}catch(o){a(o)}}function r(t){t.done?i(t.value):n(t.value).then(s,c)}r((e=e.apply(t,o||[])).next())}))},a=function(t,o){var i,e,n,a,s={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return a={next:c(0),throw:c(1),return:c(2)},"function"===typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function c(t){return function(o){return r([t,o])}}function r(c){if(i)throw new TypeError("Generator is already executing.");for(;a&&(a=0,c[0]&&(s=0)),s;)try{if(i=1,e&&(n=2&c[0]?e.return:c[0]?e.throw||((n=e.return)&&n.call(e),0):e.next)&&!(n=n.call(e,c[1])).done)return n;switch(e=0,n&&(c=[2&c[0],n.value]),c[0]){case 0:case 1:n=c;break;case 4:return s.label++,{value:c[1],done:!1};case 5:s.label++,e=c[1],c=[0];continue;case 7:c=s.ops.pop(),s.trys.pop();continue;default:if(!(n=(n=s.trys).length>0&&n[n.length-1])&&(6===c[0]||2===c[0])){s=0;continue}if(3===c[0]&&(!n||c[1]>n[0]&&c[1]<n[3])){s.label=c[1];break}if(6===c[0]&&s.label<n[1]){s.label=n[1],n=c;break}if(n&&s.label<n[2]){s.label=n[2],s.ops.push(c);break}n[2]&&s.ops.pop(),s.trys.pop();continue}c=o.call(t,s)}catch(r){c=[6,r],e=0}finally{i=n=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}},s=function(){function t(t){var o=this;Object(e.r)(this,t),this.toastButtonClick=Object(e.c)(this,"toastButtonClick",7),this._buttonClickHandler=function(){"close"===o.buttonAction||o.toastButtonClick.emit(o.el),o.close()},this.mapIconName={system:"bell",error:"error",success:"like",warning:"attention",undo:"undo",redo:"redo",notification:"notification"},this.icon=null,this.actionType="button",this.variant="system",this.toastTitle=void 0,this.toastText=void 0,this.buttonText=void 0,this.duration=0,this.buttonAction="close",this.show=!1,this.hide=!1,this.position="bottom-left"}return t.prototype._keyPressHandler=function(t){"Enter"!==t.key&&" "!==t.key||(t.preventDefault(),"close"===this.buttonAction||this.toastButtonClick.emit(this.el),this.close())},t.prototype.create=function(t){var o=t.actionType,i=t.buttonAction,e=t.buttonText,s=t.icon,c=t.toastText,r=t.toastTitle,l=t.variant,u=t.duration;return n(this,void 0,void 0,(function(){var t,n=this;return a(this,(function(a){return(t=document.querySelector("bds-toast-container.".concat("notification"===l?"top-right":"bottom-left")))?(t.appendChild(this.el),t.classList.add("notification"===l?"top-right":"bottom-left")):((t=document.createElement("bds-toast-container")).classList.add("notification"===l?"top-right":"bottom-left"),document.body.appendChild(t),t.appendChild(this.el)),this.el.actionType=o||"button",this.el.buttonAction=i||"close",this.el.buttonText=e,this.el.toastText=c,this.el.toastTitle=r,this.el.variant=l||"system",this.el.duration=1e3*u||0,this.el.position="notification"===l?"top-right":"bottom-left",this.el.icon=null!==s&&void 0!==s?s:this.mapIconName[this.variant],this.el.show=!0,this.el.duration>0&&setTimeout((function(){n.el.hide=!0,setTimeout((function(){n.el.remove()}),400)}),this.el.duration),[2]}))}))},t.prototype.close=function(){return n(this,void 0,void 0,(function(){var t=this;return a(this,(function(o){return this.el.shadowRoot?(this.el.shadowRoot.querySelector("div").classList.remove("show"),this.el.shadowRoot.querySelector("div").classList.add("hide")):(this.el.querySelector("div").classList.remove("show"),this.el.querySelector("div").classList.add("hide")),setTimeout((function(){t.el.remove()}),400),[2]}))}))},t.prototype.render=function(){var t,o,i=this;return Object(e.h)("div",{class:(t={toast:!0},t["toast--".concat(this.variant)]=!0,t["toast--action--".concat(this.actionType)]=!0,t["show show--".concat(this.position)]=this.show,t.hide=this.hide,t)},"notification"===this.variant&&Object(e.h)("img",{class:"toast__ballon",src:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTIiIGhlaWdodD0iNzAiIHZpZXdCb3g9IjAgMCA1MiA3MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE3Ljk1NzEgLTJDMTAuMzMwNCAtMiAyLjQzNzczIC0wLjc5NTMwOCAtMi45NzE4NyAyLjM4ODUzQy0xMS43NTE0IDcuNjM3NTUgLTE0LjMyMzIgMTcuODc3NCAtMTMuOTY4NCAyNy4zNDI5Qy0xMy43MDI0IDM1LjUxNzYgLTExLjQ4NTMgNDQuMjk0NyAtNS40NTQ5NiA1MC4zMTgxQzAuMjIwNjkyIDU2LjA4MzQgMTEuOTI2NyA1OC42NjQ5IDE5Ljk5NjggNTguNjY0OUMyMC4zNTE1IDU4LjY2NDkgMjAuNzA2MyA1OC45MjMxIDIwLjcwNjMgNTkuMzUzM1Y2Ny42MTQxQzIwLjcwNjMgNjguMzg4NSAyMS4zMjcgNjkuMDc2OSAyMi4yMTM5IDY5LjA3NjlDMjIuMzAyNSA2OS4wNzY5IDIyLjMwMjUgNjkuMDc2OSAyMi4zOTEyIDY5LjA3NjlDMjIuNzQ1OSA2OS4wNzY5IDIzLjAxMiA2OC45MDQ4IDIzLjE4OTMgNjguNzMyN0MyNy4xOCA2NS4zNzY4IDMxLjI1OTQgNjEuOTM0OCAzNS4xNjE0IDU4LjQ5MjhDMzguODg2MSA1NS4xMzY5IDQzLjE0MjggNTEuNjk0OSA0NS45ODA2IDQ3LjY1MDZDNTIuMDk5NyAzOS4xMzE3IDUzLjA3NTIgMjcuMTcwOCA1MS4wMzU1IDE3LjE4OUM0OS4wODQ1IDcuNjM3NTUgNDIuMDc4NiAxLjM1NTkzIDMyLjMyMzYgLTAuNjIzMjA5QzI4LjE1NTYgLTEuNDgzNyAyMy4xMDA3IC0yIDE3Ljk1NzEgLTJaIiBmaWxsPSIjODBFM0VCIi8+Cjwvc3ZnPgo="}),this.icon&&Object(e.h)("bds-icon",{theme:"outline",size:"medium",name:this.icon}),Object(e.h)("div",{class:"toast__content"},this.toastTitle&&Object(e.h)("bds-typo",{variant:"fs-14",bold:"bold"},this.toastTitle),this.toastText&&Object(e.h)("bds-typo",{variant:"fs-14",innerHTML:this.toastText})),Object(e.h)("div",{class:(o={toast__action:!0},o["toast__action__".concat(this.actionType)]=!0,o)},"button"===this.actionType?Object(e.h)("bds-button",{onKeyDown:this._keyPressHandler.bind(this),tabindex:"0",onClick:function(){return i._buttonClickHandler()},variant:"secondary",size:"standard"},this.buttonText):Object(e.h)("bds-button-icon",{onClick:function(){return i._buttonClickHandler()},size:"short",onKeyDown:this._keyPressHandler.bind(this),tabindex:"0",variant:"secondary",icon:"close"})))},Object.defineProperty(t.prototype,"el",{get:function(){return Object(e.g)(this)},enumerable:!1,configurable:!0}),t}();s.style=':host .show,:host .hide{display:-ms-flexbox;display:flex}:host .show{opacity:1}:host .show--top-right,:host .show--bottom-right{-webkit-animation:toastAnimationFadeInFromRight 1s;animation:toastAnimationFadeInFromRight 1s}:host .show--top-left,:host .show--bottom-left{-webkit-animation:toastAnimationFadeInFromLeft 1s;animation:toastAnimationFadeInFromLeft 1s}:host .hide{-webkit-transition:all 1s;transition:all 1s;-webkit-animation:toastAnimationFadeOut 0.5s;animation:toastAnimationFadeOut 0.5s}.toast{display:none;position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px;-webkit-box-shadow:0px 8px 12px rgba(96, 123, 153, 0.4), 0px 0px 4px rgba(96, 123, 153, 0.3);box-shadow:0px 8px 12px rgba(96, 123, 153, 0.4), 0px 0px 4px rgba(96, 123, 153, 0.3);color:var(--color-content-default, #202c44);opacity:0;margin-top:16px;overflow:hidden;gap:16px}.toast--action--icon{min-width:440px;max-width:440px;padding:8px 16px}.toast--action--icon bds-icon-button{height:32px}@media (max-width: 780px){.toast--action--icon{min-width:220px;width:95%;margin:16px auto 0px auto}}.toast--action--button{min-width:440px;max-width:456px;padding:8px 16px}@media (max-width: 780px){.toast--action--button{min-width:220px;width:95%;margin:16px auto 0px auto}}.toast--system{background:var(--color-system, #b3d4ff)}.toast--error{background:var(--color-error, #ffa5a5)}.toast--success{background:var(--color-success, #90e6bc)}.toast--warning{background:var(--color-warning, #fff6a8)}.toast--undo{background-color:var(--color-system, #b3d4ff)}.toast--redo{background-color:var(--color-system, #b3d4ff)}.toast--notification{background-color:var(--color-surface-1, #ffffff)}.toast bds-icon{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;padding:8px 0}.toast__ballon{display:-ms-flexbox;display:flex;position:absolute;top:0;left:0}.toast__content{height:100%;width:100%;-ms-flex-align:start;align-items:flex-start;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;padding:8px 0}.toast__action{display:-ms-flexbox;display:flex;-ms-flex-align:start;align-items:flex-start}.toast__action bds-button-icon,.toast__action bds-button{position:relative}.toast__action bds-button-icon::before,.toast__action bds-button::before{content:"";position:absolute;inset:-4px;border:2px solid transparent;border-radius:4px}.toast__action bds-button-icon:focus-visible,.toast__action bds-button:focus-visible{outline:none}.toast__action bds-button-icon:focus-visible::before,.toast__action bds-button:focus-visible::before{border-color:var(--color-focus, #c226fb)}.toast__action__button{white-space:nowrap}@-webkit-keyframes toastAnimationFadeInFromRight{0%{opacity:0;right:-200px}50%{opacity:0.9;right:1px}100%{opacity:1}}@keyframes toastAnimationFadeInFromRight{0%{opacity:0;right:-200px}50%{opacity:0.9;right:1px}100%{opacity:1}}@-webkit-keyframes toastAnimationFadeInFromLeft{0%{opacity:0;left:-200px}50%{opacity:0.9;left:1px}100%{opacity:1}}@keyframes toastAnimationFadeInFromLeft{0%{opacity:0;left:-200px}50%{opacity:0.9;left:1px}100%{opacity:1}}@-webkit-keyframes toastAnimationFadeOut{0%{opacity:1}30%{max-height:60px}80%{opacity:0;max-height:30px}100%{max-height:0px}}@keyframes toastAnimationFadeOut{0%{opacity:1}30%{max-height:60px}80%{opacity:0;max-height:30px}100%{max-height:0px}}'}}]);