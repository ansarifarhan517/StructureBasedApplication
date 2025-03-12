// webpack.prod.js
const { merge } = require('webpack-merge');
const common = require('./webpack.config.js');
const TerserPlugin = require('terser-webpack-plugin'); // Import Terser for minification

module.exports = merge(common, {
    mode: 'production', // Set mode to production
    optimization: {
        minimize: true, // Enable minimization
        minimizer: [new TerserPlugin()], // Use Terser for minification
    },
});
