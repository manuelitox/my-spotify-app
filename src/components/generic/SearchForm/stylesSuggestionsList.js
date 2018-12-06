import styled from 'styled-components'

const StyledSuggestionsList = styled.ul`
  border: 1px solid ${ props => props.theme.blueLightBorder };
  border-radius: 0 0 4px 4px;
  bottom: 2px;
  list-style: none;
  margin: 0;
  max-height: 200px;
  text-align: left;
  position: relative;
  padding: 0;
  overflow-x: hidden;
  overflow-y: auto;
  li {
    border-bottom: 1px solid ${ props => props.theme.blueLightBorder };
    &:last-of-type {
      border-bottom: 0;
    }
  }
  a {
    background-color: ${ props => props.theme.blueDark };
    color: white;
    display: block;
    padding: 10px 20px;
    transition: background-color .3s;
    &:hover,
    &:focus {
      background-color: ${ props => props.theme.blueLight };
    }
    &:focus {
      outline: 0;
    }
  }
  img {
    border: 1px solid ${ props => props.theme.offWhite };
    border-radius: 4px;
    margin-right: 10px;
    vertical-align: middle;
  }
`

export default StyledSuggestionsList