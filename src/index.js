import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.css";
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import {store} from  './redux/store'
import {ReactReduxFirebaseProvider} from 'react-redux-firebase'
import  {rrfProps} from './redux/store'
import {Authisloaded} from './spinner/authspinner'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
    <BrowserRouter>
    <Authisloaded>
    <App />
    </Authisloaded>
    </BrowserRouter>
    </ReactReduxFirebaseProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
