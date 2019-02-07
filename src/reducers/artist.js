import * as constants from 'constants/artist'

const initialState = {
  info: {
    name: '',
    images: [],
    genres: []
  },
  albums: {},
  albumsTracks: {},
  topTracks: {},
  relatedArtists: {},
  error: null,
  loading: false 
}

const ArtistReducer = ( 
  state = initialState, 
  action 
) => {
  let info, error, loading, albums, topTracks, relatedArtists, albumsTracks
  switch ( action.type ) {
    case constants.ARTIST_PENDING:
      loading = true      
      return { 
        ...state,
        loading
      }
    case constants.ARTIST_SUCCESSFULLY:
      info = action.info
      error = null
      loading = false
      return { 
        ...state, 
        info,
        error,
        loading
      }
    case constants.ARTISTS_ALBUMS_SUCCESSFULLY: 
      albums = action.albums 
      error = null 
      loading = false
      return {
        ...state,
        albums,
        error,
        loading
      }
    case constants.ARTISTS_ALBUMS_TRACKS_SUCCESSFULLY: 
      albumsTracks = action.tracks 
      error = null 
      loading = false 
      return {
        ...state,
        albumsTracks,
        error,
        loading
      }
    case constants.ARTISTS_TOP_TRACKS_SUCCESSFULLY: 
      topTracks = action.tracks 
      error = null 
      loading = false
      return {
        ...state,
        topTracks,
        error,
        loading
      }
    case constants.ARTISTS_RELATED_SUCCESSFULLY: 
      relatedArtists = action.artists 
      error = null 
      loading = false
      return {
        ...state,
        relatedArtists,
        error,
        loading
      }
    case constants.ARTIST_REJECTED:
      info = {}
      albums = {}
      topTracks = {}
      relatedArtists = {}
      error = action.error
      loading = false
      return { 
        ...state, 
        info,
        albums, 
        topTracks,
        relatedArtists,
        error,
        loading
      }
    default:
      return state
  }
}

export default ArtistReducer