import React, { Component } from 'react'

import theme from 'config/theme'
import PopUp from 'components/generic/PopUp/container'
import Title from 'components/ArtistPage/Title/'
import Button from 'components/generic/Button/'
import Artist from './Artist/'
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
          <PopUp isOpen={ this.state.isOpen } togglePopUp={ this.togglePopUp }>
            <div>
              <h1>Related Artists list</h1>
              <p>description...</p>
            </div>
          </PopUp>          
        </StyledContainerRelatedArtists>
      </StyledRelatedArtists>
    )
  }
}

export default RelatedArtists