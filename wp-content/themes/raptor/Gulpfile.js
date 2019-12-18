var gulp = require('gulp');
var minifyCss = require('gulp-minify-css');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');

gulp.task("scripts", function() {
    gulp.src([
        './js/resources/jquery.dropdown.min.js',
        './js/resources/multiple-select.js',
        './js/resources/modernizr.js',
        './js/resources/velocity.min.js',
        './js/resources/swiper.min.js',
        './js/resources/slick.min.js',
        './js/resources/collapse.js',
        './js/resources/headroom.min.js',
        './js/resources/color-thief.js',
        './js/resources/app.js',
        './js/resources/custom.js',
        './js/resources/modal.js',
        './js/resources/wpcf7-custom.js',
        './js/resources/sharer.min.js'
    ])
    .pipe(concat('scripts.js'))
    .pipe( gulp.dest("./js") )
    .pipe(rename('scripts.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest("./js"));
});
gulp.task("scripts-single", function() {
    gulp.src([
        './js/resources/like-or-dislike-custom.js',
        './js/resources/retailers.js',
        './js/resources/miracoil-swiper.js',
        './js/resources/wpsl-gmap-custom.js',
        './js/resources/mezzo-mattress.js'
    ])
    .pipe(uglify())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest("./js"));
});
gulp.task("scripts-cocoon", function() {
    gulp.src([
        './js/resources/cocoon/common.js',
        './js/resources/cocoon/main.js',
        './js/resources/cocoon/functions.js'
    ])
    .pipe(concat('cocoon.js'))
    .pipe( gulp.dest("./js") )
    .pipe(rename('cocoon.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest("./js"));
});

gulp.task('styles', function () {
    return gulp.src([
        './css/resources/font-awesome.min.css',
        './css/resources/multiple-select.css',
         './css/resources/slick.css',
        './css/resources/app.css',
        './css/resources/svg.css',
        './css/resources/swiper.min.css'
    ])
    .pipe(concat('styles.css'))
    .pipe(gulp.dest('./css'))
    .pipe(rename('styles.min.css'))
    .pipe(minifyCss())
    .pipe(gulp.dest('./css'));
});

gulp.task('styles-cocoon', function () {
  return gulp.src([
        './css/resources/cocoon/cocoon.css',
        './css/resources/cocoon/beauty-styles.css'
    ])
    .pipe(minifyCss())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('./css'));
});
gulp.task('styles-custom', function () {
  return gulp.src([
        './css/resources/custom/custom.css'
    ])
    .pipe(minifyCss())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('./css'));
});


gulp.task('default', ['scripts', 'scripts-cocoon', 'scripts-single', 'styles', 'styles-cocoon', 'styles-custom']);

gulp.task('watch', function () {
    gulp.watch('./css/resources/*.css', ['styles'] );
    gulp.watch('./css/resources/cocoon/*.css', ['styles-cocoon'] );
    gulp.watch('./css/resources/custom/*.css', ['styles-custom'] );
    gulp.watch('./js/resources/*.js', ['scripts', 'scripts-single'] );
    gulp.watch('./js/resources/cocoon/*.js', ['scripts-cocoon'] );
});