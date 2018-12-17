import React from 'react'
import { shallow } from 'enzyme'
import BodyClassName from 'react-body-classname'

import PopUp from 'components/generic/PopUp/'

describe('Component | PopUp', () => {
  let component 
  beforeEach( () => {
    component = shallow(
      <PopUp togglePopUp={ jest.fn() }>
        <p>PopUp!!</p>
      </PopUp>
    )
  })
  it('should render a PopUp', () => {
    expect(component.contains(<BodyClassName className="fixed" />)).toBeTruthy()
    expect(component.find('p').text()).toEqual('PopUp!!')
    expect(component).toMatchSnapshot()
  })
})