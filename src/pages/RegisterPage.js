import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import logo from '../assets/studjob.png';
import Select from 'react-select';
import DifferentHeader from '../components/DifferentHeader'; // ✅ зөв import

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
    school: '',
    major: '',
    companyName: '',
    positionLevel: ''
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

  const universityOptions = mongolianUniversities.map(name => ({
    value: name,
    label: name,
  }));

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phoneNumber || !formData.password) {
      alert('Бүх талбарыг бөглөнө үү');
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      alert('Нууц үг таарахгүй байна');
      return;
    }

    if (formData.role === 'student' && (!formData.school || !formData.major)) {
      alert('Сургуулийн нэр болон мэргэжлээ оруулна уу');
      return;
    }

    if (formData.role === 'employer' && !formData.companyName) {
      alert('Байгууллагын нэрийг оруулна уу');
      return;
    }

    try {
      await registerUser(formData);
      alert('Бүртгэл амжилттай боллоо!');
      navigate('/login');
    } catch (err) {
      setError(err.message || 'Бүртгэл хийх үед алдаа гарлаа.');
    }
  };

  return (
    <>
      <DifferentHeader /> {/* ✅ энд header-ийг зөв харуулж байна */}

      <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
        <div className="bg-white rounded-lg shadow-md flex w-full max-w-5xl overflow-hidden">

          {/* Зүүн талын зураг */}
          <div className="hidden md:flex w-1/2 items-center justify-center bg-gray-100">
            <img src={logo} alt="Logo" className="max-w-xs" />
          </div>

          {/* Бүртгэлийн форм */}
          <div className="w-full md:w-1/2 p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Бүртгүүлэх</h2>

            {error && (
              <div className="bg-red-100 text-red-600 text-sm text-center px-4 py-2 rounded mb-4">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block font-medium mb-1">Бүртгүүлэх төрөл</label>
                <select
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded bg-white"
                >
                  <option value="student">Оюутан</option>
                  <option value="employer">Ажил олгогч</option>
                  <option value="admin">Админ</option>
                </select>
              </div>

              <div>
                <label className="block font-medium mb-1">Нэр</label>
                <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded" />
              </div>

              <div>
                <label className="block font-medium mb-1">Овог</label>
                <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded" />
              </div>

              <div>
                <label className="block font-medium mb-1">И-мэйл</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded" />
              </div>

              <div>
                <label className="block font-medium mb-1">Утас</label>
                <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded" />
              </div>

              {formData.role === 'student' && (
                <>
                  <div>
                    <label className="block font-medium mb-1">Сургуулийн нэр</label>
                    <Select
                      options={universityOptions}
                      value={universityOptions.find(opt => opt.value === formData.school)}
                      onChange={selected => setFormData(prev => ({ ...prev, school: selected.value }))}
                      placeholder="Сургуулиа сонгоно уу"
                    />
                  </div>

                  <div>
                    <label className="block font-medium mb-1">Мэргэжил</label>
                    <input type="text" name="major" value={formData.major} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded" />
                  </div>
                </>
              )}

              {formData.role === 'employer' && (
                <>
                  <div>
                    <label className="block font-medium mb-1">Байгууллагын нэр</label>
                    <input type="text" name="companyName" value={formData.companyName} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded" />
                  </div>

                  <div>
                    <label className="block font-medium mb-1">Албан тушаалын түвшин</label>
                    <select name="positionLevel" value={formData.positionLevel} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded bg-white">
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
                <label className="block font-medium mb-1">Нууц үг</label>
                <input type="password" name="password" value={formData.password} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded" />
              </div>

              <div>
                <label className="block font-medium mb-1">Нууц үг давтах</label>
                <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded" />
              </div>

              <button type="submit" className="w-full py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-200 font-semibold">
                Бүртгүүлэх
              </button>
            </form>

            <div className="mt-6 text-center text-sm text-gray-600">
              Бүртгэлтэй юу?{' '}
              <Link to="/login" className="text-blue-600 hover:underline font-medium">
                Нэвтрэх
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
