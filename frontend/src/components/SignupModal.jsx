import React, { useState, useEffect, useRef } from 'react';
import Button from './Button'; // Import the Button component

const SignupModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    fieldOfInterest: '',
    educationLevel: '',
    skills: [],
    careerGoals: '',
    //resume: null,
  });

  const [showScrollIndicator, setShowScrollIndicator] = useState(true);
  const modalRef = useRef(null);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle file input changes
  // const handleFileChange = (e) => {
  //   setFormData({
  //     ...formData,
  //     resume: e.target.files[0],
  //   });
  // };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("password", formData.password);
    formDataToSend.append("fieldOfInterest", formData.fieldOfInterest);
    formDataToSend.append("educationLevel", formData.educationLevel);
    formDataToSend.append("skills", JSON.stringify(formData.skills)); // Convert array to JSON
    formDataToSend.append("careerGoals", formData.careerGoals);

    // if (formData.resume) {
    //     formDataToSend.append("resume", formData.resume);
    // }

    const response = await fetch("http://localhost:5000/register", {
        method: "POST",
        body: formDataToSend, 
    });

    const data = await response.json();
    console.log(data);
};

  // Handle scroll event
  useEffect(() => {
    const modal = modalRef.current;
    const handleScroll = () => {
      if (modal) {
        const { scrollTop, scrollHeight, clientHeight } = modal;
        const isAtBottom = scrollTop + clientHeight >= scrollHeight - 10; // 10px buffer
        setShowScrollIndicator(!isAtBottom);
      }
    };

    if (modal) {
      modal.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (modal) {
        modal.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  // If the modal is not open, return null
  if (!isOpen) return null;

  return (
    <div className="text-black fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 font-semi-bold">
      <div
        ref={modalRef}
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-md max-h-[80vh] overflow-y-auto scrollbar-hide relative"
      >
        {/* Close Button */}
        <div className="flex justify-end">
          <Button
            title="X"
            onClick={onClose}
            className="bg-blue-100 hover:bg-gray-600"
          />
        </div>

        {/* Modal Content */}
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name Input */}
          <div className="grid grid-cols-3 gap-4 items-center">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 col-span-2"
              required
            />
          </div>

          {/* Email Input */}
          <div className="grid grid-cols-3 gap-4 items-center">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 col-span-2"
              required
            />
          </div>

          {/* Password Input */}
          <div className="grid grid-cols-3 gap-4 items-center">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 col-span-2"
              required
            />
          </div>

          {/* Field of Interest Dropdown */}
          <div className="grid grid-cols-3 gap-4 items-center">
            <label htmlFor="fieldOfInterest" className="block text-sm font-medium text-gray-700">
              Field of Interest
            </label>
            <select
              id="fieldOfInterest"
              name="fieldOfInterest"
              value={formData.fieldOfInterest}
              onChange={handleInputChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 col-span-2"
              required
            >
              <option value="">Select Field</option>
              <option value="Engineering">Engineering</option>
              <option value="Medicine">Medicine</option>
              <option value="Arts">Arts</option>
              <option value="Business">Business</option>
              <option value="Science">Science</option>
              <option value="Technology">Technology</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Education Level Dropdown */}
          <div className="grid grid-cols-3 gap-4 items-center">
            <label htmlFor="educationLevel" className="block text-sm font-medium text-gray-700">
              Education Level
            </label>
            <select
              id="educationLevel"
              name="educationLevel"
              value={formData.educationLevel}
              onChange={handleInputChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 col-span-2"
              required
            >
              <option value="">Select Education Level</option>
              <option value="High School">High School</option>
              <option value="Undergraduate">Undergraduate</option>
              <option value="Graduate">Graduate</option>
              <option value="Postgraduate">Postgraduate</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Skills Input */}
          <div className="grid grid-cols-3 gap-4 items-center">
            <label htmlFor="skills" className="block text-sm font-medium text-gray-700">
              Skills (comma-separated)
            </label>
            <input
              type="text"
              id="skills"
              name="skills"
              value={formData.skills.join(', ')}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  skills: e.target.value.split(',').map((skill) => skill.trim()),
                })
              }
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 col-span-2"
              placeholder="e.g., Programming, Design, Communication"
            />
          </div>

          {/* Career Goals Textarea */}
          <div className="grid grid-cols-3 gap-4 items-start">
            <label htmlFor="careerGoals" className="block text-sm font-medium text-gray-700">
              Career Goals
            </label>
            <textarea
              id="careerGoals"
              name="careerGoals"
              value={formData.careerGoals}
              onChange={handleInputChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 col-span-2"
              rows="4"
              placeholder="Describe your career aspirations..."
            />
          </div>

          {/* Resume Upload */}
          {/* <div className="grid grid-cols-3 gap-4 items-center">
            <label htmlFor="resume" className="block text-sm font-medium text-gray-700">
              Upload Resume (PDF)
            </label>
            <input
              type="file"
              id="resume"
              name="resume"
              onChange={handleFileChange}
              className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 col-span-2"
              accept=".pdf"
            />
          </div> */}

          {/* Submit Button */}
          <div className="col-span-3 flex justify-center">
            <Button
              type="submit"
              title="Sign Up"
              className="bg-blue-500 hover:bg-blue-600"
            />
          </div>
        </form>

        {/* "Or" Divider */}
        <div className="text-center my-4">
          <p className="text-sm text-gray-600">or</p>
        </div>

        {/* Sign Up with Google Button */}
        <Button
          type="button"
          title="Sign Up with Google"
          className="w-full bg-red-500 hover:bg-red-600"
        />

        {/* Fade Effect */}
        <div className="fade-effect"></div>

        {/* Scroll Indicator */}
        {showScrollIndicator && (
          <div className="absolute bottom-0 left-0 right-0 flex justify-center pb-2">
            <div className="text-gray-500 bounce">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SignupModal;


