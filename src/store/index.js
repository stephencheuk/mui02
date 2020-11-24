import React from 'react';
import { Provider as StoreProvider } from 'react-redux';

import configureStore from './configureStore';

const store = configureStore();

const Provider = ({ children }) => {
  return (
    <StoreProvider store={store}>
    { children }
    </StoreProvider>
  )
}

export default Provider