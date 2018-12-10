import React from 'react'
import { shallow } from 'enzyme'

import StyledArtist from 'components/ArtistPage/RelatedArtists/Artist/styles'

describe('Component | StyledArtist', () => {
  let component 
  beforeEach( () => {
    component = shallow(
      <StyledArtist />
    )
  })
  it('should render a component', () => {
    expect(component).toMatchSnapshot()
  })
})