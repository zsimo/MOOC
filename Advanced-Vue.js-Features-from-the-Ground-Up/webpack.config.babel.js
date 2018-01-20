"use strict";

module.exports = function (env = {}) {

    let path = require("path");
    let HtmlWebpackPlugin = require('html-webpack-plugin');

    const publicPath = path.resolve(__dirname, 'public');
    const jsPath = path.resolve(publicPath, 'js');

    console.log(env);

    return {
        entry: "./src/1.1-getter-setter.js",
        output: {
            path: jsPath,
            filename: 'bundle.js'
        },

        devServer: {
            contentBase: publicPath
        },

        plugins: [
            new HtmlWebpackPlugin()
        ]
    };

};