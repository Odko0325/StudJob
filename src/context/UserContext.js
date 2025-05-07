// UserContext.js
import React, { createContext, useState, useEffect } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(() => {
    const saved = localStorage.getItem('currentUser') || sessionStorage.getItem('currentUser');
    return saved ? JSON.parse(saved) : null;
  });

  const registerUser = async (userData) => {
    const res = await fetch('http://localhost:5000/api/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData),
    });

    if (!res.ok) {
      const err = await res.json();
      throw new Error(err.message || 'Бүртгэл амжилтгүй боллоо');
    }

    return await res.json();
  };

  const loginUser = async (email, password, remember = false) => {
    const res = await fetch('http://localhost:5000/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    if (!res.ok) {
      const err = await res.json();
      throw new Error(err.message || 'Нэвтрэх амжилтгүй боллоо');
    }

    const user = await res.json();
    setCurrentUser(user);

    if (remember) {
      localStorage.setItem('currentUser', JSON.stringify(user));
    } else {
      sessionStorage.setItem('currentUser', JSON.stringify(user));
    }

    return user;
  };

  const logoutUser = () => {
    setCurrentUser(null);
    localStorage.removeItem('currentUser');
    sessionStorage.removeItem('currentUser');
  };

  const updateUser = async (updatedData) => {
    const res = await fetch(`http://localhost:5000/api/users/${currentUser.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedData),
    });

    if (!res.ok) {
      const err = await res.json();
      throw new Error(err.message || 'Шинэчлэхэд алдаа гарлаа');
    }

    const updatedUser = await res.json();
    setCurrentUser(updatedUser);

    if (localStorage.getItem('currentUser')) {
      localStorage.setItem('currentUser', JSON.stringify(updatedUser));
    } else {
      sessionStorage.setItem('currentUser', JSON.stringify(updatedUser));
    }
  };

  return (
    <UserContext.Provider value={{ currentUser, registerUser, loginUser, logoutUser, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};
