import React, { useState } from "react";
import { MessageSquare, Send } from "lucide-react";

const QandA = () => {
  const [question, setQuestion] = useState("");

  const questions = [
    {
      id: 1,
      question: "What are the requirements for joining MSSN ABUAD?",
      answer:
        "Any Muslim student at ABUAD can join MSSN. Simply attend our meetings and register with the membership committee.",
      date: "2024-03-10",
    },
    {
      id: 2,
      question: "How can I participate in the Qur'an competition?",
      answer:
        "Register through our website or contact the program coordinator. Competitions are held annually with different categories.",
      date: "2024-03-08",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setQuestion("");
  };

  return (
    <div className="pt-32 pb-16">
      <div className="container">
        <div className="ml-6 mb-4">
          <h1 className="text-4xl font-bold mb-4">Community Forum</h1>
          <p className="text-lg text-gray-600">
            Have questions? Looking for answers? Our community is here to help.
            Engage in meaningful discussions, share insights, and get the
            guidance you need.
          </p>
        </div>

        {/* Ask Question Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-xl shadow-lg p-6 mb-8"
        >
          <h2 className="text-xl font-semibold mb-4">Ask a Question</h2>
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-y-1 gap-x-4 sm:items-center">
              <label htmlFor="email" className="w-full">
                Enter your email
              </label>
              <input
                name="email"
                type="email"
                placeholder="Type your email to receive answer"
                className="w-full  h-12 p-4 rounded-lg border-2 border-primary"
              />
            </div>
            <textarea
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="Type your question here..."
              className="w-full h-32 p-4 rounded-lg border-2 border-primary"
            />
            <button
              type="submit"
              className="btn btn-primary flex items-center gap-2"
            >
              <Send size={20} />
              Submit Question
            </button>
          </div>
        </form>

        {/* Questions List */}
        <div className="space-y-6">
          {questions.map((q) => (
            <div key={q.id} className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <MessageSquare className="text-primary" size={20} />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-2">{q.question}</h3>
                  <p className="text-gray-600 mb-4">{q.answer}</p>
                  <div className="text-sm text-gray-500">
                    Asked on {new Date(q.date).toLocaleDateString()}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QandA;
