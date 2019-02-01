import * as constants from 'constants/auth'
import * as ActionCreator from 'actions/auth'

describe('Actions | Auth', () => {
  let action, expected
  it('authUpdate | should return an object', () => {
    action   = ActionCreator.authUpdate()
    expected = { type : constants.AUTH_UPDATE }
    expect(action).toEqual(expected)
  })
})