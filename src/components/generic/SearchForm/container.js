import React, { Component } from 'react'
import PropTypes from 'prop-types'
import onClickOutside from 'react-onclickoutside'

import SearchForm from './base'

export class SearchFormContainer extends Component {
  state = {
    isOpen: false,
    loading: false,
    suggestions: []
  }

  handleClickOutside = evt => {
    this.setState({ isOpen: false })
  }

  openSuggestions = () => {
    const { suggestions } = this.state
    if ( suggestions.length >= 1 ) this.setState({ isOpen: true })
  }

  closeSuggestions = () => this.setState({ isOpen: false })

  onChange = e => {
    console.log(e.target.value)
    this.setState({ 
      isOpen: true,
      loading: true 
    })
    setTimeout(() => {
      this.setState({ 
        suggestions: [
          { id: '1', name: 'Alicia Keys' },
          { id: '2', name: 'Queen' },
          { id: '3', name: 'John Mayer' },
          { id: '4', name: 'ACDC' },
          { id: '5', name: 'Blink 182' },
          { id: '6', name: 'Bon Jovi' },
          { id: '7', name: '2pac' }          
        ],
        loading: false
    })
    }, 1000);
  }

  render () {
    return (
      <SearchForm 
        onChange={ this.onChange } 
        placeholder={ this.props.placeholder }
        openSuggestions={ this.openSuggestions } 
        closeSuggestions={ this.closeSuggestions }
        { ...this.state } />
    )
  }
}

SearchFormContainer.defaultProps = {
  placeholder: 'search an artist...'
}

SearchFormContainer.propTypes = {
  placeholder: PropTypes.string
}

export default onClickOutside(SearchFormContainer)