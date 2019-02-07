import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import WithContainer from 'components/generic/Container/'
import getImage from 'lib/get-image'

export const BannerWrapper = ({ info }) => (
  <Fragment>
    <img alt={ info.name } src={ getImage(info.images) } height="120" width="120" />
    <div>
      <h1>{ info.name }</h1>
      <ul>
        { info.genres.map( (genre, index) => {
          return <li key={ index }>{ genre } { index + 1 < info.genres.length ? <span>-</span> : null }</li>
        }) }
      </ul>
    </div>
  </Fragment>
)

BannerWrapper.propTypes = {
  info: PropTypes.shape({
    name: PropTypes.string,
    images: PropTypes.array,
    genres: PropTypes.array
  }).isRequired
}

const mapStateToProps = (state) => ({
  info: state.ArtistReducer.info
})

export default connect(
  mapStateToProps,
  {}
)(WithContainer(BannerWrapper))