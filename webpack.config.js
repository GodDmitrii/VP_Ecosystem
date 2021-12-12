const webpack = require("webpack");
const path = require("path");
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


const filename = ext => `[name].${ext}`;

module.exports = {
  entry: path.resolve(__dirname, "./src/index.js"),
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"],
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "bundle.js",
  },
  plugins: [new webpack.HotModuleReplacementPlugin(), 
    new HTMLWebpackPlugin({
      template: './src/index.html'
  }),
    new MiniCssExtractPlugin({
        filename: filename('css')
    })],
  devServer: {
    port: path.resolve(__dirname, "./dist"),
    hot: true,
  },
};