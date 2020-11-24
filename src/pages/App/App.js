//import logo from './logo.svg';
import React from 'react';

import {
  BrowserRouter as Router,
} from 'react-router-dom';

import Layout from '../../components/Layout';
import './styles.css';

function App() {

  return (
    <Router>
      <Layout/>
    </Router>
  );
}

export default App;
