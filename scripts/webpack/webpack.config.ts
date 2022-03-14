const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require('dotenv-webpack');
//loads configuration that matches with mode
const { merge } = require("webpack-merge");

import dotEnv from "dotenv";
import { DefinePlugin } from "webpack";
const isDev = process.env.NODE_ENV === "development";
const envVars = isDev
  ? {
      ...dotEnv.config().parsed,
    }
  : {};

const modeConfiguration = env => require(`./build-utils/webpack.${env}.ts`);

//if we fail to pass an env to let webpack know which mode to work with,
// it defaults to production.

module.exports = ({ mode } = { mode: "production" }) => {
  console.log(`mode is: ${mode}`);
  return merge(
    {
      mode,
      //entry file to start compiling. dir based on package.json
      entry: "./src/index.tsx",
      output: {
        path: path.resolve(__dirname, "../../public"),
        filename: "bundle.js",
      },
      devServer: {
        // Enables HMR (hot module replacement) - preserve state
        hot: true,
        open: true,
      },
      devtool: "eval-source-map",
      resolve: {
        extensions: [".js", ".ts", ".tsx"],
      },
      module: {
        rules: [
          {
            test: /\.jpe?g|png$/,
            exclude: /node_modules/,
            use: ["url-loader", "file-loader"],
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
      plugins: [
        new HtmlWebpackPlugin({
          template: "./src/index.html",
          filename: "index.html",
        }),
        new DefinePlugin({
          "process.env": JSON.stringify(envVars), // it will automatically pick up key values from .env file
        }),
        new webpack.HotModuleReplacementPlugin(),
      ],
    },
    modeConfiguration(mode)
  );
};
