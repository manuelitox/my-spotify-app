import React from 'react'
import { shallow } from 'enzyme'

import StyledButton from 'components/generic/Button/styles'

describe('Component | StyledButton', () => {
  let component 
  beforeEach( () => {
    component = shallow(
      <StyledButton />
    )
  })
  it('should render a styled component', () => {
    expect(component).toMatchSnapshot()
  })
})