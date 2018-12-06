import React from 'react'
import { shallow } from 'enzyme'

import WithContainer from 'components/generic/Container/'

describe('HOC Component | WithContainer', () => {
  let component 
  beforeEach( () => {
    component = shallow(
      <WithContainer WrapperComponent={ () => <div>asd</div> } />
    )
  })
  it('should render a component', () => {
    expect(component).toMatchSnapshot()
  })
})