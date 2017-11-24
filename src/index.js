import 'babel-polyfill'
import express from 'express'
import { createStore, applyMiddleware  } from 'redux'
import thunk from 'redux-thunk'
import { matchRoutes } from 'react-router-config'
import reducers from './client/reducers'

import Home from './client/components/Home'
import renderRoutesToString from './helpers/render'
import Routes from './Routes'

const app = express()

app.use(express.static('public'))

app.get('*', (req, res) => {
	const initialStore = createStore(reducers, {}, applyMiddleware(thunk))
	const loadDataPromises = matchRoutes(Routes, req.path).map(({ route }) => route.loadData && route.loadData(initialStore))
	Promise.all(loadDataPromises)
		.then((data) => {
			const content = renderRoutesToString(Routes, req, initialStore);
			res.send(content);
		})
})

app.listen(3333, () => {
	console.log("App is listening on port 3333.");
})

