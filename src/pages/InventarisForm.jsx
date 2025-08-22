import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { dummyData } from "../assets/data";

export default function InventarisForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const existingItem = dummyData.find((item) => item.id === parseInt(id));

  const [form, setForm] = useState(
    existingItem || { nama: "", kategori: "", jumlah: "", kondisi: "" }
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Data berhasil disimpan (dummy).");
    navigate("/");
  };

  return (
    <div className="w-full bg-white shadow rounded-lg p-6">
      <div className="max-w-md">
        <h2 className="text-xl font-bold mb-4">
          {id ? "Edit Barang" : "Tambah Barang"}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Nama Barang"
          value={form.nama}
          onChange={(e) => setForm({ ...form, nama: e.target.value })}
          className="w-full border px-3 py-2 rounded"
          required
        />
        <input
          type="text"
          placeholder="Kategori"
          value={form.kategori}
          onChange={(e) => setForm({ ...form, kategori: e.target.value })}
          className="w-full border px-3 py-2 rounded"
          required
        />
        <input
          type="number"
          placeholder="Jumlah"
          value={form.jumlah}
          onChange={(e) => setForm({ ...form, jumlah: e.target.value })}
          className="w-full border px-3 py-2 rounded"
          required
        />
        <input
          type="text"
          placeholder="Kondisi"
          value={form.kondisi}
          onChange={(e) => setForm({ ...form, kondisi: e.target.value })}
          className="w-full border px-3 py-2 rounded"
          required
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Simpan
        </button>
      </form>
      </div>
    </div>
  );
}
