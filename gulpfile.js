var gulp = require('gulp');
var browserSync = require('browser-sync').create();

require('./task/js')();
require('./task/js-lib')();
require('./task/sass')();
require('./task/watch')(browserSync);
require('./task/component-template')();

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