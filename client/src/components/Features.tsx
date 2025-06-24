import React from "react";

const Features = () => {
  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-2">
          Everything you need to deliver
        </h2>
        <h2 className="text-3xl font-bold text-gray-800 mb-10">
          smarter, faster, and with less friction
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-left">
          {/* Feature 1 */}
          <div>
            <p className="font-semibold mb-1">✨ Everything in One Link</p>
            <p className="text-sm text-gray-600">
              Combine decks, videos, PDFs, and even contracts in one scrollable, brand-ready microsite.
            </p>
          </div>

          {/* Feature 2 */}
          <div>
            <p className="font-semibold mb-1">📊 Built for Async, Built to Convert</p>
            <p className="text-sm text-gray-600">
              Engage busy buyers or clients without another call. Say more, with less back-and-forth.
            </p>
          </div>

          {/* Feature 3 */}
          <div>
            <p className="font-semibold mb-1">🧪 Track What Matters</p>
            <p className="text-sm text-gray-600">
              See time on page, scroll depth, and click-throughs—know what’s working and what isn’t.
            </p>
          </div>

          {/* Feature 4 */}
          <div>
            <p className="font-semibold mb-1">🖥️ No Code. No Design. No Ops.</p>
            <p className="text-sm text-gray-600">
              Use battle-tested templates. Just drag, drop, and launch. No dependencies or delays.
            </p>
          </div>

          {/* Feature 5 */}
          <div>
            <p className="font-semibold mb-1">📁 From Sales to CS to Onboarding</p>
            <p className="text-sm text-gray-600">
              One tool across the customer journey—from first touch to post-sale activation.
            </p>
          </div>

          {/* Feature 6 */}
          <div>
            <p className="font-semibold mb-1">✴️ Proven by Real Teams</p>
            <p className="text-sm text-gray-600">
              Trusted by agencies, founders, and marketers who care more about clarity than complexity.
            </p>
          </div>
        </div>
      </div>

    <div className="mt-8 space-x-4 flex justify-center">
    <button className="bg-blue-900 text-white px-6 py-2 rounded-md shadow-md hover:bg-blue-900">
      Create a Journey
    </button>
    <button className="bg-white border px-6 py-2 rounded-md shadow hover:bg-gray-100">
      Check an Example
    </button>
  </div>

</section>
  );
};

export default Features;