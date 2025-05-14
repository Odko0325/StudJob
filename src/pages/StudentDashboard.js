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

  const [filters, setFilters] = useState({
    field: 'all',
    daysPerWeek: 'all',
    shift: 'all',
  });

  const navigate = useNavigate();

  useEffect(() => {
    const user =
      JSON.parse(localStorage.getItem('currentUser')) ||
      JSON.parse(sessionStorage.getItem('currentUser'));
    if (!user) {
      navigate('/login');
    } else {
      setJobs(mockJobs); // mockJobs should contain field, shift, daysPerWeek
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

  const filteredJobs = jobs.filter((job) =>
    (activeCategory === 'all' || job.category === activeCategory) &&
    (filters.field === 'all' || job.field === filters.field) &&
    (filters.daysPerWeek === 'all' || job.daysPerWeek === Number(filters.daysPerWeek)) &&
    (filters.shift === 'all' || job.shift === filters.shift)
  );

  return (
    <>
      <StudentHeader />

      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-semibold text-center mb-6">Сүүлийн үеийн зарууд</h1>

        {/* Категори сонголт */}
        <div className="flex flex-wrap justify-center gap-3 mb-6">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() =>
                category.id === 'event'
                  ? navigate('/events')
                  : setActiveCategory(category.id)
              }
              className={`px-4 py-2 rounded-full text-sm font-medium border transition ${
                activeCategory === category.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Шүүлтүүрүүд */}
        <div className="flex flex-wrap gap-4 justify-center mb-10">
          <select
            value={filters.field}
            onChange={(e) => setFilters({ ...filters, field: e.target.value })}
            className="border px-4 py-2 rounded text-sm"
          >
            <option value="all">Мэргэжлийн салбар</option>
            <option value="Програм хангамж">Програм хангамж</option>
            <option value="Дизайн">Дизайн</option>
            <option value="Санхүү">Санхүү</option>
            <option value="Боловсрол">Боловсрол</option>
            <option value="Хүний нөөц">Хүний нөөц</option>
          </select>

          <select
            value={filters.daysPerWeek}
            onChange={(e) => setFilters({ ...filters, daysPerWeek: e.target.value })}
            className="border px-4 py-2 rounded text-sm"
          >
            <option value="all">7 хоногт хэдэн өдөр</option>
            <option value="2">2 өдөр</option>
            <option value="3">3 өдөр</option>
            <option value="4">4 өдөр</option>
            <option value="5">5 өдөр</option>
          </select>

          <select
            value={filters.shift}
            onChange={(e) => setFilters({ ...filters, shift: e.target.value })}
            className="border px-4 py-2 rounded text-sm"
          >
            <option value="all">Ажлын цаг</option>
            <option value="Өглөө">Өглөө</option>
            <option value="Орой">Орой</option>
          </select>
        </div>

        {/* Зарын картууд */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredJobs.map((job) => (
            <div
              key={job.id}
              className="relative border p-4 rounded shadow hover:shadow-xl transition-all hover:scale-[1.02] bg-white"
            >
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  toggleBookmark(job.id);
                }}
                className="absolute top-3 right-3 z-10"
                title="Хадгалах"
              >
                <FaBookmark
                  className={`w-5 h-5 ${
                    bookmarkedJobs.includes(job.id)
                      ? 'text-blue-600'
                      : 'text-gray-400 hover:text-blue-500'
                  }`}
                />
              </button>

              <h3 className="text-lg font-bold mb-1">{job.title}</h3>
              <p className="text-gray-600">{job.company}</p>
              <p className="text-sm text-gray-500">{job.description}</p>
              <p className="text-sm mt-2 text-gray-500">{job.location}</p>
              <p className="text-sm text-gray-500">
                {job.daysPerWeek} өдөр • {job.shift} ээлж
              </p>
            </div>
          ))}
        </div>

        {/* Бусад зар үзэх товч */}
        <div className="mt-10 flex justify-center">
          <button
            onClick={() => navigate('/student-jobs')}
            className="px-6 py-2 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition"
          >
            ➤ Бусад ажлын заруудыг үзэх
          </button>
        </div>
      </div>
    </>
  );
};

export default StudentDashboard;
