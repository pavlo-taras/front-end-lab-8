const webpack = require("webpack");
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: ['./src/app.js', './src/clock/canvasState.js', './src/clock/clock.js'],
    output: {
        filename: "app.bundle.js",
        path: path.resolve(__dirname, 'bin')
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new ExtractTextPlugin('style.css'),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/app.html'
        }),
        new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)
    ],
    module: {
		rules: [
			{
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    use: ["css-loader", "sass-loader"],
                    fallback: 'style-loader'
                })
			}
		]
	}
}
