import merge from "webpack-merge";
import common from "./webpack.common.js";
import webpack from "webpack";

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./dist"
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
});
