import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import EmployerHeader from '../../components/StudentHeader';

const JobPostForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    companyType: '',
    schedule: '',
    salary: '',
    companyName: '',
    position: '',
    responsibilities: '',
    requirements: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCancel = () => {
    navigate('/employer'); // Болих товч → буцах
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { companyType, schedule, salary, companyName, position, responsibilities, requirements } = formData;

    if (!companyType || !schedule || !salary || !companyName || !position || !responsibilities || !requirements) {
      toast.error('Бүх талбарыг бөглөнө үү.');
      return;
    }

    console.log('Зар илгээгдлээ:', formData);
    toast.success('Зар амжилттай илгээгдлээ!');

    setTimeout(() => {
      navigate('/employer'); // 👉 Цааш ажилтны мэдээлэл бөглөх хуудсанд шилжинэ
    }, 1000);
  };

  return (
    <>
      <EmployerHeader />
      <ToastContainer position="top-right" autoClose={3000} />
      <div className="min-h-screen bg-gray-100 flex flex-col justify-between">
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-8 mt-12">
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Dropdowns */}
            <div>
              <label className="block mb-2 font-medium">Компанийн хэлбэр</label>
              <select name="companyType" value={formData.companyType} onChange={handleChange} className="w-full px-4 py-2 rounded bg-gray-200">
                <option value="">Сонгох</option>
                <option value="ХХК">ХХК</option>
                <option value="ТӨХК">ТӨХК</option>
                <option value="ББСБ">ББСБ</option>
              </select>
            </div>

            <div>
              <label className="block mb-2 font-medium">Цагийн хуваарь</label>
              <select name="schedule" value={formData.schedule} onChange={handleChange} className="w-full px-4 py-2 rounded bg-gray-200">
                <option value="">Сонгох</option>
                <option value="Бүтэн цагийн">Бүтэн цагийн</option>
                <option value="Цагийн">Цагийн</option>
                <option value="Дадлага">Дадлага</option>
              </select>
            </div>

            {/* Text Inputs */}
            <div>
              <label className="block mb-2 font-medium">Компанийн нэр</label>
              <input type="text" name="companyName" value={formData.companyName} onChange={handleChange} className="w-full px-4 py-2 rounded bg-gray-200" />
            </div>

            <div>
              <label className="block mb-2 font-medium">Цалин</label>
              <select name="salary" value={formData.salary} onChange={handleChange} className="w-full px-4 py-2 rounded bg-gray-200">
                <option value="">Сонгох</option>
                <option value="1,000,000₮">1,000,000₮</option>
                <option value="1,500,000₮">1,500,000₮</option>
                <option value="2,000,000₮+">2,000,000₮+</option>
              </select>
            </div>

            <div className="md:col-span-2">
              <label className="block mb-2 font-medium">Албан тушаал</label>
              <input type="text" name="position" value={formData.position} onChange={handleChange} className="w-full px-4 py-2 rounded bg-gray-200" />
            </div>

            {/* Textareas */}
            <div className="md:col-span-2">
              <label className="block mb-2 font-medium">Гүйцэтгэх үндсэн үүрэг</label>
              <textarea name="responsibilities" rows="4" value={formData.responsibilities} onChange={handleChange} className="w-full px-4 py-2 rounded bg-gray-200" />
            </div>

            <div className="md:col-span-2">
              <label className="block mb-2 font-medium">Шаардлагууд</label>
              <textarea name="requirements" rows="4" value={formData.requirements} onChange={handleChange} className="w-full px-4 py-2 rounded bg-gray-200" />
            </div>

            {/* Buttons */}
            <div className="md:col-span-2 flex justify-end gap-4 mt-4">
              <button type="button" onClick={handleCancel} className="bg-gray-500 text-white px-6 py-2 rounded hover:bg-gray-600">
                Болих
              </button>
              <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
                Үргэлжлүүлэх
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default JobPostForm;
