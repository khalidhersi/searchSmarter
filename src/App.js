import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Clientele from './components/Clientele';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Avatar from './components/Avatar';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <Header />
      <main className='main'>
        <div className="content">
          {/* <Home />
          <Home />
          <Home />
          <About />
          
          
          <Contact /> */}
          <section id="home"><Home /></section>
          <section id="about"><About /></section>
          <section id="Services"> <Services /></section>
          <section id="Clientele"><Clientele /></section>
          <section id="contact"><Contact /></section>
        </div>
        <div className="avatar">
          <Avatar />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
