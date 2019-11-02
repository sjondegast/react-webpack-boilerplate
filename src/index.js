import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

const title = 'react-webpack-boilerplate';

ReactDOM.render(
  <App title={title} />,
  document.getElementById('root'),
);

module.hot.accept();
