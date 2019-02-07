import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import PopUp from './base'
import GetUrl from 'lib/auth/get-url'
import GetToken from 'lib/auth/get-token'
import { authUpdate } from 'actions/auth'

export class Auth extends Component {
  componentDidMount() {
    const { authUpdate } = this.props
    const url = GetUrl(window.location.href)
    const token = GetToken(url)
    authUpdate(token)
  }

  render() { 
    const { token } = this.props
    return !token ? <PopUp /> : null
  }
}

Auth.propTypes = {
  token: PropTypes.string,
  authUpdate: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  token: state.AuthReducer.token
})

export default connect(
  mapStateToProps,
  { authUpdate }
)(Auth)