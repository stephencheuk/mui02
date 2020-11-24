import React, { useLayoutEffect, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'

const CSS = {
  Outer: {
    backgroundColor: 'white',
    position: 'fixed',
    top: 100,
    right: 110,
    width:100,
    height:200,
    border: '1px solid black'
  },
  div: {
    padding: 3,
    wordBreak: "break-all",
  },
  FlowBox: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: 1000,
    height: 500,
    overflow: "auto",
    backgroundColor: 'white',
    border: '1px solid black',
    zIndex: 9999,
  },
  FlowBoxMin: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: 100,
    height: 100,
    overflow: "auto",
    backgroundColor: 'white',
    border: '1px solid black',
    zIndex: 9999,
  },
  FlowBoxDisappear: {
    display: "none",
  }
};

function Debug(props) {

  const State = useSelector((state) => state);
  const [myState, setstate] = useState(State);
  const [myApp, setApp] = useState(Object.keys(myState));
  const [show, setShow] = useState(false);
  const [showMin, setMin] = useState(false);
  const [Val, setVal] = useState({});

  console.log(myState);

  const ShowVal = (AppName) => {
    console.log(AppName, myState[AppName]);
    setVal(myState[AppName]);
    setShow(true);
  };

  const Reload = (AppName) => {
    const state = useSelector((state) => state);
    console.log('Reload', state);
  };

  useEffect(() => {
  }, [Val, myApp]);

//      <div style={ show ? (showMin ? CSS.FlowBoxMin : CSS.FlowBox ) : CSS.FlowBoxDisappear }>

  return (
    <>
      <div style={CSS.Outer}>
      {
        myApp.map((App, i) => <div onClick={ () => ShowVal(App) } style={ CSS.div } key={i}>{ App }</div>)
      }
        <div onClick={ () => Reload() } style={ CSS.div }>RELOAD</div>
      </div>
      <div style={ show ? (showMin ? CSS.FlowBoxMin : CSS.FlowBox ) : CSS.FlowBoxDisappear }>
        <div onClick={ () => setMin(true) }>MIN</div>
        <div onClick={ () => setMin(false) }>MAX</div>
        { show }
        { JSON.stringify(Val, null, 2) }
      </div>
    </>
  );
}

export default Debug;

//import React, { useEffect } from 'react';
//import { useSelector } from 'react-redux'
//
////let socket = null;
////let socketChannel = null;
////let unsubscribe = null;
//
//const DebugFunc2Console = () => {
//
//  const AppState = useSelector((state) => state);
//
//  useEffect(() => {
//    window.app.state = (AppName) => {
////      if(AppName){
////        console.log(AppState.AppName);
////      }else{
////        console.log(AppState);
////      }
//      console.log('hihi');
//    }
//  }, []); // collectDB, start, limit
//
//  return null;
//}
//
//export default DebugFunc2Console;
//
////import React, { useState, useEffect } from 'react';
////import { useDispatch, useSelector } from 'react-redux'
////
////window.app = {};
////
////const setDebugFunc2Console = () => {
////
////  const state = useSelector((state) => state);
////
////  window.app.state = (AppName) => {
////    if(AppName){
////      console.log(state.AppName);
////    }else{
////      console.log(state);
////    }
////
////  }
////
////  return null;
////
////};
////
////export default setDebugFunc2Console;
////
//
//  const State = useSelector((state) => state);
//
//  console.log('App state', state);
//
//  window.app.state = (AppName) => {
//    if(AppName){
//      console.log(State.AppName);
//    }else{
//      console.log(State);
//    }
//  }