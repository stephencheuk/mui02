export default function reducerFactory(initialState, handlers) {
  return function (state = initialState, action){

    //console.log("src/utils/reducerfactory.js", state, action, this);

    const handler = handlers[action.type];

    if(handler){
      return handler(state, action);
    }

    return state;
  }
}