import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { mockJobs } from '../../mockData';
import StudentHeader from '../../components/StudentHeader';

const ApplyCV = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const job = mockJobs.find((j) => j.id.toString() === id);

  const [form, setForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    university: '',
    major: '',
    gradYear: '',
    skills: '',
    experience: '',
    languages: '',
    aboutMe: '',
    file: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const cvData = JSON.parse(localStorage.getItem('cvSubmissions')) || [];
    cvData.push({
      jobId: id,
      jobTitle: job?.title,
      ...form,
      fileName: form.file?.name || '',
      submittedAt: new Date().toISOString(),
    });
    localStorage.setItem('cvSubmissions', JSON.stringify(cvData));

    alert('CV амжилттай илгээгдлээ!');
    navigate('/submitted');
  };

  return (
    <>
      <StudentHeader />
      <div className="max-w-3xl mx-auto px-4 py-10 bg-white shadow-lg rounded">
        <h2 className="text-2xl font-bold mb-6">CV илгээх: {job?.title}</h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input name="fullName" required placeholder="Овог нэр" onChange={handleChange} className="border p-2 rounded col-span-1" />
          <input name="email" type="email" required placeholder="Имэйл" onChange={handleChange} className="border p-2 rounded col-span-1" />
          <input name="phone" required placeholder="Утасны дугаар" onChange={handleChange} className="border p-2 rounded col-span-1" />
          <input name="university" required placeholder="Сургууль" onChange={handleChange} className="border p-2 rounded col-span-1" />
          <input name="major" required placeholder="Мэргэжил" onChange={handleChange} className="border p-2 rounded col-span-1" />
          <input name="gradYear" required placeholder="Төгсөх он (жишээ: 2026)" onChange={handleChange} className="border p-2 rounded col-span-1" />
          <input name="skills" placeholder="Ур чадвар (ж: HTML, Python...)" onChange={handleChange} className="border p-2 rounded col-span-2" />
          <textarea name="experience" rows={2} placeholder="Туршлага (заавал биш)" onChange={handleChange} className="border p-2 rounded col-span-2" />
          <input name="languages" placeholder="Гадаад хэл (ж: Англи B2, Солонгос A1)" onChange={handleChange} className="border p-2 rounded col-span-2" />
          <textarea name="aboutMe" rows={3} placeholder="Өөрийгөө товч танилцуулах" onChange={handleChange} className="border p-2 rounded col-span-2" />
          <input name="file" type="file" accept=".pdf,.doc,.docx" onChange={handleChange} className="col-span-2" />

          <button
            type="submit"
            className="col-span-2 bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            Илгээх
          </button>
        </form>
      </div>
    </>
  );
};

export default ApplyCV;
