import React from 'react'
import PropTypes from 'prop-types'

import StylesAlbum from './styles'
import PlaceholderAlbum from 'svgs/placeholderAlbum.svg'

const Album = ({
  cover,
  title,
  releaseDate,
  numberTracks
}) => (
  <StylesAlbum onClick={ () => console.log('open album popup') }>
    <img 
      src={ cover ? cover : PlaceholderAlbum } 
      alt={ title }
      width="60"
      height="60" />
    <div>
      <h3>{ title }</h3>
      <p>Total tracks: { numberTracks }</p>
      <p>Release date: { releaseDate }</p>
    </div>
  </StylesAlbum>
)

Album.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string.isRequired,
  releaseDate: PropTypes.string.isRequired,
  numberTracks: PropTypes.number.isRequired
}

export default Album