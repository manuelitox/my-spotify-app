import styled from 'styled-components'

const StyledArtist = styled.div`
  display: grid;
  grid-template-columns: 40px 1fr;
  grid-gap: 20px;
  position: relative;
  h4 {
    align-self: center;
    font-weight: 500;
    margin: 0;
  }
  img {
    border-radius: 4px;
  }
  a {
    bottom: 0;
    left: 0;
    height: 100%;
    position: absolute;
    width: 100%;
    z-index: 1;
  }
`

export default StyledArtist