import React, { Component } from 'react'

import theme from 'config/theme'
import Title from 'components/ArtistPage/Title/'
import Button from 'components/generic/Button/'
import Artist from './Artist/'
import PopUpRelatedArtists from './PopUp/'
import StyledRelatedArtists from './styles'
import StyledWrapperRelatedArtists from './styles-wrapper'
import StyledContainerRelatedArtists from './styles-container'

class RelatedArtists extends Component {
  state = { isOpen: false }
  
  togglePopUp = () => this.setState({ isOpen: !this.state.isOpen })

  render () {
    return (
      <StyledRelatedArtists>
        <StyledContainerRelatedArtists>
          <Title color={ theme.blueDark }>Related Artists</Title>
          <StyledWrapperRelatedArtists>
            <Artist id="1" name="Martin Abasto" />
            <Artist id="2" name="Bairam Frootan" />
            <Artist id="3" name="Emmalynn Mazzia" />
            <Artist id="4" name="Gabriel Pires" />
            <Artist id="5" name="Irene Sotelo" />
            <Artist id="6" name="Oea Romana" />
            <Artist id="7" name="Pin Jung-Eym" />
            <Artist id="8" name="Udom Paowsong" />    
            <Artist id="9" name="John Doe" />    
          </StyledWrapperRelatedArtists>
          <Button 
            bg={ theme.blueDark }
            textColor="white"
            onClick={ this.togglePopUp }>
            view related artists
          </Button>
          <PopUpRelatedArtists isOpen={ this.state.isOpen } togglePopUp={ this.togglePopUp } />
        </StyledContainerRelatedArtists>
      </StyledRelatedArtists>
    )
  }
}

export default RelatedArtists