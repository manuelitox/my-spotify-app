import React, { Component } from 'react'

import SearchForm from './base'

class SearchFormContainer extends Component {
  state = {}

  onChange = e => {
    console.log(e.target.value)
  }

  render () {
    return <SearchForm onChange={ this.onChange } />
  }
}

export default SearchFormContainer