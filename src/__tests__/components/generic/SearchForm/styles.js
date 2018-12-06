import React from 'react'
import { shallow } from 'enzyme'

import StyledSearchForm from 'components/generic/SearchForm/styles'

describe('Component | StyledSearchForm', () => {
  let component 
  beforeEach( () => {
    component = shallow(
      <StyledSearchForm />
    )
  })
  it('should render a styled component', () => {
    expect(component).toMatchSnapshot()
  })
})