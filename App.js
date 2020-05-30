import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import App from './src'

export default ()  => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}
