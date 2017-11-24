import axios from 'axios'
export const FETCH_USERS = 'FETCH_USERS'

const baseAPIUrl = 'http://react-ssr-api.herokuapp.com'

export const fetchUsers = () => async dispatch => {
    const res = await axios.get(`${baseAPIUrl}/users`)
    dispatch({
        type: FETCH_USERS,
        payload: res
    })
}