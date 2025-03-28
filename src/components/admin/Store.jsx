import React, { useState, useEffect } from "react";
import { Pencil, Trash } from "lucide-react";
import axios from "axios";

const Store = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");

  const [image_url, setImageUrl] = useState("");
  const [products, setProducts] = useState([]);
  const [showModal, setShowModal] = useState(false);

  // Fetch products on component mount
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const token = localStorage.getItem("auth_token");
        const response = await axios.get(
          "https://mssn-abuad.onrender.com/api/products",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, [products]);

  // Add product
  const handleAddProduct = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("auth_token");
      await axios.post(
        "https://mssn-abuad.onrender.com/api/products",
        { name, price, description, image_url },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      if ((!name == "", !price == 0, !image_url == "")) {
        alert("Product added successfully!");
        // Clear form fields
        setName("");
        setPrice(0);
        setDescription("");
        setImageUrl("");
        // Refetch products
        const response = await axios.get(
          "https://mssn-abuad.onrender.com/api/products",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setProducts(response.data);
        setShowModal(false);
      }
    } catch (error) {
      console.error("Error adding product:", error);
      alert("An error occurred");
    }
  };

  const handleDeleteProduct = async (id) => {
    try {
      const token = localStorage.getItem("auth_token");
      await axios.delete(`https://mssn-abuad.onrender.com/api/products/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      alert("Product deleted successfully!");
    } catch (error) {
      console.error("Error deleting product:", error);
      alert("An error occurred while deleting the product");
    }
  };

  return (
    <div className="p-6">
      <div className="mb-8 flex justify-between">
        <h3 className="text-xl font-bold mb-4">Products</h3>

        <button
          type="submit"
          className="bg-primary hover:bg-primary-dark text-white font-semibold py-2 px-4 rounded-lg transition-colors"
          onClick={() => setShowModal(true)}
        >
          Add New Product
        </button>
      </div>

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
              <th className="px-4 py-3 text-center text-sm font-medium text-gray-700">
                Actions
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
                <td className="px-4 py-3 text-gray-700">N{product.price}</td>
                <td className="px-4 py-3 text-gray-700">
                  {product.description}
                </td>

                <td className="px-4 py-3 text-center">
                  <button
                    className="bg-red-500 hover:bg-red-600 text-white text-sm font-medium px-3 py-2 rounded"
                    onClick={() => handleDeleteProduct(product.id)}
                  >
                    <Trash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h3 className="text-xl font-semibold">Add New Product</h3>
            <h2 className="mb-4">You mst fill all fields to add a product</h2>

            <form onSubmit={handleAddProduct} className="space-y-4">
              <input
                type="text"
                placeholder="Product Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-2 border rounded mb-2"
                required
              />
              <input
                type="number"
                placeholder="Price"
                value={price}
                onChange={(e) => setPrice(parseFloat(e.target.value))}
                className="w-full p-2 border rounded"
                required
              />
              {/* remove Inventory field
               <input
                type="number"
                placeholder="Inventory"
                value={inventory}
                onChange={(e) => setInventory(parseInt(e.target.value))}
                className="w-full p-2 border rounded"
                required
              /> */}

              <textarea
                name="description"
                // value={description}
                // onChange={(e) => setDescription(e.target.value)}
                maxLength={100}
                placeholder="Description max of 100 characters"
                className="w-full p-2 border rounded mb-2"
              />
              <input
                type="text"
                placeholder="Image URL"
                value={image_url}
                onChange={(e) => setImageUrl(e.target.value)}
                className="w-full p-2 border rounded"
              />

              <div className="flex justify-between mt-4">
                <button
                  onClick={() => setShowModal(false)}
                  className="bg-red-500 hover:bg-gray-600 text-white px-4 py-2 rounded"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="bg-primary hover:bg-primary-dark text-white font-semibold py-2 px-4 rounded-lg transition-colors"
                >
                  Add Product
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Store;
