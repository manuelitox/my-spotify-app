import styled from 'styled-components'

import { ReactComponent as WaveSearchIcon } from 'svgs/bgWave.svg'

const StyledWaveSearchIcon = styled(WaveSearchIcon)`
  height: 60px;
  position: relative;
  top: -2px;
  width: 100%;
  @media only screen and (max-width: ${ props => props.theme.size.small }) {
    height: 40px;
  }
`

export default StyledWaveSearchIcon