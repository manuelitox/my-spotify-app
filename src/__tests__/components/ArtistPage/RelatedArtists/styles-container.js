import React from 'react'
import { shallow } from 'enzyme'

import StyledContainerRelatedArtists from 'components/ArtistPage/RelatedArtists/styles-container'

describe('Component | StyledContainerRelatedArtists', () => {
  let component 
  beforeEach( () => {
    component = shallow(
      <StyledContainerRelatedArtists />
    )
  })
  it('should render a styled component', () => {
    expect(component).toMatchSnapshot()
  })
})