const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const exec = require('child_process').exec;

const build = (cb) => {
  exec('pipenv run sphinx-build -b handouts . docs', (err, stdout, stderr) => {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
};

const livereload = (cb) => {
  browserSync.init({
    server: {
      baseDir: './docs'
    }
  });

  gulp.watch(['index.rst', 'contents/*.rst'], build);
  gulp.watch(['./docs/index.html', './docs/**/*.html'], browserSync.reload);

  cb();
};

exports.default = gulp.series(build, livereload);
exports.build = build;
