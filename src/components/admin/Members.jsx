import React, { useState } from "react";

const Members = () => {
  const [showModal, setShowModal] = useState(false);
  const [adminMembers, setadminMembers] = useState([
    {
      id: 1,
      name: "MSSN ADMIN",
      email: "mssnabuad21@gmail.com",
      role: "Admin",
    },
  ]);

  const handleAddEXCO = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("auth_token");
      await axios.post(
        "https://mssn.pythonanywhere.com/api/exco",
        { name, price, description, image_url },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      if ((!name == "", !price == 0, !image_url == "")) {
        toast.success("EXCO added");
        // Clear form fields
        setName("");
        setPrice(0);
        setDescription("");
        setImageUrl("");
        // Refetch products
        const response = await axios.get(
          "https://mssn.pythonanywhere.com/api/exco",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setProducts(response.data);
        setShowModal(false);
      }
    } catch (error) {
      console.error("Error adding product:", error);
      toast.error("An error occurred");
    }
  };

  // const handleDeleteEXCO = async (id) => {
  //   try {
  //     const token = localStorage.getItem("auth_token");
  //     await axios.delete(
  //       `https://mssn.pythonanywhere.com/api/products/${id}`,
  //       {
  //         headers: { Authorization: `Bearer ${token}` },
  //       }
  //     );
  //     toast.success("Product deleted successfully!");
  //   } catch (error) {
  //     console.error("Error deleting product:", error);
  //     toast.success("An error occurred while deleting the product");
  //   }
  // };

  const deleteEXCO = (memberID) => {
    setadminMembers(adminMembers.filter((members) => members.id !== memberID));
  };

  return (
    <div className="p-6">
      {/* Header with "Add Member" Button */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-primary">Member Management</h2>
        <button
          onClick={() => setShowModal(true)}
          className="bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded-lg transition-colors"
        >
          Add Member
        </button>
      </div>
      <p className="text-gray-600 mb-4">
        This section is for current EXCO members and Admin.
      </p>
      {/* Members Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">
                Name
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">
                Email
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">
                Role
              </th>

              <th className="px-4 py-3 text-center text-sm font-medium text-gray-700">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {adminMembers.map((member) => (
              <tr key={member.id}>
                <td className="px-4 py-3 text-gray-700">{member.name}</td>
                <td className="px-4 py-3 text-gray-700">{member.email}</td>
                <td className="px-4 py-3 text-gray-700">{member.role}</td>

                <td className="px-4 py-3 text-center">
                  <button
                    className="bg-red-500 hover:bg-red-600 text-white text-sm font-medium py-1 px-3 rounded"
                    onClick={() => deleteEXCO(member.id)}
                  >
                    Remove
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

            <form onSubmit={handleAddEXCO} className="space-y-4">
              <input
                type="text"
                placeholder="Name"
                // value={name}
                // onChange={(e) => setName(e.target.value)}
                className="w-full p-2 border rounded mb-2"
                required
              />
              <input
                type="email"
                placeholder="email"
                // value={email}
                // onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 border rounded mb-2"
                required
              />
              <input
                type="text"
                placeholder="Role"
                // value={name}
                // onChange={(e) => setRole(e.target.value)}
                className="w-full p-2 border rounded mb-2"
                required
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

export default Members;
