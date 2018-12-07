import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledTitle = styled.h2`
  color: ${ props => props.color };
  font-size: 2rem;
  font-weight: 500;
  margin: 0;
`

StyledTitle.defaultProps = {
  color: 'white'
}

StyledTitle.propTypes = {
  color: PropTypes.string
}

export default StyledTitle