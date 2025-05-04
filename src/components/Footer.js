import React from 'react';

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3 className="footer-heading">StudentJobs</h3>
          <p>Оюутны ажлын портал</p>
        </div>
        
        <div className="footer-section">
          <h3 className="footer-heading">Холбоо барих</h3>
          <p>Утас: 89818382, 99337475</p>
          <p>И-мэйл: studjob@gmail.com</p>
        </div>
        
        <div className="footer-section">
          <h3 className="footer-heading">Хаяг</h3>
          <p>Улаанбаатар хот</p>
          <p>Сүхбаатар дүүрэг</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;