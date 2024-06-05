import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/Avatar.css';

const Avatar = (props) => {    
const { image } = props ;

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <>
        <div className="avatar__image" data-aos="fade-left">
            <img src={image} alt="Profile" />
        </div>
    </>
  );
};

export default Avatar;
