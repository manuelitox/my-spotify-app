import React, { Fragment } from 'react'
import { Provider } from 'react-redux'
import { Router, Route, Switch } from 'react-router-dom'

import store from './store'
import history from './history'

const Routers = () => (
  <Provider store={ store }>
    <Router history={ history }>      
      <Fragment>
        <Route
          path="/"
          render={ () => <header>Header!</header> } />
          <main>
            <Switch>
              <Route 
                path="/home"
                render={ () => <button>lorem</button> } />
            </Switch>
          </main>
      </Fragment>
    </Router>
  </Provider>   
)

export default Routers