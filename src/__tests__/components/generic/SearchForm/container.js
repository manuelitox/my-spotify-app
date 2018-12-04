import React from 'react'
import { shallow } from 'enzyme'

import SearchFormContainer from 'components/generic/SearchForm/container'

describe('Component | SearchFormContainer', () => {
  let component 
  beforeEach( () => {
    component = shallow(
      <SearchFormContainer />
    )
  })
  it('should render a component', () => {
    expect(component).toMatchSnapshot()
  })
})