import React from 'react'

import Title from 'components/ArtistPage/Title/'
import Album from './Album/'
import StyledWrapperAlbums from './styles'

const Albums = () => (
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
  </div>
)

export default Albums