const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const devMode = process.env.NODE_ENV !== 'production'

let config = {
  resolve: {
    extensions: ['.vue', '.js', '.ts', '.scss', '.css'],
    // alias
  },
  context: path.resolve(__dirname, 'src/presets'),
  entry: {
    full: './full.ts',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: '[name].js',
    // library: 'VueVue',
    libraryTarget: 'umd',

    // libraryExport: 'default'
  },
  externals: {
    vuePropertyDecorator: {
      commonjs: 'vue-property-decorator',
      commonjs2: 'vue-property-decorator',
      amd: 'vue-property-decorator',
      root: '_'
    },
    vue: {
      commonjs: 'vue',
      commonjs2: 'vue',
      amd: 'vue',
      root: '_'
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        options: { appendTsSuffixTo: [/\.vue$/] }
      },
      {
        test: /\.scss$/,
        use: [
          //   'vue-style-loader', // creates style nodes from JS strings
          // MiniCssExtractPlugin.loader,
          // devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader', // translates CSS into CommonJS (interprets @import and url() like import/require())
          'sass-loader' // compiles Sass to CSS, using Node Sass by default
        ]
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].css',
    })
  ]
}

module.exports = (env, argv) => {
  let production = argv.mode === 'production';

  config.devtool = production
                  ? false
                  : 'eval-sourcemap';

  // if (argv.mode === 'development') {
  //   config.devtool = 'none'
  // }

  return config;
}
