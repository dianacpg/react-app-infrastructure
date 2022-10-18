//loads configuration that matches with mode
import merge from "webpack-merge";
import path from "path";
import { ProcessEnv } from "./types";

//get configs according to mode
const modeConfiguration = (mode: string) => require(`./build-utils/webpack.${mode}.ts`);

module.exports = (env: ProcessEnv) => {
  console.log(`mode is: ${env.mode}`);
  return merge(modeConfiguration(env.mode), {
    mode: env.mode,
    //entry file to start compiling. dir based on package.json
    entry: "./src/index.tsx",
    resolve: {
      extensions: [".js", ".ts", ".tsx"],
    },
    // tells webpack where and how to distribute bundles
    output: {
      path: path.resolve(__dirname, "../../public"),
      filename: "bundle.js",
    },
    // Loaders. Tells webpack how to modify files before its added to dependency graph
    module: {
      rules: [
        {
          test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
          type: "asset/resource",
        },
        {
          test: /\.(woff(2)?|eot|ttf|otf)$/,
          type: "asset/inline",
        },
        {
          test: /\.svg$/,
          loader: "@svgr/webpack",
        },
        {
          test: /\.tsx?$/,
          loader: "babel-loader",
          exclude: /node_modules/,
        },
        {
          test: /\.s[ac]ss$/i,
          use: [
            // Creates `style` nodes from JS strings
            "style-loader",
            // Translates CSS into CommonJS
            "css-loader",
            // Compiles Sass to CSS
            "sass-loader",
          ],
        },
      ],
    },
  });
};
