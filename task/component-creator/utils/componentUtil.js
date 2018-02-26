const fs = require('fs');
const path = require('path');
const TEMPLATES = require(path.dirname(require.main.filename) + '/template/component.js');

const ComponentUtil = {
    APP_DIR: path.resolve(path.dirname(require.main.filename), '../../src/'),
    COMPONENT_DIR: 'component',
    createComponent(componentName) {
        
        let componentPath = this.APP_DIR + '/' + this.COMPONENT_DIR + '/' + componentName;
        let folders = [
            componentPath,
            componentPath + '/src',
            componentPath + '/style',
            componentPath + '/template',
        ];
        this.createFolderList(folders);
        this.createFile(componentPath + '/template/template.html', this.replaceName(componentName, TEMPLATES.html));
        this.createFile(componentPath + '/src/component.js', this.replaceName(componentName, TEMPLATES.js));
        this.createFile(componentPath + '/style/style.scss', this.replaceName(componentName, TEMPLATES.style));

    },
    replaceName(componentName, templateString) {
        let re = new RegExp(this.escapeRegExp('{componentName}'), 'g');
        return templateString.replace(re, componentName);
    },
    escapeRegExp(string) {
        return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    },
    createFolderList(collection) {
        collection.forEach(function(item) {
            this.createFolder(item);
        }.bind(this));
    },
    createFolder(dir) {
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir);
        }
    },
    createFile(path, data) {
        fs.writeFile(path, data + '\n\n', { flag: 'wx' }, function(err) {
            if (err) return;
            console.log(path, "created");
        });
    },
    cleanUp(src) {
        let filePath = path.resolve(path.dirname(require.main.filename), src);
        if (fs.existsSync(filePath)) {
            fs.unlink(filePath);
        }
    },
    updateFile(src, replaceStringArray, newString) {
        let mainPath = path.resolve(path.dirname(require.main.filename), src);
        if (!fs.existsSync(mainPath)) return;
        fs.readFile(mainPath, 'utf8', function(err, data) {
            if (err) {
                return console.log(err);
            }

            let content = data;
            replaceStringArray.forEach(function(item) {
                let re = new RegExp(this.escapeRegExp(item), 'g');
                content = content.replace(re, newString);
            }.bind(this));

            fs.writeFile(mainPath, content, 'utf8', function(err) {
                if (err) return console.log(err);
            });
        }.bind(this));
    }
};
module.exports = ComponentUtil;
