import React from 'react'
import { shallow } from 'enzyme'

import RelatedArtists from 'components/ArtistPage/RelatedArtists/'

describe('Component | RelatedArtists', () => {
  let component 
  beforeEach( () => {
    component = shallow(
      <RelatedArtists />
    )
  })
  it('should render a component', () => {
    expect(component).toMatchSnapshot()
  })
})