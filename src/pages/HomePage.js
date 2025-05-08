import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { mockJobs } from '../mockData';

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const navigate = useNavigate();

  const filteredJobs = mockJobs.filter(job => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'all' || job.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const categories = [
    { id: 'all', name: 'Бүгд' },
    { id: 'professional', name: 'Мэргэжлийн ажил' },
    { id: 'part-time', name: 'Цагийн ажил' },
    { id: 'internship', name: 'Дадлага' },
    { id: 'event', name: 'Эвент' } // 👈 энэ бол тусдаа хуудас руу шилжинэ
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">

      {/* Category Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {categories.map(category => (
          <button
            key={category.id}
            onClick={() => {
              if (category.id === 'event') {
                navigate('/events'); // 👈 эвент рүү navigate
              } else {
                setActiveCategory(category.id);
              }
            }}
            className={`px-4 py-2 rounded-full text-sm font-medium border transition 
              ${activeCategory === category.id
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* Job Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredJobs.map(job => (
          <div
            key={job.id}
            className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition"
          >
            <div className="flex justify-between items-center mb-3 text-sm text-gray-500">
              <span className="px-2 py-1 bg-gray-100 rounded-full text-xs">
                {categories.find(c => c.id === job.category)?.name}
              </span>
              <span>{job.postedDate}</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-1">{job.title}</h3>
            <p className="text-gray-600 mb-1">{job.company}</p>
            <p className="text-gray-500 text-sm line-clamp-3 mb-4">{job.description}</p>
            <div className="flex justify-between items-center">
              <span className="text-gray-500 text-sm">{job.location}</span>
              <button
                className="text-blue-600 hover:underline text-sm font-medium"
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
