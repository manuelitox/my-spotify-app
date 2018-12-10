import React from 'react'
import { shallow } from 'enzyme'

import StyledHeader from 'components/ArtistPage/Header/styles'

describe('Component | StyledHeader', () => {
  let component 
  beforeEach( () => {
    component = shallow(
      <StyledHeader />
    )
  })
  it('should render a styled component', () => {
    expect(component).toMatchSnapshot()
  })
})