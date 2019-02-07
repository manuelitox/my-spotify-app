import React from 'react'
import { shallow } from 'enzyme'

import PopUpTopTracks from 'components/ArtistPage/Tracks/PopUp/'

describe('Component | PopUpTopTracks', () => {
  const tracks = [
    {
      id: '123asd',
      name: 'song name',
      preview_url: 'path/to/preview/url',
      is_playable: true,
      duration_ms: 354320,
      album: {
        release_date: '1988'
      }
    }
  ]
  let component 
  beforeEach( () => {
    component = shallow(
      <PopUpTopTracks togglePopUp={ jest.fn() } isOpen={ true } tracks={ tracks } />
    )
  })
  it('should render a component', () => {
    expect(component).toMatchSnapshot()
  })
})