import React from 'react';
import './CoursesPage.css';
import CourseVideo from '../assets/Videos/CourseVideo.mp4';

const CoursesPage = () => {
  return (
    <div className="courses-container">
      <h1 className="page-heading">Our Academic Programs</h1>
      <p>
        Vivekanand College offers a comprehensive range of undergraduate and postgraduate programs
        designed to equip students with the knowledge and skills demanded by today's dynamic global
        landscape. Our curriculum is regularly updated to reflect industry trends and academic
        advancements.
      </p>

      <h2 className="section-heading">Discover Campus Life</h2>
      <hr />
      <video controls className="campus-video">
        <source src={CourseVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <p className="highlight">
        Get a glimpse of the vibrant academic and social life at Vivekanand College.
      </p>

      <h2 className="section-heading">Undergraduate Programs (UG)</h2>
      <hr />
      <ul>
        <li><strong>Bachelor of Science (B.Sc.)</strong></li>
        <ul>
          <li>Computer Science (3 years)</li>
          <li>Information Technology (3 years)</li>
          <li>Biotechnology (3 years)</li>
        </ul>
        <li><strong>Bachelor of Commerce (B.Com)</strong></li>
        <ul>
          <li>Accounting & Finance (3 years)</li>
          <li>Banking & Insurance (3 years)</li>
        </ul>
        <li><strong>Bachelor of Arts (B.A.)</strong></li>
        <ul>
          <li>English Literature (3 years)</li>
          <li>Psychology (3 years)</li>
        </ul>
      </ul>

      <h2 className="section-heading">Postgraduate Programs (PG)</h2>
      <hr />
      <ul>
        <li><strong>Master of Science (M.Sc.)</strong></li>
        <ul>
          <li>Computer Science (2 years)</li>
          <li>Information Technology (2 years)</li>
        </ul>
        <li><strong>Master of Commerce (M.Com)</strong> (2 years)</li>
        <li><strong>Master of Arts (M.A.)</strong> (2 years)</li>
      </ul>

      <h2 className="section-heading">Program Details & Fee Structure (Annual)</h2>
      <hr />
      <table className="fee-table">
        <thead>
          <tr>
            <th>Program Type</th>
            <th>Course Name</th>
            <th>Duration</th>
            <th>Annual Fee (INR)</th>
            <th>Eligibility</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>UG</td>
            <td>B.Sc. Computer Science</td>
            <td>3 Years</td>
            <td>₹ 85,000</td>
            <td>10+2 with PCM (50%)</td>
          </tr>
          <tr>
            <td>UG</td>
            <td>B.Com. Accounting & Finance</td>
            <td>3 Years</td>
            <td>₹ 70,000</td>
            <td>10+2 Commerce (45%)</td>
          </tr>
          <tr>
            <td>PG</td>
            <td>M.Sc. Information Technology</td>
            <td>2 Years</td>
            <td>₹ 95,000</td>
            <td>B.Sc. IT/CS (50%)</td>
          </tr>
        </tbody>
      </table>

      <h2 className="section-heading">Specialized & Vocational Courses</h2>
      <hr />
      <p>
        In addition to traditional degree programs, we offer various certificate and diploma courses
        in areas like Digital Marketing, Web Development, Data Analytics, and Soft Skills Development,
        providing specialized training for career enhancement.
      </p>

      <p className="highlight">Have questions about a specific course?</p>
      <a href="/contact" className="inquire-button">Inquire About Courses</a>
    </div>
  );
};

export default CoursesPage;
