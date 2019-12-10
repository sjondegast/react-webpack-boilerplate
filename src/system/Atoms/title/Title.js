import React from 'react';
import PropTypes from 'prop-types';
import styles from './title.module.scss';

const Title = ({ title = 'Title atom' }) => (
  <h1 className={styles.title}>{title}</h1>
);

Title.propTypes = {
  title: PropTypes.string,
};

Title.defaultProps = {
  title: 'Title atom',
};

export default Title;
