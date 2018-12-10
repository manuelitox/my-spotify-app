import React from 'react'

import Title from 'components/ArtistPage/Title/'
import Album from './Album/'
import Button from 'components/generic/Button/'
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
    <Button onClick={ () => console.log('open albums list popup') }>view more albums</Button>
  </div>
)

export default Albums