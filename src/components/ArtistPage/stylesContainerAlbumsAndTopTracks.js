import styled from 'styled-components'

import WithContainer from 'components/generic/Container/'

const StyledContainerAlbumsAndTopTracks = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  padding-bottom: 40px;
  padding-top: 40px;
  @media only screen and (max-width: ${ props => props.theme.size.medium }) {
    grid-template-columns: 1fr;
    & > div:first-of-type {
      margin-bottom: 30px;
    }
  }
  @media only screen and (max-width: ${ props => props.theme.size.small }) {
    padding-top: 0;
  }  
`

export default WithContainer(StyledContainerAlbumsAndTopTracks)