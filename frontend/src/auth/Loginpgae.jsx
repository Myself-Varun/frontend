import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from './authContext'; // Your configured Axios instance

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
      const res = await axios.post('/auth/login', formData);
      const { token } = res.data;

      localStorage.setItem('token', token);
      alert('Login successful');
      navigate('/'); // Redirect to home or dashboard
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
