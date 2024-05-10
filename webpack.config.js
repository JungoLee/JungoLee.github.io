import { resolve } from "path";
import { isBuild, noWebpack } from "./gulp/config/paths.js";

const webpackConfig = {
  entry: {
    index: "./src/assets/scripts/common.js",
  },
  mode: isBuild ? "production" : "development",
  output: {
    filename: "common.min.js",
    chunkFilename: "modules/[name].js",
    path: isBuild
      ? resolve("build", "assets", "scripts")
      : resolve("dist", "assets", "scripts"),
    publicPath: isBuild ? "/assets/scripts/" : "/assets/scripts/", // MIME 타입 에러 났을때 여기 수정해야함
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
        resolve: {
          fullySpecified: false,
        },
      },
    ],
  },

  optimization: {
    minimize: isBuild ? true : false,
    splitChunks: {
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name(module) {
            const packageName = module.context
              .match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1]
              .replace("@", "");
            return `lib/${packageName}`;
          },
          chunks: "async",
          enforce: true,
        },
      },
    },
  },
};

export default webpackConfig;
