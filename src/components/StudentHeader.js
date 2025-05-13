import React, { useState, useContext, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../assets/studjob.png';
import { FaSearch, FaHeart, FaUser, FaBell } from 'react-icons/fa';
import { UserContext } from '../context/UserContext';

const Header = () => {
  const navigate = useNavigate();
  const { currentUser } = useContext(UserContext);
  const [searchTerm, setSearchTerm] = useState('');
  const [openNotif, setOpenNotif] = useState(false);
  const notifRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (notifRef.current && !notifRef.current.contains(e.target)) {
        setOpenNotif(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const notifications = [
    { title: 'Шинэ нийтлэл', text: '1 minute rule (+загвар)', time: '1 хоног' },
    { title: 'Товхимол', text: 'TALENT SUMMIT 2025', time: '5 хоног' },
    { title: 'Kanban хандлага', text: 'Бүтээмжийн өсөлт', time: '2025-05-05' },
  ];

  return (
    <header className="w-full bg-[#2C3E50] text-white py-4 relative">
      <div className="w-full px-6 flex flex-col gap-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4 cursor-pointer" onClick={() => navigate('/')}> 
            <img src={Logo} alt="Logo" className="w-60 h-16" />
          </div>

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

            <div className="flex items-center gap-4 relative">
              <button className="hover:text-blue-300 transition" title="Хадгалсан">
                <FaHeart className="w-5 h-5" />
              </button>

              <div ref={notifRef} className="relative">
                <button
                  onClick={() => setOpenNotif(!openNotif)}
                  className="hover:text-blue-300 transition"
                  title="Мэдэгдэл"
                >
                  <FaBell className="w-5 h-5" />
                </button>

                {openNotif && (
                  <div className="absolute right-0 mt-2 w-80 bg-white text-black rounded shadow-lg z-50 animate-fade-down">
                    <div className="px-4 py-2 border-b font-semibold text-gray-700 flex justify-between">
                      <span>Мэдэгдлүүд</span>
                      <span className="text-sm text-blue-600 cursor-pointer hover:underline">Бүгд</span>
                    </div>
                    <div className="max-h-60 overflow-y-auto divide-y">
                      {notifications.map((n, i) => (
                        <div key={i} className="px-4 py-3 text-sm hover:bg-gray-50 cursor-pointer">
                          <div className="font-medium text-gray-800">{n.title}</div>
                          <div className="text-gray-600">{n.text}</div>
                          <div className="text-gray-400 text-xs mt-1">{n.time}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <button onClick={() => navigate('/profile')} className="hover:text-blue-300 transition" title="Профайл">
                <FaUser className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="text-center text-lg text-white mt-2">
          Сайн байна уу, <span className="font-semibold">{currentUser?.firstName || 'Хэрэглэгч'}!</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
