import styled from 'styled-components'

const StyledContainer = styled.div`
  margin: 0 auto;
  max-width: ${ props => props.theme.maxWidth };
  padding: 0 20px;
`

export default StyledContainer