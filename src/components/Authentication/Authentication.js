import React from 'react';
import {browserHistory} from 'react-router';

export default function (ComposedComponent) {
  debugger
  class Authentication extends React.Component {
    componentWillMount() {
      debugger
      if (!this.props.authenticated &&
          !this.props.router.isActive('/login')) {
        browserHistory.push('/login');
      }
    }

    componentWillUpdate(nextProps) {
      if (!nextProps.authenticated &&
          !this.props.router.isActive('/login')) {
        browserHistory.push('/login');
      }
    }

    render() {
      debugger
      
      return <ComposedComponent {...this.props} />;
    }
  }

  Authentication.propTypes = {
    router: React.PropTypes.object,
    authenticated: React.PropTypes.bool
  };

  return Authentication;
}
