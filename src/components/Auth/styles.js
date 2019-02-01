import styled from 'styled-components'

const StyledPopUp = styled.div`
  a {
    background-color: ${ props => props.theme.SpotifyColor };
    border-radius: 4px;
    color: white;
    display: inline-block;
    padding: 10px 20px;
  }
`

export default StyledPopUp