import React, { Component } from 'react'

import Title from 'components/ArtistPage/Title/'
import Album from './Album/'
import PopUp from 'components/generic/PopUp/container'
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
        <PopUp isOpen={ this.state.isOpen } togglePopUp={ this.togglePopUp }>
          <div>
            <h1>Albums list</h1>
            <p>description...</p>
          </div>
        </PopUp>
      </div>      
    )
  } 
}

export default Albums