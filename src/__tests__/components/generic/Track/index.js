import React from 'react'
import { shallow } from 'enzyme'

import Track from 'components/generic/Track/'
import { ReactComponent as PauseIcon } from 'svgs/pause.svg'
import { ReactComponent as PlayIcon } from 'svgs/play.svg'

describe('Component | Track', () => {
  let component 
  beforeEach( () => {
    component = shallow(
      <Track name="Empire State of Mind" previewUrl="https://p.scdn.co/mp3-preview/d7624ec5f93b6d92c1836a95c40ecce463584f6e?cid=774b29d4f13844c495f206cafdad9c86" releaseDate="2016-07-17"  />
    )
  })
  it('should render a component', () => {
    expect(component.state().play).toBeFalsy()
    expect(component).toMatchSnapshot()
    expect(component.contains(<PlayIcon />)).toBeTruthy()
  })
  it('should render the Pause Icon because the play state is true', () => {
    component.setState({ play: true })
    expect(component.contains(<PauseIcon />)).toBeTruthy()
  })
})