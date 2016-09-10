var gulp = require('gulp');
var stylus = require('gulp-stylus');
var uglify = require('gulp-uglify');

var paths = {
  stylus: ['./dev/taobao/stylus/*.styl'],
  script: ['./dev/taobao/js/*.js']
};

gulp.task('stylus', function() {
  return gulp.src(paths.stylus)
      .pipe(stylus({
      	compress : 0
      }))
    .pipe(gulp.dest('./pro/taobao/css'));
});

gulp.task('script', function() {
  return gulp.src(paths.script)
    // .pipe(uglify())
    .pipe(gulp.dest('./pro/taobao/js'));
});

//监听
gulp.task('watch', function() {
  gulp.watch(paths.stylus, ['stylus']);
  gulp.watch(paths.script,['script']);
});

// The default task (called when you run `gulp` from cli)
gulp.task('default', ['watch','stylus','script']);