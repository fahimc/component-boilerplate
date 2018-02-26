const ComponentUtil = require('./utils/componentUtil.js');
const CLI = require('./utils/cli.js');
const fs = require('fs');
const path = require('path');

const VueInit = {
    srcPath: 'src/app',
    init() {
        this.readPackageJSON();
        this.install();
        this.createApp();
        ComponentUtil.cleanUp('../' + this.srcPath + '/App.vue');
        ComponentUtil.cleanUp('../' + this.srcPath + 'components/Hello.vue');
        this.updateFiles();
    },
    install() {
        CLI.execute('npm install --save sass-loader && npm install --save node-sass && npm install readline --save', process.cwd());
    },
    readPackageJSON() {
        let packagePath = path.resolve(process.cwd() + '/package.json');

        fs.readFile(packagePath, 'utf8',
            function(err, data) {
                if (err) throw err;
                let json = JSON.parse(data);
                json = this.updatePackage(json);
                fs.writeFile(packagePath, JSON.stringify(json, null, 2), 'utf8', function(err) {
                    if (err) return console.log(err);
                });
            }.bind(this));

    },
    updatePackage(json) {
        if (json['vue-component-creator'] && json['vue-component-creator']['src-path']) this.srcPath = json['vue-component-creator']['src-path'];

        if (!json['scripts']) json['scripts'] = {};
        json['scripts']['create-component'] = "node vue-component-creator/create-component.js";
        return json;
    },
    createApp() {
        ComponentUtil.createComponent('app', true);
    },
    updateFiles() {
        ComponentUtil.updateFile('../src/app/main.js', ['./App'], './components/app/app');
        ComponentUtil.updateFile('../src/app/router/index.js', [
            'import Hello from \'@/components/Hello\'',
            'component: Hello',
            'name: \'Hello\',',
            ','
        ], '');
    }
}.init();
