export const img = () => {
	return app.gulp
		.src(app.path.src.img)
		.pipe(
			app.plugins.plumber(
				app.plugins.notify.onError({
					title: 'IMG',
					message: 'Error: <%= error.message %>',
				})
			)
		)
		.pipe(app.gulp.dest(app.path.build.img))
		// .pipe(app.gulp.src(app.path.src.svg))
		// .pipe(app.gulp.dest(app.path.build.img))
		.pipe(app.plugins.browsersync.stream())
}
