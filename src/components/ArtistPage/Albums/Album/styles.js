import styled from 'styled-components'

const StylesAlbum = styled.div`
  cursor: pointer;
  display: grid;
  grid-template-columns: 60px 2fr;
  grid-gap: 20px;
  img {
    border-radius: 4px;
  }
  h3 {
    color: white;
    font-size: 1.6rem;
    font-weight: 500;
    margin: 0 0 10px;
  }
  p {
    color: ${ props => props.theme.blueDarkText };
    font-size: 1.4rem;
    margin: 2px 0;
  }
` 

export default StylesAlbum