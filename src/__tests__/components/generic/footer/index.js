import React from 'react'
import { shallow } from 'enzyme'

import Footer from 'components/generic/Footer/'

describe('Component | Footer', () => {
  let component 
  beforeEach( () => {
    component = shallow(
      <Footer />
    )
  })
  it('should render a component', () => {
    expect(component).toMatchSnapshot()
  })
})