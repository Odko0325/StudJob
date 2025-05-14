import React, { useEffect, useState } from 'react';
import StudentHeader from '../../components/StudentHeader';

const JobOffers = () => {
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('jobOffers')) || [
      {
        id: 1,
        jobTitle: 'Backend хөгжүүлэгч',
        company: 'InnoSoft LLC',
        date: '2025-05-13',
        status: 'pending',
      },
      {
        id: 2,
        jobTitle: 'Маркетингийн туслах',
        company: 'Next Marketing',
        date: '2025-05-10',
        status: 'pending',
      },
    ];
    setOffers(data);
  }, []);

  const updateStatus = (id, status) => {
    const updated = offers.map((o) =>
      o.id === id ? { ...o, status } : o
    );
    setOffers(updated);
    localStorage.setItem('jobOffers', JSON.stringify(updated));
  };

  return (
    <>
      <StudentHeader />
      <div className="max-w-4xl mx-auto p-6">
        <h2 className="text-2xl font-bold mb-4">Ажлын санал</h2>

        {offers.length === 0 ? (
          <p className="text-gray-600">Одоогоор танд ирсэн санал байхгүй байна.</p>
        ) : (
          <ul className="space-y-4">
            {offers.map((offer) => (
              <li key={offer.id} className="border rounded bg-white px-4 py-4 shadow-sm">
                <div className="flex justify-between items-center mb-2">
                  <div>
                    <h3 className="text-lg font-semibold">{offer.jobTitle}</h3>
                    <p className="text-gray-700">{offer.company}</p>
                    <p className="text-sm text-gray-500">Санал ирсэн огноо: {offer.date}</p>
                  </div>
                  {offer.status === 'accepted' ? (
                    <span className="text-green-600 font-medium">Хүлээн зөвшөөрсөн</span>
                  ) : offer.status === 'rejected' ? (
                    <span className="text-red-600 font-medium">Татгалзсан</span>
                  ) : (
                    <div className="flex gap-2">
                      <button
                        onClick={() => updateStatus(offer.id, 'accepted')}
                        className="bg-green-600 text-white px-3 py-1 rounded text-sm hover:bg-green-700"
                      >
                        Хүлээн авах
                      </button>
                      <button
                        onClick={() => updateStatus(offer.id, 'rejected')}
                        className="bg-red-500 text-white px-3 py-1 rounded text-sm hover:bg-red-600"
                      >
                        Татгалзах
                      </button>
                    </div>
                  )}
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default JobOffers;
