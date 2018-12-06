import React from 'react'
import PropTypes from 'prop-types'

import StyledMessage from './stylesMessage'

const LoadingMessage = ({ loading }) => (
  loading ? <StyledMessage>loading</StyledMessage> : null
)

LoadingMessage.propTypes = {
  loading: PropTypes.bool
}

export default LoadingMessage