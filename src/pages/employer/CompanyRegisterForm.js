import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCancel = () => {
    navigate('/');
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    const { companyType, schedule, salary, companyName, position, responsibilities, requirements } = formData;
    if (!companyType || !schedule || !salary || !companyName || !position || !responsibilities || !requirements) {
      toast.error('Бүх талбарыг бөглөнө үү.');
      return;
    }

    console.log('Зар илгээгдлээ:', formData);
    navigate('/register-employee'); // дараагийн хуудсанд шилжинэ
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-between">
      <ToastContainer position="top-right" autoClose={3000} />
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
            <label className="block mb-2 font-medium">Хайж буй ажилтны цагийн хуваарь</label>
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
            <label className="block mb-2 font-medium">Цалингийн хэмжээ</label>
            <select name="salary" value={formData.salary} onChange={handleChange} className="w-full px-4 py-2 rounded bg-gray-200">
              <option value="">Сонгох</option>
              <option value="1,000,000₮">1,000,000₮</option>
              <option value="1,500,000₮">1,500,000₮</option>
              <option value="2,000,000₮+">2,000,000₮+</option>
            </select>
          </div>
          <div className="md:col-span-2">
            <label className="block mb-2 font-medium">Хайж буй албан тушаалтан</label>
            <input type="text" name="position" value={formData.position} onChange={handleChange} className="w-full px-4 py-2 rounded bg-gray-200" />
          </div>

          {/* Textareas */}
          <div className="md:col-span-2">
            <label className="block mb-2 font-medium">Гүйцэтгэх үндсэн үүрэг</label>
            <textarea name="responsibilities" rows="4" value={formData.responsibilities} onChange={handleChange} className="w-full px-4 py-2 rounded bg-gray-200"></textarea>
          </div>
          <div className="md:col-span-2">
            <label className="block mb-2 font-medium">Ажлын байранд тавигдах шаардлага</label>
            <textarea name="requirements" rows="4" value={formData.requirements} onChange={handleChange} className="w-full px-4 py-2 rounded bg-gray-200"></textarea>
          </div>

          {/* Buttons */}
          <div className="md:col-span-2 flex justify-end gap-4 mt-4">
            <button type="button" onClick={handleCancel} className="bg-[#2C3E50] text-white px-6 py-2 rounded">Болих</button>
            <button type="submit" className="bg-[#2C3E50] text-white px-6 py-2 rounded">Үргэлжлүүлэх</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default JobPostForm;
