const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
	output: {
		path: path.join(__dirname, '/dist'),
		filename: 'bundle.js',
	},
	devServer: {
		port: 3000,
		historyApiFallback: true,
	},
	entry: './src/index.tsx',
	module: {
		rules: [
			{
				test: /\.(js)?$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
			},
			{
				test: /\.(ts|tsx)?$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.(png|woff|woff2|eot|ttf|svg|ico|json)$/, // to import images and fonts
				loader: 'url-loader',
				options: { limit: false },
			},
		],
	},
	resolve: {
		extensions: ['.jsx', '.js', '.ts', '.tsx'],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/assets/index.html',
		}),
	],
}
