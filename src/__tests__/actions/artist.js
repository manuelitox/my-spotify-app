import * as constants from 'constants/artist'
import * as ActionCreator from 'actions/artist'

describe('Actions | Artist', () => {
  let action, expected
  it('artistPending | should return an object', () => {
    action   = ActionCreator.artistPending()
    expected = { type : constants.ARTIST_PENDING }
    expect(action).toEqual(expected)
  })
  it('artistRejected | should return an object', () => {
    const error = 'error message'
    action   = ActionCreator.artistRejected(error)
    expected = { type : constants.ARTIST_REJECTED, error }
    expect(action).toEqual(expected)
  })
  it('artistSuccessFully | should return an object', () => {
    const info = {}
    action   = ActionCreator.artistSuccessFully(info)
    expected = { type : constants.ARTIST_SUCCESSFULLY, info }
    expect(action).toEqual(expected)
  })
  it('artistsAlbumsSuccessFully | should return an object', () => {
    const albums = {}
    action   = ActionCreator.artistsAlbumsSuccessFully(albums)
    expected = { type : constants.ARTISTS_ALBUMS_SUCCESSFULLY, albums }
    expect(action).toEqual(expected)
  })  
  it('artistsTopTracksSuccessFully | should return an object', () => {
    const tracks = {}
    action   = ActionCreator.artistsTopTracksSuccessFully(tracks)
    expected = { type : constants.ARTISTS_TOP_TRACKS_SUCCESSFULLY, tracks }
    expect(action).toEqual(expected)
  }) 
  it('artistsRelatedSuccessFully | should return an object', () => {
    const artists = {}
    action   = ActionCreator.artistsRelatedSuccessFully(artists)
    expected = { type : constants.ARTISTS_RELATED_SUCCESSFULLY, artists }
    expect(action).toEqual(expected)
  })   
  it('artistsRelatedSuccessFully | should return an object', () => {
    const tracks = {}
    action   = ActionCreator.artistsAlbumsTracksSuccessFully(tracks)
    expected = { type : constants.ARTISTS_ALBUMS_TRACKS_SUCCESSFULLY, tracks }
    expect(action).toEqual(expected)
  })      
})