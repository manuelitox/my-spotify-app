import ArtistReducer from 'reducers/artist'
import * as ActionCreator from 'actions/artist'

describe('Reducer | Artist', () => {
  let action, newState, stateExpected = {}
  beforeEach( () => {
    stateExpected = {
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
  })
  it('Initial Value', () => {
    action   = { type : 'unknown' }
    newState = ArtistReducer( undefined, action )
    expect(stateExpected).toEqual(newState)
  })
  it('Action Type | ARTIST_PENDING', () => {
    stateExpected.loading = true
    action   = ActionCreator.artistPending()
    newState = ArtistReducer( undefined, action )
    expect(stateExpected).toEqual(newState)
  })
  it('Action Type | ARTIST_SUCCESSFULLY', () => {
    const info = {
      name: 'Artist name',
      images: [{ url: 'path/image-1.png' }, { url: 'path/image-2.png' }],
      genres: ['rock', 'pop']
    }
    stateExpected.loading = false
    stateExpected.info = info
    action   = ActionCreator.artistSuccessFully(info)
    newState = ArtistReducer( undefined, action )
    expect(stateExpected).toEqual(newState)
  })
  it('Action Type | ARTISTS_ALBUMS_SUCCESSFULLY', () => {
    const albums = { items: [] }
    stateExpected.loading = false
    stateExpected.albums = albums
    action   = ActionCreator.artistsAlbumsSuccessFully(albums)
    newState = ArtistReducer( undefined, action )
    expect(stateExpected).toEqual(newState)
  }) 

  it('Action Type | ARTISTS_ALBUMS_TRACKS_SUCCESSFULLY', () => {
    const tracks = { items: [] }
    stateExpected.loading = false
    stateExpected.albumsTracks = tracks
    action   = ActionCreator.artistsAlbumsTracksSuccessFully(tracks)
    newState = ArtistReducer( undefined, action )
    expect(stateExpected).toEqual(newState)
  }) 

  it('Action Type | ARTISTS_TOP_TRACKS_SUCCESSFULLY', () => {
    const topTracks = { tracks: [] }
    stateExpected.loading = false
    stateExpected.topTracks = topTracks
    action   = ActionCreator.artistsTopTracksSuccessFully(topTracks)
    newState = ArtistReducer( undefined, action )
    expect(stateExpected).toEqual(newState)
  }) 
  it('Action Type | ARTISTS_RELATED_SUCCESSFULLY', () => {
    const relatedArtists = { artists: [] }
    stateExpected.loading = false
    stateExpected.relatedArtists = relatedArtists
    action   = ActionCreator.artistsRelatedSuccessFully(relatedArtists)
    newState = ArtistReducer( undefined, action )
    expect(stateExpected).toEqual(newState)
  })  
  it('Action Type | ARTIST_REJECTED', () => {
    const error = 'error message'
    stateExpected.error = error
    stateExpected.loading = false
    stateExpected.info = {}
    stateExpected.albums = {}
    stateExpected.topTracks = {}
    stateExpected.relatedArtists = {}
    action   = ActionCreator.artistRejected(error)
    newState = ArtistReducer( undefined, action )
    expect(stateExpected).toEqual(newState)
  })  
})