'use strict';

var gulp = require('gulp'),
    connect = require('gulp-connect');

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

gulp.task('copy-bower-components', function() {
  gulp.src('./bower_components/**')
    .pipe(gulp.dest('dist/bower_components'));
});

gulp.task('copy-assets', function() {
  gulp.src('./app/**/*.ico')
    .pipe(gulp.dest('dist'));
  gulp.src('./app/img/**/*')
    .pipe(gulp.dest('dist/img'));
});

gulp.task('default', ['copy-bower-components', 'copy-assets', 'connect', 'html', 'html:watch']);
