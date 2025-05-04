import { useParams } from 'react-router-dom';
import { mockJobs } from '../mockData';

const JobDetails = () => {
  const { id } = useParams();
  const job = mockJobs.find(job => job.id === parseInt(id));

  if (!job) {
    return <div className="container">Job not found</div>;
  }

  return (
    <div className="container">
      <div className="card mt-lg">
        <h1 className="mb-sm">{job.title}</h1>
        <h2 className="mb-md" style={{ color: 'var(--primary)' }}>{job.company}</h2>
        
        <div className="flex gap-md mb-md">
          <span className="job-type">{job.type}</span>
          <span>{job.location}</span>
          <span>Salary: {job.salary}</span>
        </div>
        
        <h3 className="mb-sm">Job Description</h3>
        <p className="mb-md">{job.description}</p>
        
        <h3 className="mb-sm">Requirements</h3>
        <ul className="mb-md" style={{ paddingLeft: '1.5rem' }}>
          {job.requirements.map((req, i) => (
            <li key={i}>{req}</li>
          ))}
        </ul>
        
        <button className="btn btn-primary">Apply Now</button>
      </div>
    </div>
  );
};

export default JobDetails;