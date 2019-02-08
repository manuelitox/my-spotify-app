import { domain } from 'config/api'
import * as constants from 'constants/search'
import makeActionCreator from 'lib/make-action-creator'
import axiosAuthMiddleware from 'lib/axios-auth-middleware'

import { authUpdate } from './auth'

// Actions creators:
// -----------------
export const searchPending = makeActionCreator(constants.SEARCH_PENDING)
export const searchRejected = makeActionCreator(constants.SEARCH_REJECTED, 'error')
export const searchSuccessFully = makeActionCreator(constants.SEARCH_SUCCESSFULLY, 'data')

// async actions:
// --------------
export const artistsSearch = (query, token) => {
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${ token }`
  }
  return dispatch => {
    dispatch(searchPending())
    axiosAuthMiddleware.get(`${domain}search?q=${query}&type=artist&market=from_token&limit=20&offset=0`, { headers })
    .then(response => dispatch(searchSuccessFully(response.data.artists.items)))
    .catch(error => console.log(error))
  }
}