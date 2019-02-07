import React from 'react'
import { shallow } from 'enzyme'

import { RelatedArtists } from 'components/ArtistPage/RelatedArtists/'

describe('Component | RelatedArtists', () => {
  const relatedArtists = {
    artists: [
      {
        id: '123',
        name: 'artist name',
        images: [{ url: 'path/to/photo', height: 200 }]
      }
    ]
  }
  let component 
  beforeEach( () => {
    component = shallow(
      <RelatedArtists relatedArtists={ relatedArtists } />
    )
  })
  it('should render a component', () => {
    expect(component).toMatchSnapshot()
  })
})