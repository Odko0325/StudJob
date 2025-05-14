import React, { useEffect, useState } from 'react';
import StudentHeader from '../../components/StudentHeader';

const CompaniesWorked = () => {
  const [companies, setCompanies] = useState([]);
  const [reviewTexts, setReviewTexts] = useState({});

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('workedCompanies')) || [
      {
        company: 'MobiCom',
        jobTitle: 'Системийн инженер',
        year: '2023-2024',
        rating: 4,
        review: 'Баг хамт олон найрсаг, хөгжлийн орчин таалагдсан.'
      },
      {
        company: 'E-Mongolia',
        jobTitle: 'UX дизайнер',
        year: '2022',
        rating: 5,
        review: ''
      },
    ];
    setCompanies(data);
  }, []);

  const handleReviewChange = (index, value) => {
    setReviewTexts((prev) => ({ ...prev, [index]: value }));
  };

  const handleReviewSubmit = (index) => {
    const updatedCompanies = [...companies];
    updatedCompanies[index].review = reviewTexts[index] || '';
    setCompanies(updatedCompanies);
    localStorage.setItem('workedCompanies', JSON.stringify(updatedCompanies));
    alert('Сэтгэгдэл хадгалагдлаа');
  };

  const renderStars = (count) => (
    [...Array(5)].map((_, i) => (
      <span key={i} className={i < count ? 'text-yellow-400' : 'text-gray-300'}>★</span>
    ))
  );

  return (
    <>
      <StudentHeader /> {/* ← StudentHeader-г дэлгэцийн эхэнд харуулж байна */}

      <div className="max-w-4xl mx-auto p-6">
        <h2 className="text-2xl font-bold mb-4">Ажилласан компаниуд</h2>

        {companies.length === 0 ? (
          <p className="text-gray-600">Ажилласан компанийн мэдээлэл алга байна.</p>
        ) : (
          <ul className="space-y-6">
            {companies.map((c, i) => (
              <li key={i} className="border rounded px-5 py-4 bg-white shadow-sm">
                <h3 className="text-lg font-semibold">{c.company}</h3>
                <p className="text-sm text-gray-700">{c.jobTitle} ({c.year})</p>
                <div className="mt-1">{renderStars(c.rating)}</div>

                {c.review ? (
                  <div className="mt-3 text-sm text-gray-800 italic border-l-4 border-blue-500 pl-4 bg-blue-50 py-2">
                    “{c.review}”
                  </div>
                ) : (
                  <div className="mt-4">
                    <textarea
                      rows={3}
                      placeholder="Сэтгэгдэл бичих..."
                      value={reviewTexts[i] || ''}
                      onChange={(e) => handleReviewChange(i, e.target.value)}
                      className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
                    />
                    <button
                      onClick={() => handleReviewSubmit(i)}
                      className="mt-2 bg-blue-600 text-white px-4 py-1.5 text-sm rounded hover:bg-blue-700 transition"
                    >
                      Илгээх
                    </button>
                  </div>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default CompaniesWorked;
