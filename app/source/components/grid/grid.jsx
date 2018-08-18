import React from 'react';
import PropTypes from 'prop-types';

const Grid = ({ children }) => <div className="grid">{children}</div>;

Grid.propTypes = {
  children: PropTypes.node
};

export default Grid;
