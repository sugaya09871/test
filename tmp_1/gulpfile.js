
const gulp            = require('gulp');
const sass            = require('gulp-sass');
const pug             = require('gulp-pug');
const plumber         = require('gulp-plumber');
const browser         = require('browser-sync');
const pleeease        = require('gulp-pleeease');
const webpack         = require('webpack');
const webpackStream   = require('webpack-stream');

const sasssrc         = './resource/scss/**/*.scss';
const pugsrc          = './resource/pug/**/*.pug';
const notpugsrc          = '!./resource/**/_*.pug';
const htmlsrc         = './webroot/';
const csssrc          = './webroot/css/';


gulp.task('pug', function () {
  gulp.src([pugsrc,notpugsrc])
      .pipe(plumber())
      .pipe(pug({
        pretty: true
      }))
      .pipe(gulp.dest(htmlsrc))
      .pipe(browser.reload({stream: true}));
});

gulp.task('sass', function () {
    gulp.src(sasssrc)
        .pipe(plumber())
        .pipe(sass({
          outputStyle: 'expanded',
        }))
        .pipe(pleeease({
            minifier: false,
            autoprefixer: {"browsers": ["last 4 versions", "ie 10", "Android 2.3"]}
        }))
        .pipe(gulp.dest(csssrc))
        .pipe(browser.reload({stream: true}));
});

// webpackの設定ファイルの読み込み
const webpackConfig = require('./webpack.config');

gulp.task('webpack',function(){
  return webpackStream(webpackConfig, webpack)
      .pipe(gulp.dest(htmlsrc));
});

gulp.task('server', function () {
  browser({
    server: {
      baseDir: "./webroot/"
    }
  });
  gulp.watch(htmlsrc , ['serverReload']);
  gulp.watch(csssrc , ['serverReload']);
});

gulp.task('watch' , function(){
    gulp.watch(sasssrc, ['sass']);
    gulp.watch(pugsrc, ['pug']);
});

gulp.task('serverReload', function() {
    browser.reload();
});

gulp.task('default',['watch','webpack','pug','sass','server']);