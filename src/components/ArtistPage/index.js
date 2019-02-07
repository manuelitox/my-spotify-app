import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
 
import { getArtist } from 'actions/artist'
import StatelessArtistPage from './base'
 
export class ArtistPage extends Component {
  componentDidMount() {
    const { getArtist, match, token } = this.props
    if (token) {
      getArtist(match.params.artistId, token)
    }
  }

  componentDidUpdate(prevProps) {
    const { getArtist, match, token } = this.props
    if (prevProps.token !== token) {
      getArtist(match.params.artistId, token)
    }
    if (token && prevProps.match !== match) {
      getArtist(match.params.artistId, token)
    }
  }

  render() {
    return <StatelessArtistPage />
  }
}

ArtistPage.propTypes = {
  token: PropTypes.string,
  loading: PropTypes.bool,
  getArtist: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  token: state.AuthReducer.token,
  loading: state.ArtistReducer.loading
})

export default connect(
  mapStateToProps,
  { getArtist }
)(ArtistPage)