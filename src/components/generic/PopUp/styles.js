import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledPopUp = styled.div`
  background-color: white;
  height: 100vh;
  top: 0;
  overflow: auto;
  padding: 20px;
  position: absolute;
  right: 0;
  width: ${ props => props.width };
  z-index: 5;
  @media only screen and (max-width: ${ props => props.theme.size.small }) {
    width: 100%;
  }
`

StyledPopUp.defaultProps = {
  width: '500px'
}

StyledPopUp.propTypes = {
  width: PropTypes.string
}

export default StyledPopUp