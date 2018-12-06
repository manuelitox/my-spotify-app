import React from 'react'
import { shallow } from 'enzyme'

import StyledSuggestionsList from 'components/generic/SearchForm/stylesSuggestionsList'

describe('Component | StyledSuggestionsList', () => {
  let component 
  beforeEach( () => {
    component = shallow(
      <StyledSuggestionsList />
    )
  })
  it('should render a styled component', () => {
    expect(component).toMatchSnapshot()
  })
})