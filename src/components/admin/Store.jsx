import React from "react";

const Store = () => {
  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-primary">Store Management</h2>
        <button className="bg-primary hover:bg-primary-dark text-white font-semibold py-2 px-4 rounded-lg transition-colors">
          Add New Product
        </button>
      </div>
      <p className="text-gray-600 mb-4">
        Manage products, orders, and inventory below.
      </p>
      {/* Table */}
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
                Inventory
              </th>
              <th className="px-4 py-3 text-center text-sm font-medium text-gray-700">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {/* Example Row */}
            <tr>
              <td className="px-4 py-3">
                <img
                  src="https://via.placeholder.com/50"
                  alt="Product"
                  className="w-12 h-12 object-cover rounded"
                />
              </td>
              <td className="px-4 py-3 text-gray-700">Prayer Mat</td>
              <td className="px-4 py-3 text-gray-700">$25.00</td>
              <td className="px-4 py-3 text-gray-700">100</td>
              <td className="px-4 py-3 text-center">
                <button className="bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium px-3 py-1 rounded mr-2">
                  Edit
                </button>
                <button className="bg-red-500 hover:bg-red-600 text-white text-sm font-medium px-3 py-1 rounded">
                  Delete
                </button>
              </td>
            </tr>
            {/* Repeat additional rows or map your product data */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Store;
