import React from 'react'
import { shallow } from 'enzyme'

import { PopUpAlbum } from 'components/ArtistPage/Albums/Album/PopUp/'

describe('Component | PopUpAlbum', () => {
  const albumsTracks = {
    items: [
      { id: '123', name: 'name track', duration_ms: 163133, preview_url: 'preview/to/url' }
    ]
  }
  let component 
  beforeEach( () => {
    component = shallow(
      <PopUpAlbum 
        token="access-spotify-token"
        isOpen={ true }
        cover="path/to/image.png"
        title="album title" 
        releaseDate="2016-04-07" 
        numberTracks={ 10 }
        togglePopUp={ jest.fn() }
        albumsTracks={ albumsTracks }
        getArtistsAlbumsTracks={ jest.fn() } />
    )
  })
  it('should render a component', () => {
    expect(component).toMatchSnapshot()
  })
})