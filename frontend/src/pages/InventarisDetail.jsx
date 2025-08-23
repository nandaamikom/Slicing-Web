import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { inventoryAPI } from "../services/api";

export default function InventarisDetail() {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const data = await inventoryAPI.getById(id);
        setItem(data);
      } catch (err) {
        setError(err.message);
        console.error('Failed to fetch item details:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchItem();
  }, [id]);

  if (loading) {
    return <div className="flex justify-center items-center h-64">Loading...</div>;
  }

  if (error) {
    return <div className="text-red-500 p-4">Error: {error}</div>;
  }

  if (!item) {
    return <p className="p-6">Barang tidak ditemukan</p>;
  }

  return (
    <div className="w-full bg-white shadow rounded-lg p-6">
      <div className="max-w-md">
        <h2 className="text-xl font-bold mb-4">Detail Barang</h2>
        <div className="space-y-2">
          <p className="border p-2"><b>Nama:</b> {item.nama}</p>
          <p className="border p-2"><b>Kategori:</b> {item.kategori}</p>
          <p className="border p-2"><b>Jumlah:</b> {item.jumlah}</p>
          <p className="border p-2"><b>Kondisi:</b> {item.kondisi}</p>
        </div>
      
        <Link
          to="/"
          className="mt-4 inline-block bg-blue-500 hover:bg-blue-600 text-white hover:text-white px-4 py-2 rounded"
        >
          Kembali
        </Link>
      </div>
    </div>
  );
}
