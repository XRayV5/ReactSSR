import React from 'react'
import { renderToString } from 'react-dom/server'
import { wrapWithHtmlTemplate } from './template'
import { StaticRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import { Provider } from 'react-redux'
// import Routes from '../Routes'

export default function (Routes, { path }, store) {
    const componentWithRouter = connectRouterToStore(Routes, path)(store)
    const componentToString = renderToString(componentWithRouter)
    return wrapWithHtmlTemplate(componentToString)
}

const connectRouterToStore = (Routes, path) => {
    return (store) => (
        <Provider store={ store }>
            <StaticRouter context={{}} location={path}>
                <div>{ renderRoutes(Routes) }</div>
            </StaticRouter>
        </Provider> 
    )
}