import styled from 'styled-components'

import { ReactComponent as WaveArtistIcon } from 'svgs/bgWaveArtist.svg'

const StylesWaveArtistIcon = styled(WaveArtistIcon)`
  height: 80px;
  position: absolute;
  top: 100%;
  width: 100%;
  @media only screen and (max-width: ${ props => props.theme.size.small }) {
    height: 40px;
  }    
`

export default StylesWaveArtistIcon