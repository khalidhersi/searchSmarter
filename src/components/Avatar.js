import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/Avatar.css';
import avatar from '../assets/images/avatar.png';

const Avatar = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
      <div className="avatar" data-aos="fade-left">
        <img src={avatar} alt="avatar" />
      </div>
  );
};

export default Avatar;
