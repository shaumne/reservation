import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3001/api/auth/register', {
        email,
        password,
      });
      navigate('/login');
    } catch (err) {
      setError(err.response?.data?.error || 'Registration failed');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20 px-4">
      <form onSubmit={handleSubmit} className="bg-dark-secondary border border-gold/20 rounded-lg px-8 pt-6 pb-8 mb-4">
        <h2 className="font-primary text-3xl text-gold mb-6 text-center">Register</h2>
        
        {error && (
          <div className="bg-red-900/50 border border-red-500 text-red-200 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}

        <div className="mb-4">
          <label className="block text-gray-custom text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="bg-dark border border-gold/20 rounded w-full py-2 px-3 text-gray-custom leading-tight focus:outline-none focus:border-gold"
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-custom text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            className="bg-dark border border-gold/20 rounded w-full py-2 px-3 text-gray-custom mb-3 leading-tight focus:outline-none focus:border-gold"
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div className="flex items-center justify-between">
          <button
            className="bg-gold hover:bg-gold-light text-dark font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-colors duration-300"
            type="submit"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
}

export default Register; 