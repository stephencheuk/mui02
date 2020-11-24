import React, { useState } from 'react';
import classNames from "classnames";
import { ThemeProvider, withStyles, createMuiTheme } from '@material-ui/core/styles';

import {
  Link,
} from 'react-router-dom';

import {
  Menu as MenuIcon,
  Eco as EcoIcon,
} from '@material-ui/icons';

import {
  CssBaseline,
  SwipeableDrawer,
  Drawer,
} from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux'

//import { createBrowserHistory } from 'history';

//import SwipeableDrawer from './SwipeableDrawer';

import AppBar from './AppBar';

import './styles.css';
import './Drawer.css';

const Layout = ({ children, classes, menu, theme_config, ...props }) => {

  const t = useSelector((state) => state.i18n ? state.i18n.translate : e => e);

  let theme = theme_config || {};

  //theme = { ...theme,  ...{
  //                          overrides: {
  //                            MuiDrawer: {
  //                              paperAnchorLeft: {
  //                                marginTop:48
  //                              }
  //                            }
  //                          }
  //                        }
  //};

  //console.log('theme', theme);

  theme = createMuiTheme(theme || {});

  //console.log('createMuiTheme theme', theme);

  const [OpenRight, setOpenRight] = useState(false);
  const [OpenLeft, setOpenLeft] = useState(false);

//  console.log('createBrowserHistory', createBrowserHistory());

  //const toggleDrawer = (anchor, open) => (event) => {
  //  if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
  //    return;
  //  }
  //
  //  setState({ ...state, [anchor]: open });
  //};

  return (
      <ThemeProvider theme={ theme }>

        <CssBaseline />

        <AppBar>
        {
          () => { return {
            menu : (
                          <div
                             style={{ cursor: "pointer", height: "100%", padding: 12 }}
                            onClick={() => { console.log("left menu clicked"); setOpenLeft(!OpenLeft); setOpenRight(false) } }
                          >
                            <MenuIcon />
                          </div>
                      ),
                       /* <div><div><EcoIcon style={{color:'green'}} />LOGO HERE</div></div> */
            logo : (
                        <div><img className='LogoImg' src="/logo200.png" /></div>
                      ),
            title : (
                        <div> { `OpenLeft:${OpenLeft};OpenRight:${OpenRight}` }</div>
                      ),
            right : (
                          <div
                            style={{ cursor: "pointer", height: "100%", padding: 12 }}
                            onClick={() => { console.log("right menu clicked"); setOpenLeft(false); setOpenRight(!OpenRight) } }
                          >
                            <MenuIcon />
                          </div>
                      ),
          }}
        }
        </AppBar>

        <div className="Container">
          { children }
        </div>

        {
          !OpenRight &&
          <SwipeableDrawer
            anchor='left'
            swipeAreaWidth={30}
            open={ OpenLeft }
            onClose={()=>setOpenLeft(false)}
            onOpen={()=>setOpenLeft(true)}
            variant={'persistent'}
          >
            <div className="Drawer">
              <div className='DrawerAvatar flexcm'><div className='Avatar flexcm'>123</div></div>
              <ul className='DrawerItems'>
                <li className="flex mid"><Link to="/">{ t('Home') }</Link></li>
                <li className="flex mid"><Link to="/Dashboard">{ t('Dashboard') }</Link></li>
              </ul>
            </div>
          </SwipeableDrawer>

        }

        {
          !OpenLeft &&
          <SwipeableDrawer
            anchor='right'
            open={ OpenRight }
            onClose={()=>setOpenRight(false)}
            onOpen={()=>setOpenRight(true)}
          >
            <div className="Drawer">
              <div className='DrawerAvatar flexcm'><div className='Avatar flexcm'>123</div></div>
              <ul className='DrawerItems'>
                <li>A</li>
                <li>B</li>
              </ul>
            </div>
          </SwipeableDrawer>

        }

      </ThemeProvider>
  );

//  return (
//      <ThemeProvider theme={ theme }>
//        <CssBaseline />
//
//        <div className={classNames(classes.container)}>
//        { children }
//        </div>
//
//      </ThemeProvider>
//  );
}

export default Layout;
