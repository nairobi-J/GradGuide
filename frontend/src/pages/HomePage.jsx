import React from 'react';
import myPhoto from '../assets/career.jpg';
import Button from '../components/Button';
import { useState } from 'react';
import SignupModal from '../components/SignupModal';
import SigninModal from '../components/SigninModal';
import { motion } from 'framer-motion'; // For animations
import { FaUser, FaLightbulb, FaChartLine, FaRobot, FaUsers, FaTools } from 'react-icons/fa';
const HomePage = () => {
    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 1.1 } },
      };
   
      const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);
      const [isSigninModalOpen, setIsSigninModalOpen] = useState(false)

  // Open the modal
  const openSignupModal = () => {
    setIsSignupModalOpen(true);
  };

  // Close the modal
  const closeSignupModal = () => {
    setIsSignupModalOpen(false);
  };
  const openSigninModal = () => {
    setIsSigninModalOpen(true);
  };

  // Close the modal
  const closeSigninModal = () => {
    setIsSigninModalOpen(false);
  };
  return (
    <>
     <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="text-center mb-12 mt-10"
      >
        <h1 className="text-4xl font-bold mb-4">Welcome to GradGuide</h1>
        <p className="text-lg text-gray-600">
          Your AI-Powered Career and Academic Guide.
        </p>
      </motion.div>
      <motion.div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white  text-center font-bold shadow-lg">
    <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="text-6xl font-bold mb-4"
          >
            GradGuide
          </motion.h1>
     <h4>Your AI-Powered Career and Academic Guide.</h4> 
     <motion.button
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="text-6xl font-bold mb-4"
            onClick={openSignupModal}
          >
            Sign Up
          </motion.button>
    <div className=''>
    <SignupModal isOpen={isSignupModalOpen} onClose={closeSignupModal} />
    </div>
      {/* Render the SignupModal */}
     
      <p>or</p>
      <motion.button
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="text-6xl font-bold mb-4"
            onClick={openSigninModal}
          >
            Sign In
          </motion.button>
      
    <SigninModal isOpen={isSigninModalOpen} onClose={closeSigninModal} />
      
    </div>
      </motion.div>
    
    
   
    
    <img
      src={myPhoto}
      alt="Career Photo"
      className=" w-full h-full object-cover"
    />


    
    <motion.div className="w-full  p-8 bg-gray-50 w-screen">
      <motion.h1
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="text-4xl font-bold text-center mb-8"
      >
        About GradGuide
      </motion.h1>

      <div className="max-w-6xl mx-auto text-black">
        {/* Introduction Section */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="mb-12 p-6 bg-white rounded-lg shadow-md"
        >
          <h2 className="text-2xl font-bold mb-4 flex items-center">
            <FaUser className="mr-2" /> Who We Are
          </h2>
          <p className="text-lg">
            We’re <strong>Abu Sayeid Sawon</strong> and <strong>Nusrat Jahan Jerin</strong>, students in <strong>SWE-350</strong>. GradGuide is our project—a platform designed to help students and job seekers navigate careers, jobs, and further studies with ease.
          </p>
        </motion.section>

        {/* What’s GradGuide? Section */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="mb-12 p-6 bg-white rounded-lg shadow-md"
        >
          <h2 className="text-2xl font-bold mb-4 flex items-center">
            <FaLightbulb className="mr-2" /> What’s GradGuide?
          </h2>
          <p className="text-lg">
            GradGuide is your <strong>AI-powered career buddy</strong>. We use real-time data and AI to provide personalized advice on career paths, skill development, and job opportunities. Think of us as your <strong>career GPS</strong>.
          </p>
        </motion.section>

        {/* Key Features Section */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="mb-12 p-6 bg-white rounded-lg shadow-md"
        >
          <h2 className="text-2xl font-bold mb-4 flex items-center">
            <FaTools className="mr-2" /> Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 bg-gray-100 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Job Search Made Easy</h3>
              <p>We pull job listings from platforms like LinkedIn, Indeed, and Glassdoor.</p>
            </div>
            <div className="p-4 bg-gray-100 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Career Path Suggestions</h3>
              <p>Get personalized career paths based on your skills and goals.</p>
            </div>
            <div className="p-4 bg-gray-100 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Industry Trends & Insights</h3>
              <p>Stay updated with real-time data on job market trends and salary stats.</p>
            </div>
            <div className="p-4 bg-gray-100 rounded-lg">
              <h3 className="text-xl font-bold mb-2">AI Career Coach</h3>
              <p>An AI chatbot that gives you tips on resumes, interviews, and career decisions.</p>
            </div>
          </div>
        </motion.section>

        {/* Why We Built It Section */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="mb-12 p-6 bg-white rounded-lg shadow-md"
        >
          <h2 className="text-2xl font-bold mb-4 flex items-center">
            <FaChartLine className="mr-2" /> Why We Built It
          </h2>
          <p className="text-lg">
            We know how overwhelming it can be to figure out your career path or find the right job. That’s why we created GradGuide—to make things <strong>easier, smarter, and more personalized</strong> for you.
          </p>
        </motion.section>

        {/* Let’s Build the Future Together Section */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="mb-12 p-6 bg-white rounded-lg shadow-md"
        >
          <h2 className="text-2xl font-bold mb-4 flex items-center">
            <FaUsers className="mr-2" /> Let’s Build the Future Together
          </h2>
          <p className="text-lg">
            GradGuide is more than just a platform—it’s a <strong>community</strong> of learners, dreamers, and doers. Join us on this journey, and let’s build a brighter future together.
          </p>
        </motion.section>
      </div>
    </motion.div>

  </>
    
  );
}

export default HomePage;
