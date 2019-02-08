import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import StyledArtist from './styles'
import PlaceholderArtist from 'svgs/placeholderArtist.svg'
import NameWithOutSpaces from 'lib/name-without-spaces'

export const Artist = ({ id, name, photo, token }) => (
  <StyledArtist>
    <img 
      alt={ name }
      src={ photo ? photo : PlaceholderArtist } 
      width="40"
      height="40" />
    <h4>{ name }</h4>
    <Link to={ `/artist/${ NameWithOutSpaces(name) }/${ id }?#access_token=${ token }` } />
  </StyledArtist>
)

Artist.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  photo: PropTypes.string,
  token: PropTypes.string.isRequired
}

const mapStateToProps = (state) => ({
  token: state.AuthReducer.token
})

export default connect(
  mapStateToProps,
  {}
)(Artist)