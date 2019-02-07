import React from 'react'
import { shallow } from 'enzyme'

import { BannerWrapper } from 'components/ArtistPage/Banner/wrapper'

describe('Component | BannerWrapper', () => {

  const info = {
    name: 'artist name',
    images: [{ url: 'path/to/photo.jpg', height: 200 }],
    genres: ['pop', 'rock']
  }
  let component 
  beforeEach( () => {
    component = shallow(
      <BannerWrapper info={ info } />
    )
  })
  it('should render a component', () => {
    expect(component).toMatchSnapshot()
  })
})