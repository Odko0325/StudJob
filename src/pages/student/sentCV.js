import React, { useEffect, useState } from 'react';
import StudentHeader from '../../components/StudentHeader'; // ← StudentHeader-г зөв замаар import хийв

const SentCVs = () => {
  const [sentCVs, setSentCVs] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('sentCVs')) || [
      { jobTitle: 'График дизайнер', company: 'ABC ХХК', date: '2025-05-12' },
      { jobTitle: 'Front-end хөгжүүлэгч', company: 'TechSoft LLC', date: '2025-05-10' },
    ];
    setSentCVs(data);
  }, []);

  return (
    <>
      <StudentHeader /> {/* Header-ээ эхэнд харуулж байна */}

      <div className="max-w-4xl mx-auto p-6">
        <h2 className="text-2xl font-bold mb-4">Илгээсэн CV-үүд</h2>
        {sentCVs.length === 0 ? (
          <p className="text-gray-600">Та одоогоор CV илгээж амжаагүй байна.</p>
        ) : (
          <ul className="space-y-4">
            {sentCVs.map((cv, index) => (
              <li key={index} className="border rounded px-4 py-3 shadow-sm bg-white">
                <h3 className="font-semibold text-lg">{cv.jobTitle}</h3>
                <p className="text-gray-600">{cv.company}</p>
                <p className="text-sm text-gray-500">Илгээсэн огноо: {cv.date}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default SentCVs;
