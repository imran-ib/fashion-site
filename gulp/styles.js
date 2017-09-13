var gulp = require("gulp");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var cssImport = require("postcss-import");
var nested = require("postcss-nested");
var mixins = require("postcss-mixins");
var variables = require("postcss-simple-vars");
var hexrgba = require("postcss-hexrgba");


gulp.task('styles', function() {
    // content
   return gulp.src('app/assets/styles/styles.css')
     .pipe(postcss([
     	cssImport,
     	mixins,
     	nested,
     	variables,
     	hexrgba,
     	autoprefixer

     	]))
     .on('error', function (errroInfo) {
         // body...
         console.log(errroInfo.toString());
         this.emit('end');
     })

     .pipe(gulp.dest('app/temp/styles'));
});