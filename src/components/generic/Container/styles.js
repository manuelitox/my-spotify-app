import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledContainer = styled.div`
  background-color: ${ props => props.bg ? props.bg : 'transparent' };
  margin: 0 auto;
  max-width: ${ props => props.theme.maxWidth };
  padding: 0 20px;
`

StyledContainer.propTypes = {
  bg: PropTypes.string
}

export default StyledContainer