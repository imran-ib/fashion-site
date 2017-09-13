var gulp = require("gulp");
var watch = require("gulp-watch");
var browserSync = require("browser-sync").create();


gulp.task('watch',function(){

	browserSync.init({
		server:{
			baseDir:"app"
		}
		});

	watch("./app/**/*.html",function (argument) {
		// body...
				browserSync.reload();
	})


	watch("./app/assets/styles/**/*.css", function (argument) {
		// body...
		gulp.start("cssInject");
	})
})

gulp.task("cssInject",["styles"], function (argument) {
	// body...
	return gulp.src('./app/assets/styles/styles.css')
	  .pipe(browserSync.stream());
})