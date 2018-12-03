import React, { Fragment } from 'react'
import { ThemeProvider } from 'styled-components'

import theme from './config/theme'
import Routers from './Routers'
import GlobalStyles from './GlobalStyles'

const App = () => (
  <ThemeProvider theme={ theme }>
    <Fragment>
      <Routers />
      <GlobalStyles /> 
    </Fragment>
  </ThemeProvider>
)

export default App;
