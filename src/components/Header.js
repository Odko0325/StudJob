import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="main-header">
      <div className="logo-container" onClick={() => navigate('/')}>
        <img src="/logo.png" alt="Logo" className="logo-img" />
        <span className="logo-text">StudentJobs</span>
      </div>
      
      <nav className="main-nav">
        <a href="/jobs" className="nav-link">Ажлын зар</a>
        <a href="/post-job" className="nav-link">Зар оруулах</a>
      </nav>
      
      <div className="auth-section">
        <a href="/login" className="auth-link">Нэвтрэх</a>
        <span>|</span>
        <a href="/register" className="auth-link">Бүртгүүлэх</a>
      </div>
    </header>
  );
};

export default Header;