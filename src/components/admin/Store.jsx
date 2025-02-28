import { Pencil, Trash } from "lucide-react";
import React, { useEffect, useState } from "react";

const Store = () => {
  const [products, setProducts] = useState([
    {
      id: 12312345,
      name: "Prayer Mat",
      price: 5000,
      description: "High-quality prayer mat",
      image: "https://via.placeholder.com/50",
    },
    {
      id: 1234545,
      name: "Islamic Kettle",
      price: 800,
      description: "Stainless steel kettle for wudu",
      image: "https://via.placeholder.com/50",
    },
    {
      id: 1097894,
      name: "Cap",
      price: 1200,
      description: "Elegant cap with embroidery",
      image: "https://via.placeholder.com/50",
    },
    {
      id: 1564545,
      name: "Jalabiya",
      price: 12500,
      description: "Comfortable and stylish jalabiya for brothers",
      image: "https://via.placeholder.com/50",
    },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    description: "",
    image: "",
  });

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
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-primary">Store Management</h2>
        <button
          onClick={() => setShowModal(true)}
          className="bg-primary hover:bg-primary-dark text-white font-semibold py-2 px-4 rounded-lg transition-colors"
        >
          Add New Product
        </button>
      </div>
      <p className="text-gray-600 mb-4">
        Manage products, orders, and inventory below.
      </p>

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
                    src={product.image}
                    alt={product.name}
                    className="w-12 h-12 object-cover rounded"
                  />
                </td>
                <td className="px-4 py-3 text-gray-700">{product.name}</td>
                <td className="px-4 py-3 text-gray-700">N{product.price}</td>
                <td className="px-4 py-3 text-gray-700 max-w-72">
                  {product.description}
                </td>
                <td className="px-4 py-3 text-center">
                  {/* <button className="bg-blue-500 hover:bg-blue-600  text-white text-sm font-medium px-3 py-2 rounded mr-2">
                    <Pencil />
                  </button> */}
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
