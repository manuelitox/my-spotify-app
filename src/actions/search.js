import axios from "axios"

import { domain } from 'config/api'
import * as constants from 'constants/search'
import makeActionCreator from 'lib/make-action-creator'

// Actions creators:
// -----------------
export const searchPending = makeActionCreator(constants.SEARCH_PENDING)
export const searchRejected = makeActionCreator(constants.SEARCH_REJECTED, 'error')
export const searchSuccessFully = makeActionCreator(constants.SEARCH_SUCCESSFULLY, 'data')

// async actions:
// --------------
export const artistsSearch = query => {
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${ process.env.REACT_APP_SPOTIFY_KEY }`
  }
  return dispatch => {
    dispatch(searchPending())
    axios.get(`${domain}search?q=${query}&type=artist&limit=20&offset=5`, { headers })
    .then(response => dispatch(searchSuccessFully(response.data.artists.items)))
    .catch(error => dispatch(searchRejected(error.response.data.error)))
  }
}