import React from 'react'
import { shallow } from 'enzyme'

import StyledContainerAlbumsAndTopTracks from 'components/ArtistPage/stylesContainerAlbumsAndTopTracks'

describe('Component | StyledContainerAlbumsAndTopTracks', () => {
  let component 
  beforeEach( () => {
    component = shallow(
      <StyledContainerAlbumsAndTopTracks />
    )
  })
  it('should render a styled component', () => {
    expect(component).toMatchSnapshot()
  })
})