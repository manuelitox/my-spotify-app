import styled from 'styled-components'

const StyledSearchForm = styled.div`
  margin: 20px auto 0;
  position: relative;
  width: 560px;
  @media only screen and (max-width: ${ props => props.theme.size.small }) {
    width: 100%;
  }
`

export default StyledSearchForm