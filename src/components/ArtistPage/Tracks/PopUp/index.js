import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import theme from 'config/theme'
import Title from 'components/ArtistPage/Title/'
import Track from 'components/generic/Track/'
import PopUp from 'components/generic/PopUp/container'
import StylesWrapperTracks from 'components/ArtistPage/stylesWrapperTracks'

const PopUpTopTracks = ({ isOpen, togglePopUp }) => (
  <PopUp isOpen={ isOpen } togglePopUp={ togglePopUp }>
    <Fragment>
      <Title color={ theme.blueDark } insidePopUp={ true }>Top Tracks</Title>
      <StylesWrapperTracks>
        <Track 
          name="Empire State of Mind" 
          duration="3 min"
          previewUrl="https://p.scdn.co/mp3-preview/d7624ec5f93b6d92c1836a95c40ecce463584f6e?cid=774b29d4f13844c495f206cafdad9c86"
          isPopUpVersion
          songIsAvailable />
        <Track 
          name="No one" 
          duration="4 min"
          previewUrl="https://p.scdn.co/mp3-preview/d7624ec5f93b6d92c1836a95c40ecce463584f6e?cid=774b29d4f13844c495f206cafdad9c86"
          isPopUpVersion
          songIsAvailable />
        <Track 
          name="Girl of Fire" 
          duration="3:23 min"
          previewUrl="https://p.scdn.co/mp3-preview/d7624ec5f93b6d92c1836a95c40ecce463584f6e?cid=774b29d4f13844c495f206cafdad9c86"
          isPopUpVersion
          songIsAvailable />    
        <Track 
          name="Fallin'" 
          duration="5:42 min"
          previewUrl="https://p.scdn.co/mp3-preview/d7624ec5f93b6d92c1836a95c40ecce463584f6e?cid=774b29d4f13844c495f206cafdad9c86"
          isPopUpVersion
          songIsAvailable />
        <Track 
          name="Girl of Fire" 
          duration="3:23 min"
          previewUrl="https://p.scdn.co/mp3-preview/d7624ec5f93b6d92c1836a95c40ecce463584f6e?cid=774b29d4f13844c495f206cafdad9c86"
          isPopUpVersion
          songIsAvailable />    
        <Track 
          name="Fallin'" 
          duration="5:42 min"
          previewUrl="https://p.scdn.co/mp3-preview/d7624ec5f93b6d92c1836a95c40ecce463584f6e?cid=774b29d4f13844c495f206cafdad9c86"
          isPopUpVersion
          songIsAvailable />                
      </StylesWrapperTracks>
    </Fragment>
  </PopUp>      
)

PopUpTopTracks.propTypes = {
  isOpen: PropTypes.bool,
  togglePopUp: PropTypes.func.isRequired
}

export default PopUpTopTracks