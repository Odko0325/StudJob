import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { UserProvider } from './context/UserContext';
import AppRoutes from './AppRoutes';
import './styles.css';

const App = () => {
  return (
    <UserProvider> {/* 👈 Энийг Router-н ГАДНА тавина */}
      <Router>
        <div className="app-container">
          <AppRoutes />
        </div>
      </Router>
    </UserProvider>
  );
};

export default App;
