import React from 'react';
import Navigation from './components/Navigation';
import Header from './components/Header';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <div className='app'>
      <Navigation />
      <Header />
      <About />
    </div>
  );
}

export default App;
