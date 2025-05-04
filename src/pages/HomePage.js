import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { mockJobs } from '../mockData';
import '../styles.css';

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const navigate = useNavigate();

  const filteredJobs = mockJobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         job.company.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'all' || job.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const categories = [
    { id: 'all', name: 'Бүгд' },
    { id: 'professional', name: 'Мэргэжлийн ажил' },
    { id: 'part-time', name: 'Цагийн ажил' },
    { id: 'internship', name: 'Дадлага' },
    { id: 'event', name: 'Эвент' }
  ];

  return (
    <div className="home-page">
      {/* Hero Section with Search */}
      <div className="hero-section">
        <div className="search-container">
          <input
            type="text"
            placeholder="Ажлын зар хайх..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
          <button className="search-button">
            <i className="fas fa-search"></i>
          </button>
        </div>
      </div>

      {/* Categories */}
      <div className="categories">
        {categories.map(category => (
          <button
            key={category.id}
            className={`category-btn ${activeCategory === category.id ? 'active' : ''}`}
            onClick={() => setActiveCategory(category.id)}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* Job Listings */}
      <div className="job-grid">
        {filteredJobs.map(job => (
          <div key={job.id} className="job-card">
            <div className="job-header">
              <span className={`job-category ${job.category}`}>
                {categories.find(c => c.id === job.category)?.name}
              </span>
              <span className="job-date">{job.postedDate}</span>
            </div>
            <h3>{job.title}</h3>
            <p className="job-company">{job.company}</p>
            <p className="job-description">{job.description}</p>
            <div className="job-footer">
              <span className="job-location">{job.location}</span>
              <button 
                className="view-button"
                onClick={() => navigate(`/jobs/${job.id}`)}
              >
                Дэлгэрэнгүй
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;