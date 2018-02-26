var browserify = require('gulp-browserify');
var concat = require('gulp-concat');
var minify = require('gulp-minify');
var gulp = require('gulp');

module.exports = function() {
    gulp.task('js-lib', function() {
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
}