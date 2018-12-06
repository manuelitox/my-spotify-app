import React from 'react'
import PropTypes from 'prop-types'

import StyledContainer from './styles'

const WithContainer = (WrapperComponent, backgroundColor) => props => (
  <StyledContainer bg={ backgroundColor } { ...props }>
    <WrapperComponent>
      { props.children }
    </WrapperComponent>
  </StyledContainer>
)

WithContainer.propTypes = {
  BackgroundColor: PropTypes.string,
  WrapperComponent: PropTypes.func.isRequired
}

export default WithContainer