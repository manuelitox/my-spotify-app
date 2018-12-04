import React from 'react'
import PropTypes from 'prop-types'

const SearchForm = ({ onChange }) => (
  <div>
    <input 
      id="search"
      type="search"
      onChange={ onChange } />
  </div>
)

SearchForm.propTypes = {
  onChange: PropTypes.func.isRequired
}

export default SearchForm