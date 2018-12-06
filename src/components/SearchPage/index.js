import React, { Fragment } from 'react'

import SearchFormContainer from 'components/generic/SearchForm/container'
import StyledSearchPage from './styles'
import StyledWaveSearchIcon from './stylesWaveIcon'
import { ReactComponent as HeadsetIcon } from 'svgs/headset.svg'

const SearchPage = () => (
  <Fragment>
    <StyledSearchPage>
      <HeadsetIcon />
      <SearchFormContainer />
    </StyledSearchPage>
    <StyledWaveSearchIcon />
  </Fragment>
)

export default SearchPage