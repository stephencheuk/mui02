import { combineReducers } from 'redux';

const rootReducer = (state = {}, action) => {
  return state;
};

const initReducer = combineReducers({
    root: rootReducer,
});

export default initReducer;
