import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { UserProvider } from './context/UserContext';
import AppRoutes from './AppRoutes';
import './styles.css';

const App = () => {
  return (
    <Router>
      <UserProvider>
        <div className="app-container">
          <AppRoutes />
        </div>
      </UserProvider>
    </Router>
  );
};

export default App;