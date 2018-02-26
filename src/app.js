import App from './component/app/src/component.js';
import Home from './component/home/src/component.js';
const Main = {
    init() {
        document.addEventListener('DOMContentLoaded', this.onLoad.bind(this));
    },
    onLoad() {
        let router = new Router(document.querySelector('#main-router'));
    }
}.init();