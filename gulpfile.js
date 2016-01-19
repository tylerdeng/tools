var gulp = require('gulp'),
    gutil = require('gulp-util'),
    sass = require('gulp-ruby-sass'),
    uglify = require('gulp-uglify'),
    watch = require('gulp-watch'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify');


gulp.task('sass', function () {
  return sass('./app/assets/stylesheets/**/*.scss', {
      precision: 6,
      stopOnError: true,
      cacheLocation: './',
      loadPath: [ 'library', './app/assets/stylesheets/*' ]
    })
    .on('error', sass.logError)
    .pipe(gulp.dest('gulp_result/assets/stylesheets'))
    .pipe(notify({
      message: "You just got super Sassy!"
    }));
});



 gulp.task('js', function () {
      return gulp.src('./app/assets/javascripts/**/*.js')
        .pipe(uglify().on('error', function(e){
            console.log(e);
         }))
        .pipe(gulp.dest('gulp_result/assets/javascripts'))
        .pipe( notify({ message: "Javascript is now ugly!"}) );
  });



gulp.task('watch', function() {

  var client = ['js', 'sass'];
  gulp.watch('./app/assets/stylesheets/**/*.scss', client);
  gulp.watch('./app/assets/javascripts/**/*.js', client);

});

gulp.task('default', ['sass', 'js', 'watch']);