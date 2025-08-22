import React from "react";
import { useParams, Link } from "react-router-dom";
import { dummyData } from "../assets/data";

export default function InventarisDetail() {
  const { id } = useParams();
  const item = dummyData.find((item) => item.id === parseInt(id));

  if (!item) return <p className="p-6">Barang tidak ditemukan</p>;

  return (
    <div className="w-full bg-white shadow rounded-lg p-6">
      <form className="max-w-md">  <h2 className="text-xl font-bold mb-4 ">Detail Barang</h2>
      <p className="border p-2" ><b>Nama:</b> {item.nama}</p>
      <p className="border p-2"><b>Kategori:</b> {item.kategori}</p>
      <p className="border p-2"><b>Jumlah:</b> {item.jumlah}</p>
      <p className="border p-2"><b>Kondisi:</b> {item.kondisi}</p></form>
    
      <Link
        to="/"
        className="mt-4 inline-block bg-blue-500 hover:bg-blue-600 text-white hover:text-white px-4 py-2 rounded"
      >
        Kembali
      </Link>
    </div>
  );
}
