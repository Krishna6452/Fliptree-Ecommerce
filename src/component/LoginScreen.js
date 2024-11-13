import React, { useState, useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { loginUser } from '../services/api';

function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setUser } = useContext(AppContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await loginUser(email, password);
      localStorage.setItem('token', data.token); // Store token
      setUser(data.user); // Update context with logged-in user
      alert('Login successful');
    } catch (error) {
      console.error('Login failed:', error);
      alert('Login failed');
    }
  };

  return (
    <div className="login-screen">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginScreen;
