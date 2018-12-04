import React from 'react'
import { shallow } from 'enzyme'

import StyledSearchPage from 'components/SearchPage/styles'

describe('Component | StyledSearchPage', () => {
  let component 
  beforeEach( () => {
    component = shallow(
      <StyledSearchPage />
    )
  })
  it('should render a styled component', () => {
    expect(component).toMatchSnapshot()
  })
})