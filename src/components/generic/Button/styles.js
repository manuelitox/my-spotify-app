import styled from 'styled-components'
import PropTypes from 'prop-types'

import theme from 'config/theme'

const StyledButton = styled.button`
  background-color: ${ props => props.bg };
  border-radius: 1px;
  color: ${ props => props.textColor };
  display: block;
  font-size: 1.4rem;
  font-weight: 500;
  padding: 14px 20px;
  transform: skew(-2deg);
`

StyledButton.defaultProps = {
  bg: theme.searchSpan,
  textColor: theme.blueDark
}

StyledButton.propTypes = {
  bg: PropTypes.string,
  textColor: PropTypes.string
}

export default StyledButton