import { injectReducer } from '../../store/reducers'
export default (store) => ({
  path: 'employee',
  /*  Async getComponent is only invoked when route matches   */
  getComponent(nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const Employee = require('./container/EmployeeContainer').default
      const employeeReducer = require('./modules/employee').default

      /*  Add the reducer to the store on key 'project'  */
      injectReducer(store, { key: 'employee', reducer: employeeReducer })

      /*  Return getComponent   */
      cb(null, Employee)

      /* Webpack named bundle   */
    }, 'employee')
  }
})
