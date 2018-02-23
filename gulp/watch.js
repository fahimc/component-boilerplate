var gulp = require('gulp');
var browserSync = require('browser-sync').create();

module.exports = function() {
    gulp.task('js-watch', ['js', 'js-lib'], function(done) {
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
}