var gulp = require('gulp');
var fs = require('fs');
var path = require('path');
var pretty = require('pretty');
var bufferstreams = require('bufferstreams');

module.exports = function() {

    const ComponentTemplate = {
        COMPONENT_SRC_LOCATION: 'src/component',
        COMPONENT_TEMPLATE_LOCATION: 'template',
        findComponents(htmlContent) {
            let components = htmlContent.match(/<component-(.*?)<\/(.*?)>/g);
            if (!components) return htmlContent;
            components.forEach((componentTag) => {
                let arr = componentTag.match(/component-(.*?)(\s|>)/);
                let attributeArray  = componentTag.match(/<component-.*?\s(.*?)>/);
                let componentName = arr[1];
                if (componentName) {
                    let fileName = path.resolve(__dirname,'../') + path.sep + ComponentTemplate.COMPONENT_SRC_LOCATION + path.sep + componentName + path.sep + ComponentTemplate.COMPONENT_TEMPLATE_LOCATION + path.sep + 'template.html';
                    let data = fs.readFileSync(fileName);
                    let actualHTML = data.toString();
                    if(attributeArray && attributeArray[1])actualHTML = actualHTML.replace('>', ' '+attributeArray[1]+'>');
                    htmlContent = htmlContent.replace(new RegExp(componentTag, 'g'), actualHTML);
                    htmlContent = ComponentTemplate.findComponents(htmlContent);
                }

            });

            return htmlContent;
        }
    };
    gulp.task('html-component',['make-dist'], function() {
        return fs.createReadStream('index.html')
            .pipe(new bufferstreams(function(err, chunk, cb) {
                if (err) {
                    throw err;
                }
                let htmlContent = chunk.toString('utf-8');
                htmlContent = ComponentTemplate.findComponents(htmlContent);
                chunk = Buffer.from(pretty(htmlContent), 'utf8');
                cb(null, chunk);

            }))
            .pipe(fs.createWriteStream('dist/index.html'));
    });


}