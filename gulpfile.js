'use strict';

var gulp = require('gulp'),
    connect = require('gulp-connect'),
    sass = require('gulp-sass'),
    ts = require('gulp-typescript');

gulp.task('connect', function() {
  connect.server({
    root: 'dist',
    port: 3000,
    livereload: true
  });
});

gulp.task('html', function () {
  gulp.src('./app/**/*.html')
    .pipe(gulp.dest('dist'))
    .pipe(connect.reload());
});

gulp.task('html:watch', function () {
  gulp.watch(['./app/**/*.html'], ['html']);
});

gulp.task('sass', function () {
  gulp.src('./app/scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist'));
});

gulp.task('sass:watch', function () {
  gulp.watch(['./app/scss/**/*.scss'], ['sass', 'html']);
});

gulp.task('typescript', function () {
  gulp.src('./app/ts/**/*.ts')
    .pipe(ts({
      module: 'commonjs',
      target: 'ES5',
      emitDecoratorMetadata: true,
      experimentalDecorators: true,
      noImplicitAny: true,
    }))
    .js.pipe(gulp.dest('./dist'));
});

gulp.task('copy-bower-components', function() {
  gulp.src('./bower_components/**')
    .pipe(gulp.dest('dist/bower_components'));
});

gulp.task('copy-assets', function() {
  gulp.src('./app/**/*.ico')
    .pipe(gulp.dest('dist'));
  gulp.src('./app/img/**/*')
    .pipe(gulp.dest('dist/img'));
  gulp.src('./app/fonts/**/*')
    .pipe(gulp.dest('dist/fonts'));
});

gulp.task('default', ['copy-bower-components', 'copy-assets', 'connect', 'html', 'html:watch', 'sass', 'sass:watch']);
