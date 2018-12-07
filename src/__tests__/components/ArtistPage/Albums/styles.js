import React from 'react'
import { shallow } from 'enzyme'

import StyledWrapperAlbums from 'components/ArtistPage/Albums/styles'

describe('Component | StyledWrapperAlbums', () => {
  let component 
  beforeEach( () => {
    component = shallow(
      <StyledWrapperAlbums />
    )
  })
  it('should render a styled component', () => {
    expect(component).toMatchSnapshot()
  })
})