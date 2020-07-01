const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container
const path = require("path");

module.exports = {
  entry: "./src/index",
  mode: "development",
  devtool:false,
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    port: 3002
  },
  output: {
    publicPath: "http://localhost:3002/",
    filename:"[name].js"
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-react", "@babel/preset-typescript"]
        }
      }
    ]
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "app2",
      library: { type: "var", name: "app2" },
      filename: "remoteEntry.js",
      exposes: {
        UserList: "./src/UserList",
        Title: "./src/Title"
      },
      shared: ["react", "react-dom"]
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html"
    })
  ]
};
