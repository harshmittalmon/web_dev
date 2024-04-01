// const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: './src/index.js',
    mode: 'development',
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Restaurant',
            inject: 'body',
        }),
    ],
    devtool:'inline-source-map',// for indentifying which file cause error while bundling
    devServer: {
        static: './dist',
    },
    optimization: {
        runtimeChunk: 'single',
    },
    // output: {
    //     filename: '[name].js',
    //     path: path.resolve(__dirname, 'dist'),
    // },
    module: {
        rules: [
          {
            test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
            type: "asset/resource",
          },
          {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
          },
          
          {
            test: /\.(woff|woff2|eot|ttf|otf)$/i,
            type: 'asset/resource',
          }
        ],
    },


};