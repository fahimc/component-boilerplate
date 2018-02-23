var browserify = require('gulp-browserify');
var minify = require('gulp-minify');
var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var concat = require('gulp-concat');
var through = require('through2');
var browserSync = require('browser-sync').create();
var fs = require('fs');

// process JS files and return the stream.
gulp.task('js', function() {
    return gulp.src(['src/app.js', 'src/component/**/*.js'])
        .pipe(concat('app.js'))
        .pipe(browserify())
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

// process JS files and return the stream.
gulp.task('js_lib', function() {
    return gulp.src(['src/lib/**/*.js'])
        .pipe(concat('lib.js'))
        .pipe(browserify())
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

// create a task that ensures the `js` task is complete before
// reloading browsers
gulp.task('js-watch', ['js', 'js_lib'], function(done) {
    browserSync.reload();
    done();
});

gulp.task('sass', function() {

    return sass('src/', { sourcemap: true })
        .on('error', function(err) {
            console.error('Error!', err.message);
        })
        .pipe(sourcemaps.write('./', {
            includeContent: false,
            sourceRoot: '/src/'
        }))
        .pipe(browserSync.stream({ match: '**/*.css' }));
});

gulp.task('html-component', function() {
    return gulp.src(['index.html'])
        .pipe(through.obj(function(chunk, enc, cb) {
            console.log('chunk', chunk.path) // this should log now
            fs.readFile(chunk.path, function(err, data) {
                if (err) {
                    throw err;
                }
                let components =  data.toString().match(/<component-(.*?)<\/(.*?)>/g);
                components.forEach((componentTag)=>{
                	console.log(componentTag);
                });
                
                cb(null, chunk)
            });
            
        }))
        .pipe(gulp.dest('dist/'));
});

// use default task to launch Browsersync and watch JS files
gulp.task('default', ['js', 'js_lib'], function() {

    // Serve files from the root of this project
    browserSync.init({
        server: {
            baseDir: ["./", 'dist/']
        }
    });

    // add browserSync.reload to the tasks array to make
    // all browsers reload after tasks are complete.
    gulp.watch("src/**/*.js", ['js-watch']);
    gulp.watch("src/**/*.scss", ['sass']);
});