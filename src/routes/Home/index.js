import { injectReducer } from '../../store/reducers'
import {LoadProjects} from './modules/home.js'
export default (store) => ({
  path: 'home',
  /*  Async getComponent is only invoked when route matches   */
  getComponent(nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const Home = require('./containers/HomeContainer').default
      const homeReducer = require('./modules/home').default

      /*  Add the reducer to the store on key 'project'  */
      injectReducer(store, { key: 'home', reducer: homeReducer })
      store.dispatch(LoadProjects())
      /*  Return getComponent   */
      cb(null, Home)

      /* Webpack named bundle   */
    }, 'home')
  }
})
