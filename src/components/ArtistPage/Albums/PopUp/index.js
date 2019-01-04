import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import theme from 'config/theme'
import PopUp from 'components/generic/PopUp/container'
import Title from 'components/ArtistPage/Title/'
import Album from 'components/ArtistPage/Albums/Album/'
import StyledWrapperAlbums from 'components/ArtistPage/Albums/styles'

const PopUpAlbums = ({ isOpen, togglePopUp }) => (
  <PopUp isOpen={ isOpen } togglePopUp={ togglePopUp }>
    <Fragment>
      <Title color={ theme.blueDark } insidePopUp={ true }>Albums</Title>
      <StyledWrapperAlbums inPopup>
        <Album title="Hallelujah" numberTracks={ 12 } releaseDate="2016-06-17" />
        <Album title="Hallelujah" numberTracks={ 12 } releaseDate="2016-06-17" />
        <Album title="Hallelujah" numberTracks={ 12 } releaseDate="2016-06-17" />
        <Album title="Hallelujah" numberTracks={ 12 } releaseDate="2016-06-17" />
        <Album title="Hallelujah" numberTracks={ 12 } releaseDate="2016-06-17" />
        <Album title="Hallelujah" numberTracks={ 12 } releaseDate="2016-06-17" />
      </StyledWrapperAlbums>
    </Fragment>
  </PopUp>      
)

PopUpAlbums.propTypes = {
  isOpen: PropTypes.bool,
  togglePopUp: PropTypes.func.isRequired
}

export default PopUpAlbums