import styled from 'styled-components'

const StyledMessage = styled.div`
  background-color: ${ props => props.theme.searchSpan };
  border-radius: 4px;
  color: ${ props => props.theme.offWhite };
  font-size: 1rem;
  font-weight: 600;
  right: 14px;
  top: 16px;
  padding: 8px;
  position: absolute;
  @media only screen and (max-width: ${ props => props.theme.size.small }) {
    right: 34px;
  }
`

export default StyledMessage