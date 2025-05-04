import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import '../styles.css';

const RegisterPage = () => {
  const { registerUser } = useContext(UserContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
    role: 'student'
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validation
    if (formData.password !== formData.confirmPassword) {
      setError('Нууц үг таарахгүй байна');
      return;
    }

    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phoneNumber || !formData.password) {
      setError('Бүх талбарыг бөглөнө үү');
      return;
    }

    // Register user
    try {
      registerUser({
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phoneNumber: formData.phoneNumber,
        password: formData.password,
        role: formData.role
      });
      navigate('/login', { 
        state: { 
          successMessage: 'Бүртгэл амжилттай боллоо! Нэвтрэх хэсэгт очно уу',
          registeredEmail: formData.email 
        } 
      });
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="auth-page" style={{ 
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#f5f7fa',
      padding: '2rem'
    }}>
      <div className="auth-container" style={{
        backgroundColor: 'white',
        borderRadius: '8px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
        padding: '2rem',
        width: '100%',
        maxWidth: '500px'
      }}>
        <h2 className="auth-title" style={{
          textAlign: 'center',
          color: '#384959',
          fontSize: '1.8rem',
          marginBottom: '1.5rem'
        }}>Бүртгүүлэх</h2>
        
        {error && <div className="error-message" style={{
          color: '#ef4444',
          backgroundColor: '#fee2e2',
          padding: '0.75rem',
          borderRadius: '6px',
          marginBottom: '1rem',
          textAlign: 'center'
        }}>{error}</div>}

        <form onSubmit={handleSubmit} className="auth-form" style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem'
        }}>
          <div className="form-group" style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem'
          }}>
            <label htmlFor="firstName" className="form-label" style={{
              fontWeight: '500'
            }}>Нэр*</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              className="form-input"
              style={{
                padding: '0.75rem',
                border: '1px solid #ddd',
                borderRadius: '6px',
                fontSize: '1rem'
              }}
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group" style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem'
          }}>
            <label htmlFor="lastName" className="form-label" style={{
              fontWeight: '500'
            }}>Овог*</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              className="form-input"
              style={{
                padding: '0.75rem',
                border: '1px solid #ddd',
                borderRadius: '6px',
                fontSize: '1rem'
              }}
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group" style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem'
          }}>
            <label htmlFor="email" className="form-label" style={{
              fontWeight: '500'
            }}>И-мэйл*</label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-input"
              style={{
                padding: '0.75rem',
                border: '1px solid #ddd',
                borderRadius: '6px',
                fontSize: '1rem'
              }}
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group" style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem'
          }}>
            <label htmlFor="phoneNumber" className="form-label" style={{
              fontWeight: '500'
            }}>Утасны дугаар*</label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              className="form-input"
              style={{
                padding: '0.75rem',
                border: '1px solid #ddd',
                borderRadius: '6px',
                fontSize: '1rem'
              }}
              value={formData.phoneNumber}
              onChange={handleChange}
              required
              placeholder="99119911"
            />
          </div>
          
          <div className="form-group" style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem'
          }}>
            <label htmlFor="password" className="form-label" style={{
              fontWeight: '500'
            }}>Нууц үг*</label>
            <input
              type="password"
              id="password"
              name="password"
              className="form-input"
              style={{
                padding: '0.75rem',
                border: '1px solid #ddd',
                borderRadius: '6px',
                fontSize: '1rem'
              }}
              value={formData.password}
              onChange={handleChange}
              required
              minLength="6"
            />
          </div>
          
          <div className="form-group" style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem'
          }}>
            <label htmlFor="confirmPassword" className="form-label" style={{
              fontWeight: '500'
            }}>Нууц үг давтах*</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              className="form-input"
              style={{
                padding: '0.75rem',
                border: '1px solid #ddd',
                borderRadius: '6px',
                fontSize: '1rem'
              }}
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group" style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem'
          }}>
            <label htmlFor="role" className="form-label" style={{
              fontWeight: '500'
            }}>Бүртгүүлэх эрх*</label>
            <select
              id="role"
              name="role"
              className="form-input"
              style={{
                padding: '0.75rem',
                border: '1px solid #ddd',
                borderRadius: '6px',
                fontSize: '1rem',
                backgroundColor: 'white'
              }}
              value={formData.role}
              onChange={handleChange}
              required
            >
              <option value="student">Оюутан</option>
              <option value="employer">Ажил олгогч</option>
            </select>
          </div>
          
          <button 
            type="submit" 
            className="auth-button"
            style={{
              padding: '0.75rem',
              backgroundColor: '#4A6BFF',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              fontSize: '1rem',
              fontWeight: '500',
              cursor: 'pointer',
              marginTop: '1rem'
            }}
          >
            Бүртгүүлэх
          </button>
        </form>
        
        <div className="auth-footer" style={{
          textAlign: 'center',
          marginTop: '1.5rem',
          color: '#666'
        }}>
          <p>Бүртгэлтэй юу?{' '}
            <Link 
              to="/login" 
              className="auth-link"
              style={{
                color: '#4A6BFF',
                fontWeight: '500',
                textDecoration: 'none'
              }}
            >
              Нэвтрэх
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;