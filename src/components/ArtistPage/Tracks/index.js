import React, { Component } from 'react'

import Track from 'components/generic/Track/'
import Title from 'components/ArtistPage/Title/'
import PopUp from 'components/generic/PopUp/container'
import Button from 'components/generic/Button/'
import StyledWrapperTracks from './styles'

class Tracks extends Component {
  state = { isOpen: false }
  
  togglePopUp = () => this.setState({ isOpen: !this.state.isOpen })
 
  render () {
    return (
      <div>
        <Title>Top Tracks</Title>
        <StyledWrapperTracks>
          <Track name="Empire State of Mind" previewUrl="https://p.scdn.co/mp3-preview/d7624ec5f93b6d92c1836a95c40ecce463584f6e?cid=774b29d4f13844c495f206cafdad9c86" releaseDate="2016-07-17" />
          <Track name="No one" previewUrl="https://p.scdn.co/mp3-preview/d7624ec5f93b6d92c1836a95c40ecce463584f6e?cid=774b29d4f13844c495f206cafdad9c86" releaseDate="2016-07-17" />
          <Track name="Girl on Fire" previewUrl="https://p.scdn.co/mp3-preview/d7624ec5f93b6d92c1836a95c40ecce463584f6e?cid=774b29d4f13844c495f206cafdad9c86" releaseDate="2016-07-17" />
          <Track name="Fallin'" previewUrl="https://p.scdn.co/mp3-preview/d7624ec5f93b6d92c1836a95c40ecce463584f6e?cid=774b29d4f13844c495f206cafdad9c86" releaseDate="2016-07-17" />
        </StyledWrapperTracks>
        <Button onClick={ this.togglePopUp }>view more tracks</Button>
        <PopUp isOpen={ this.state.isOpen } togglePopUp={ this.togglePopUp }>
          <div>
            <h1>Top Tracks list</h1>
            <p>description...</p>
          </div>
        </PopUp>        
      </div>
    )
  }
}

export default Tracks