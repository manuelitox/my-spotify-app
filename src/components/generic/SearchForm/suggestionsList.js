import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import NameWithOutSpaces from 'lib/name-without-spaces'
import PlaceholderArtist from 'svgs/placeholderArtist.svg'
import StyledSuggestionsList from './stylesSuggestionsList'

const SuggestionsList = ({
  data,
  token,
  isOpen,
  numberOfArtists,
  closeSuggestions
}) => (
  isOpen && numberOfArtists >= 1 && 
    <StyledSuggestionsList>
      { data.map( suggestion => (
        <li key={ suggestion.id }>
          <Link onClick={ closeSuggestions } to={{  pathname: `/artist/${ NameWithOutSpaces(suggestion.name) }/${ suggestion.id }`, search: `?#access_token=${ token }`  }}>
            <img 
              alt={ suggestion.name }
              src={ suggestion.images.length >= 1 ? suggestion.images[0].url : PlaceholderArtist } 
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
  data: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.shape({
      url: PropTypes.string.isRequired,
      width: PropTypes.number.isRequired,
      height: PropTypes.number.isRequired
    }))
  })),
  token: PropTypes.string,
  numberOfArtists: PropTypes.number,
  closeSuggestions: PropTypes.func.isRequired
}

export default SuggestionsList