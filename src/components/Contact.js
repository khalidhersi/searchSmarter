import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/Contact.css';
import Avatar from '../components/Avatar';
import avatar4 from '../assets/images/avatar-4.png';
import email from "../assets/images/email.gif";
import phone from "../assets/images/phone.gif";


const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <section id="contact" className="contact">
      <div className="container" data-aos="fade-down">
        <div className="contact__title">
          <h2>Get in touch</h2>   
        </div>   

          <div className="contact__us">        
            <div className="contact__middle">
          <div className="contact_info">
              <div className="getInTouch">
              <img className='getInTouch__image' src={email} alt="email"/>
                <span>SearchSmarter@hotmail.com</span>
              </div>
              <div className="getInTouch">
              <img className='getInTouch__image' src={phone} alt="phone"/>
                <span>
                  079 5485 444
                </span>
              </div>
              </div>     
              <div className="contact_avatar_image">
                <Avatar image={avatar4} direction={"up"}/>
              </div>
          </div>
          <form className="contact__form">
            <input className='form__text' type="text" placeholder="Your Name" />
            <input className='form__text' type="email" placeholder="Your Email" />
            <textarea className='form__text' placeholder="Your Message"></textarea>
            <button className='form__text' type="submit">Send Message</button>
          </form>
          </div>
        
      </div>
    </section>
  );
};

export default Contact;
