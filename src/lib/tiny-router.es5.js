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