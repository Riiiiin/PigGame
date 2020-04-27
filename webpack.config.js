const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlReplaceWebpackPlugin = require('html-replace-webpack-plugin');

module.exports = {
	entry: './src/js/app.js',
	output: {
		path: path.resolve(process.cwd(), 'dist/js'),
		filename: 'bundle.js',
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: '../css/bundle.css',
			chunkFilename: '[id].css',
			ignoreOrder: false,
		}),
		new HtmlWebpackPlugin({
			filename: '../app.html',
			template: './src/index.html',
			inject: false,
		}),
		new HtmlReplaceWebpackPlugin({
			pattern: '<script src="app.js"></script>',
			replacement: '<script src="js/bundle.js"></script>',
		}),
	],
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
					},
					'css-loader',
				],
			},
			{
				test: /\.(gif|svg|jpg|png)$/,
				use: [
					{
						loader: 'file-loader',
						options: { outputPath: '../img' },
					},
				],
			},
		],
	},
};
