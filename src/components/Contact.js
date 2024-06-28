import React, { useEffect, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/Contact.css';
import Avatar from '../components/Avatar';
import avatar4 from '../assets/images/avatar-4.png';
import email from "../assets/images/email.gif";
import phone from "../assets/images/phone.gif";
import { isValidEmail } from '../assets/utils/checkEmail.js';
import emailjs from '@emailjs/browser';
import { useState } from 'react';
import { toast } from 'react-toastify';


const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const form = useRef();

  const [input, setInput] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [error, setError] = useState({
    email: false,
    required: false,
  });

  const checkRequired = () => {
    if (input.email && input.message && input.name) {
      setError({ ...error, required: false });
    }
  };

  const handleSendMail = async (e) => {
    e.preventDefault();
    if (!input.email || !input.message || !input.name) {
      setError({ ...error, required: true });
      return;
    } else if (error.email) {
      return;
    } else {
      setError({ ...error, required: false });
    };

    const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const options = { publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY};

    try {
      const res = await emailjs.send(serviceID, templateID, input, options);

      if (res.status === 200) {
        toast.success('Message sent successfully!');
        setInput({
          name: '',
          email: '',
          message: '',
        });
      };
    } catch (error) {
      toast.error(error?.text || error);
    };
  };

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
          <form className="contact__form" ref={form} onSubmit={handleSendMail}>
            <input className='form__text' 
              type="text" 
              placeholder="Your Name"
              onBlur={checkRequired} 
              required={true} 
              maxLength="100" 
              value={input.name}
              onChange={(e) => setInput({ ...input, name: e.target.value })}
            />
            <input className='form__text' 
              type="email" 
              placeholder="Your Email" 
              required={true} 
              maxLength="100"
              value={input.email}
              onChange={(e) => setInput({ ...input, email: e.target.value })}
              onBlur={() => {
                checkRequired();
                setError({ ...error, email: !isValidEmail(input.email) });
              }}/>

            {error.email &&
              <p className="text-sm text-red-400">Please provide a valid email!</p>
            }

            <textarea className='form__text' 
              placeholder="Your Message" 
              maxLength="500" 
              name="message" 
              required={true}
              onChange={(e) => setInput({ ...input, message: e.target.value })}
              onBlur={checkRequired}
              rows="4"
              value={input.message}
            ></textarea>

            <div className="flex flex-col items-center gap-2">
              {error.required &&
                <p className="text-sm text-red-400">
                  Email and Message are required!
                </p>
              }
            </div>

            <button className='form__text' type="submit" >Send Message</button>
          </form>
          </div>
        
      </div>
    </section>
  );
};

export default Contact;
