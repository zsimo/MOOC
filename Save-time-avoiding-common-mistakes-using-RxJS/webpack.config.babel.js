/**
 * Created by simonesacchi on 31/05/2017.
 */

"use strict";

module.exports = function (env = {}) {

    let path = require("path");
    let HtmlWebpackPlugin = require('html-webpack-plugin');
    const publicPath = path.resolve(__dirname, 'public');

    return {
        entry: "./src/init.js",
        output: {
            path: publicPath,
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