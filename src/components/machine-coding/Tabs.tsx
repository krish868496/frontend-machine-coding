import React, { useState } from "react";

const tabs = [
  {
    id: 1,
    label: "Home",
    content:
      "Welcome to the home page. Here you can see the latest updates and activity.",
  },
  {
    id: 2,
    label: "Profile",
    content:
      "This section contains your profile details and account information.",
  },
  {
    id: 3,
    label: "Settings",
    content: "Manage your application settings and preferences from here.",
  },
];

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center px-4">
      <div className="w-full max-w-2xl bg-white rounded-xl shadow-md overflow-hidden">
        {/* Tabs */}
        <div className="flex border-b border-gray-200 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-3 text-sm sm:text-base font-medium transition-all duration-200 cursor-pointer whitespace-nowrap
              
              ${
                activeTab === tab.id
                  ? "bg-indigo-500 text-white"
                  : "bg-white text-gray-600 hover:bg-gray-100"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8">
          {tabs.map((tab) =>
            activeTab === tab.id ? (
              <div key={tab.id}>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  {tab.label}
                </h2>

                <p className="text-gray-600 leading-7">{tab.content}</p>
              </div>
            ) : null,
          )}
        </div>
      </div>
    </div>
  );
};

export default Tabs;
        