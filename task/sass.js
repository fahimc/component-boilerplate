var gulp = require('gulp');
var rename = require("gulp-rename");
var sass = require('gulp-sass');
var concat = require('gulp-concat');

module.exports = function() {
    gulp.task('sass',['make-dist'], function() {
        return gulp.src(['src/lib/**/*.css','src/component/**/*.scss'])
            .pipe(sass.sync().on('error', sass.logError))
            .pipe(concat('main.css'))
            .pipe(gulp.dest('dist/css/'));
    });
}