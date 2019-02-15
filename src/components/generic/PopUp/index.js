import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import BodyClassName from 'react-body-classname'

import theme from 'config/theme'
import Button from 'components/generic/Button/'
import StyledPopUp from './styles'

const PopUp = ({ width, children, togglePopUp, textCloseButton, WithCloseButton, className }) => (
  <Fragment>
    <BodyClassName className="fixed" />
    <StyledPopUp id={ className } className={ className } width={ width }>
      { WithCloseButton ? 
        <Button 
          bg={ theme.blueDark }
          textColor="white"
          onClick={ togglePopUp }>
          { textCloseButton ? textCloseButton : 'Close' }
        </Button> : undefined }
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
  className: PropTypes.string,
  togglePopUp: PropTypes.func.isRequired,
  WithCloseButton: PropTypes.bool
}

export default PopUp