/**
 * The build process is simplified with gulp
 * Define configuration first, then do the logic and business
 */
var gulp = require('gulp');
var concat = require('gulp-concat');
var templateCache = require('gulp-angular-templatecache'); // load templates using angularjs module 'templates'
var watch = require('gulp-watch');
var sass = require('gulp-sass');
var inject = require('gulp-inject'); // inject dependencies in index.html files
var bowerPath = 'bower_components';
var cfg = {
    'dist': './www/dist', // The distribution folder is public available on web server
    'index': './www/index.html',
    'dps': // Dependencies required by application, not only angularJS but also third parties like momentjs
    [
        bowerPath + '/jquery/jquery.js',
        bowerPath + '/angular/angular.js',
        bowerPath + '/angular-moment/angular-moment.js',
        bowerPath + '/angular-ui/build/angular-ui.js',
        bowerPath + '/ui-bootstrap/',
        bowerPath + '/angular-ui-router/release/angular-ui-router.js',
        bowerPath + '/pi-angular/dist/pi-angular.js',
        bowerPath + '/angular-resource/angular-resource.js',
        bowerPath + '/angular-facebook/lib/angular-facebook.js'
    ],
    'lusify': 
    [
        './src/*.mdl.js',
        './src/*.js',
    ],
    'front': // Application code
    [
        './src/front/*.mdl.js',
        './src/front/**/*.mdl.js',
        './src/front/**/**/*.mdl.js',
        './src/front/**/**/**/*.mdl.js',
        './src/front/**/**/**/**/*.mdl.js',
        './src/front/*.js',
        './src/front/**/*.js',
        './src/front/**/**/*.js',
        './src/front/**/**/**/*.js',
        './src/front/**/**/**/**/*.js',
    ],
    'admin': 
    [
        './src/admin/*.mdl.js',
        './src/admin/**/*.mdl.js',
        './src/admin/**/**/*.mdl.js',
        './src/admin/**/**/**/*.mdl.js',
        './src/admin/**/**/**/**/*.mdl.js',
        './src/admin/*.js',
        './src/admin/**/*.js',
        './src/admin/**/**/*.js',
        './src/admin/**/**/**/*.js',
        './src/admin/**/**/**/**/*.js',
    ],
    'sass': // Stylesheets with SASS
    [
        '/src/*.scss',
        '/src/**/*.scss',
        './src/sass/*.scss',
        './src/sass/**/*.scss',
    ],
    'templates': // Templates .html are compressed with javascript
    [
        './src/*.html',
        './src/**/*.html',
        './src/**/**/*.html',
        './src/**/**/**/*.html'
    ]
};

/**
 * Build Javascript files
 */
gulp.task('build-js', function () {
    
    gulp.src(cfg.dps)
        .pipe(concat('all.js'))
        .pipe(gulp.dest(cfg.dist));

    gulp.src(cfg.lusify)
        .pipe(concat('lusify.js'))
        .pipe(gulp.dest(cfg.dist));

    gulp.src(cfg.front)
        .pipe(concat('front.js'))
        .pipe(gulp.dest(cfg.dist));

    gulp.src(cfg.admin)
        .pipe(concat('admin.js'))
        .pipe(gulp.dest(cfg.dist));

    gulp.src(cfg.templates)
        .pipe(templateCache())
        .pipe(gulp.dest(cfg.dist));
});

/** 
 * Build SASS files
 */
gulp.task('build-sass', function() {

    gulp.src(cfg.sass)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(cfg.dist));
});
gulp.task('index', function () {
  var target = gulp.src(cfg.index);
  // It's not necessary to read the files (will speed up things), we're only after their paths:
  var sources = gulp.src(['./www/dist/all.js', './www/dist/app.js', './www/dist/app.css'], {read: false});

  return target.pipe(inject(sources, {ignorePath: '/www', addRootSlash: true}))
    .pipe(gulp.dest('./www'));
});
/**
 * Developer task to watch and build files upon changes
 */
gulp.task('dev', function() {
    gulp.watch(cfg.admin, ['build-js']);
    gulp.watch(cfg.lusify, ['build-js']);
    gulp.watch(cfg.front, ['build-js']);
    gulp.watch(cfg.templates, ['build-js']);
    gulp.watch(cfg.sass, ['build-sass']);
});

gulp.task('default', ['build-js', 'build-sass', 'index']);