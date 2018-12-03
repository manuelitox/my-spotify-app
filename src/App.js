import React, { Fragment } from 'react'
import { Provider } from 'react-redux'
import { Router, Route, Switch } from 'react-router-dom'

import logo from './logo.svg';
import history from './history'
import StyledApp from './StyledApp'
import store from './store'

const App = () => (
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
                render={ () => (
                  <StyledApp>
                    <header className="App-header">
                      <img src={logo} className="App-logo" alt="logo" />
                      <p>
                        Edit <code>src/App.js</code> and save to reload.
                      </p>
                      <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Learn React
                      </a>
                    </header>
                  </StyledApp>
                )} />
            </Switch>
          </main>
      </Fragment>
    </Router>
  </Provider>
)

export default App;
