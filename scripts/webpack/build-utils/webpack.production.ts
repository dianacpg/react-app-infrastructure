// build_utils/webpack.production.ts

const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = 
   {
  output: {
    path: path.resolve(__dirname, "../../public"),
    filename: "productions.js",
  },
  cache: true,
};
