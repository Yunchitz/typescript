var ExtractTextPlugin = require("extract-text-webpack-plugin");
var webpack = require('webpack');
module.exports = {
        context: __dirname + '/app',
        entry: './index.ts',
        output: {
                path: __dirname + '/app',
                filename: 'bundle.js'
        },
        devServer: {
                host: 'localhost',
                port: 3000,
                contentBase: __dirname + '/app'
        },
        module: {
                loaders: [

                        {
                                test: /\.ts$/,
                                loader: 'ts-loader'
                        },

                        {
                                test: /\.css$/,
                                loader: ExtractTextPlugin.extract("style-loader", "css-loader")
                        },
                        {
                                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                                loader: "url-loader?limit=10000&minetype=application/font-woff&name=assets/fonts/[name].[ext]"
                        },
                        {
                                test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                                loader: "file-loader?limit=10000&name=assets/fonts/[name].[ext]"
                        }
                ]
        },
        plugins: [
                new ExtractTextPlugin("bundle.css"),
                new webpack.optimize.UglifyJsPlugin()
        ]
};