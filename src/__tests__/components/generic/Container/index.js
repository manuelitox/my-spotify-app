import React from 'react'
import { shallow } from 'enzyme'

import Container from 'components/generic/Container/'

describe('Component | Container', () => {
  let component 
  beforeEach( () => {
    component = shallow(
      <Container WrapperComponent={ () => <div>asd</div> } />
    )
  })
  it('should render a component', () => {
    expect(component).toMatchSnapshot()
  })
})