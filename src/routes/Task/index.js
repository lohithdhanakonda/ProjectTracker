import { injectReducer } from '../../store/reducers'
export default (store) => ({
  path: 'maintask',
  /*  Async getComponent is only invoked when route matches   */
  getComponent(nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const Task = require('./container/TaskContainer').default
      const taskReducer = require('./modules/maintask').default

      /*  Add the reducer to the store on key 'project'  */
      injectReducer(store, { key: 'maintask', reducer: taskReducer })

      /*  Return getComponent   */
      cb(null, Task)

      /* Webpack named bundle   */
    }, 'maintask')
  }
})
