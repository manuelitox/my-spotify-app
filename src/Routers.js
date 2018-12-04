import React, { Fragment } from 'react'
import { Provider } from 'react-redux'
import { Router, Route, Switch } from 'react-router-dom'

import store from 'store'
import history from './history'
import Footer from 'components/generic/Footer/'
import SearchPage from 'components/SearchPage/'

const Routers = () => (
  <Provider store={ store }>
    <Router history={ history }>      
      <Fragment>
        <main>
          <Switch>
            <Route exact path="/" component={ SearchPage } />
          </Switch>
        </main>
        <Route path="/" component={ Footer } />
      </Fragment>
    </Router>
  </Provider>   
)

export default Routers