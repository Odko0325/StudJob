const Navbar = () => {
    return (
      <nav className="navbar">
        <div className="nav-container container">
          <a href="/" className="logo">StudentJobs</a>
          <div className="nav-links">
            <a href="/" className="nav-link">Home</a>
            <a href="/student" className="nav-link">Student</a>
            <a href="/admin" className="nav-link">Admin</a>
            <a href="/login" className="nav-link">Login</a>
          </div>
        </div>
      </nav>
    );
  };
  
  export default Navbar;