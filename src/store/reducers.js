import { combineReducers } from 'redux'
import locationReducer from './location'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
// import { reduxReactRouter, routerStateReducer, ReduxRouter } from 'redux-react-router';

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    routing: routerReducer,
    location: locationReducer,
    ...asyncReducers
  })
}

export const injectReducer = (store, { key, reducer }) => {
  if (Object.hasOwnProperty.call(store.asyncReducers, key)) return

  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default makeRootReducer
