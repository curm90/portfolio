import React from 'react';
import Navigation from './components/Navigation/Navigation';
import Header from './components/Header';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Footer from './components/Footer/Footer';

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
