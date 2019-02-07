import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import theme from 'config/theme'
import Title from 'components/ArtistPage/Title/'
import Track from 'components/generic/Track/'
import PopUp from 'components/generic/PopUp/container'
import StylesWrapperTracks from 'components/ArtistPage/stylesWrapperTracks'

const PopUpTopTracks = ({ isOpen, togglePopUp, tracks }) => (
  <PopUp isOpen={ isOpen } togglePopUp={ togglePopUp }>
    <Fragment>
      <Title color={ theme.blueDark } insidePopUp={ true }>Top Tracks</Title>
      <StylesWrapperTracks>
        { tracks.map(track => (
          <Track 
            key={ track.id }
            name={ track.name }
            duration={ track.duration_ms }
            previewUrl={ track.preview_url }
            isPopUpVersion
            songIsAvailable={ track.is_playable } />
        )) }               
      </StylesWrapperTracks>
    </Fragment>
  </PopUp>      
)

PopUpTopTracks.propTypes = {
  isOpen: PropTypes.bool,
  togglePopUp: PropTypes.func.isRequired,
  tracks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      preview_url: PropTypes.string,
      is_playable: PropTypes.bool,
      duration_ms: PropTypes.number,
      album: PropTypes.shape({
        release_date: PropTypes.string
      })        
    })
  ).isRequired
}

export default PopUpTopTracks