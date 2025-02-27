import React from "react";

const Events = () => {
  return (
    <div className="p-6">
      {/* Header with "Add New Event" Button */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-primary">Events Management</h2>
        <button className="bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded-lg transition-colors">
          Add New Event
        </button>
      </div>
      <p className="text-gray-600 mb-4">
        This section allows you to create, update, or delete events.
      </p>
      {/* Events Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Sample Event Card */}
        <div className="bg-white rounded-xl shadow-lg p-4">
          <h3 className="text-xl font-semibold mb-2">Annual Charity Dinner</h3>
          <p className="text-gray-600 mb-2">
            A special event to raise funds and support community projects.
          </p>
          <p className="text-gray-500 text-sm">Date: 2024-04-15</p>
          <div className="mt-4 flex justify-end gap-2">
            <button className="bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium py-1 px-3 rounded">
              Edit
            </button>
            <button className="bg-red-500 hover:bg-red-600 text-white text-sm font-medium py-1 px-3 rounded">
              Delete
            </button>
          </div>
        </div>
        {/* Repeat event cards or map your event data */}
      </div>
    </div>
  );
};

export default Events;
