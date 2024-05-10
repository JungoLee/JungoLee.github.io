import path from "path";
import chalk from "chalk";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const isBuild = process.argv.includes("--build");
const noWebpack = process.argv.includes("--noWebpack");
const destFolder = isBuild ? "build" : "dist";
const srcFolder = "src";
const settingPaths = {
  fileExtensions: {
    pages: ["html", "vue", "md", "twig", "hbs", "njk", "jsx", "tsx"],
    styles: ["scss", "sass", "less", "css"],
    scripts: ["js", "ts", "json"],
    images: [
      "png",
      "jpg",
      "jpeg",
      "gif",
      "svg",
      "ico",
      "webp",
      "mp4",
      "avi",
      "wmv",
      "mkv",
      "mov",
      "flv",
      "webm",
      "3gp",
      "mpeg",
      "ogg",
    ],
    fonts: ["csv", "eot", "ttf", "woff", "woff2"],
  },
  folderInclude: "include",
  folderPages: "pages",
  folderComponents: "components",
  folderStyles: "styles",
  folderScripts: "scripts",
  folderImages: "images",
  folderFonts: "fonts",
  folderAssets: "assets",
  folderPublic: "public",
  serverIndex: "index.html",
  projectDirName: path.basename(path.resolve()),
  folderBackup: "_backup",
  fileBackup: [
    `**/*.*`,
    `!.git`,
    `!.git/**/*.*`,
    `!node_modules/**/*.*`,
    `!_backup/**/*.*`,
    `!dist/**/*.*`,
    `!build/**/*.*`,
  ],
  folderFtp: "build/**/*.*",
  keyFtp: path.join(__dirname, "DEV_HOST_UXDEV.pem"),
  folderFtpServer: "/home/uxdev/deploy/static", // 원격 서버의 원하는 폴더 경로입니다. Gulp는 프로젝트 폴더 이름을 자동으로 추가합니다.
};
// settingsPaths를 조합해서 실제로 task에서 사용하는 경로들입니다.
const projectPaths = {
  // pages
  pagesSrc: [
    `${srcFolder}/**/*.{${settingPaths.fileExtensions.pages}}`,
    `!${srcFolder}/**/_*.{${settingPaths.fileExtensions.pages}}`,
  ],
  pagesIncludeSrc: [`${srcFolder}/**/*.{${settingPaths.fileExtensions.pages}}`],
  pagesInclude: `${srcFolder}/${settingPaths.folderPages}/${settingPaths.folderInclude}`,
  pagesIncludeWatch: `${srcFolder}/**/_*.{${settingPaths.fileExtensions.pages}}`,

  // styles
  stylesSrc: `${srcFolder}/**/*.{${settingPaths.fileExtensions.styles}}`,

  // scripts
  scriptsSrc: `${srcFolder}/**/*.{${settingPaths.fileExtensions.scripts}}`,

  // images
  imagesSrc: `${srcFolder}/**/*.{${settingPaths.fileExtensions.images}}`,

  // fonts
  fontsSrc: `${srcFolder}/**/*.{${settingPaths.fileExtensions.fonts}}`,

  // public
  publicSrc: `${srcFolder}/${settingPaths.folderPublic}/**/*.*`,

  // server
  serverStart: `${settingPaths.serverIndex}`,

  // backup zip
  backupBase: `${settingPaths.projectDirName}`,
  backupSrc: settingPaths.fileBackup,
  backupDest: `${settingPaths.folderBackup}/`,

  // FTP upload
  ftpSrc: `${settingPaths.folderFtp}`,
  ftpKey: `${settingPaths.keyFtp}`,
  ftpServerDest: `${settingPaths.folderFtpServer}/${settingPaths.projectDirName}`,
};

export { __dirname, isBuild, noWebpack, destFolder, srcFolder, projectPaths };
