import React from 'react'
import { shallow } from 'enzyme'

import StyledRelatedArtists from 'components/ArtistPage/RelatedArtists/styles'

describe('Component | StyledRelatedArtists', () => {
  let component 
  beforeEach( () => {
    component = shallow(
      <StyledRelatedArtists />
    )
  })
  it('should render a styled component', () => {
    expect(component).toMatchSnapshot()
  })
})