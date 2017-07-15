'use strict';

import gulp        from 'gulp';
import runSequence from 'run-sequence';

gulp.task('prod', ['clean'], function(cb) {

  cb = cb || function() {};

  global.isProd = true;

  runSequence(['sass', 'imagemin', 'pug', 'favicon','browserify', 'fonts'], cb);

});
