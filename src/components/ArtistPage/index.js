import React from 'react'
 
import Header from './Header/'
import Banner from './Banner/'
import Albums from './Albums/'
import StyledArtistPage from './styles'
import StyledContainerAlbumsAndTopTracks from './stylesContainerAlbumsAndTopTracks'

const ArtistPage = () => (
  <StyledArtistPage>
    <Header />
    <Banner />
    <StyledContainerAlbumsAndTopTracks>
      <Albums />
      <div>tracks</div>
    </StyledContainerAlbumsAndTopTracks>
  </StyledArtistPage>
)

export default ArtistPage