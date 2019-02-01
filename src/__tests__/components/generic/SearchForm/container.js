import React from 'react'
import { shallow } from 'enzyme'

import { SearchFormContainer } from 'components/generic/SearchForm/container'

describe('Component | SearchFormContainer', () => {
  const SUGGESTIONS = [
    { id: '1', name: 'Alicia Keys' },
    { id: '2', name: 'Queen' },
    { id: '3', name: 'John Mayer' },
    { id: '4', name: 'ACDC' },
    { id: '5', name: 'Blink 182' },
    { id: '6', name: 'Bon Jovi' },
    { id: '7', name: '2pac' }          
  ]
  let component 
  beforeEach( () => {
    component = shallow(
      <SearchFormContainer
        data={ SUGGESTIONS }
        token="access_token123123"
        artistsSearch={ jest.fn() } />
    )
  })
  it('should render a component', () => {
    expect(component).toMatchSnapshot()
  })
})