import React from "react";

const HolyGrail = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Header */}
      <header className="bg-gradient-to-r from-gray-900 to-gray-700 text-white px-6 py-5 shadow-md">
        <h1 className="text-2xl sm:text-3xl font-bold">Holy Grail Layout</h1>
      </header>

      {/* Main Layout */}
      <main className="flex-1 flex flex-col lg:flex-row gap-4 p-4">
        {/* Left Sidebar */}
        <aside className="lg:w-64 bg-white rounded-2xl shadow-md p-6">
          <h2 className="text-xl font-bold mb-4 text-gray-800">Sidebar</h2>

          <ul className="space-y-3 text-gray-600">
            <li className="hover:text-black cursor-pointer transition">
              Dashboard
            </li>

            <li className="hover:text-black cursor-pointer transition">
              Profile
            </li>

            <li className="hover:text-black cursor-pointer transition">
              Settings
            </li>

            <li className="hover:text-black cursor-pointer transition">
              Analytics
            </li>
          </ul>
        </aside>

        {/* Main Content */}
        <section className="flex-1 bg-white rounded-2xl shadow-md p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Main Content
          </h2>

          <p className="text-gray-600 leading-7">
            This is the main content area of the Holy Grail layout. It expands
            dynamically and takes the remaining available width.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mt-6">
            <div className="bg-gray-100 rounded-xl p-4">Card 1</div>

            <div className="bg-gray-100 rounded-xl p-4">Card 2</div>

            <div className="bg-gray-100 rounded-xl p-4">Card 3</div>
          </div>
        </section>

        {/* Right Sidebar */}
        <aside className="lg:w-64 bg-white rounded-2xl shadow-md p-6">
          <h2 className="text-xl font-bold mb-4 text-gray-800">
            Ads / Widgets
          </h2>

          <div className="space-y-4">
            <div className="bg-blue-100 rounded-xl p-4">Advertisement</div>

            <div className="bg-green-100 rounded-xl p-4">Latest News</div>

            <div className="bg-yellow-100 rounded-xl p-4">Notifications</div>
          </div>
        </aside>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white px-6 py-4 text-center">
        <p className="text-sm sm:text-base">
          © 2026 Holy Grail Layout. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default HolyGrail;
