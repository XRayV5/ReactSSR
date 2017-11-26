import React from 'react'
import UserList from './client/pages/UserList'
import Home from './client/pages/Home'
import App from './client/App'

// This is how to nest routes in plain object literal format in Router V4
export default [
  {
    ...App,
    routes: [
      {
        ...Home,
        path: '/',
        exact: true,
      },
      {
        ...UserList,
        path: '/users',
      },
    ],
  },
]
