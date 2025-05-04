import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import '../styles.css';

const LoginPage = () => {
  const { loginUser } = useContext(UserContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Use the login function from context
    const user = loginUser(email, password, rememberMe);
    
    if (user) {
      // Redirect based on role
      if (user.role === 'admin') {
        navigate('/admin');
      } else if (user.role === 'employer') {
        navigate('/employer');
      } else {
        navigate('/student');
      }
    } else {
      setError('И-мэйл эсвэл нууц үг буруу байна');
    }
  };

  return (
    <div className="auth-page" style={{ padding: '2rem' }}>
      <div className="auth-container">
        <h2 className="auth-title">Нэвтрэх</h2>
        
        {error && <div className="error-message">{error}</div>}

        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-group">
            <label htmlFor="email" className="form-label">И-мэйл</label>
            <input
              type="email"
              id="email"
              className="form-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="password" className="form-label">Нууц үг</label>
            <input
              type="password"
              id="password"
              className="form-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          
          <div className="auth-actions">
            <div className="remember-me">
              <input
                type="checkbox"
                id="remember"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              <label htmlFor="remember">Насатлах</label>
            </div>
            <Link to="/forgot-password" className="auth-link">Нууц үг мартсан?</Link>
          </div>
          
          <button type="submit" className="auth-button">Нэвтрэх</button>
        </form>
        
        <div className="auth-footer">
          <p>Бүртгэлгүй юу? <Link to="/register" className="auth-link">Бүртгүүлэх</Link></p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;