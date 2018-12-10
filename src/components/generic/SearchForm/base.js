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
  placeholder,
  suggestions,
  openSuggestions,
  closeSuggestions
}) => (
  <StyledSearchForm>
    <StyledInput 
      id="search"
      type="search"
      isOpen={ isOpen }
      onClick={ openSuggestions }
      onChange={ onChange }
      placeholder={ placeholder } />
    <LoadingMessage loading={ loading } />
    <ArtistMatchesCounter isOpen={ isOpen } loading={ loading } numberOfArtists={ suggestions.length } />
    <SuggestionsList isOpen={ isOpen } numberOfArtists={ suggestions.length } suggestions={ suggestions } closeSuggestions={ closeSuggestions } />
  </StyledSearchForm>
)  

SearchForm.propTypes = {
  isOpen: PropTypes.bool,
  loading: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  suggestions: PropTypes.array.isRequired,
  openSuggestions: PropTypes.func.isRequired,
  closeSuggestions: PropTypes.func.isRequired
}

export default SearchForm