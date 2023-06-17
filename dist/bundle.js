/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/scripts/navSwitch.ts
function _typeof(a){"@babel/helpers - typeof";return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},_typeof(a)}function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _defineProperties(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,_toPropertyKey(c.key),c)}function _createClass(a,b,c){return b&&_defineProperties(a.prototype,b),c&&_defineProperties(a,c),Object.defineProperty(a,"prototype",{writable:!1}),a}function _toPropertyKey(a){var b=_toPrimitive(a,"string");return"symbol"===_typeof(b)?b:b+""}function _toPrimitive(a,b){if("object"!==_typeof(a)||null===a)return a;var c=a[Symbol.toPrimitive];if(c!==void 0){var d=c.call(a,b||"default");if("object"!==_typeof(d))return d;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===b?String:Number)(a)}var NavSwitcher=/*#__PURE__*/function(){function a(){_classCallCheck(this,a),this.headerDiv=document.querySelector(".main-header"),this.sectionTopDiv=document.querySelector(".section-top")}return _createClass(a,[{key:"init",value:function init(){this.addObserver()}},{key:"addObserver",value:function addObserver(){var a=this,b=new IntersectionObserver(function(b){var c=b[0];c.isIntersecting?a.headerDiv.classList.remove("main-header--scrolled"):a.headerDiv.classList.add("main-header--scrolled")},{threshold:.8});b.observe(this.sectionTopDiv)}}]),a}();
;// CONCATENATED MODULE: ./src/index.js
// import { Splide } from '@splidejs/splide';
// new Splide('.splide', {
// 	autoplay: true,
// 	interval: 5000,
// 	type: 'loop',
// }).mount();
new NavSwitcher().init();
/******/ })()
;