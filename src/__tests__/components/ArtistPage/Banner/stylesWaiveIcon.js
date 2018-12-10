import React from 'react'
import { shallow } from 'enzyme'

import StylesWaveArtistIcon from 'components/ArtistPage/Banner/stylesWaiveIcon'

describe('Component | StylesWaveArtistIcon', () => {
  let component 
  beforeEach( () => {
    component = shallow(
      <StylesWaveArtistIcon />
    )
  })
  it('should render a styled component', () => {
    expect(component).toMatchSnapshot()
  })
})