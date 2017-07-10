var gulp = require('gulp'),
    connect = require('gulp-connect'),
    browserify = require('gulp-browserify'),
    concat = require('gulp-concat'),
    livereload = require('gulp-livereload'),
    port = process.port || 5000;

gulp.task('browserify', function() {
    gulp.src('./app/js/main.js')
        .pipe(browserify({
            transform: 'reactify',
        }))
        .pipe(gulp.dest('./dist/js'));
});

// live reload
gulp.task('connect', function() {
    connect.server({
        // root: './',
        port: port,
        livereload: true,
    })
});

// reload js
gulp.task('js', function() {
    gulp.src('./dist/**/*.js')
        .pipe(connect.reload())
});

gulp.task('html', function() {
    gulp.src('./dist/**/*.html')
        .pipe(connect.reload())
});

// gulp.task('aaaa',['two'], funciton() {
//     gulp.watch('./dist/**/*.js', ['js']);
//     gulp.watch('./app/**/*.html', ['html']);
//     gulp.watch('./app/js/**/*.js', ['browserify']);
// });

gulp.task('two',function(){
  // var server = livereload();
  //
  //   // app/**/*.*的意思是 app文件夹下的 任何文件夹 的 任何文件
  //   gulp.watch('app/**/*.*', function (file) {
  //       server.changed(file.path);
  //   });
  console.log('two is done');
});

gulp.task('watch',function(){
  gulp.watch('./dist/**/*.js', ['js']);
  gulp.watch('./app/**/*.html', ['html']);
  gulp.watch('./app/js/**/*.js', ['browserify']);
  // var server = livereload();
  //
  //   // app/**/*.*的意思是 app文件夹下的 任何文件夹 的 任何文件
  //   gulp.watch('app/**/*.*', function (file) {
  //       server.changed(file.path);
  //   });
});

gulp.task('default', ['browserify']);
gulp.task('serve', ['browserify', 'connect', 'watch']);
