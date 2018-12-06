import styled from 'styled-components'

const StyledFooter = styled.footer`
  color: ${ props => props.theme.textFooter };
  font-size: 1.2rem;
  font-weight: 500;
  text-align: center;
  a {
    color: ${ props => props.theme.textFooter };
  }
  p {
    margin: 0;
    padding: 20px 0;
    @media only screen and (max-width: ${ props => props.theme.size.small }) {
      padding-bottom: 10px;
    }
  }
`

export default StyledFooter