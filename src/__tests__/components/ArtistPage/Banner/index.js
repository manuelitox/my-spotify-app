import React from 'react'
import { shallow } from 'enzyme'

import Banner from 'components/ArtistPage/Banner/'

describe('Component | Banner', () => {
  let component 
  beforeEach( () => {
    component = shallow(
      <Banner />
    )
  })
  it('should render a component', () => {
    expect(component).toMatchSnapshot()
  })
})