import React from 'react';
import { mockEvents } from '../../mockData';
import khaan from '../../assets/khaan.png';
import Header from '../../components/StudentHeader';

const EventCard = ({ event }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 max-w-sm w-full hover:shadow-lg transition">
      <img
        src={khaan}
        alt={event.title}
        className="w-full h-48 object-cover rounded-lg mb-4"
      />
      <h3 className="text-xl font-semibold text-gray-800 mb-2 line-clamp-2">
        {event.title}
      </h3>
      <div className="flex items-center text-sm text-gray-500 mb-2">
        <span className="mr-4">
          <i className="fa-regular fa-calendar"></i> {event.date}
        </span>
        <span>
          <i className="fa-solid fa-location-dot"></i> {event.location}
        </span>
      </div>
      <p className="text-gray-600 text-sm line-clamp-4 mb-3">{event.description}</p>
      <button className="text-blue-600 font-medium hover:underline text-sm">
        Дэлгэрэнгүй
      </button>
    </div>
  );
};

const EventList = () => {
  return (
    <div>
      <Header />
      <div className="max-w-7xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Онцлох эвент</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventList;
