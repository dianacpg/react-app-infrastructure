// build_utils/webpack.development.ts



module.exports = () => ({
    //entry file to start compiling. dir based on package.json
    output: {
      path: path.resolve(__dirname, "../../public"),
      filename: "bundle.js",
    },
  });
  