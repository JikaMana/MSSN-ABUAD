import React from "react";

const Dashboard = () => {
  return (
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
  );
};

export default Dashboard;
