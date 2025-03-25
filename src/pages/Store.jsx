import React, { useEffect, useState } from "react";
import axios from "axios";

const Store = () => {
  const [products, setProducts] = useState([]);

  // Fetch products on component mount
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:5000/api/products");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-primary mb-6">Store</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">
                Image
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">
                Product Name
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">
                Price
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">
                Description
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {products.map((product) => (
              <tr key={product.id}>
                <td className="px-4 py-3">
                  <img
                    src={product.image_url || "https://via.placeholder.com/50"}
                    alt={product.name}
                    className="w-12 h-12 object-cover rounded"
                  />
                </td>
                <td className="px-4 py-3 text-gray-700">{product.name}</td>
                <td className="px-4 py-3 text-gray-700">${product.price}</td>
                <td className="px-4 py-3 text-gray-700">{product.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Store;