import React from 'react';
import ReactDOM from 'react-dom';
import Boilerplate from './Boilerplate/Boilerplate';
import './index.scss';

ReactDOM.render(<Boilerplate />, document.getElementById('root'));

if (module.hot) {
  module.hot.accept();
}
