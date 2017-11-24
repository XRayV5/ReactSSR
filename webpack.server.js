const path = require('path')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.js')
const webpackNodeExternal = require('webpack-node-externals')

const thisConfig = {
	// Flag this config is for running render react on server side
	target: 'node',
	
	entry: './src/index.js',
	
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'build')
	},
	// Config webpack to not bundle unnecessary server-side code into bundle.js
	// This is only to cut down the time of bundling, since non of the code in bundle.js will be shipped to client side 
	externals: [ webpackNodeExternal() ]
}

module.exports = merge(baseConfig, thisConfig)