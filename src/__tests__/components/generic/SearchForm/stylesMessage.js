import React from 'react'
import { shallow } from 'enzyme'

import StyledMessage from 'components/generic/SearchForm/stylesMessage'

describe('Component | StyledMessage', () => {
  let component 
  beforeEach( () => {
    component = shallow(
      <StyledMessage />
    )
  })
  it('should render a styled component', () => {
    expect(component).toMatchSnapshot()
  })
})