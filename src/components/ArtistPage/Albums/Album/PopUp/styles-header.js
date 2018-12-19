import styled from 'styled-components'

const StylesHeaderAlbum = styled.div`
  margin: 30px 0;
  img {
    @media only screen and (max-width: ${ props => props.theme.size.small }) {
      height: auto;
      max-width: 300px;
      width: 100%;
    }
  }
  h3 {
    color: ${ props => props.theme.blueDark };
    font-size: 1.6rem;
    font-weight: 500;
    margin: 10px 0 4px;
  }
  p {
    color: ${ props => props.theme.offWhite };
    font-size: 1.4rem;
    line-height: 1.6;
    margin: 0;
  }
`

export default StylesHeaderAlbum