var gulp = require('gulp');

module.exports = function(browserSync) {
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