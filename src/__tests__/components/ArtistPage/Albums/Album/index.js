import React from 'react'
import { shallow } from 'enzyme'

import Album from 'components/ArtistPage/Albums/Album/'

describe('Component | Album', () => {
  let component 
  beforeEach( () => {
    component = shallow(
      <Album id="123" title="album title" cover="path/to/image.png" releaseDate="2016-04-07" numberTracks={ 10 } />
    )
  })
  it('should render a component', () => {
    expect(component).toMatchSnapshot()
  })
})