import 'babel-polyfill'
import express from 'express'
import proxy from 'express-http-proxy'
import createStore from './helpers/createStore'
import { matchRoutes } from 'react-router-config'
import reducers from './client/reducers'

import renderRoutesToString from './helpers/render'
import Routes from './Routes'

const app = express()

app.use(
  '/api',
  proxy('http://react-ssr-api.herokuapp.com', {
    proxyReqOptDecorator(opts) {
      opts.headers['x-forwarded-host'] = 'localhost:3000'
      return opts
    },
  }),
)
app.use(express.static('public'))
app.get('*', (req, res) => {
  const initialStore = createStore(req)
  const loadDataPromises = matchRoutes(Routes, req.path).map(({ route }) => route.loadData && route.loadData(initialStore))
  Promise.all(loadDataPromises).then(() => {
    const content = renderRoutesToString(Routes, req, initialStore)
    res.send(content)
  })
})

app.listen(3000, () => {
  console.log('App is listening on port 3000.')
})
