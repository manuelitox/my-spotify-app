import styled from 'styled-components'

const StyledContainer = styled.div`
  margin: 0 auto;
  max-width: ${ props => props.theme.maxWidth };
`

export default StyledContainer