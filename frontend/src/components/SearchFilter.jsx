import React from "react";
import { Search } from "lucide-react";

export default function SearchFilter({ search, setSearch, category, setCategory }){
    const categories = [
        { value: "", label: "Semua Kategori" },
        { value: "Elektronik", label: "Elektronik" },
        { value: "Furniture", label: "Furniture" },
        { value: "Peralatan", label: "Peralatan" },
        { value: "Alat Tulis", label: "Alat Tulis" }
    ];
    
    return (
        <div className="flex gap-4 mb-12 mt-4 items-center">
            <div className="relative">
                <input 
                    type="text"
                    placeholder="Cari Barang..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="border border-gray-300 pl-10 pr-4 py-2 rounded w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <Search className="h-5 w-5 text-gray-400" />
                </div>
            </div>
            <div className="relative">
                <select 
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="border border-gray-300 px-4 py-2 rounded w-47 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 pr-8"
                >
                    {categories.map(cat => (
                        <option key={cat.value} value={cat.value}>
                            {cat.label}
                        </option>
                    ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                    </svg>
                </div>
            </div>
        </div>
    );
}
