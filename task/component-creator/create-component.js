const ComponentUtil = require('./utils/componentUtil.js');
const Ask = require('./utils/ask.js');

const CreateComponent = {
    init() {
        Ask('What is the name of your component?').then(this.create.bind(this));
    },
    create(componentName) {
        if(componentName)ComponentUtil.createComponent(componentName);
    }
}.init();
