import React from 'react'
import ReactDOM from 'react-dom'
import { combineReducers, applyMiddleware } from 'redux';
import createStore from './store/createStore'
import AppContainer from './containers/AppContainer'
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer,routerMiddleware } from 'react-router-redux'
// ========================================================
// Store Instantiation
// ========================================================
const initialState = window.___INITIAL_STATE__
const middleware = routerMiddleware(browserHistory)
const store = createStore(initialState,applyMiddleware(middleware))
// ========================================================
// Render Setup
// ========================================================
const MOUNT_NODE = document.getElementById('root')

let render = (routerKey = null) => {
  const routes = require('./routes/index').default(store)
  const history = syncHistoryWithStore(browserHistory, store)
  ReactDOM.render(
    <AppContainer store={store} routes={routes} history={history} routerKey={routerKey}/>,
    MOUNT_NODE
  )
}

// This code is excluded from production bundle
if (__DEV__) {
  if (module.hot) {
    // Development render functions
    const renderApp = render
    const renderError = (error) => {
      const RedBox = require('redbox-react').default

      ReactDOM.render(<RedBox error={error} />, MOUNT_NODE)
    }

    // Wrap render in try/catch
    render = () => {
      try {
        renderApp()
      } catch (error) {
        console.error(error)
        renderError(error)
      }
    }

    // Setup hot module replacement
    module.hot.accept('./routes/index', () =>
      setImmediate(() => {
        ReactDOM.unmountComponentAtNode(MOUNT_NODE)
        render()
      })
    )
  }
}

// ========================================================
// Go!
// ========================================================
render()
