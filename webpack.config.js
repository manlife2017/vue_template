const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    entry: './src/app.js',
    context: path.resolve(__dirname),   
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    module: {
        rules: [
            {test: /\.css$/,use: ['style-loader','css-loader']},
            {test: /\.vue$/,use: 'vue-loader'},
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude:/node_modules/
            },


        ]
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
        'vue$': 'vue/dist/vue.esm.js',
        }
    },
    devtool: 'source-map',
    devServer: {
        hot: true,
        contentBase: 'src', // since we use CopyWebpackPlugin.
        compress: true,
        port:8000
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({  // Also generate a test.html
            filename: 'index.html',
            template: path.join(__dirname, "./src/index.html")
        }),
        new VueLoaderPlugin()
    ]
};

