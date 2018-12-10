import React, { Fragment } from 'react'
import { Provider } from 'react-redux'
import { Router, Route, Switch } from 'react-router-dom'

import store from 'store'
import history from './history'
import Footer from 'components/generic/Footer/'
import SearchPage from 'components/SearchPage/'
import ArtistPage from 'components/ArtistPage'

const Routers = () => (
  <Provider store={ store }>
    <Router history={ history }>      
      <Fragment>
        <main>
          <Switch>
            <Route exact path="/" component={ SearchPage } />
            <Route exact path="/artist/:artistName/:artistId" component={ ArtistPage } />
          </Switch>
        </main>
        <Route path="/" component={ Footer } />
      </Fragment>
    </Router>
  </Provider>   
)

export default Routers