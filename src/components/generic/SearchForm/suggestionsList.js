import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import PlaceholderArtist from 'svgs/placeholderArtist.svg'
import StyledSuggestionsList from './stylesSuggestionsList'

const SuggestionsList = ({
  isOpen,
  suggestions,
  numberOfArtists
}) => (
  isOpen && numberOfArtists >= 1 && 
    <StyledSuggestionsList>
      { suggestions.map( suggestion => (
        <li key={ suggestion.id }>
          <Link to={ `/artist/${ suggestion.name.replace(' ', '-') }/${ suggestion.id }` }>
            <img 
              alt={ suggestion.name }
              src={ suggestion.photo ? suggestion.photo : PlaceholderArtist } 
              width="40"
              height="40" />
            { suggestion.name }
          </Link>
        </li>
      ) ) }
    </StyledSuggestionsList>
)

SuggestionsList.propTypes = {
  isOpen: PropTypes.bool,
  suggestions: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    photo: PropTypes.string
  })),
  numberOfArtists: PropTypes.number
}

export default SuggestionsList