import React, { useState } from "react";
import {
  Settings,
  Package,
  MessageSquare,
  Calendar,
  BookOpen,
  Users,
} from "lucide-react";

const Admin = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  const tabs = [
    { id: "dashboard", name: "Dashboard", icon: Settings },
    { id: "store", name: "Store", icon: Package },
    { id: "qanda", name: "Q&A", icon: MessageSquare },
    { id: "events", name: "Events", icon: Calendar },
    { id: "blog", name: "Blog", icon: BookOpen },
    { id: "members", name: "Members", icon: Users },
  ];

  return (
    <div className="pt-32 min-h-screen bg-gray-50">
      <div className="container">
        <h1 className="text-4xl font-bold mb-8">Admin Dashboard</h1>

        <div className="bg-white rounded-xl shadow-lg">
          <div className="border-b">
            <div className="flex overflow-x-auto">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-6 py-4 border-b-2 transition-colors ${
                    activeTab === tab.id
                      ? "border-primary text-primary"
                      : "border-transparent text-gray-500 hover:text-primary"
                  }`}
                >
                  <tab.icon size={20} />
                  {tab.name}
                </button>
              ))}
            </div>
          </div>

          <div className="p-6">
            {activeTab === "dashboard" && (
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-primary/5 rounded-lg p-6">
                  <h3 className="font-semibold mb-2">Total Members</h3>
                  <p className="text-3xl font-bold">250</p>
                </div>
                <div className="bg-primary/5 rounded-lg p-6">
                  <h3 className="font-semibold mb-2">Pending Questions</h3>
                  <p className="text-3xl font-bold">12</p>
                </div>
                <div className="bg-primary/5 rounded-lg p-6">
                  <h3 className="font-semibold mb-2">Upcoming Events</h3>
                  <p className="text-3xl font-bold">3</p>
                </div>
              </div>
            )}

            {/* Add other tab content here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
