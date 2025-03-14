import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-blue-600">Byway</h1>
        </div>

        <nav className="hidden md:flex space-x-8">
          <a href="#" className="text-gray-700 hover:text-blue-600">
            Home
          </a>
          <a href="#" className="text-gray-700 hover:text-blue-600">
            Courses
          </a>
          <a href="#" className="text-gray-700 hover:text-blue-600">
            Categories
          </a>
          <a href="#" className="text-gray-700 hover:text-blue-600">
            Instructors
          </a>
          <a href="#" className="text-gray-700 hover:text-blue-600">
            About Us
          </a>
        </nav>

        <div className="flex items-center space-x-4">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            Sign In
          </button>
          <button className="border border-blue-600 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors">
            Sign Up
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;