const webpack = require("webpack");

module.exports = 
   {
    output: {
      filename: "bundle.js",
    },
    devtool: "eval-source-map",
    devServer: {
      // Enables HMR (hot module replacement) - preserve state
      hot: true,
      open: true,
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
    ],
  };
  