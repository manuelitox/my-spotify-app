import React from 'react'
import PropTypes from 'prop-types'

import StyledTitle from './styles'

const Title = ({ children }) => <StyledTitle>{ children }</StyledTitle>

Title.propTypes = {
  children: PropTypes.string.isRequired
}

export default Title