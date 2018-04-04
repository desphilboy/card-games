var webpack = require('webpack');
var path = require('path');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin')

module.exports = {
    mode: "development",
    entry: [
        path.join(__dirname, '../src/index.js')
    ],
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }, {
            test: /\.(less|css)$/,
            loaders: ["style-loader", "css-loader", "less-loader"]
        }]
    },
    output: {
        path: __dirname + '/../dist',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: __dirname + '/../dist',
        historyApiFallback: true,
        port: 3010,

    },
    plugins: [
        new BrowserSyncPlugin({
            host: 'localhost',
            port: 3010,
            server: {
                baseDir: ['dist']
            }
        })
    ]
};