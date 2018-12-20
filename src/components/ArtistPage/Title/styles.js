import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledTitle = styled.h2`
  color: ${ props => props.color };
  font-size: 2rem;
  font-weight: 500;
  margin: ${ props => props.insidePopUp ? '40px 0' : '0 0 40px' }; 
  text-decoration: underline;
  @media only screen and (max-width: ${ props => props.theme.size.small }) {
    margin-bottom: 30px;
  }
`

StyledTitle.defaultProps = {
  color: 'white'
}

StyledTitle.propTypes = {
  color: PropTypes.string,
  insidePopUp: PropTypes.bool
}

export default StyledTitle