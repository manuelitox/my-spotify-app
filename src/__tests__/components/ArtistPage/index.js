import React from 'react'
import { shallow } from 'enzyme'

import ArtistPage from 'components/ArtistPage/'

describe('Component | ArtistPage', () => {
  let component 
  beforeEach( () => {
    component = shallow(
      <ArtistPage />
    )
  })
  it('should render a component', () => {
    expect(component).toMatchSnapshot()
  })
})