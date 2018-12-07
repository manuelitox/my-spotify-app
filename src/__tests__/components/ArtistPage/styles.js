import React from 'react'
import { shallow } from 'enzyme'

import StyledArtistPage from 'components/ArtistPage/styles'

describe('Component | StyledArtistPage', () => {
  let component 
  beforeEach( () => {
    component = shallow(
      <StyledArtistPage />
    )
  })
  it('should render a styled component', () => {
    expect(component).toMatchSnapshot()
  })
})