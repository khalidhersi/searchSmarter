import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/Clientele.css';

const Clientele = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <section id="clientele" className="clientele">
      <div className="container" data-aos="fade-up">
        <h2>Clientele</h2>
        <div className="clientele__list">
          <div className="clientele__item" data-aos="fade-right">
            <h3>Portfolio Website</h3>
            <p>A personal portfolio website to showcase my Clientele and skills.</p>
          </div>
          <div className="clientele__item" data-aos="fade-left">
            <h3>Blog Platform</h3>
            <p>A full-featured blogging platform with user authentication, post creation, and comments.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clientele;
