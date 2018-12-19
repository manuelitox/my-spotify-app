import React from 'react'
import { shallow } from 'enzyme'

import StylesHeaderAlbum from 'components/ArtistPage/Albums/Album/PopUp/styles-header'

describe('Component | StylesHeaderAlbum', () => {
  let component 
  beforeEach( () => {
    component = shallow(
      <StylesHeaderAlbum />
    )
  })
  it('should render a styled component', () => {
    expect(component).toMatchSnapshot()
  })
})