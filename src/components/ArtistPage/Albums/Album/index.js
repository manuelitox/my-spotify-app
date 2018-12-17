import React, { Component } from 'react'
import PropTypes from 'prop-types'

import PopUp from 'components/generic/PopUp/container'
import StylesAlbum from './styles'
import PlaceholderAlbum from 'svgs/placeholderAlbum.svg'

class Album extends Component {
  state = { isOpen: false }
  
  togglePopUp = () => this.setState({ isOpen: !this.state.isOpen })

  render () {
    const { cover, title, releaseDate, numberTracks } = this.props
    return (
      <StylesAlbum onClick={ this.togglePopUp }>
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
        <PopUp isOpen={ this.state.isOpen } togglePopUp={ this.togglePopUp }>
          <div>
            <h1>Album</h1>
            <p>description...</p>
          </div>
        </PopUp>         
      </StylesAlbum>      
    )
  }
}

Album.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string.isRequired,
  releaseDate: PropTypes.string.isRequired,
  numberTracks: PropTypes.number.isRequired
}

export default Album