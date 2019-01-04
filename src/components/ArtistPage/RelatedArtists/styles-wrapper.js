import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledWrapperRelatedArtists = styled.div`
  display: grid;
  grid-template-columns: ${ props => props.inPopup ? '1fr' : '1fr 1fr 1fr' };
  grid-gap: 30px;
  margin: 0 0 20px;
  @media only screen and (max-width: ${ props => props.theme.size.medium }) {
    grid-template-columns: 1fr 1fr;
  }
  @media only screen and (max-width: ${ props => props.theme.size.small }) {
    grid-template-columns: 1fr;
  }
`

StyledWrapperRelatedArtists.propTypes = {
  inPopup: PropTypes.bool
}

export default StyledWrapperRelatedArtists