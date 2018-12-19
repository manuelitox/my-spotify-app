import React from 'react'
import { shallow } from 'enzyme'

import PopUpAlbum from 'components/ArtistPage/Albums/Album/PopUp/'

describe('Component | PopUpAlbum', () => {
  let component 
  beforeEach( () => {
    component = shallow(
      <PopUpAlbum 
        title="album title" 
        releaseDate="2016-04-07" 
        numberTracks={ 10 }
        togglePopUp={ jest.fn() } />
    )
  })
  it('should render a component', () => {
    expect(component).toMatchSnapshot()
  })
})