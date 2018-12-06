import React from 'react'
import { shallow } from 'enzyme'

import LoadingMessage from 'components/generic/SearchForm/loading'

describe('Component | LoadingMessage', () => {
  let component 
  beforeEach( () => {
    component = shallow(<LoadingMessage loading />)
  })
  it('should render a component', () => {
    expect(component).toMatchSnapshot()
    expect(component.text()).toEqual('loading')
  })
  it('should render null because isOpen is false', () => {
    component = shallow(<LoadingMessage loading={ false } />)    
    expect(component).toMatchSnapshot()
  })
})