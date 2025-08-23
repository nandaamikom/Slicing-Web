import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Home, CopyPlus, LogOut, Menu, X } from "lucide-react";
import userIcon from "../assets/user.webp";
import logo from "../assets/react.svg";

export default function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      {/* Hamburger Button for Mobile */}
      <button
        onClick={toggleSidebar}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-gray-900 text-white rounded-md"
      >
        {isSidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Sidebar Overlay for Mobile */}
      {isSidebarOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleSidebar}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        bg-gray-900 text-gray-100 w-64 h-screen flex flex-col fixed left-0 top-0 z-40
        transition-transform duration-300 ease-in-out
        lg:translate-x-0
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
      {/* Logo Section */}
      <div className="px-4 py-6 border-b border-gray-700 flex items-center justify-center">
        <img
          src={logo}
          alt="App Logo"
          className="w-6 h-6"
        />
        <h1 className="text-xl font-bold ml-3">Inventaris App</h1>
      </div>

      {/* User Profile */}
      <div className="flex items-center gap-3 px-4 py-6 border-b border-gray-700">
        <img
          src={userIcon}
          alt="User Avatar"
          className="w-10 h-10 rounded-full"
        />
        <div>
          <h2 className="text-sm font-semibold">Septian Nanda</h2>
          <span className="text-xs text-green-400">● Online</span>
        </div>
      </div>

      <nav className="flex-1 px-4 py-4 space-y-4 text-lg">
        <Link to="/" className="flex items-center py-2 px-3 rounded hover:bg-gray-800 text-blue-500 hover:text-blue-600 transition-all duration-100 ease-in-out delay-100">
          <Home className="w-5 h-5 mr-2" />
          Dashboard
        </Link>
        <Link to="/add" className="flex items-center py-2 px-3 rounded hover:bg-gray-800 text-blue-500 hover:text-blue-600 transition-all duration-100 ease-in-out delay-100">
          <CopyPlus className="w-5 h-5 mr-2" />
          Tambah Barang
        </Link>
      </nav>

      {/* Logout */}
      <div className="p-4 border-t border-gray-700">
        <Link
          to="/logout"
          className="flex items-center py-2 px-3 rounded hover:bg-gray-800 text-red-400 hover:text-red-500 transition-all duration-100 ease-in-out delay-100"
        >
          <LogOut className="w-5 h-5 mr-2" />
          Logout
        </Link>
      </div>
    </aside>
    </>
  );
}
