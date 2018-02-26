(function(){function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s}return e})()({1:[function(require,module,exports){
'use strict';

var _component = require('./component/app/component.js');

var _component2 = _interopRequireDefault(_component);

var _component3 = require('./component/home/component.js');

var _component4 = _interopRequireDefault(_component3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Main = {
    init: function init() {
        document.addEventListener('DOMContentLoaded', this.onLoad.bind(this));
    },
    onLoad: function onLoad() {
        var router = new Router(document.querySelector('#main-router'));
    }
}.init();

},{"./component/app/component.js":2,"./component/home/component.js":3}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = new Component({
  name: 'app',
  data: {},
  methods: {
    mounted: function mounted() {
      console.log('mounted app');
    },
    unmounted: function unmounted() {},
    updated: function updated() {}
  }
});

},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = new Component({
  name: 'home',
  data: {
    message: 'hello world'
  },
  methods: {
    getMessage: function getMessage() {
      return this.message;
    },
    mounted: function mounted() {
      console.log('here');
    },
    unmounted: function unmounted() {},
    updated: function updated() {
      this.element.querySelector('h1').textContent = this.message;
    }
  }
});

},{}]},{},[1]);
