import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { mockJobs } from '../mockData';
import StudentHeader from '../components/StudentHeader';
import { FaBookmark } from 'react-icons/fa';

const StudentDashboard = () => {
  const [jobs, setJobs] = useState([]);
  const [activeCategory, setActiveCategory] = useState('all');
  const [bookmarkedJobs, setBookmarkedJobs] = useState(() => {
    const stored = localStorage.getItem('bookmarkedJobs');
    return stored ? JSON.parse(stored) : [];
  });

  const navigate = useNavigate();

  useEffect(() => {
    const user =
      JSON.parse(localStorage.getItem('currentUser')) ||
      JSON.parse(sessionStorage.getItem('currentUser'));

    if (!user) {
      navigate('/login');
    } else {
      setJobs(mockJobs);
    }
  }, [navigate]);

  const toggleBookmark = (jobId) => {
    setBookmarkedJobs((prev) => {
      const updated = prev.includes(jobId)
        ? prev.filter((id) => id !== jobId)
        : [...prev, jobId];
      localStorage.setItem('bookmarkedJobs', JSON.stringify(updated));
      return updated;
    });
  };

  

  const categories = [
    { id: 'all', name: 'Бүгд' },
    { id: 'professional', name: 'Мэргэжлийн ажил' },
    { id: 'part-time', name: 'Цагийн ажил' },
    { id: 'internship', name: 'Дадлага' },
    { id: 'event', name: 'Эвент' },
  ];

  const filteredJobs = jobs.filter(
    (job) => activeCategory === 'all' || job.category === activeCategory
  );

  return (
    <>
      <StudentHeader />

      <div className="container mx-auto p-4">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-semibold text-center w-full">
            Сүүлийн үеийн зарууд
          </h1>
          
        </div>

        {/* Категори сонголт */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => {
                if (category.id === 'event') {
                  navigate('/events');
                } else {
                  setActiveCategory(category.id);
                }
              }}
              className={`px-4 py-2 rounded-full text-sm font-medium border transition 
                ${
                  activeCategory === category.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Зарын картууд */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredJobs.map((job) => (
            <div
              key={job.id}
              onClick={() => navigate(`/jobs/${job.id}`)}
              className="relative border p-4 rounded shadow hover:shadow-xl transition-all cursor-pointer hover:scale-[1.02]"
            >
              {/* Bookmark icon */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  toggleBookmark(job.id);
                }}
                className="absolute top-3 right-3 z-10 transition-transform transform hover:scale-125"
                title="Хадгалах"
              >
                <FaBookmark
                  className={`w-5 h-5 transition-colors duration-200 ${
                    bookmarkedJobs.includes(job.id)
                      ? 'text-blue-600'
                      : 'text-gray-400 hover:text-blue-500'
                  }`}
                />
              </button>

              {/* Гарчиг */}
              <h3 className="text-lg font-bold mb-2 mt-4">{job.title}</h3>
              <p className="text-gray-600">{job.company}</p>
              <p className="text-sm text-gray-500 mt-2 line-clamp-3">{job.description}</p>

              {/* 🕒 Date (зүүн) — Location (баруун) */}
              <div className="flex justify-between items-center text-sm text-gray-500 mt-4">
                <span>{job.postedDate}</span>
                <span>{job.location}</span>
              </div>

              {/* CV илгээх – баруун талд */}
              <div className="flex justify-end mt-4">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    alert('CV илгээх');
                  }}
                  className="px-4 py-1.5 bg-[#2C3E50] text-white rounded-full font-medium text-sm hover:bg-[#1f2e3d] transition duration-200 shadow-sm"
                >
                  CV илгээх
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default StudentDashboard;
