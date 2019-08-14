const path = require("path");

module.exports = {
  entry: "./src/index",

  output: {
    path: path.resolve(__dirname, "src"),
    filename: "app.js",
    publicPath: "/js"
  },

  devServer: {
    contentBase: path.join(__dirname, "src")
  },
  devtool: "source-map"
};
