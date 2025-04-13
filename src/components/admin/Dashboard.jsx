import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { GlobalAdminDashboardContext } from "../../context/AdminDashboardFetch";

const Dashboard = () => {
  const {
    numberOfBlogs,
    numberOfEvents,
    numberOfNews,
    numberOfPendingQuestions,
    numberOfProducts,
  } = useContext(GlobalAdminDashboardContext);

  return (
    <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
      <div className="bg-primary/5 rounded-lg p-6 lg:row-span-2 lg:flex flex-col lg:justify-center lg:items-center">
        <h3 className="font-semibold mb-2">Total Members</h3>
        <p className="text-3xl font-bold">-</p>
      </div>
      <div className="bg-primary/5 rounded-lg p-6">
        <h3 className="font-semibold mb-2">Pending Questions</h3>
        <p className="text-3xl font-bold">{numberOfPendingQuestions || 0}</p>
      </div>
      <div className="bg-primary/5 rounded-lg p-6">
        <h3 className="font-semibold mb-2">Available Products</h3>
        <p className="text-3xl font-bold">{numberOfProducts || 0}</p>
      </div>
      <div className="bg-primary/5 rounded-lg p-6">
        <h3 className="font-semibold mb-2">Upcoming Events</h3>
        <p className="text-3xl font-bold">{numberOfEvents || 0}</p>
      </div>
      <div className="bg-primary/5 rounded-lg p-6">
        <h3 className="font-semibold mb-2">Blogs</h3>
        <p className="text-3xl font-bold">{numberOfBlogs || 0}</p>
      </div>
      <div className="bg-primary/5 rounded-lg p-6">
        <h3 className="font-semibold mb-2">News</h3>
        <p className="text-3xl font-bold">{numberOfNews || 0}</p>
      </div>
    </div>
  );
};

export default Dashboard;
