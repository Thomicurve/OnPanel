const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports  = {
	entry: "./src/index.js",
	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
	},
    mode: 'development',
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.html$/,
                use: [
                    {loader: 'html-loader'}
                ]
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(svg|png|jpg)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/images/[name].[contenthash].[ext]'
                }
            }
        ]
    },
    devServer: {
        compress: true,
        port:  3000,
        open: true,
        historyApiFallback: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: './index.html'
        })
    ]
};

