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






// 'use client'
// import { client } from '@/sanity/lib/client'
// import React, { useEffect, useState } from 'react'

// const SearchBar = () => {
//   const [products, setProducts] = useState([]) // Ensure proper state type
//   const [search, setSearch] = useState('')

//   useEffect(() => {
//     const fetchData = async () => {
//       const query = `*[_type == "products"]{
//         _id,
//         name,
//         price,
//         category,
//         "imageUrl": image.asset -> url
//       }`
//       const fetchedProducts = await client.fetch(query)
//       setProducts(fetchedProducts)
//     }

//     fetchData() // Call the function inside useEffect
//   }, [])

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Search for Products..."
//         className="bg-[#F0F0F0] rounded-md"
//         onChange={(e) => setSearch(e.target.value.toLowerCase())}
//       />
//       <div>
//         {products
//           .filter((item:any) => (item.name.toLowerCase()).includes(search))
//           .map((item:any, index:any) => (
//             <div key={index} className="p-2 border-b cursor-pointer">
//              <p>{item.name}</p>
//             </div>
//           ))}
//       </div>
//     </div>
//   )
// }

// export default SearchBar
