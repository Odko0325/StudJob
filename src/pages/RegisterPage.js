import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

const RegisterPage = () => {
  const { registerUser } = useContext(UserContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
    role: 'student'
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setError('Нууц үг таарахгүй байна');
      return;
    }

    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phoneNumber || !formData.password) {
      setError('Бүх талбарыг бөглөнө үү');
      return;
    }

    try {
      registerUser({
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phoneNumber: formData.phoneNumber,
        password: formData.password,
        role: formData.role
      });
      navigate('/login', {
        state: {
          successMessage: 'Бүртгэл амжилттай боллоо! Нэвтрэх хэсэгт очно уу',
          registeredEmail: formData.email
        }
      });
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white rounded-lg shadow-md p-8 w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Бүртгүүлэх</h2>

        {error && (
          <div className="bg-red-100 text-red-600 text-sm text-center px-4 py-2 rounded mb-4">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="firstName" className="block font-medium mb-1">Нэр*</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-400"
            />
          </div>

          <div>
            <label htmlFor="lastName" className="block font-medium mb-1">Овог*</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-400"
            />
          </div>

          <div>
            <label htmlFor="email" className="block font-medium mb-1">И-мэйл*</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-400"
            />
          </div>

          <div>
            <label htmlFor="phoneNumber" className="block font-medium mb-1">Утасны дугаар*</label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              placeholder="99119911"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-400"
            />
          </div>

          <div>
            <label htmlFor="password" className="block font-medium mb-1">Нууц үг*</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              minLength="6"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-400"
            />
          </div>

          <div>
            <label htmlFor="confirmPassword" className="block font-medium mb-1">Нууц үг давтах*</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-400"
            />
          </div>

          <div>
            <label htmlFor="role" className="block font-medium mb-1">Бүртгүүлэх эрх*</label>
            <select
              id="role"
              name="role"
              value={formData.role}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded bg-white focus:outline-none focus:ring focus:border-blue-400"
            >
              <option value="student">Оюутан</option>
              <option value="employer">Ажил олгогч</option>
            </select>
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
  );
};

export default RegisterPage;
