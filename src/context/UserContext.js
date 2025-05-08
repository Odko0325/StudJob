import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(() => {
    const saved =
      localStorage.getItem('currentUser') || sessionStorage.getItem('currentUser');
    const parsed = saved ? JSON.parse(saved) : null;
    return parsed && parsed.email ? parsed : null;
  });

  // ⛳ Бүртгүүлэх
  const registerUser = (userData) => {
    const users = JSON.parse(localStorage.getItem('users')) || [];

    const existing = users.find(u => u.email === userData.email);
    if (existing) {
      throw new Error('Энэ и-мэйл аль хэдийн бүртгэгдсэн байна.');
    }

    const newUser = {
      id: Date.now(),
      ...userData,
    };

    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    return { success: true };
  };

  // ⛳ Нэвтрэх (async болголоо!)
  const loginUser = async (email, password, remember = false) => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const found = users.find(u => u.email === email && u.password === password);

    if (!found || !found.email) {
      throw new Error('И-мэйл эсвэл нууц үг буруу байна.');
    }

    setCurrentUser(found);

    const storage = remember ? localStorage : sessionStorage;
    storage.setItem('currentUser', JSON.stringify(found));

    return found;
  };

  // ⛳ Гарах
  const logoutUser = () => {
    setCurrentUser(null);
    localStorage.removeItem('currentUser');
    sessionStorage.removeItem('currentUser');
  };

  // ⛳ Хэрэглэгчийн мэдээлэл шинэчлэх
  const updateUser = (updatedData) => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const index = users.findIndex(u => u.id === currentUser?.id);

    if (index !== -1) {
      const updatedUser = { ...users[index], ...updatedData };
      users[index] = updatedUser;

      localStorage.setItem('users', JSON.stringify(users));
      setCurrentUser(updatedUser);

      const storage = localStorage.getItem('currentUser') ? localStorage : sessionStorage;
      storage.setItem('currentUser', JSON.stringify(updatedUser));
    }
  };

  return (
    <UserContext.Provider
      value={{
        currentUser,
        registerUser,
        loginUser,
        logoutUser,
        updateUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
