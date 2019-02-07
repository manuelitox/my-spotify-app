import { domain } from 'config/api'
import * as constants from 'constants/artist'
import makeActionCreator from 'lib/make-action-creator'
import axiosAuthMiddleware from 'lib/axios-auth-middleware'

import { authUpdate } from './auth'

// Actions creators:
// -----------------
export const artistPending = makeActionCreator(constants.ARTIST_PENDING)
export const artistRejected = makeActionCreator(constants.ARTIST_REJECTED, 'error')
export const artistSuccessFully = makeActionCreator(constants.ARTIST_SUCCESSFULLY, 'info')
export const artistsAlbumsSuccessFully = makeActionCreator(constants.ARTISTS_ALBUMS_SUCCESSFULLY, 'albums')
export const artistsTopTracksSuccessFully = makeActionCreator(constants.ARTISTS_TOP_TRACKS_SUCCESSFULLY, 'tracks')
export const artistsRelatedSuccessFully = makeActionCreator(constants.ARTISTS_RELATED_SUCCESSFULLY, 'artists')
export const artistsAlbumsTracksSuccessFully = makeActionCreator(constants.ARTISTS_ALBUMS_TRACKS_SUCCESSFULLY, 'tracks')

// async actions:
// --------------
export const getArtist = (id, token) => {
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${ token }`
  }
  return dispatch => {
    dispatch(artistPending())
    axiosAuthMiddleware.get(`${domain}artists/${ id }`, { headers })
    .then(response => {
      dispatch(artistSuccessFully(response.data))
      dispatch(getArtistsAlbums(id, token))
      dispatch(getArtistsTopTracks(id, token))
      dispatch(getArtistsRelated(id, token))
    })
    .catch(error => dispatch(authUpdate('')))
  }
}

export const getArtistsAlbums = (id, token) => {
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${ token }`
  }
  return dispatch => {
    dispatch(artistPending())
    axiosAuthMiddleware.get(`${domain}artists/${ id }/albums?limit=50`, { headers })
    .then(response => dispatch(artistsAlbumsSuccessFully(response.data)))
    .catch(error => dispatch(authUpdate('')))
  }
}

export const getArtistsAlbumsTracks = (id, token) => {
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${ token }`
  }
  return dispatch => {
    dispatch(artistPending())
    axiosAuthMiddleware.get(`${domain}albums/${ id }/tracks`, { headers })
    .then(response => dispatch(artistsAlbumsTracksSuccessFully(response.data)))
    .catch(error => dispatch(authUpdate('')))
  }
}

export const getArtistsTopTracks = (id, token) => {
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${ token }`
  }
  return dispatch => {
    dispatch(artistPending())
    axiosAuthMiddleware.get(`${domain}artists/${ id }/top-tracks?market=from_token`, { headers })
    .then(response => dispatch(artistsTopTracksSuccessFully(response.data)))
    .catch(error => dispatch(authUpdate('')))
  }
}

export const getArtistsRelated = (id, token) => {
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${ token }`
  }
  return dispatch => {
    dispatch(artistPending())
    axiosAuthMiddleware.get(`${domain}artists/${ id }/related-artists`, { headers })
    .then(response => dispatch(artistsRelatedSuccessFully(response.data)))
    .catch(error => dispatch(authUpdate('')))
  }
}