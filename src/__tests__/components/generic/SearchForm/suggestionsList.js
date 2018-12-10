import React from 'react'
import { Link } from 'react-router-dom'
import { shallow } from 'enzyme'

import SuggestionsList from 'components/generic/SearchForm/suggestionsList'

describe('Component | SuggestionsList', () => {
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
    component = shallow(<SuggestionsList isOpen suggestions={ SUGGESTIONS } numberOfArtists={ 4 } />)
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
    component = shallow(<SuggestionsList isOpen={ false } />)    
    expect(component).toMatchSnapshot()
  })
  it('should render null because numberOfArtists is 0', () => {
    component = shallow(<SuggestionsList isOpen numberOfArtists={ 0 } />)    
    expect(component).toMatchSnapshot()
  })
})