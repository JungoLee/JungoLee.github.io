import gulp from "gulp";
import gulpSass from "gulp-sass"; // gulp css preprocessors.
import * as sass from "sass"; // css preprocessors.
import cleanCss from "gulp-clean-css";
import sourcemaps from "gulp-sourcemaps";
import postcss from "gulp-postcss";
import presetEnv from "postcss-preset-env";
import purgecss from "@fullhuman/postcss-purgecss";
import sortCSSmq from "postcss-sort-media-queries";
import mergeLonghand from "postcss-merge-longhand";
import mergeRules from "postcss-merge-rules";
import mergeIdents from "postcss-merge-idents";
import optSvgo from "postcss-svgo";
import dependents from "gulp-dependents";

import { plugins } from "../config/plugins.js";
import { logger } from "../config/Logger.js";
import {
  __dirname,
  isBuild,
  destFolder,
  srcFolder,
  projectPaths,
} from "../config/paths.js";

const sassTranspile = gulpSass(sass);

// CleanCSS는 CSS를 압축하고 최적화하는 데 사용되는 도구 옵션 설정
const cleanCSSOptions = {
  compatibility: "ie11", // 여기에 원하는 cleanCSS 옵션을 추가
};

// CSS에 자동으로 vendor prefixes를 적용하여 브라우저 호환성을 향상시키는 도구 옵션 설정
const autoprefixerOptions = {
  overrideBrowserslist: [
    // 지원하려는 브라우저와 해당 버전을 나타내는 배열
    "> 1%",
    "last 3 version",
    "defaults",
    "not dead",
    "not op_mini all",
    // 'ie >= 11',
    // 'Android >= 4.2',
    // 'iOS >= 6',
  ],
  grid: true, // 그리드 레이아웃에 대한 autoprefixing을 활성화할지 여부를 나타내는 불리언 값입니다
  cascade: false, // endor prefixes를 압축된 형태로 유지할지 여부를 나타내는 불리언 값입니다.
};

// PostCSS는 CSS를 변환하고 처리하기 위한 도구 옵션 설정
const postcssConfig = [
  presetEnv({
    stage: 2, // ECMAScript proposal 단계 2에 해당하는 기능을 사용하도록 설정합니다.
    autoprefixer: autoprefixerOptions,
  }),
  // purgecss - 사용되지 않는 CSS 규칙을 제거하여 번들 크기를 최적화합니다.
  purgecss({
    content: [`${srcFolder}/**/*.{html,twig,hbs,njk,js,ts,jsx,tsx,vue}`], // 어떤 파일에서 CSS 클래스가 사용되는지 알려줍니다.
    skippedContentGlobs: ["node_modules/**", "bower_components/**"], // 제외할 파일 패턴을 정의합니다.
    safelist: [
      ":where",
      ":is",
      ":has",
      "hidden",
      "active",
      "open",
      "lock-fixed",
      "lock",
    ], // PurgeCSS가 제거하지 말아야 할 클래스를 지정합니다.
    keyframes: true,
    variables: false,
    fontFace: false,
  }),
  sortCSSmq({
    // 미디어 쿼리를 정렬하여 코드의 가독성을 높입니다.
    sort: "desktop-first", // 데스크톱 미디어 쿼리를 먼저 정렬하도록 지정합니다.
  }),
  mergeRules(), // 중복된 규칙을 병합하여 코드 크기를 최적화합니다.
  mergeLonghand(), // 속성의 긴 형태를 짧은 형태로 병합하여 코드를 간결하게 만듭니다.
  mergeIdents(), // CSS 식별자를 병합하여 코드 크기를 최적화합니다.
  optSvgo({
    // SVG 최적화를 수행하여 SVG 파일 크기를 최소화합니다.
    encode: true, // SVG 파일을 인코딩하여 디코딩 속도를 향상시킵니다.
  }),
];

const scss = (isBuild) => {
  return (
    gulp
      .src(projectPaths.stylesSrc, { base: srcFolder, allowEmpty: true })
      .pipe(logger.handleError("SCSS"))
      // .pipe(plugins.changed(destFolder))
      // .pipe(plugins.newer(destFolder))
      // .pipe(plugins.cached('scss'))
      // .pipe(dependents())

      .pipe(plugins.if(!isBuild, sourcemaps.init()))
      .pipe(
        sassTranspile(
          {
            outputStyle: "expanded",
            indentWidth: 4, // 들여쓰기 크기를 4로 설정
          },
          null
        )
      )

      .pipe(postcss([presetEnv({ autoprefixer: autoprefixerOptions })]))
      .pipe(plugins.if(isBuild, postcss(postcssConfig)))

      .pipe(plugins.if(isBuild, cleanCss(cleanCSSOptions)))
      .pipe(plugins.if(!isBuild, sourcemaps.write(".")))
      .pipe(gulp.dest(destFolder))
      .pipe(plugins.browserSync.stream())
  );
};

export { scss };
