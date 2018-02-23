var browserify = require('gulp-browserify');
var minify = require('gulp-minify');
var gulp = require('gulp');
var concat = require('gulp-concat');
var through = require('through2');
var browserSync = require('browser-sync').create();
var fs = require('fs');
var path = require('path');
var pretty = require('pretty');
var bufferstreams = require('bufferstreams');
var rename = require("gulp-rename");
var sass = require('gulp-sass');

var COMPONENT_SRC_LOCATION = 'src/component';
var COMPONENT_TEMPLATE_LOCATION = 'template';

// process JS files and return the stream.
gulp.task('js', function() {
    return gulp.src(['src/app.js', 'src/component/**/*.js'])
        .pipe(concat('app.js'))
        .pipe(browserify())
        .pipe(minify({
            ext: {
                src: '.js',
                min: '.min.js'
            },
            exclude: ['tasks'],
            ignoreFiles: ['.combo.js', '-min.js']
        }))
        .pipe(gulp.dest('dist/js'));
});

// process JS files and return the stream.
gulp.task('js_lib', function() {
    return gulp.src(['src/lib/**/*.js'])
        .pipe(concat('lib.js'))
        //.pipe(browserify())
        .pipe(minify({
            ext: {
                src: '.js',
                min: '.min.js'
            },
            exclude: ['tasks'],
            ignoreFiles: ['.combo.js', '-min.js']
        }))
        .pipe(gulp.dest('dist/js'));
});


gulp.task('sass', function() {
    return gulp.src(['src/component/app/style/style.scss'])
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(rename('main.css'))
        .pipe(gulp.dest('dist/css/'));
});
gulp.task('html-component', function() {
    return fs.createReadStream('index.html')
        .pipe(new bufferstreams(function(err,chunk, cb) {
                if (err) {
                    throw err;
                }
                let htmlContent = chunk.toString('utf-8');
                htmlContent =  findComponents(htmlContent);
                chunk = Buffer.from(pretty(htmlContent),'utf8');
                cb(null, chunk);

        }))
        .pipe(fs.createWriteStream('dist/index.html'));
});

function findComponents(htmlContent) {
    let components = htmlContent.match(/<component-(.*?)<\/(.*?)>/g);
    if(!components)return htmlContent;
    components.forEach((componentTag) => {
        let arr = componentTag.match(/component-(.*?)(\s|>)/);
        let componentName = arr[1];
        if (componentName) {
            let fileName = __dirname + path.sep + COMPONENT_SRC_LOCATION + path.sep + componentName + path.sep + COMPONENT_TEMPLATE_LOCATION + path.sep + 'template.html';
            let data = fs.readFileSync(fileName);
             htmlContent = htmlContent.replace(new RegExp(componentTag, 'g'), data.toString());
             htmlContent =  findComponents(htmlContent);
        }

    });

    return htmlContent;
}
// create a task that ensures the `js` task is complete before
// reloading browsers
gulp.task('js-watch', ['js', 'js_lib'], function(done) {
    browserSync.reload();
    done();
});
gulp.task('sass-watch', ['sass'], function(done) {
    browserSync.reload();
    done();
});
gulp.task('html-watch', ['html-component'], function(done) {
    browserSync.reload();
    done();
});
// use default task to launch Browsersync and watch JS files
gulp.task('default', ['js', 'js_lib','sass','html-component'], function() {

    // Serve files from the root of this project
    browserSync.init({
        server: {
            baseDir: ['dist/']
        }
    });

    // add browserSync.reload to the tasks array to make
    // all browsers reload after tasks are complete.
    gulp.watch("src/**/*.js", ['js-watch']);
    gulp.watch("src/**/*.scss", ['sass-watch']);
    gulp.watch(["index.html","src/**/*.html"], ['html-watch']);
});