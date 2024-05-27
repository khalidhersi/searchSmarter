import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/About.css';

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <section id="about" className="about">
      <div className="container" data-aos="fade-up">
        <h2>About Me</h2>
        <p>I am a full-stack developer with experience in building scalable web applications. 
          I have a strong background in both frontend and backend development.</p>
      </div>
    </section>
  );
};

export default About;
