import * as actionTypes from './actions';
import reducerFactory from '../../../utils/reducerfactory';

const initState = {
  loggedIn: true,
  user: {
    first_name: 'Shen',
    last_name: 'Zhi',
    email: 'demo@devias.io',
    avatar: '/images/avatars/avatar_11.png',
    bio: 'Brain Director',
    role: 'ADMIN' // ['GUEST', 'USER', 'ADMIN']
  }
};

const handlers = [];

handlers[actionTypes.SESSION_LOGIN] = (state, action) => {
  return {
    ...initState
  }
};

handlers[actionTypes.SESSION_LOGOUT] = (state, action) => {
  return {
    ...state,
    loggedIn: false,
    user: {
      role: 'GUEST'
    }
  };
};

export default reducerFactory(initState, handlers);
