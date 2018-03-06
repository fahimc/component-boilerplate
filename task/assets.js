var gulp = require('gulp');

module.exports = function() {
	gulp.task('favicon',['clean-assets'], function() {
        return gulp.src(['favicon.ico','manifest.json'])
            .pipe(gulp.dest('dist'));
    });
    gulp.task('assets',['favicon'], function() {
        return gulp.src(['assets/**/*'])
            .pipe(gulp.dest('dist/assets'));
    });
}