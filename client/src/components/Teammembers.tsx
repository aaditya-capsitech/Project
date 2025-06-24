import React from 'react';

const Teammembers = () => {
  return (
    <section className="px-6 py-20 space-y-24 bg-white">
  {/* Founders Section */}
  <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 max-w-6xl mx-auto">

    <div className="md:w-1/2">
      <span className="inline-block bg-black text-white px-4 py-1 rounded-full text-sm font-medium mb-4">
        For Founders
      </span>
      <h2 className="text-3xl font-bold mb-4">
        Create branded sales docs and onboarding flows in minutes.
      </h2>
      <p className="text-gray-600 mb-6">
        Skip the design work and deliver a clear, polished experience that makes your team look bigger than it is.
      </p>
      <button className="bg-black text-white px-6 py-2 rounded-full shadow-sm hover:bg-gray-900">
        Check Founder Page
      </button>
    </div>

    {/* video */}
    <div className="md:w-1/2">
     <video
      src="https://framerusercontent.com/assets/3SQzMgDlNSVNCr1cMFfbL30lMM.mp4" 
      autoPlay
      loop
      muted
      playsInline
      className="rounded-xl shadow-xl w-full max-w-7xl"
    />
    </div>
  </div>

  {/* Marketers Section */}
  <div className="flex flex-col md:flex-row items-center justify-between gap-10 max-w-6xl mx-auto">
    {/* Image */}
    <div className="md:w-1/2">
     <video
      src="https://framerusercontent.com/assets/VnVylBXxblZ4lVquG3fNF5kLuw.mp4" 
      autoPlay
      loop
      muted
      playsInline
      className="rounded-xl shadow-xl w-full max-w-7xl"
    />
    </div>

    {/* Text */}
    <div className="md:w-1/2">
      <span className="inline-block bg-black text-white px-4 py-1 rounded-full text-sm font-medium mb-4">
        For Marketers
      </span>
      <h2 className="text-3xl font-bold mb-4">
        Control the narrative from lead to close.
      </h2>
      <p className="text-gray-600 mb-6">
        Build reusable templates your team can share with confidence, and track how every asset performs.
      </p>
      <button className="bg-black text-white px-6 py-2 rounded-full shadow-sm hover:bg-gray-900">
        Check Marketer Page
      </button>
    </div>
  </div>

  {/* Salespeople Section */}
  <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 max-w-6xl mx-auto">

    <div className="md:w-1/2">
      <span className="inline-block bg-black text-white px-4 py-1 rounded-full text-sm font-medium mb-4">
        For Salespeople
      </span>
      <h2 className="text-3xl font-bold mb-4">
        Create branded sales docs and onboarding flows in minutes.
      </h2>
      <p className="text-gray-600 mb-6">
        Skip the design work and deliver a clear, polished experience that makes your team look bigger than it is.
      </p>
      <button className="bg-black text-white px-6 py-2 rounded-full shadow-sm hover:bg-gray-900">
        Check Salespeople Page
      </button>
    </div>

    {/* video */}
    <div className="md:w-1/2">
     <video
      src="https://framerusercontent.com/assets/vyhpzh0WK4VKI0n9EyPXRL9AXM.mp4" 
      autoPlay
      loop
      muted
      playsInline
      className="rounded-xl shadow-xl w-full max-w-7xl"
    />
    </div>
  </div>
</section>



  );
};

export default Teammembers;