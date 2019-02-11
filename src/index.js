import React, { Component } from 'react';
import ReactDOM, { render }  from 'react-dom'
import { AppContainer } from 'react-hot-loader';
import 'babel-polyfill';
import App from './App'

const MOUNT_NODE = document.getElementById('app')

if (process.env.NODE_ENV === 'development') {
  const renderDOM = Component => {
    render(
      <AppContainer>
        <Component />
      </AppContainer>,
      MOUNT_NODE
    )
  }

  renderDOM(App)

  if (module.hot) {   //热更新
    module.hot.accept('./App', () => {
      const App = require('./App').default;
      renderDOM(App)
    })
  }
}

if(process.env.NODE_ENV === 'production'){
  ReactDOM.render(<App />, MOUNT_NODE)
} 