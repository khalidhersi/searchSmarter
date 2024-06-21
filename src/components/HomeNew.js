import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/Home.css';
import Avatar from './Avatar';
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
          <p>Elevate your brand through expert paid search and social media support with SearchSmarter. With over four years of experience in digital marketing, we are confident that our expertise can elevate your business to the next level.</p>
              <p>We have worked across diverse industries, including ticket distribution, healthcare, beauty, theatre, tech/IT services, and musical instruments. Our marketing journey has given us a deep understanding of both B2B and B2C landscapes. SearchSmarter specialises in paid search strategies and have a strong background in SEO, e-commerce, and advertising platforms like Google Ads, Microsoft Ads, and Meta Ads.</p>
              <p>Since October 2023, we've been committed to delivering exceptional results. Whether you need a detailed audit, account setup, or ongoing management, our goal is to provide personalised, effective solutions tailored to your needs.</p>
              <p>SearchSmarter believes in strong, collaborative client relationships, ensuring each strategy aligns with your business objectives. Your success is our success, and we're dedicated to helping you navigate the evolving digital landscape confidently.</p>
        </div>
        <Avatar direction={"left"} image={avatar1}/>
      </div>
    </section>
  );
};

export default Home;
