import SearchReducer from 'reducers/search'
import * as ActionCreator from 'actions/search'

describe('Reducer | Search', () => {
  let action, newState, stateExpected = {}
  beforeEach( () => {
    stateExpected = {
      data: [],
      error: null,
      loading: false
    }
  })
  it('Initial Value', () => {
    action   = { type : 'unknown' }
    newState = SearchReducer( undefined, action )
    expect(stateExpected).toEqual(newState)
  })
  it('Action Type | SEARCH_PENDING', () => {
    stateExpected.loading = true
    action   = ActionCreator.searchPending()
    newState = SearchReducer( undefined, action )
    expect(stateExpected).toEqual(newState)
  })
  it('Action Type | SEARCH_SUCCESSFULLY', () => {
    const data = [{}, {}]
    stateExpected.loading = false
    stateExpected.data = data
    action   = ActionCreator.searchSuccessFully(data)
    newState = SearchReducer( undefined, action )
    expect(stateExpected).toEqual(newState)
  })
  it('Action Type | SEARCH_REJECTED', () => {
    const error = 'error message'
    stateExpected.loading = false
    stateExpected.error = error
    action   = ActionCreator.searchRejected(error)
    newState = SearchReducer( undefined, action )
    expect(stateExpected).toEqual(newState)
  })
})