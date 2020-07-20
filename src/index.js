import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import storeConfig from './flux/store/';
import { Provider } from 'react-redux';

import './stylesheets/main.sass';

const store = storeConfig();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
