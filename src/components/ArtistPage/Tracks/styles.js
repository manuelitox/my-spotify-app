import styled from 'styled-components'

const StyledWrapperTracks = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 30px;
  margin: 0 0 20px;
  @media only screen and (max-width: ${ props => props.theme.size.medium }) {
    grid-template-columns: 1fr 1fr;
  }
  @media only screen and (max-width: ${ props => props.theme.size.small }) {
    grid-template-columns: 1fr;
  }  
`

export default StyledWrapperTracks