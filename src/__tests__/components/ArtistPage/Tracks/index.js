import React from 'react'
import { shallow } from 'enzyme'

import Tracks from 'components/ArtistPage/Tracks/'

describe('Component | Tracks', () => {
  let component 
  beforeEach( () => {
    component = shallow(
      <Tracks />
    )
  })
  it('should render a component', () => {
    expect(component).toMatchSnapshot()
  })
})