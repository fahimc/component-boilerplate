var gulp = require('gulp');
var browserSync = require('browser-sync').create();

require('./task/mkdir')();
require('./task/js')();
require('./task/js-lib')();
require('./task/sass')();
require('./task/assets')();
require('./task/clean')();
require('./task/watch')(browserSync);
require('./task/component-template')();

gulp.task('dist', ['js', 'js-lib','sass','html-component','assets']);

gulp.task('default', ['dist'], function() {

    browserSync.init({
        server: {
            baseDir: ['dist/']
        }
    });
    gulp.watch("src/**/*.js", ['js-watch']);
    gulp.watch("src/**/*.scss", ['sass-watch']);
    gulp.watch(["index.html","src/**/*.html"], ['html-watch']);
    gulp.watch(["assets/**/*"], ['assets-watch']);
});

