import React from 'react';
import { useParams } from 'react-router-dom';
import { mockJobs } from '../mockData';
import { Phone, MapPin } from 'lucide-react';

const JobDetail = () => {
  const { id } = useParams();
  const job = mockJobs.find((job) => job.id.toString() === id);

  if (!job) {
    return <div className="text-center text-red-500 mt-10">Ажлын зар олдсонгүй</div>;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Top Info */}
      <div className="bg-white shadow-md rounded-xl p-6 mb-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">{job.company}</h1>
            <h2 className="text-xl text-gray-700">{job.title}</h2>
          </div>
        </div>

        {/* Contact & Tags */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
          <div className="flex items-center gap-4 text-gray-600">
            <MapPin className="w-5 h-5" />
            <span>{job.location}</span>
            <Phone className="w-5 h-5 ml-6" />
            <span>{job.phone || '8888 8888'}</span>
          </div>

          <div className="flex gap-2">
            <button className="bg-gray-200 text-gray-700 px-4 py-1 rounded hover:bg-gray-300 transition">Бүтэн цагаар</button>
            <button className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700 transition">CV илгээх</button>
          </div>
        </div>
      </div>

      {/* Job Description Card */}
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
  );
};

export default JobDetail;
