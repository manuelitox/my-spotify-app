import React from 'react'
import { shallow } from 'enzyme'

import SearchForm from 'components/generic/SearchForm/base'

describe('Component | SearchForm', () => {
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
      <SearchForm  
        placeholder="search an artist"
        onChange={ jest.fn() }
        suggestions={ SUGGESTIONS }
        openSuggestions={ jest.fn() } />
    )
  })
  it('should render a component', () => {
    expect(component).toMatchSnapshot()
  })
})