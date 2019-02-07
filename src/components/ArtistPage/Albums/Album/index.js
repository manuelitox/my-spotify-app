import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'

import PopUpAlbum from './PopUp/'
import StylesAlbum from './styles'
import PlaceholderAlbum from 'svgs/placeholderAlbum.svg'

class Album extends Component {
  state = { isOpen: false, id: null }

  selectToAlbumId = id => this.setState({ id })

  togglePopUp = id => {
    this.setState({ isOpen: !this.state.isOpen })
    this.selectToAlbumId(id)
  }

  render () {
    const { id, cover, title, releaseDate, numberTracks } = this.props
    return (
      <Fragment>
        <StylesAlbum onClick={ this.togglePopUp.bind(this, id) }>
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
        <PopUpAlbum 
          cover={ cover }
          albumId={ this.state.id }
          isOpen={ this.state.isOpen } 
          togglePopUp={ this.togglePopUp }
          title={ title }
          releaseDate={ releaseDate }
          numberTracks={ numberTracks }/>
      </Fragment>
    )
  }
}

Album.propTypes = {
  id: PropTypes.string,
  cover: PropTypes.string,
  title: PropTypes.string.isRequired,
  releaseDate: PropTypes.string.isRequired,
  numberTracks: PropTypes.number.isRequired
}

export default Album