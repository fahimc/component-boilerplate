const Main = {
    init() {
        document.addEventListener('DOMContentLoaded', this.onLoad.bind(this));
    },
    onLoad() {
        let router = new Router(document.querySelector('#main-router'));
    }
}.init();