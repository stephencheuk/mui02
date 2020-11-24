import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

// The initial reducers for 'createStore' use
import initReducers from './initReducers';

import AppReducer from '../pages/App/reducer';

// App Component reducer
//import rootReducer, { App as appReducer, i18n as i18nReducer } from '../reducers';
//import * as initReducer from '../reducers';

const staticReducers = {};

const initialState = {};

let store = {};

export default function configureStore(state = initialState) {

  const sagaMiddleware = createSagaMiddleware();
  const composeEnhancers =  typeof window === 'object' && window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] ? 
                            window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__']({ }) : compose;

  store = createStore(
    initReducers,
    state,
    composeEnhancers(
      applyMiddleware(
        sagaMiddleware
      )
    )
  );

  // for memorize imported reducer
  store.asyncReducers = {};

  // dynamic inject new reducer
  store.injectReducer = (key, asyncReducer) => {
    store.asyncReducers[key] = asyncReducer;
    // replace new reducer from createReducer ( combineReducer action )
    store.replaceReducer(createReducer(store.asyncReducers));
  };

  // load reducer
  AppReducer(store);

  // instead run reducer
  //sagaMiddleware.run(rootSaga);

  // the first inject app reducer
  //store.injectReducer('app', appReducer);
  //store.injectReducer('i18n', i18nReducer);
  //store.injectReducer('session', rootReducer);

//  Object.entries(initReducer).forEach(([name, exported]) => store.injectReducer(name, exported));

//  console.log('store is ready', initReducer);

  return store;
};

// make store exportable
export {
  store
}

// combine reducer
function createReducer(asyncReducers = {}) {
  return combineReducers({
    ...staticReducers,
    ...asyncReducers,
  });
}
