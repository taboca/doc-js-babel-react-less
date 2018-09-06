var path = require("path");
var DIST_DIR = path.resolve(__dirname, "dist");
var SRC_DIR = path.resolve(__dirname, "src");
var config = {
    entry: [ SRC_DIR + "/index.js"],
    output: {
        path: DIST_DIR + "/",
        filename: "bundle.js",
        publicPath: "/"
    },
    module: {
        rules: [
            {
                test: /\.js?/,
                exclude: "/node_modules/",
                include: SRC_DIR,
                loader: "babel-loader",
                query: {
                    presets: ["@babel/preset-react", "@babel/preset-env"]
                }
            },
            {
              test: /\.css$/,
              use: ["style-loader", "css-loader"]
            },

            {
              test: /\.less$/,
              use: [
                {
                  loader: "style-loader"
                },
                {
                  loader: "css-loader",
                  options: {
                    sourceMap: true,
                    modules: true,
                    localIdentName: "[local]___[hash:base64:5]"
                  }
                },
                {
                  loader: "less-loader"
                }
              ]
            }

        ]
    }
};
module.exports = config;
