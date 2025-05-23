 import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Import axios directly

const Signup = () => {
  const [formData, setFormData] = useState({
    username: '',
    emailId: '',
    password: '',
    role: ''
  });
  const [roles, setRoles] = useState([]); // Dynamic role list
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch roles from backend
    const fetchRoles = async () => {
      try {
        const res = await axios.get('http://localhost:9090/api/auth/roles', {
          headers: {
            'Content-Type': 'application/json',
          },
        });
        setRoles(res.data);
        if (res.data.length > 0) {
          setFormData((prev) => ({ ...prev, role: res.data[0] }));
        }
      } catch (error) {
        console.error('Failed to load roles:', error);
      }
    };

    fetchRoles();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:9090/api/auth/signup', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      alert('Signup successful');
      console.log(res.data);
      navigate('/login'); // Redirect to login page
    } catch (error) {
      alert(error.response?.data?.message || 'Signup failed');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Signup</h2>
      <input name="username" placeholder="Username" onChange={handleChange} required />
      <input name="emailId" placeholder="Email" type="email" onChange={handleChange} required />
      <input name="password" placeholder="Password" type="password" onChange={handleChange} required />
      
      <button type="submit">Register</button>
    </form>
  );
};

export default Signup;
