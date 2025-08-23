import React, { useState, useEffect } from "react";
import SearchFilter from "../components/SearchFilter";
import Table from "../components/Table";
import Pagination from "../components/Pagination";
import { inventoryAPI } from "../services/api";

export default function InventarisList() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Fetch data from API
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        await new Promise(resolve => setTimeout(resolve, 200)); 
        const data = await inventoryAPI.getAll();
        setItems(data);
      } catch (err) {
        setError(err.message);
        console.error('Failed to fetch inventory:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const filteredData = items.filter((item) =>
    item.nama.toLowerCase().includes(search.toLowerCase()) &&
    (category === "" || item.kategori === category)
  );

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const indexLast = currentPage * itemsPerPage;
  const indexFirst = indexLast - itemsPerPage;
  const currentData = filteredData.slice(indexFirst, indexLast);

  const handleDelete = async (id) => {
    try {
      await inventoryAPI.delete(id);
      setItems(items.filter((item) => item.id !== id));
    } catch (err) {
      setError(err.message);
      console.error('Failed to delete item:', err);
    }
  };

  if (loading) {
    return <div className="flex justify-center items-center min-h-screen w-full bg-gray-100">Loading...</div>;
  }

  if (error) {
    return <div className="text-red-500 p-4">Error: {error}</div>;
  }

 return (
    <div className="w-full">
      <div className="bg-white shadow rounded-lg p-4 w-full overflow-x-auto">
        <SearchFilter 
          search={search} 
          setSearch={setSearch}
          category={category}
          setCategory={setCategory}
        />
        <div className="w-full overflow-x-auto">
          <Table data={currentData} handleDelete={handleDelete} />
        </div>
        <div className="mt-6">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </div>
      </div>
    </div>
  );
}
