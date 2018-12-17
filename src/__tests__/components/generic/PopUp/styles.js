import React from 'react'
import { shallow } from 'enzyme'

import StyledPopUp from 'components/generic/PopUp/styles'

describe('Component | StyledPopUp', () => {
  let component 
  beforeEach( () => {
    component = shallow(
      <StyledPopUp />
    )
  })
  it('should render a styled component', () => {
    expect(component).toMatchSnapshot()
  })
})