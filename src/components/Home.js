import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/Home.css';
import avatar from '../assets/images/avatar.png';

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <section id="home" className="home">
      <div className="container">
        <div className="home__intro" data-aos="fade-right">
          <h2>Welcome to SearchSmarter</h2>
          <p className="home__intro--text">Where our mission is to elevate your brand through expert paid search and PPC support. 
          My name is Mouhamad El-Masri, and I am the founder of SearchSmarter. With a passion for digital marketing and over four years of experience i
</p>
        </div>
        {/* <div className="home__image" data-aos="fade-left">
          <img src={avatar} alt="Profile" />
        </div> */}
      </div>
    </section>
  );
};

export default Home;
