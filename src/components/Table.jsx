import React from "react";
import { Link } from "react-router-dom";

export default function Table({data, handleDelete}){
    return (
        <table className="w-full border-collapse border border-gray-300 table-fixe mb-8">
            <thead className="bg-gray-400">
                <tr>
                    <th className="border p-2 w-16">ID</th>
                    <th className="border p-2 w-1/4">Nama</th>
                    <th className="border p-2 w-1/5">Kategori</th>
                    <th className="border p-2 w-20">Jumlah</th>
                    <th className="border p-2 w-1/5">Kondisi</th>
                    <th className="border p-2 w-40">Aksi</th>
                </tr>
            </thead>
            <tbody>
                {data.map((item) => (
                    <tr key={item.id} className="text-center">
                        <td className="border p-2 truncate">{item.id}</td>
                        <td className="border p-2 truncate">{item.nama}</td>
                        <td className="border p-2 truncate">{item.kategori}</td>
                        <td className="border p-2">{item.jumlah}</td>
                        <td className="border p-2 truncate">{item.kondisi}</td>
                        <td className="border p-2 space-x-2">
                            <Link
                            to={`/detail/${item.id}`}
                            className="bg-blue-600 text-white px-2 py-1 rounded cursor-pointer hover:bg-blue-500 no-underline hover:text-white"
                            > Detail
                            </Link>
                            <Link
                            to={`/edit/${item.id}`}
                            className="bg-yellow-600 text-white px-2 py-1 rounded cursor-pointer hover:bg-yellow-500 no-underline hover:text-white"
                            > Edit
                            </Link>
                            <button onClick={() => handleDelete(item.id)}
                            className="bg-red-600 text-white px-2 py-1 rounded cursor-pointer hover:bg-red-500 no-underline hover:text-white focus:outline-none focus:ring-0 active:outline-none active:ring-0"
                            > Hapus
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}