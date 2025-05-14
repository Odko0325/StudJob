import React, { useState } from 'react';
import StudentHeader from '../../components/StudentHeader';

const mockJobs = [
  {
    id: 1,
    title: 'Сургуулийн хажуугийн касс',
    company: 'Мөнх Сүлд ХХК',
    category: 'Цагийн ажил',
    daysPerWeek: 3,
    shift: 'Өглөө',
    salary: '25,000₮/өдөр',
    location: 'Сансар',
  },
  {
    id: 2,
    title: 'Онлайн контент бичигч',
    company: 'Digital Nomads',
    category: 'Мэргэжлийн ажил',
    daysPerWeek: 5,
    shift: 'Орой',
    salary: '1,200,000₮',
    location: 'Remote',
  },
  {
    id: 3,
    title: 'Бэлтгэгч (өглөө ээлж)',
    company: 'FoodZone',
    category: 'Цагийн ажил',
    daysPerWeek: 4,
    shift: 'Өглөө',
    salary: '30,000₮/өдөр',
    location: 'Зайсан',
  },
];

const StudentJobSearch = () => {
  const [filters, setFilters] = useState({
    category: 'all',
    shift: 'all',
    daysPerWeek: 'all',
  });

  const filteredJobs = mockJobs.filter((job) => {
    return (
      (filters.category === 'all' || job.category === filters.category) &&
      (filters.shift === 'all' || job.shift === filters.shift) &&
      (filters.daysPerWeek === 'all' || job.daysPerWeek === parseInt(filters.daysPerWeek))
    );
  });

  return (
    <>
      <StudentHeader />
      <div className="max-w-6xl mx-auto px-4 py-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Оюутанд тохирсон ажлын зарууд</h2>

        {/* Filter хэсэг */}
        <div className="flex flex-wrap gap-4 mb-6">
          <select
            value={filters.category}
            onChange={(e) => setFilters({ ...filters, category: e.target.value })}
            className="border rounded px-4 py-2 text-sm"
          >
            <option value="all">Ажлын төрөл</option>
            <option value="Цагийн ажил">Цагийн ажил</option>
            <option value="Мэргэжлийн ажил">Мэргэжлийн ажил</option>
          </select>

          <select
            value={filters.shift}
            onChange={(e) => setFilters({ ...filters, shift: e.target.value })}
            className="border rounded px-4 py-2 text-sm"
          >
            <option value="all">Ажиллах цаг</option>
            <option value="Өглөө">Өглөө</option>
            <option value="Орой">Орой</option>
          </select>

          <select
            value={filters.daysPerWeek}
            onChange={(e) => setFilters({ ...filters, daysPerWeek: e.target.value })}
            className="border rounded px-4 py-2 text-sm"
          >
            <option value="all">7 хоногт хэдэн өдөр</option>
            <option value="2">2 өдөр</option>
            <option value="3">3 өдөр</option>
            <option value="4">4 өдөр</option>
            <option value="5">5 өдөр</option>
          </select>
        </div>

        {/* Зар жагсаалт */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredJobs.length === 0 ? (
            <p className="col-span-3 text-gray-500">Тохирох ажил олдсонгүй</p>
          ) : (
            filteredJobs.map((job) => (
              <div
                key={job.id}
                className="border rounded p-4 bg-white shadow-sm hover:shadow-lg transition"
              >
                <h3 className="font-semibold text-lg">{job.title}</h3>
                <p className="text-gray-600">{job.company}</p>
                <p className="text-sm text-gray-500">{job.location}</p>
                <p className="text-sm mt-1">Цалин: {job.salary}</p>
                <p className="text-sm text-gray-500">
                  Ажиллах өдрүүд: {job.daysPerWeek} өдөр, {job.shift} ээлж
                </p>
                <button className="mt-3 text-blue-600 hover:underline text-sm">
                  Дэлгэрэнгүй
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default StudentJobSearch;
