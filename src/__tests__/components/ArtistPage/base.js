import React from 'react'
import { shallow } from 'enzyme'

import StatelessArtistPage from 'components/ArtistPage/base'

describe('Component | StatelessArtistPage', () => {
  let component 
  beforeEach( () => {
    component = shallow(
      <StatelessArtistPage />
    )
  })
  it('should render a component', () => {
    expect(component).toMatchSnapshot()
  })
})