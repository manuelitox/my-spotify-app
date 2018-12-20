import React from 'react'
import PropTypes from 'prop-types'

import StyledTitle from './styles'

const Title = ({ color, insidePopUp, children }) => <StyledTitle color={ color } insidePopUp={ insidePopUp }>{ children }</StyledTitle>

Title.propTypes = {
  color: PropTypes.string,
  children: PropTypes.string.isRequired,
  insidePopUp: PropTypes.bool
}

export default Title