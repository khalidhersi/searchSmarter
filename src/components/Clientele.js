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
            <h3>peter griffin</h3>
            <p>Culpa non enim sint eu deserunt tempor adipisicing ullamco. Est eu cillum consectetur dolore laborum irure mollit incididunt deserunt deserunt do culpa minim nisi.  </p>
          </div>
          <div className="clientele__item" data-aos="fade-right">
            <h3>peter griffin</h3>
            <p>Culpa non enim sint eu deserunt tempor adipisicing ullamco. Est eu cillum consectetur dolore laborum irure mollit incididunt deserunt deserunt do culpa minim nisi.  </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clientele;
