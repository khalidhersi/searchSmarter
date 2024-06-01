import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/Services.css';
import Slider from 'react-slick';

const Services = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 2,
  //   slidesToScroll: 2,
  //   // responsive: [
  //   //   {
  //   //     breakpoint: 768,
  //   //     settings: {
  //   //       slidesToShow: 1,
  //   //       slidesToScroll: 1
  //   //     }
  //   //   }
  //   // ]
  // };

  return (
    <section id="services" className="services">
      <div className="container" data-aos="fade-up">
        <h2>Services</h2>
        {/* <Slider {...settings}> */}
        <div className="services__list">
          {/* <div className="services__item" data-aos="fade-right">
            <h3>Google Ads Audit</h3>
            <p>Have Google Ad hbbxc   bhb hb hb hdb</p>
          </div>
          <div className="services__item" data-aos="fade-right">
            <h3>Google Ads Audit</h3>
            <p>Have Google Ad hbbxc   bhb hb hb hdb</p>
          </div>
          <div className="services__item" data-aos="fade-right">
            <h3>Google Ads Audit</h3>
            <p>Have Google Ad hbbxc   bhb hb hb hdb</p>
          </div>
          <div className="services__item" data-aos="fade-right">
            <h3>Google Ads Audit</h3>
            <p>Have Google Ad hbbxc   bhb hb hb hdb</p>
          </div>
          <div className="services__item" data-aos="fade-right">
            <h3>Google Ads Audit</h3>
            <p>Have Google Ad hbbxc   bhb hb hb hdb</p>
          </div> */}
          <div className="services__item" data-aos="fade-right">
            <h3>Google Ads Audit</h3>
            <p>Have Google Ads campaigns that aren't converting effectively? We'll conduct a thorough analysis of your campaign's performanceand identify areas for improvement to significantly enhance your results.</p>
          </div>
          <div className="services__item" data-aos="fade-right">
            <h3>Campaign Setup</h3>
            <p>We handle the complete setup process for a diverse array of Google Ads campaigns. Our expertise covers the creation of various successful and profitable campaigns, such as search ads, Google Shopping, display, Youtube and remarketing.</p>
          </div>
          <div className="services__item" data-aos="fade-right">
            <h3>Technical SEO</h3>
            <p>Our expertise extends to optimizing existing code or developing new solutions to enhance functionality and streamline processes, ultimately contributing to increased site efficiency. By fine-tuning code and implementing innovative solutions, we can significantly boost your domain rating, ensuring your website performs at its best. From refining user interfaces to optimizing backend processes, our team works diligently to enhance every aspect of your online presence, driving better performance and maximizing your digital success.</p>
          </div>      
          <div className="services__item" data-aos="fade-right">
            <h3>Social Media Marketing</h3>
            <p>Social media marketing is a pivotal component of your digital marketing strategy. With our expertise we can leverage platforms like Facebook, Instagram, Twitter, and LinkedIn to connect with audiences, build brand awareness, and drive engagement. Through our tailored approach of targeted content creation, community management, and strategic advertising campaigns, we empower businesses to reach their desired demographics where they spend their time online.</p>
          </div>    
          <div className="services__item" data-aos="fade-right">
            <h3>Keyword research</h3>
            <p>SEO and PPC sucess is made or broken based on keyword research. We can identify the search terms potential customers use online. Our process involves finding high-traffic, low-competition location-specific keywords to optimize campaigns, website content, improve domain rankings, and attract targeted traffic. By understanding these keywords, we enable businesses to tailor their content to meet customer needs, driving more qualified leads and increasing conversions.</p>
          </div>
          <div className="services__item" data-aos="fade-right">
            <h3>Conversion tracking</h3>
            <p>Conversion tracking is essential for the success of your pay-per-click campaigns. Without it, we would be bidding blindly. Therefore, we ensure that conversions are properly recorded. This allows us to accurately measure the performance of your campaigns, allowing us to make necessary optimizations.</p>
          </div>
          <div className="services__item" data-aos="fade-right">
            <h3>Ad Copy optimisation</h3>
            <p>We craft highly effective Google Ads copy that encapsulates your business and brand’s identity, encouraging users to click through to your website. Additionally, we regularly test ad performance, adjusting the text or introducing new variations to ensure we stay ahead of the competition.</p>
          </div>
          <div className="services__item" data-aos="fade-right">
            <h3>Email Marketing</h3>
            <p>Harness email marketing to engage your loyal audience, fostering stronger connections and boosting returning customer rates. By regularly reaching out via email with valuable content and personalized messages, you keep your brand top-of-mind, driving conversions and gathering insights for refined marketing efforts.</p>
          </div>  
          <div className="services__item" data-aos="fade-right">
            <h3>Campaign Management</h3>
            <p>We can manage your existing campaigns, or campaigns we've setup and help you reach your KPI goals</p>
          </div>
          <div className="services__item" data-aos="fade-right">
            <h3>UXUI</h3>
            <p>Enhance your user experience to increase your web traffic and conversion rates. </p>
          </div>
       </div> 
        {/* </Slider> */}
      </div>
    </section>
  );
};

export default Services;
