import React from 'react'
import PropTypes from 'prop-types'

import StyledContainer from './styles'

const Container = WrapperComponent => props => (
  <StyledContainer { ...props }>
    <WrapperComponent>
      { props.children }
    </WrapperComponent>
  </StyledContainer>
)

Container.propTypes = {
  WrapperComponent: PropTypes.func.isRequired
}

export default Container