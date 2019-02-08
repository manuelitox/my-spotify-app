import React from 'react'
import { shallow } from 'enzyme'

import PopUpRelatedArtists from 'components/ArtistPage/RelatedArtists/PopUp/'

describe('Component | PopUpRelatedArtists', () => {
  const relatedArtists = [
    {
      id: '123',
      name: 'artist name',
      images: [{ url: 'path/to/photo', height: 200 }]
    }
  ]
  let component 
  beforeEach( () => {
    component = shallow(
      <PopUpRelatedArtists isOpen togglePopUp={ jest.fn() } token="123abc" relatedArtists={ relatedArtists } />
    )
  })
  it('should render a component', () => {
    expect(component).toMatchSnapshot()
  })
})