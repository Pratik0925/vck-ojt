import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';
import backgroundImage from '../assets/Images/college-hero.jpg';
import campus1 from '../assets/Images/campus1.jpg';
import campus2 from '../assets/Images/campus2.jpg';

const HomePage = () => {
  return (
    <div className="centered-block">
      <div className="home-wrapper">
        <section
          className="hero-section"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <div className="hero-overlay">
            <h1>Vivekanand College, Kolhapur</h1>
            <p>Your Journey to Excellence starts here</p>
            <Link to="/admissions" className="apply-button">Apply Now!</Link>
          </div>
        </section>

        <section className="section">
          <p><strong>Vivekanand College is a premier educational institution dedicated to fostering academic excellence, innovation, and holistic development. Established in 1980, we have proudly served generations of students, empowering them to achieve their full potential.</strong></p>
          <p>At Vivekanand College, we believe in a vibrant learning environment that extends beyond textbooks. Our state-of-the-art facilities, experienced faculty, and diverse student community create a unique ecosystem where curiosity thrives and future leaders are shaped.</p>
          
          <h2>Why Choose Vivekanand College?</h2>
          <hr />
          <ul>
            <li><strong>Legacy of Excellence:</strong> Decades of commitment to quality education.</li>
            <li><strong>Experienced Faculty:</strong> Learn from renowned experts and passionate educators.</li>
            <li><strong>Modern Facilities:</strong> Well-equipped labs, expansive library, and comfortable campus.</li>
            <li><strong>Holistic Development:</strong> Focus on co-curricular activities, sports, and community service.</li>
            <li><strong>Strong Placements:</strong> Excellent career opportunities with leading companies.</li>
          </ul>
        </section>

        <section className="section campus-section">
          <h2>Campus Life & Facilities</h2>
          <hr />
          <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
            <img src={campus1} alt="Campus 1" />
            <img src={campus2} alt="Campus 2" />
          </div>
          <p>Explore our vibrant campus and state-of-the-art facilities designed to enhance your learning experience and personal growth.</p>
        </section>

        <section className="section cta-section">
          <h3>Ready to explore our courses?</h3>
          <Link to="/courses" className="cta-button">Explore Courses</Link>
        </section>
      </div>
    </div>
  );
};

export default HomePage;
