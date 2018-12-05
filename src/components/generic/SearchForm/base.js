import React from 'react'
import PropTypes from 'prop-types'

import StyledInput from './styles-input'
import StyledSearchForm from './styles'

const SearchForm = ({ onChange }) => (
  <StyledSearchForm>
    <StyledInput 
      id="search"
      type="search"
      onChange={ onChange }
      placeholder="search an artist..." />
  </StyledSearchForm>
)

SearchForm.propTypes = {
  onChange: PropTypes.func.isRequired
}

export default SearchForm