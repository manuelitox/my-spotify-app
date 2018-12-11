import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import BodyClassName from 'react-body-classname'

import StyledPopUp from './styles'

const PopUp = ({ width, isOpen, children }) => (
  isOpen && <Fragment>
    <BodyClassName className="fixed" />
    <StyledPopUp width={ width }>
      { children }
    </StyledPopUp>
  </Fragment>
)

PopUp.propTypes = {
  width: PropTypes.string, 
  isOpen: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ])
}

export default PopUp