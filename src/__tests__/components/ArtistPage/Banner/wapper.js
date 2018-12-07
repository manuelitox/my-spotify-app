import React from 'react'
import { shallow } from 'enzyme'

import BannerWrapper from 'components/ArtistPage/Banner/wrapper'

describe('Component | BannerWrapper', () => {
  let component 
  beforeEach( () => {
    component = shallow(
      <BannerWrapper />
    )
  })
  it('should render a component', () => {
    expect(component).toMatchSnapshot()
  })
})