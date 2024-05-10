import gulp from "gulp";

import {
  __dirname,
  isBuild,
  destFolder,
  srcFolder,
  projectPaths,
} from "../config/paths.js";
import { logger } from "../config/Logger.js";

const copy = () => {
  return gulp
    .src(projectPaths.publicSrc, { base: srcFolder, allowEmpty: true })
    .pipe(logger.handleError("COPY"))
    .pipe(gulp.dest(destFolder));
};

export { copy };
