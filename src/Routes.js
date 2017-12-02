import React from 'react'
import UserList from './client/pages/UserList'
import Home from './client/pages/Home'
import App from './client/App'
import NotFoundPage from './client/pages/NotFoundPage'
import AdminsListPage from './client/pages/AdminsListPage'
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
      {
        ...AdminsListPage,
        path: '/admins',
      },
      {
        // Not providing a path property, this will match any not matched route
        // present NotFoundPage
        ...NotFoundPage,
      },
    ],
  },
]
