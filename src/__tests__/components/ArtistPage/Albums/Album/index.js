import React from 'react'
import { shallow } from 'enzyme'

import Album from 'components/ArtistPage/Albums/Album/'

describe('Component | Album', () => {
  let component 
  beforeEach( () => {
    component = shallow(
      <Album title="album title" releaseDate="2016-04-07" numberTracks={ 10 } />
    )
  })
  it('should render a component', () => {
    expect(component).toMatchSnapshot()
  })
})