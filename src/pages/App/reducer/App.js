import reducerFactory from '../../../utils/reducerfactory';

const initState = {
  Name : 'My todo app with Saga Redux',
  API : 'http://192.168.2.81:4001',
  width : window.innerWidth,
  height: window.innerHeight,
  Pref: {},
};

if(initState.width >= 1200){      initState.size = 'xl';
}else if(initState.width >= 992){ initState.size = 'lg';
}else if(initState.width >= 768){ initState.size = 'md';
}else if(initState.width >= 576){ initState.size = 'sm';
}else if(initState.width < 576){  initState.size = 'xs';
}

const handlers = [];

handlers['SET_TITLE'] = (state, action) => {
  let { Name }  = state;
  Name = action.payload.Title;
  return {...state, Name };
};

handlers['UPDATE_RESIZE'] = (state, action) => {
  let newState = JSON.parse(JSON.stringify(state));
  newState.width = action.payload[0];
  newState.height = action.payload[1];
  if(newState.width >= 1200){      newState.size = 'xl';
  }else if(newState.width >= 992){ newState.size = 'lg';
  }else if(newState.width >= 768){ newState.size = 'md';
  }else if(newState.width >= 576){ newState.size = 'sm';
  }else if(newState.width < 576){  newState.size = 'xs';
  }
  return newState;
};

handlers['SET_SIZE'] = (state, action) => {
  let newState = JSON.parse(JSON.stringify(state));
  newState.size = action.payload.size;
  if(newState.size === 'xl'){      newState.width = 1200;
  }else if(newState.size === 'lg'){ newState.width = 992;
  }else if(newState.size === 'md'){ newState.width = 768;
  }else if(newState.size === 'sm'){ newState.width = 576;
  }else if(newState.size === 'xs'){ newState.width = 378;
  }
  return newState;
};

handlers['SET_USER_PREF'] = (state, action) => {
  let newState = JSON.parse(JSON.stringify(state));

  if(action.payload.appname){
    newState.Pref[action.payload.appname] = action.payload.pref;
  }else{
    newState.Pref = action.payload.pref;
  }

  return newState;
};

export default reducerFactory(initState, handlers);
