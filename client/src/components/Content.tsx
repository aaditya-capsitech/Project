import React from 'react'
import { Routes, Route } from 'react-router-dom';
import "../App.css";
import Navbar from '../components/Navbar';
import ScrollLinked from "../components/ScrollLinked";
import Video3d from '../components/Video3d';
import CheckIcon from './CheckIcon';
import Threestepexplain from '../components/Threestepexplain';
import Teammembers from '../components/Teammembers';
import Testimonial from '../components/Testimonial';
import Features from "../components/Features";
import FaqSection from "../components/FaqSection";
import Sbf from "../components/Sbf";
import Footer from "../components/Footer";

import Home from "./Home";
import UseCases from "../pages/UseCases";
import Pricing from "../pages/Pricing";
import Resources from "../pages/Resources";
import About from "../pages/About";

import Login from '../pages/Login';
import Signup from '../pages/Signup';




const Content = () => {
  return (
    <div>
      {/* Features Section */}
      <section className="py-20 px-4 text-center bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-900">
            Journey is built to package<br />
            <span className="text-black">and present, not just store.</span>
          </h2>
          <p className="mt-4 text-black">
            Journey helps lean B2B teams consolidate their best content into a
            polished microsite that looks custom made without any complex setup.
          </p>
          <p className="mt-4 font-semibold text-black">
            Unlike bloated digital sales rooms or disjointed Notion pages,
            <span className="font-normal">
              {" "}
              Journey gives founders and marketers a cleaner, trackable way to
              follow up, onboard, and pitch. Just drag, drop, and share.
            </span>
          </p>
        </div>

        <div className="mt-12 flex justify-center">
          <video
            src="https://framerusercontent.com/assets/VvuhaBHpSpHtmgBI6mO00usafDo.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="rounded-xl shadow-xl w-full max-w-4xl"
          />
        </div>
      </section>

      {/* The Problem Section */}
    <section className="py-20 px-4 bg-white text-center">
  <div className="mb-4">
    <span className="px-4 py-1 rounded-full bg-gray-900 text-white text-sm font-medium">
      The Problem
    </span>
  </div>

  <h2 className="text-2xl sm:text-3xl font-semibold">
    <span className="text-blue-900">Your content assets aren’t the problem.</span><br />
    <span className="text-black">How you package them is.</span>
  </h2>

  <p className="mt-3 text-gray-600">Your value story is getting lost, literally.</p>

  <div className="mt-12 flex flex-col md:flex-row justify-center gap-12 max-w-6xl mx-auto text-left">

    <div className="md:w-1/2 bg-white">
      <h3 className="text-xl font-semibold">Right now, your content is scattered.</h3>
      <p className="mt-2 text-black">You’re not losing deals because your content is bad.</p>
      <p className="text-black">You’re losing them because your delivery feels like homework.</p>
      <ul className="mt-4 space-y-3 text-black">
        <li className="flex items-start gap-2">
          <CheckIcon />
          <span>Attachments and links get lost in email threads.</span>
        </li>
        <li className="flex items-start gap-2">
          <CheckIcon />
          <span>Buyers are required to search their inbox every time.</span>
        </li>
      </ul>
    </div>


    <div className="md:w-1/2 bg-white">
      <h3 className="text-xl font-semibold">“It’s like we’re sending 10 links and hoping for the best.”</h3>
      <p className="mt-2 text-black">
        Buying journeys are more complex and happen more asynchronously than ever before.
      </p>
      <ul className="mt-4 space-y-3 text-black">
        <li className="flex items-start gap-2">
          <CheckIcon />
          <span>Lack of insights or engagement signals create poor visibility.</span>
        </li>
        <li className="flex items-start gap-2">
          <CheckIcon />
          <span>Inability to share with context creates unforeseen challenges.</span>
        </li>
      </ul>
    </div>
  </div>
</section>


      {/* Video Demo */}
      <div className="mt-12 flex justify-center">
        <video
          src="https://framerusercontent.com/assets/anzGo989ZEhHYzF4U4QVevOIU.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="rounded-xl shadow-xl w-full max-w-7xl"
        />
      </div>

      {/* The Solution Section */}
      <section className="py-20 px-4 bg-white text-center">
        <div className="mb-4">
          <span className="px-4 py-1 rounded-full bg-gray-900 text-white text-sm font-medium">
            The Solution
          </span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-semibold">
          <span className="text-blue-900">Journey turns scattered content into a </span><br />
          <span className="text-black">single, shareable narrative — in minutes.</span>
        </h2>

        <p className="mt-3 black">No new tools. No friction. Just a better experience.</p>
        <p className="mt-3 black">Works for sales follow-ups, onboarding, fundraising, and proposals.</p>
      </section>

      <Threestepexplain />

      <Teammembers />
      <Testimonial />
      <Features />
      <FaqSection />
      <Sbf />
      <Footer />
    </div>
  );
};

export default Content;
