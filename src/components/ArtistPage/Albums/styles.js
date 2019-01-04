import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledWrapperAlbums = styled.div`
  display: grid;
  grid-template-columns: ${ props => props.inPopup ? '1fr' : '1fr 1fr' };
  grid-gap: 30px;
  margin: 0 0 20px;
  @media only screen and (max-width: ${ props => props.theme.size.small }) {
    grid-template-columns: 1fr
  }
  /* if its into Popup set color of the album title */
  h3 {
    color: ${ props => props.inPopup && props.theme.blueDark };
  }
`


StyledWrapperAlbums.propTypes = {
  inPopup: PropTypes.bool
}

export default StyledWrapperAlbums