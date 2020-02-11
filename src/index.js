import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import thunk from 'redux-thunk';
import firebase from 'firebase';
import { compose, createStore, applyMiddleware, combineReducers } from 'redux'
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase'



ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
