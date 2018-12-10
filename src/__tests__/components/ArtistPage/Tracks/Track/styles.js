import React from 'react'
import { shallow } from 'enzyme'

import StyledTrack from 'components/ArtistPage/Tracks/Track/styles'

describe('Component | StyledTrack', () => {
  let component 
  beforeEach( () => {
    component = shallow(
      <StyledTrack />
    )
  })
  it('should render a styled component', () => {
    expect(component).toMatchSnapshot()
  })
})