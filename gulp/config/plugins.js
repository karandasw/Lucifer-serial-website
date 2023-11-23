import replace from "gulp-replace"; // find and change
import plumber from "gulp-plumber"; // error processing
import notify from "gulp-notify"; // msg (tips)
import browsersync from "browser-sync"; // localy server
import newer from "gulp-newer"; //check update
import ifPlugin from "gulp-if"; // conditional branching 

// exporting object
export const plugins = {
    replace: replace,
    plumber: plumber,
    notify: notify,
    browsersync: browsersync,
    newer: newer,
    if: ifPlugin
}