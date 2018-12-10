import React from 'react'

import Track from './Track/'
import Title from 'components/ArtistPage/Title/'
import Button from 'components/generic/Button/'
import StyledWrapperTracks from './styles'

const Tracks = () => (
  <div>
    <Title>Top Tracks</Title>
    <StyledWrapperTracks>
      <Track name="Empire State of Mind" previewUrl="https://p.scdn.co/mp3-preview/d7624ec5f93b6d92c1836a95c40ecce463584f6e?cid=774b29d4f13844c495f206cafdad9c86" releaseDate="2016-07-17" />
      <Track name="No one" previewUrl="https://p.scdn.co/mp3-preview/d7624ec5f93b6d92c1836a95c40ecce463584f6e?cid=774b29d4f13844c495f206cafdad9c86" releaseDate="2016-07-17" />
      <Track name="Girl on Fire" previewUrl="https://p.scdn.co/mp3-preview/d7624ec5f93b6d92c1836a95c40ecce463584f6e?cid=774b29d4f13844c495f206cafdad9c86" releaseDate="2016-07-17" />
      <Track name="Fallin'" previewUrl="https://p.scdn.co/mp3-preview/d7624ec5f93b6d92c1836a95c40ecce463584f6e?cid=774b29d4f13844c495f206cafdad9c86" releaseDate="2016-07-17" />
    </StyledWrapperTracks>
    <Button onClick={ () => console.log('open the top track list popup') }>view more tracks</Button>
  </div>
)

export default Tracks