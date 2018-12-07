import styled from 'styled-components'

import WithContainer from 'components/generic/Container/'

const StyledContainerAlbumsAndTopTracks = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
`

export default WithContainer(StyledContainerAlbumsAndTopTracks)