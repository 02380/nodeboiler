const MinifyPlugin = require('babel-minify-webpack-plugin');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
    plugins: [
        new MiniCssExtractPlugin({
          filename: 'bundle.css',
        })
    ],
    entry: __dirname + '/src/index.js',
    output: {
        path: __dirname + '/dist',
        publicPath: '/dist/',
        filename: 'bundle.js'
    },
    module: {
    rules: [
        {
            test: /\.css$/i,
            use: [MiniCssExtractPlugin.loader, 'css-loader'],
        },
        {
            test: /\.js$/,
            exclude: /node_modules/,
            include: /src/,
            use: {
                loader: 'babel-loader'
            }
        }
    ],
    },
    optimization: {
        minimizer: [new MinifyPlugin(), new OptimizeCSSAssetsPlugin({})]
    },
};