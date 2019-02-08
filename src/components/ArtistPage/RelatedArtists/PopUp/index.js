import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import theme from 'config/theme'
import PopUp from 'components/generic/PopUp/container'
import Title from 'components/ArtistPage/Title/'
import Artist from 'components/ArtistPage/RelatedArtists/Artist/'
import StyledWrapperRelatedArtists from 'components/ArtistPage/RelatedArtists/styles-wrapper'
import getImage from 'lib/get-image'

const PopUpRelatedArtists = ({ isOpen, togglePopUp, relatedArtists }) => (
  <PopUp isOpen={ isOpen } togglePopUp={ togglePopUp }>
    <Fragment>
      <Title color={ theme.blueDark } insidePopUp={ true }>Related Artists</Title>
      <StyledWrapperRelatedArtists inPopup onClick={ togglePopUp }>
        { relatedArtists.map((artist, index) => (
          <Artist key={ index } id={ artist.id } photo={ getImage(artist.images, 200) } name={ artist.name } />
        )) }   
      </StyledWrapperRelatedArtists>
    </Fragment>
  </PopUp>      
)

PopUpRelatedArtists.propTypes = {
  isOpen: PropTypes.bool,
  togglePopUp: PropTypes.func.isRequired,
  relatedArtists: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      images: PropTypes.array      
    })
  ).isRequired
}

export default PopUpRelatedArtists