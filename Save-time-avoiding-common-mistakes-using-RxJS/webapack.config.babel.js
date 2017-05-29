module.exports = env => ({
    output: {
        filename: env.cache ? "[chunkhash].js" : "bundle.js", 
        chunkFilename: env.cache ? "[chunkhash].js" : "[id].chunk.js
    }
});