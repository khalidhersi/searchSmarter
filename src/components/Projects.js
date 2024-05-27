import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/Projects.css';

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <section id="projects" className="projects">
      <div className="container" data-aos="fade-up">
        <h2>Projects</h2>
        <div className="projects__list">
          <div className="projects__item" data-aos="fade-right">
            <h3>Portfolio Website</h3>
            <p>A personal portfolio website to showcase my projects and skills.</p>
          </div>
          <div className="projects__item" data-aos="fade-left">
            <h3>Blog Platform</h3>
            <p>A full-featured blogging platform with user authentication, post creation, and comments.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
