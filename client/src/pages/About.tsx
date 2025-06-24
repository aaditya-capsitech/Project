// About.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();

  return (
    <section className="min-h-screen bg-white text-gray-800 px-6 py-16 flex flex-col items-center justify-center text-center">
      <h2 className="text-3xl font-bold mb-4">About Us</h2>
      <p className="max-w-xl mb-8 text-lg">
        We’re passionate about building beautiful, responsive web experiences. Our mission is to empower creators and developers with tools that make a difference.
      </p>
      <button
        onClick={() => navigate('/')}
        className="bg-blue-900 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded transition duration-100 ease-in-out">
        Go to Home
      </button>
    </section>
  );
};

export default About;