import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/Services.css';
import Avatar from './Avatar';
import avatar3 from '../assets/images/avatar-3.png';

const servicesData = [
  {
    title: "Google Ads Audit",
    content: "Have Google Ads campaigns that aren't converting effectively? We'll conduct a thorough analysis of your campaign's performance and identify areas for improvement to significantly enhance your results.",
    image: "path-to-google-ads-audit-image",
  },
  {
    title: "Campaign Setup",
    content: "We handle the complete setup process for a diverse array of Google Ads campaigns. Our expertise covers the creation of various successful and profitable campaigns, such as search ads, Google Shopping, display, YouTube, and remarketing.",
    image: "path-to-campaign-setup-image",
  },
  {
    title: "Technical SEO",
    content: "Our expertise extends to optimizing existing code or developing new solutions to enhance functionality and streamline processes, ultimately contributing to increased site efficiency. By fine-tuning code and implementing innovative solutions, we can significantly boost your domain rating, ensuring your website performs at its best. From refining user interfaces to optimizing backend processes, our team works diligently to enhance every aspect of your online presence, driving better performance and maximizing your digital success.",
    image: "path-to-technical-seo-image",
  },
  {
    title: "Social Media Marketing",
    content: "Social media marketing is a pivotal component of your digital marketing strategy. With our expertise, we can leverage platforms like Facebook, Instagram, Twitter, and LinkedIn to connect with audiences, build brand awareness, and drive engagement. Through our tailored approach of targeted content creation, community management, and strategic advertising campaigns, we empower businesses to reach their desired demographics where they spend their time online.",
    image: "path-to-social-media-marketing-image",
  },
  {
    title: "Keyword Research",
    content: "SEO and PPC success is made or broken based on keyword research. We can identify the search terms potential customers use online. Our process involves finding high-traffic, low-competition location-specific keywords to optimize campaigns, website content, improve domain rankings, and attract targeted traffic. By understanding these keywords, we enable businesses to tailor their content to meet customer needs, driving more qualified leads and increasing conversions.",
    image: "path-to-keyword-research-image",
  },
  {
    title: "Conversion Tracking",
    content: "Conversion tracking is essential for the success of your pay-per-click campaigns. Without it, we would be bidding blindly. Therefore, we ensure that conversions are properly recorded. This allows us to accurately measure the performance of your campaigns, allowing us to make necessary optimizations.",
    image: "path-to-conversion-tracking-image",
  },
  {
    title: "Ad Copy Optimisation",
    content: "We craft highly effective Google Ads copy that encapsulates your business and brand’s identity, encouraging users to click through to your website. Additionally, we regularly test ad performance, adjusting the text or introducing new variations to ensure we stay ahead of the competition.",
    image: "path-to-ad-copy-optimisation-image",
  },
  {
    title: "Email Marketing",
    content: "Harness email marketing to engage your loyal audience, fostering stronger connections and boosting returning customer rates. By regularly reaching out via email with valuable content and personalized messages, you keep your brand top-of-mind, driving conversions and gathering insights for refined marketing efforts.",
    image: "path-to-email-marketing-image",
  },
  {
    title: "Campaign Management",
    content: "We can manage your existing campaigns, or campaigns we've set up, and help you reach your KPI goals.",
    image: "path-to-campaign-management-image",
  },
  {
    title: "UXUI",
    content: "Enhance your user experience to increase your web traffic and conversion rates.",
    image: "path-to-ux-ui-image",
  },
];

const Services = () => {
  const [expandedService, setExpandedService] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleClick = (index) => {
    setExpandedService(index === expandedService ? null : index);
  };

  return (
    <section id="services" className="services">
      <div className="container" data-aos="fade-up">
        <h2 className="services__title">Our Services</h2>
        {/* <div className='two'> */}
        <div className="services__list">
          {servicesData.map((service, index) => (
            <div key={index} className="services__item-wrapper">
              <div
                className={`services__item ${expandedService === index ? 'expanded' : ''}`}
                onClick={() => handleClick(index)}
              >
                <h3>{service.title}</h3>
              </div>
              {expandedService === index && (
                <div className="services__details" data-aos="fade-left">
                  <img src={service.image} alt={service.title} className="services__image" />
                  <h3>{service.title}</h3>
                  <p>{service.content}</p>
                </div>
              )}

            </div>
          ))}                  
        </div>
        {/* {!expandedService && (
           <Avatar data-aos="fade-right" image={avatar3} direction={"left"}/>
          )} */}
          {/* </div> */}
      </div>
    </section>
  );
};

export default Services;
