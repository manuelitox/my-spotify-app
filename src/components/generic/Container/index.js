import React from 'react'
import PropTypes from 'prop-types'

import StyledContainer from './styles'

const WithContainer = WrapperComponent => props => (
  <StyledContainer { ...props }>
    <WrapperComponent>
      { props.children }
    </WrapperComponent>
  </StyledContainer>
)

WithContainer.propTypes = {
  WrapperComponent: PropTypes.func.isRequired
}

export default WithContainer