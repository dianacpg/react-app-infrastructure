import webpack from "webpack";

module.exports = {
  devtool: "eval-source-map",
  devServer: {
    host: "0.0.0.0",
    historyApiFallback: true,
    // Enables HMR (hot module replacement) - preserve state
    hot: true,
    open: true,
    port: 1234,
    allowedHosts: "all",
    client: {
      overlay: {
        warnings: false,
        errors: true,
      },
    },
  },
};
