var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

gulp.task('browser-sync', function() {
  browserSync.init({
    proxy: "🍍🍕.dev"
  });
});

gulp.task('serve', ['sass'], function() {

  browserSync.init({
      server: "./"
  });

  gulp.watch("css/*.scss", ['sass']);
  gulp.watch("*.html").on('change', browserSync.reload);
});

gulp.task('sass', function() {
  return gulp.src("css/*.scss")
    .pipe(sass())
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest("css"))
    .pipe(browserSync.stream());
});
