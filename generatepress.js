window._wpemojiSettings = {"baseUrl":"https:\/\/s.w.org\/images\/core\/emoji\/14.0.0\/72x72\/","ext":".png","svgUrl":"https:\/\/s.w.org\/images\/core\/emoji\/14.0.0\/svg\/","svgExt":".svg","source":{"concatemoji":"https:\/\/whatsgb.icu\/wp-includes\/js\/wp-emoji-release.min.js?ver=6.4.2"}};
/*! This file is auto-generated */
!function(i,n){var o,s,e;function c(e){try{var t={supportTests:e,timestamp:(new Date).valueOf()};sessionStorage.setItem(o,JSON.stringify(t))}catch(e){}}function p(e,t,n){e.clearRect(0,0,e.canvas.width,e.canvas.height),e.fillText(t,0,0);var t=new Uint32Array(e.getImageData(0,0,e.canvas.width,e.canvas.height).data),r=(e.clearRect(0,0,e.canvas.width,e.canvas.height),e.fillText(n,0,0),new Uint32Array(e.getImageData(0,0,e.canvas.width,e.canvas.height).data));return t.every(function(e,t){return e===r[t]})}function u(e,t,n){switch(t){case"flag":return n(e,"\ud83c\udff3\ufe0f\u200d\u26a7\ufe0f","\ud83c\udff3\ufe0f\u200b\u26a7\ufe0f")?!1:!n(e,"\ud83c\uddfa\ud83c\uddf3","\ud83c\uddfa\u200b\ud83c\uddf3")&&!n(e,"\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc65\udb40\udc6e\udb40\udc67\udb40\udc7f","\ud83c\udff4\u200b\udb40\udc67\u200b\udb40\udc62\u200b\udb40\udc65\u200b\udb40\udc6e\u200b\udb40\udc67\u200b\udb40\udc7f");case"emoji":return!n(e,"\ud83e\udef1\ud83c\udffb\u200d\ud83e\udef2\ud83c\udfff","\ud83e\udef1\ud83c\udffb\u200b\ud83e\udef2\ud83c\udfff")}return!1}function f(e,t,n){var r="undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?new OffscreenCanvas(300,150):i.createElement("canvas"),a=r.getContext("2d",{willReadFrequently:!0}),o=(a.textBaseline="top",a.font="600 32px Arial",{});return e.forEach(function(e){o[e]=t(a,e,n)}),o}function t(e){var t=i.createElement("script");t.src=e,t.defer=!0,i.head.appendChild(t)}"undefined"!=typeof Promise&&(o="wpEmojiSettingsSupports",s=["flag","emoji"],n.supports={everything:!0,everythingExceptFlag:!0},e=new Promise(function(e){i.addEventListener("DOMContentLoaded",e,{once:!0})}),new Promise(function(t){var n=function(){try{var e=JSON.parse(sessionStorage.getItem(o));if("object"==typeof e&&"number"==typeof e.timestamp&&(new Date).valueOf()<e.timestamp+604800&&"object"==typeof e.supportTests)return e.supportTests}catch(e){}return null}();if(!n){if("undefined"!=typeof Worker&&"undefined"!=typeof OffscreenCanvas&&"undefined"!=typeof URL&&URL.createObjectURL&&"undefined"!=typeof Blob)try{var e="postMessage("+f.toString()+"("+[JSON.stringify(s),u.toString(),p.toString()].join(",")+"));",r=new Blob([e],{type:"text/javascript"}),a=new Worker(URL.createObjectURL(r),{name:"wpTestEmojiSupports"});return void(a.onmessage=function(e){c(n=e.data),a.terminate(),t(n)})}catch(e){}c(n=f(s,u,p))}t(n)}).then(function(e){for(var t in e)n.supports[t]=e[t],n.supports.everything=n.supports.everything&&n.supports[t],"flag"!==t&&(n.supports.everythingExceptFlag=n.supports.everythingExceptFlag&&n.supports[t]);n.supports.everythingExceptFlag=n.supports.everythingExceptFlag&&!n.supports.flag,n.DOMReady=!1,n.readyCallback=function(){n.DOMReady=!0}}).then(function(){return e}).then(function(){var e;n.supports.everything||(n.readyCallback(),(e=n.source||{}).concatemoji?t(e.concatemoji):e.wpemoji&&e.twemoji&&(t(e.twemoji),t(e.wpemoji)))}))}((window,document),window._wpemojiSettings);

var smooth = {"elements":[".smooth-scroll","li.smooth-scroll a"],"duration":"800"};
window.Element&&!Element.prototype.closest&&(Element.prototype.closest=function(e){var t,n=(this.document||this.ownerDocument).querySelectorAll(e),o=this;do{for(t=n.length;0<=--t&&n.item(t)!==o;);}while(t<0&&(o=o.parentElement));return o}),function(){if("function"==typeof window.CustomEvent)return;function e(e,t){t=t||{bubbles:!1,cancelable:!1,detail:void 0};var n=document.createEvent("CustomEvent");return n.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),n}e.prototype=window.Event.prototype,window.CustomEvent=e}(),function(){for(var a=0,e=["ms","moz","webkit","o"],t=0;t<e.length&&!window.requestAnimationFrame;++t)window.requestAnimationFrame=window[e[t]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[e[t]+"CancelAnimationFrame"]||window[e[t]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(e,t){var n=(new Date).getTime(),o=Math.max(0,16-(n-a)),i=window.setTimeout(function(){e(n+o)},o);return a=n+o,i}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(e){clearTimeout(e)})}(),function(e,t){"function"==typeof define&&define.amd?define([],function(){return t(e)}):"object"==typeof exports?module.exports=t(e):e.SmoothScroll=t(e)}("undefined"!=typeof global?global:"undefined"!=typeof window?window:this,function(A){"use strict";var C={ignore:"[data-scroll-ignore]",header:null,topOnEmptyHash:!0,speed:500,clip:!0,offset:0,easing:"easeInOutCubic",customEasing:null,updateURL:!0,popstate:!0,emitEvents:!0},q=function(){for(var n={},e=function(e){for(var t in e)e.hasOwnProperty(t)&&(n[t]=e[t])},t=0;t<arguments.length;t++)e(arguments[t]);return n},c=function(t){var n;try{n=decodeURIComponent(t)}catch(e){n=t}return n},s=function(e){"#"===e.charAt(0)&&(e=e.substr(1));for(var t,n,o=String(e),i=o.length,a=-1,r="",c=o.charCodeAt(0);++a<i;){if(0===(t=o.charCodeAt(a)))throw new InvalidCharacterError("Invalid character: the input contains U+0000.");1<=t&&t<=31||127==t||0===a&&48<=t&&t<=57||1===a&&48<=t&&t<=57&&45===c?r+="\\"+t.toString(16)+" ":r+=128<=t||45===t||95===t||48<=t&&t<=57||65<=t&&t<=90||97<=t&&t<=122?o.charAt(a):"\\"+o.charAt(a)}try{n=decodeURIComponent("#"+r)}catch(e){n="#"+r}return n},O=function(){return Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight)},H=function(e){return e?(t=e,parseInt(A.getComputedStyle(t).height,10)+e.offsetTop):0;var t},I=function(e,t,n,o){if(t.emitEvents&&"function"==typeof A.CustomEvent){var i=new CustomEvent(e,{bubbles:!0,detail:{anchor:n,toggle:o}});document.dispatchEvent(i)}};return function(o,e){var v,i,w,b,t,S,E={};E.cancelScroll=function(e){cancelAnimationFrame(S),S=null,e||I("scrollCancel",v)},E.animateScroll=function(r,c,e){var s=q(v||C,e||{}),u="[object Number]"===Object.prototype.toString.call(r),t=u||!r.tagName?null:r;if(u||t){var l=A.pageYOffset;s.header&&!w&&(w=document.querySelector(s.header)),b||(b=H(w));var m,i,a,n,o,d=u?r:function(e,t,n,o){var i=0;if(e.offsetParent)for(;i+=e.offsetTop,e=e.offsetParent;);return i=Math.max(i-t-n,0),o&&(i=Math.min(i,O()-A.innerHeight)),i}(t,b,parseInt("function"==typeof s.offset?s.offset(r,c):s.offset,10),s.clip),f=d-l,h=O(),p=0,g=function(e,t){var n,o,i,a=A.pageYOffset;if(e==t||a==t||(l<t&&A.innerHeight+a)>=h)return E.cancelScroll(!0),o=t,i=u,0===(n=r)&&document.body.focus(),i||(n.focus(),document.activeElement!==n&&(n.setAttribute("tabindex","-1"),n.focus(),n.style.outline="none"),A.scrollTo(0,o)),I("scrollStop",s,r,c),!(S=m=null)},y=function(e){var t,n,o;m||(m=e),i=(p+=e-m)/parseInt(s.speed,10),a=l+f*(n=i=1<i?1:i,"easeInQuad"===(t=s).easing&&(o=n*n),"easeOutQuad"===t.easing&&(o=n*(2-n)),"easeInOutQuad"===t.easing&&(o=n<.5?2*n*n:(4-2*n)*n-1),"easeInCubic"===t.easing&&(o=n*n*n),"easeOutCubic"===t.easing&&(o=--n*n*n+1),"easeInOutCubic"===t.easing&&(o=n<.5?4*n*n*n:(n-1)*(2*n-2)*(2*n-2)+1),"easeInQuart"===t.easing&&(o=n*n*n*n),"easeOutQuart"===t.easing&&(o=1- --n*n*n*n),"easeInOutQuart"===t.easing&&(o=n<.5?8*n*n*n*n:1-8*--n*n*n*n),"easeInQuint"===t.easing&&(o=n*n*n*n*n),"easeOutQuint"===t.easing&&(o=1+--n*n*n*n*n),"easeInOutQuint"===t.easing&&(o=n<.5?16*n*n*n*n*n:1+16*--n*n*n*n*n),t.customEasing&&(o=t.customEasing(n)),o||n),A.scrollTo(0,Math.floor(a)),g(a,d)||(S=A.requestAnimationFrame(y),m=e)};0===A.pageYOffset&&A.scrollTo(0,0),n=r,o=s,u||history.pushState&&o.updateURL&&history.pushState({smoothScroll:JSON.stringify(o),anchor:n.id},document.title,n===document.documentElement?"#top":"#"+n.id),I("scrollStart",s,r,c),E.cancelScroll(!0),A.requestAnimationFrame(y)}};var n=function(e){if(!("matchMedia"in A&&A.matchMedia("(prefers-reduced-motion)").matches)&&0===e.button&&!e.metaKey&&!e.ctrlKey&&"closest"in e.target&&(i=e.target.closest(o))&&"a"===i.tagName.toLowerCase()&&!e.target.closest(v.ignore)&&i.hostname===A.location.hostname&&i.pathname===A.location.pathname&&/#/.test(i.href)){var t=s(c(i.hash)),n=v.topOnEmptyHash&&"#"===t?document.documentElement:document.querySelector(t);(n=n||"#top"!==t?n:document.documentElement)&&(e.preventDefault(),E.animateScroll(n,i))}},a=function(e){if(null!==history.state&&history.state.smoothScroll&&history.state.smoothScroll===JSON.stringify(v)&&history.state.anchor){var t=document.querySelector(s(c(history.state.anchor)));t&&E.animateScroll(t,null,{updateURL:!1})}},r=function(e){t||(t=setTimeout(function(){t=null,b=H(w)},66))};return E.destroy=function(){v&&(document.removeEventListener("click",n,!1),A.removeEventListener("resize",r,!1),A.removeEventListener("popstate",a,!1),E.cancelScroll(),S=t=b=w=i=v=null)},E.init=function(e){if(!("querySelector"in document&&"addEventListener"in A&&"requestAnimationFrame"in A&&"closest"in A.Element.prototype))throw"Smooth Scroll: This browser does not support the required JavaScript methods and browser APIs.";E.destroy(),v=q(C,e||{}),w=v.header?document.querySelector(v.header):null,b=H(w),document.addEventListener("click",n,!1),w&&A.addEventListener("resize",r,!1),v.updateURL&&v.popstate&&A.addEventListener("popstate",a,!1)},E.init(e),E}});var gpscroll=new SmoothScroll(smooth.elements.join(),{speed:smooth.duration,offset:function(e,t){var n=document.body,o=document.querySelector("#site-navigation"),i=document.querySelector("#sticky-navigation"),a=document.querySelector("#mobile-header"),r=document.querySelector(".menu-toggle"),c=0;return a&&(a.offsetWidth||a.offsetHeight||a.getClientRects().length)?n.classList.contains("mobile-header-sticky")&&(c+=a.clientHeight):r&&(r.offsetWidth||r.offsetHeight||r.getClientRects().length)?(n.classList.contains("both-sticky-menu")||n.classList.contains("mobile-sticky-menu"))&&(i?c+=i.clientHeight:o&&(c+=o.clientHeight)):(n.classList.contains("both-sticky-menu")||n.classList.contains("desktop-sticky-menu"))&&(i?c+=i.clientHeight:o&&(c+=o.clientHeight)),c}});
var generatepressMenu = {"toggleOpenedSubMenus":"1","openSubMenuLabel":"Open Sub-Menu","closeSubMenuLabel":"Close Sub-Menu"};

!function(){"use strict";if("querySelector"in document&&"addEventListener"in window){Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector),Element.prototype.closest||(Element.prototype.closest=function(e){var t=this;if(!document.documentElement.contains(this))return null;do{if(t.matches(e))return t}while(null!==(t=t.parentElement));return null});var o=function(t){return Array.prototype.filter.call(t.parentNode.children,function(e){return e!==t})},e=document.querySelectorAll(".menu-toggle"),t=document.querySelectorAll("nav .dropdown-menu-toggle"),n=document.querySelectorAll("nav .main-nav ul a"),l=document.querySelector(".mobile-menu-control-wrapper"),r=document.body,c=document.documentElement,u=function(e){if(e&&r.classList.contains("dropdown-hover")){var t=e.querySelectorAll("li.menu-item-has-children");for(p=0;p<t.length;p++)t[p].querySelector(".dropdown-menu-toggle").removeAttribute("tabindex"),t[p].querySelector(".dropdown-menu-toggle").setAttribute("role","presentation"),t[p].querySelector(".dropdown-menu-toggle").removeAttribute("aria-expanded"),t[p].querySelector(".dropdown-menu-toggle").removeAttribute("aria-label")}},a=function(e){"false"!==e.getAttribute("aria-expanded")&&e.getAttribute("aria-expanded")?(e.setAttribute("aria-expanded","false"),e.setAttribute("aria-label",generatepressMenu.openSubMenuLabel)):(e.setAttribute("aria-expanded","true"),e.setAttribute("aria-label",generatepressMenu.closeSubMenuLabel))},s=function(e,t){var n,s,o="";(o=(t=t||this).getAttribute("data-nav")?document.getElementById(t.getAttribute("data-nav")):document.getElementById(t.closest("nav").getAttribute("id")))&&(n=!1,t.closest(".mobile-menu-control-wrapper")&&(n=!0),s=o.getElementsByTagName("ul")[0],o.classList.contains("toggled")?(o.classList.remove("toggled"),c.classList.remove("mobile-menu-open"),s&&s.setAttribute("aria-hidden","true"),t.setAttribute("aria-expanded","false"),(n||l&&o.classList.contains("main-navigation"))&&l.classList.remove("toggled"),u(s)):(o.classList.add("toggled"),c.classList.add("mobile-menu-open"),s&&s.setAttribute("aria-hidden","false"),t.setAttribute("aria-expanded","true"),n?(l.classList.add("toggled"),l.querySelector(".search-item")&&l.querySelector(".search-item").classList.contains("active")&&l.querySelector(".search-item").click()):l&&o.classList.contains("main-navigation")&&l.classList.add("toggled"),function(e){if(e&&r.classList.contains("dropdown-hover")){var t=e.querySelectorAll("li.menu-item-has-children");for(p=0;p<t.length;p++)t[p].querySelector(".dropdown-menu-toggle").setAttribute("tabindex","0"),t[p].querySelector(".dropdown-menu-toggle").setAttribute("role","button"),t[p].querySelector(".dropdown-menu-toggle").setAttribute("aria-expanded","false"),t[p].querySelector(".dropdown-menu-toggle").setAttribute("aria-label",generatepressMenu.openSubMenuLabel)}}(s)))};for(p=0;p<e.length;p++)e[p].addEventListener("click",s,!1);var i=function(e,t){if(((t=t||this).closest("nav").classList.contains("toggled")||c.classList.contains("slide-opened"))&&!r.classList.contains("dropdown-click")){e.preventDefault();var n=t.closest("li");if(a(n.querySelector(".dropdown-menu-toggle")),t=n.querySelector(".sub-menu")?n.querySelector(".sub-menu"):n.querySelector(".children"),generatepressMenu.toggleOpenedSubMenus){var s=o(n);for(p=0;p<s.length;p++)s[p].classList.contains("sfHover")&&(s[p].classList.remove("sfHover"),s[p].querySelector(".toggled-on").classList.remove("toggled-on"),a(s[p].querySelector(".dropdown-menu-toggle")))}n.classList.toggle("sfHover"),t.classList.toggle("toggled-on")}e.stopPropagation()};for(p=0;p<t.length;p++)t[p].addEventListener("click",i,!1),t[p].addEventListener("keypress",function(e){"Enter"!==e.key&&" "!==e.key||i(e,this)},!1);var d=function(){var e=document.querySelectorAll(".toggled, .has-active-search");for(p=0;p<e.length;p++){var t=e[p].querySelector(".menu-toggle");if((t=l&&!t.closest("nav").classList.contains("mobile-menu-control-wrapper")?l.querySelector(".menu-toggle"):t)&&null===t.offsetParent){if(e[p].classList.contains("toggled")){var n,s,o,r=!1;if((r=e[p].classList.contains("mobile-menu-control-wrapper")?!0:r)||(s=(n=e[p].getElementsByTagName("ul")[0])?n.getElementsByTagName("li"):[],o=n?n.getElementsByTagName("ul"):[]),document.activeElement.blur(),e[p].classList.remove("toggled"),c.classList.remove("mobile-menu-open"),t.setAttribute("aria-expanded","false"),!r){for(var a=0;a<s.length;a++)s[a].classList.remove("sfHover");for(var i=0;i<o.length;i++)o[i].classList.remove("toggled-on");n&&n.removeAttribute("aria-hidden")}u(e[p])}l.querySelector(".search-item")&&l.querySelector(".search-item").classList.contains("active")&&l.querySelector(".search-item").click()}}};if(window.addEventListener("resize",d,!1),window.addEventListener("orientationchange",d,!1),r.classList.contains("dropdown-hover"))for(p=0;p<n.length;p++)n[p].addEventListener("click",function(e){var t;this.hostname!==window.location.hostname&&document.activeElement.blur(),(this.closest("nav").classList.contains("toggled")||c.classList.contains("slide-opened"))&&("#"!==(t=this.getAttribute("href"))&&""!==t||(e.preventDefault(),(e=this.closest("li")).classList.toggle("sfHover"),(e=e.querySelector(".sub-menu"))&&e.classList.toggle("toggled-on")))},!1);if(r.classList.contains("dropdown-hover")){for(var g=document.querySelectorAll(".menu-bar-items .menu-bar-item > a"),m=function(){if(!this.closest("nav").classList.contains("toggled")&&!this.closest("nav").classList.contains("slideout-navigation"))for(var e=this;-1===e.className.indexOf("main-nav");)"li"===e.tagName.toLowerCase()&&e.classList.toggle("sfHover"),e=e.parentElement},v=function(){if(!this.closest("nav").classList.contains("toggled")&&!this.closest("nav").classList.contains("slideout-navigation"))for(var e=this;-1===e.className.indexOf("menu-bar-items");)e.classList.contains("menu-bar-item")&&e.classList.toggle("sfHover"),e=e.parentElement},p=0;p<n.length;p++)n[p].addEventListener("focus",m),n[p].addEventListener("blur",m);for(p=0;p<g.length;p++)g[p].addEventListener("focus",v),g[p].addEventListener("blur",v)}if("ontouchend"in document.documentElement&&document.body.classList.contains("dropdown-hover")){var f=document.querySelectorAll(".sf-menu .menu-item-has-children");for(p=0;p<f.length;p++)f[p].addEventListener("touchend",function(e){if(!(this.closest("nav").classList.contains("toggled")||1!==e.touches.length&&0!==e.touches.length||(e.stopPropagation(),this.classList.contains("sfHover")))){e.target!==this&&e.target.parentNode!==this&&!e.target.parentNode.parentNode||e.preventDefault();var e=this.closest("li"),t=o(e);for(p=0;p<t.length;p++)t[p].classList.contains("sfHover")&&t[p].classList.remove("sfHover");this.classList.add("sfHover");var n,s=this;document.addEventListener("touchend",n=function(e){e.stopPropagation(),s.classList.remove("sfHover"),document.removeEventListener("touchend",n)})}})}}}();
!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=73)}({11:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r},e.exports.default=e.exports,e.exports.__esModule=!0},14:function(e,t,n){var r=n(11);e.exports=function(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}},e.exports.default=e.exports,e.exports.__esModule=!0},22:function(e,t,n){var r=n(11);e.exports=function(e){if(Array.isArray(e))return r(e)},e.exports.default=e.exports,e.exports.__esModule=!0},23:function(e,t){e.exports=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.default=e.exports,e.exports.__esModule=!0},24:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.default=e.exports,e.exports.__esModule=!0},6:function(e,t,n){var r=n(22),o=n(23),a=n(14),i=n(24);e.exports=function(e){return r(e)||o(e)||a(e)||i()},e.exports.default=e.exports,e.exports.__esModule=!0},73:function(e,t,n){"use strict";n.r(t);var r=n(6),o=n.n(r),a=function(e){var t=e.targetModal,n=(e.openTrigger,e.triggers),r=void 0===n?[]:n,a=document.getElementById(t);if(a){var i="data-gpmodal-close",u="gp-modal--open",s="";r.length>0&&function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.filter(Boolean).forEach((function(e){e.addEventListener("click",(function(e){e.preventDefault(),l()})),e.addEventListener("keydown",(function(e){" "!==e.key&&"Enter"!==e.key&&"Spacebar"!==e.key||(e.preventDefault(),l())}))}))}.apply(void 0,o()(r))}function l(){a.classList.add("gp-modal--transition"),s=document.activeElement,a.classList.add(u),d("disable"),a.addEventListener("touchstart",f),a.addEventListener("click",f),document.addEventListener("keydown",p),function(){var e=v();if(0!==e.length){var t=e.filter((function(e){return!e.hasAttribute(i)}));t.length>0&&t[0].focus(),0===t.length&&e[0].focus()}}(),setTimeout((function(){return a.classList.remove("gp-modal--transition")}),100)}function c(){a.classList.add("gp-modal--transition"),a.removeEventListener("touchstart",f),a.removeEventListener("click",f),document.removeEventListener("keydown",p),d("enable"),s&&s.focus&&s.focus(),a.classList.remove(u),setTimeout((function(){return a.classList.remove("gp-modal--transition")}),500)}function d(e){var t=document.querySelector("body");switch(e){case"enable":Object.assign(t.style,{overflow:""});break;case"disable":Object.assign(t.style,{overflow:"hidden"})}}function f(e){(e.target.hasAttribute(i)||e.target.parentNode.hasAttribute(i))&&(e.preventDefault(),e.stopPropagation(),c())}function p(e){27===e.keyCode&&c(),9===e.keyCode&&function(e){var t=v();if(0!==t.length){var n=(t=t.filter((function(e){return null!==e.offsetParent}))).indexOf(document.activeElement);e.shiftKey&&0===n&&(t[t.length-1].focus(),e.preventDefault()),!e.shiftKey&&t.length>0&&n===t.length-1&&(t[0].focus(),e.preventDefault())}}(e)}function v(){var e=a.querySelectorAll(["a[href]","area[href]",'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',"select:not([disabled]):not([aria-hidden])","textarea:not([disabled]):not([aria-hidden])","button:not([disabled]):not([aria-hidden])","iframe","object","embed","[contenteditable]",'[tabindex]:not([tabindex^="-"])']);return Array.apply(void 0,o()(e))}},i=Object.assign({},{openTrigger:"data-gpmodal-trigger"}),u=o()(document.querySelectorAll("[".concat(i.openTrigger,"]"))).reduce((function(e,t){var n=t.attributes[i.openTrigger].value;return e[n]=e[n]||[],e[n].push(t),e}),[]);for(var s in u){var l=u[s];i.targetModal=s,i.triggers=o()(l),new a(i)}}});
"use strict";

function convertToPixels(amount, unit) {
  return unit === "%" ? amount / 100 * window.innerWidth : amount;
}
function togglePanel(target) {
  var topPadding = 0;
  var topPaddingUnit = "";
  var bottomPadding = 0;
  var bottomPaddingUnit = "";
  var indicator = target.querySelector(".wp-block-ub-content-toggle-accordion-state-indicator");
  var panelContent = target.nextElementSibling;
  var toggleContainer = target.parentElement.parentElement;
  if (panelContent.classList.contains("ub-hide")) {
    var panelStyle = getComputedStyle(panelContent);
    var topUnitMatch = /[^\d.]/g.exec(panelStyle.paddingTop);
    var bottomUnitMatch = /[^\d.]/g.exec(panelStyle.paddingBottom);
    topPadding = Number(panelStyle.paddingTop.slice(0, topUnitMatch.index));
    topPaddingUnit = panelStyle.paddingTop.slice(topUnitMatch.index);
    bottomPadding = Number(panelStyle.paddingBottom.slice(0, bottomUnitMatch.index));
    bottomPaddingUnit = panelStyle.paddingBottom.slice(bottomUnitMatch.index);
    panelContent.classList.remove("ub-hide");
    panelContent.classList.add("ub-hiding");
    if ("showonlyone" in toggleContainer.dataset && toggleContainer.dataset.showonlyone) {
      var siblingToggles = Array.prototype.slice.call(toggleContainer.children).map(function (p) {
        return p.children[0];
      }).filter(function (p) {
        return p !== target;
      });
      siblingToggles.forEach(function (siblingToggle) {
        var siblingContent = siblingToggle.nextElementSibling;
        var siblingIndicator = siblingToggle.querySelector(".wp-block-ub-content-toggle-accordion-state-indicator");
        if (!siblingContent.classList.contains("ub-hide")) {
          if (siblingIndicator) siblingIndicator.classList.remove("open");
          siblingContent.classList.add("ub-toggle-transition");
          siblingContent.style.height = "".concat(siblingContent.scrollHeight, "px");
          setTimeout(function () {
            siblingContent.classList.add("ub-hiding");
            siblingContent.style.height = "";
          }, 20);
        }
      });
    }
  } else {
    panelContent.style.height = getComputedStyle(panelContent).height;
  }
  panelContent.classList.add("ub-toggle-transition");
  if (indicator) indicator.classList.toggle("open");
  setTimeout(function () {
    //delay is needed for the animation to run properly
    if (panelContent.classList.contains("ub-hiding")) {
      var convertedTop = convertToPixels(topPadding, topPaddingUnit);
      var convertedBottom = convertToPixels(bottomPadding, bottomPaddingUnit);
      Object.assign(panelContent.style, {
        height: "".concat(panelContent.scrollHeight + convertedTop + convertedBottom - (topPaddingUnit === "%" || bottomPaddingUnit === "%" ? panelContent.parentElement.scrollHeight : 0), "px"),
        paddingTop: "".concat(convertedTop, "px"),
        paddingBottom: "".concat(convertedBottom, "px")
      });
      Array.prototype.slice.call(document.getElementsByClassName("ub_image_slider")).forEach(function (slider) {
        var swiper = new Swiper("#".concat(slider.id), JSON.parse(slider.dataset.swiperData));
      });
      setTimeout(function () {
        window.dispatchEvent(new Event("resize"));
      }, 100);
    } else {
      panelContent.classList.add("ub-hiding");
      panelContent.style.height = "";
    }
  }, 20);
  Array.prototype.slice.call(panelContent.querySelectorAll(".wp-block-embed iframe")).forEach(function (embeddedContent) {
    embeddedContent.style.removeProperty("width");
    embeddedContent.style.removeProperty("height");
  });
}
Array.prototype.slice.call(document.getElementsByClassName("wp-block-ub-content-toggle")).forEach(function (toggleContainer) {
  var toggleHeads = Array.prototype.slice.call(toggleContainer.children).map(function (toggle) {
    return toggle.children[0];
  }).filter(function (toggle) {
    return toggle && toggle.classList.contains("wp-block-ub-content-toggle-accordion-title-wrap");
  });
  toggleHeads.forEach(function (toggleHead, i) {
    toggleHead.addEventListener("keydown", function (e) {
      if (e.key === "ArrowUp" && i > 0) {
        e.preventDefault();
        toggleHeads[i - 1].focus();
      }
      if (e.key === "ArrowDown" && i < toggleHeads.length - 1) {
        e.preventDefault();
        toggleHeads[i + 1].focus();
      }
      if ([" ", "Enter"].indexOf(e.key) > -1) {
        e.preventDefault();
        togglePanel(toggleHead);
      }
      if (e.key === "Home" && i > 0) {
        e.preventDefault();
        toggleHeads[0].focus();
      }
      if (e.key === "End" && i < toggleHeads.length - 1) {
        e.preventDefault();
        toggleHeads[toggleHeads.length - 1].focus();
      }
    });
  });
  if (!toggleContainer.hasAttribute("data-preventcollapse")) {
    var parentIsHidden = false;
    var parentClassIsHidden = false;
    var targetElement = toggleContainer;
    while (!(parentIsHidden || parentClassIsHidden) && targetElement.parentElement.tagName !== "BODY") {
      targetElement = targetElement.parentElement;
      if (targetElement.style.display === "none") {
        parentIsHidden = true;
      }
      if (getComputedStyle(targetElement).display === "none") {
        parentClassIsHidden = true;
      }
    }
    if (parentClassIsHidden || parentIsHidden) {
      toggleContainer.parentElement.style.setProperty("display", "block",
      //make the parent block display to give way for height measurements
      "important" //just in case blocks from other plugins use !important
      );
    }
    Array.prototype.slice.call(toggleContainer.children).map(function (p) {
      return p.children[0];
    }).filter(function (toggle) {
      return toggle && toggle.classList.contains("wp-block-ub-content-toggle-accordion-title-wrap");
    }).forEach(function (instance) {
      var panelContent = instance.nextElementSibling;
      var panelId = instance.parentElement.getAttribute("id");
      var hash = location.hash.substring(1);
      if (panelId && panelId === hash) {
        togglePanel(instance);
      }
      instance.addEventListener("click", function (e) {
        e.stopImmediatePropagation();
        togglePanel(instance);
      });
      panelContent.addEventListener("transitionend", function () {
        panelContent.classList.remove("ub-toggle-transition");
        panelContent.setAttribute("aria-expanded", panelContent.offsetHeight !== 0);
        if (panelContent.offsetHeight === 0) {
          panelContent.classList.add("ub-hide");
        } else {
          Object.assign(panelContent.style, {
            height: "",
            paddingTop: "",
            paddingBottom: ""
          });
        }
        panelContent.classList.remove("ub-hiding");
      });
      panelContent.removeAttribute("style");
    });

    //hide the parent element again;
    if (parentIsHidden) {
      toggleContainer.parentElement.style.display = "none";
    }
    if (parentClassIsHidden) {
      toggleContainer.parentElement.style.display = "";
    }
  }
});
document.addEventListener("DOMContentLoaded", function () {
  Array.prototype.slice.call(document.getElementsByClassName("wp-block-ub-content-toggle")).forEach(function (toggleContainer) {
    if (window.innerWidth < 700 && JSON.parse(toggleContainer.dataset.mobilecollapse)) {
      Array.prototype.slice.call(toggleContainer.children).forEach(function (child) {
        var panel = child.children[0].nextElementSibling;
        if (!panel.classList.contains("ub-hide")) {
          togglePanel(child.children[0]);
        }
      });
    }
  });
});

!function(t){"function"==typeof define&&define.amd?define(["jquery"],t):t("object"==typeof module&&module.exports?require("jquery"):jQuery)}(function(t){function e(t){return t.replace(/(:|\.|\/)/g,"\\$1")}var o="1.6.0",i={},l={exclude:[],excludeWithin:[],offset:0,direction:"top",delegateSelector:null,scrollElement:null,scrollTarget:null,beforeScroll:function(){},afterScroll:function(){},easing:"swing",speed:400,autoCoefficient:2,preventDefault:!0},s=function(e){var o=[],i=!1,l=e.dir&&"left"===e.dir?"scrollLeft":"scrollTop";return this.each(function(){var e=t(this);return this!==document&&this!==window?!document.scrollingElement||this!==document.documentElement&&this!==document.body?void(e[l]()>0?o.push(this):(e[l](1),i=e[l]()>0,i&&o.push(this),e[l](0))):(o.push(document.scrollingElement),!1):void 0}),o.length||this.each(function(){"BODY"===this.nodeName&&(o=[this])}),"first"===e.el&&o.length>1&&(o=[o[0]]),o};t.fn.extend({scrollable:function(t){var e=s.call(this,{dir:t});return this.pushStack(e)},firstScrollable:function(t){var e=s.call(this,{el:"first",dir:t});return this.pushStack(e)},smoothScroll:function(o,i){if(o=o||{},"options"===o)return i?this.each(function(){var e=t(this),o=t.extend(e.data("ssOpts")||{},i);t(this).data("ssOpts",o)}):this.first().data("ssOpts");var l=t.extend({},t.fn.smoothScroll.defaults,o),s=function(o){var i=this,s=t(this),n=t.extend({},l,s.data("ssOpts")||{}),c=l.exclude,a=n.excludeWithin,r=0,h=0,u=!0,d={},p=t.smoothScroll.filterPath(location.pathname),f=t.smoothScroll.filterPath(i.pathname),m=location.hostname===i.hostname||!i.hostname,g=n.scrollTarget||f===p,v=e(i.hash);if(n.scrollTarget||m&&g&&v){for(;u&&r<c.length;)s.is(e(c[r++]))&&(u=!1);for(;u&&h<a.length;)s.closest(a[h++]).length&&(u=!1)}else u=!1;u&&(n.preventDefault&&o.preventDefault(),t.extend(d,n,{scrollTarget:n.scrollTarget||v,link:i}),t.smoothScroll(d))};return null!==o.delegateSelector?this.undelegate(o.delegateSelector,"click.smoothscroll").delegate(o.delegateSelector,"click.smoothscroll",s):this.unbind("click.smoothscroll").bind("click.smoothscroll",s),this}}),t.smoothScroll=function(e,o){if("options"===e&&"object"==typeof o)return t.extend(i,o);var l,s,n,c,a,r=0,h="offset",u="scrollTop",d={},p={};"number"==typeof e?(l=t.extend({link:null},t.fn.smoothScroll.defaults,i),n=e):(l=t.extend({link:null},t.fn.smoothScroll.defaults,e||{},i),l.scrollElement&&(h="position","static"===l.scrollElement.css("position")&&l.scrollElement.css("position","relative"))),u="left"===l.direction?"scrollLeft":u,l.scrollElement?(s=l.scrollElement,/^(?:HTML|BODY)$/.test(s[0].nodeName)||(r=s[u]())):s=t("html, body").firstScrollable(l.direction),l.beforeScroll.call(s,l),n="number"==typeof e?e:o||t(l.scrollTarget)[h]()&&t(l.scrollTarget)[h]()[l.direction]||0,d[u]=n+r+l.offset,c=l.speed,"auto"===c&&(a=Math.abs(d[u]-s[u]()),c=a/l.autoCoefficient),p={duration:c,easing:l.easing,complete:function(){l.afterScroll.call(l.link,l)}},l.step&&(p.step=l.step),s.length?s.stop().animate(d,p):l.afterScroll.call(l.link,l)},t.smoothScroll.version=o,t.smoothScroll.filterPath=function(t){return t=t||"",t.replace(/^\//,"").replace(/(?:index|default).[a-zA-Z]{3,4}$/,"").replace(/\/$/,"")},t.fn.smoothScroll.defaults=l}),jQuery.cookie=function(t,e,o){if(arguments.length>1&&"[object Object]"!==String(e)){if(o=jQuery.extend({},o),(null===e||void 0===e)&&(o.expires=-1),"number"==typeof o.expires){var i=o.expires,l=o.expires=new Date;l.setDate(l.getDate()+i)}return e=String(e),document.cookie=[encodeURIComponent(t),"=",o.raw?e:encodeURIComponent(e),o.expires?"; expires="+o.expires.toUTCString():"",o.path?"; path="+o.path:"",o.domain?"; domain="+o.domain:"",o.secure?"; secure":""].join("")}o=e||{};var s,n=o.raw?function(t){return t}:decodeURIComponent;return(s=new RegExp("(?:^|; )"+encodeURIComponent(t)+"=([^;]*)").exec(document.cookie))?n(s[1]):null},jQuery(document).ready(function(t){if("undefined"!=typeof tocplus){if(t.fn.shrinkTOCWidth=function(){t(this).css({width:"auto",display:"table"}),/MSIE 7\./.test(navigator.userAgent)&&t(this).css("width","")},1==tocplus.smooth_scroll){var e=hostname=pathname=qs=hash=null;t("body a").click(function(){if(hostname=t(this).prop("hostname"),pathname=t(this).prop("pathname"),qs=t(this).prop("search"),hash=t(this).prop("hash"),pathname.length>0&&"/"!=pathname.charAt(0)&&(pathname="/"+pathname),window.location.hostname==hostname&&window.location.pathname==pathname&&window.location.search==qs&&""!==hash){var o=hash.replace(/([ !"$%&'()*+,.\/:;<=>?@[\]^`{|}~])/g,"\\$1");t(o).length>0?e=hash:(anchor=hash,anchor=anchor.replace("#",""),e='a[name="'+anchor+'"]',0==t(e).length&&(e="")),offset="undefined"!=typeof tocplus.smooth_scroll_offset?-1*tocplus.smooth_scroll_offset:t("#wpadminbar").length>0&&t("#wpadminbar").is(":visible")?-30:0,e&&t.smoothScroll({scrollTarget:e,offset:offset})}})}if("undefined"!=typeof tocplus.visibility_show){var o="undefined"!=typeof tocplus.visibility_hide_by_default?!0:!1;if(t.cookie)var i=t.cookie("tocplus_hidetoc")?tocplus.visibility_show:tocplus.visibility_hide;else var i=tocplus.visibility_hide;o&&(i=i==tocplus.visibility_hide?tocplus.visibility_show:tocplus.visibility_hide),t("#toc_container p.toc_title").append(' <span class="toc_toggle"><span class="toc_brackets">[</span><a href="#">'+i+'</a><span class="toc_brackets">]</span></span>'),i==tocplus.visibility_show&&(t("ul.toc_list").hide(),t("#toc_container").addClass("contracted").shrinkTOCWidth()),t("span.toc_toggle a").click(function(e){switch(e.preventDefault(),t(this).html()){case t("<div/>").html(tocplus.visibility_hide).text():t(this).html(tocplus.visibility_show),t.cookie&&(o?t.cookie("tocplus_hidetoc",null,{path:"/"}):t.cookie("tocplus_hidetoc","1",{expires:30,path:"/"})),t("ul.toc_list").hide("fast"),t("#toc_container").addClass("contracted").shrinkTOCWidth();break;case t("<div/>").html(tocplus.visibility_show).text():default:t(this).html(tocplus.visibility_hide),t.cookie&&(o?t.cookie("tocplus_hidetoc","1",{expires:30,path:"/"}):t.cookie("tocplus_hidetoc",null,{path:"/"})),t("#toc_container").css("width",tocplus.width).removeClass("contracted"),t("ul.toc_list").show("fast")}})}}});
