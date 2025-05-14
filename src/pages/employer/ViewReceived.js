import React, { useEffect, useState } from 'react';
import StudentHeader from '../../components/StudentHeader'; // Хэрэв тусгай EmployerHeader байгаа бол солино

const ViewReceivedCVs = () => {
  const [cvList, setCvList] = useState([]);

  useEffect(() => {
    // LocalStorage-оос CV мэдээллийг татах
    const data = JSON.parse(localStorage.getItem('receivedCVs')) || [
      {
        id: 1,
        name: 'Бат-Эрдэнэ',
        email: 'baterdene@example.com',
        jobTitle: 'UI/UX дизайнер',
        sentDate: '2025-05-10',
        fileName: 'baterdene_cv.pdf',
      },
      {
        id: 2,
        name: 'Сараа',
        email: 'saraa@nomio.mn',
        jobTitle: 'График дизайнер',
        sentDate: '2025-05-08',
        fileName: 'saraa_resume.pdf',
      },
    ];
    setCvList(data);
  }, []);

  return (
    <>
      <StudentHeader />
      <div className="max-w-5xl mx-auto px-6 py-8">
        <h2 className="text-2xl font-bold mb-6">Хүлээн авсан CV-үүд</h2>

        {cvList.length === 0 ? (
          <p className="text-gray-500">Одоогоор хүлээн авсан CV алга байна.</p>
        ) : (
          <ul className="space-y-4">
            {cvList.map((cv) => (
              <li
                key={cv.id}
                className="bg-white shadow border rounded p-5 flex flex-col md:flex-row md:items-center md:justify-between"
              >
                <div>
                  <p className="text-lg font-medium text-gray-800">{cv.name}</p>
                  <p className="text-sm text-gray-600">{cv.jobTitle}</p>
                  <p className="text-sm text-gray-500">Илгээсэн: {cv.sentDate}</p>
                  <p className="text-sm text-gray-500">И-мэйл: {cv.email}</p>
                </div>
                <div className="mt-3 md:mt-0">
                  <button
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-sm"
                    onClick={() => alert(`Файл татаж авах: ${cv.fileName}`)}
                  >
                    Файл үзэх
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default ViewReceivedCVs;
