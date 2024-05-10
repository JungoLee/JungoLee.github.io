import gulp from "gulp";
import chokidar from "chokidar";

import {
  __dirname,
  isBuild,
  destFolder,
  srcFolder,
  projectPaths,
} from "./gulp/config/paths.js";

import { copy } from "./gulp/tasks/copy.js";
import { reset } from "./gulp/tasks/reset.js";
import { html, htmlInclude } from "./gulp/tasks/html.js";
import { server } from "./gulp/tasks/server.js";
import { scss } from "./gulp/tasks/scss.js";
import { javaScript } from "./gulp/tasks/javaScript.js";
import { images } from "./gulp/tasks/images.js";
import { fonts } from "./gulp/tasks/fonts.js";
import { zip } from "./gulp/tasks/zip.js";
import { ftpDeploy } from "./gulp/tasks/ftpDeploy.js";
import { sftpDeploy } from "./gulp/tasks/sftpDeploy.js";

const handleHTML = html.bind(null, isBuild);
const handleHtmlInclude = htmlInclude.bind(null, isBuild);
const handleSCSS = scss.bind(null, isBuild);
const handleJS = javaScript.bind(null, isBuild);
const handleImages = images.bind(null, isBuild);
const handleFonts = fonts.bind(null, isBuild);

function watcher() {
  gulp.watch(projectPaths.publicSrc, copy);
  gulp.watch(projectPaths.pagesSrc, handleHTML);
  gulp.watch(projectPaths.pagesIncludeWatch, handleHtmlInclude);
  gulp.watch(projectPaths.stylesSrc, handleSCSS);
  gulp.watch(projectPaths.scriptsSrc, handleJS);
  gulp.watch(projectPaths.imagesSrc, handleImages);
  gulp.watch(projectPaths.fontsSrc, handleFonts);
}

const devTasks = gulp.parallel(
  copy,
  handleHTML,
  handleHtmlInclude,
  handleSCSS,
  handleJS,
  handleImages,
  handleFonts
);

const mainTasks = gulp.series(devTasks);

const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server));
const noWebpack = gulp.series(reset, mainTasks, gulp.parallel(watcher, server));

const build = gulp.series(reset, mainTasks);
const backupZIP = gulp.series(zip);
const deployFTP = gulp.series(reset, mainTasks, ftpDeploy);
const deploySFTP = gulp.series(reset, mainTasks, sftpDeploy);

gulp.task("default", dev);

export { dev, build, noWebpack, backupZIP, deployFTP, deploySFTP };
