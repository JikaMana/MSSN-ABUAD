import React, { useState } from "react";

const Members = () => {
  const [adminMembers, setadminMembers] = useState([
    {
      id: 1,
      name: "MSSN ADMIN",
      email: "mssnabuad@gmail.com",
      role: "Admin",
      status: "Active",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      role: "Moderator",
      status: "Active",
    },
    {
      id: 3,
      name: "Ahmed Ali",
      email: "ahmed@example.com",
      role: "Member",
      status: "Inactive",
    },
    {
      id: 4,
      name: "Fatima Yusuf",
      email: "fatima@example.com",
      role: "EXCO",
      status: "Active",
    },
  ]);

  const deleteItem = (memberID) => {
    setadminMembers(adminMembers.filter((members) => members.id !== memberID));
  };
  console.log(adminMembers);

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
            {adminMembers.map((member) => (
              <tr key={member.id}>
                <td className="px-4 py-3 text-gray-700">{member.name}</td>
                <td className="px-4 py-3 text-gray-700">{member.email}</td>
                <td className="px-4 py-3 text-gray-700">{member.role}</td>
                <td className="px-4 py-3 text-center">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-semibold ${
                      member.status === "Active"
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {member.status}
                  </span>
                </td>
                <td className="px-4 py-3 text-center">
                  {/* <button className="bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium py-1 px-3 rounded mr-2">
                    Edit
                  </button> */}
                  <button
                    className="bg-red-500 hover:bg-red-600 text-white text-sm font-medium py-1 px-3 rounded"
                    onClick={() => deleteItem(member.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Members;
