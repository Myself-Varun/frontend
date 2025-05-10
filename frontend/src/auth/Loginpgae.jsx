 import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Import axios directly

const Login = () => {
  const [formData, setFormData] = useState({
    emailId: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Create an axios instance directly with the base URL and headers
      const res = await axios.post('http://localhost:9090/api/auth/login', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const { token } = res.data;

      localStorage.setItem('token', token); // Store the token
      alert('Login successful');
      navigate('/adminpage'); // Redirect to admin page or dashboard
    } catch (error) {
      alert(error.response?.data?.message || 'Login failed');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <input
        name="emailId"
        placeholder="Email"
        type="email"
        onChange={handleChange}
        required
      />
      <input
        name="password"
        placeholder="Password"
        type="password"
        onChange={handleChange}
        required
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
