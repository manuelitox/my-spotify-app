import React from 'react'
import { shallow } from 'enzyme'

import StyledContainer from 'components/generic/Container/styles'

describe('Component | StyledContainer', () => {
  let component 
  beforeEach( () => {
    component = shallow(
      <StyledContainer />
    )
  })
  it('should render a component', () => {
    expect(component).toMatchSnapshot()
  })
})