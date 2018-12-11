import React from 'react'
import { shallow } from 'enzyme'
import BodyClassName from 'react-body-classname'

import PopUp from 'components/generic/PopUp/'

describe('Component | PopUp', () => {
  let component 
  beforeEach( () => {
    component = shallow(
      <PopUp><p>PopUp!!</p></PopUp>
    )
  })
  it('should not render because isOpen is false by default', () => {
    expect(component.contains(<BodyClassName className="fixed" />)).toBeFalsy()
    expect(component.find('p').length).toEqual(0)
    expect(component).toMatchSnapshot()
  })
  it('should render a PopUp', () => {
    component = shallow(<PopUp isOpen><p>PopUp!!</p></PopUp>)
    expect(component.contains(<BodyClassName className="fixed" />)).toBeTruthy()
    expect(component.find('p').text()).toEqual('PopUp!!')
    expect(component).toMatchSnapshot()
  })
})