import React from 'react'
import { shallow } from 'enzyme'

import StylesWrapperTracks from 'components/ArtistPage/Albums/Album/PopUp/styles-wrapper-tracks'

describe('Component | StylesWrapperTracks', () => {
  let component 
  beforeEach( () => {
    component = shallow(
      <StylesWrapperTracks />
    )
  })
  it('should render a styled component', () => {
    expect(component).toMatchSnapshot()
  })
})