import React from 'react'
import { shallow } from 'enzyme'

import { Tracks } from 'components/ArtistPage/Tracks/'

describe('Component | Tracks', () => {
  const topTracks = {
    tracks: [
      { 
        name: 'song name', 
        preview_url: 'path/to/preview/url', 
        is_playable: true, 
        album: { 
          release_date: '1988' 
        } 
      }
    ]
  }
  let component 
  beforeEach( () => {
    component = shallow(
      <Tracks topTracks={ topTracks } />
    )
  })
  it('should render a component', () => {
    expect(component).toMatchSnapshot()
  })
})