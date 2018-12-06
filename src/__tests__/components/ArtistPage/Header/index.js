import React from 'react'
import { shallow } from 'enzyme'

import Header from 'components/ArtistPage/Header/'

describe('Component | Header', () => {
  let component 
  beforeEach( () => {
    component = shallow(
      <Header />
    )
  })
  it('should render a component', () => {
    expect(component).toMatchSnapshot()
  })
})