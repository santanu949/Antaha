import React from 'react';

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between p-6 max-w-[1180px] mx-auto w-full">
      <div className="font-bold text-xl">Logo</div>
      <div className="flex gap-6">
        <a href="#" className="nav-link text-[15px] font-medium text-gray-600 hover:text-gray-900">Home</a>
        <a href="#" className="nav-link text-[15px] font-medium text-gray-600 hover:text-gray-900">Services</a>
        <a href="#" className="nav-link text-[15px] font-medium text-gray-900">Contact</a>
      </div>
      <button className="get-started-btn px-4 py-2 rounded-lg border border-gray-300 text-[15px] font-medium text-gray-900">
        Get started
      </button>
    </nav>
  );
}
