import React from 'react';
import PropTypes from 'prop-types';

const Title = ({ title = 'Title atom' }) => {
  return <h1>{title}</h1>;
};

Title.propTypes = {
  title: PropTypes.string,
};

Title.defaultProps = {
  title: 'Title atom',
};

export default Title;
