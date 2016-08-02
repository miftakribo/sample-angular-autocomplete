const gulp = require('gulp');
const browserSync = require('browser-sync');

gulp.task('serve', () => {
  browserSync({
    notify: false,
    port: 9002,
    server: {
      baseDir: [''],
      routes: {
        '/bower_components': 'bower_components'
      }
    }
  });
});

gulp.task('default', function() {
  // place code for your default task here
});