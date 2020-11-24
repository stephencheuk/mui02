//import { combineReducers } from 'redux';

import { store } from '../../../store/configureStore';

import sessionReducer from './Session';
import App from './App';
import i18n from './i18n';

const func = (STORE) => {

  STORE = STORE || store;

  STORE.injectReducer('sessionReducer', sessionReducer);
  STORE.injectReducer('App', App);
  STORE.injectReducer('i18n', i18n);
}

export default func;
