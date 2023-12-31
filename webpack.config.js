const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

const { resolve } = require('path');

module.exports = {
	entry: {
		app: './src/index.js',
	},
	output: {
		path: resolve(__dirname, './dist'),
		filename: 'bundle.js',
	},
	module: {
		rules: [
			// {
			// 	test: /\.(png|jpe?g|webp|git|svg|)$/i,
			// 	use: [
			// 		{
			// 			loader: "img-optimize-loader",
			// 			options: {
			// 				compress: {
			// 					mode: "high",
			// 				},
			// 			},
			// 		},
			// 	],
			// },
			// {
			// 	test: /\.css$/,
			// 	use: [MiniCssExtractPlugin.loader, 'css-loader'],
			// 	exclude: /node_modules/,
			// },
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.(s(a|c)ss)$/,
				use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
				exclude: /node_modules/,
			},
			{
				test: /\.html$/,
				loader: 'html-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.m?js$/,
				exclude: /node_modules/,

				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env', 'minify'],
					},
				},
			},
			{
				test: /\.tsx?$/,
				use: [
					{
						loader: 'babel-loader',
						options: {
							presets: ['@babel/preset-env', 'minify'],
						},
					},
					'ts-loader',
				],
				exclude: /node_modules/,
			},
			{
				test: /\.php$/i,
				use: 'raw-loader',
			},
		],
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
	},
	optimization: {
		minimizer: [new CssMinimizerPlugin()],
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: 'main.css',
			chunkFilename: 'main.css',
		}),
		new CssMinimizerPlugin(),
		new HtmlWebpackPlugin({
			template: './src/index.html',
			filename: './index.html', //relative to root of the application
		}),
		new HtmlWebpackPlugin({
			template: './src/html/a.html',
			filename: './a.html', //relative to root of the application
		}),
	],
	devServer: {
		static: {
			directory: resolve(__dirname, 'dist'),
		},
		compress: true,
		port: 9000,
	},
};
