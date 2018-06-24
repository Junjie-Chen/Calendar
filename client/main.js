import React from 'react';
import {Navbar} from './components';
import Routes from './routes';

const Main = () => (
  <div className="content">
    <Navbar />

    <main>
      <Routes />
    </main>
  </div>
);

export default Main;
