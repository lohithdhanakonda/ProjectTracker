import React, { PropTypes } from 'react';

function Unauthenticated({ children }) {
  return (
    <div className="unauthenticated-layout">
      {children}
    </div>
  );
}

Unauthenticated.propTypes = {
  children: PropTypes.element
};

export default Unauthenticated;
