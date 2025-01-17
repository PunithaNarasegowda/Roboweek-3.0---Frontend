import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from './Button';
import { useAuth } from '../context/AuthContext';
import { useForm, SubmitHandler } from "react-hook-form"


const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { signup } = useAuth();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    // Basic validation
    if (!formData.name || !formData.email || !formData.password) {
      setError('Please fill in all fields');
      return;
    }

    try {
      const userData = {
        name: formData.name,
        email: formData.email,
      };

      await signup(userData, formData.password);
      navigate('/events');
    } catch (err) {
      setError('Failed to create an account');
    }
  };

  return (
    <div className='min-h-screen flex items-center justify-center relative z-1000'>
      <div className="z-100 p-10 border border-cyan-500/30 rounded-xl bg-black/20 backdrop-blur-lg w-full max-w-md">
        <h1 className='text-center text-cyan-500 font-bold mb-10 text-4xl'>Sign Up</h1>
        
        {error && (
          <div className="mb-4 p-3 bg-red-500/20 border border-red-500/50 rounded-lg text-red-400 text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className='flex flex-col gap-5 z-100'>
          <div>
            <h1 className='text-white text-lg mb-2'>Name</h1>
            <input
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              className='w-full text-gray-300 p-3 relative z-100 bg-black/20 backdrop-blur-xl rounded-sm border border-cyan-500/30'
            />
          </div>
          <div>
            <h1 className='text-white text-lg mb-2'>Email</h1>
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className='w-full text-gray-300 p-3 relative z-100 bg-black/20 backdrop-blur-xl rounded-sm border border-cyan-500/30'
            />
          </div>
          <div>
            <h1 className='text-white text-lg mb-2'>Password</h1>
            <input
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              className='w-full text-gray-300 p-3 relative z-100 bg-black/20 backdrop-blur-xl rounded-sm border border-cyan-500/30'
            />
          </div>
          <Button text="Sign Up" textSize="text-lg" />
        </form>
      </div>
    </div>
  );
};

