import React from 'react';
import { Routes, Route } from 'react-router-dom';
import "./App.css";
import Navbar from './components/Navbar';
import Content from './components/Content';
import Home from './components/Home';
import ScrollLinked from "./components/ScrollLinked";
import Video3d from './components/Video3d';
import Threestepexplain from './components/Threestepexplain';
import Teammembers from './components/Teammembers';
import Testimonial from './components/Testimonial';
import Features from "./components/Features";
import FaqSection from "./components/FaqSection";
import Sbf from "./components/Sbf";
import Footer from "./components/Footer";


import UseCases from "./pages/UseCases";
import Resources from "./pages/Resources";
import About from "./pages/About";
import Pricing from './pages/Pricing';
import Login from './pages/Login';
import Signup from './pages/Signup';




const App = () => {
  return (
  <div className="bg-white min-h-screen font-sans flex flex-col justify-between">
      <Navbar />

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Pricing" element={<Pricing />} />
          <Route path="/Resources" element={<Resources />} />
          <Route path="/usecases" element={<UseCases />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/features" element={<Features />} />
        </Routes>
      </main>

      
       </div>
  );
};

export default App