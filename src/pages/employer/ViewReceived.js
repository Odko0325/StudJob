import React, { useEffect, useState } from 'react';
import StudentHeader from '../../components/StudentHeader';

const ViewReceivedCVs = () => {
  const [cvList, setCvList] = useState([]);

  useEffect(() => {
    // 🧪 Mock өгөгдөл (туршилтын зориулалттай)
    const dummy = [
      {
        id: 1,
        name: 'Бат-Эрдэнэ',
        email: 'baterdene@example.com',
        jobTitle: 'UI/UX дизайнер',
        sentDate: '2025-05-10',
        fileName: 'baterdene_cv.pdf'
      },
      {
        id: 2,
        name: 'Сараа',
        email: 'saraa@example.com',
        jobTitle: 'Контент зохиолч',
        sentDate: '2025-05-12',
        fileName: 'saraa_cv.pdf'
      }
    ];

    const existing = JSON.parse(localStorage.getItem('receivedCVs'));

    if (!existing || existing.length === 0) {
      localStorage.setItem('receivedCVs', JSON.stringify(dummy));
      setCvList(dummy);
    } else {
      setCvList(existing);
    }
  }, []);

  const handleAction = (id, action, interviewDate = null) => {
    const updatedList = cvList.map((cv) => {
      if (cv.id === id) {
        return { ...cv, status: action, interviewDate };
      }
      return cv;
    });
    setCvList(updatedList);
    localStorage.setItem('receivedCVs', JSON.stringify(updatedList));
  };

  return (
    <>
      <StudentHeader />
      <div className="max-w-5xl mx-auto px-6 py-8">
        <h2 className="text-2xl font-bold mb-6">Хүлээн авсан CV-үүд</h2>

        {cvList.length === 0 ? (
          <p className="text-gray-500">Одоогоор CV ирээгүй байна.</p>
        ) : (
          <ul className="space-y-6">
            {cvList.map((cv) => (
              <li key={cv.id} className="bg-white border rounded shadow p-5">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium text-lg">{cv.name}</p>
                    <p className="text-sm text-gray-600">{cv.jobTitle}</p>
                    <p className="text-sm text-gray-500">Огноо: {cv.sentDate}</p>
                    <p className="text-sm text-gray-500">И-мэйл: {cv.email}</p>
                  </div>

                  <div className="text-sm text-gray-600">
                    {cv.status === 'accepted' && (
                      <span className="text-green-600 font-semibold">Хүлээн авсан</span>
                    )}
                    {cv.status === 'rejected' && (
                      <span className="text-red-600 font-semibold">Татгалзсан</span>
                    )}
                    {cv.status === 'interview' && (
                      <span className="text-blue-600 font-semibold">
                        Ярилцлага: {cv.interviewDate}
                      </span>
                    )}
                  </div>
                </div>

                {!cv.status && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    <button
                      onClick={() => handleAction(cv.id, 'accepted')}
                      className="bg-green-600 text-white px-4 py-1.5 rounded hover:bg-green-700"
                    >
                      Хүлээн авах
                    </button>
                    <button
                      onClick={() => handleAction(cv.id, 'rejected')}
                      className="bg-red-600 text-white px-4 py-1.5 rounded hover:bg-red-700"
                    >
                      Татгалзах
                    </button>
                    <button
                      onClick={() => {
                        const date = prompt('Ярилцлагын огноо оруулна уу (жишээ: 2025-05-30 14:00)');
                        if (date) handleAction(cv.id, 'interview', date);
                      }}
                      className="bg-blue-600 text-white px-4 py-1.5 rounded hover:bg-blue-700"
                    >
                      Ярилцлага товлох
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

export default ViewReceivedCVs;
