import { merge } from 'webpack-merge'
import commonWebpackConfig from './webpack.common'
import ESLintPlugin from 'eslint-webpack-plugin'
// Import types from webpack and webpack-dev-server
import { Configuration as WebpackConfiguration } from 'webpack'
import { Configuration as DevServerConfiguration } from 'webpack-dev-server'

interface WebpackDevServerConfiguration extends WebpackConfiguration {
    devServer?: DevServerConfiguration; // Use DevServerConfiguration directly
}

const devWebpackConfig: WebpackDevServerConfiguration = merge(commonWebpackConfig, {
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    port: process.env.PORT || 8080,
    host: '0.0.0.0',
    historyApiFallback: true,
    compress: false,
    hot: true,
  },
  optimization: {
    minimize: false,
  },

  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: 'style-loader',
          }, {
            loader: 'css-loader',
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
    ],
  },
  // plugins: [
  //   new ESLintPlugin({
  //     configType: 'flat',
  //     extensions: ['js', 'jsx', 'ts', 'tsx'],
  //     fix: true,
  //     emitError: true,
  //     failOnError: true,
  //     formatter: 'stylish',
  //   }),
  // ],
})

export default devWebpackConfig
