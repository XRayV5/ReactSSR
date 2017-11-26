import React from 'react'
import { StaticRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import { Provider } from 'react-redux'
import { renderToString } from 'react-dom/server'
import { wrapWithHtmlTemplate } from './template'

// import Routes from '../Routes'
const connectRouterToStore = (Routes, path) => store => (
  <Provider store={store}>
    <StaticRouter context={{}} location={path}>
      <div>{renderRoutes(Routes)}</div>
    </StaticRouter>
  </Provider>
)

export default function (Routes, { path }, store) {
  const componentWithRouter = connectRouterToStore(Routes, path)(store)
  const componentToString = renderToString(componentWithRouter)
  return wrapWithHtmlTemplate(componentToString, store)
}
