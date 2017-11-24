import React from 'react'
import { Route } from 'react-router-dom'
import Home from './client/components/Home'
import UserList, { loadData } from './client/components/UserList'

export const _routes = () => {
    return (
        <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/users" component={UserList} />
        </div>
    )
}


export default [
	{
		path: '/',
		component: Home,
		exact: true
	},
	{
		path: '/users',
		component: UserList,
		loadData,
	}
]