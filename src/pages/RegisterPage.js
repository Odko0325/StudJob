import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import logo from '../assets/studjob.png';
import Select from 'react-select';

const RegisterPage = () => {
  const { registerUser } = useContext(UserContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    role: 'student',
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
    // student
    school: '',
    major: '',
    // employer
    companyName: '',
    position: '',
  });

  const [error, setError] = useState('');

  const mongolianUniversities = [
    'ШУТИС', 'МУИС', 'МУБИС', 'СЭЗИС', 'ЭМШУИС', 'ХААИС',
    'Соёл Урлагийн Их Сургууль', 'Отгонтэнгэр Их Сургууль', 'Их Засаг ОУИС',
    'Улаанбаатар Эрдэм Их Сургууль', 'Хүмүүнлэгийн Ухааны Их Сургууль',
    'Монголын Үндэсний Их Сургууль', 'Орхон Их Сургууль',
    'Мэдээлэл Холбооны Технологийн Сургууль', 'Глобал Удирдагч Их Сургууль',
    'Их Монгол Их Сургууль', 'Ач Анагаах Ухааны Их Сургууль',
    'Мандах Их Сургууль', 'Нийслэлийн их сургууль'
  ];

  const universityOptions = mongolianUniversities.map((name) => ({
    value: name,
    label: name,
  }));

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phoneNumber || !formData.password) {
      error('Бүх талбарыг бөглөнө үү');
      return; 
    }

    if (formData.password !== formData.confirmPassword) {
      setError('Нууц үг таарахгүй байна');
      return;
    }

    if (formData.role === 'student' && (!formData.school || !formData.major)) {
      setError('Сургуулийн нэр болон мэргэжлээ оруулна уу');
      return;
    }

    if (formData.role === 'employer' && !formData.companyName) {
      setError('Байгууллагын нэрийг оруулна уу');
      return;
    }

    try {
      registerUser(formData);
      navigate('/login', {
        state: {
          successMessage: 'Бүртгэл амжилттай боллоо! Нэвтрэх хэсэгт очно уу',
          registeredEmail: formData.email,
        }
      });
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="bg-white rounded-lg shadow-md flex w-full max-w-5xl overflow-hidden">
        <div className="hidden md:flex w-1/2 items-center justify-center">
          <img src={logo} alt="Logo" className="max-w-xs" />
        </div>

        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Бүртгүүлэх</h2>

         

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="role" className="block font-medium mb-1">Бүртгүүлэх төрөл</label>
              <select
                id="role"
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded bg-white"
              >
                <option value="student">Оюутан</option>
                <option value="employer">Ажил олгогч</option>
              </select>
            </div>

            <div>
              <label htmlFor="firstName" className="block font-medium mb-1">Нэр</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded"
              />
            </div>

            <div>
              <label htmlFor="lastName" className="block font-medium mb-1">Овог</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded"
              />
            </div>

            <div>
              <label htmlFor="email" className="block font-medium mb-1">И-мэйл</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded"
              />
            </div>

            <div>
              <label htmlFor="phoneNumber" className="block font-medium mb-1">Утас</label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded"
              />
            </div>

            {formData.role === 'student' && (
              <>
                <div>
                  <label htmlFor="school" className="block font-medium mb-1">Сургуулийн нэр</label>
                  <Select
                    id="school"
                    options={universityOptions}
                    value={universityOptions.find(opt => opt.value === formData.school)}
                    onChange={selected => setFormData(prev => ({ ...prev, school: selected.value }))}
                    placeholder="Сургуулиа сонгоно уу"
                    className="react-select-container"
                    classNamePrefix="react-select"
                  />
                </div>

                <div>
                  <label htmlFor="major" className="block font-medium mb-1">Мэргэжил</label>
                  <input
                    type="text"
                    id="major"
                    name="major"
                    value={formData.major}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded"
                  />
                </div>
              </>
            )}

            {formData.role === 'employer' && (
              <>
                <div>
                  <label htmlFor="companyName" className="block font-medium mb-1">Байгууллагын нэр</label>
                  <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded"
                  />
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
              </>
            )}

            <div>
              <label htmlFor="password" className="block font-medium mb-1">Нууц үг</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded"
              />
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block font-medium mb-1">Нууц үг давтах</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded"
              />
            </div>

            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-200 font-semibold"
            >
              Бүртгүүлэх
            </button>
          </form>

          <div className="mt-6 text-center text-sm text-gray-600">
            <p>
              Бүртгэлтэй юу?{' '}
              <Link to="/login" className="text-blue-600 hover:underline font-medium">
                Нэвтрэх
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
