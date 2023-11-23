import { deleteAsync } from "del";
import zipPlugin from "gulp-zip";

export const zip = () => {
    const gulp = require('gulp');
    // Assuming app is defined somewhere in code.
    if (!app || !app.gulp || !app.gulp.path || !app.path || !app.path.buildFolder) {
        console.error("Error: App or its properties are not defined.");
        return; // or handle the error appropriately
    }

    deleteAsync(`./${app.gulp.path.rootFolder}.zip`);

    return app.gulp.src(`${app.path.buildFolder}/**/*.*`, {})
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title: "ZIP",
                message: "Error: <%= error.message %>"
            }))
        )
        .pipe(zipPlugin(`${app.path.rootFolder}.zip`))
        .pipe(app.gulp.dest('./'));
}
