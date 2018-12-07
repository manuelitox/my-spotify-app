import React from 'react'
 
import Header from './Header/'
import Banner from './Banner/'
import StyledArtistPage from './styles'
import StyledContainerAlbumsAndTopTracks from './stylesContainerAlbumsAndTopTracks'

const ArtistPage = () => (
  <StyledArtistPage>
    <Header />
    <Banner />
    <StyledContainerAlbumsAndTopTracks>
      <div>Albums</div>
      <div>tracks</div>
    </StyledContainerAlbumsAndTopTracks>
  </StyledArtistPage>
)

export default ArtistPage