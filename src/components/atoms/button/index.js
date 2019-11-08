import React from 'react';

const Button = ({
  type = 'button',
  handleClick,
  text = 'button text',
}) => {
  return (
    /* eslint-disable react/button-has-type */
    <button type={type} onClick={handleClick}>
      {text}
    </button>
    /* eslint-enable react/button-has-type */
  );
};

export default Button;
