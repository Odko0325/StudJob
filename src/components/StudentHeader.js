import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../assets/studjob.png';
import { FaSearch, FaHeart, FaUser, FaBell } from 'react-icons/fa';
import { UserContext } from '../context/UserContext';

const Header = () => {
  const navigate = useNavigate();
  const { currentUser } = useContext(UserContext); // 👈 хэрэглэгчийн мэдээлэл
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <header className="w-full bg-[#2C3E50] text-white py-4">
      <div className="w-full px-6 flex flex-col gap-4">
        {/* Дээд хэсэг: Logo + хайлт + action icons */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo хэсэг */}
          <div className="flex items-center gap-4 cursor-pointer" onClick={() => navigate('/')}>
            <img src={Logo} alt="Logo" className="w-60 h-16" />
          </div>

          {/* Хайлт хэсэг */}
          <div className="flex-grow flex items-center justify-center w-full gap-4">
            <div className="flex items-center bg-gray-500 rounded-full w-full max-w-2xl px-4 py-2">
              <input
                type="text"
                placeholder="Хайх..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="flex-grow bg-transparent text-white placeholder-white focus:outline-none"
              />
              <button className="group">
                <FaSearch className="text-white group-hover:text-blue-400 transition w-4 h-4" />
              </button>
            </div>

            {/* Icons хэсэг */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => navigate('/saved')}
                className="hover:text-blue-300 transition"
                title="Хадгалсан ажлууд"
              >
                <FaHeart className="w-5 h-5" />
              </button>

              <button
                onClick={() => navigate('/notifications')}
                className="hover:text-blue-300 transition"
                title="Мэдэгдэл"
              >
                <FaBell className="w-5 h-5" />
              </button>

              <button
                onClick={() => navigate('/profile')}
                className="hover:text-blue-300 transition"
                title="Профайл"
              >
                <FaUser className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Доод хэсэг: Тавтай морил */}
        <div className="text-center text-lg text-white mt-2">
          Сайн байна уу, <span className="font-semibold">{currentUser?.firstName || 'Хэрэглэгч'}!</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
