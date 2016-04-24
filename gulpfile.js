var gulp = require('gulp');
var babel = require('gulp-babel');
var sourcemaps = require('gulp-sourcemaps');
var livereload = require('gulp-livereload');

gulp.task('babel', function() {
  return gulp.src(['src/*.js'])
    .pipe(sourcemaps.init())
    .pipe(babel({
      presets: ['es2015']
    }))
    .on('error', function(error) {
      console.log('error!');
      console.log(error.message);
      this.emit('end');
    })
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dst'))
    .pipe(livereload());
});

gulp.task('default', function() {
  livereload.listen();
  gulp.watch('src/*.js', ['babel']);
});
