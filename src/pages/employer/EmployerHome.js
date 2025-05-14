import React, { useState, useEffect } from 'react';
import StudentHeader from '../../components/StudentHeader';
import { useNavigate } from 'react-router-dom';

const EmployerHome = () => {
  const navigate = useNavigate();
  const [stats, setStats] = useState({
    totalJobs: 5,
    receivedCVs: 12,
    hired: 3,
  });

  const [applicants, setApplicants] = useState([]);

  useEffect(() => {
    setApplicants([
      { name: 'Бат-Эрдэнэ', job: 'UX дизайнер', date: '2025-05-12' },
      { name: 'Сараа', job: 'График дизайнер', date: '2025-05-11' },
      { name: 'Тэмүүжин', job: 'Контент менежер', date: '2025-05-10' },
    ]);
  }, []);

  return (
    <>
      <StudentHeader />

      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded shadow">
            <p className="text-gray-600">Нийт зар</p>
            <h3 className="text-2xl font-bold">{stats.totalJobs}</h3>
          </div>

          {/* ✅ Clickable Хүлээн авсан CV */}
          <div
            className="bg-green-50 border-l-4 border-green-500 p-4 rounded shadow cursor-pointer hover:bg-green-100 transition"
            onClick={() => navigate('/view-received-cv')}
          >
            <p className="text-gray-600">Хүлээн авсан CV</p>
            <h3 className="text-2xl font-bold">{stats.receivedCVs}</h3>
          </div>

          <div className="bg-purple-50 border-l-4 border-purple-500 p-4 rounded shadow">
            <p className="text-gray-600">Ажилд авсан</p>
            <h3 className="text-2xl font-bold">{stats.hired}</h3>
          </div>
        </div>

        <div className="mb-6 text-right">
          <button
            onClick={() => navigate('/company')}
            className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition"
          >
            ➕ Зар нэмэх
          </button>
        </div>

        <div className="bg-white p-6 rounded shadow">
          <h3 className="text-lg font-semibold mb-4 text-gray-800">
            Сүүлийн CV илгээсэн хүмүүс
          </h3>
          {applicants.length === 0 ? (
            <p className="text-gray-500">Одоогоор горилогч илгээгүй байна.</p>
          ) : (
            <ul className="divide-y">
              {applicants.map((app, i) => (
                <li key={i} className="py-3 flex justify-between items-center">
                  <div>
                    <p className="font-medium text-gray-800">{app.name}</p>
                    <p className="text-sm text-gray-500">{app.job}</p>
                  </div>
                  <span className="text-sm text-gray-400">{app.date}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  );
};

export default EmployerHome;
