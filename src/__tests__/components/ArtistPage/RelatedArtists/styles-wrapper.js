import React from 'react'
import { shallow } from 'enzyme'

import StyledWrapperRelatedArtists from 'components/ArtistPage/RelatedArtists/styles-wrapper'

describe('Component | StyledWrapperRelatedArtists', () => {
  let component 
  beforeEach( () => {
    component = shallow(
      <StyledWrapperRelatedArtists />
    )
  })
  it('should render a styled component', () => {
    expect(component).toMatchSnapshot()
  })
})