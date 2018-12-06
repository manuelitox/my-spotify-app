import styled from 'styled-components'

const StyledSearchPage = styled.div`
  background-image: linear-gradient(#3DC9C2, #3D4EC9);
  background-size: cover;
  background-position: center;
  color: white;
  height: 70vh;
  text-align: center;
  padding: 180px 20px;
  width: 100%;
  @media only screen and (max-width: ${ props => props.theme.size.small }) {
    padding: 80px 20px;
  }
`

export default StyledSearchPage