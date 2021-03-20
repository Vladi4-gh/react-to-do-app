import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './store/configureStore';
import App from './components/App';
import './styles/styles.scss';

const app = (
  <Provider store={store}>
    <App />
  </Provider>
);

render(app, document.querySelector('#root'));
