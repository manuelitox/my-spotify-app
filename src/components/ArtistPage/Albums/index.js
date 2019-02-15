import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Title from 'components/ArtistPage/Title/'
import Album from './Album/'
import PopUpAlbums from './PopUp/'
import Button from 'components/generic/Button/'
import StyledWrapperAlbums from './styles'
import getImage from 'lib/get-image'

export class Albums extends Component {
  state = { isOpen: false }

  togglePopUp = () => this.setState({ isOpen: !this.state.isOpen })

  render () {
    const { albums } = this.props
    const albumsList = albums && albums.items ? albums.items : []
    return (
      <div>
        <Title>Albums</Title>
        <StyledWrapperAlbums>
          { albumsList.map((album, index) => {
            if (index > 5) return null
            return <Album key={ index } id={ album.id } title={ album.name } cover={ getImage(album.images) } numberTracks={ album.total_tracks } releaseDate={ album.release_date } />  
          }) }
        </StyledWrapperAlbums>
        <Button onClick={ this.togglePopUp }>view more albums</Button>
        <PopUpAlbums isOpen={ this.state.isOpen } togglePopUp={ this.togglePopUp } albums={ albumsList } className="albums-list-popup" />
      </div>      
    )
  } 
}

Albums.propTypes = {
  albums: PropTypes.shape({
    items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
        total_tracks: PropTypes.number,
        release_date: PropTypes.string
      })
    )
  }).isRequired
}

const mapStateToProps = (state) => ({
  albums: state.ArtistReducer.albums
})

export default connect(
  mapStateToProps,
  {}
)(Albums)