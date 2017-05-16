import React from 'react';
import { connect } from 'react-redux';
import Authentication from '../components/Authentication';
import { withRouter } from 'react-router';
import { getAuthToken, deleteAuthToken } from '../modules';

const mapStateToProps = (state) => {
  return {
    authenticated: true, // state.global.toJS().authenticated,
    user: null //state.global.toJS().user
  };
};

export default function (ComposedComponent) {
  return connect(mapStateToProps)(withRouter(Authentication(ComposedComponent)));
}
