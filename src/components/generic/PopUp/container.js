import React, { Component } from 'react'
import PropTypes from 'prop-types'
import onClickOutside from 'react-onclickoutside'

import PopUp from './'

export class PopUpContainer extends Component {
  handleClickOutside = () => this.props.togglePopUp()

  render () {
    return this.props.isOpen && <PopUp { ...this.props } />
  }
}

PopUpContainer.defaultProps = {
  WithCloseButton: true
}

PopUpContainer.propTypes = {
  width: PropTypes.string, 
  isOpen: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.string,
    PropTypes.object
  ]),
  togglePopUp: PropTypes.func.isRequired,
  WithCloseButton: PropTypes.bool
}

export default onClickOutside(PopUpContainer)