import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { inventoryAPI } from "../services/api";
import { Package, Tag, BriefcaseMedical, TrendingUp, Save, ArrowLeft } from "lucide-react";

export default function InventarisForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [form, setForm] = useState({
    nama: "",
    kategori: "",
    jumlah: "",
    kondisi: "Baik"
  });
  const [pageLoading, setPageLoading] = useState(true);
  
  useEffect(() => {
    const initializeForm = async () => {
      try {
        // Add delay for both add and edit forms
        await new Promise(resolve => setTimeout(resolve, 200));
        
        if (id) {
          // For editing: fetch existing item data
          const item = await inventoryAPI.getById(id);
          setForm({
            nama: item.nama,
            kategori: item.kategori,
            jumlah: item.jumlah.toString(),
            kondisi: item.kondisi
          });
        }
      } catch (err) {
        setError(err.message);
        console.error('Failed to initialize form:', err);
      } finally {
        setPageLoading(false);
      }
    };

    initializeForm();
  }, [id]);

  if (pageLoading) {
    return (
       <div className="flex justify-center items-center min-h-screen w-full bg-gray-100">Loading...</div>
    );
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const itemData = {
        nama: form.nama,
        kategori: form.kategori,
        jumlah: parseInt(form.jumlah),
        kondisi: form.kondisi
      };

      if (id) {
        await inventoryAPI.update(id, itemData);
      } else {
        await inventoryAPI.create(itemData);
      }
      
      navigate("/");
    } catch (err) {
      setError(err.message);
      console.error('Failed to save item:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full bg-white shadow-md rounded-xl p-8">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3"> 
            <h2 className="text-2xl font-bold text-gray-800">
              {id ? "Edit Barang" : "Tambah Barang Baru"}
            </h2>
          </div>
          <button
            onClick={() => navigate("/")}
            className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Kembali</span>
          </button>
        </div>

        {/* Error Message */}
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6">
            {error}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Nama Barang Field */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700 flex items-center space-x-2">
              <Package className="w-4 h-4" />
              <span>Nama Barang</span>
            </label>
            <input
              type="text"
              placeholder="Masukkan nama barang"
              value={form.nama}
              onChange={(e) => setForm({ ...form, nama: e.target.value })}
              className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              required
            />
          </div>

          {/* Kategori Field */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700 flex items-center space-x-2">
              <Tag className="w-4 h-4" />
              <span>Kategori</span>
            </label>
            <input
              type="text"
              placeholder="Masukkan kategori barang"
              value={form.kategori}
              onChange={(e) => setForm({ ...form, kategori: e.target.value })}
              className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              required
            />
          </div>

          {/* Jumlah Field */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700 flex items-center space-x-2">
              <BriefcaseMedical className="w-4 h-4" />
              <span>Jumlah</span>
            </label>
            <input
              type="number"
              placeholder="Masukkan jumlah barang"
              value={form.jumlah}
              onChange={(e) => setForm({ ...form, jumlah: e.target.value })}
              className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              min="1"
              required
            />
          </div>

          {/* Kondisi Field */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700 flex items-center space-x-2">
              <TrendingUp className="w-4 h-4" />
              <span>Kondisi</span>
            </label>
            <div className="relative">
              <select
                value={form.kondisi}
                onChange={(e) => setForm({ ...form, kondisi: e.target.value })}
                className="w-full border border-gray-300 px-4 py-3 pr-10 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all appearance-none"
                required
              >
                <option value="Baik">Baik</option>
                <option value="Rusak">Rusak</option>
                <option value="Perlu Perbaikan">Perlu Perbaikan</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-medium py-3 px-4 rounded-lg transition-all duration-200 flex items-center justify-center space-x-2"
          >
            {loading ? (
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
            ) : (
              <Save className="w-5 h-5" />
            )}
            <span>{loading ? "Menyimpan..." : "Simpan Barang"}</span>
          </button>
        </form>

        {/* Form Tips */}
        <div className="mt-8 p-4 bg-blue-50 rounded-lg">
          <h3 className="text-sm font-medium text-blue-800 mb-2">Tips Pengisian:</h3>
          <ul className="text-sm text-blue-600 space-y-1">
            <li>• Pastikan nama barang jelas dan deskriptif</li>
            <li>• Gunakan kategori yang konsisten untuk memudahkan pencarian</li>
            <li>• Periksa kondisi barang sebelum menambahkannya ke sistem</li>
          </ul>
        </div>
      </div>
    </div>
  );
}