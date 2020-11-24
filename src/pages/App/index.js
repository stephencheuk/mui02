//import logo from './logo.svg';
import React from 'react';

import {
  Route,
  Switch,
} from 'react-router-dom';

import {
  BrowserRouter as Router,
} from 'react-router-dom';

import Layout from '../../components/Layout';
import RouteBuilder from './RouteBuilder';

import menu from './menu';

import './styles.css';

function App() {

  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path='/'>
            <div>Inline Page</div>
          </Route>
          {
            menu.map((o, i) => {
              return <RouteBuilder key={i} { ...o } />
            })
          }
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
