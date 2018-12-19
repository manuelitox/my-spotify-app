import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import Track from 'components/generic/Track/'
import PopUp from 'components/generic/PopUp/container'
import PlaceholderAlbum from 'svgs/placeholderAlbum.svg'
import StylesHeaderAlbum from './styles-header'
import StylesWrapperTracks from './styles-wrapper-tracks'

const PopUpAlbum = ({ isOpen, togglePopUp, cover, title, releaseDate, numberTracks }) => (
  <PopUp isOpen={ isOpen } togglePopUp={ togglePopUp }>
    <Fragment>
      <StylesHeaderAlbum>
        <img 
          src={ cover ? cover : PlaceholderAlbum } 
          alt={ title }
          width="300"
          height="300" />
        <h3>{ title }</h3>
        <p>Total tracks: { numberTracks }</p>
        <p>Release date: { releaseDate }</p>
      </StylesHeaderAlbum>
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

PopUpAlbum.propTypes = {
  isOpen: PropTypes.bool,
  togglePopUp: PropTypes.func.isRequired,
  cover: PropTypes.string,
  title: PropTypes.string.isRequired,
  releaseDate: PropTypes.string.isRequired,
  numberTracks: PropTypes.number.isRequired
}

export default PopUpAlbum