import React from "react";

const QnA = () => {
  return (
    <div className="p-6">
      {/* Header and Search */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-primary">Q&A Moderation</h2>
        <input
          type="text"
          placeholder="Search questions..."
          className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>
      <p className="text-gray-600 mb-4">
        This section allows you to moderate and manage questions and answers.
      </p>
      {/* Q&A Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">
                Question
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">
                Mail
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">
                Date
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
              <td className="px-4 py-3 text-gray-700">
                What is the significance of prayer in Islam?
              </td>
              <td className="px-4 py-3 text-gray-700">sample1mail@mail.com</td>
              <td className="px-4 py-3 text-gray-700">2024-04-01</td>
              <td className="px-4 py-3 text-center">
                <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs font-semibold">
                  Pending
                </span>
              </td>
              <td className="px-4 py-3 text-center">
                <button className="bg-green-500 hover:bg-green-600 text-white text-sm font-medium px-3 py-1 rounded mr-2">
                  Approve
                </button>
                <button className="bg-red-500 hover:bg-red-600 text-white text-sm font-medium px-3 py-1 rounded">
                  Reject
                </button>
              </td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-gray-700">
                How do I perform Wudu correctly?
              </td>
              <td className="px-4 py-3 text-gray-700">sample2mail@mail.com</td>
              <td className="px-4 py-3 text-gray-700">2024-04-02</td>
              <td className="px-4 py-3 text-center">
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-semibold">
                  Approved
                </span>
              </td>
              <td className="px-4 py-3 text-center">
                <button className="bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium px-3 py-1 rounded mr-2">
                  Edit
                </button>
                <button className="bg-red-500 hover:bg-red-600 text-white text-sm font-medium px-3 py-1 rounded">
                  Delete
                </button>
              </td>
            </tr>
            {/* Additional rows would be rendered here */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default QnA;
