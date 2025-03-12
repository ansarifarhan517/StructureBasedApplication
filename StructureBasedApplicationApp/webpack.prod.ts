// import TerserPlugin from "terser-webpack-plugin";
// import { WebpackManifestPlugin } from "webpack-manifest-plugin";
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import commonWebpackConfig from './webpack.common'
import { merge } from 'webpack-merge'

const prodWebpackConfig = merge(commonWebpackConfig, {
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
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
  // optimization: {
  //     minimize: true,
  //     minimizer: [
  //         new TerserPlugin({
  //             parallel: true,
  //         }),

  //     ],
  //     splitChunks: {
  //         cacheGroups: {
  //             styles: {
  //                 name: 'styles',
  //                 test: /\.css$/,
  //                 chunks: 'all',
  //                 enforce: true,
  //             },
  //         },
  //     },
  // },
  plugins: [
    // new WebpackManifestPlugin({}),
    new MiniCssExtractPlugin({
      filename: 'assets/css/styles.[name].[fullhash].css',

    }),
  ],
})

export default prodWebpackConfig
