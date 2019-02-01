import React from 'react'
import { shallow } from 'enzyme'

import StyledPopUp from 'components/Auth/styles'

describe('Component | StyledPopUp', () => {
  let component 
  beforeEach( () => {
    component = shallow(
      <StyledPopUp />
    )
  })
  it('should render a component', () => {
    expect(component).toMatchSnapshot()
  })
})