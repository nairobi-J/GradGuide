import React from 'react';
import myPhoto from '../assets/career.jpg';
import Button from '../components/Button';
import { useState } from 'react';
import SignupModal from '../components/SignupModal';

const HomePage = () => {
    const handleClick = () => {
        alert('Button clicked!');
      };
      const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);

  // Open the modal
  const openSignupModal = () => {
    setIsSignupModalOpen(true);
  };

  // Close the modal
  const closeSignupModal = () => {
    setIsSignupModalOpen(false);
  };
  return (
    <div className="relative w-screen h-screen overflow-hidden">
    <img
      src={myPhoto}
      alt="Career Photo"
      className="w-full h-full  object-cover"
    />

  
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white  text-center font-bold shadow-lg">
    <h1 className='text-6xl'>GradGuide</h1>
     <h4>Your AI-Powered Career and Academic Guide.</h4> 
     <Button
        title="Sign Up"
        onClick={openSignupModal}
        className="bg-green-500 hover:bg-green-600"
      />
    <div className=''>
    <SignupModal isOpen={isSignupModalOpen} onClose={closeSignupModal} />
    </div>
      {/* Render the SignupModal */}
     
      <p>or</p>
      <Button title="Sign In" onClick={handleClick} />
      
    </div>


  </div>
  );
}

export default HomePage;
