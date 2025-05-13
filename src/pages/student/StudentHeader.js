import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../../assets/studjob.png';
import { FaSearch } from 'react-icons/fa';
import { UserContext } from '../../context/UserContext'; // ✅ нэмнэ

const Header = () => {
  const navigate = useNavigate();
  const { currentUser } = useContext(UserContext); // ✅ хэрэглэгчийг авна
  const [searchTerm, setSearchTerm] = useState('');

  // ✅ Ажлын зар товчны функц
  const handlePostJob = () => {
    if (!currentUser) {
      alert('Уучлаарай, та эхлээд нэвтэрсэн байх шаардлагатай.');
      return;
    }
    navigate('/company');
  };

  return (
    <header className="w-full bg-[#2C3E50] text-white py-6">
      <div className="max-w-screen-2xl mx-auto px-4 flex flex-col gap-4">
        {/* Дээд хэсэг: Logo + хайлт + нэвтрэх */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4" onClick={() => navigate('/')}>
            <img src={Logo} alt="Logo" className="w-60 h-16 cursor-pointer" />
          </div>

          <div className="flex-grow flex items-center justify-center w-full gap-4">
            <div className="flex items-center bg-gray-500 rounded-full w-full max-w-2xl px-4 py-2">
              <input
                type="text"
                placeholder="Хайх"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="flex-grow bg-transparent text-white placeholder-white focus:outline-none"
              />
              <button className="group">
                <FaSearch className="text-white group-hover:text-blue-400 transition w-4 h-4" />
              </button>
            </div>

            <button
              onClick={() => navigate('/login')}
              className="bg-white text-[#2C3E50] px-5 py-2 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Нэвтрэх
            </button>
          </div>
        </div>

        {/* Доод хэсэг: Бүртгүүлэх / Ажилтан хайх */}
        <div className="flex flex-col items-center gap-3 mt-2">
          <p className="text-lg font-medium">StudJob-д тавтай морил</p>
          <div className="flex justify-center gap-4">
            
            <button
  onClick={() => alert('Уучлаарай, та нэвтэрсэн байх шаардлагатай.')} // 👈 энэ хэсгийг нэмнэ
  className="bg-blue-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-600 transition"
>
  Ажлын зар оруулах
</button>

          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
