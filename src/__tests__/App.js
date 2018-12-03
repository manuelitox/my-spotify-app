import React from 'react'
import { shallow } from 'enzyme'

import App from 'App'

describe('Component | App', () => {
  let app 
  beforeEach( () => {
    app = shallow(
      <App />
    )
  })
  it('should render an App', () => {
    expect(app).toMatchSnapshot()
  })
})