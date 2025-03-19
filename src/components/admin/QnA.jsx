import React, { useState } from "react";

const QnA = () => {
  const [questions] = useState([
    {
      id: 1,
      text: "What is the significance of prayer in Islam?",
      email: "sample1mail@mail.com",
      date: "2024-04-01",
      status: "Pending",
    },
    {
      id: 2,
      text: "How do I perform Wudu correctly?",
      email: "sample2mail@mail.com",
      date: "2024-04-02",
      status: "Answered",
    },
    {
      id: 3,
      text: "What are the benefits of fasting in Ramadan?",
      email: "sample3mail@mail.com",
      date: "2024-04-03",
      status: "Pending",
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");

  const filteredQuestions = questions.filter((q) =>
    q.text.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-primary">Q&A Moderation</h2>
        <input
          type="text"
          placeholder="Search questions word..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>
      <p className="text-gray-600 mb-4">
        This section allows you to moderate and manage questions and answers.
      </p>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">
                Question
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">
                Email
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
            {filteredQuestions.map((q) => (
              <tr key={q.id}>
                <td className="px-4 py-3 text-gray-700">{q.text}</td>
                <td className="px-4 py-3 text-gray-700">{q.email}</td>
                <td className="px-4 py-3 text-gray-700">{q.date}</td>
                <td className="px-4 py-3 text-center">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-semibold ${
                      q.status === "Pending"
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-green-100 text-green-800"
                    }`}
                  >
                    {q.status}
                  </span>
                </td>
                <td className="px-4 py-3 text-center">
                  <button
                    className={`text-white text-sm font-medium px-3 py-1 rounded mr-2 ${
                      q.status === "Answered"
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-green-500 hover:bg-green-600"
                    }`}
                    disabled={q.status === "Answered"}
                  >
                    Answer
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

export default QnA;
