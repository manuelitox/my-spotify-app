import React from 'react'
import { shallow } from 'enzyme'

import SearchForm from 'components/generic/SearchForm/base'

describe('Component | SearchForm', () => {
  let component 
  beforeEach( () => {
    component = shallow(
      <SearchForm onChange={ jest.fn() } />
    )
  })
  it('should render a component', () => {
    expect(component).toMatchSnapshot()
  })
})