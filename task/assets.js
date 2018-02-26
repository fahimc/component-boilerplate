var gulp = require('gulp');

module.exports = function() {
    gulp.task('assets',['clean-assets'], function() {
        return gulp.src(['assets/**/*'])
            .pipe(gulp.dest('dist/assets'));
    });
}