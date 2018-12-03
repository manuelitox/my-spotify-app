import styled from 'styled-components'

const StyledFooter = styled.footer`
  color: ${ props => props.theme.textFooter };
  font-size: 1.2rem;
  font-weight: 500;
  text-align: center;
  a {
    color: ${ props => props.theme.textFooter };
  }
`

export default StyledFooter