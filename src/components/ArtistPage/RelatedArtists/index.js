import React, { Component } from 'react'
import PropTypes from 'prop-types' 
import { connect } from 'react-redux'

import theme from 'config/theme'
import Title from 'components/ArtistPage/Title/'
import Button from 'components/generic/Button/'
import Artist from './Artist/'
import PopUpRelatedArtists from './PopUp/'
import StyledRelatedArtists from './styles'
import StyledWrapperRelatedArtists from './styles-wrapper'
import StyledContainerRelatedArtists from './styles-container'
import getImage from 'lib/get-image'

export class RelatedArtists extends Component {
  state = { isOpen: false }
  
  togglePopUp = () => this.setState({ isOpen: !this.state.isOpen })

  render () {
    const { relatedArtists } = this.props 
    return (
      <StyledRelatedArtists>
        <StyledContainerRelatedArtists>
          <Title color={ theme.blueDark }>Related Artists</Title>
          <StyledWrapperRelatedArtists>
            { relatedArtists && relatedArtists.artists && relatedArtists.artists.map((artist, index) => {
              if ( index > 8 ) return null
              return <Artist key={ index } id={ artist.id } photo={ getImage(artist.images, 200) } name={ artist.name } />
            }) }  
          </StyledWrapperRelatedArtists>
          <Button 
            bg={ theme.blueDark }
            textColor="white"
            onClick={ this.togglePopUp }>
            view related artists
          </Button>
          <PopUpRelatedArtists isOpen={ this.state.isOpen } togglePopUp={ this.togglePopUp } />
        </StyledContainerRelatedArtists>
      </StyledRelatedArtists>
    )
  }
}

RelatedArtists.propTypes = {
  relatedArtists: PropTypes.shape({
    artists: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
        images: PropTypes.array      
      })
    )
  }).isRequired
}

const mapStateToProps = (state) => ({
  relatedArtists: state.ArtistReducer.relatedArtists
})

export default connect(
  mapStateToProps,
  {}
)(RelatedArtists)