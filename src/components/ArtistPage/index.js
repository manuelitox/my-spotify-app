import React from 'react'
 
import Header from './Header/'
import Banner from './Banner/'
import Albums from './Albums/'
import Tracks from './Tracks/'
import StyledArtistPage from './styles'
import StyledContainerAlbumsAndTopTracks from './stylesContainerAlbumsAndTopTracks'

const ArtistPage = () => (
  <StyledArtistPage>
    <Header />
    <Banner />
    <StyledContainerAlbumsAndTopTracks>
      <Albums />
      <Tracks />
    </StyledContainerAlbumsAndTopTracks>
  </StyledArtistPage>
)

export default ArtistPage