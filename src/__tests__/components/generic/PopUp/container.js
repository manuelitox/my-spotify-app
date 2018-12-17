import React from 'react'
import { shallow } from 'enzyme'
import BodyClassName from 'react-body-classname'

import { PopUpContainer } from 'components/generic/PopUp/container'

describe('Component | PopUpContainer', () => {
  let component 
  beforeEach( () => {
    component = shallow(
      <PopUpContainer togglePopUp={ jest.fn() }>
        <p>PopUp!!</p>
      </PopUpContainer>
    )
  })
  it('should not render because isOpen is false by default', () => {
    expect(component.contains(<BodyClassName className="fixed" />)).toBeFalsy()
    expect(component.find('p').length).toEqual(0)
    expect(component).toMatchSnapshot()
  })
  it('should render a PopUpContainer', () => {
    component = shallow(<PopUpContainer togglePopUp={ jest.fn() } isOpen><p>PopUp!!</p></PopUpContainer>)
    expect(component).toMatchSnapshot()
  })
})