var gulp = require('gulp');

var fs = require('fs');
var path = require('path');
var through = require('through2');

module.exports = function() {
  gulp.task('make-dist', [], function() {
    return gulp.src('gulpfile.js')
      .pipe(through.obj(function(chunk, enc, cb) {
        let dir = path.resolve(__dirname, '../dist/');
        console.log('path', dir);
        if (!fs.existsSync(dir)) {
          console.log('created dir');
          fs.mkdirSync(dir);
        }
        cb();
      }))
      .pipe(through.obj(function(chunk, enc, cb) {
        let dir = path.resolve(__dirname, '../dist/js');
        console.log('path', dir);
        if (!fs.existsSync(dir)) {
          console.log('created dir');
          fs.mkdirSync(dir);
        }
        cb();
      }))
      .pipe(through.obj(function(chunk, enc, cb) {
        let dir = path.resolve(__dirname, '../dist/js/app.js');
        console.log('path', dir);
        if (!fs.existsSync(dir)) {
          console.log('created file');
          fs.closeSync(fs.openSync(dir, 'w'));
        }
        cb();
      }))
  });
}