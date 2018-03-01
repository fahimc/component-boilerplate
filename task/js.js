var browserify = require('browserify');
var concat = require('gulp-concat');
var minify = require('gulp-minify');
var gulp = require('gulp');
var fs = require('fs');
var path = require('path');
var babelify = require('babelify');
var source = require('vinyl-source-stream');

module.exports = function() {
  gulp.task('js', ['make-dist'], function() {
    return browserify('src/app.js')
      .transform(babelify.configure({
        presets: ["es2015"]
      }))
      .bundle()
      .pipe(source('app.js'))
      .pipe(gulp.dest('dist/js'));
  });
}