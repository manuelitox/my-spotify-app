import styled from 'styled-components'
import PropTypes from 'prop-types';

const StyledInput = styled.input`
  appearance: none;
  border: 0;
  border-radius: ${ props => props.isOpen ? '4px 4px 0 0' : '4px' };
  padding: 20px;
  &:focus {
    outline: 0;
  }
`

StyledInput.propTypes = {
  isOpen: PropTypes.bool
}

export default StyledInput