import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import AdminDashboard from './pages/AdminDashboard';
import StudentDashboard from './pages/StudentDashboard';
import JobDetails from './pages/JobDetails';
import Footer from './components/Footer';
import CompanyRegister from './pages/employer/CompanyRegisterForm';
import EmployeeRegisterForm from './pages/employer/EmployeeRegister';
import ProtectedRoute from './components/ProtectedRoute';
import EventList from './pages/student/Event';
import MyCV from './pages/student/MyCV';


const AppRoutes = () => {
  return (
    <div className="app-container">
      <main className="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/student" element={<StudentDashboard />} />
          <Route path="/jobs/:id" element={<JobDetails />} />
          <Route path="/events" element={<EventList />} />
          <Route path="/mycv" element={<MyCV />} />
          


          <Route
            path="/company"
            element={
              <ProtectedRoute>
                <CompanyRegister />
              </ProtectedRoute>
            }
          />

          <Route path="/register-employee" element={<EmployeeRegisterForm />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default AppRoutes;
