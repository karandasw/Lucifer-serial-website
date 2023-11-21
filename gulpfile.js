import gulp from "gulp";
import { path } from "./gulp/config/path.js";

// passing a value to a global variable
global.app = {
    path: path,
    gulp: gulp
}

//import taks
import { copy } from "./gulp/tasks/copy.js";
import { reset } from "./gulp/tasks/reset.js";

// watching for changes at files
function watcher() {
    gulp.watch(path.watch.files, copy)
}

// building task execution scenarios
const dev = gulp.series(reset, copy, watcher);

// default script execution
gulp.task('default', dev);