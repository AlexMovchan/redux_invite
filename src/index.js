import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import Main from './containers/Main/Main'
import 'bootstrap/dist/css/bootstrap.min.css';

const store = configureStore();

render(
    <Provider store={store}>
      <Main />
    </Provider>,
    document.getElementById('root')
  )