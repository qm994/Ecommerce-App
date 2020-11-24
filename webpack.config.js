const path = require('path');
const HtmlWebapckPlugin = require('html-webpack-plugin');
module.exports = {
    // the entry file to kick off everything and we are going to bundle all the modules here
    entry: './src/index.js',
    output: {
        // the path represent where we are going to put those bundled files
        path: path.resolve(__dirname, 'dist'),
        // all the bundled files put this file
        filename: 'index_bundle.js'
    },
    module: {
        rules: [
            // while we use webpack, anytime we see the files end in js, we use 
            // babel-loader to do the transformation
            {test: /\.(js)$/, use: ['babel-loader']},
            {test: /\.(css)$/, use: ['style-loader', 'css-loader']},
            {test: /\.s[ac]ss$/i, use: ['style-loader', 'css-loader', 'sass-loader']},
            {test: /\.svg$/, use: ['@svgr/webpack', 'url-loader']}
        ]
    },
    mode: 'development',
    devServer: {
        historyApiFallback: true,
        publicPath: '/'
    },
    plugins: [
        // this will create a copy of index,html file in apps folder in dist,
        // but the copy one will automatically have the script reference to 
        // bundled file when run npm build
        new HtmlWebapckPlugin({
            template: 'public/index.html'
        })
    ]
};