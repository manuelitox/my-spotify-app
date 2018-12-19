import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import BodyClassName from 'react-body-classname'

import theme from 'config/theme'
import Button from 'components/generic/Button/'
import StyledPopUp from './styles'

const PopUp = ({ width, children, togglePopUp, textCloseButton }) => (
  <Fragment>
    <BodyClassName className="fixed" />
    <StyledPopUp width={ width }>
      <Button 
        bg={ theme.blueDark }
        textColor="white"
        onClick={ togglePopUp }>
        Close
      </Button>
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