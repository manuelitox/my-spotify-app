import * as constants from 'constants/search'

const initialState = {
  data: [],
  error: null,
  loading: false 
}

const SearchReducer = ( 
  state = initialState, 
  action 
) => {
  let data, error, loading
  switch ( action.type ) {
    case constants.SEARCH_PENDING:
      loading = true      
      return { 
        ...state,
        loading
      }
    case constants.SEARCH_SUCCESSFULLY:
      data = action.data
      error = null
      loading = false
      return { 
        ...state, 
        data,
        error,
        loading
      }
    case constants.SEARCH_REJECTED:
      data = []
      error = action.error
      loading = false
      return { 
        ...state, 
        data,
        error,
        loading
      }
    default:
      return state
  }
}

export default SearchReducer