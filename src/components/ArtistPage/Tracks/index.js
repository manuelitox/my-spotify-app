import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Track from 'components/generic/Track/'
import Title from 'components/ArtistPage/Title'
import Button from 'components/generic/Button/'
import PopUpTopTracks from './PopUp/'
import StyledWrapperTracks from './styles'

export class Tracks extends Component {
  state = { isOpen: false }
  
  togglePopUp = () => this.setState({ isOpen: !this.state.isOpen })
 
  render () {
    const { topTracks } = this.props
    const topTracksList = topTracks && topTracks.tracks ? topTracks.tracks : []
    return (
      <div>
        <Title>Top Tracks</Title>
        <StyledWrapperTracks>
          { topTracksList.map((track, index) => {
            if ( index > 3 ) return null
            return <Track key={ index } name={ track.name } previewUrl={ track.preview_url } releaseDate={ track.album.release_date } />
          }) }
        </StyledWrapperTracks>
        <Button onClick={ this.togglePopUp }>view more tracks</Button>
        <PopUpTopTracks isOpen={ this.state.isOpen } togglePopUp={ this.togglePopUp } tracks={ topTracksList } />
      </div>
    )
  }
}

Tracks.propTypes = {
  topTracks: PropTypes.shape({
    tracks: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        preview_url: PropTypes.string,
        is_playable: PropTypes.bool,
        album: PropTypes.shape({
          release_date: PropTypes.string
        })     
      })
    )
  })
}

const mapStateToProps = (state) => ({
  topTracks: state.ArtistReducer.topTracks
})

export default connect(
  mapStateToProps,
  {}
)(Tracks)