const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

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
		],
	},
};
