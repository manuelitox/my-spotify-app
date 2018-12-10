import React from 'react'
import { shallow } from 'enzyme'

import StyledTracks from 'components/ArtistPage/Tracks/styles'

describe('Component | StyledTracks', () => {
  let component 
  beforeEach( () => {
    component = shallow(
      <StyledTracks />
    )
  })
  it('should render a styled component', () => {
    expect(component).toMatchSnapshot()
  })
})