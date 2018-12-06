import React from 'react'
import { shallow } from 'enzyme'

import StyledInput from 'components/generic/SearchForm/stylesInput'

describe('Component | StyledInput', () => {
  let component 
  beforeEach( () => {
    component = shallow(
      <StyledInput />
    )
  })
  it('should render a styled component', () => {
    expect(component).toMatchSnapshot()
  })
})