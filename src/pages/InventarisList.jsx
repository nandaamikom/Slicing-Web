import React, { useState } from "react";
import SearchFilter from "../components/SearchFilter";
import Table from "../components/Table";
import Pagination from "../components/Pagination";
import { dummyData } from "../assets/data";

export default function InventarisList() {
  const [items, setItems] = useState(dummyData);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const filteredData = items.filter((item) =>
    item.nama.toLowerCase().includes(search.toLowerCase()) &&
    (category === "" || item.kategori === category)
  );

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const indexLast = currentPage * itemsPerPage;
  const indexFirst = indexLast - itemsPerPage;
  const currentData = filteredData.slice(indexFirst, indexLast);

  const handleDelete = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

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
