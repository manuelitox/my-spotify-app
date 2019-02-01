import React from 'react'
import { shallow } from 'enzyme'

import AuthPopUp from 'components/Auth/base'

describe('Component | AuthPopUp', () => {
  let component 
  beforeEach( () => {
    component = shallow(
      <AuthPopUp />
    )
  })
  it('should render a component', () => {
    expect(component).toMatchSnapshot()
  })
})