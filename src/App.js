import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import HomeNew from './components/HomeNew';
import About from './components/About';
import AboutNew from './components/AboutNew';
import Services from './components/Services';
import Clientele from './components/Clientele';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <Header />
      <main className='content'>
        <Home />
        <About />        
        <Services />        
        <Contact />
        <Clientele />
        <HomeNew />
        <AboutNew />
      </main>
      <Footer />
    </div>
  );
};

export default App;
