import gulp from "gulp";
import fileInclude from "gulp-file-include";

import { plugins } from "../config/plugins.js";
import { logger } from "../config/Logger.js";
import {
  __dirname,
  isBuild,
  destFolder,
  srcFolder,
  projectPaths,
} from "../config/paths.js";

// 공통 fileInclude 처리를 위한 함수
const applyFileInclude = () => {
  return fileInclude({
    prefix: "@@",
    basepath: projectPaths.pagesInclude,
  });
};

// fileInclude 처리를 위한 별도의 함수
const htmlInclude = () => {
  return gulp
    .src(projectPaths.pagesIncludeSrc, {
      base: srcFolder,
      allowEmpty: true,
    })
    .pipe(applyFileInclude())
    .pipe(gulp.dest(destFolder))
    .pipe(plugins.browserSync.stream());
};

const html = (isBuild) => {
  return gulp
    .src(projectPaths.pagesSrc, { base: srcFolder, allowEmpty: true })
    .pipe(logger.handleError("HTML"))
    .pipe(plugins.changed(destFolder))
    .pipe(applyFileInclude())
    .pipe(plugins.if(isBuild, plugins.prettier()))
    .pipe(gulp.dest(destFolder))
    .pipe(plugins.browserSync.stream());
};

export { html, htmlInclude };
