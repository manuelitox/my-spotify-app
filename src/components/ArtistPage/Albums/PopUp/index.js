import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import theme from 'config/theme'
import PopUp from 'components/generic/PopUp/container'
import Title from 'components/ArtistPage/Title/'
import Album from 'components/ArtistPage/Albums/Album/'
import StyledWrapperAlbums from 'components/ArtistPage/Albums/styles'
import getImage from 'lib/get-image'

const PopUpAlbums = ({ isOpen, togglePopUp, albums, className }) => (
  <PopUp isOpen={ isOpen } togglePopUp={ togglePopUp } className={ className }>
    <Fragment>
      <Title color={ theme.blueDark } insidePopUp={ true }>Albums</Title>
      <StyledWrapperAlbums inPopup>
        { albums.map( (album, index) => (
          <Album key={ index } id={ album.id } title={ album.name } cover={ getImage(album.images) } numberTracks={ album.total_tracks } releaseDate={ album.release_date } />
        )) }
      </StyledWrapperAlbums>
    </Fragment>
  </PopUp>      
)

PopUpAlbums.propTypes = {
  isOpen: PropTypes.bool,
  className: PropTypes.string,
  togglePopUp: PropTypes.func.isRequired,
  albums: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      total_tracks: PropTypes.number,
      release_date: PropTypes.string
    })
  )
}

export default PopUpAlbums