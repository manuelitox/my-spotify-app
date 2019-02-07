import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Track from 'components/generic/Track/'
import PopUp from 'components/generic/PopUp/container'
import PlaceholderAlbum from 'svgs/placeholderAlbum.svg'
import StylesHeaderAlbum from './styles-header'
import StylesWrapperTracks from 'components/ArtistPage/stylesWrapperTracks'
import { getArtistsAlbumsTracks } from 'actions/artist'

export class PopUpAlbum extends Component {
  componentDidUpdate (prevProps) {
    if (this.props.albumId && prevProps.albumId !== this.props.albumId) {
      this.props.getArtistsAlbumsTracks(this.props.albumId, this.props.token);
    }
  }

  render () {
    const { id, isOpen, togglePopUp, cover, title, releaseDate, numberTracks, albumsTracks } = this.props
    return (
      <PopUp isOpen={ isOpen } togglePopUp={ togglePopUp.bind(this, id) }>
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
            { albumsTracks && albumsTracks.items && albumsTracks.items.map( track => (
              <Track 
                key={ track.id }
                name={ track.name }
                duration={ track.duration_ms }
                previewUrl={ track.preview_url }
                isPopUpVersion
                songIsAvailable />                           
            )) }          
          </StylesWrapperTracks>
        </Fragment>
      </PopUp>            
    )
  }
}

PopUpAlbum.propTypes = {
  token: PropTypes.string,
  isOpen: PropTypes.bool,
  togglePopUp: PropTypes.func.isRequired,
  cover: PropTypes.string,
  title: PropTypes.string.isRequired,
  releaseDate: PropTypes.string.isRequired,
  numberTracks: PropTypes.number.isRequired,
  albumsTracks: PropTypes.shape({
    items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
        duration_ms: PropTypes.number,
        preview_url: PropTypes.string
      })
    )
  }),
  getArtistsAlbumsTracks: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  token: state.AuthReducer.token,
  albumsTracks: state.ArtistReducer.albumsTracks
})

export default connect(
  mapStateToProps,
  { getArtistsAlbumsTracks }
)(PopUpAlbum)