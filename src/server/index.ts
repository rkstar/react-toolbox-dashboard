import * as express from 'express'
import * as path from 'path'
import devServer from './dev-server'

// path.resolve is relative to the dir node is run from
const clientDir :string = path.resolve('./dist/client')
const host :string = 'localhost'
const port :number = 3000
const app :express.Application = express()

// this is for react hot-module-reloading
devServer(app, process.env.NODE_ENV)

// we want to trust our proxy thru haproxy so that
// we can get the client ip address in our graphql resolvers
app.enable('trust proxy')

// static server assets
app.use(express.static(clientDir))

// routes...

// this middleware allows us to return previously gzipped files!
// ie. gzipped by webpack instead of express === performance bump
app.get('*.js', (req, res, next)=>{
  req.url = `${req.url}.gz`
  res.set('Content-Encoding', 'gzip')
  next()
})

// wildcard handler to serve index.html for every route
app.get('*', (req, res)=>{
  res.status(200)
    .sendFile(`${clientDir}/index.html`)
})

// START.
app.listen(port, (err)=>{
  if( err ){ return console.log(err) }
  console.log(`listening at http://${host}:${port}`)
})