import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { mockJobs } from '../mockData';

const AdminDashboard = () => {
  const [jobs, setJobs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (!user || user.role !== 'admin') {
      navigate('/login');
    } else {
      setJobs(mockJobs);
    }
  }, [navigate]);

  const handleDelete = (id) => {
    setJobs(jobs.filter(job => job.id !== id));
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <div className="container">
      <div className="flex items-center justify-between mt-lg mb-lg">
        <h1>Admin Dashboard</h1>
        <button onClick={handleLogout} className="btn btn-outline">Logout</button>
      </div>
      
      <div className="job-grid">
        {jobs.map(job => (
          <div key={job.id} className="card">
            <h3>{job.title}</h3>
            <p className="job-company">{job.company}</p>
            <p>{job.description}</p>
            <div className="flex gap-sm mt-md">
              <button 
                onClick={() => handleDelete(job.id)}
                className="btn btn-outline"
              >
                Delete
              </button>
              <button className="btn btn-primary">Edit</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;