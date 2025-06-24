import React, { useState } from 'react';

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <div className="min-h-screen bg-white text-center px-6 py-16">
      <h1 className="text-3xl font-bold mb-6">Pricing Plans</h1>


      <div className="mb-8 inline-flex border rounded-full overflow-hidden">
        <button
          onClick={() => setIsAnnual(false)}
          className={`px-5 py-2 text-sm font-medium transition ${
            !isAnnual ? 'bg-blue-900 text-white' : 'text-blue-900'
          }`}
        >
          Monthly
        </button>
        <button
          onClick={() => setIsAnnual(true)}
          className={`px-5 py-2 text-sm font-medium transition ${
            isAnnual ? 'bg-blue-900 text-white' : 'text-blue-900'
          }`}
        >
          Annually
        </button>
      </div>


      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {[
          { name: 'Basic', price: isAnnual ? 999 : 99, desc: 'For individuals' },
          { name: 'Pro', price: isAnnual ? 1999 : 199, desc: 'For teams' },
        ].map((plan) => (
          <div key={plan.name} className="border rounded-lg p-6 shadow">
            <h2 className="text-xl font-semibold mb-2">{plan.name}</h2>
            <p className="text-3xl font-bold mb-2">
              ₹{plan.price}
              <span className="text-sm text-gray-500 font-normal">
                /{isAnnual ? 'year' : 'month'}
              </span>
            </p>
            <p className="text-gray-600 mb-4">{plan.desc}</p>
            <button className="bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-900 transition">
              Get Started
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;