import React from 'react'
// staticContext to {} by default because only static router implements staticContext.
// On the browser side, browser router won't implement this property, so we need to
// set its value to {} instead of undefined to avoid error thrown
const NotFoundPage = ({ staticContext = {} }) => {
  staticContext.notFound = true
  return <div>Oops, route not found.</div>
}

export default {
  component: NotFoundPage,
}
