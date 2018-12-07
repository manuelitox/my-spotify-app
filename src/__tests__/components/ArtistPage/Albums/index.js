import React from 'react'
import { shallow } from 'enzyme'

import Albums from 'components/ArtistPage/Albums/'

describe('Component | Albums', () => {
  let component 
  beforeEach( () => {
    component = shallow(
      <Albums />
    )
  })
  it('should render a component', () => {
    expect(component).toMatchSnapshot()
  })
})