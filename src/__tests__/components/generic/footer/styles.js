import React from 'react'
import { shallow } from 'enzyme'

import StyledFooter from 'components/generic/Footer/styles'

describe('Component | StyledFooter', () => {
  let component 
  beforeEach( () => {
    component = shallow(
      <StyledFooter />
    )
  })
  it('should render a styled component', () => {
    expect(component).toMatchSnapshot()
  })
})