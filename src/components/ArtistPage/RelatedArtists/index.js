import React from 'react'

import theme from 'config/theme'
import Title from 'components/ArtistPage/Title/'
import Button from 'components/generic/Button/'
import Artist from './Artist/'
import StyledRelatedArtists from './styles'
import StyledWrapperRelatedArtists from './styles-wrapper'
import StyledContainerRelatedArtists from './styles-container'

const RelatedArtists = () => (
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
        onClick={ () => console.log('open the related artists list popup') }>
        view more tracks
      </Button>
    </StyledContainerRelatedArtists>
  </StyledRelatedArtists>
)

export default RelatedArtists