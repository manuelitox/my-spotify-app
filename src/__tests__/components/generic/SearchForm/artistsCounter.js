import React from 'react'
import { shallow } from 'enzyme'

import ArtistMatchesCounter from 'components/generic/SearchForm/artistsCounter'

describe('Component | ArtistMatchesCounter', () => {
  let component 
  beforeEach( () => {
    component = shallow(<ArtistMatchesCounter isOpen={ true } loading={ false } numberOfArtists={ 4 } />)
  })
  it('should render a component', () => {
    expect(component).toMatchSnapshot()
    expect(component.text()).toEqual('4 matches')
  })
  it('should render null because isOpen is false', () => {
    component = shallow(<ArtistMatchesCounter isOpen={ false } loading={ false } numberOfArtists={ 4 } />)    
    expect(component).toMatchSnapshot()
  })
  it('should render null because loading is true', () => {
    component = shallow(<ArtistMatchesCounter isOpen={ true } loading={ true } numberOfArtists={ 4 } />)
    expect(component).toMatchSnapshot()
  })  
})