import React from 'react';
import ReactDOM from 'react-dom';
import LinkContainer from './components/LinkContainer/LinkContainer';
import MainLayout from './components/MainLayout/MainLayout';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <MainLayout>
      <LinkContainer />
    </MainLayout>
  </React.StrictMode>,
  document.getElementById('root')
);

