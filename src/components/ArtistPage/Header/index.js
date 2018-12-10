import React from 'react'

import StyledHeader from './styles'
import SearchFormContainer from 'components/generic/SearchForm/container'
import { ReactComponent as HeadsetIcon } from 'svgs/headset.svg'

const Header = () => (
  <StyledHeader>
    <HeadsetIcon height="45" width="55" viewBox="0 0 70 55"/>
    <SearchFormContainer placeholder="search another artist..." />
  </StyledHeader>
)

export default Header