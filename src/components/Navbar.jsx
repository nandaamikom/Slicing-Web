import React from "react";
import { Link } from "react-router-dom";
import userIcon from "../assets/user.webp";
import logo from "../assets/react.svg";

export default function Navbar() {
  return (
    <aside className="bg-gray-900 text-gray-200 w-64 h-screen flex flex-col fixed left-0 top-0">
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

      <nav className="flex-1 px-4 py-4 space-y-1 text-lg">
        <Link to="/" className="block py-2 px-3 rounded hover:bg-gray-800">
          Dashboard
        </Link>
        <Link to="/add" className="block py-2 px-3 rounded hover:bg-gray-800">
          Tambah Barang
        </Link>
      </nav>

      {/* Logout */}
      <div className="p-4 border-t border-gray-700">
        <Link
          to="/logout"
          className="block py-2 px-3 rounded hover:bg-gray-800 text-red-400"
        >
          Logout
        </Link>
      </div>
    </aside>
  );
}
