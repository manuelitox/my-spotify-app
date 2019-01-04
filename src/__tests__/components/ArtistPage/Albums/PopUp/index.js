import React from 'react'
import { shallow } from 'enzyme'

import PopUpAlbums from 'components/ArtistPage/Albums/PopUp/'

describe('Component | PopUpAlbums', () => {
  let component 
  beforeEach( () => {
    component = shallow(
      <PopUpAlbums isOpen togglePopUp={ jest.fn() } />
    )
  })
  it('should render a component', () => {
    expect(component).toMatchSnapshot()
  })
})