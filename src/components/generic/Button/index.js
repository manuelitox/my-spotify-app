import React from 'react'
import PropTypes from 'prop-types'

import StyledButton from './styles'

const Button = ({ 
  bg, 
  onClick, 
  children,
  textColor
}) => (
  <StyledButton bg={ bg } textColor={ textColor } onClick={ onClick }>
    { children }
  </StyledButton>
)

Button.propTypes = {
  bg: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.string,
  textColor: PropTypes.string
}

export default Button