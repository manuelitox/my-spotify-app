import React from 'react'
import { shallow } from 'enzyme'

import SearchPage from 'components/SearchPage/'

describe('Component | SearchPage', () => {
  let component 
  beforeEach( () => {
    component = shallow(
      <SearchPage />
    )
  })
  it('should render a component', () => {
    expect(component).toMatchSnapshot()
  })
})