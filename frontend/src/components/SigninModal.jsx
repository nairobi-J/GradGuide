import React, { useState } from 'react';
import Button from './Button'; // Import the Button component

const SigninModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Sign In Data Submitted:', formData);
    // Add your sign-in logic here (e.g., API call)
    onClose(); // Close the modal after submission
  };

  // If the modal is not open, return null
  if (!isOpen) return null;

  return (
    <div className="text-black fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
      <div className="mt-4 text-center flex justify-end">
          <Button
            title="X"
            onClick={onClose}
            className="bg-gray-500 hover:bg-gray-600"
          />
        </div>
        <h2 className="text-2xl font-bold mb-6 text-center">Sign In</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email Input */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Password Input */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your password"
              required
            />
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            title="Sign In"
            className="w-full bg-blue-500 hover:bg-blue-600"
          />
        </form>

        {/* Link to Sign Up Page */}
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            Don't have an account?{' '}
            <button
              onClick={onClose} // Close the Sign In modal and open the Sign Up modal
              className="text-blue-500 hover:text-blue-600 font-semibold"
            >
              Sign Up
            </button>
          </p>
        </div>

        {/* Close Button */}
       
      </div>
    </div>
  );
};

export default SigninModal;