import React from 'react'
import { shallow } from 'enzyme'

import StyledWaveSearchIcon from 'components/SearchPage/stylesWaveIcon'

describe('Component | StyledWaveSearchIcon', () => {
  let component 
  beforeEach( () => {
    component = shallow(
      <StyledWaveSearchIcon />
    )
  })
  it('should render a styled component', () => {
    expect(component).toMatchSnapshot()
  })
})