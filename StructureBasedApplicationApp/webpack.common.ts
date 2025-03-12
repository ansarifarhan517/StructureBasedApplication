import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import { Configuration } from 'webpack'

const commonWebpackConfig: Configuration = {
  entry: './index.tsx',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'assets/js/[name][fullhash].js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js', '.json'],
    alias: {
      '@utils': path.resolve(__dirname, 'src/utils'),
      '@api': path.resolve(__dirname, 'src/api'),
      '@config': path.resolve(__dirname, 'src/config'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@ui-library': path.resolve(__dirname, 'src/ui-library'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@redux': path.resolve(__dirname, 'src/redux'),


    },
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: 'ts-loader',
      },
      {
        test: /\.html$/,
        exclude: /dist/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
      {
        test: /\.(png|jpg|gif|ico|webp)$/,
        loader: 'file-loader',
        options: {
          outputPath: 'assets/images/',
          name: '[name].[ext]',
        },
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack', 'url-loader'],
      },
      {
        test: /\.(mp4)$/,
        loader: 'file-loader',
        options: {
          outputPath: 'assets/videos/',
          name: '[name].[ext]',
        },
      },
      {
        test: /\.(mp3|wav)$/,
        loader: 'file-loader',
        options: {
          outputPath: 'assets/sounds/',
          name: '[name].[ext]',
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      filename: './index.html',
    }),
  ],
}

export default commonWebpackConfig
