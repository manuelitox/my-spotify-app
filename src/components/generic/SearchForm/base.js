import React from 'react'
import PropTypes from 'prop-types'


import StyledInput from './stylesInput'
import LoadingMessage from './loading'
import SuggestionsList from './suggestionsList'
import StyledSearchForm from './styles'
import ArtistMatchesCounter from './artistsCounter'

const SearchForm = ({ 
  isOpen,
  loading,
  onChange,
  suggestions,
  openSuggestions
}) => (
  <StyledSearchForm>
    <StyledInput 
      id="search"
      type="search"
      isOpen={ isOpen }
      onClick={ openSuggestions }
      onChange={ onChange }
      placeholder="search an artist..." />
    <LoadingMessage loading={ loading } />
    <ArtistMatchesCounter isOpen={ isOpen } loading={ loading } numberOfArtists={ suggestions.length } />
    <SuggestionsList isOpen={ isOpen } numberOfArtists={ suggestions.length } suggestions={ suggestions } />
  </StyledSearchForm>
)  

SearchForm.propTypes = {
  isOpen: PropTypes.bool,
  loading: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  suggestions: PropTypes.array.isRequired,
  openSuggestions: PropTypes.func.isRequired
}

export default SearchForm