const path = require('path')
const webpack = require('webpack')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const APP_DIR = path.resolve(__dirname, './src')

const LIBS = ['react', 'react-dom', 'react-router-dom', 'prop-types']

module.exports = {
	entry: {
		app: './src/index.js',
		vendor: LIBS
	},
	devtool: 'inline-source-map',
	devServer: {
		 contentBase: path.join(__dirname, "build"),
		 compress: true,
		 port: 3000,
		 historyApiFallback: true
   },
   module: {
		rules: [
			{
				test: /\.jsx?$/,
		      exclude: /node_modules/,
		      include: APP_DIR,
		      loader: 'babel-loader',
		      query: {
		        presets:[ 'es2015', 'react', 'stage-2' ]
		      }
		   },
			{ 
				test: /\.css$/, 
				exclude: /node_modules/, 
				include: APP_DIR, 
				use: [
					"style-loader", 
					"css-loader"
				] 
			},
			{
				test: /\.(png|svg|jpg|gif)$/,
				exclude: /node_modules/, 
				include: APP_DIR, 
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[path][name]-[hash:8].[ext]'
						},
					},
				]
			}
		]
	},
	plugins: [
		new CleanWebpackPlugin(['build']),
		new HtmlWebpackPlugin({
     		title: 'Development',
     		template: './src/template.html'
			}),
		new webpack.NamedModulesPlugin(),
		new CopyWebpackPlugin([
			{ from: 'assets', to: 'assets' }
		 ]),
	],
	output: {
	 filename: '[name].[hash:8].js',
	 path: path.join(__dirname, 'build'),
	 publicPath: '/'
	}
}