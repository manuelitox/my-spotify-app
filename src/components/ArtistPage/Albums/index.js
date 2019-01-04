import React, { Component } from 'react'

import Title from 'components/ArtistPage/Title/'
import Album from './Album/'
import PopUpAlbums from './PopUp/'
import Button from 'components/generic/Button/'
import StyledWrapperAlbums from './styles'

class Albums extends Component {
  state = { isOpen: false }
  
  togglePopUp = () => this.setState({ isOpen: !this.state.isOpen })

  render () {
    return (
      <div>
        <Title>Albums</Title>
        <StyledWrapperAlbums>
          <Album title="Hallelujah" numberTracks={ 12 } releaseDate="2016-06-17" />
          <Album title="Hallelujah" numberTracks={ 12 } releaseDate="2016-06-17" />
          <Album title="Hallelujah" numberTracks={ 12 } releaseDate="2016-06-17" />
          <Album title="Hallelujah" numberTracks={ 12 } releaseDate="2016-06-17" />
          <Album title="Hallelujah" numberTracks={ 12 } releaseDate="2016-06-17" />
          <Album title="Hallelujah" numberTracks={ 12 } releaseDate="2016-06-17" />
        </StyledWrapperAlbums>
        <Button onClick={ this.togglePopUp }>view more albums</Button>
        <PopUpAlbums isOpen={ this.state.isOpen } togglePopUp={ this.togglePopUp } />
      </div>      
    )
  } 
}

export default Albums