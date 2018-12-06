import React from 'react'
import PropTypes from 'prop-types'

import StyledMessage from './stylesMessage'

const ArtistMatchesCounter = ({ 
  isOpen,
  loading,
  numberOfArtists
}) => (
  !loading && isOpen ? <StyledMessage>{ numberOfArtists } matches</StyledMessage> : null
)

ArtistMatchesCounter.propTypes = {
  isOpen: PropTypes.bool,
  loading: PropTypes.bool,
  numberOfArtists: PropTypes.number
}

export default ArtistMatchesCounter