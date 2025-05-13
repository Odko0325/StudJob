import { useState, useRef, useEffect } from 'react';
import { FaBell } from 'react-icons/fa';

const NotificationDropdown = () => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Гадаа дарвал хаах
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const notifications = [
    {
      title: 'Шинэ нийтлэл',
      content: 'Бүтээмжээ сайжруулъя: 1 minute rule (+загвар)',
      time: '1 хоног',
    },
    {
      title: 'Шинэ нийтлэл',
      content: 'Hey HR! товхимол - TALENT SUMMIT 2025',
      time: '5 хоног',
    },
    {
      title: 'Шинэ нийтлэл',
      content: 'Бүтээмжээ сайжруулъя: Kanban',
      time: '2025-05-05',
    },
  ];

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setOpen(!open)}
        className="relative p-2 text-gray-700 hover:text-blue-600"
      >
        <FaBell className="w-5 h-5" />
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-80 bg-white border rounded-lg shadow-lg z-50">
          <div className="p-4 border-b font-semibold text-gray-700 flex justify-between">
            <span>Мэдэгдлүүд</span>
            <span className="text-sm text-purple-600 cursor-pointer hover:underline">Бүгд</span>
          </div>

          <div className="max-h-60 overflow-y-auto divide-y">
            {notifications.map((n, index) => (
              <div key={index} className="px-4 py-3 text-sm hover:bg-gray-50 cursor-pointer">
                <div className="font-medium text-gray-800">{n.title}</div>
                <div className="text-gray-600">{n.content}</div>
                <div className="text-gray-400 text-xs mt-1">{n.time}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default NotificationDropdown;
