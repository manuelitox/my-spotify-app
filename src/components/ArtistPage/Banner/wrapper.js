import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import WithContainer from 'components/generic/Container/'

const BannerWrapper = ({
  name,
  photo,
  genres
}) => (
  <Fragment>
    <img alt={ name } src={ photo } height="120" width="120" />
    <div>
      <h1>{ name }</h1>
      <ul>
        { genres.map( (genre, index) => {
          return <li key={ index }>{ genre } { index + 1 < genres.length ? <span>-</span> : null }</li>
        }) }
      </ul>
    </div>
  </Fragment>
)

BannerWrapper.defaultProps = {
  name: 'Alicia Keys',
  photo: 'https://i.scdn.co/image/05e25d030a1caa1611b1e7248d89b557d9867258',
  genres: [
    'hip pop',
    'neo soul',
    'pop',
    'r&b',
    'urban contemporary'
  ]
}

BannerWrapper.propTypes = {
  name: PropTypes.string.isRequired,
  photo: PropTypes.string,
  genres: PropTypes.array.isRequired
}

export default WithContainer(BannerWrapper)