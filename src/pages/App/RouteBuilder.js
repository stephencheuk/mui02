import React, { lazy } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch
//BrowserRouter as history
} from 'react-router-dom';

//import Dashboard from '../dashboard';

const RouteBuilder = ({ name, path, link, component, ...rest }) => {
  //var component = lazy(() => 
  //  import(`${compPath}/reducer`).then(module => {
  //    store.injectReducer(`${name}`, module.default);
  //    return import(`${compPath}`).then(module => module);
  //  })
  //);

//  var component = lazy(() => import(`${compPath}`));
//    import(`${path}/reducer`).then(module => {
//      store.injectReducer(`${name}`, module.default);
//      import(`${path}`).then(module => module)
//    })
//  );
// RouteBuilder Route path  /dashboard component /dashboard reducer /dashboard/reducer
  console.log("RouteBuilder Route path ", path, "link", `${link}`, "reducer", `${path}/reducer`);
//
//  if(root){
//    path = [path, '/'];
//  }
//
//  if(path.indexOf('Dash') >= 0){
//    console.log("Route exact path='/dashboard' component={Dashboard} />");
//    return <Route exact path='/dashboard' component={Dashboard} />
//  }
//
//  if(exact){
    return <Route { ...rest } exact path={ path } component={ component } />
//  }else{
//    return <Route { ...rest } exact path={ path } component={ component } />
//  }

//  return null;
}

export default RouteBuilder;