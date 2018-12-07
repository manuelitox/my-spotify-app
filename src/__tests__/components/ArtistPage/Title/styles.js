import React from 'react'
import { shallow } from 'enzyme'

import StyledTitle from 'components/ArtistPage/Title/styles'

describe('Component | StyledTitle', () => {
  let component 
  beforeEach( () => {
    component = shallow(
      <StyledTitle />
    )
  })
  it('should render a styled component', () => {
    expect(component).toMatchSnapshot()
    expect(component.props().color).toEqual('white')
  })
  it('should returns green color', () => {
    component = shallow(<StyledTitle color="green" />)
    expect(component.props().color).toEqual('green')
  })
})