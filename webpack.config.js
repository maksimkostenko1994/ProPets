import path from 'path'
import webpack from 'webpack'
import HtmlPlugin from 'html-webpack-plugin'

import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const config = {
    mode: 'development',
    context: path.join(__dirname, './front/'),
    entry: {
        index: './index.js'
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                exclude: /node_modules/,
                use: ['html-loader']
            },
            {
                test: /\.(js|jsx|mjs|ejs)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.(css|scss|sass)$/,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.css', '.ts', '.mjs', '.ejs', '.scss', '.sass']
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlPlugin({
            template: './index.html',
            inject: 'body'
        })
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js',
        publicPath: '/dist/'
    },
    devServer: {
        host: 'localhost',
        port: 3030,
        static: path.join(__dirname, '/dist/'),
        open: true,
        compress: true,
        hot: true,
        historyApiFallback: true
    }
}

export default config;