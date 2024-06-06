import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/Home.css';
import Avatar from '../components/Avatar';
import avatar1 from '../assets/images/avatar-1.png';

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <section id="home" className="home">
      <div className="container">
        <div className="home__intro" data-aos="fade-right">
          <h2>Welcome to SearchSmarter</h2>
          <p className="home__intro--text">Welcome to SearchSmarter, where our mission is to elevate your brand through expert paid search and PPC support.</p>
          <p className="home__intro--text">My name is Mouhamad El-Masri, and I am the founder of SearchSmarter. With a passion for digital marketing and over four years of experience in the field, I am excited to bring our expertise to your business.
          </p>
        </div>
        <Avatar direction={"left"} image={avatar1}/>
      </div>
    </section>
  );
};

export default Home;
