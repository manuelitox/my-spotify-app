import React from 'react'
import PropTypes from 'prop-types'

import StyledTitle from './styles'

const Title = ({ color, children }) => <StyledTitle color={ color }>{ children }</StyledTitle>

Title.propTypes = {
  color: PropTypes.string,
  children: PropTypes.string.isRequired
}

export default Title