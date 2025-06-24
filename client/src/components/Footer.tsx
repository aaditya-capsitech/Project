import React from "react";

const Footer = () => {
  return (
 <footer className="bg-[#14176F] text-white px-6 py-10 font-sans">
  <div className="max-w-7xl mx-auto">
    {/* Top Section */}
    <div className="flex flex-col sm:flex-row justify-between gap-8">
      {/* Left: Logo + Social */}
      <div className="flex flex-col items-start gap-4">
        <span className="text-2xl font-serif italic">Journey</span>
        <div className="flex space-x-4 text-xl">
          <a href="#" aria-label="LinkedIn" className="hover:opacity-70">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="#" aria-label="Website" className="hover:opacity-70">
            <i className="fas fa-globe"></i>
          </a>
        </div>
      </div>

      {/* Right: Link Columns */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-sm sm:text-base">
        <div>
          <h4 className="font-semibold mb-2">Product</h4>
          <ul className="space-y-1 opacity-90">
            <li><a href="#">How it works</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Embeds</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Use Cases</h4>
          <ul className="space-y-1 opacity-90">
            <li><a href="#">Sales</a></li>
            <li><a href="#">Marketing</a></li>
            <li><a href="#">Founders</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Resources</h4>
          <ul className="space-y-1 opacity-90">
            <li><a href="#">Blog</a></li>
            <li><a href="#">Animated <br />
                Statistics Maker</a></li>
            <li><a href="#">Pricing Table<br /> 
                Builder</a></li>
            <li><a href="#">Templates</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Company</h4>
          <ul className="space-y-1 opacity-90">
            <li><a href="#">About us</a></li>
            <li><a href="#">Customers</a></li>
            <li><a href="#">Changelog</a></li>
            <li><a href="#">Status</a></li>
          </ul>
        </div>
      </div>
    </div>

    {/* Divider Line */}
    <div className="border-t border-yellow-400 opacity-30 mt-10 mb-4"></div>

   {/* Bottom Row */}
    <div className="flex flex-col sm:flex-row justify-between items-center text-xs sm:text-sm opacity-80 gap-y-2 mt-4">
      <p>Copyright © Aditya. All rights reserved</p>
      <div className="flex flex-wrap gap-4 sm:gap-4 items-center justify-center">
        <a href="#">Terms of Service</a>
        <span className="hidden sm:inline">|</span>
        <a href="#">Privacy Policy</a>
        <span className="hidden sm:inline">|</span>
        <a href="#">Security</a>
        <span className="hidden sm:inline">|</span>
         <a href="#">Affiliate Terms</a>
      </div>
    </div>
  </div>
</footer>

  );
};

export default Footer;



