import React from "react";

const Sbf = () => {
  return (
    <section className="flex justify-center bg-white px-4 py-20">
      <div className="bg-gradient-to-br from-[#0f0c52] to-[#28e07b] rounded-3xl p-10 sm:p-16 text-center w-full max-w-4xl shadow-lg relative overflow-hidden">
        {/* Dark blue overlay with diagonal cut */}
        <div
          className="absolute inset-0 bg-[#151472] rounded-3xl z-0"
          style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 70%)" }}
        ></div>

        {/* Content */}
        <div className="relative z-10 text-white">
          <h2 className="text-3xl sm:text-4xl font-semibold leading-tight mb-4">
            Are you ready to convert<br />
            scattered content into a<br />
            <span className="text-white">single, shareable narrative?</span>
          </h2>
          <p className="text-sm sm:text-base mb-6 text-white opacity-80">
            Join 100s of B2B teams
          </p>
          <button className="px-6 py-2 border border-white text-white rounded-md bg-black hover:bg-white hover:text-black transition">
            Create a Journey
          </button>
        </div>
      </div>
    </section>
  );
};

export default Sbf;



