import React from 'react';
import ReactDOM from 'react-dom';

import App from './product/pages/Boilerplate';

import './index.scss';
// require('./index.scss');

ReactDOM.render(<App />, document.getElementById('root'));

if (module.hot) {
  module.hot.accept();
}
