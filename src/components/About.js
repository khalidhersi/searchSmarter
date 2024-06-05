import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/About.css';
import Avatar from '../components/Avatar';
import avatar2 from '../assets/images/avatar-4.png';

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <section id="about" className="about">
      <div className="container" data-aos="fade-up">
        <Avatar image={avatar2}/>
        <div className="about__intro" data-aos="fade-right">
          <h2>About Me</h2>
          <p>I've had the privilege of working across a diverse range of industries, including ticket distribution, healthcare, beauty, theatre, tech/IT services, and musical instruments. My journey began with a deep interest in the mechanics of marketing and has since evolved into a comprehensive understanding of both B2B and B2C landscapes. I specialize in paid search strategies and have a robust background in SEO, e-commerce, and various advertising platforms like Google Ads, Microsoft Ads, and Meta Ads.
October 2023 marked the beginning of our commitment to delivering exceptional results. Whether you need a detailed audit, seamless account setup, or ongoing account management, my goal is to provide personalized and effective solutions tailored to your unique needs.
I believe in building strong, collaborative relationships with my clients, ensuring that each strategy is aligned with your business objectives. Your success is my success, and I am dedicated to helping you navigate the ever-evolving digital landscape with confidence and clarity. 
</p>
        </div>
      </div>
    </section>
  );
};

export default About;
