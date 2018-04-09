var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var clean = require('gulp-clean');
gulp.task('vendor', function (){
    return gulp.src('dist/vendor.bundle.js')
    .pipe(uglify())
    .pipe(rename('vendor.bundle.min.js'))
    .pipe(gulp.dest('dist/'));
});
gulp.task('inline', function (){
    return gulp.src('dist/inline.bundle.js')
    .pipe(uglify())
    .pipe(rename('inline.bundle.min.js'))
    .pipe(gulp.dest('dist/'));
});
gulp.task('main', function (){
    return gulp.src('dist/main.bundle.js')
    .pipe(uglify())
    .pipe(rename('main.bundle.min.js'))
    .pipe(gulp.dest('dist/'));
});
gulp.task('polyfills', function (){
    return gulp.src('dist/polyfills.bundle.js')
    .pipe(uglify())
    .pipe(rename('polyfills.bundle.min.js'))
    .pipe(gulp.dest('dist/'));
});
gulp.task('styles', function (){
    return gulp.src('dist/styles.bundle.js')
    .pipe(uglify())
    .pipe(rename('styles.bundle.min.js'))
    .pipe(gulp.dest('dist/'));
});
gulp.task('scripts', function (){
    return gulp.src('dist/scripts.bundle.js')
    .pipe(uglify())
    .pipe(rename('scripts.bundle.min.js'))
    .pipe(gulp.dest('dist/'));
});
gulp.task('cleanvendor', function(){
    return gulp.src('dist/vendor.bundle.js', {read: false})
    .pipe(clean());
});
gulp.task('cleaninline', function(){
    return gulp.src('dist/inline.bundle.js', {read: false})
    .pipe(clean());
});
gulp.task('cleanmain', function(){
    return gulp.src('dist/main.bundle.js', {read: false})
    .pipe(clean());
});
gulp.task('cleanpolyfills', function(){
    return gulp.src('dist/polyfills.bundle.js', {read: false})
    .pipe(clean());
});
gulp.task('cleanstyles', function(){
    return gulp.src('dist/styles.bundle.js', {read: false})
    .pipe(clean());
});
gulp.task('cleanscripts', function(){
    return gulp.src('dist/scripts.bundle.js', {read: false})
    .pipe(clean());
});
gulp.task('minify', ['vendor', 'inline', 'main', 'polyfills', 'styles', 'scripts']);
gulp.task('clean', ['cleanvendor', 'cleaninline', 'cleanmain', 'cleanpolyfills', 'cleanstyles', 'cleanscripts']);
