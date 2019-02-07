import React, { Component } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'

import StyledTrack from './styles'
import { ReactComponent as PlayIcon } from 'svgs/play.svg'
import { ReactComponent as PauseIcon } from 'svgs/pause.svg'

class Track extends Component {
  constructor (props) {
    super(props)
    this.state = ({ play: false })
    const { previewUrl } = props
    this.audio = new Audio(previewUrl)
  }

  togglePlay = () => {
    const { play } = this.state
    this.setState({ play: !play })
    !play ? this.audio.play() : this.audio.pause()
  }

  render () {
    const { play } = this.state
    const { name, duration, releaseDate, isPopUpVersion, songIsAvailable } = this.props
    return (
      <StyledTrack onClick={ this.togglePlay } isPopUpVersion={ isPopUpVersion }>
        { play ? <PauseIcon /> : <PlayIcon /> }
        <div>
          <h4>{ name }</h4>
          { isPopUpVersion ? <p>{ moment(duration).format('m:ss') } min { songIsAvailable && '- listen to the preview' }</p> : <p>Release date: { releaseDate }</p> }          
        </div>
      </StyledTrack>
    )
  }
}

Track.propTypes = {
  name: PropTypes.string.isRequired,
  duration: PropTypes.number,
  previewUrl: PropTypes.string,
  releaseDate: PropTypes.string,
  isPopUpVersion: PropTypes.bool,
  songIsAvailable: PropTypes.bool
}

export default Track