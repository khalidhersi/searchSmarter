import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/Services.css';

const Services = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <section id="services" className="services">
      <div className="container" data-aos="fade-up">
        <h2>Services</h2>
        <div className="services__list">
          <div className="services__item" data-aos="fade-right">
            <h3>Portfolio Website</h3>
            <p>A personal portfolio website to showcase my Services and skills.</p>
          </div>
          <div className="services__item" data-aos="fade-left">
            <h3>Blog Platform</h3>
            <p>A full-featured blogging platform with user authentication, post creation, and comments.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
