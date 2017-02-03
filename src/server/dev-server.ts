import * as webpack from 'webpack'
// using require here will ensure that this file gets
// loaded correctly
const config = require('../../config/client/webpack.dev.js')
import * as hotware from 'webpack-hot-middleware'
import * as devware from 'webpack-dev-middleware'
import * as morgan from 'morgan'

export default function(app, environment){
  if( environment !== 'production' ){
    app.use(morgan('short'))

    const compiler = webpack(config)
    app.use(devware(compiler, {
      hot: true,
      publicPath: config.output.publicPath,
      noInfo: true
    }))
    app.use(hotware(compiler))
  }
}