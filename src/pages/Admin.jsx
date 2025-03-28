import React, { useState } from "react";
import {
  Settings,
  Package,
  MessageSquare,
  Calendar,
  BookOpen,
  Users,
  Newspaper,
} from "lucide-react";
import Dashboard from "../components/admin/Dashboard";
import Store from "../components/admin/Store";
import PrayerTimes from "../components/admin/PrayerTimes";
import QnA from "../components/admin/QnA";
import Events from "../components/admin/Events";
import Blog from "../components/admin/Blog";
import Members from "../components/admin/Members";
import News from "../components/admin/News";

const Admin = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  const tabs = [
    { id: "dashboard", name: "Dashboard", icon: Settings },
    { id: "prayer", name: "Prayer Time", icon: Calendar },
    { id: "qanda", name: "Q&A", icon: MessageSquare },
    { id: "news", name: "News", icon: Newspaper },
    { id: "events", name: "Events", icon: Calendar },
    { id: "blog", name: "Blog", icon: BookOpen },
    { id: "store", name: "Store", icon: Package },
    { id: "members", name: "Members", icon: Users },
  ];

  return (
    <div className="pt-32 min-h-screen bg-gray-50">
      <div className="container">
        <h1 className="text-4xl font-bold mb-8 ml-6">Admin Dashboard</h1>

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
            {activeTab === "dashboard" && <Dashboard />}
            {activeTab === "prayer" && <PrayerTimes />}
            {activeTab === "store" && <Store />}
            {activeTab === "qanda" && <QnA />}
            {activeTab === "events" && <Events />}
            {activeTab === "blog" && <Blog />}
            {activeTab === "news" && <News />}
            {activeTab === "members" && <Members />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
