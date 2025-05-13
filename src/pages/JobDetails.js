import React, { useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { mockJobs } from '../mockData';
import { Phone, MapPin, Star } from 'lucide-react';
import { UserContext } from '../context/UserContext';
import Header from '../components/Header';

const JobDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { currentUser } = useContext(UserContext);

  const job = mockJobs.find((job) => job.id.toString() === id);

  if (!job) {
    return <div className="text-center text-red-500 mt-10">Ажлын зар олдсонгүй</div>;
  }

  const handleCvClick = () => {
    if (!currentUser || !currentUser.email) {
      alert('CV илгээхийн тулд та эхлээд нэвтэрнэ үү.');
      return;
    }
    navigate(`/jobs/${job.id}/apply`);
  };

  return (
    <>
      <Header />

      <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col lg:flex-row gap-6">
        {/* Зүүн тал: Ажлын дэлгэрэнгүй */}
        <div className="w-full lg:w-3/5">
          <div className="bg-white shadow-md rounded-xl p-6 mb-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">{job.company}</h1>
                <h2 className="text-xl text-gray-700">{job.title}</h2>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
              <div className="flex items-center gap-4 text-gray-600">
                <MapPin className="w-5 h-5" />
                <span>{job.location}</span>
                <Phone className="w-5 h-5 ml-6" />
                <span>{job.phone || '8888 8888'}</span>
              </div>

              <div className="flex gap-2">
                <button className="bg-gray-200 text-gray-700 px-4 py-1 rounded hover:bg-gray-300 transition">
                  Бүтэн цагаар
                </button>
                <button
                  className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700 transition"
                  onClick={handleCvClick}
                >
                  CV илгээх
                </button>
              </div>
            </div>
          </div>

          <div className="bg-white shadow-md rounded-xl p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Ажлын зарын мэдээлэл</h3>
            <p className="mb-4 text-gray-700">
              <strong>Цалин:</strong> {job.salary}
            </p>
            <div className="prose max-w-none text-gray-800">
              {job.description.split('\n').map((line, index) => (
                <p key={index} className="mb-2">{line.trim()}</p>
              ))}
            </div>
          </div>
        </div>

        {/* Баруун тал: Компанийн товч + review */}
        <div className="w-full lg:w-2/5 space-y-6">
          {/* Компанийн танилцуулга */}
          <div className="bg-white shadow-md rounded-xl p-6">
            <div className="flex items-center gap-4 mb-3">
              {job.logo && (
                <img
                  src={job.logo}
                  alt={`${job.company} logo`}
                  className="w-12 h-12 object-contain rounded"
                />
              )}
              <h3 className="text-lg font-semibold text-gray-900">Компанийн тухай</h3>
            </div>

            <p className="text-gray-700 text-sm">
              {job.company} нь оюутнуудад зориулсан практик дадлага, шинэлэг ажлын орчин бүрдүүлдэг компани юм.
              Бид чадвартай залууст боломж олгодог.
            </p>
          </div>

          {/* Review хэсэг */}
          <div className="bg-white shadow-md rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-3 text-gray-900">Оюутны үнэлгээ</h3>

            {[1, 2].map((_, idx) => (
              <div key={idx} className="mb-4 border-b pb-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-gray-800">Anonymous Student</span>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${i < 4 ? 'text-yellow-500' : 'text-gray-300'}`}
                        fill={i < 4 ? '#FACC15' : 'none'}
                      />
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 text-sm mt-2">
                  Сургуулийн хажуугаар ажиллахад яг тохирсон байсан. Баг хамт олон найрсаг, CV-д минь нэмэртэй болсон.
                </p>
              </div>
            ))}

            <button className="mt-2 text-blue-600 text-sm hover:underline">
              Бүх сэтгэгдлийг харах
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobDetail;
