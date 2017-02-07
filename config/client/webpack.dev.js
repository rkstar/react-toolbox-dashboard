var webpack = require('webpack')
var CompressionPlugin = require('compression-webpack-plugin')
var path = require('path')
var root = path.resolve('.')
var dir = {
  utils: path.join(root, 'src', 'classes'),
  src: path.join(root, 'src', 'client'),
  build: path.join(root, 'dist', 'client')
}

module.exports = {
  devtool: 'eval-source-map',
  target: 'web',
  entry: [
    'webpack-hot-middleware/client',
    dir.src
  ],
  resolve: {
    modules: ['node_modules', dir.src],
    extensions: ['.css', '.js', '.jsx', '.ts', '.tsx', '.json', '.html'],
    enforceExtension: false
  },
  output: {
    path: dir.build,
    filename: 'bundle.js',
    publicPath: '/'
  },
  plugins: [
    // new webpack.NoEmitOnErrorsPluginStatic(),
    new webpack.HotModuleReplacementPlugin(),
    // bring down the file size in production!
    // https://medium.com/@rajaraodv/two-quick-ways-to-reduce-react-apps-size-in-production-82226605771a#.ojksydfiu
    new webpack.NamedModulesPlugin(),
    new webpack.DefinePlugin({
      'process.env': {'NODE_ENV': JSON.stringify('development')}
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true
    }),
    new webpack.optimize.AggressiveMergingPlugin(),
    new CompressionPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.js$|\.css$|\.html$/,
      threshold: 10240,
      minRatio: 0.8
    }),
    new webpack.LoaderOptionsPlugin({
      debug: true,
      minimize: false,
      options: {
        context: path.join(dir.src, '../')
      }
    })
  ],
  module: {
    rules: [{
      enforce: 'pre',
      test: /\.jsx?$/,
      use: ['source-map-loader', 'babel-loader'],
      exclude: /node_modules/
    },{
      test: /\.tsx?$/,
      use: ['react-hot-loader', 'babel-loader', 'awesome-typescript-loader?configFileName=config/client/tsconfig.json'],
      exclude: /node_modules/
    },{
      test: /\.json$/,
      use: ['json-loader'],
      exclude: /node_modules/
    },{
      test: /\.css$/,
      include: [/node_modules/, dir.src],
      use: [{
        loader: 'style-loader'
      },{
        loader: 'css-loader',
        options: {
          modules: true,
          sourceMap: true,
          importLoaders: 1,
          localIdentName: '[local]' // if this has a hash applied, we won't be able to use our classnames defined
        }
      }, {
        loader: 'postcss-loader',
        options: {
          plugins: function(){
            return [
              require('postcss-import')(),
              require('postcss-cssnext')({ browsers: ['> 1%', 'last 4 versions']}),
              require('postcss-reporter')({ clearMessages: true })
            ]
          }
        }
      }]
    },{
      test: /\.html$/,
      use: ['file-loader', 'html-loader', 'url-loader'],
      exclude: /node_modules/
    }]
  }
}