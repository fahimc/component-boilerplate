var gulp = require('gulp');
var browserSync = require('browser-sync').create();

require('./gulp/js')();
require('./gulp/js-lib')();
require('./gulp/sass')();
require('./gulp/watch')();
require('./gulp/component-template')();

gulp.task('default', ['js', 'js-lib','sass','html-component'], function() {

    browserSync.init({
        server: {
            baseDir: ['dist/']
        }
    });
    gulp.watch("src/**/*.js", ['js-watch']);
    gulp.watch("src/**/*.scss", ['sass-watch']);
    gulp.watch(["index.html","src/**/*.html"], ['html-watch']);
});