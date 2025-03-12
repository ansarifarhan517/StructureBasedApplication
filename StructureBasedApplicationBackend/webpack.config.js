// webpack.config.js
const path = require('path');

module.exports = {
    entry: './src/index.ts', // Entry point of your application
    target: 'node',          // Target environment (Node.js)
    module: {
        rules: [
            {
                test: /\.ts$/,          // Handle TypeScript files
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.js'], // Resolve these extensions
    },
    output: {
        filename: 'bundle.js', // Output file name
        path: path.resolve(__dirname, 'dist'), // Output directory
    },
};