module.exports = {
    entry: "../../Asynchronous-Programming-in-JavaScript(FrontendMaster-2015)/38Exercise34.js",
    output: {
        path: __dirname,
        filename: "./bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" }
        ]
    },
	resolve: {
    // you can now require('file') instead of require('file.coffee')
    extensions: ['', '.js', '.json', '.css']
  }
};