import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import logo from '../assets/studjob.png';
import DifferentHeader from '../components/DifferentHeader'; // ✅ зөв import

const LoginPage = () => {
  const { loginUser } = useContext(UserContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const user = await loginUser(email, password, rememberMe);

      if (user && user.role) {
        if (user.role === 'admin') {
          navigate('/admin');
        } else if (user.role === 'employer') {
          navigate('/employer');
        } else {
          navigate('/student');
        }
      } else {
        setError('Хэрэглэгчийн мэдээлэл буруу байна.');
      }
    } catch (err) {
      setError(err.message || 'И-мэйл эсвэл нууц үг буруу байна.');
    }
  };

  return (
    <>
      <DifferentHeader /> {/* ✅ header-г оруулсан хэсэг */}
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-white shadow-md rounded-lg flex flex-col md:flex-row w-full h-screen">

          {/* Зүүн талын зураг */}
          <div className="hidden md:flex md:w-1/2 items-center justify-center bg-gray-50">
            <img src={logo} alt="Logo" className="max-w-xs" />
          </div>

          {/* Баруун талын логин форм */}
          <div className="w-full md:w-1/2 flex items-center justify-center p-8">
            <div className="w-full max-w-md">
              <h2 className="text-3xl font-semibold text-gray-800 mb-6">Нэвтрэх</h2>

              {error && (
                <div className="bg-red-100 text-red-600 text-sm text-center px-4 py-2 rounded mb-4">
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="email" className="block mb-1 text-sm font-medium text-gray-700">И-мэйл</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-400"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="password" className="block mb-1 text-sm font-medium text-gray-700">Нууц үг</label>
                  <input
                    type="password"
                    id="password"
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-400"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>

                <div className="flex items-center justify-between text-sm">
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                      className="accent-blue-500"
                    />
                    <span>Сануулах</span>
                  </label>
                  <Link to="/forgot-password" className="text-blue-600 hover:underline">
                    Нууц үг мартсан?
                  </Link>
                </div>

                <button
                  type="submit"
                  className="w-full py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-200 font-semibold"
                >
                  Нэвтрэх
                </button>
              </form>

              <div className="mt-6 text-sm text-center text-gray-600">
                Бүртгэлгүй юу?{' '}
                <Link to="/register" className="text-blue-600 hover:underline font-medium">
                  Бүртгүүлэх
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default LoginPage;
