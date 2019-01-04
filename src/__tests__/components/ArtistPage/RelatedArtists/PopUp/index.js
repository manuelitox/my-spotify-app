import React from 'react'
import { shallow } from 'enzyme'

import PopUpRelatedArtists from 'components/ArtistPage/RelatedArtists/PopUp/'

describe('Component | PopUpRelatedArtists', () => {
  let component 
  beforeEach( () => {
    component = shallow(
      <PopUpRelatedArtists isOpen togglePopUp={ jest.fn() } />
    )
  })
  it('should render a component', () => {
    expect(component).toMatchSnapshot()
  })
})