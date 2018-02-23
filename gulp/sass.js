var gulp = require('gulp');
var rename = require("gulp-rename");
var sass = require('gulp-sass');

module.exports = function() {
    gulp.task('sass', function() {
        return gulp.src(['src/component/app/style/style.scss'])
            .pipe(sass.sync().on('error', sass.logError))
            .pipe(rename('main.css'))
            .pipe(gulp.dest('dist/css/'));
    });
}