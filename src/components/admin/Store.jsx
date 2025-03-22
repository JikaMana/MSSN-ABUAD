import React, { useState, useEffect } from "react";
import { Pencil, Trash } from "lucide-react";
import axios from "axios";

const Store = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [inventory, setInventory] = useState(0);
  const [image_url, setImageUrl] = useState("");
  const [products, setProducts] = useState([]);
    const [showModal, setShowModal] = useState(false);
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    description: "",
    image: "",
  });

  // Fetch products on component mount
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const token = localStorage.getItem("auth_token");
        const response = await axios.get("http://127.0.0.1:5000/api/products", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  // Add product
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("auth_token");
      await axios.post(
        "http://127.0.0.1:5000/api/products",
        { name, price, inventory, image_url },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      alert("Product added successfully!");
      // Clear form fields
      setName("");
      setPrice(0);
      setInventory(0);
      setImageUrl("");
      // Refetch products
      const response = await axios.get("http://127.0.0.1:5000/api/products", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setProducts(response.data);
    } catch (error) {
      console.error("Error adding product:", error);
      alert("An error occurred");
    }
  };
  
    const handleChange = (e) => {
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
  };

  const handleAddProduct = () => {
    if (!newProduct.name || !newProduct.price || !newProduct.description) {
      alert("Please fill all fields.");
      return;
    }
    setProducts([...products, { ...newProduct, id: Date.now() }]);
    setNewProduct({ name: "", price: "", description: "", image: "" });
    setShowModal(false);
  };

  const deleteProduct = (id) => {
    const currentProduct = products.filter((product) => product.id !== id);
    setProducts(currentProduct);
  };
  console.log(products);

  return (
    <div className="p-6">
      {/* Add Product Form */}
      <div className="mb-8">
        <h3 className="text-xl font-bold mb-4">Add New Product</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Product Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border rounded"
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
          <input
            type="number"
            placeholder="Inventory"
            value={inventory}
            onChange={(e) => setInventory(parseInt(e.target.value))}
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="text"
            placeholder="Image URL"
            value={image_url}
            onChange={(e) => setImageUrl(e.target.value)}
            className="w-full p-2 border rounded"
          />
          <button
            type="submit"
            className="bg-primary hover:bg-primary-dark text-white font-semibold py-2 px-4 rounded-lg transition-colors"
          >
            Add Product
          </button>
        </form>
      </div>

      {/* Product Table */}
      <h3 className="text-xl font-bold mb-4">Products</h3>

const Store = () => {









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
                <td className="px-4 py-3 text-gray-700">{product.inventory}</td>
                <td className="px-4 py-3 text-center">
                   <button className="bg-blue-500 hover:bg-blue-600  text-white text-sm font-medium px-3 py-2 rounded mr-2">
                    <Pencil />
                  </button>
                 <button
                    className="bg-red-500 hover:bg-red-600 text-white text-sm font-medium px-3 py-2 rounded"
                    onClick={() => deleteProduct(product.id)}
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
            <h3 className="text-xl font-semibold mb-4">Add New Product</h3>
            <input
              type="text"
              name="name"
              placeholder="Product Name"
              value={newProduct.name}
              onChange={handleChange}
              className="w-full p-2 border rounded mb-2"
            />
            <input
              type="number"
              name="price"
              placeholder="Price"
              value={newProduct.price}
              onChange={handleChange}
              className="w-full p-2 border rounded mb-2"
            />
            <textarea
              name="description"
              placeholder="Description"
              value={newProduct.description}
              onChange={handleChange}
              className="w-full p-2 border rounded mb-2"
            />
            {/* <input
              type="text"
              name="image"
              placeholder="Image URL"
              value={newProduct.image}
              onChange={handleChange}
              className="w-full p-2 border rounded mb-4"
            /> */}
            <input
              name="image"
              type="file"
              required
              placeholder="Image"
              accept=".webp, .avif, .png, .jpx, .jpeg, .svg"
              className="w-full h-12 border border-gray-300 p-3 text-sm font-medium text-gray-700 transition-placeholder"
            />

            <div className="flex justify-between mt-4">
              <button
                onClick={() => setShowModal(false)}
                className="bg-red-500 hover:bg-gray-600 text-white px-4 py-2 rounded"
              >
                Cancel
              </button>
              <button
                onClick={handleAddProduct}
                className="bg-green-600 hover:bg-green-500 text-white px-4 py-2 rounded"
              >
                Add
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Store;