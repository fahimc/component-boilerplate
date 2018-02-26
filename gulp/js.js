var browserify = require('browserify');
var concat = require('gulp-concat');
var minify = require('gulp-minify');
var gulp = require('gulp');
var fs = require('fs');
var babelify = require('babelify');

module.exports = function() {
    gulp.task('js', function() {
        /*
        return gulp.src(['src/app.js'])
            .pipe(concat('app.js'))
            .pipe(browserify({ transform: ['babelify'] }))
            .pipe(minify({
                ext: {
                    src: '.js',
                    min: '.min.js'
                },
                exclude: ['tasks'],
                ignoreFiles: ['.combo.js', '-min.js']
            }))
            .pipe(gulp.dest('dist/js'));
            */
        return browserify('src/app.js')
            .transform(babelify.configure({
                presets: ["es2015"]
            }))
            .bundle()
            .pipe(fs.createWriteStream('dist/js/app.js'));
        //.pipe(gulp.dest('dist/js'));
    });
}