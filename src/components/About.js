import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/About.css';
import avatar from '../assets/images/avatar.png';

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <section id="about" className="about">
      <div className="container" data-aos="fade-up">
        <div className="about__intro" data-aos="fade-right">
          <h2>About Me</h2>
          <p>I am a full-stack developer with experience in building scalable web applications. 
            I have a strong background in both frontend and backend development.</p>
        </div>
        <div className="home__image" data-aos="fade-left">
          <img src={avatar} alt="Profile" />
        </div>
      </div>
    </section>
  );
};

export default About;
