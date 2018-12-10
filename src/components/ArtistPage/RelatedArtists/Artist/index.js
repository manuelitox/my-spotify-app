import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import StyledArtist from './styles'
import PlaceholderArtist from 'svgs/placeholderArtist.svg'

const Artist = ({ id, name, photo }) => (
  <StyledArtist>
    <img 
      alt={ name }
      src={ photo ? photo : PlaceholderArtist } 
      width="40"
      height="40" />
    <h4>{ name }</h4>
    <Link to={ `/artist/${ name.replace(' ', '-') }/${ id }` } />
  </StyledArtist>
)

Artist.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  photo: PropTypes.string,
}

export default Artist