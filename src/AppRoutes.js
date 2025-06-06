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
import SentCVs from './pages/student/sentCV';
import CompaniesWorked from './pages/student/CompaniesWorked';
import JobOffers from './pages/student/JobOffers';
import StudentJobSearch from './pages/student/studentJobSearch'; 
import EmployerHome from './pages/employer/EmployerHome'; 
import ViewReceivedCV from './pages/employer/ViewReceived';
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
          <Route path="/sent-cvs" element={<SentCVs />} />
          <Route path="/companies-worked" element={<CompaniesWorked />} />   
          <Route path="/job-offers" element={<JobOffers />} />
          <Route path="/student-jobs" element={<StudentJobSearch />} />
          <Route path="/employer" element={<EmployerHome />} />
          <Route path="/company" element={<CompanyRegister />} />
          <Route path="/view-received-cv" element={<ViewReceivedCV />} />
      


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
