import React from 'react'
import { shallow } from 'enzyme'

import Title from 'components/ArtistPage/Title/'

describe('Component | Title', () => {
  let component 
  beforeEach( () => {
    component = shallow(
      <Title value="Albums" />
    )
  })
  it('should render a component', () => {
    expect(component).toMatchSnapshot()
  })
})