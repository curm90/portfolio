import React from 'react';
import Navigation from './components/Navigation';
import SideDrawer from './components/SideDrawer';
import Backdrop from './components/Backdrop';

function App() {
  return (
    <div className='App'>
      <Navigation />
      <SideDrawer />
      <Backdrop />
    </div>
  );
}

export default App;
