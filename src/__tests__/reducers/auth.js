import AuthReducer from 'reducers/auth'
import * as ActionCreator from 'actions/auth'

describe('Reducer | Auth', () => {
  let action, newState, stateExpected = {}
  beforeEach( () => {
    stateExpected = {
      token: ''
    }
  })
  it('Initial Value', () => {
    action   = { type : 'unknown' }
    newState = AuthReducer( undefined, action )
    expect(stateExpected).toEqual(newState)
  })
  it('Action Type | AUTH_UPDATE', () => {
    let token = 123
    stateExpected.token = token
    action   = ActionCreator.authUpdate(token)
    newState = AuthReducer( undefined, action )
    expect(stateExpected).toEqual(newState)
  })
})