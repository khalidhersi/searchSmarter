import React, { useEffect } from 'react';
import Slider from 'react-slick';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/Clientele.css';

const Clientele = () => {
  const clienteleList = [
    { name: 'Peter Griffin', text: 'Culpa non enim sint eu deserunt tempor adipisicing ullamco. Est eu cillum consec' },
    { name: 'Lois Griffin', text: 'Amet aliqua ipsum sint incididunt. Ut velit esse adipisicing veniam deserunt  ' },
    { name: 'Stewie Griffin', text: 'Irure sit in amet sunt. Nulla sunt officia qui voluptate minim sunt exercitation.' },
    { name: 'Brian Griffin', text: 'Adipisicing sint ullamco ex. Anim ipsum deserunt in exercitation mollit veniam est.' },
    { name: 'Meg Griffin', text: 'Aliquip sint est in pariatur labore. Do laborum nisi exercitation non amet nulla.' },
    { name: 'Chris Griffin', text: 'In ex deserunt veniam velit pariatur excepteur ullamco cillum qui ex nulla fugia ' },
    // Add more client entries as needed
  ];

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: 'block', right: '-25px' }}
        onClick={onClick}
      />
    );
  };

  const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: 'block', left: '-25px' }}
        onClick={onClick}
      />
    );
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <section id="clientele" className="clientele">
      <div className="container" data-aos="fade-up">
        <h2>Clientele</h2>
        <Slider {...settings} className="clientele__carousel">
          {clienteleList.map((client, index) => (
            <div key={index} className="clientele__item" data-aos="fade-right">
              <h3>{client.name}</h3>
              <p>{client.text}</p>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Clientele;
