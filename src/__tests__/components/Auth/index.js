import React from 'react'
import { shallow } from 'enzyme'

import { Auth } from 'components/Auth/'

describe('Component | Auth', () => {
  let component 
  beforeEach( () => {
    component = shallow(<Auth authUpdate={ jest.fn() } />)
  })
  it('should render a component', () => {
    expect(component).toMatchSnapshot()
  })
  describe('Token exists', () => {
    beforeEach( () => {
      component = shallow(<Auth authUpdate={ jest.fn() } token="123123" />)
    })    
    it('should not render Auth component', () => {
      expect(component).toMatchSnapshot()
    })
  })
})