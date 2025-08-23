// src/components/Pagination.jsx
import React from "react";

export default function Pagination({ currentPage, totalPages, onPageChange }) {
  return (
    <div className="flex justify-center space-x-2 mt-8">
      {/* Tombol Previous */}
      <button
        className={`px-3 py-1 rounded-lg ${
          currentPage === 1
            ? "bg-gray-300 text-gray-600 cursor-not-allowed"
            : "bg-blue-500 text-white hover:bg-blue-600"
        }`}
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Prev
      </button>

      {/* Nomor Halaman */}
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <button
          key={page}
          className={`px-3 py-1 rounded-lg ${
            page === currentPage
              ? "bg-blue-600 text-white font-bold"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
          onClick={() => onPageChange(page)}
        >
          {page}
        </button>
      ))}

      {/* Tombol Next */}
      <button
        className={`px-3 py-1 rounded-lg ${
          currentPage === totalPages
            ? "bg-gray-300 text-gray-600 cursor-not-allowed"
            : "bg-blue-500 text-white hover:bg-blue-600"
        }`}
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
}
