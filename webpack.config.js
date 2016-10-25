let webpack = require('webpack');
let path = require('path');
let ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: {
		app: ['./src/app'],
		index: ['./src/index/index'],
		user: ['./src/user/user'],
		// 添加要打包在vendors里面的库
		vendors: ['vue', 'vue-router']
	},
	output: {
		path: path.resolve(__dirname + '/build'),
		publicPath: '/build/',
		filename: '[name].js',
		chunkFilename: '[name].[hash].js'
	},
	module: {
		loaders: [
			{ test: /\.vue$/, loader: 'vue'},
			{ test: /\.js$/, exclude:/node_modules/, loader: 'babel' },
			{ test: /\.css$/, loader: ExtractTextPlugin.extract({
				fallbackLoader: 'style-loader',
				loader: 'css-loader'
			}), exclude: /node_modules/ },
			// { test: /\.css$/, loader: "style-loader!css-loader"},
			{ test: /\.scss$/, loader: ExtractTextPlugin.extract({
				fallbackLoader: 'style-loader',
				loader: 'css-loader!sass-loader'
			}), exclude: /node_modules/ }
		]
	}, 
	plugins: [
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: '"production"'
			}
		}),
		new webpack.BannerPlugin('This file is created by wangzhe'),
		new ExtractTextPlugin({
			filename: '[name].css',
			disable: false,
			allChunks: true
		}),
		//把入口文件里面的数组打包成vendors.js
        new webpack.optimize.CommonsChunkPlugin({
        	name : 'vendor',
        	filename: 'vendor.bundle.js'
        })
	]
}