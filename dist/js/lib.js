"use strict";var _createClass=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}();function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Array.prototype.forEach||(Array.prototype.forEach=function(t,e){if("function"!=typeof t)throw new TypeError(t+" is not a function");e=e||this;for(var n=0,o=this.length;n!==o;++n)t.call(e,this[n],n,this)}),NodeList.prototype.forEach=Array.prototype.forEach,window.MutationObserver=window.MutationObserver||function(t){function e(t){this.i=[],this.m=t}function n(e){var n,o={type:null,target:null,addedNodes:[],removedNodes:[],previousSibling:null,nextSibling:null,attributeName:null,attributeNamespace:null,oldValue:null};for(n in e)o[n]!==t&&e[n]!==t&&(o[n]=e[n]);return o}function o(e,o,a,r){for(var i,u,c={},s=o.attributes,d=s.length;d--;)u=(i=s[d]).name,r&&r[u]===t||(l(o,i)!==a[u]&&e.push(n({type:"attributes",target:o,attributeName:u,oldValue:a[u],attributeNamespace:i.namespaceURI})),c[u]=!0);for(u in a)c[u]||e.push(n({target:o,type:"attributes",attributeName:u,oldValue:a[u]}))}function a(t,e){var n=!0;return function t(o){var a={node:o};return!e.a||3!==o.nodeType&&8!==o.nodeType?(e.b&&n&&1===o.nodeType&&(a.b=i(o.attributes,function(t,n){return e.f&&!e.f[n.name]||(t[n.name]=l(o,n)),t})),n&&(e.c||e.a||e.b&&e.g)&&(a.c=function(t,e){for(var n=[],o=0;o<t.length;o++)n[o]=e(t[o],o,t);return n}(o.childNodes,t)),n=e.g):a.a=o.nodeValue,a}(t)}function r(t){try{return t.id||(t.mo_id=t.mo_id||s++)}catch(e){try{return t.nodeValue}catch(t){return s++}}}function i(t,e){for(var n={},o=0;o<t.length;o++)n=e(n,t[o],o,t);return n}function u(t,e,n,o){for(;n<t.length;n++)if((o?t[n][o]:t[n])===e)return n;return-1}e._period=30,e.prototype={observe:function(c,l){for(var s={b:!!(l.attributes||l.attributeFilter||l.attributeOldValue),c:!!l.childList,g:!!l.subtree,a:!(!l.characterData&&!l.characterDataOldValue)},d=this.i,h=0;h<d.length;h++)d[h].s===c&&d.splice(h,1);var f,p,m,b;l.attributeFilter&&(s.f=i(l.attributeFilter,function(t,e){return t[e]=!0,t})),d.push({s:c,o:(p=c,m=s,b=a(p,m),function(e){var i,c=e.length;m.a&&3===p.nodeType&&p.nodeValue!==b.a&&e.push(new n({type:"characterData",target:p,oldValue:b.a})),m.b&&b.b&&o(e,p,b.b,m.f),(m.c||m.g)&&(i=function(e,a,i,c){function l(t,a,r,i,u){var l,d,h,f=t.length-1;for(u=-~((f-u)/2);h=t.pop();)l=r[h.j],d=i[h.l],c.c&&u&&Math.abs(h.j-h.l)>=f&&(e.push(n({type:"childList",target:a,addedNodes:[l],removedNodes:[l],nextSibling:l.nextSibling,previousSibling:l.previousSibling})),u--),c.b&&d.b&&o(e,l,d.b,c.f),c.a&&3===l.nodeType&&l.nodeValue!==d.a&&e.push(n({type:"characterData",target:l,oldValue:d.a})),c.g&&s(l,d)}function s(a,i){for(var h,f,p,m,b,v=a.childNodes,g=i.c,T=v.length,y=g?g.length:0,C=0,N=0,E=0;N<T||E<y;)(m=v[N])===(b=(p=g[E])&&p.node)?(c.b&&p.b&&o(e,m,p.b,c.f),c.a&&p.a!==t&&m.nodeValue!==p.a&&e.push(n({type:"characterData",target:m,oldValue:p.a})),f&&l(f,a,v,g,C),c.g&&(m.childNodes.length||p.c&&p.c.length)&&s(m,p),N++,E++):(d=!0,h||(h={},f=[]),m&&(h[p=r(m)]||(h[p]=!0,-1===(p=u(g,m,E,"node"))?c.c&&(e.push(n({type:"childList",target:a,addedNodes:[m],nextSibling:m.nextSibling,previousSibling:m.previousSibling})),C++):f.push({j:N,l:p})),N++),b&&b!==v[N]&&(h[p=r(b)]||(h[p]=!0,-1===(p=u(v,b,N))?c.c&&(e.push(n({type:"childList",target:i.node,removedNodes:[b],nextSibling:g[E+1],previousSibling:g[E-1]})),C--):f.push({j:p,l:E})),E++));f&&l(f,a,v,g,C)}var d;return s(p,b),d}(e,0,0,m)),(i||e.length!==c)&&(b=a(p,m))})}),this.h||(f=this,function t(){var n=f.takeRecords();n.length&&f.m(n,f),f.h=setTimeout(t,e._period)}())},takeRecords:function(){for(var t=[],e=this.i,n=0;n<e.length;n++)e[n].o(t);return t},disconnect:function(){this.i=[],clearTimeout(this.h),this.h=null}};var c=document.createElement("i");c.style.top=0;var l=(c="null"!=c.attributes.style.value)?function(t,e){return e.value}:function(t,e){return"style"!==e.name?e.value:t.style.cssText},s=1;return e}(void 0);var ComponentManager={componentCollection:{},instanceCollection:[],init:function(){document.addEventListener("DOMContentLoaded",this.onLoad.bind(this))},onLoad:function(){this.generateComponents(),this.observe()},generateComponents:function(){for(var t in this.componentCollection){var e=this.componentCollection[t].obj,n=this.componentCollection[t].template;this.createAllInstance(e,n)}},observe:function(){var t=this;new MutationObserver(function(e){e.forEach(function(e){e.removedNodes.length&&e.removedNodes.forEach(function(t){t.component&&t.component.unmounted()}),e.addedNodes.length&&e.addedNodes.forEach(function(e){var n=e.getAttribute(""+Component.CONST.COMPONENT_ATTRIBUTE);if(n){var o=t.componentCollection[n].obj,a=t.componentCollection[n].template;t.createInstance(e,o,a)}})})}).observe(document.body,{childList:!0})},createAllInstance:function(t,e){var n=this;document.querySelectorAll("["+Component.CONST.COMPONENT_ATTRIBUTE+'="'+t.name+'"]').forEach(function(o){n.createInstance(o,t,e)})},createInstance:function(t,e,n){var o=document.querySelector("["+Component.CONST.COMPONENT_ATTRIBUTE+'="'+e.name+'"]['+Component.CONST.TEMPLATE_ATTRIBUTE+"]")||n,a=new ComponentInstance(t,e.data,e.methods);t.component=a,o&&(t.innerHTML="string"==typeof o?o:o.innerHTML),a.mounted(),a.updated()}},Component=function t(e,n){_classCallCheck(this,t),ComponentManager.componentCollection[e.name]={obj:e,template:n}};Component.CONST={COMPONENT_ATTRIBUTE:"data-component",TEMPLATE_ATTRIBUTE:"data-template"};var ComponentInstance=function(){function t(e,n,o){var a=this;if(_classCallCheck(this,t),this.element=e,n){var r=function(t){Object.defineProperty(a,t,{get:function(){return this["_"+t]},set:function(e){this["_"+t]=e,this.updated()}}),a[t]=n[t]};for(var i in n)r(i)}if(o)for(var i in o)this[i]=o[i]}return _createClass(t,[{key:"mounted",value:function(){}},{key:"unmounted",value:function(){}},{key:"updated",value:function(){}}]),t}();ComponentManager.init();
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function () {
    if (!Array.prototype.forEach) {
        Array.prototype.forEach = function forEach(callback, thisArg) {
            if (typeof callback !== 'function') {
                throw new TypeError(callback + ' is not a function');
            }
            var array = this;
            thisArg = thisArg || this;
            for (var i = 0, l = array.length; i !== l; ++i) {
                callback.call(thisArg, array[i], i, array);
            }
        };
    }
    NodeList.prototype.forEach = Array.prototype.forEach;
})();

var Router = function () {
    function Router(router) {
        _classCallCheck(this, Router);

        if (!router.hasAttribute(Router.CONST.ROUTER_ATTRIBUTE)) throw 'router element requires ' + Router.CONST.ROUTER_ATTRIBUTE + ' attribute';
        this.router = router;
        this.sectionCollection = [];
        this.currentSection = null;
        this.setSections();
        this.routeTo(this.getCurrentHash());
        window.addEventListener("hashchange", this.onHashChange.bind(this), false);
    }

    _createClass(Router, [{
        key: 'setSections',
        value: function setSections() {
            var _this = this;

            this.sectionCollection = this.router.querySelectorAll('[' + Router.CONST.SECTION_ROUTE_ATTRIBUTE + ']');
            this.sectionCollection.forEach(function (section) {
                _this.hideSection(section);
            });
        }
    }, {
        key: 'hideSection',
        value: function hideSection(section) {
        	section.style.position = 'absolute';
            section.style.visibility = 'hidden';
            section.style.opacity = '0';
            section.style.transition = 'visibility 0s, opacity 0.5s linear';
        }
    }, {
        key: 'showSection',
        value: function showSection(section) {
            if (this.currentSection) {
                this.hideSection(this.currentSection);
            }
            this.currentSection = section;
            section.style.position = 'absolute';
            section.style.visibility = 'visible';
            section.style.opacity = '1';
        }
    }, {
        key: 'getCurrentHash',
        value: function getCurrentHash() {
            var hash = window.location.hash;
            if (hash) return hash;
            return '#/';
        }
    }, {
        key: 'routeTo',
        value: function routeTo(hash, isChange) {
            var hashClean = hash.replace('#', '');
            var section = this.router.querySelector('[' + Router.CONST.SECTION_ROUTE_ATTRIBUTE + '="' + hashClean + '"]');
            if (section) {
                this.showSection(section);
                if (!isChange) history.pushState(null, null, hash);
            } else {
                section = this.router.querySelector('[' + Router.CONST.SECTION_ROUTE_ATTRIBUTE + '="/"]');
                if (section) this.showSection(section);
                if (!isChange) history.pushState(null, null, '#/');
            }
        }
    }, {
        key: 'onHashChange',
        value: function onHashChange() {
            this.routeTo(this.getCurrentHash(), true);
        }
    }]);

    return Router;
}();

Router.CONST = {
    ROUTER_ATTRIBUTE: 'data-router',
    SECTION_ROUTE_ATTRIBUTE: 'data-route'
};