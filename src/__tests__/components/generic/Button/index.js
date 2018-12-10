import React from 'react'
import { shallow } from 'enzyme'

import Button from 'components/generic/Button/'

describe('Component | Button', () => {
  let component 
  beforeEach( () => {
    component = shallow(
      <Button onClick={ jest.fn() } />
    )
  })
  it('should render a component', () => {
    expect(component).toMatchSnapshot()
  })
})