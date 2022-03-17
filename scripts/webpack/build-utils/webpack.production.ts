// build_utils/webpack.production.ts
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const path = require("path");
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = 
   {
  output: {
    path: path.resolve(__dirname, "../../public"),
    filename: "productions.js",
  },
  cache: true,
  devtool: 'source-map',
  plugins: [ 
    new HtmlWebpackPlugin({
    template: "./src/index.html",
    filename: "index.html",
  }),
  new MiniCssExtractPlugin(),
  new CleanWebpackPlugin()],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader,
           // Creates `style` nodes from JS strings
        "style-loader",
        // Translates CSS into CommonJS
        "css-loader"],
      },
    ],
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
};
