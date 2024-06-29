import React, { useEffect } from 'react';
import Slider from 'react-slick';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/Clientele.css';

const Clientele = () => {
  const clienteleList = [
    { name: 'FTBO (LoveTheatre)', text: "We supported FTBO by distributing theatre tickets through Google Ads campaigns. We provided comprehensive support with data collection & conversion tracking, enhancing their marketing strategies. Our SEO & keyword research efforts boosted their online presence, ensuring wider audience reach & maximizing ticket sales. These strategies enhanced visibility & optimized campaign performance, contributing to FTBO's growth & success in the entertainment market." },
    { name: 'Argiweb', text: "We provided Argiweb with expert content writing and thorough keyword research. Our team crafted engaging, SEO-optimized content tailored to resonate with Argiweb's target audience, ensuring visibility and improved search rankings. Through meticulous keyword analysis and strategic implementation, we attracted more organic traffic. This proactive approach enhanced their online presence and played a pivotal role in driving substantial business growth, reinforcing Argiweb's competitive edge." },
    { name: 'Pulse Light Clinic', text: 'We collaborated with Pulse Light Clinic, providing comprehensive digital marketing services, creating targeted campaigns, accurate budget forecasts, and efficient ad spend management. Our team optimized campaign timing through in-depth seasonality and market trend research. We also facilitated detailed data collection to monitor performance and drive continuous improvement, helping Pulse Light Clinic achieve their marketing objectives and grow their business.' },
    { name: 'Arts Digital Ltd', text: "SearchSmarter Has collaborated with Arts Digital Ltd, enhancing their online presence through strategic link building, comprehensive keyword research, and refined UX/UI design. Our efforts in link building improved their website's authority and search engine rankings, while our in-depth keyword research ensured they reached their target audience effectively. By optimising their UX/UI, we enhanced user engagement and satisfaction, contributing to Arts Digital Ltd's overall digital success." },
    { name: 'Premier Laser Clinic', text: "SearchSmarter is delighted to work with Premier Laser Clinic, providing expert assistance in campaign creation, budget management, and conversion tracking. Our dedicated team designed targeted marketing campaigns to effectively reach their audience while meticulously managing their budget to ensure maximum return on investment. Additionally, we implemented robust conversion tracking to measure success and optimize strategies, helping Premier Laser Clinic grow their client base." },
    { name: 'Embassy Of Beauty', text: "SearchSmarter is honoured to support Embassy Of Beauty with campaign creation, keyword research, conversion tracking, and seasonality research. We develop targeted marketing campaigns to enhance reach and effectiveness, ensuring optimal visibility and engagement. Robust conversion tracking monitors performance and drives improvement. Our seasonality research aligns strategies with market trends, contributing to Embassy Of Beauty's sustained growth and success." },
    { name: 'SRGN Clinic', text: 'SearchSmarter is proud to have partnered with SRGN Clinic, offering specialised support in campaign creation and maintenance as well as conversion tracking. Our team designed and managed targeted marketing campaigns to effectively reach and engage their audience. We also implemented comprehensive conversion tracking systems to monitor performance and optimize strategies. This collaboration has helped SRGN Clinic achieve their marketing objectives and drive significant growth.' },
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
      <div className="container" >
        <h2>Clientele & Work History</h2>
        <Slider {...settings} className="clientele__carousel">
          {clienteleList.map((client, index) => (
            <div key={index} className="clientele__item" >
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