import React from 'react'
import { Link } from 'react-router-dom'
import { shallow } from 'enzyme'

import SuggestionsList from 'components/generic/SearchForm/suggestionsList'

describe('Component | SuggestionsList', () => {
  const SUGGESTIONS = [
    { id: '1', name: 'Alicia Keys', images: [] },
    { id: '2', name: 'Queen', images: [] },
    { id: '3', name: 'John Mayer', images: [] },
    { id: '4', name: 'ACDC', images: [] },
    { id: '5', name: 'Blink 182', images: [] },
    { id: '6', name: 'Bon Jovi', images: [] },
    { id: '7', name: '2pac', images: [] }          
  ]
  let component 
  beforeEach( () => {
    component = shallow(<SuggestionsList isOpen data={ SUGGESTIONS } numberOfArtists={ 4 } closeSuggestions={ jest.fn() } />)
  })
  it('should render a component', () => {
    expect(component).toMatchSnapshot()
  })
  it('should display the `To` parameter of the first Link', () => {
    // replace the spaces ' ' to '-' into the Artist name.
    const to = component.find(Link).at(0).props().to
    expect(to).toEqual('/artist/Alicia-Keys/1')
  })
  it('should render null because isOpen is false', () => {
    component = shallow(<SuggestionsList isOpen={ false } closeSuggestions={ jest.fn() } />)    
    expect(component).toMatchSnapshot()
  })
  it('should render null because numberOfArtists is 0', () => {
    component = shallow(<SuggestionsList isOpen numberOfArtists={ 0 } closeSuggestions={ jest.fn() } />)    
    expect(component).toMatchSnapshot()
  })
})