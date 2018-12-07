import styled from 'styled-components'

const StyledBanner = styled.div`
  background-color: ${ props => props.theme.blueLight };
  margin-bottom: 80px;
  padding: 60px 0 100px;
  position: relative;
  @media only screen and (max-width: ${ props => props.theme.size.medium }) {
    padding: 40px 0;
  }         
  @media only screen and (max-width: ${ props => props.theme.size.small }) {
    padding: 30px 0;
  }     
  & > div {
    display: grid;
    grid-gap: 30px;
    grid-template-columns: 120px 1fr;
    @media only screen and (max-width: ${ props => props.theme.size.medium }) {
      grid-template-columns: 100px 1fr;
    }         
    @media only screen and (max-width: ${ props => props.theme.size.small }) {
      grid-template-columns: 1fr;
    }         
  }
  img {
    border-radius: 100%;
    @media only screen and (max-width: ${ props => props.theme.size.medium }) {
      height: 100px;
      width: 100px;
    }  
  }
  h1 {
    color: white;
    font-weight: 500;
    font-size: 6rem;
    margin: 0;
    @media only screen and (max-width: ${ props => props.theme.size.medium }) {
      font-size: 5rem;
    }     
    @media only screen and (max-width: ${ props => props.theme.size.small }) {
      font-size: 3rem;
    }     
  }
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  li {
    display: inline-block;
    color: ${ props => props.theme.blueLightText };
    font-size: 2rem;
    font-weight: 500;
    text-transform: uppercase;
    @media only screen and (max-width: ${ props => props.theme.size.medium }) {
      font-size: 1.5rem;
    }      
    @media only screen and (max-width: ${ props => props.theme.size.small }) {
      font-size: 1rem;
    }         
  }
  span {
    margin: 0 10px;
    @media only screen and (max-width: ${ props => props.theme.size.small }) {
      margin: 0 4px;
    }     
  }
`

export default StyledBanner