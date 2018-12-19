import styled from 'styled-components'
import PropTypes from 'prop-types';

const StyledTrack = styled.div`
  color: ${ props => props.isPopUpVersion ? props.theme.blueDark : 'white' };
  cursor: pointer;
  display: grid; 
  grid-template-columns: 40px 1fr;
  grid-gap: 20px;
  h4 {
    font-size: 1.4rem;
    font-weight: 500;
    margin: 2px 0 5px;
  }
  p {
    color: ${ props => props.theme.offWhite };
    font-size: 1.2rem;
    margin: 0;
  }
`

StyledTrack.propTypes = {
  isPopUpVersion: PropTypes.bool
}

export default StyledTrack