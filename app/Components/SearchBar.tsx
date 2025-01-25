'use client'
import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";

const SearchBarWithDropdown = () => {
  const [searchInput, setSearchInput] = useState<string>("");
  const [filteredData, setFilteredData] = useState<Product[]>([]);

  // Define the Product type
interface Product {
  id: number;
  name: string;
}
   // Sample product data for demonstration
   const products: Product[] = [
    { id: 1, name: "Hoodie" },
    { id: 2, name: "Jeans" },
    { id: 3, name: "Shirt" },
    { id: 4, name: "TShirt" },
    { id: 5, name: "Casual Wear" },
    { id: 6, name: "Formal Suit" },
    { id: 7, name: "Gym Wear" },
    { id: 8, name: "Party Dress" },
  ];

  // Handle input change and filter data
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchInput(query);

    if (query.trim()) {
      const filtered = products.filter((product) =>
        product.name.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredData(filtered);
    } else {
      setFilteredData([]);
    }
  };

  // Handle item selection
  const handleSelectProduct = (product: Product) => {
    console.log("Selected Product:", product);
    setSearchInput(product.name); // Set selected product name in input
    setFilteredData([]); // Close dropdown
  };

  return (
    <div className="relative w-full max-w-md">
      {/* Search Input */}
      <div className="w-full h-[48px] flex items-center bg-gray-100 rounded-full px-4 space-x-2">
        <CiSearch className="text-gray-600 w-6 h-6 cursor-pointer" />
        <input
          type="text"
          placeholder="Search for items..."
          value={searchInput}
          onChange={handleInputChange}
          className="bg-transparent text-sm focus:outline-none w-full h-full"
        />
      </div>

      {/* Dropdown Results */}
      {filteredData.length > 0 && (
        <div className="absolute top-[50px] left-0 w-full bg-white shadow-md rounded-md z-10 max-h-60 overflow-y-auto">
          {filteredData.map((product, index) => (
            <div
              key={index}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => handleSelectProduct(product)}
            >
              {product.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBarWithDropdown;

