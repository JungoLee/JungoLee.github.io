import gulp from "gulp";
import { plugins } from "../config/plugins.js";
import {
  __dirname,
  destFolder,
  projectPaths,
  srcFolder,
  noWebpack,
} from "../config/paths.js";
import { logger } from "../config/Logger.js";
import webpack from "webpack-stream";
import webpackConfig from "../../webpack.config.js";

console.log(noWebpack);

const javaScript = async (isDev) => {
  return noWebpack
    ? gulp
        .src([
          `${projectPaths.scriptsSrc}`, // 모든 js, ts, json 파일을 선택
        ])
        .pipe(logger.handleError("JS"))
        .pipe(gulp.dest(destFolder))
        .pipe(plugins.browserSync.stream())
    : gulp
        .src([
          `${projectPaths.scriptsSrc}`, // 모든 js, ts, json 파일을 선택
          `!${srcFolder}/assets/scripts/common/**`, // common 폴더 제외
          `!${srcFolder}/assets/scripts/lib/**`, // lib 폴더 제외
          `!${srcFolder}/assets/scripts/pageComp/**`, // pageComp 폴더 제외
          `!${srcFolder}/assets/scripts/uiComp/**`, // uiComp 폴더 제외
          `!${srcFolder}/assets/scripts/common.js`, // codinglist.js 파일 제외
        ])
        .pipe(logger.handleError("JS"))
        .pipe(gulp.dest(destFolder))
        .pipe(webpack(webpackConfig))
        .pipe(gulp.dest(`${destFolder}/assets/scripts`))
        .pipe(plugins.browserSync.stream());
};

export { javaScript };
