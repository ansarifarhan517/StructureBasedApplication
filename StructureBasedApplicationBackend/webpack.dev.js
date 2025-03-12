// webpack.dev.js
const { merge } = require('webpack-merge'); // Use webpack-merge to combine configs
const common = require('./webpack.config.js'); // Import common config
const webpack = require('webpack'); // Import webpack for plugins

module.exports = merge(common, {
    mode: 'development', // Set mode to development
    devtool: 'inline-source-map', // Enable source maps for easier debugging
    plugins: [
        new webpack.HotModuleReplacementPlugin(), // Enables hot module replacement
    ],
});
