import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import theme from 'config/theme'
import PopUp from 'components/generic/PopUp/container'
import Title from 'components/ArtistPage/Title/'
import Artist from 'components/ArtistPage/RelatedArtists/Artist/'
import StyledWrapperRelatedArtists from 'components/ArtistPage/RelatedArtists/styles-wrapper'

const PopUpRelatedArtists = ({ isOpen, togglePopUp }) => (
  <PopUp isOpen={ isOpen } togglePopUp={ togglePopUp }>
    <Fragment>
      <Title color={ theme.blueDark } insidePopUp={ true }>Related Artists</Title>
      <StyledWrapperRelatedArtists inPopup onClick={ togglePopUp }>
        <Artist id="1" name="Martin Abasto" />
        <Artist id="2" name="Bairam Frootan" />
        <Artist id="3" name="Emmalynn Mazzia" />
        <Artist id="4" name="Gabriel Pires" />
        <Artist id="5" name="Irene Sotelo" />
        <Artist id="6" name="Oea Romana" />
        <Artist id="7" name="Pin Jung-Eym" />
        <Artist id="8" name="Udom Paowsong" />    
        <Artist id="9" name="John Doe" />    
      </StyledWrapperRelatedArtists>
    </Fragment>
  </PopUp>      
)

PopUpRelatedArtists.propTypes = {
  isOpen: PropTypes.bool,
  togglePopUp: PropTypes.func.isRequired
}

export default PopUpRelatedArtists