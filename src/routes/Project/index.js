import { injectReducer } from '../../store/reducers'
export default (store) => ({
  path: 'project/:projectid',
  /*  Async getComponent is only invoked when route matches   */
  getComponent(nextState, cb) {
    console.log(nextState,"nextState")
    console.log(cb,"cb")
debugger
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const Project = require('./containers/ProjectContainer').default
      const projectReducer = require('./modules/project').default
      /*  Add the reducer to the store on key 'project'  */
      injectReducer(store, { key: 'project', reducer: projectReducer })
console.log(cb(null, Project))
debugger
      /*  Return getComponent   */
      cb(null, Project)

      /* Webpack named bundle   */
    }, 'project')
  }
})
