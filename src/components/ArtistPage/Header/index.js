import React from 'react'
import { Link } from 'react-router-dom'

import StyledHeader from './styles'
import SearchFormContainer from 'components/generic/SearchForm/container'
import { ReactComponent as HeadsetIcon } from 'svgs/headset.svg'

const Header = () => (
  <StyledHeader>
    <Link to="/">
      <HeadsetIcon height="45" width="55" viewBox="0 0 70 55"/>
    </Link>
    <SearchFormContainer placeholder="search another artist..." />
  </StyledHeader>
)

export default Header