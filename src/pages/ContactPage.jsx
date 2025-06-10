import React from 'react';
import { Link } from 'react-router-dom';
import './ContactPage.css';

const ContactPage = () => {
  return (
    <div className="page-wrapper">
      <div className="contact-wrapper">
        <h1 className="page-title">Contact Us</h1>
        <p className="intro-text">
          We'd love to hear from you! Whether you have questions about admissions, programs, or campus life, our team is here to help.
        </p>

        <section className="contact-section">
          <h2>General Enquiries</h2>
          <hr />
          <p>
            Vivekanand College Main Campus<br />
            Mahatma Gandhi Road, Chembur, Mumbai, Maharashtra 400071<br />
            India
          </p>
          <p>
            Phone: <strong>+91 12345 67890</strong><br />
            Email: <strong>info@vivekanandcollege.edu</strong><br />
            Office Hours: Monday - Friday, 9:00 AM - 5:00 PM IST
          </p>
        </section>

        <section className="contact-section">
          <h2>Admissions Office</h2>
          <hr />
          <p>
            For all admission-related queries regarding undergraduate or postgraduate programs:<br />
            Phone: +91 98765 43210<br />
            Email: admissions@vivekanandcollege.edu
          </p>
        </section>

        <section className="contact-section">
          <h2>Student Support Services</h2>
          <hr />
          <p>
            For current student support, academic advising, or general assistance:<br />
            Phone: +91 87654 32109<br />
            Email: studentsupport@vivekanandcollege.edu
          </p>
        </section>

        <section className="contact-section">
          <h2>Find Us on the Map</h2>
          <hr />
          <p>
            <a
              href="https://www.google.com/maps/place/Vivekanand+College+Mumbai"
              target="_blank"
              rel="noopener noreferrer"
              className="map-link"
            >
              View On Google Maps
            </a>
          </p>
        </section>

        <section className="contact-section">
          <h2>Send us a Message</h2>
          <hr />
          <p>[A contact form with fields for Name, Email, Subject, Message can be added here.]</p>
        </section>
      </div>
    </div>
  );
};

export default ContactPage;
