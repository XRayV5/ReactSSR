import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'
import { fetchUsers } from '../actions'

class UserList extends Component {
  componentDidMount() {
    this.props.fetchUsers()
  }

  renderUsers() {
    return this.props.users.map(user => <li key={user.id}>{user.name}</li>)
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>User App</title>
          <meta property="og:title" content="User App" />
        </Helmet>
        <ul>{this.renderUsers()}</ul>
      </div>
    )
  }
}

const mapStateToProps = ({ users }) => ({ users })

function loadData(store) {
  return store.dispatch(fetchUsers())
}

const component = connect(mapStateToProps, { fetchUsers })(UserList)
export default { loadData, component }
