// We only need to import the modules necessary for initial render
import CoreLayout from '../layouts/CoreLayout'
import Home from './Home'
import Project from './Project'
import MainTask from './Task'
import SubTask from './SubTask'
import Employee from './Employee'
import Login from './Login'
import PageNotFound from './PageNotFound'
import Authentication from 'containers/Authentication';
import UnauthenticatedLayout from '../layouts/UnauthenticatedLayout/UnauthenticatedLayout';

/*  Note: Instead of using JSX, we recommend using react-router
    PlainRoute objects to build route definitions.   */

export const createRoutes = (store) => ({
  path: '/',
  component: CoreLayout,
  indexRoute: (Home(store)),
  childRoutes: [
    Project(store),
    MainTask(store),
    SubTask(store),
    Employee(store),
    Login(store)
  ]
})
// , {
//     path: '/',
//     component: UnauthenticatedLayout,
//     childRoutes: [
//       Login(store)
//     ]
//   })
  // ,
// ,
//   /* Page Not Found Route */
//   {
//     path: '/11',
//     component: PageNotFound
//   })

/*  Note: childRoutes can be chunked or otherwise loaded programmatically
    using getChildRoutes with the following signature:

    getChildRoutes (location, cb) {
      require.ensure([], (require) => {
        cb(null, [
          // Remove imports!
          require('./Counter').default(store)
        ])
      })
    }

    However, this is not necessary for code-splitting! It simply provides
    an API for async route definitions. Your code splitting should occur
    inside the route `getComponent` function, since it is only invoked
    when the route exists and matches.
*/

export default createRoutes
