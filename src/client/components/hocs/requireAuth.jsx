import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

export default (InnerComponent) => {
  class RequireAuth extends Component {
    render() {
      switch (this.props.auth) {
        case false:
          return <Redirect to="/" />
        case null:
          return <div>Loading...</div>
        default:
          return <InnerComponent {...this.props} />
      }
    }
  }

  return connect(({ auth }) => ({ auth }))(RequireAuth)
}
