import React, { createContext, useState, useEffect } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  // Load users from localStorage or initialize with default admin
  const [users, setUsers] = useState(() => {
    const savedUsers = localStorage.getItem('jobPortalUsers');
    return savedUsers ? JSON.parse(savedUsers) : [
      {
        id: 1,
        firstName: 'Admin',
        lastName: 'User',
        email: 'admin@example.com',
        phoneNumber: '99119911',
        password: 'admin123',
        role: 'admin'
      }
    ];
  });

  // Track currently logged-in user
  const [currentUser, setCurrentUser] = useState(() => {
    const savedUser = localStorage.getItem('currentUser') || 
                      sessionStorage.getItem('currentUser');
    return savedUser ? JSON.parse(savedUser) : null;
  });

  // Save users to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('jobPortalUsers', JSON.stringify(users));
  }, [users]);

  // Register new user
  const registerUser = (userData) => {
    // Check if email already exists
    if (users.some(user => user.email === userData.email)) {
      throw new Error('Энэ имэйл хаяг аль хэдийн бүртгэгдсэн байна');
    }

    const newUser = {
      ...userData,
      id: Date.now() // Generate unique ID
    };

    setUsers(prevUsers => [...prevUsers, newUser]);
    return newUser;
  };

  // Login user
  const loginUser = (email, password, remember = false) => {
    const user = users.find(user => 
      user.email === email && 
      user.password === password
    );

    if (!user) {
      throw new Error('И-мэйл эсвэл нууц үг буруу байна');
    }

    setCurrentUser(user);
    
    // Store session based on "remember me" choice
    if (remember) {
      localStorage.setItem('currentUser', JSON.stringify(user));
    } else {
      sessionStorage.setItem('currentUser', JSON.stringify(user));
    }

    return user;
  };

  // Logout user
  const logoutUser = () => {
    setCurrentUser(null);
    localStorage.removeItem('currentUser');
    sessionStorage.removeItem('currentUser');
  };

  // Update user profile
  const updateUser = (updatedData) => {
    setUsers(prevUsers => 
      prevUsers.map(user => 
        user.id === currentUser.id ? { ...user, ...updatedData } : user
      )
    );
    
    // Update current user in storage
    const updatedUser = { ...currentUser, ...updatedData };
    setCurrentUser(updatedUser);
    
    if (localStorage.getItem('currentUser')) {
      localStorage.setItem('currentUser', JSON.stringify(updatedUser));
    } else {
      sessionStorage.setItem('currentUser', JSON.stringify(updatedUser));
    }
  };

  // Context value that will be provided to components
  const value = {
    users,
    currentUser,
    registerUser,
    loginUser,
    logoutUser,
    updateUser
  };

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
};