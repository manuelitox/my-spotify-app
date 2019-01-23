import * as constants from 'constants/search'
import * as ActionCreator from 'actions/search'

describe('Actions | Search', () => {
  let action, expected
  it('searchPending | should return an object', () => {
    action   = ActionCreator.searchPending()
    expected = { type : constants.SEARCH_PENDING }
    expect(action).toEqual(expected)
  })
  it('searchSuccessFully | should return an object', () => {
    const data = { results : [] }
    action   = ActionCreator.searchSuccessFully(data)
    expected = { type : constants.SEARCH_SUCCESSFULLY, data }
    expect(action).toEqual(expected)
  })
  it('searchRejected | should return an object', () => {
    const error = 'error message'
    action   = ActionCreator.searchRejected(error)
    expected = { type : constants.SEARCH_REJECTED, error }
    expect(action).toEqual(expected)
  })
})