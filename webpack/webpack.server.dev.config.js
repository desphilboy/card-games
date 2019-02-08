var webpack = require('webpack');
var path = require('path');

module.exports = {
    mode: "development",
    entry: [
        path.join(__dirname, '../src/server/index.js')
    ],
    module: {
        rules: [{
            test: /\.(js)$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }]
    },
    output: {
        path: __dirname + '/../server-dist',
        filename: 'server-bundle.js'
    },
    target: 'node'
};