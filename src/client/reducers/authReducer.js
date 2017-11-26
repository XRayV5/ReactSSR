import { FETCH_CURRENT_USER } from '../actions'

// For authtication related reducers, it is recommended to set the initial state as null
export default function (state = null, action) {
  switch (action.type) {
    case FETCH_CURRENT_USER:
      return action.payload.data || false
    default:
      return state
  }
}
