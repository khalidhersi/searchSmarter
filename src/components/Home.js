import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/Home.css';
import avatar from '../assets/images/logo-full.png';

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <section id="home" className="home">
      <div className="container">
        <div className="home__intro" data-aos="fade-right">
          <h2>Hi, I'm Ashutosh Hathidara</h2>
          <p>A passionate developer who loves to create innovative web applications and learn new technologies.</p>
        </div>
        <div className="home__image" data-aos="fade-left">
          <img src={avatar} alt="Profile" />
        </div>
      </div>
    </section>
  );
};

export default Home;
