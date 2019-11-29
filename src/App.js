import React from 'react';
import { BrowserRouter  } from "react-router-dom";
import './App.css';

import Dashboard from './components/Dashboard/Dashboard';
import AppDrawer from './components/Drawer/AppDrawer';

function App() {
  return (

    <BrowserRouter>
      <div className="App">
        <AppDrawer/>
        <Dashboard/>
      </div>
    </BrowserRouter>

  );
}

export default App;
