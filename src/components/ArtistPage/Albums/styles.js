import styled from 'styled-components'

const StyledWrapperAlbums = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 30px;
  @media only screen and (max-width: ${ props => props.theme.size.small }) {
    grid-template-columns: 1fr
  }
`

export default StyledWrapperAlbums