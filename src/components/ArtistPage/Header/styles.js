import styled from 'styled-components'

const StyledHeader = styled.div`
  background-color: ${ props => props.theme.blueLight };
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 10px 20px;
  @media only screen and (max-width: ${ props => props.theme.size.small }) {
    grid-template-columns: 1fr;
  }    
  & > div {
    justify-self: end;
    margin: 0;
    max-width: 420px;
    @media only screen and (max-width: ${ props => props.theme.size.small }) {
      justify-self: start;
      margin-top: 10px;
      padding: 0;
      max-width: 100%;
    }          
    & > div {
      top: 10px;
    }
    input {
      padding: 14px;
    }
  }
`

export default StyledHeader