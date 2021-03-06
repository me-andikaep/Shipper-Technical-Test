const webpack = require("webpack");
const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: path.resolve(__dirname, './src/index.js'),

	//export loader module
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: ['babel-loader'],
			},
			{
				test: /\.(css|sass|scss)$/,
				use: [
					{
						loader: 'style-loader',
					},
					{
						loader: 'css-loader',
					},
					{
						loader: 'sass-loader',
					},
				],
			},
			{
				test: /\.(png|svg|jpg|gif)$/,
				loader: 'file-loader',
				options: {
					esModule: false,
				},
			},
		],
	},
	resolve: {
		extensions: ['*', '.js', '.jsx'],
	},
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: 'bundle.js',
	},
	// [webpack-dev-server] "hot: true" automatically applies HMR plugin, you don't have to add it manually to your webpack configuration.
	plugins: [new webpack.HotModuleReplacementPlugin()],
	devServer: {
		// contentBase is deprecated by static in webpack v5
		// contentBase: path.resolve(__dirname, "./dist"),
		static: path.resolve(__dirname, './dist'),
		hot: true,
		historyApiFallback: true,
	},
};