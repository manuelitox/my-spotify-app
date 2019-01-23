import React, { Component } from 'react'
import PropTypes from 'prop-types'
import onClickOutside from 'react-onclickoutside'
import { connect } from 'react-redux'

import { artistsSearch } from 'actions/'

import SearchForm from './base'

export class SearchFormContainer extends Component {
  state = {
    isOpen: false
  }

  handleClickOutside = evt => {
    this.setState({ isOpen: false })
  }

  openSuggestions = () => {
    const { data } = this.props
    if ( data.length >= 1 ) this.setState({ isOpen: true })
  }

  closeSuggestions = () => this.setState({ isOpen: false })

  onChange = e => {
    const { artistsSearch } = this.props
    this.setState({ isOpen: true })
    artistsSearch(e.target.value)
  }

  render () {
    return (
      <SearchForm 
        onChange={ this.onChange } 
        placeholder={ this.props.placeholder }
        openSuggestions={ this.openSuggestions } 
        closeSuggestions={ this.closeSuggestions }
        { ...this.state }
        { ...this.props } />
    )
  }
}

SearchFormContainer.defaultProps = {
  placeholder: 'search an artist...'
}

SearchFormContainer.propTypes = {
  placeholder: PropTypes.string,
  artistsSearch: PropTypes.func.isRequired
}

const OnClickWrapperSearchFormContainer = onClickOutside(SearchFormContainer)

const mapStateToProps = (state) => ({
  data: state.SearchReducer.data,
  loading : state.SearchReducer.loading
})

export default connect(
  mapStateToProps,
  { artistsSearch }
)(OnClickWrapperSearchFormContainer)