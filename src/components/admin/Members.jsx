import React from "react";

const Members = () => {
  return (
    <div className="p-6">
      {/* Header with "Add Member" Button */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-primary">Member Management</h2>
        <button className="bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded-lg transition-colors">
          Add Member
        </button>
      </div>
      <p className="text-gray-600 mb-4">
        This section allows you to view and manage registered members.
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
                Status
              </th>
              <th className="px-4 py-3 text-center text-sm font-medium text-gray-700">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {/* Sample Row */}
            <tr>
              <td className="px-4 py-3 text-gray-700">John Doe</td>
              <td className="px-4 py-3 text-gray-700">john@example.com</td>
              <td className="px-4 py-3 text-gray-700">Member</td>
              <td className="px-4 py-3 text-center">
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-semibold">
                  Active
                </span>
              </td>
              <td className="px-4 py-3 text-center">
                <button className="bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium py-1 px-3 rounded mr-2">
                  Edit
                </button>
                <button className="bg-red-500 hover:bg-red-600 text-white text-sm font-medium py-1 px-3 rounded">
                  Delete
                </button>
              </td>
            </tr>
            {/* Repeat additional rows or map your member data */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Members;
