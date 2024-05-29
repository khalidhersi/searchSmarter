import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Clientele from './components/Clientele';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <Header />
      <main>
        <Home />
        <Home />
        <Home />
        <About />
        <Services />
        <Clientele />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
