
const initialState = {
  socket: null,
  config: {},
  collectDB: '',
};

const Reducer = (state = initialState, action) => {
  console.log("MonogoDB Reducer", [state, action])
  switch (action.type) {
//    case actionTypes.SESSION_LOGIN: {
//      return {
//        ...initialState
//      };
//    }
//
//    case actionTypes.SESSION_LOGOUT: {
//      return {
//        ...state,
//        loggedIn: false,
//        user: {
//          role: 'GUEST'
//        }
//      };
//    }

    default: {
      return state;
    }
  }
};

export default Reducer;
