import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import BodyClassName from 'react-body-classname'

import StyledPopUp from './styles'

const PopUp = ({ width, children, togglePopUp }) => (
  <Fragment>
    <BodyClassName className="fixed" />
    <StyledPopUp width={ width }>
      <button onClick={ togglePopUp }>Close</button>
      { children }
    </StyledPopUp>
  </Fragment>
)

PopUp.propTypes = {
  width: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),
  togglePopUp: PropTypes.func.isRequired
}

export default PopUp