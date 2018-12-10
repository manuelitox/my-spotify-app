import React from 'react'
import { shallow } from 'enzyme'

import StylesAlbum from 'components/ArtistPage/Albums/Album/styles'

describe('Component | StylesAlbum', () => {
  let component 
  beforeEach( () => {
    component = shallow(
      <StylesAlbum />
    )
  })
  it('should render a styled component', () => {
    expect(component).toMatchSnapshot()
  })
})