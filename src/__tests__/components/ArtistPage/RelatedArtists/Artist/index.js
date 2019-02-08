import React from 'react'
import { shallow } from 'enzyme'

import { Artist } from 'components/ArtistPage/RelatedArtists/Artist/'

describe('Component | Artist', () => {
  let component 
  beforeEach( () => {
    component = shallow(
      <Artist id="1" name="John Doe" token="asd123" />
    )
  })
  it('should render a component', () => {
    expect(component).toMatchSnapshot()
  })
})