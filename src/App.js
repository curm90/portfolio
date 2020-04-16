import React from 'react';
import Navigation from './components/Navigation';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <div className='app'>
      <Navigation />
      <Header />
      <About />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
