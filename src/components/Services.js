import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/Services.css';
import avatar3 from '../assets/images/avatar-3.png';
import Avatar from './Avatar.js';
import svg1 from "../assets/images/cloud_audit_logs.png"
import svg2 from "../assets/images/cloud_for_marketing.png"
import svg3 from "../assets/images/cloud_optimization_ai.png"
import svg4 from "../assets/images/filestore.png"
import svg5 from "../assets/images/my_cloud.png"
import svg6 from "../assets/images/cloud_test_lab.png"
import AnimatedCard from './AnimatedCard.jsx';

const servicesData = [
  {
    title: "Google Ads Audit",
    content: "Have Google Ads campaigns that aren't converting effectively? We'll conduct a thorough analysis of your campaign's performance and identify areas for improvement to significantly enhance your results.",
    image: svg1,
  },
  {
    title: "Campaign Setup",
    content: "We handle the complete setup process for a diverse array of Google Ads campaigns. Our expertise covers the creation of various successful and profitable campaigns, such as search ads, Google Shopping, display, YouTube, and remarketing.",
    image: svg2,
  },
  {
    title: "Technical SEO",
    content: "Our expertise extends to optimizing existing code or developing new solutions to enhance functionality and streamline processes, ultimately contributing to increased site efficiency. By fine-tuning code and implementing innovative solutions, we can significantly boost your domain rating, ensuring your website performs at its best. From refining user interfaces to optimizing backend processes, our team works diligently to enhance every aspect of your online presence, driving better performance and maximizing your digital success.",
    image: svg3,
  },
  {
    title: "Social Media Marketing",
    content: "Social media marketing is a pivotal component of your digital marketing strategy. With our expertise, we can leverage platforms like Facebook, Instagram, Twitter, and LinkedIn to connect with audiences, build brand awareness, and drive engagement. Through our tailored approach of targeted content creation, community management, and strategic advertising campaigns, we empower businesses to reach their desired demographics where they spend their time online.",
    image: svg4
  },
  {
    title: "Keyword Research",
    content: "SEO and PPC success is made or broken based on keyword research. We can identify the search terms potential customers use online. Our process involves finding high-traffic, low-competition location-specific keywords to optimize campaigns, website content, improve domain rankings, and attract targeted traffic. By understanding these keywords, we enable businesses to tailor their content to meet customer needs, driving more qualified leads and increasing conversions.",
    image: svg5
  },
  {
    title: "Conversion Tracking",
    content: "Conversion tracking is essential for the success of your pay-per-click campaigns. Without it, we would be bidding blindly. Therefore, we ensure that conversions are properly recorded. This allows us to accurately measure the performance of your campaigns, allowing us to make necessary optimizations.",
    image: svg6
  },
  {
    title: "Ad Copy Optimisation",
    content: "We craft highly effective Google Ads copy that encapsulates your business and brand’s identity, encouraging users to click through to your website. Additionally, we regularly test ad performance, adjusting the text or introducing new variations to ensure we stay ahead of the competition.",
    image: svg1
  },
  {
    title: "Email Marketing",
    content: "Harness email marketing to engage your loyal audience, fostering stronger connections and boosting returning customer rates. By regularly reaching out via email with valuable content and personalized messages, you keep your brand top-of-mind, driving conversions and gathering insights for refined marketing efforts.",
    image: svg2
  },
  {
    title: "Campaign Management",
    content: "We can manage your existing campaigns, or campaigns we've set up, and help you reach your KPI goals.",
    image: svg3
  },
  {
    title: "UXUI",
    content: "Enhance your user experience to increase your web traffic and conversion rates.",
    image: svg4
  },
];

const Services = () => {
  const [expandedService, setExpandedService] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const handleClick = (index) => {
    setExpandedService(index === expandedService ? null : index);
  };

  return (
    <section id="services" className="services">
      <div className="container" data-aos="fade-up">
      <div className="services__content" data-aos="fade-right">

      
      <div className="services__text">
        <h2 className="services__title">Services</h2>
        <div className="service__content">
        {/* <AnimatedCard image={servicesData[3].image} content={servicesData[3].content} title={servicesData[3].title} />
        <AnimatedCard image={servicesData[3].image} content={servicesData[3].content} title={servicesData[3].title} />
        <AnimatedCard image={servicesData[3].image} content={servicesData[3].content} title={servicesData[3].title} />
        <AnimatedCard image={servicesData[3].image} content={servicesData[3].content} title={servicesData[3].title} />
        <AnimatedCard image={servicesData[3].image} content={servicesData[3].content} title={servicesData[3].title} />
        <AnimatedCard image={servicesData[3].image} content={servicesData[3].content} title={servicesData[3].title} />
        <AnimatedCard image={servicesData[3].image} content={servicesData[3].content} title={servicesData[3].title} /> */}
        <div className="services__list">
            {servicesData.map((service, index) => (
              <AnimatedCard image={service.image} content={service.content} title={service.title} />
              // <div key={index} className={`services__item ${expandedService === index ? 'expanded' : ''}`}>
              //   <div className="services__item-header" onClick={() => handleClick(index)}>
              //     <h3>{service.title}</h3>
              //     <img src={service.image} alt={service.title} className="services__image" />
              //   </div>
              //   {expandedService === index && (
              //     <div className="services__details">
              //       <p>{service.content}</p>
              //     </div>
              //   )}
              // </div>
            ))}         
              </div>
          {/* <div className="services__avatar">
            <Avatar data-aos="fade-right" image={avatar3} direction={"left"} />
          </div> */}
        </div>
        </div><Avatar data-aos="fade-right" image={avatar3} direction={"left"} />
      </div>
      </div>
    </section>
  );
};

export default Services;
