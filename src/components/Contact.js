import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/Contact.css';
import Avatar from '../components/Avatar';
import avatar4 from '../assets/images/avatar-4.png';
import { IoMdCall } from "react-icons/io";
import { MdAlternateEmail } from "react-icons/md";

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <section id="contact" className="contact">
      <div className="container" data-aos="fade-up">
        <div className="contact__title">
          <h2>Get in touch</h2>
          <Avatar data-aos="fade-right" image={avatar4} direction={"left"}/> 
        </div>
        <div className="contact__us">
          <p>Contact Us directly via email or phone 
            <br />
        We are determind to help you take your business to the next level
        <br />
        Or leave us your message using the form on the right</p>
          </div>
          <div className="contact_info">
              <p className="">
                <MdAlternateEmail
                  className=""
                  size={36}
                />
                <span>{"mdmfmk@.com"}</span>
              </p>
              <p className="">
                <IoMdCall
                  className="b"
                  size={36}
                />
                <span>
                  {"079 5485 444"}
                </span>
              </p>
              </div>
        <form className="contact__form">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea placeholder="Your Message"></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
