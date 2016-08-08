var gulp = require('gulp');
var sass = require('gulp-sass');
var connect = require('gulp-connect');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('connect', function() {
	connect.server({
		root: 'public',
		livereload: true
	});
});

gulp.task('sass', function() {
	return gulp.src('./sass/**/*.scss')
		.pipe(sass( { errLogToConsole: true } ))
		.pipe(autoprefixer())
		.pipe(gulp.dest('./public/css'))
});

gulp.task('livereload', function() {
	gulp.src('./public/**/*')
		.pipe(connect.reload());
});

gulp.task('watch', function() {
	gulp.watch('./sass/**/*.scss', ['sass']);
	gulp.watch('./public/**/*', ['livereload']);
});	

gulp.task('default', ['connect', 'watch', 'sass']);