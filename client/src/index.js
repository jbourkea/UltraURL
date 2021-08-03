import React from 'react';
import ReactDOM from 'react-dom';
import LinkContainer from './components/LinkContainer/LinkContainer';
import MainLayout from './components/MainLayout/MainLayout';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './index.css';
import RedirectContainer from './components/RedirectContainer/RedirectContainer';

ReactDOM.render(
  <React.StrictMode>
    <MainLayout>
    <Router>
        <Route exact path='/' component={LinkContainer} />
        <Route path='/:redirectid' component={RedirectContainer} />

      </Router>
    </MainLayout>
  </React.StrictMode>,
  document.getElementById('root')
);

