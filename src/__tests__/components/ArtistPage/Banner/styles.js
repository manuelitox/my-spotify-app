import React from 'react'
import { shallow } from 'enzyme'

import StyledBanner from 'components/ArtistPage/Banner/styles'

describe('Component | StyledBanner', () => {
  let component 
  beforeEach( () => {
    component = shallow(
      <StyledBanner />
    )
  })
  it('should render a styled component', () => {
    expect(component).toMatchSnapshot()
  })
})