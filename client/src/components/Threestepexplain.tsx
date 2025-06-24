import React, { useState } from "react";
import { FaPlus, FaPaperPlane, FaChartPie } from "react-icons/fa";

const Threestepexplain = () => {
  const [activeTab, setActiveTab] = useState<"create" | "send" | "analyze">("create");

  const images: Record<"create" | "send" | "analyze", string> = {
    create: "https://framerusercontent.com/images/qRYxLb7wdjlEuxAJs1ed8zJfvs.svg",
    send: "https://framerusercontent.com/images/wyMOrXwXkge9lXThA64AfyH4U.jpg",
    analyze: "https://framerusercontent.com/images/erSaXnMzwdl84RffcEdzmXjyc.png",
  };

  const tabs = [
    {
      key: "create" as const,
      title: "Create",
      icon: <FaPlus className="w-5 h-5 mr-2 " />,
      desc: "Drop in your existing assets and organize them visually into a single, cohesive value story.",
    },
    {
      key: "send" as const,
      title: "Send",
      icon: <FaPaperPlane className="w-5 h-5 mr-2 " />,
      desc: "Build a custom branded link that not only feels like it was built for your buyer but also easy to share.",
    },
    {
      key: "analyze" as const,
      title: "Analyze",
      icon: <FaChartPie className="w-5 h-5 mr-2 " />,
      desc: "Gain insights into what is being viewed and who is viewing it to provide a personalized buyer experience.",
    },
  ];

  return (
    <section className="flex justify-center px-4 py-16 bg-gray-50">
      <div className="bg-white rounded-2xl shadow-md p-8 w-full max-w-6xl">
        {/* Tabs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center pb-8 border-b border-gray-200">
          {tabs.map((tab) => (
            <div
              key={tab.key}
              className={`cursor-pointer border-b-4 pb-2 transition-all duration-300 ${
                activeTab === tab.key
                  ? "border-indigo-900 text-indigo-900"
                  : "border-transparent text-gray-500"
              }`}
              onClick={() => {
                console.log("Tab clicked:", tab.key); // Debug
                setActiveTab(tab.key);
              }}
              
            >
              <div className="flex items-center justify-center mb-2">
                {tab.icon}
                <h3 className="text-lg">{tab.title}</h3>
              </div>
              <p className="text-sm text-gray-600">{tab.desc}</p>
            </div>
          ))}
        </div>

        {/* Dynamic Image */}
        <div className="mt-8">
          <img
            key={activeTab}
            src={images[activeTab]}
            alt={`${activeTab} preview`}
            className="w-full rounded-xl shadow-sm transition-all duration-500 ease-in-out transform hover:scale-[1.01]"
          />
        </div>
      </div>
    </section>
  );
};

export default Threestepexplain;
