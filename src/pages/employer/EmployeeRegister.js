import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EmployeeRegisterForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    positionLevel: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { firstName, lastName, positionLevel, email, phone, password, confirmPassword } = formData;
    if (!firstName || !lastName || !positionLevel || !email || !phone || !password || !confirmPassword) {
      toast.error('Бүх талбарыг бүрэн бөглөнө үү.');
      return;
    }

    if (password !== confirmPassword) {
      toast.error('Нууц үг таарахгүй байна!');
      return;
    }

    toast.success('Амжилттай бүртгэгдлээ!');
    console.log('Ажилтан бүртгэгдлээ:', formData);
    // сервер рүү илгээх логик энд орно
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <ToastContainer position="top-right" autoClose={3000} />
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-2xl">
        <h2 className="text-2xl font-semibold text-center mb-6">Ажилтны бүртгэлийн хуудас</h2>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block mb-2 font-medium">Овог</label>
            <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} className="w-full px-4 py-2 rounded bg-gray-200" />
          </div>
          <div>
            <label className="block mb-2 font-medium">Нэр</label>
            <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} className="w-full px-4 py-2 rounded bg-gray-200" />
          </div>
          <div className="md:col-span-2">
            <label className="block mb-2 font-medium">Албан тушаалын түвшин</label>
            <select name="positionLevel" value={formData.positionLevel} onChange={handleChange} className="w-full px-4 py-2 rounded bg-gray-200">
              <option value="">Сонгох</option>
              <option value="Удирдах">Удирдах ажилтан</option>
              <option value="Ахлах">Ахлах ажилтан</option>
              <option value="Дунд шатны">Дунд шатны ажилтан</option>
              <option value="Анхан">Анхан шатны ажилтан</option>
              <option value="Гэрээт">Гэрээт ажилтан</option>
              <option value="Цагийн">Цагийн ажилтан</option>
              <option value="Бусад">Бусад</option>
            </select>
          </div>
          <div>
            <label className="block mb-2 font-medium">И-мэйл</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-2 rounded bg-gray-200" />
          </div>
          <div>
            <label className="block mb-2 font-medium">Утасны дугаар</label>
            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-2 rounded bg-gray-200" />
          </div>
          <div>
            <label className="block mb-2 font-medium">Нууц үг</label>
            <input type="password" name="password" value={formData.password} onChange={handleChange} className="w-full px-4 py-2 rounded bg-gray-200" />
          </div>
          <div>
            <label className="block mb-2 font-medium">Нууц үг давтах</label>
            <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} className="w-full px-4 py-2 rounded bg-gray-200" />
          </div>
          <div className="md:col-span-2 flex justify-end mt-4">
            <button type="submit" className="bg-[#2C3E50] text-white px-6 py-2 rounded hover:bg-[#1f2e3c] transition">
              Бүртгүүлэх
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EmployeeRegisterForm;