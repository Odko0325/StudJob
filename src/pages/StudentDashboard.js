import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { mockJobs } from '../mockData';

const StudentDashboard = () => {
  const [jobs, setJobs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (!user) {
      navigate('/login');
    } else {
      setJobs(mockJobs);
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <div className="container">
      <div className="flex items-center justify-between mt-lg mb-lg">
        <h1>Student Dashboard</h1>
        <button onClick={handleLogout} className="btn btn-outline">Logout</button>
      </div>
      
      <div className="job-grid">
        {jobs.map(job => (
          <div key={job.id} className="card">
            <h3>{job.title}</h3>
            <p className="job-company">{job.company}</p>
            <p>{job.description}</p>
            <div className="job-meta mt-md">
              <span className="job-type">{job.type}</span>
              <span>{job.location}</span>
            </div>
            <button className="btn btn-primary w-full mt-md">Apply Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentDashboard;