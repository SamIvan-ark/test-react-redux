const path = require('path');
const webpack = require('webpack');
const ESLintPlugin = require('eslint-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',

    output: {
        filename: '[name].[chunkhash].js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: [
                    {
                        loader: 'babel-loader',
                    },
                ],
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },

    resolve: {
        extensions: ['.js', '.jsx'],
    },
    plugins: [
        new webpack.ProgressPlugin(),
        new HtmlWebpackPlugin({
            title: 'My App',
            template: 'assets/index.html',
            filename: 'index.html',
        }),
        new ESLintPlugin({
            fix: true,
            extensions: ['js', 'jsx'],
        }),
    ],

    devServer: {
        open: true,
        // contentBase: path.join(__dirname, 'dist'),
        historyApiFallback: true,
    },
};
