import React from 'react'
import { shallow } from 'enzyme'

import PopUpTopTracks from 'components/ArtistPage/Tracks/PopUp/'

describe('Component | PopUpTopTracks', () => {
  let component 
  beforeEach( () => {
    component = shallow(
      <PopUpTopTracks togglePopUp={ jest.fn() } />
    )
  })
  it('should render a component', () => {
    expect(component).toMatchSnapshot()
  })
})