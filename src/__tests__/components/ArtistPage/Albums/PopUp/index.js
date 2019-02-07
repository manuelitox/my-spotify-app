import React from 'react'
import { shallow } from 'enzyme'

import PopUpAlbums from 'components/ArtistPage/Albums/PopUp/'

describe('Component | PopUpAlbums', () => {
  const albums = [
    { id: '123abc', name: 'album name', total_tracks: 11, release_date: '11/11/2019', images: [{ url: 'path/to/image.jpg', height: 300 }] }
  ] 
  let component 
  beforeEach( () => {
    component = shallow(
      <PopUpAlbums isOpen togglePopUp={ jest.fn() } albums={ albums } />
    )
  })
  it('should render a component', () => {
    expect(component).toMatchSnapshot()
  })
})